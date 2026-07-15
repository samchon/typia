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
