# @typia/ttsx

`@typia/ttsx` is the `ts-node` / `tsx`-style runner for `ttsc` projects.

- `@typia/ttsc` owns build/check/transform and plugin loading
- `@typia/ttsx` owns `ttsx src/index.ts`
- both sit next to the official compiler package (`@typescript/native-preview` today, `typescript@7` later)

Current implementation status:

- CommonJS entrypoint runner: available
- ESM entrypoint runner: available
- plugin-hosted rewrite via `@typia/ttsc`: available
- argument pass-through and cache directory: available
- `register()` remains the in-process CommonJS hook; ESM execution runs the cached emitted entry in a child Node process
