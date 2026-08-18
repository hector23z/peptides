import type { APIRoute } from 'astro';
import crypto from 'node:crypto';
import { createOrder } from '../../lib/db';
import { createInvoice } from '../../lib/nowpayments';

export const prerender = false;

const SITE_URL = process.env.SITE_URL ?? 'https://peptidelab.example';

export const POST: APIRoute = async ({ request }) => {
  let body: any;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  }

  const { email, nombre, direccion, items, total, crypto: cryptoMethod } = body;

  if (!email || !nombre || !direccion || !Array.isArray(items) || items.length === 0) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  }
  const numericTotal = Number(total);
  if (!Number.isFinite(numericTotal) || numericTotal <= 0) {
    return new Response(JSON.stringify({ error: 'Invalid total' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  }
  const allowedCrypto = ['USDT_TRC20', 'USDC', 'BTC', 'LTC', 'XMR'];
  if (!allowedCrypto.includes(cryptoMethod)) {
    return new Response(JSON.stringify({ error: 'Unsupported crypto method' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  }

  const id = crypto.randomUUID();
  const orderId = `PL-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

  let invoice;
  try {
    invoice = await createInvoice({
      price_amount: numericTotal,
      price_currency: 'USD',
      order_id: orderId,
      order_description: `PeptideLab order ${orderId}`,
      ipn_callback_url: `${SITE_URL}/api/webhooks/nowpayments`,
      success_url: `${SITE_URL}/checkout/success`,
      cancel_url: `${SITE_URL}/checkout`,
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: 'Payment provider error', detail: err?.message ?? 'unknown' }), { status: 502, headers: { 'Content-Type': 'application/json' } });
  }

  createOrder({
    id,
    email,
    nombre,
    direccion,
    items,
    total: numericTotal,
    crypto: cryptoMethod,
    payment_id: invoice.id ?? null,
  });

  return new Response(
    JSON.stringify({ orderId, payment_id: invoice.id ?? null, invoice_url: invoice.invoice_url ?? null }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
};
