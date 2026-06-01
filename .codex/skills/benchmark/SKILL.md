# Benchmark

Read before running, modifying, or publishing benchmark results. The benchmark is the private `@typia/benchmark` workspace under `benchmark/`.

## What it measures

Throughput (MB/sec) of typia against competing libraries, across the canonical structure fixtures (`ObjectSimple`, `ObjectHierarchical`, `ObjectRecursive`, the union and array variants, `UltimateUnion`). `src/index.ts` drives ten categories:

| Category | Operation | Compared against |
| --- | --- | --- |
| `is` | `typia.is` type guard (truthy path) | typebox, ajv, io-ts, zod, class-validator |
| `assert` | `typia.assert` (throwing path) | same |
| `validate` | `typia.validate` (error-collecting path) | same |
| `assert-error` / `validate-error` | the same two on invalid input | same |
| `optimizer` | optimized `is` codegen | typebox, class-validator |
| `stringify` | `typia.json.*Stringify` | fast-json-stringify, `JSON.stringify`, class-transformer |
| `server-assert` / `server-stringify` / `server-performance` | request/response cost in a real server | Express and Fastify, typia vs pure vs class-transformer |

Each program wraps an operation in a `benchmark` Suite; `BenchmarkServer` runs programs in `tgrid` worker processes; `BenchmarkReporter` writes the markdown report and `HorizontalBarChart` renders the D3 SVGs.

## Running

```bash
pnpm template   # regenerate src/programs/ from src/template/*.ts, then format + build
pnpm build      # ttsc build → bin/   (tsconfig applies the typia transform plugin)
pnpm start      # node bin/ → writes results for this machine
pnpm start:bun  # bun bin/bun.js → Bun-runtime results
```

`pnpm start` keys the output directory off `os.cpus()[0].model`, so a run writes to `benchmark/results/<your CPU model>/` — `README.md` (the report: host metadata, one section per category with a table and an SVG) plus `images/*.svg`. A Bun run lands under `benchmark/results/<CPU>/bun/`.

## Conventions

- **`src/programs/` is generated.** It is produced by `pnpm template` from `src/template/*.ts` (one template module per category). Don't hand-edit `src/programs/`; to add a library or category, edit the matching template module, then regenerate. The benchmark carries its own fixtures under `src/structures/` (it does not import `@typia/template`), so add or change shapes there.
- **Results are archived per CPU.** Each `results/<CPU model>/` directory is one machine's committed report. A new machine adds a new directory; don't overwrite another machine's results with yours. The markdown tables and SVGs are the published artifact (no JSON is kept in `results/`).
- **Add a competitor by adding its programs and schemas.** Library-specific schemas live under `src/structures/<library>/`; the template that generates that category's programs must reference them. Keep the structure set identical across libraries so a row compares like for like.
