const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { chromium } = require('playwright');

const root = 'content';
const output = 'source-pdfs';
const urls = new Map();
function scan(dir) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, item.name);
    if (item.isDirectory()) scan(p);
    else if (item.name === '_index.md') {
      const text = fs.readFileSync(p, 'utf8');
      const matches = text.matchAll(/\]\((https?:\/\/[^\s)]+)\)/g);
      for (const m of matches) {
        try {
          const u = new URL(m[1].replace(/&amp;/g, '&'));
          if (!['http:', 'https:'].includes(u.protocol)) continue;
          const key = crypto.createHash('sha256').update(u.href).digest('hex').slice(0, 20);
          if (!urls.has(key)) urls.set(key, { url: u.href, id: key, reports: [] });
          urls.get(key).reports.push(p);
        } catch {}
      }
    }
  }
}
scan(root);
fs.mkdirSync(output, { recursive: true });
const browser = await chromium.launch({ headless: true });
const entries = [];
for (const item of urls.values()) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 }, locale: 'sv-SE' });
  const record = { ...item, captured_at: new Date().toISOString(), status: 'failed' };
  try {
    const response = await page.goto(item.url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    record.http_status = response?.status() ?? null;
    if (!response || response.status() >= 400) throw new Error('HTTP ' + record.http_status);
    await page.waitForTimeout(1800);
    const filename = item.id + '.pdf';
    await page.pdf({ path: path.join(output, filename), format: 'A4', printBackground: true, preferCSSPageSize: true, timeout: 30000 });
    record.file = filename;
    record.sha256 = crypto.createHash('sha256').update(fs.readFileSync(path.join(output, filename))).digest('hex');
    record.status = 'saved';
  } catch (e) {
    record.error = String(e.message).slice(0, 250);
  } finally {
    await page.close();
  }
  entries.push(record);
}
await browser.close();
fs.writeFileSync(path.join(output, 'manifest.json'), JSON.stringify({ generated_at: new Date().toISOString(), sources: entries }, null, 2));
console.log('PDF saved:', entries.filter(e => e.status === 'saved').length, 'of', entries.length);
