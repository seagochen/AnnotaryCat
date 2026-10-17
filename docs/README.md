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
- `privacy.md`, `terms.md`, `support.md`: multilingual resource pages. Their
  existing permalinks are part of the app's public links; keep them stable.

Policy/support source text also lives in the app repository's
`packaging/store/`. When synchronizing it, preserve the website front matter,
shared layout and homepage design. The terms remain a draft until reviewed.

For a full local build, install Jekyll and run `jekyll serve --source docs`.
Check the homepage and all three resource pages at desktop and phone widths
before publishing. Pushes to the configured GitHub Pages branch publish the
site; local edits alone do not.

## Languages

English is the default. The header selector offers English, Simplified Chinese,
Japanese, Korean, Spanish, Portuguese and Russian. Selection is stored locally;
`?lang=ja` (or another language code) overrides it and can be shared.

- `assets/translations.json`: navigation, homepage, accessibility labels and
  document headings. Keep the same keys in all seven dictionaries.
- `_includes/translations/<page>.<language>.md`: complete document bodies.
  English and Chinese were preserved from the original bilingual pages.
- `assets/language-init.js` and `assets/i18n.js`: language selection and local
  text replacement. No external service is used. If JavaScript is disabled or
  translation loading fails, the English HTML remains readable.

When changing policy/support text, update all seven language versions. Keep the
subscription draft banner until the terms are finalized.
