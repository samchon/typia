# @typia/ttsx

> ⚠️ **Phase 0 spike (version 0.0.0-phase0).** Not production-ready. Do not install.

`@typia/ttsx` is the `ts-node` / `tsx`-style runner for `ttsc` projects.

- `@typia/ttsc` owns build/check/transform and plugin loading
- `@typia/ttsx` owns `ttsx src/index.ts`
- both sit next to the official compiler package (`@typescript/native-preview` today, `typescript@7` later)

Current implementation status:

- CommonJS entrypoint runner: available
- plugin-hosted rewrite via `@typia/ttsc`: available
- argument pass-through and cache directory: available
- ESM loader parity: not finished
