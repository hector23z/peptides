import type { APIRoute } from 'astro';
import { getOrder, submitTxHash } from '../../../lib/db';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  let body: any;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  }

  const { orderId, tx_hash } = body;
  if (!orderId || !tx_hash || typeof tx_hash !== 'string' || tx_hash.length < 10) {
    return new Response(JSON.stringify({ error: 'Missing orderId or tx_hash' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  }

  const order = getOrder(orderId);
  if (!order) {
    return new Response(JSON.stringify({ error: 'Order not found' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
  }

  submitTxHash(orderId, tx_hash.trim());

  return new Response(
    JSON.stringify({ ok: true, orderId, status: 'awaiting_verification' }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
};
