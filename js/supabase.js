/* =========================================================
   Brique — Supabase client + lead capture
========================================================= */
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

export const SUPABASE_URL = 'https://kisteehhsgnyufyrvxxh.supabase.co';
// Legacy anon JWT key (compatível com policies por role 'anon')
export const SUPABASE_PUBLISHABLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtpc3RlZWhoc2dueXVmeXJ2eHhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxNTUwMjYsImV4cCI6MjA5NDczMTAyNn0.lgWN7EkRvC9bQf97s6uaTb2a0yCmBo1US8aFbDCt_RM';
export const PAGE_SLUG = 'brique';

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: { persistSession: false },
});

/**
 * Submete um lead pra tabela `public.leads`.
 * @param {{nome?:string,email?:string,whatsapp?:string,source?:string,message?:string}} payload
 */
export async function submitLead(payload) {
  const { nome, email, whatsapp, source, message, ...rest } = payload || {};

  const metadata = {
    source: source || (typeof location !== 'undefined' ? location.pathname : 'unknown'),
    referrer: typeof document !== 'undefined' ? document.referrer || null : null,
    user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : null,
    ...(message ? { message } : {}),
    ...rest,
  };

  // Não chamamos .select() depois do .insert() porque o anon não tem permissão
  // de leitura (RLS USING false) — apenas inserir.
  const { error } = await supabase
    .from('leads')
    .insert({
      page_slug: PAGE_SLUG,
      nome: nome || null,
      email: email || null,
      whatsapp: whatsapp || null,
      metadata,
    });

  if (error) throw error;
  return { ok: true };
}
