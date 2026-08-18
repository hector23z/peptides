import crypto from 'node:crypto';

const env = import.meta.env as Record<string, string | undefined>;

export function adminToken(): string {
  return crypto
    .createHmac('sha256', env.ADMIN_PASSWORD ?? '')
    .update('admin-session')
    .digest('hex');
}

export function isAdmin(cookie: string | undefined): boolean {
  return !!cookie && cookie === adminToken();
}
