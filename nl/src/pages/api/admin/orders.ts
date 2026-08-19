import type { APIRoute } from 'astro';
import { isAdmin } from '../../../lib/auth';
import { markShipped } from '../../../lib/db';

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies }) => {
  if (!isAdmin(cookies.get('admin_session')?.value)) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: { 'Content-Type': 'application/json' } });
  }
  let body: any;
  try { body = await request.json(); } catch { body = {}; }
  const id = body.id;
  if (!id) {
    return new Response(JSON.stringify({ error: 'Missing order id' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  }
  markShipped(String(id));
  return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'Content-Type': 'application/json' } });
};
