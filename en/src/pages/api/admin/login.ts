import type { APIRoute } from 'astro';
import { adminToken } from '../../../lib/auth';

export const prerender = false;

const env = import.meta.env as Record<string, string | undefined>;

export const POST: APIRoute = async ({ request }) => {
  let body: any;
  try { body = await request.json(); } catch { body = {}; }
  const password = body.password ?? '';
  if (password === (env.ADMIN_PASSWORD ?? '')) {
    const token = adminToken();
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Set-Cookie': `admin_session=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400`,
      },
    });
  }
  return new Response(JSON.stringify({ error: 'Invalid password' }), { status: 401, headers: { 'Content-Type': 'application/json' } });
};
