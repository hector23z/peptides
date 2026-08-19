import type { APIRoute } from 'astro';
import { getOrderByPaymentId, updateOrderStatus } from '../../../lib/db';
import { verifyWebhookSignature, mapPaymentStatus } from '../../../lib/nowpayments';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const rawBody = await request.text();
  const signature = request.headers.get('x-nowpayments-sig');

  if (!verifyWebhookSignature(rawBody, signature)) {
    return new Response('Invalid signature', { status: 401 });
  }

  let data: any;
  try {
    data = JSON.parse(rawBody);
  } catch {
    return new Response('Invalid JSON', { status: 400 });
  }

  const paymentId = data.payment_id ?? data.payment?.payment_id;
  const status = mapPaymentStatus(data.payment_status ?? data.payment?.payment_status ?? '');
  const txHash = data.payment?.txid ?? data.txid ?? null;

  if (paymentId) {
    const order = getOrderByPaymentId(String(paymentId));
    if (order) {
      updateOrderStatus(order.id, status, txHash ? String(txHash) : null);
    }
  }

  return new Response('OK', { status: 200 });
};
