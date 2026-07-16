---
name: project
description: Defines the typia product contract, workspace layout, package boundaries, and canonical commands. Use when orienting in the repository, working inside any package, or choosing a build, test, or format command.
---

# Project Outline

## Product Contract

Typia is a TypeScript transformer library built around one idea: a pure TypeScript type definition should replace the runtime helpers that other tools require schemas, decorators, or hand-written guards for. The compile-time transform reads those types and emits the runtime validator, serializer, schema, or decoder inline.

The packages:

- **`typia`**: the user-facing library and `typia` CLI. Exposes the runtime validators (`is`, `assert`, `assertGuard`, `validate`), enhanced JSON serde (`json.assertParse`, `json.assertStringify`, `json.schema`), LLM function-calling harness (`llm.application`, `llm.schema`, `llm.parse`, `llm.structuredOutput`), Protocol Buffer encoder/decoder (`protobuf.message`, `protobuf.assertEncode`, `protobuf.assertDecode`), and the random data generator (`random`).
- **`@typia/interface`**: shared public typings (e.g. `IJsonSchemaCollection`, `ILlmSchema`, `IValidation`) consumed by every other package and by user code.
- **`@typia/utils`**: runtime, OpenAPI, and LLM utility helpers (e.g. `LlmTypeChecker`) that live next to but outside the transform.
- **`@typia/langchain`**: LangChain.js integration that adapts typia's LLM harness to LangChain tools.
- **`@typia/mcp`**: Model Context Protocol integration.
- **`@typia/vercel`**: Vercel AI SDK integration.

Downstream projects (`@nestia/core`, `@agentica`, `@autobe`) build on top of typia but are not part of this repository's contract. The exported `typia.*` surface, the `@typia/interface` typings, the `typia` CLI flags, and the `ttsc.plugin` descriptor shape are public; renaming or removing any of them is a deliberate, separate change.

A single Go program under `packages/typia/native` performs the compile-time transform that emits validators, stringifiers, schemas, and decoders in place of `typia.*<T>()` call sites. `packages/typia` registers a Go command package that `ttsc` (the TypeScript-Go compiler with native plugin support) compiles into a binary on first use through its plugin manifest:

```json
"ttsc": { "plugin": { "transform": "typia/lib/transform" } }
```

The `packages/typia/src/transform.ts` file is a plugin descriptor, not a transformer; there is no TypeScript-side transform anymore. The descriptor resolves the installed `typia` package root and returns the Go entrypoint under `native/cmd/ttsc-typia`. The adapter packages do not register their own transforms. Consumers reach the binary through `ttsc` / `ttsx` and the published descriptor. ttsc keys each plugin build by content and stores it workspace-wide under `node_modules/.cache/ttsc` (it walks up to `pnpm-workspace.yaml`), so every package and test workspace shares one binary; `TTSC_CACHE_DIR` overrides the location only for suites whose fixture projects live outside the workspace (e.g. `tests/test-typia-cli`).

## Layout

- `packages/*`: the published packages, including the shared Go plugin under `packages/typia/native`. Public and contract Go tests live under `packages/typia/test`; native Go tests are colocated throughout `packages/typia/native/**`. The test `go.work` resolves `ttsc` and its shims through `../node_modules/`, while the native development `go.work` resolves the sibling `ttsc` checkout.
- `tests/template`: `@typia/template`, a workspace package that ships the structure fixtures (`ObjectSimple`, `ArrayHierarchical`, ...) and the `TestServant` runtime helper consumed by the automated suites.
- `tests/test-*`: feature-test workspaces:
  - `test-typia-schema`, `test-langchain`, `test-mcp`, `test-vercel`, `test-utils`: function-per-file suites under `src/features/**/test_*.ts`, each file exporting one matching `test_<snake_case>` function discovered by `DynamicExecutor` (from `@nestia/e2e`).
  - `test-typia-automated`, `test-utils-automated`: generator-driven matrix suites over their configured typia operations and `@typia/template` structures; their generated `src/features/` trees are rebuilt by the suite.
  - `test-interface`: compile-time tests for the exported `@typia/interface` types.
  - `test-typia-cli`, `test-typia-generate`: CLI and project-layout integration suites, including the `typia generate` command.
  - `test-typia-exact-optional`: focused `exactOptionalPropertyTypes` behavior.
  - `test-feature-identity`: repository check that every suite's tracked `src/features` file exports exactly one `test_*` function named after the file, and that one suite never exports a name twice.
  - `test-error`: call-stripping verification; each call site must be removed from the emitted JS.
- `tests/debug`: `@typia/debug`, a one-off `ttsx` runner for ad-hoc local repros.
- `benchmark/`: `@typia/benchmark`, performance generators with archived results under `benchmark/results/**`. See `.agents/skills/benchmark/SKILL.md`.
- `website/src/content/docs/**`: user-facing MDX guides published at https://typia.io/docs. See `.agents/skills/documentation/SKILL.md`.
- `examples/`, `experiments/`, `scripts/`, `config/`: example sources, tarball staging, repo utilities, and shared build configuration.

## Commands

CI uses Node 24.x and Go 1.26.x, while the workspace pins pnpm exactly to 10.6.4.

```bash
pnpm install
pnpm format
pnpm build
pnpm test
```

`pnpm test` runs every `tests/test-*` workspace through `pnpm test:packages`, then runs both Go trees through `pnpm test:toolchain`: `go -C packages/typia/test test ./...` and `go -C packages/typia/test test ../native/...`. It needs `go` on `PATH`. Run `pnpm install` first, or the test Go workspace cannot resolve `ttsc` and its shims through `../node_modules/`. Most feature workspaces execute TypeScript directly through `ttsx`; `test-error` uses a Node harness and `test-interface` invokes `ttsc`. Plugin-building workspaces share the cache under `node_modules/.cache/ttsc`.

Release-time commands (most contributors skip these): `pnpm package:rc`, `pnpm package:next`, `pnpm package:latest`, and `pnpm release`. `pnpm package:tgz` stages local tarballs in `experiments/tarballs/` for offline testing. See `.agents/skills/pull-request/SKILL.md` for the remote delivery flow.
