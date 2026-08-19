import crypto from 'node:crypto';

const API_KEY = process.env.NOWPAYMENTS_API_KEY ?? '';
const IPN_SECRET = process.env.NOWPAYMENTS_IPN_SECRET ?? '';
const API_BASE = 'https://api.nowpayments.io/v1';

export interface InvoiceResult {
  id: string;
  invoice_url: string;
  payment_status?: string;
  [key: string]: unknown;
}

export async function createInvoice(opts: {
  price_amount: number;
  price_currency: string;
  order_id: string;
  order_description: string;
  ipn_callback_url: string;
  success_url: string;
  cancel_url: string;
}): Promise<InvoiceResult> {
  const res = await fetch(`${API_BASE}/invoice`, {
    method: 'POST',
    headers: {
      'x-api-key': API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(opts),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`NOWPayments invoice failed (${res.status}): ${text}`);
  }
  return res.json();
}

export function verifyWebhookSignature(rawBody: string, signature: string | null): boolean {
  if (!IPN_SECRET || !signature) return false;
  const hmac = crypto.createHmac('sha512', IPN_SECRET);
  hmac.update(rawBody, 'utf8');
  const expected = hmac.digest('hex');
  return expected === signature;
}

// Map NOWPayments payment_status to our order status
export function mapPaymentStatus(status: string): string {
  switch (status) {
    case 'waiting':
    case 'confirming':
    case 'partially_paid':
      return 'pending';
    case 'confirmed':
    case 'finished':
      return 'paid';
    case 'failed':
    case 'expired':
    case 'refunded':
      return 'cancelled';
    default:
      return 'pending';
  }
}
