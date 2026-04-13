# Onchain Activity

| Field | Value |
|-------|-------|
| Type | `onchain-activity` |
| ID | `a0b24be1` |
| Category | agents |
| Tags | analytics, transactions, wallet, arbitrum |
| Description | Fetch wallet transactions by category from Arbitrum |

## Configuration

| Setting | Value |
|---------|-------|
| Network | arbitrum |
| Transaction Limit | 10 |
| Categories | erc20, external |

## Environment Variables

| Key | Description | Required | Secret | Default |
|-----|-------------|----------|--------|---------|
| `ALCHEMY_API_KEY` | Alchemy API key for fetching onchain activity | Yes | No |  |
| `NEXT_PUBLIC_ONCHAIN_NETWORK` | Network for onchain activity (arbitrum or arbitrum-sepolia) | Yes | No | arbitrum |

## Scripts

| Name | Command |
|------|---------|
| `onchain:setup` | `echo "See packages/onchain-activity/README.md for setup instructions"` |

## Integration Points

**Depends on:**
- Chain-data (`5839eb01`)

