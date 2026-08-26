import type { APIRoute } from 'astro';
import { trackEvent } from '../../lib/db';

export const prerender = false;

const ALLOWED = new Set(['add_to_cart', 'remove_from_cart', 'view_cart', 'begin_checkout', 'order_placed', 'tx_submitted']);

export const POST: APIRoute = async ({ request }) => {
  let body: any;
  try { body = await request.json(); } catch { return new Response(JSON.stringify({ ok: false }), { status: 400, headers: { 'Content-Type': 'application/json' } }); }

  const name = String(body.name || '');
  if (!ALLOWED.has(name)) return new Response(JSON.stringify({ ok: false }), { status: 400, headers: { 'Content-Type': 'application/json' } });

  const path = String(body.path || request.headers.get('referer') || '/');
  const meta = String(body.meta ?? '').slice(0, 200);
  trackEvent(name, path.slice(0, 500), meta);
  return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'Content-Type': 'application/json' } });
};