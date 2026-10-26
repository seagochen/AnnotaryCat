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
- `assets/app-icon.png` and `assets/favicon.png`: 256px and 64px derivatives
  of the app repository's `assets/app-default-icon.png`, shared by the header,
  footer, homepage diagram and browser tab. Keep these in sync with the app;
  use `sips -Z 256 <source> --out docs/assets/app-icon.png` and the same command
  with `-Z 64` for `favicon.png`.
- `index.md`: product homepage. Its pictures are app screenshots in
  `assets/screenshots/`, JPEG copies of the app repository's
  `assets/screenshots/*.png` (`sips -s format jpeg -s formatOptions 82 <png>
  --out <jpg>`); the sample images in them are synthetic. Replace them when the
  app's screenshots change. Captions and `alt` text are translated
  (`data-i18n-alt`).
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
