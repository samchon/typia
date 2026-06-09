---
name: development
description: Work rules, testing, validation, and change integrity. Read before writing or modifying code.
---

# Development

Read before writing or modifying code.

## Work Rules

- Match existing conventions. Before adding a file, function, or test, open a nearby peer in the same package and mirror its naming, location, and code style — don't create parallel structures.
- Respect package boundaries. The Go source for the native transform lives in `packages/typia/native` and is shared across the typia plugin family. Don't fork a second native transform, and don't reintroduce a TypeScript-side transformer.
- Preserve the contract. The public surface defined in `.codex/skills/project/SKILL.md` § What Typia Is changes only as a deliberate, separate change — don't rename or remove any of it incidentally.
- Keep detection general. The native transform must locate target packages through their resolved package root (e.g. `require.resolve("typia/package.json")`), not through workspace-only path substrings — substring matching breaks the moment a consumer installs from npm, because the workspace path no longer exists and the transform can't locate the typia package. The same rule applies to generators: no hard-coded test, structure, or feature names.
- Use the workspace catalogs. `pnpm-workspace.yaml` pins versions under `catalog:typescript`, `catalog:rollup`, and `catalog:utils`. New dependencies go through the matching catalog; internal references use `workspace:^`.
- Don't commit `.env` files or the `.tgz` artifacts under `experiments/tarballs/`. Those are local build outputs; committing them corrupts the workflow.
- Run `pnpm format` and stage the result before committing; never commit unformatted output. Note that `pnpm format` covers `**/*.ts` and Go only, not Markdown (see `.codex/skills/documentation/SKILL.md`).
- When public behavior changes, update the matching guide page under `website/src/content/docs/**` in the same change.
- When uncertain about scope, intent, or whether to invoke a multi-agent workflow, ask the user before automating.

## Testing

**One test case per file, named after what it asserts.** Applies to both layers.

### Go unit tests

Live under `packages/typia/test/` (mirroring the source layout — `native/cmd/`, `native/adapter/`, `native/transform/`, `metadata/`, …). One `Test*` per file, named after the assertion. Two layers coexist:

- *Native-internal tests* under `packages/typia/test/native/` are gated by `//go:build typia_native_internal` and only run with `go test -tags typia_native_internal ./...`. They use `package main` and call the cmd entrypoints (e.g. `runBuild`) directly inside the test process; nothing spawns a `go run` subprocess.
- *Public-API tests* under `adapter/`, `contract/`, `helpers/`, `internal/`, `metadata/`, `typings/`, `utils/` carry no build tag and run by default.

### TypeScript suites

The `tests/test-*` workspaces come in four shapes:

- *Function-per-file* (`test-typia-schema`, `test-langchain`, `test-mcp`, `test-vercel`, `test-utils`): each file under `src/features/<group>/` exports exactly one `test_<snake_case>` function with a matching file name; `DynamicExecutor` (from `@nestia/e2e`) discovers them by prefix. Each adapter package (`@typia/langchain`, `@typia/mcp`, `@typia/vercel`) has a mirrored `tests/test-{name}` workspace under the same shape.
- *Generator-driven matrix* (`test-typia-automated`, `test-utils-automated`): cross-product every typia operation with every `@typia/template` structure. `test-typia-automated` keeps the committed `src/composite/` files (ObjectSimple-only sanity layer) and additionally regenerates `src/features/<group>/` on every run via `TestAutomationController`; `test-utils-automated` regenerates `src/features/{validate,validateEquals}/` via `TestAutomation.generate()`. **Do not hand-edit anything under the regenerated `src/features/` trees — the next run discards it.** Add new operations or structures to the generator metadata and to `@typia/template`.
- *CLI-driven generation* (`test-typia-generate`): hand-author `src/input/generate_*.ts`; `pnpm start` runs `typia generate` to write `src/output/` and then `ttsc`-compiles it. The suite passes if `ttsc` accepts the generated output.
- *Stripping verification* (`test-error`): each `src/<group>/<name>.ts` is a typia call site that the transform must remove from emitted JS. The build succeeds with `ttsc --emit`; the harness compares `();` counts between source and bin and fails if the call survives.

### Doc comments

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

## Validation

Match the scope of the command to the scope of the change. Report any command you couldn't run.

- Touched the Go binary → `pnpm test:go` (runs `go test ./...` under `packages/typia/test` *without* the `typia_native_internal` build tag, so the public-API layer is exercised but the native-internal tests are skipped). For full coverage, also run `go test -tags typia_native_internal ./...` from the same directory; both require a prior `pnpm install`.
- Touched one test workspace → `pnpm --filter ./tests/<name> start`.
- Touched the transform, descriptors, or a shared package → `pnpm test`.
- Touched packaging → `pnpm package:tgz` from `experiments/tarballs` (stages tarballs the website consumes) and try a clean install. Don't commit or hand-edit the staged tarballs.
- Touched `website/src/content/docs/**` or anything else under `website/` → `cd website && npm install && npm run build` to validate MDX, nav, and tarball pickup.

## Change Integrity

Treat tests, fixtures, snapshots, CI workflows, package wiring, dependencies, core algorithms, and generated baselines as part of the specification. Changing them requires an explicit user request or a clear product reason, and the final report must call it out.

When the Go source under `packages/typia/native` changes, the `typia` package version must bump in the same commit or PR — the native source ships in the npm package (declared in `packages/typia/package.json` `files`) and ttsc compiles it into a binary on first use, so a source change without a version bump leaves consumers' `npm install` returning a tree that compiles to the stale binary.

For mechanical ports, migrations, or broad rewrites, preserve the existing algorithm and public behavior in reviewable slices. Prefer a concrete exemplar over abstract instructions, and inspect the diff before trusting a green test run.
