---
name: development
description: Defines typia implementation rules, testing standards, validation, consequence analysis, and change integrity. Use before writing or modifying source, tests, workflows, package wiring, fixtures, generated baselines, or algorithms.
---

# Development

## Contents

- [Forbidden](#forbidden)
- [Work Rules](#work-rules)
- [Consequence Analysis](#consequence-analysis)
- [Plugin Configuration](#plugin-configuration)
- [Testing](#testing)
- [Validation](#validation)
- [Change Integrity](#change-integrity)

## Forbidden

These four are never acceptable; choosing any one means the approach is already wrong.

- **No monkey-patching or hardcoding.** Don't special-case a consumer, a fixture name, or an expected value to make output match. Fix the general logic.
- **No test-passing-only logic.** Code exists to be correct, not to turn a check green. A branch whose only purpose is to satisfy one assertion is a bug in disguise.
- **No forcing a broken design.** When the same failure keeps returning under patch after patch, the design is wrong. Stop, find the root cause, and fix the design instead of looping forever on symptoms.
- **No whack-a-mole.** Don't patch the one case that surfaced and move on. Think expansively about every case the same root cause can produce, and seal them all with coverage so the class of failure cannot recur.

## Work Rules

- Match existing conventions. Before adding a file, function, or test, open a nearby peer and mirror its naming, location, and code style; don't create parallel structures.
- Respect package boundaries. The shared native transform lives under `packages/typia/native`; don't fork a second transform into an adapter package or reintroduce a TypeScript-side transformer.
- Keep package detection installation-safe. Resolve the target package root, as `packages/typia/src/transform.ts` does with `require.resolve("typia/package.json")`; workspace path substrings and hard-coded fixture names fail for npm consumers.
- Use the workspace catalogs. `pnpm-workspace.yaml` owns `typescript`, `rolldown`, and `utils`; internal package references use `workspace:^`.
- Keep local outputs local. Do not commit `.env` files or the `.tgz` artifacts generated under `experiments/tarballs/`.
- Preserve the public contract in `.agents/skills/project/SKILL.md`. Renaming or removing `typia.*`, `@typia/interface` types, CLI flags, or the plugin descriptor shape is a deliberate product change, not incidental cleanup.
- When public behavior changes, update the matching page under `website/src/content/docs/**` in the same change. Follow `.agents/skills/documentation/SKILL.md`.
- Run `pnpm format` before every ordinary commit and stage the result; never commit unformatted output. The sole exception is an active issue campaign: campaign issue pull requests must not run the repository-wide formatter, and the issue-campaign skill performs one dedicated Post-Campaign Cleanup format pull request after the campaign ends.

## Consequence Analysis

Treat a reported example as one witness of a cause, not the complete problem statement. Before changing code, trace the same cause through:

- every caller and downstream consumer;
- normal, error, and recovery state transitions;
- concurrency, caching, and generated output;
- Windows and POSIX behavior;
- compatibility constraints and boundary inputs.

Fix the verified class of failure, not only the reported witness. Cover positive, negative, and boundary cases without expanding the user's product goal.

## Plugin Configuration

`ttsc` discovers typia by default from the `ttsc.plugin.transform` entry in `packages/typia/package.json`. Consumer projects add a `compilerOptions.plugins` entry with `transform: "typia/lib/transform"` only when they need to set optional transform flags.

`packages/typia/src/transform.ts` is a JavaScript descriptor source, not a transformer. It resolves the installed typia package and returns the Go command at `packages/typia/native/cmd/ttsc-typia`; `ttsc` builds that source into the workspace cache. Keep type analysis, AST rewriting, diagnostics, and typia-owned options (`functional`, `numeric`, `finite`, and `undefined`) on the Go side.

Test workspaces normally use `typia/lib/transform`. Source-only workspaces such as the benchmark may point at `typia/src/transform.ts`, but that still loads the same descriptor and native command. Do not add a second plugin host to make a local layout pass.

## Testing

**One test case per file, named after what it asserts.** This is the rule for new and changed cases in both languages, even where older files predate it.

### Go tests

- **Public and contract tests:** keep black-box and exported-API coverage under `packages/typia/test/**`, mirroring the native concern where practical. These tests import the native module through `packages/typia/test/go.mod` and run with `pnpm test:go:public`.
- **Colocated native tests:** keep same-package implementation, command, transform, and emitter coverage beside the Go source as `packages/typia/native/**/*_test.go`. Untagged cases run with `pnpm test:go:native`.
- **Native-internal tagged tests:** use `//go:build typia_native_internal` only when the case requires internal-only coverage. Root `pnpm test:go` does not enable that tag; run `go -C packages/typia/test test -tags typia_native_internal ../native/...` when tagged coverage is relevant.

Use one `Test*` function per test file and mirror a nearby test's package, fixture, and cleanup pattern. Command-level transform regressions belong near `packages/typia/native/cmd/ttsc-typia`; public contract probes belong under `packages/typia/test`.

### TypeScript suites

`pnpm test:packages` starts every `tests/test-*` workspace. They have seven shapes covering all twelve suites:

- **Function-per-file:** `test-typia-schema`, `test-langchain`, `test-mcp`, `test-vercel`, and `test-utils` discover `src/features/**/test_*.ts` through `DynamicExecutor`. Export exactly one `test_<snake_case>` function from a matching filename.
- **Generated matrices:** `test-typia-automated` and `test-utils-automated` delete and regenerate `src/features/**` when they run. Do not hand-edit those trees. Change the controller/template metadata or `@typia/template`; keep the committed ObjectSimple composite layer in `test-typia-automated/src/composite/**` hand-maintained.
- **CLI generation:** `test-typia-generate` owns hand-written inputs under `src/input/**`; its scripts regenerate `src/output/**`, exercise directory, file, explicit-project, implicit-project, and jsconfig modes, then compile and check the output.
- **Transform-error stripping:** `test-error` compiles invalid call sites and compares source and emitted JavaScript. Add cases beside their feature group and preserve the harness contract.
- **Type compilation:** `test-interface` is a compile-only `ttsc` suite for `@typia/interface` type contracts.
- **CLI process integration:** `test-typia-cli` creates temporary projects and spawns `pnpm exec ttsc` against them. Its fixtures live outside the workspace, so it explicitly shares the root ttsc cache through `TTSC_CACHE_DIR`.
- **Focused option behavior:** `test-typia-exact-optional` uses a small explicit runner and a plugin entry with `undefined: false`; keep focused compiler-option scenarios there instead of forcing them into DynamicExecutor.

Use `TestValidator` and `DynamicExecutor` from `@nestia/e2e`, `@typia/template` structures and `TestServant`, and each suite's local `internal/` helpers. Do not reach into another suite's internals or duplicate a reusable structure inside one test workspace.

Open every new or materially changed case with a doc comment in the same three-part shape: a one-line `Verifies ...` headline, a short paragraph stating the non-obvious _why_ (which branch or regression is being pinned), and a 2+-step numbered list summarizing the scenario.

```ts
/**
 * Verifies typia.llm.schema emits `anyOf` for a discriminated union.
 *
 * Locks the union branch of the LLM schema converter. A regression in branch
 * selection would silently emit one variant and lose the other from the
 * function-calling schema.
 *
 * 1. Declare two object variants with a shared discriminator.
 * 2. Generate the LLM schema for their union.
 * 3. Assert both variants remain in the emitted `anyOf`.
 */
export const test_llm_schema_anyof = (): void => {
  /* ... */
};
```

### Coverage, not happy paths

A test that only feeds a transform its ordinary successful input and asserts that the result is accepted proves one path, not correctness. The native transformer spans validators, serializers, schemas, decoders, diagnostics, and generated helpers; each predicate or branch needs more than its happy path:

- **The transformation direction.** When a call should be rewritten, assert observable emitted or runtime behavior that differs from the untransformed stub. For generators, start from hand-written input and verify the generated output, not only that an existing output compiles.
- **A negative twin for every positive.** Wherever a predicate accepts, rewrites, narrows, serializes, or reports a diagnostic, pin an adjacent case one property away where it must not do so. An over-match stays invisible until the counter-example exists.
- **Boundaries.** Cover the empty case, the single-element case, recursion limits, optional and nullable members, exact numeric limits, deepest nesting, and the tag or compiler option that flips the decision.
- **Oracle-derived expectations.** Take expected behavior from TypeScript semantics and the authoritative JSON Schema, OpenAPI, Protocol Buffer, or adapter contract, never from whatever the current code happens to emit. A snapshot written against the implementation's own output locks its bugs in.

This is not a validator-only rule. The same happy-path bias hides serializer corruption, schema loss, CLI failures, and native diagnostic regressions, so every feature carries the burden.

## Validation

Run the narrowest command that proves the change first, then a broader command when shared behavior, the transform, packaging, or documentation changed. Report any command that could not be run.

- **One public Go concern:** `pnpm test:go:public`.
- **One native Go concern:** `pnpm test:go:native`; add the tagged command from [Go tests](#go-tests) when the changed path has `typia_native_internal` coverage.
- **One TypeScript workspace:** `pnpm --filter ./tests/<name> start`.
- **One package:** `pnpm --filter ./packages/<name> build`.
- **Transform, descriptor, or shared package:** `pnpm test`; use `pnpm build` as the broader package compilation gate.
- **Packaging:** run root `pnpm package:tgz`, then inspect or smoke-test a clean install. Tarballs are generated under `experiments/tarballs/`; do not commit or hand-edit them.
- **Website or guide changes:** reproduce the fresh CI prerequisites: place a ttsc checkout at `../ttsc`, run root `pnpm install`, `pnpm build`, and `pnpm package:tgz`, then run `pnpm build` inside `website/`. The compiler-dependencies package installs the staged tarballs, and the playground Wasm build resolves the sibling ttsc Go modules.

Verification shape depends on the change type:

- **Bug fix:** name the failing case and the expected behavior; run a repro that fails before the fix and passes after.
- **Feature:** name the observable behavior; exercise it end-to-end.
- **Refactor:** name what should stay unchanged; rely on the existing test suite or a behavior-locking probe.
- **Review:** name concrete risks, missing tests, or regressions.

## Change Integrity

Treat tests, fixtures, snapshots, CI workflows, package wiring, dependencies, core algorithms, generated baselines, and benchmark results as part of the specification. Changing them requires an explicit user request or a clear product reason, and the final report must call it out.

When Go source under `packages/typia/native` changes, bump the `typia` package version in the same commit or pull request. The npm package ships `native/`, and ttsc compiles that source on first use; without a new package version, npm consumers continue to install the previous native source tree.

For mechanical ports, migrations, or broad rewrites, preserve the existing algorithm and public behavior in reviewable slices. Prefer a concrete exemplar over abstract instructions, and inspect the diff before trusting a green test run.
