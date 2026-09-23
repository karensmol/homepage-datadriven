(async () => {
  const grid = document.querySelector('[data-articles-grid]');
  if (!grid) return;
  try {
    const res = await fetch('/content/articles.json', {cache:'no-store'});
    if (!res.ok) throw new Error('No se pudo cargar articles.json');
    const items = await res.json();
    grid.innerHTML = items.filter(a => a.visible !== false).map(article => {
      const link = article.url
        ? `<a class="card-link" href="${article.url}" ${article.external ? 'target="_blank" rel="noopener"' : ''}>Leer artículo <span>→</span></a>`
        : `<span class="small-note">En preparación</span>`;
      return `<article class="article-card reveal"><div class="meta">${article.category || 'Artículo'}</div><h2>${article.title}</h2><p>${article.excerpt || ''}</p>${link}</article>`;
    }).join('');
    const revealObserver = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting){e.target.classList.add('is-visible'); revealObserver.unobserve(e.target)}}), {threshold:.12});
    grid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  } catch (err) {
    grid.innerHTML = '<p>No fue posible cargar los artículos en este momento.</p>';
  }
})();
