/* Runs before the stylesheet finishes painting to select document content. */
(() => {
  const supported = ['en', 'zh-CN', 'ja', 'ko', 'es', 'pt', 'ru'];
  let saved;
  try { saved = localStorage.getItem('annotarycat-language'); } catch { /* Storage is optional. */ }
  const requested = new URLSearchParams(location.search).get('lang');
  const language = supported.includes(requested) ? requested : supported.includes(saved) ? saved : 'en';
  document.documentElement.lang = language;
  document.documentElement.dataset.language = language;
})();
