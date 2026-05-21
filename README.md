# Brique — Site institucional

Site institucional da Brique, plataforma de tokenização de imóveis. **HTML/CSS/JS puro**, sem build, sem frameworks.

## Estrutura

```
brique-site/
├── index.html             # Home
├── quem-somos.html        # Quem Somos
├── como-funciona.html     # Como Funciona (timeline 5 etapas)
├── contato.html           # Fale Conosco (com form Supabase)
├── faq.html               # FAQ (accordion)
├── css/
│   └── style.css          # Tokens + componentes
├── js/
│   ├── partials.js        # Header e Footer injetados em todas as páginas
│   ├── main.js            # Carrossel + FAQ accordion
│   ├── supabase.js        # Client Supabase + submitLead()
│   └── lead-modal.js      # Modal global de captura de lead
└── assets/
    ├── logos/
    ├── icons/
    ├── images/
    ├── partners/
    └── media/
```

## Stack

- HTML5 / CSS3 (CSS variables, grid, flexbox)
- JavaScript vanilla (ES modules via `<script type="module">`)
- [Supabase JS](https://supabase.com/docs/reference/javascript) (carregado via CDN esm.sh)
- Fonte: [Raleway](https://fonts.google.com/specimen/Raleway) via Google Fonts

## Backend — Supabase

Os formulários do site (modal "Cadastre-se" + form na página Contato) gravam leads na tabela `public.leads` do projeto Supabase **Sites e landing pages** (`kisteehhsgnyufyrvxxh`).

Schema da tabela `leads`:
- `id` (uuid) — gerado automaticamente
- `page_slug` (text) — FK pra `pages.slug`, sempre `brique` neste site
- `nome`, `email`, `whatsapp` — dados do formulário
- `metadata` (jsonb) — `{ source, referrer, user_agent, message? }`
- `created_at` (timestamptz)

RLS: anon só pode **INSERT** (não SELECT/UPDATE/DELETE). Configurável em [`supabase/migrations/`](https://supabase.com/dashboard/project/kisteehhsgnyufyrvxxh/database/policies).

## Rodar localmente

```bash
python3 -m http.server 8765
# http://localhost:8765
```

## Deploy

Hospedado no **GitHub Pages** servindo do branch `main` na raiz.

## Configurar Supabase em outro ambiente

Edite `js/supabase.js`:

```js
export const SUPABASE_URL = 'https://<seu-projeto>.supabase.co';
export const SUPABASE_PUBLISHABLE_KEY = '<seu-anon-key>';
export const PAGE_SLUG = 'brique';
```
