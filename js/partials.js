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
          <a href="index.html" class="site-nav__link">Home</a>
          <a href="como-funciona.html" class="site-nav__link">Como Funciona</a>
          <a href="quem-somos.html" class="site-nav__link">Quem Somos</a>
          <a href="contato.html" class="site-nav__link">Fale Conosco</a>
          <a href="https://app.briquebr.com.br/auth/signUp" class="btn btn-primary">Cadastre-se</a>
          <a href="https://app.briquebr.com.br/auth/signIn" class="btn btn-outline-dark">Login</a>
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
