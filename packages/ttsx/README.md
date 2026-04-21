# @typia/ttsx

> ⚠️ **Phase 0 spike (version 0.0.0-phase0).** Not production-ready. Do not install.

`@typia/ttsx` is the `ts-node` / `tsx`-style runner for typia projects.

- `@typia/ttsc` owns build/check/transform
- `@typia/ttsx` owns `ttsx src/index.ts`
- both sit next to the official compiler package (`@typescript/native-preview` today, `typescript@7` later)

Current implementation status:

- CommonJS entrypoint runner: available
- typia rewrite via `@typia/ttsc transform`: available
- argument pass-through and cache directory: available
- ESM loader parity: not finished
