import Database from 'better-sqlite3';
import fs from 'node:fs';
import path from 'node:path';

export interface Order {
  id: string;
  email: string;
  nombre: string;
  direccion: string;
  items: string;
  total: number;
  crypto: string;
  status: string;
  tx_hash: string | null;
  payment_id: string | null;
  created_at: string;
}

const env = import.meta.env as Record<string, string | undefined>;
const dataDir = env.DATA_DIR
  ? path.resolve(env.DATA_DIR)
  : path.resolve(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

const db = new Database(path.join(dataDir, 'orders.db'));
db.pragma('journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS orders (
    id TEXT PRIMARY KEY,
    email TEXT,
    nombre TEXT,
    direccion TEXT,
    items TEXT,
    total REAL,
    crypto TEXT,
    status TEXT,
    tx_hash TEXT,
    payment_id TEXT,
    created_at TEXT
  );
`);

export function createOrder(o: {
  id: string; email: string; nombre: string; direccion: string;
  items: unknown[]; total: number; crypto: string; payment_id: string | null;
}) {
  const stmt = db.prepare(
    `INSERT INTO orders (id, email, nombre, direccion, items, total, crypto, status, tx_hash, payment_id, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, 'pending', NULL, ?, ?)`
  );
  stmt.run(o.id, o.email, o.nombre, o.direccion, JSON.stringify(o.items), o.total, o.crypto, o.payment_id, new Date().toISOString());
}

export function getOrder(id: string): Order | undefined {
  return db.prepare('SELECT * FROM orders WHERE id = ?').get(id) as Order | undefined;
}

export function getOrderByPaymentId(paymentId: string): Order | undefined {
  return db.prepare('SELECT * FROM orders WHERE payment_id = ?').get(paymentId) as Order | undefined;
}

export function updateOrderStatus(id: string, status: string, txHash: string | null = null) {
  db.prepare('UPDATE orders SET status = ?, tx_hash = COALESCE(?, tx_hash) WHERE id = ?').run(status, txHash, id);
}

export function markShipped(id: string) {
  db.prepare("UPDATE orders SET status = 'shipped' WHERE id = ?").run(id);
}

export function submitTxHash(id: string, txHash: string) {
  db.prepare("UPDATE orders SET tx_hash = ?, status = 'awaiting_verification' WHERE id = ?").run(txHash, id);
}

export function verifyPayment(id: string) {
  db.prepare("UPDATE orders SET status = 'paid' WHERE id = ?").run(id);
}

export function listOrders(): Order[] {
  return db.prepare('SELECT * FROM orders ORDER BY created_at DESC').all() as Order[];
}
// ---- Funnel events (add_to_cart, begin_checkout, order_placed, tx_submitted) ----
export interface TrackEvent {
  id: number;
  name: string;
  path: string;
  meta: string;
  created_at: string;
}

db.exec(`
  CREATE TABLE IF NOT EXISTS events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    path TEXT,
    meta TEXT,
    created_at TEXT
  );
`);

export function trackEvent(name: string, path: string, meta: string = '') {
  db.prepare('INSERT INTO events (name, path, meta, created_at) VALUES (?, ?, ?, ?)')
    .run(name, path, meta, new Date().toISOString());
}

export function getEventCounts(days: number = 30): Record<string, number> {
  const cutoff = new Date(Date.now() - days * 86400_000).toISOString();
  const rows = db.prepare(
    "SELECT name, COUNT(*) AS c FROM events WHERE created_at >= ? GROUP BY name"
  ).all(cutoff) as { name: string; c: number }[];
  const out: Record<string, number> = {};
  for (const r of rows) out[r.name] = r.c;
  return out;
}
