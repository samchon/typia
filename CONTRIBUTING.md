# Contribution Guide

## Before Opening An Issue

Search the existing tracker first:

- [Issues](https://github.com/samchon/typia/issues)

When reporting a bug, include:

- the `typia` version
- the TypeScript version
- a minimal reproduction
- expected behavior and actual behavior

When proposing an improvement, include:

- the problem you are trying to solve
- the proposed solution
- examples of the expected behavior

## Repository Shape

`typia` is a pnpm monorepo. The main directories are:

```text
typia/
├── packages/              # Publishable packages and internal package sources
│   ├── typia/             # User-facing package and CLI
│   ├── core/              # Metadata analysis and code generation
│   ├── transform/         # TypeScript transformer adapter
│   ├── interface/         # Shared public typings
│   ├── utils/             # Runtime/OpenAPI/LLM utilities
│   ├── unplugin/          # Bundler integration path
│   ├── langchain/         # LangChain integration
│   ├── mcp/               # MCP integration
│   ├── vercel/            # Vercel AI SDK integration
│   ├── ttsc/              # tsgo-backed compiler adapter
│   └── ttsx/              # tsgo-backed runner
├── tests/                 # Test workspaces and generated test fixtures
│   ├── template/          # Shared test structures package (@typia/template)
│   └── test-*/            # Test suites
├── examples/              # Example source used by docs and playground flows
├── benchmark/             # Benchmark generators and result archives
├── website/               # Documentation site and playground app
├── experiments/           # Local tarball and experiment flows
├── config/                # Shared build configuration
└── wiki/                  # Internal research, audit, and strategy corpus
```

## Current Paths

There are three important build/setup paths in the repository:

1. Stable current path: `typia` with `typia setup`, `ttsc`, and `@typescript/native-preview`
2. Stable alternative path: `@typia/unplugin` for bundler environments
3. Dedicated runner path: `ttsc` for `ts-node` / `tsx`-style execution

For a concise repository status overview, see [CURRENT_STATUS.md](./CURRENT_STATUS.md).

## Build And Test

Root scripts:

```bash
pnpm run build
pnpm run test
pnpm run package:tgz
```

Important caveats:

- `pnpm run build` builds `packages/*`
- `pnpm run test` runs the `start` script of `tests/test-*`
- some package-local strongest paths are **not** covered by the root `test`
- `tests/template` is a workspace package used by automated suites
- `website` has its own install/build pipeline and consumes local tarballs from `experiments/tarballs`

Recommended contributor workflow:

```bash
pnpm install
pnpm run build
pnpm run test
```

If you touch one of these areas, run its local path too:

- `../ttsc/packages/ttsc`: `pnpm --filter ttsc test`
- `toolchain-tests/test-typia-ttsc`: `pnpm --filter @typia/test-typia-ttsc test`
- `tests/test-unplugin`: `pnpm --filter @typia/test-unplugin start`
- `website`: `cd website && npm install && npm run build`
- tarball-dependent flows: `pnpm run package:tgz`

## Working In Packages

Start from the package closest to the behavior you are changing:

- public API and CLI: `packages/typia`
- TypeScript transform routing: `packages/transform`
- metadata analysis and emitters: `packages/core`
- runtime/shared typing surfaces: `packages/interface`, `packages/utils`
- adapter integrations: `packages/langchain`, `packages/mcp`, `packages/vercel`
- bundler path: `packages/unplugin`
- experimental tsgo spike: `../ttsc/packages/ttsc`

## Documentation And Strategy

Documentation lives in multiple layers:

- root `README.md`: public product overview
- `website/`: end-user docs and playground
- `wiki/`: internal architecture, research, audit, and tsgo strategy

Do not assume the wiki is the same thing as end-user documentation. If you update one layer and it changes the public contract, check the others too.

## Pull Requests

Before opening a PR:

- make sure the relevant package/test/docs flow still works
- mention any path that is intentionally not covered by your local verification
- call out changes to support boundaries, release policy, or experimental behavior explicitly

Useful references:

- [Repository status](./CURRENT_STATUS.md)
- [Benchmark results archive](https://github.com/samchon/typia/tree/master/benchmark/results)
- [Wiki index](./wiki/00-INDEX.md)
