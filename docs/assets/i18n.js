/* Static, same-origin translations. No external service or data upload. */
(() => {
  const dictionaryUrl = new URL('translations.json', document.currentScript.src);
  const select = document.getElementById('language-select');
  const root = document.documentElement;
  const titles = { '/privacy/': 'privacy', '/terms/': 'terms', '/support/': 'supportFaq' };

  function apply(language, dictionaries, persist = false) {
    const dictionary = dictionaries[language] || dictionaries.en;
    root.lang = language;
    root.dataset.language = language;
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const value = dictionary[element.dataset.i18n];
      if (typeof value === 'string') element.textContent = value;
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
      const value = dictionary[element.dataset.i18nAlt];
      if (typeof value === 'string') element.setAttribute('alt', value);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(element => {
      const value = dictionary[element.dataset.i18nAria];
      if (typeof value === 'string') element.setAttribute('aria-label', value);
    });
    select.value = language;
    select.setAttribute('aria-label', dictionary.language);
    const key = Object.keys(titles).find(path => location.pathname.endsWith(path));
    document.title = key ? `${dictionary[titles[key]]} — AnnotaryCat` : 'AnnotaryCat';
    if (persist) {
      try { localStorage.setItem('annotarycat-language', language); } catch { /* Private browsing still works. */ }
      const url = new URL(location.href);
      url.searchParams.set('lang', language);
      try { history.replaceState(null, '', url); } catch { /* File previews may disallow history changes. */ }
    }
    // Preserve an explicit selection across navigation, including when storage is blocked.
    document.querySelectorAll('a[href]').forEach(link => {
      const url = new URL(link.href, location.href);
      if (url.origin === location.origin && !link.getAttribute('href').startsWith('#')) {
        url.searchParams.set('lang', language);
        link.href = url.href;
      }
    });
  }

  fetch(dictionaryUrl)
    .then(response => {
      if (!response.ok) throw new Error('Translation file unavailable');
      return response.json();
    })
    .then(dictionaries => {
      const language = Object.hasOwn(dictionaries, root.dataset.language) ? root.dataset.language : 'en';
      apply(language, dictionaries);
      select.addEventListener('change', () => apply(select.value, dictionaries, true));
    })
    .catch(() => {
      // English is in the HTML, so all pages remain readable if translation loading fails.
      root.lang = 'en';
      root.dataset.language = 'en';
      select.value = 'en';
      select.disabled = true;
      select.title = 'Translations could not load. Reload to try again.';
    });
})();
