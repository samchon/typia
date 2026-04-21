# Current Repository Status

This document explains the current support boundaries inside the repository.

## Product Paths

### Stable current path

- `typia`
- `@typia/core`
- `@typia/transform`
- `@typia/interface`
- `@typia/utils`

This is the main product line behind the current `typia` v12 workflow.

Default setup:

- `npx typia setup`
- `@typia/ttsc`
- `@typescript/native-preview`
- `ttsc` / `ttsx` flow

### Stable alternative path

- `@typia/unplugin`

Use this when you want bundler-native integration for environments such as Vite, Rollup, Rspack, Webpack, Bun, or other supported bundlers.

### Stable integration packages with caveats

- `@typia/langchain`
- `@typia/mcp`
- `@typia/vercel`

These are real supported packages, but some options have tighter compatibility boundaries than the package name alone may suggest.

Current example:

- `@typia/mcp` `preserve` mode depends on MCP SDK private internals to coexist with `McpServer.registerTool()`

### Experimental transition path

- `@typia/ttsc`
- `@typia/ttsx`

`@typia/ttsc` and `@typia/ttsx` exist in the repository as real packages and the current tsgo / TypeScript 7 transition surface. They now back the default `typia setup` path, but still require stricter local scrutiny than the rest of the root test matrix.

Current architecture note:

- `ttsc` / `ttsx` are the general host and runner surfaces
- typia is the first built-in consumer plugin on that host
- the current package names remain `@typia/ttsc` / `@typia/ttsx` inside this monorepo

Current repository policy:

- transition package
- requires its own test/build scrutiny beyond the root default `pnpm test`

## Test Boundaries

Root test command:

```bash
pnpm run test
```

What it currently does:

- runs the `start` script for `tests/test-*`

What it does **not** guarantee by itself:

- every package-local strongest path
- `@typia/ttsc` Go-backed smoke path
- every website/tarball-dependent flow

When you touch these areas, run their local paths too:

- `pnpm --filter @typia/ttsc test`
- `pnpm --filter @typia/test-typia-ttsc test`
- `pnpm --filter @typia/test-unplugin start`
- `pnpm run package:tgz`
- `cd website && npm install && npm run build`

## Website And Tarball Coupling

The documentation site is not a purely static Markdown layer.

Important current facts:

- `website` consumes locally built tarballs from `experiments/tarballs`
- release and website build flows generate tarballs before building the site
- examples and compiler/playground build steps participate in the website pipeline

This means package packaging health and website delivery are operationally coupled.

## Benchmark Note

The repository contains a benchmark archive under [`benchmark/results`](./benchmark/results).

Current guidance:

- treat that directory as an archive of measured results across machines and periods
- do not assume every archived result is the current flagship benchmark for the latest package version
- when updating performance claims, link them to an explicitly chosen current result set

For more detail, see [BENCHMARK_STATUS.md](./BENCHMARK_STATUS.md).

## Generated Artifacts

Some packages currently keep generated `lib` output in the repository.

Treat those directories as part of the current operational surface unless and until artifact policy is narrowed explicitly.

For more detail, see [GENERATED_ARTIFACTS.md](./GENERATED_ARTIFACTS.md).
