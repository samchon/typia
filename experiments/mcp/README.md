# MCP end-to-end

Proves `@typia/mcp` works as a **published npm consumer would experience it**:
`createMcpServer` turns a plain TypeScript class into an MCP server, and a real
MCP client — including Claude Code — discovers and calls the reflected tools
over stdio, with schemas, validation feedback, and structured output all
generated from the types.

Like [`../smoke`](../smoke), this installs the packed `.tgz` files from
[`../tarballs`](../tarballs) with `npm` (not `pnpm`), so it exercises the real
published output, not the workspace source.

## Run

```bash
# from the repo root: build the tarballs first
pnpm package:tgz

# then, in this folder:
npm install
npm run build

npm test          # MCP client <-> server over stdio (spawns lib/server.js)
node lib/interop.js   # guards the rollup esmExternals fix against CJS externals
```

`npm test` performs a real MCP handshake, verifies the explicit server version,
lists the tools, and calls them with valid, coerced (`"40"` → `40`), invalid
(validation feedback), and exception-raising arguments.

## Drive it with Claude Code

`.mcp.json` registers the built server as the `calc` MCP server. After
`npm run build`:

```bash
claude -p "Use the calc add tool to add 40 and 2, then state the result." \
  --mcp-config .mcp.json \
  --allowedTools "mcp__calc__add"
```

Claude connects to the server, calls `mcp__calc__add` with `{ x: 40, y: 2 }`,
receives `{ "value": 42 }` as both text and `structuredContent`, and answers
"42" — no hand-written JSON schema anywhere.

## Files

- `src/server.ts` — `createMcpServer(typia.llm.controller<Calculator>(...))` on stdio
- `src/test.ts` — MCP SDK `Client` end-to-end over `StdioClientTransport`
- `src/interop.ts` — `typia.random` with a `randexp`-backed pattern, checking
  the shared rollup `esmExternals` fix keeps CJS externals callable
- `.mcp.json` — registers the server for the `claude` CLI
