// Wallet addresses for direct crypto payments (no third-party processor).
// Configured via .env (see .env.example). In Astro, .env vars are exposed
// through import.meta.env in dev; in production set real environment variables.
export interface WalletConfig {
  address: string;
  network: string;
  confirmations: number;
}

const env = import.meta.env as Record<string, string | undefined>;

const WALLETS: Record<string, WalletConfig> = {
  USDT_TRC20: {
    address: env.WALLET_USDT_TRC20 ?? '',
    network: 'TRON (TRC-20)',
    confirmations: 19,
  },
  USDT_ERC20: {
    address: env.WALLET_USDT_ERC20 ?? '',
    network: 'Ethereum (ERC-20)',
    confirmations: 12,
  },
  USDC: {
    address: env.WALLET_USDC ?? '',
    network: 'Ethereum (ERC-20)',
    confirmations: 12,
  },
  BTC: {
    address: env.WALLET_BTC ?? '',
    network: 'Bitcoin',
    confirmations: 2,
  },
  LTC: {
    address: env.WALLET_LTC ?? '',
    network: 'Litecoin',
    confirmations: 6,
  },
  XMR: {
    address: env.WALLET_XMR ?? '',
    network: 'Monero',
    confirmations: 10,
  },
};

export function getWallet(crypto: string): WalletConfig | null {
  const w = WALLETS[crypto];
  if (!w || !w.address) return null;
  return w;
}

export function isWalletConfigured(): boolean {
  return Object.values(WALLETS).some((w) => w.address);
}
