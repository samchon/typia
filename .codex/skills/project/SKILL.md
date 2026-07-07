---
name: project
description: What typia is, the package family, the JS-descriptor / Go-plugin boundary, the workspace layout, and the canonical commands.
---

# Project Outline

## What Typia Is

Typia is a TypeScript transformer library built around one idea: a pure TypeScript type definition should replace the runtime helpers that other tools require schemas, decorators, or hand-written guards for. The compile-time transform reads those types and emits the runtime validator, serializer, schema, or decoder inline.

The packages:

- **`typia`** — the user-facing library and `typia` CLI. Exposes the runtime validators (`is`, `assert`, `assertGuard`, `validate`), enhanced JSON serde (`json.assertParse`, `json.assertStringify`, `json.schema`), LLM function-calling harness (`llm.application`, `llm.schema`, `llm.parse`, `llm.structuredOutput`), Protocol Buffer encoder/decoder (`protobuf.message`, `protobuf.assertEncode`, `protobuf.assertDecode`), and the random data generator (`random`).
- **`@typia/interface`** — shared public typings (e.g. `IJsonSchema`, `ILlmSchema`, `IValidation`) consumed by every other package and by user code.
- **`@typia/utils`** — runtime, OpenAPI, and LLM utility helpers (e.g. `LlmTypeChecker`) that live next to but outside the transform.
- **`@typia/langchain`** — LangChain.js integration that adapts typia's LLM harness to LangChain tools.
- **`@typia/mcp`** — Model Context Protocol integration.
- **`@typia/vercel`** — Vercel AI SDK integration.

Downstream projects (`@nestia/core`, `@agentica`, `@autobe`) build on top of typia but are not part of this repository's contract. The exported `typia.*` surface, the `@typia/interface` typings, the `typia` CLI flags, and the `ttsc.plugin` descriptor shape are public; renaming or removing any of them is a deliberate, separate change.

## Architecture

A single Go program under `packages/typia/native` performs the compile-time transform that emits validators, stringifiers, schemas, and decoders in place of `typia.*<T>()` call sites. `packages/typia` registers a Go command package that `ttsc` (the TypeScript-Go compiler with native plugin support) compiles into a binary on first use through its plugin manifest:

```json
"ttsc": { "plugin": { "transform": "typia/lib/transform" } }
```

The `transform.ts` files inside the typia packages are plugin descriptors, not transformers — there is no TypeScript-side transform anymore. The descriptor resolves to the Go entrypoint under `native/cmd/`; other packages compose on it. Consumers reach the binary through `ttsc` / `ttsx` and the published descriptors. ttsc keys each plugin build by content and stores it workspace-wide under `node_modules/.cache/ttsc` (it walks up to `pnpm-workspace.yaml`), so every package and test workspace shares one binary; `TTSC_CACHE_DIR` overrides the location only for suites whose fixture projects live outside the workspace (e.g. `tests/test-typia-cli`).

## Layout

- `packages/*` — the published packages, including the shared Go plugin under `packages/typia/native` and its Go unit tests under `packages/typia/test` (`go.work` resolves `ttsc` and its shims through `../node_modules/`).
- `tests/template` — `@typia/template`, a workspace package that ships the structure fixtures (`ObjectSimple`, `ArrayHierarchical`, …) and the `TestServant` runtime helper consumed by the automated suites.
- `tests/test-*` — feature-test workspaces:
  - `test-typia-schema`, `test-langchain`, `test-mcp`, `test-vercel`, `test-utils` — function-per-file suites under `src/features/<group>/<name>.ts`, each file exporting one `test_<snake_case>` function discovered by `DynamicExecutor` (from `@nestia/e2e`).
  - `test-typia-automated`, `test-utils-automated` — generator-driven matrix suites that cross every typia operation with every `@typia/template` structure.
  - `test-typia-generate` — CLI-integration suite for the `typia generate` command.
  - `test-error` — call-stripping verification: each call site must be removed from the emitted JS.
- `tests/debug` — `@typia/debug`, a one-off `ttsx` runner for ad-hoc local repros.
- `benchmark/` — `@typia/benchmark`, performance generators with archived results under `benchmark/results/**`. See `.codex/skills/benchmark/SKILL.md`.
- `website/src/content/docs/**` — user-facing MDX guides published at https://typia.io/docs. See `.codex/skills/documentation/SKILL.md`.
- `examples/`, `experiments/`, `scripts/`, `config/` — example sources, tarball staging, repo utilities, and shared build configuration.

## Commands

This project requires Node 24.x, pnpm 10.6.4, and Go 1.26+; exact versions are pinned in `.github/workflows/` and enforced by CI.

```bash
pnpm install
pnpm format
pnpm build
pnpm test
```

`pnpm test` runs `pnpm test:packages` (builds `@typia/template`, then runs every `tests/test-*` workspace) followed by `pnpm test:toolchain` (`go test ./...` under `packages/typia/test`). It needs `go` on `PATH`. Run `pnpm install` before `go test`, or the Go workspace cannot resolve the `ttsc` shims through `../node_modules/`. Test workspaces execute TypeScript sources directly through `ttsx`, sharing the workspace-local plugin cache under `node_modules/.cache/ttsc`.

Release-time commands (most contributors skip these): `pnpm package:next`, `pnpm package:latest`, `pnpm release`. `pnpm package:tgz` stages local tarballs in `experiments/tarballs/` for offline testing. See `.codex/skills/pull-request/SKILL.md` for the release flow.
