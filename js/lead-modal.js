/* =========================================================
   Brique — Modal de captura de lead
   Acionado por qualquer elemento [data-open-lead]
   ou pelos botões "Cadastre-se" do header e CTAs com href="#cadastro".
========================================================= */
import { submitLead } from './supabase.js';

const modalHTML = `
  <div class="lead-modal" id="lead-modal" role="dialog" aria-modal="true" aria-labelledby="lead-modal-title" hidden>
    <div class="lead-modal__backdrop" data-lead-close></div>
    <div class="lead-modal__panel">
      <button class="lead-modal__close" aria-label="Fechar" data-lead-close>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>

      <h2 id="lead-modal-title" class="lead-modal__title">Cadastre-se agora</h2>
      <p class="lead-modal__subtitle">Deixe seus dados e nossa equipe entrará em contato.</p>

      <form class="lead-form" id="lead-form" novalidate>
        <label class="lead-form__field">
          <span>Nome completo</span>
          <input type="text" name="nome" required autocomplete="name">
        </label>
        <label class="lead-form__field">
          <span>E-mail</span>
          <input type="email" name="email" required autocomplete="email">
        </label>
        <label class="lead-form__field">
          <span>WhatsApp</span>
          <input type="tel" name="whatsapp" autocomplete="tel" placeholder="(00) 00000-0000">
        </label>

        <button type="submit" class="btn btn-primary lead-form__submit">Enviar cadastro</button>

        <p class="lead-form__msg" data-lead-msg></p>
      </form>
    </div>
  </div>
`;

let lastTrigger = null;
let modal, form, msgEl, submitBtn;

function ensureMounted() {
  if (modal) return;
  document.body.insertAdjacentHTML('beforeend', modalHTML);
  modal = document.getElementById('lead-modal');
  form = document.getElementById('lead-form');
  msgEl = form.querySelector('[data-lead-msg]');
  submitBtn = form.querySelector('.lead-form__submit');

  modal.addEventListener('click', (e) => {
    if (e.target.matches('[data-lead-close]')) close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hasAttribute('hidden')) close();
  });

  form.addEventListener('submit', onSubmit);
}

export function open(triggerEl) {
  ensureMounted();
  lastTrigger = triggerEl || null;
  msgEl.textContent = '';
  msgEl.className = 'lead-form__msg';
  form.reset();
  modal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
  setTimeout(() => modal.querySelector('input[name="nome"]').focus(), 50);
}

export function close() {
  if (!modal) return;
  modal.setAttribute('hidden', '');
  document.body.style.overflow = '';
  if (lastTrigger && lastTrigger.focus) lastTrigger.focus();
}

async function onSubmit(e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());

  if (!data.nome || !data.email) {
    setMsg('Preencha nome e e-mail.', 'error');
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = 'Enviando...';
  setMsg('', '');

  try {
    await submitLead({
      nome: data.nome,
      email: data.email,
      whatsapp: data.whatsapp,
      source: lastTrigger?.dataset?.source || location.pathname,
    });
    setMsg('Cadastro enviado! Em breve entraremos em contato.', 'success');
    form.reset();
    setTimeout(close, 1800);
  } catch (err) {
    console.error(err);
    setMsg('Não foi possível enviar agora. Tente novamente em instantes.', 'error');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Enviar cadastro';
  }
}

function setMsg(text, kind) {
  msgEl.textContent = text;
  msgEl.className = 'lead-form__msg' + (kind ? ` is-${kind}` : '');
}

/* ----- Bind triggers ----- */
function bindTriggers() {
  // Header "Cadastre-se" (botão primary)
  document.querySelectorAll('a.btn-primary, a[href="#cadastro"], [data-open-lead]').forEach((el) => {
    // Skip CTAs com data-no-modal (ex: button submit dentro do form de contato)
    if (el.dataset.noModal !== undefined) return;
    el.addEventListener('click', (e) => {
      e.preventDefault();
      open(el);
    });
  });
}

// Run on load + after partials inject (header is injected by partials.js)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bindTriggers);
} else {
  bindTriggers();
}
// Re-bind shortly after to catch elements injected by partials.js
setTimeout(bindTriggers, 50);
