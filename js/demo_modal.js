document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('demo-modal');
  const iframe = document.getElementById('demo-iframe');
  if (!modal || !iframe) return;

  function openDemo(url) {
    if (!url) return;
    iframe.src = url;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeDemo() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    iframe.src = 'about:blank';
    document.body.style.overflow = '';
  }

  modal.addEventListener('click', (e) => {
    if (e.target.dataset.close === 'true') closeDemo();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDemo();
  });

  // Hook feature buttons
  document.querySelectorAll('.glass-card .btn-holo.btn-small').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const url = btn.getAttribute('href');
      openDemo(url);
    });
  });

  // Hook demo cards (grid with iframes)
  document.querySelectorAll('.demo-card').forEach(card => {
    const innerIframe = card.querySelector('iframe');
    const url = innerIframe ? innerIframe.getAttribute('src') : null;
    card.addEventListener('click', (e) => {
      e.preventDefault();
      openDemo(url);
    });
  });
});
