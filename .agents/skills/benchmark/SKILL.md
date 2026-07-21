---
name: benchmark
description: Defines typia benchmark fixture integrity, result reporting, and publication safeguards. Use before running or modifying @typia/benchmark, changing a fixture, or publishing benchmark results.
---

# Benchmark

This repository owns one benchmark system. Read its procedure in full before acting:

- [performance.md](performance.md): `@typia/benchmark` throughput against competing runtime libraries, including generated programs, structure fixtures, and the per-CPU result archive.

## Measurement Integrity

- Measure the real product. Do not add benchmark-only branches, fixture-name checks, expected-answer checks, monkey patches, or agent restrictions that would be wrong for an unmeasured repository.
- Give every comparator the setup its own documentation prescribes. Measuring a deliberately underconfigured competitor invalidates the comparison.
- Preserve the workload defined by the selected procedure. A faster result obtained by validating, serializing, serving, or reading less input is not an optimization.
- Treat a surprising result as evidence that the change is not yet understood. Inspect the raw report or trace before accepting, explaining away, or patching around it.

## Fixture Changes

`benchmark/src/programs/` mixes generated leaf programs with hand-maintained helpers. Edit generated `benchmark-*.ts` files through their source under `benchmark/src/template/`; edit shared `create*.ts` helpers and `benchmark/src/structures/` in place.

Finish every fixture change before publishing it:

1. Run the relevant template entrypoint, then the benchmark package's formatting and build commands until they finish green. `pnpm template` regenerates only the templates imported by `benchmark/src/template/index.ts`.
2. Confirm every comparator receives the same structure and input for the measured row.
3. Review the generated-program diff. A stale or inconsistent generated program contaminates every later run.

Benchmark READMEs and prose follow AGENTS.md `## Maintenance` and the documentation skill.

## Report Results

Every result table reported in chat or committed to the result archive must be preserved for the active pull request. When the user has authorized PR updates under the pull-request skill, maintain one sticky comment beginning with `<!-- typia-benchmark-results -->`; update it with the latest table, report paths, and known invalid or missing categories.

If no pull request exists or no update is authorized, keep the result in the final report and mark the comment as pending. Post it only after the user creates or authorizes updating the pull request.

## Campaign Batching

When benchmark findings produce multiple implementation issues, load the issue-campaign skill and use its planning and claim procedure unchanged for the dependency DAG, claim freeze, and official GitHub `createdAt`-to-`mergedAt` duration: [Plan One Cycle Pull Request](../issue-campaign/development.md#plan-one-cycle-pull-request) for a solo campaign, or [Plan And Claim A Pull Request Wave](../multi-agent/issue-campaign.md#plan-and-claim-a-pull-request-wave) with its batch admission test, merge pressure, and grouping and split ledger when the user explicitly requested a parallel campaign. This benchmark skill continues to own workload, fixture, measurement, result, and publication integrity; do not redefine pull-request batching here.

## Campaign Cleanup

When a benchmark campaign uses a disposable worktree or an isolated measurement root, finish cleanup before marking that assignment complete. Preserve the committed result archive and compact command evidence, but remove every disposable worktree and its assigned mutable roots: `GOCACHE`, `GOTMPDIR`, `TTSC_CACHE_DIR`, generated-program scratch tree, dependency install tree, and temporary consumer or report staging tree. Go temporary assets are never reusable campaign evidence.

1. Record the measured commit, command, result paths and hashes, environment, and any retained published result archive.
2. Confirm the worktree and mutable roots contain no unreported source or result artifact.
3. Remove the mutable roots and, for an assigned disposable worktree, run `git worktree remove --force <path>` for its exact path.
4. Verify every removed root and, when applicable, worktree path no longer exists, run `git worktree prune`, delete the associated disposable local topic branch when one was created, and confirm no worktree registration remains.

If a measurement is abandoned or invalid, retain only the diagnostic record needed to explain it; remove its worktree and Go temporary assets by the same procedure.
