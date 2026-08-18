import type { APIRoute } from 'astro';
import { createOrder } from '../../lib/db';
import { getWallet } from '../../lib/wallets';

export const prerender = false;

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

  const wallet = getWallet(cryptoMethod);
  if (!wallet) {
    return new Response(JSON.stringify({ error: 'Payment method temporarily unavailable' }), { status: 503, headers: { 'Content-Type': 'application/json' } });
  }

  const orderId = `PL-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

  createOrder({
    id: orderId,
    email,
    nombre,
    direccion,
    items,
    total: numericTotal,
    crypto: cryptoMethod,
    payment_id: null,
  });

  return new Response(
    JSON.stringify({
      orderId,
      payment: {
        method: cryptoMethod,
        address: wallet.address,
        network: wallet.network,
        amountUsd: numericTotal,
        confirmations: wallet.confirmations,
      },
    }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
};
