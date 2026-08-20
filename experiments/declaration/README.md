# Portable declaration emit

Compiles a typia consumer with `declaration: true` against an **isolated** `node_modules` layout, and asserts that every type typia puts in front of a consumer can be named through the `typia` entry alone.

## Why it exists

A consumer that re-exports a typia result publishes its own `.d.ts`, and TypeScript may only name an inferred type through a module specifier that consumer can resolve. typia's own dependencies — `@typia/interface`, `@typia/utils` — are not among them under pnpm or Yarn Plug'n'Play: they sit beside typia, not above the consumer. So a type typia exposes in a public signature but does not re-export from `typia` leaves the emit with nothing portable to write, and TypeScript reports TS2742 (TS2883 since TypeScript 7).

samchon/typia#2359 reported that for `typia.createValidate`, and the same cause had `typia.json.application` broken since v12.0.0.

Neither was reachable from any existing suite, for three independent reasons. The `tests/*` workspaces resolve typia from its TypeScript source, where declaration emit reuses the import specifier typia's own file already carries instead of searching for one this side can resolve. `smoke`, `esm`, and `mcp` install the tarballs with `npm`, whose hoisting lifts every transitive package to the top level and makes the bare specifiers resolve. And no project in the repository compiled a typia consumer with `declaration` on at all. This one closes all three gaps.

## What it asserts

**The layout pass** asserts the install still has the shape everything else depends on: typia's own dependencies must not resolve from this project, and every package under test must be one of the tarballs just packed rather than the registry's copy. Both are silent failures otherwise — a hoisted dependency makes every borrowed name reachable again, and a dropped `overrides` entry tests a published package instead of this working tree.

**The census pass** reads typia's own `lib/*.d.ts`, collects every type name they import from another package, and imports all of them from `"typia"`. This is the completeness half: it does not depend on any call site being present here, so a name that moves into a return type later — or a new dependency altogether — is caught the moment it is not re-exported. `Atomic` is why the pass exists rather than the sweep alone: it reaches typia's public declarations only as a generic constraint, so no inferred type can ever surface it. It is also what catches a new dependency landing in a public signature, the way `@standard-schema/spec` once did.

**The sweep** in `src/index.ts` is the end-to-end half. Every binding is exported and none carries an annotation, so the compiler has to write a name for each one. It covers each public entry point whose result can carry a borrowed type; entry points returning `T`, `boolean`, `string`, or `void` are left out because nothing borrowed can reach their declarations.

Both emitted declaration files are then read back: one entry per export, nothing widened to `any`, no module specifier other than `typia`, and the three #2359 witnesses still named.

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

`test` owns the assertions above, and runs plain `tsc` alongside `ttsc`'s artifact because `tsc` fails hard and names the offending type.
