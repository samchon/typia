# Library Performance Benchmark

Read this document before running or changing `benchmark/`, regenerating `benchmark/src/programs/`, changing its structure fixtures, or publishing results under `benchmark/results/`.

## Workload

The private `@typia/benchmark` workspace measures throughput in megabytes per second for typia and competing runtime libraries across the canonical object, array, recursive, union, and `UltimateUnion` structures. `benchmark/src/index.ts` runs ten categories through `BenchmarkServer` worker processes, and `BenchmarkReporter` writes the report and D3 SVG charts to the current CPU's result directory.

| Category | Operation | Compared against |
| --- | --- | --- |
| `is` | `typia.is` type guard on valid input | TypeBox, Ajv, io-ts, Zod, class-validator |
| `assert` | `typia.assert` on valid input | the same validator libraries |
| `validate` | `typia.validate` on valid input | the same validator libraries |
| `assert-error`, `validate-error` | assertion and validation on invalid input | TypeBox, io-ts, Zod, class-validator |
| `optimizer` | optimized `is` code generation | TypeBox, Ajv, class-validator |
| `stringify` | `typia.json.*Stringify` | fast-json-stringify, `JSON.stringify`, class-transformer |
| `server-assert`, `server-stringify`, `server-performance` | request and response cost in a real server | Express and Fastify, typia versus pure handling and class-transformer |

Node runs all ten categories. Bun runs the seven non-server categories through `benchmark/src/bun.ts`.

## Fixture Contract

`benchmark/src/template/*.ts` defines generated leaf programs under `benchmark/src/programs/`. The programs tree also contains hand-maintained shared helpers. `benchmark/src/structures/` owns the canonical input types plus library-specific schemas.

- **Generated programs:** edit the matching template instead of its generated `benchmark-*.ts` leaves. `pnpm template` regenerates the templates imported by `benchmark/src/template/index.ts`; run another template entrypoint directly when it is not in that import set. Edit shared `create*.ts` helpers in place.
- **Canonical structures:** keep every compared library on the same structure and equivalent input. A schema shortcut or omitted case invalidates the row.
- **Competitors:** add library-specific schemas under `benchmark/src/structures/<library>/` and update the templates for every category in scope.

The runner discovers every comparator directory present under a category. `optimizer/ajv` remains a tracked comparator even though the current optimizer template no longer lists Ajv, and template regeneration does not remove a library directory that is absent from the template. When changing the optimizer comparator set, reconcile the template and existing generated directories explicitly before measuring.

Each `benchmark/results/<CPU model>/` directory is one machine's committed Node report: `README.md` plus `images/*.svg`. Bun results live under `benchmark/results/<CPU model>/bun/`. A new machine adds its own directory; do not overwrite another machine's results.

## Run Locally

Run from `benchmark/`:

```bash
pnpm template
pnpm build
pnpm start
pnpm start:bun
```

`pnpm template` regenerates the template modules imported by `src/template/index.ts`, formats the TypeScript sources, and builds the package. `pnpm build` rebuilds `bin/` without regenerating programs. `pnpm start` writes the Node report for the current CPU, while `pnpm start:bun` writes the Bun report below that CPU directory.

## Publish

Run publication measurements on an otherwise quiet host. The runner keys output by `os.cpus()[0].model`, so confirm the destination directory before accepting the result.

After the run, inspect the generated `README.md` and every SVG. Require correct host metadata, the complete category set for the selected runtime, comparable rows, and no stale images from an older run. Preserve the existing per-CPU archives and commit the new or intentionally refreshed machine directory as one result set.
