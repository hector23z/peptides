export interface CartItem {
  slug: string;
  title: string;
  price: number;
  size?: string;
  qty: number;
}

const KEY = 'peptidelab_cart';

export function getCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    return [];
  }
}

export function saveCart(items: CartItem[], openDrawer = false) {
  localStorage.setItem(KEY, JSON.stringify(items));
  document.dispatchEvent(new CustomEvent('cart-updated', { detail: { openDrawer } }));
}

export function addToCart(item: Omit<CartItem, 'qty'>) {
  const cart = getCart();
  const existing = cart.find((i) => i.slug === item.slug);
  if (existing) existing.qty += 1;
  else cart.push({ ...item, qty: 1 });
  saveCart(cart, true);
  return cart;
}

export function updateQty(slug: string, qty: number) {
  const cart = getCart();
  const item = cart.find((i) => i.slug === slug);
  if (item) {
    item.qty = Math.max(1, Math.floor(qty));
    saveCart(cart);
  }
  return cart;
}

export function removeItem(slug: string) {
  saveCart(getCart().filter((i) => i.slug !== slug));
}

export function clearCart() {
  localStorage.removeItem(KEY);
}

export function cartCount() {
  return getCart().reduce((s, i) => s + i.qty, 0);
}

export function cartTotal() {
  return getCart().reduce((s, i) => s + i.qty * i.price, 0);
}
