# Execute SQL

| Field | Value |
|-------|-------|
| Type | `dune-execute-sql` |
| ID | `1201447a` |
| Category | analytics |
| Tags | dune, sql, analytics, query, data |
| Description | Custom SQL queries on Dune blockchain data |

## Configuration

| Setting | Value |
|---------|-------|
| Performance Mode | medium |
| Timeout | 60000 |
| Generate Hooks | Enabled |

## Environment Variables

| Key | Description | Required | Secret | Default |
|-----|-------------|----------|--------|---------|
| `DUNE_API_KEY` | Dune Analytics API key for blockchain data queries | Yes | Yes |  |

## File Structure

This component would generate the following files:

- `dune-client.ts` (frontend-lib)
- `useDuneQuery.ts` (frontend-hooks)
- `dune-execute-sql.md` (docs)

## Integration Points

**Depends on:**
- Frontend-scaffold (`fcba6a97`)

**Provides to:**
- Dune-wallet-balances (`93f7a827`)

