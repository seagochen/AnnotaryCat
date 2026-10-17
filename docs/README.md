---
layout: null
sitemap: false
---

# Website maintenance

GitHub Pages builds this directory with Jekyll. The public base path is
`/AnnotaryCat`; use Liquid's `relative_url` filter for internal links
and assets so the site works under that path.

- `_layouts/default.html`: shared navigation, document layout and footer.
- `assets/site.css`: responsive styles, with no external fonts or scripts.
- `assets/mark.svg`: website mark.
- `index.md`: product homepage; the workbench illustration is HTML/CSS and is
  explicitly labelled as an illustration, not an app screenshot.
- `privacy.md`, `terms.md`, `support.md`: bilingual resource pages. Their
  existing permalinks are part of the app's public links; keep them stable.

Policy/support source text also lives in the app repository's
`packaging/store/`. When synchronizing it, preserve the website front matter,
shared layout and homepage design. The terms remain a draft until reviewed.

For a full local build, install Jekyll and run `jekyll serve --source docs`.
Check the homepage and all three resource pages at desktop and phone widths
before publishing. Pushes to the configured GitHub Pages branch publish the
site; local edits alone do not.
