/* =========================================================
   Brique — Header e Footer compartilhados
   Injeta em qualquer página que tenha:
   <div id="site-header"></div>  e  <div id="site-footer"></div>
========================================================= */
(() => {
  'use strict';

  const headerHTML = `
    <header class="site-header">
      <div class="site-header__inner">
        <a href="index.html" class="site-header__logo" aria-label="Brique">
          <img src="assets/logos/brique.png" alt="Brique">
        </a>
        <button class="site-header__burger" aria-label="Abrir menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <nav class="site-nav" aria-label="Principal">
          <a href="como-funciona.html" class="site-nav__link">Como Funciona</a>
          <a href="quem-somos.html" class="site-nav__link">Quem Somos</a>
          <a href="contato.html" class="site-nav__link">Fale Conosco</a>
          <a href="#cadastro" class="btn btn-primary">Cadastre-se</a>
          <a href="#login" class="btn btn-outline-dark">Login</a>
        </nav>
      </div>
    </header>
  `;

  const footerHTML = `
    <footer class="site-footer">
      <div class="footer__inner">
        <div class="footer__brand">
          <div class="footer__brand-logo">
            <img src="assets/logos/brique.png" alt="Brique">
          </div>
          <p class="footer__tagline">A sua Tokenizadora de Imóveis</p>
          <h4 class="footer__heading">Redes Sociais</h4>
          <div class="footer__social">
            <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
            <a href="#" aria-label="Spotify"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.59 14.41c-.2.32-.61.42-.93.22-2.54-1.55-5.74-1.9-9.51-1.04-.36.08-.72-.14-.81-.5-.08-.36.14-.72.5-.81 4.13-.94 7.67-.54 10.52 1.2.32.2.42.61.23.93zm1.22-2.73c-.24.39-.76.52-1.16.27-2.91-1.79-7.34-2.31-10.78-1.27-.45.14-.92-.12-1.06-.57-.13-.45.12-.92.57-1.06 3.94-1.2 8.83-.62 12.16 1.43.4.25.52.77.27 1.2zm.11-2.84C14.51 8.83 8.86 8.62 5.69 9.58c-.54.16-1.11-.14-1.27-.68-.16-.54.14-1.11.68-1.27C8.74 6.55 14.99 6.8 18.78 9.06c.49.29.65.92.36 1.41-.29.49-.92.65-1.41.37z"/></svg></a>
            <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg></a>
            <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"/></svg></a>
          </div>
        </div>
        <div class="footer__media-block">
          <h4 class="footer__heading">Brique na Mídia</h4>
          <div class="footer__media">
            <img src="assets/media/media-1.png" alt="">
            <img src="assets/media/media-2.png" alt="">
            <img src="assets/media/media-3.png" alt="">
            <img src="assets/media/media-4.png" alt="">
          </div>
        </div>
        <div class="footer__info">
          <div class="footer__contact">
            <h4 class="footer__heading">Contatos</h4>
            <p>Email: contato@briquebr.com.br</p>
            <p>Telefone: (21) 2274-4898</p>
          </div>
          <div class="footer__address">
            <h4 class="footer__heading">Local</h4>
            <p>Avenida Oscar Niemeyer,</p>
            <p>1252, bloco 2</p>
            <p>Rio de Janeiro, RJ</p>
          </div>
        </div>
      </div>
      <div class="footer__disclaimer">
        <p>
          A Brique não garante rentabilidade ao cliente. O investimento em imóveis tem riscos e variação de preços.
          A Brique não garante o aluguel a ser recebido. Em caso de vacância, o usuário terá que arcar com todos os
          custos daquele imóvel. Pelas regras da plataforma, caso o usuário se torne inadimplente por mais de 60 dias,
          será obrigado a vender suas frações do imóvel através da plataforma ao preço que houver comprador.
        </p>
      </div>
      <div class="footer__bottom">
        <p class="footer__copy">© 2025 Brique Ltda.</p>
        <nav class="footer__legal">
          <a href="#">Políticas de Privacidade</a>
          <a href="#">Políticas de Cookie</a>
          <a href="#">Termos e Condições</a>
        </nav>
      </div>
    </footer>
  `;

  const headerHost = document.getElementById('site-header');
  const footerHost = document.getElementById('site-footer');
  if (headerHost) headerHost.outerHTML = headerHTML;
  if (footerHost) footerHost.outerHTML = footerHTML;

  // After injection, bind menu burger
  const burger = document.querySelector('.site-header__burger');
  const nav = document.querySelector('.site-nav');
  if (burger && nav) {
    burger.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      burger.classList.toggle('is-open', isOpen);
      burger.setAttribute('aria-expanded', String(isOpen));
    });
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if (nav.classList.contains('is-open')) {
          nav.classList.remove('is-open');
          burger.classList.remove('is-open');
          burger.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // Highlight active link based on URL
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav__link').forEach(a => {
    const href = a.getAttribute('href');
    if (href && href === path) a.classList.add('is-active');
  });
})();
