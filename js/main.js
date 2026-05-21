/* =========================================================
   Brique — Main JS (carrossel + FAQ accordion)
   Header / Footer / menu mobile estão em partials.js
========================================================= */
(() => {
  'use strict';

  /* ----- Carrossel imóveis ----- */
  const viewport = document.querySelector('[data-carrossel-viewport]');
  const btnPrev = document.querySelector('[data-carrossel-prev]');
  const btnNext = document.querySelector('[data-carrossel-next]');

  if (viewport && btnPrev && btnNext) {
    const getStep = () => {
      const item = viewport.querySelector('.carrossel__item');
      if (!item) return viewport.clientWidth;
      const style = getComputedStyle(item.parentElement);
      const gap = parseFloat(style.gap) || 0;
      return item.getBoundingClientRect().width + gap;
    };
    btnPrev.addEventListener('click', () => viewport.scrollBy({ left: -getStep(), behavior: 'smooth' }));
    btnNext.addEventListener('click', () => viewport.scrollBy({ left: getStep(), behavior: 'smooth' }));
    viewport.setAttribute('tabindex', '0');
    viewport.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft')  { e.preventDefault(); btnPrev.click(); }
      if (e.key === 'ArrowRight') { e.preventDefault(); btnNext.click(); }
    });
  }

  /* ----- FAQ Accordion ----- */
  document.querySelectorAll('[data-faq-item]').forEach((item) => {
    const trigger = item.querySelector('[data-faq-trigger]');
    if (!trigger) return;
    trigger.addEventListener('click', () => {
      const isOpen = item.classList.toggle('is-open');
      trigger.setAttribute('aria-expanded', String(isOpen));
    });
  });
})();
