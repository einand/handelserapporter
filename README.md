# Händelserapporter

Publika, källgranskade och versionshanterade incidentrapporter, publicerade med **Hugo** och **GitHub Pages**.

- [Webbplats](https://einand.github.io/handelserapporter/)
- [Visit Group / iTicket](https://einand.github.io/handelserapporter/visit/)

## Innehåll och publicering

Den fullständiga aktuella rapporten ligger i `visit/index.md`. Historiska rapportversioner ligger i `visit/historik/`. De är Markdown-källfiler som **inte flyttas eller skrivs om** vid bygge.

GitHub Actions installerar Hugo, kopierar källfilerna till `hugo-content/` under bygget, genererar mobilanpassad HTML i `public/` och publicerar via GitHub Pages.

- `hugo.toml` – webbplatskonfiguration
- `layouts/partials/shell.html` – gemensam sidmall
- `layouts/_default/` – sidtyper
- `static/css/site.css` – design
- `.github/workflows/pages.yml` – bygge och publicering

### Lokal byggning

```bash
mkdir -p hugo-content/visit/historik
cp index.md hugo-content/_index.md
cp visit/index.md hugo-content/visit/_index.md
cp visit/historik/*.md hugo-content/visit/historik/
hugo --contentDir hugo-content --destination public
```

Automatiska bevakningar ska uppdatera rapportens Markdown och versionsarkiv, inte Hugo-mallarna.
