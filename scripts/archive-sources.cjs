const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { chromium } = require('playwright');

const root = 'content';
const archiveDir = 'static/kallor';
const baseUrl = '/handelserapporter/kallor/';
const begin = '<!-- PDF-ARKIV-START -->';
const end = '<!-- PDF-ARKIV-SLUT -->';
fs.mkdirSync(archiveDir, { recursive: true });
const sources = new Map();
const reports = new Map();

function scan(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const filename = path.join(dir, entry.name);
    if (entry.isDirectory()) scan(filename);
    else if (entry.name === '_index.md') {
      const text = fs.readFileSync(filename, 'utf8');
      const urls = [];
      for (const match of text.matchAll(/\]\((https?:\/\/[^\s)]+)\)/g)) {
        try {
          const url = new URL(match[1].replace(/&amp;/g, '&'));
          if (!['http:', 'https:'].includes(url.protocol)) continue;
          if (url.hostname === 'github.com' || url.hostname === 'einand.github.io') continue;
          const id = crypto.createHash('sha256').update(url.href).digest('hex').slice(0, 20);
          if (!sources.has(id)) sources.set(id, { id, url: url.href });
          if (!urls.includes(id)) urls.push(id);
        } catch {}
      }
      reports.set(filename, urls);
    }
  }
}
scan(root);

(async () => {
  const browser = await chromium.launch({ headless: true });
  const result = [];
  for (const { id, url } of sources.values()) {
    const pdf = path.join(archiveDir, id + '.pdf');
    const meta = path.join(archiveDir, id + '.json');
    if (fs.existsSync(pdf) && fs.existsSync(meta)) {
      result.push(JSON.parse(fs.readFileSync(meta, 'utf8')));
      continue;
    }
    const record = { id, url, captured_at: new Date().toISOString(), status: 'failed' };
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 }, locale: 'sv-SE' });
    try {
      const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 25000 });
      record.http_status = response?.status() ?? null;
      if (!response || record.http_status >= 400) throw new Error('HTTP ' + record.http_status);
      await page.pdf({ path: pdf, format: 'A4', printBackground: true, timeout: 25000 });
      const bytes = fs.statSync(pdf).size;
      if (bytes > 40 * 1024 * 1024) throw new Error('PDF larger than 40 MB');
      record.sha256 = crypto.createHash('sha256').update(fs.readFileSync(pdf)).digest('hex');
      record.status = 'saved';
    } catch (error) {
      record.error = String(error.message).slice(0, 250);
      if (fs.existsSync(pdf)) fs.unlinkSync(pdf);
    } finally {
      await page.close();
    }
    fs.writeFileSync(meta, JSON.stringify(record, null, 2) + '\n');
    result.push(record);
  }
  await browser.close();
  const byId = new Map(result.map(r => [r.id, r]));
  for (const [filename, ids] of reports) {
    const current = fs.readFileSync(filename, 'utf8');
    const entries = ids.map(id => byId.get(id)).filter(r => r && r.status === 'saved');
    const lines = entries.map(r => '- [PDF-kopia av källa](' + baseUrl + r.id + '.pdf) – ' + r.url + ' (hämtad ' + r.captured_at.slice(0, 10) + ')');
    const block = lines.length ? begin + '\n\n## Arkiverade källor (PDF)\n\n' + lines.join('\n') + '\n\n' + end : '';
    const start = current.indexOf(begin);
    const finish = current.indexOf(end);
    let updated = current;
    if (start !== -1 && finish !== -1 && finish > start) {
      updated = current.slice(0, start).trimEnd() + (block ? '\n\n' + block : '') + current.slice(finish + end.length);
    } else if (block) {
      updated = current.trimEnd() + '\n\n' + block + '\n';
    }
    if (updated !== current) fs.writeFileSync(filename, updated);
  }
  console.log('PDF archived:', result.filter(r => r.status === 'saved').length, 'of', result.length);
})().catch(error => { console.error(error); process.exitCode = 1; });
