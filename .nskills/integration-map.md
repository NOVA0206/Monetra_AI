# Integration Map

How components connect and what data flows between them.

### Frontend-scaffold --> Openclaw-agent

- **Source**: Frontend-scaffold (`fcba6a97`)
  - Output ports: App Context (config)
- **Target**: Openclaw-agent (`e708b325`)
  - Input ports: Agent Prompt (config)

### X402-paywall-api --> Frontend-scaffold

- **Source**: X402-paywall-api (`547a1cc1`)
  - Output ports: API Endpoint (api)
- **Target**: Frontend-scaffold (`fcba6a97`)
  - Input ports: Contract ABI (contract), Network Config (config)

### Erc20-stylus --> Frontend-scaffold

- **Source**: Erc20-stylus (`6c2cb45c`)
  - Output ports: Token Contract (contract)
- **Target**: Frontend-scaffold (`fcba6a97`)
  - Input ports: Contract ABI (contract), Network Config (config)

### Erc20-stylus --> Dune-token-price

- **Source**: Erc20-stylus (`6c2cb45c`)
  - Output ports: Token Contract (contract)
- **Target**: Dune-token-price (`c5a35edb`)
  

### Erc8004-agent-runtime --> Frontend-scaffold

- **Source**: Erc8004-agent-runtime (`f8aff560`)
  - Output ports: Agent Runtime (api)
- **Target**: Frontend-scaffold (`fcba6a97`)
  - Input ports: Contract ABI (contract), Network Config (config)

### Stylus-rust-contract --> Smartcache-caching

- **Source**: Stylus-rust-contract (`cc3f6c67`)
  - Output ports: Contract Code (contract)
- **Target**: Smartcache-caching (`61fc8bca`)
  - Input ports: Contract Input (contract)

### Stylus-rust-contract --> Auditware-analyzing

- **Source**: Stylus-rust-contract (`cc3f6c67`)
  - Output ports: Contract Code (contract)
- **Target**: Auditware-analyzing (`0d190c4d`)
  - Input ports: Contract Input (contract)

### Stylus-rust-contract --> Frontend-scaffold

- **Source**: Stylus-rust-contract (`cc3f6c67`)
  - Output ports: Contract Code (contract)
- **Target**: Frontend-scaffold (`fcba6a97`)
  - Input ports: Contract ABI (contract), Network Config (config)

### Frontend-scaffold --> Wallet-auth

- **Source**: Frontend-scaffold (`fcba6a97`)
  - Output ports: App Context (config)
- **Target**: Wallet-auth (`757e8495`)
  

### Frontend-scaffold --> Rpc-provider

- **Source**: Frontend-scaffold (`fcba6a97`)
  - Output ports: App Context (config)
- **Target**: Rpc-provider (`225b1cc5`)
  

### Erc8004-agent-runtime --> Telegram-ai-agent

- **Source**: Erc8004-agent-runtime (`f8aff560`)
  - Output ports: Agent Runtime (api)
- **Target**: Telegram-ai-agent (`d4498e91`)
  

### Telegram-ai-agent --> Telegram-notifications

- **Source**: Telegram-ai-agent (`d4498e91`)
  - Output ports: AI Response (any)
- **Target**: Telegram-notifications (`d998f672`)
  

### Frontend-scaffold --> Dune-execute-sql

- **Source**: Frontend-scaffold (`fcba6a97`)
  - Output ports: App Context (config)
- **Target**: Dune-execute-sql (`1201447a`)
  

### Dune-execute-sql --> Dune-wallet-balances

- **Source**: Dune-execute-sql (`1201447a`)
  - Output ports: Query Results (types)
- **Target**: Dune-wallet-balances (`93f7a827`)
  

### Dune-wallet-balances --> Chain-data

- **Source**: Dune-wallet-balances (`93f7a827`)
  - Output ports: Wallet Balances (types)
- **Target**: Chain-data (`5839eb01`)
  

### Chain-data --> Onchain-activity

- **Source**: Chain-data (`5839eb01`)
  - Output ports: Data Hooks (types)
- **Target**: Onchain-activity (`a0b24be1`)
  - Input ports: Wallet Address (config)
