# Architecture

## Dependency Graph

```mermaid
graph TD
  547a1cc1["X402-paywall-api (x402-paywall-api)"]
  6c2cb45c["Erc20-stylus (erc20-stylus)"]
  f8aff560["Erc8004-agent-runtime (erc8004-agent-runtime)"]
  cc3f6c67["Stylus-rust-contract (stylus-rust-contract)"]
  c5a35edb["Dune-token-price (dune-token-price)"]
  d4498e91["Telegram-ai-agent (telegram-ai-agent)"]
  61fc8bca["Smartcache-caching (smartcache-caching)"]
  0d190c4d["Auditware-analyzing (auditware-analyzing)"]
  fcba6a97["Frontend-scaffold (frontend-scaffold)"]
  d998f672["Telegram-notifications (telegram-notifications)"]
  e708b325["Openclaw-agent (openclaw-agent)"]
  757e8495["Wallet-auth (wallet-auth)"]
  225b1cc5["Rpc-provider (rpc-provider)"]
  1201447a["Dune-execute-sql (dune-execute-sql)"]
  93f7a827["Dune-wallet-balances (dune-wallet-balances)"]
  5839eb01["Chain-data (chain-data)"]
  a0b24be1["Onchain-activity (onchain-activity)"]
  fcba6a97 --> e708b325
  547a1cc1 --> fcba6a97
  6c2cb45c --> fcba6a97
  6c2cb45c --> c5a35edb
  f8aff560 --> fcba6a97
  cc3f6c67 --> 61fc8bca
  cc3f6c67 --> 0d190c4d
  cc3f6c67 --> fcba6a97
  fcba6a97 --> 757e8495
  fcba6a97 --> 225b1cc5
  f8aff560 --> d4498e91
  d4498e91 --> d998f672
  fcba6a97 --> 1201447a
  1201447a --> 93f7a827
  93f7a827 --> 5839eb01
  5839eb01 --> a0b24be1
```

## Execution / Implementation Order

1. **X402-paywall-api** (`547a1cc1`)
2. **Erc20-stylus** (`6c2cb45c`)
3. **Erc8004-agent-runtime** (`f8aff560`)
4. **Stylus-rust-contract** (`cc3f6c67`)
5. **Dune-token-price** (`c5a35edb`)
6. **Telegram-ai-agent** (`d4498e91`)
7. **Smartcache-caching** (`61fc8bca`)
8. **Auditware-analyzing** (`0d190c4d`)
9. **Frontend-scaffold** (`fcba6a97`)
10. **Telegram-notifications** (`d998f672`)
11. **Openclaw-agent** (`e708b325`)
12. **Wallet-auth** (`757e8495`)
13. **Rpc-provider** (`225b1cc5`)
14. **Dune-execute-sql** (`1201447a`)
15. **Dune-wallet-balances** (`93f7a827`)
16. **Chain-data** (`5839eb01`)
17. **Onchain-activity** (`a0b24be1`)
