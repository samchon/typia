# @typia/ttsc

> ⚠️ **Phase 0 spike (version 0.0.0-phase0).** Not production-ready. Do not install.

> ℹ️ Current repository policy: `@typia/ttsc` is excluded from the normal root `package:latest` publish path and must be validated through its own package-local test/build flow.

`@typia/ttsc` is the current monorepo package for the `ttsc` host: a general-purpose compiler adapter and plugin host for [TypeScript 7 / tsgo](https://github.com/microsoft/typescript-go).

`@typia/ttsc` owns build/check/transform orchestration, plugin loading, and native backend discovery. The `ts-node` / `tsx`-style execute surface lives in the sibling package `@typia/ttsx`, which reuses this package's compiler discovery, build pipeline, and cache helpers.

typia is the first built-in consumer plugin, not the product boundary itself. See [wiki/08-tsgo-master-plan/05-phase0-kickoff.md](../../wiki/08-tsgo-master-plan/05-phase0-kickoff.md) for the Phase 0 plan.

## Layout

```
packages/ttsc/
├── bin/ttsc.js            # Public CLI / plugin host launcher
├── src/                   # Node-side host, plugin, and platform code
├── test/                  # Node-side tests (node:test runner)
├── cmd/ttsc/              # Native backend entrypoint
└── internal/
    ├── engine/
    │   ├── metadata/      # typia built-in consumer IR
    │   └── emitter/       # typia built-in native emitter
    └── driver/
        └── shim/          # typescript-go go:linkname shim
```

## Commands

```bash
# TypeScript side
pnpm build
pnpm test:ts

# Go side (requires Go 1.26+)
pnpm go:build
pnpm go:test
pnpm go:vet

# Both
pnpm test
```

## Philosophy

- One Go binary per platform, distributed as `@typia/ttsc-{platform}-{arch}` optional dependencies.
- `ttsc` reads `compilerOptions.plugins` and composes native and JS plugins through one host surface.
- typia currently ships as the first built-in native consumer plugin (`@typia/ttsc/plugin/typia`).
- Driver (`internal/driver`) hooks into typescript-go via shim (go:linkname) + minimal patches.
- The public CLI lives in Node so `ttsx` and third-party plugins reuse the same host pipeline.

## License

MIT. See [../../LICENSE](../../LICENSE). Third-party attributions in [THIRD-PARTY-LICENSES.md](./THIRD-PARTY-LICENSES.md).
