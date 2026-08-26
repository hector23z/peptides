/** Fire-and-forget funnel tracking. No cookies, no third parties. */
export function track(name: string, meta: string = '') {
  try {
    const path = window.location.pathname;
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, path, meta }),
      keepalive: true,
    }).catch(() => {});
  } catch {
    /* noop */
  }
}