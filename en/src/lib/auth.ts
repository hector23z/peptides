import crypto from 'node:crypto';

export function adminToken(): string {
  return crypto
    .createHmac('sha256', process.env.ADMIN_PASSWORD ?? '')
    .update('admin-session')
    .digest('hex');
}

export function isAdmin(cookie: string | undefined): boolean {
  return !!cookie && cookie === adminToken();
}
