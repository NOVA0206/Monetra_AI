# My App

A Web3 dApp composed with [[N]skills](https://www.nskills.xyz).

## Blueprint: selected nodes

These components were included in this generation:

- **x402 Paywall API** — Generate HTTP 402 payment endpoints with x402 protocol support
- **ERC-20 Stylus Token** — Deploy and interact with ERC-20 tokens on Arbitrum Stylus
- **ERC-8004 Agent Runtime** — Generate AI agent runtime with ERC-8004 on-chain registry integration
- **Stylus Rust Contract** — Guide for building Rust smart contracts on Arbitrum Stylus
- **Dune Token Price** — Fetch latest token prices across multiple blockchains using Dune Analytics
- **Telegram AI Agent** — Conversational AI capabilities for Telegram via LLMs
- **SmartCache Caching** — Enable contract caching for cheaper gas - mycontracts (original) + cached-contracts (with caching)
- **Auditware Analyzer** — Security analysis with Radar for Rust smart contracts
- **Frontend Scaffold** — Generate a Next.js Web3 application with wagmi, RainbowKit, and smart contract integration
- **Telegram Notifications** — Send-only Telegram integration for alerts and updates
- **OpenClaw** — Prompt-driven OpenClaw agent block
- **Wallet Authentication** — Wallet connection with RainbowKit and WalletConnect
- **RPC Provider** — Multi-provider RPC configuration with failover for Arbitrum
- **Dune Execute SQL** — Execute custom SQL queries on Dune's blockchain data warehouse
- **Dune Wallet Balances** — Fetch wallet token balances with USD values using Dune Analytics
- **Chain Data** — Token/NFT data fetching with Moralis or Alchemy Enhanced APIs
- **Onchain Activity** — Fetch wallet transactions and activities from Arbitrum by category

## Project structure

```
my-app/
├── apps/
│   └── web/                    # Next.js app (install dependencies here)
│       ├── src/
│       ├── package.json
│       └── ...
├── contracts/                  # Rust/Stylus smart contracts
│   ├── mycontract/            # Original contract (no caching)
│   │   └── src/lib.rs
│   └── cached-contract/       # Contract with is_cacheable helper
│       └── src/lib.rs
├── docs/                       # Documentation
├── scripts/                     # Deploy / utility scripts (if generated)
├── .gitignore
└── README.md
```

## Quick start

### Prerequisites

- **Node.js** 18+ and **npm** (comes with Node.js)
- **Rust** toolchain and **cargo-stylus** for building/deploying Stylus contracts (see `docs/` and [Stylus SDK](https://github.com/OffchainLabs/stylus-sdk-rs))

### Step-by-step

1. **Clone and enter the project**

   ```bash
   git clone <your-repo-url>
   cd <your-repo-name>
   ```

   ![Clone and enter the project](https://raw.githubusercontent.com/Cradle-app/NSkills/main/apps/web/public/clone-and-enter.png)

2. **Install dependencies** for the Next.js app (this project has no root `package.json`; dependencies live under `apps/web`):

   ```bash
   cd apps/web
   npm install
   ```

   ![Install dependencies](https://raw.githubusercontent.com/Cradle-app/NSkills/main/apps/web/public/install-dep.png)

3. **Environment variables**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` and set:

   - `PAYMENT_RECEIVER_ADDRESS`: Ethereum address to receive payments
   - `PAYMENT_PRIVATE_KEY`: Private key for signing receipts
   - `PRIVATE_KEY`: Private key for deployment and transactions
   - `AGENT_NAME`: Name of the AI agent
   - `OPENROUTER_API_KEY`: OpenRouter API key for LLM access
   - `NEXT_PUBLIC_AGENT_NETWORK`: Network for agent operations (arbitrum or arbitrum-sepolia)
   - `STYLUS_RPC_URL`: Arbitrum RPC URL for deployment
   - `DEPLOYER_PRIVATE_KEY`: Private key for deployment
   - `DUNE_API_KEY`: Dune Analytics API key for blockchain data queries
   - `TELEGRAM_BOT_TOKEN`: Bot token from @BotFather
   - `OPENAI_API_KEY`: API key for OpenAI
   - `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`: WalletConnect Cloud project ID for wallet connections
   - `NEXT_PUBLIC_ALCHEMY_API_KEY`: Alchemy API key for RPC access
   - `ALCHEMY_API_KEY`: Alchemy API key for fetching onchain activity
   - `NEXT_PUBLIC_ONCHAIN_NETWORK`: Network for onchain activity (arbitrum or arbitrum-sepolia)

   ![Environment variables](https://raw.githubusercontent.com/Cradle-app/NSkills/main/apps/web/public/env-var.png)

### Run the web app

```bash
cd apps/web && npm run dev
```

Open [http://localhost:3000](http://localhost:3000).


## Documentation

Check the `docs/` folder for guides that match your blueprint (e.g. frontend setup, contract deployment, API routes).

## License

MIT

---

Generated with [[N]skills](https://www.nskills.xyz)
