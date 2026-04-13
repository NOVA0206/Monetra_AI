# Environment Variables

| Key | Description | Required | Secret | Default |
|-----|-------------|----------|--------|---------|
| `PAYMENT_RECEIVER_ADDRESS` | Ethereum address to receive payments | Yes | No |  |
| `PAYMENT_PRIVATE_KEY` | Private key for signing receipts | Yes | Yes |  |
| `NEXT_PUBLIC_TOKEN_ADDRESS` | Deployed ERC20 token address | No | No |  |
| `PRIVATE_KEY` | Private key for deployment and transactions | Yes | Yes |  |
| `ERC20_DEPLOYMENT_API_URL` | URL of the ERC20 deployment API | No | No | http://localhost:4000 |
| `AGENT_NAME` | Name of the AI agent | Yes | No | MyAgent |
| `OPENROUTER_API_KEY` | OpenRouter API key for LLM access | Yes | Yes |  |
| `OPENROUTER_MODEL` | Model to use via OpenRouter | No | No | openai/gpt-4o |
| `NEXT_PUBLIC_AGENT_REGISTRY_ADDRESS` | ERC-8004 registry contract address | No | No |  |
| `AGENT_PRIVATE_KEY` | Agent wallet private key for registry operations | No | Yes |  |
| `NEXT_PUBLIC_AGENT_NETWORK` | Network for agent operations (arbitrum or arbitrum-sepolia) | Yes | No | arbitrum |
| `STYLUS_RPC_URL` | Arbitrum RPC URL for deployment | Yes | No | https://sepolia-rollup.arbitrum.io/rpc |
| `DEPLOYER_PRIVATE_KEY` | Private key for deployment | Yes | Yes |  |
| `DUNE_API_KEY` | Dune Analytics API key for blockchain data queries | Yes | Yes |  |
| `TELEGRAM_BOT_TOKEN` | Bot token from @BotFather | Yes | Yes |  |
| `OPENAI_API_KEY` | API key for OpenAI | Yes | Yes |  |
| `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` | WalletConnect Cloud project ID for wallet connections | Yes | No |  |
| `NEXT_PUBLIC_APP_NAME` | Application name displayed in wallet dialogs | No | No | My DApp |
| `NEXT_PUBLIC_ALCHEMY_API_KEY` | Alchemy API key for RPC access | Yes | No |  |
| `ALCHEMY_API_KEY` | Alchemy API key for fetching onchain activity | Yes | No |  |
| `NEXT_PUBLIC_ONCHAIN_NETWORK` | Network for onchain activity (arbitrum or arbitrum-sepolia) | Yes | No | arbitrum |
