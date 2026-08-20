# Portable declaration emit

Compiles a typia consumer with `declaration: true` against an **isolated** `node_modules` layout, and asserts that every inferred type the consumer publishes can be named through the `typia` entry alone.

## Why it exists

A consumer that re-exports a typia result publishes its own `.d.ts`, and TypeScript may only name an inferred type through a module specifier that consumer can resolve. typia's own dependencies — `@typia/interface`, `@standard-schema/spec` — are not among them under pnpm or Yarn Plug'n'Play: they sit beside typia, not above the consumer. So a type typia exposes in a public signature but does not re-export from `typia` leaves the emit with nothing portable to write, and TypeScript reports TS2742 (TS2883 since TypeScript 7).

samchon/typia#2359 reported that for `typia.createValidate`, and the same cause had `typia.json.application` broken since v12.0.0.

Neither was reachable from any existing suite, for three independent reasons. The `tests/*` workspaces resolve typia from its TypeScript source, where declaration emit reuses the import specifier typia's own file already carries instead of searching for one this side can resolve. `smoke`, `esm`, and `mcp` install the tarballs with `npm`, whose hoisting lifts every transitive package to the top level and makes the bare specifiers resolve. And no project in the repository compiled a typia consumer with `declaration` on at all. This one closes all three gaps.

## Layout

`typia` is the only typia package installed as a direct dependency. The others stay transitive on purpose — pinning them here would put them in this project's own `node_modules` and make the very names under test resolvable again — so `pnpm-workspace.yaml` swaps them for the freshly packed tarballs through `overrides` instead.

`pnpm` is deliberate too: its isolated layout is what reproduces the consumer's failure, and `npm`'s hoisting is what hid it.

## Run

```bash
pnpm run package:tgz   # from the repository root

# then, in this folder:
pnpm install
pnpm run build
pnpm test
```

`build` runs `ttsc`, the real consumer path. Its exit code is not the oracle: `ttsc` prints TS2742 / TS2883 and still exits 0, writing `any` where the unnameable type belonged.

`test` reads the emitted declarations, and separately compiles with plain `tsc`, which fails hard and names the offending type.
