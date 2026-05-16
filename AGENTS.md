## 1. Project

### 1.1. What Typia Is

Typia is a TypeScript transformer library built around one idea: a pure TypeScript type definition should replace the runtime helpers that other tools require schemas, decorators, or hand-written guards for. The compile-time transform reads those types and emits the runtime validator, serializer, schema, or decoder inline.

The packages:

- **`typia`** — the user-facing library and `typia` CLI. Exposes the runtime validators (`is`, `assert`, `assertGuard`, `validate`), enhanced JSON serde (`json.assertParse`, `json.assertStringify`, `json.schema`), LLM function-calling harness (`llm.application`, `llm.schema`, `llm.parse`, `llm.structuredOutput`), Protocol Buffer encoder/decoder (`protobuf.message`, `protobuf.assertEncode`, `protobuf.assertDecode`), and the random data generator (`random`).
- **`@typia/interface`** — shared public typings (e.g. `IJsonSchema`, `ILlmSchema`, `IValidation`) consumed by every other package and by user code.
- **`@typia/utils`** — runtime, OpenAPI, and LLM utility helpers (e.g. `LlmTypeChecker`) that live next to but outside the transform.
- **`@typia/langchain`** — LangChain.js integration that adapts typia's LLM harness to LangChain tools.
- **`@typia/mcp`** — Model Context Protocol integration.
- **`@typia/vercel`** — Vercel AI SDK integration.

Downstream projects (`@nestia/core`, `@agentica`, `@autobe`) build on top of typia but are not part of this repository's contract.

### 1.2. Architecture

A single Go program under `packages/typia/native` performs the compile-time transform that emits validators, stringifiers, schemas, and decoders in place of `typia.*<T>()` call sites. `packages/typia` registers a Go command package that `ttsc` (the TypeScript-Go compiler with native plugin support) compiles into a binary on first use through its plugin manifest (`"ttsc": { "plugin": { "transform": "typia/lib/transform" } }`); other packages compose on it.

The `transform.ts` files inside the typia packages are plugin descriptors, not transformers — there is no TypeScript-side transform anymore. Consumers reach the binary through `ttsc` / `ttsx` and the published descriptors. Inside the repo, `scripts/with-ttsc-cache.cjs` wires the `TTSC_CACHE_DIR` (and, for runtime suites, the ts-node loader) into every workspace command.

### 1.3. Layout

- `packages/*` — the published packages, including the shared Go plugin under `packages/typia/native` and its Go unit tests under `packages/typia/test`.
- `tests/template` — `@typia/template`, a workspace package that ships the structure fixtures (`ObjectSimple`, `ArrayHierarchical`, …) consumed by the automated suites.
- `tests/test-*` — feature-test workspaces:
  - `test-typia-schema`, `test-langchain`, `test-mcp`, `test-vercel`, `test-utils` — function-per-file suites under `src/features/<group>/<name>.ts`, each file exporting one `test_<snake_case>` function discovered by `DynamicExecutor` (from `@nestia/e2e`).
  - `test-typia-automated`, `test-utils-automated` — generator-driven matrix suites that cross every typia operation with every `@typia/template` structure. `test-typia-automated` keeps committed `src/composite/` files (ObjectSimple-only sanity layer) AND regenerates `src/features/<group>/` on every run via `TestAutomationController`; `test-utils-automated` regenerates `src/features/{validate,validateEquals}/` via `TestAutomation.generate()`. **Don't hand-edit those `src/features/` trees — they are discarded on the next run.**
  - `test-typia-generate` — CLI-integration suite for the `typia generate` command. Hand-author `src/input/generate_*.ts`; `pnpm start` runs the CLI, writes `src/output/`, and `ttsc`-compiles it. The suite passes if `ttsc` accepts the generated output.
  - `test-error` — call-stripping verification: each `src/<group>/<name>.ts` is a typia call site that the transform must remove from the emitted JS. The build succeeds with `ttsc --emit`; `index.js` then compares `();` counts in source vs. bin to confirm the call was stripped.
- `tests/debug` — `@typia/debug`, a one-off `ttsx` runner for ad-hoc local repros.
- `benchmark/` — benchmark generators with archived results under `benchmark/results/**`.
- `website/src/content/docs/**` — user-facing MDX guides published at `typia.io/docs`.
- `examples/`, `experiments/`, `scripts/`, `config/` — example sources, tarball staging, repo utilities, and shared build configuration.

### 1.4. Commands

This project requires Node 24.x, pnpm 10.6.4, and Go 1.26+; exact versions are pinned in `.github/workflows/` and enforced by CI.

```bash
pnpm install
pnpm format
pnpm build
pnpm test
```

`pnpm test` runs `pnpm test:packages` (which builds `@typia/template`, then runs every `tests/test-*` workspace through `scripts/with-ttsc-cache.cjs`) followed by `pnpm test:toolchain` (`go test ./...` under `packages/typia/test`). It needs `go` on `PATH`. Test workspaces execute TypeScript sources directly via the `ts-node` transpile-only loader; the wrapper script wires that loader and the shared `TTSC_CACHE_DIR` into every workspace command.

Release-time commands (most contributors skip these): `pnpm package:next`, `pnpm package:latest`, `pnpm release` handle version bumps and npm publishing; `pnpm package:tgz` stages local tarballs in `experiments/tarballs/` for offline testing.

## 2. Development

### 2.1. Work Rules

- Match existing conventions. Before adding a file, function, or test, open a nearby peer in the same package and mirror its naming, location, and code style — don't create parallel structures.
- Respect package boundaries. The Go source for the native transform lives in `packages/typia/native` and is shared across the typia plugin family. Don't fork a second native transform, and don't reintroduce a TypeScript-side transformer.
- Preserve the contract. The exported `typia.*` surface, the `@typia/interface` typings, the `typia` CLI flags, and the `ttsc.plugin` descriptor shape are public. Renaming or removing any of them is a deliberate, separate change.
- Keep detection general. The native transform must locate target packages through their resolved package root (e.g. `require.resolve("typia/package.json")`), not through workspace-only path substrings — substring matching breaks the moment a consumer installs from npm, because the workspace path no longer exists and the transform can't locate the typia package. The same rule applies to generators: no hard-coded test, structure, or feature names.
- Use the workspace catalogs. `pnpm-workspace.yaml` pins versions under `catalog:typescript`, `catalog:rollup`, and `catalog:utils`. New dependencies go through the matching catalog; internal references use `workspace:^`.
- Don't commit `.env` files or the `.tgz` artifacts under `experiments/tarballs/`. Those are local build outputs; committing them corrupts the workflow.
- When uncertain about scope, intent, or whether to invoke a §4 workflow, ask the user before automating.
- Run `pnpm install` before `go test`. The Go test workspace at `packages/typia/test/go.work` resolves `ttsc` and its shims through `../node_modules/`, so the npm install must populate the tree first; otherwise `go test` fails to resolve the module replacements.
- When public behavior changes, update the matching guide page under `website/src/content/docs/**` in the same change.

### 2.2. Testing

**One test case per file, named after what it asserts.** Applies to both layers.

- **Go unit tests** live under `packages/typia/test/` (mirroring the source layout — `native/cmd/`, `native/adapter/`, `native/transform/`, `metadata/`, …). One `Test*` per file, named after the assertion. Two layers coexist:
  - *Native-internal tests* under `packages/typia/test/native/` are gated by `//go:build typia_native_internal` and only run with `go test -tags typia_native_internal ./...`. They use `package main` and call the cmd entrypoints (e.g. `runBuild`) directly inside the test process; nothing spawns a `go run` subprocess.
  - *Public-API tests* under `adapter/`, `contract/`, `helpers/`, `internal/`, `metadata/`, `typings/`, `utils/` carry no build tag and run by default.
- **TypeScript suites** under `tests/test-*` come in four shapes:
  - *Function-per-file* (`test-typia-schema`, `test-langchain`, `test-mcp`, `test-vercel`, `test-utils`): each file under `src/features/<group>/` exports exactly one `test_<snake_case>` function with a matching file name; `DynamicExecutor` (from `@nestia/e2e`) discovers them by prefix. Each adapter package (`@typia/langchain`, `@typia/mcp`, `@typia/vercel`) has a mirrored `tests/test-{name}` workspace under the same shape.
  - *Generator-driven matrix* (`test-typia-automated`, `test-utils-automated`): cross-product every typia operation with every `@typia/template` structure. `test-typia-automated` keeps the committed `src/composite/` files (ObjectSimple-only sanity layer) and additionally regenerates `src/features/<group>/` on every run via `TestAutomationController`; `test-utils-automated` regenerates `src/features/{validate,validateEquals}/` via `TestAutomation.generate()`. **Do not hand-edit anything under the regenerated `src/features/` trees — the next run discards it.** Add new operations or structures to the generator metadata and to `@typia/template`.
  - *CLI-driven generation* (`test-typia-generate`): hand-author `src/input/generate_*.ts`; `pnpm start` runs `typia generate` to write `src/output/` and then `ttsc`-compiles it. The suite passes if `ttsc` accepts the generated output.
  - *Stripping verification* (`test-error`): each `src/<group>/<name>.ts` is a typia call site that the transform must remove from emitted JS. The build succeeds with `ttsc --emit`; the harness compares `();` counts between source and bin and fails if the call survives.

Open every case with a doc comment in the same three-part shape: a one-line `Verifies …` headline, a short paragraph stating the non-obvious *why* (which branch or regression is being pinned), and a 2–4-step numbered scenario.

```ts
/**
 * Verifies typia.llm.schema emits `anyOf` for a discriminated union.
 *
 * Locks the union branch of the LLM schema converter. Object-shaped types
 * route through `LlmTypeChecker.isObject`, but a named union has to be lifted
 * into `$defs` and referenced via `$ref`, with `anyOf` describing the variants.
 * A regression in branch selection would silently inline one variant and drop
 * the other from the function-calling schema.
 *
 * 1. Declare two interfaces with a shared `type` discriminator and union them.
 * 2. Call `typia.llm.schema<Animal>($defs)`.
 * 3. Assert the call returns a `$ref`, and that `$defs["Animal"]` is `anyOf`.
 */
export const test_llm_schema_anyof = (): void => { /* ... */ };
```

Use `TestValidator` and `DynamicExecutor` from `@nestia/e2e` and each suite's local `internal/` helpers; don't reach into another suite's internals. Structure fixtures plus the `TestServant` runtime helper live in `@typia/template` — extend that package instead of duplicating shapes inside a test workspace.

### 2.3. Validation

Match the scope of the command to the scope of the change. Report any command you couldn't run.

- Touched the Go binary → `pnpm test:go` (which runs `go test ./...` under `packages/typia/test` *without* the `typia_native_internal` build tag, so the public-API layer is exercised but the ~57 native-internal tests are skipped). For full coverage, also run `go test -tags typia_native_internal ./...` from the same directory.
- Touched one test workspace → `pnpm --filter ./tests/<name> start`.
- Touched the transform, descriptors, or a shared package → `pnpm test`.
- Touched packaging → `pnpm package:tgz` from `experiments/tarballs` (stages tarballs that the website consumes) and try a clean install. Tarballs staged under `experiments/tarballs/` are build outputs, not sources — `website/` consumes them at build time. Don't commit or hand-edit them.
- Touched `website/src/content/docs/**` or anything else under `website/` → `cd website && npm install && npm run build` to validate MDX, nav, and tarball pickup.

### 2.4. Change Integrity

Treat tests, fixtures, snapshots, CI workflows, package wiring, dependencies, core algorithms, and generated baselines as part of the specification. Changing them requires an explicit user request or a clear product reason, and the final report must call it out. When the Go source under `packages/typia/native` changes, the `typia` package version must bump in the same commit or PR — the native source ships in the npm package (declared in `packages/typia/package.json` `files`) and ttsc compiles it into a binary on first use, so a source change without a version bump leaves consumers' `npm install` returning a tree that compiles to the stale binary.

For mechanical ports, migrations, or broad rewrites, preserve the existing algorithm and public behavior in reviewable slices. Prefer a concrete exemplar over abstract instructions, and inspect the diff before trusting a green test run.

## 3. Documentation

User-facing guides live under `website/src/content/docs/**` and publish to `typia.io/docs`. One audience, one task per page. Update the page's `_meta.ts` when adding or moving it.

Update `AGENTS.md` when the facts the rest of the doc depends on shift — the package family, the JS-descriptor / Go-plugin boundary, the test layering, the release flow. Treat it as a map, not a rulebook.

When adding agent-facing rules, state the desired workflow first. Use negative constraints only for named failure modes, and include the reason so the rule points back to the intended behavior.

Deeper guides for adapter architecture and integration patterns live under `website/src/content/docs/llm/`.

## 4. Multi-Agent Workflows

Use these workflows only when the user explicitly asks for the named workflow, a multi-agent review, or a multi-agent discussion. Use Review Cycles for direct review of changed source, docs, and tests; Discussions for open-ended topic exploration; and Research Review Rounds when review needs shared research before individual proposals.

### 4.1. Review Cycles

For an explicitly requested review cycle, form a team of six agents. Each agent must read the changed source, docs, and tests in full, then propose concrete improvements.

The lead agent rechecks every proposal, verifies it against the codebase, and applies only changes that are technically sound and relevant.

That is one cycle. For the next cycle, form a fresh team of six different agents and repeat. Continue while at least one verified proposal is accepted. Stop when no agent proposes an improvement, or when no proposal survives lead-agent validation.

### 4.2. Discussions

For a discussion task, create a new topic directory under `.discussions/<topic>/`. Use a short filesystem-safe topic name. Do not delete or overwrite existing discussion directories unless the user explicitly requests it.

Form a team of six agents. Each agent researches the topic, creates a personal subdirectory under the topic directory, and continuously maintains its own wiki-style knowledge base there.

When all agents are ready, run three unrestricted discussion rounds recorded as `round1.md`, `round2.md`, and `round3.md` in the topic directory. Each round has a one-hour budget. The lead agent moderates, acts as scribe, and does not narrow the topic unless the user did.

The transcript files must record the live discussion, not a retrospective summary. The lead agent writes each statement in speaking order. Team agents read the updated transcript before speaking again and continue researching, revising their own knowledge bases, and preparing notes while waiting for their next turn.

After `round3.md` is complete, the lead agent writes the agreed conclusions and major open points into `summary.md` in the topic directory, reports them to the user, and waits for the next instruction.

### 4.3. Research Review Rounds

For an explicitly requested research review, combine the `.discussions` knowledge-base workflow with the review validation loop.

Create a new topic directory under `.discussions/<topic>/`. Each research review round gets its own `review-round-N/` subdirectory with six fresh agents, agent knowledge-base folders, `round1.md`, `round2.md`, `round3.md`, `proposals.md`, and `lead-validation.md`.

In each round, agents build their own knowledge bases from the changed source, docs, tests, and any relevant research. Run the three live discussion transcripts as in Discussions: the lead agent records statements in speaking order while team agents read each other's statements, keep researching between turns, and refine their notes.

At the end of a round, each agent submits its own concrete improvement proposals. Do not require consensus; discussion is for shared understanding, not voting. The lead agent verifies every proposal and applies only changes that are technically sound and relevant.

For the next round, replace the team with six different agents and repeat. Continue while at least one verified proposal is accepted. Stop when no meaningful proposal remains, or when no proposal survives lead-agent validation.
