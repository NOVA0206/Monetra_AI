# Token Price

| Field | Value |
|-------|-------|
| Type | `dune-token-price` |
| ID | `c5a35edb` |
| Category | analytics |
| Tags | dune, price, tokens, analytics |
| Description | Fetch latest token prices across blockchains |

## Configuration

| Setting | Value |
|---------|-------|
| Blockchain | arbitrum |
| Cache Enabled | Enabled |
| Cache Duration | 60000 |
| Generate U I | Enabled |

## Environment Variables

| Key | Description | Required | Secret | Default |
|-----|-------------|----------|--------|---------|
| `DUNE_API_KEY` | Dune Analytics API key for blockchain data queries | Yes | Yes |  |

## File Structure

This component would generate the following files:

- `dune-client.ts` (frontend-lib)
- `useTokenPrice.ts` (frontend-hooks)
- `TokenPriceCard.tsx` (frontend-components)
- `dune-token-price.md` (docs)

## Integration Points

**Depends on:**
- Erc20-stylus (`6c2cb45c`)

