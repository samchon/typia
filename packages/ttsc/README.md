# @typia/ttsc

`@typia/ttsc` is the standalone `tsgo` host in this monorepo.

- It owns `build`, `check`, and `transform`.
- It loads `compilerOptions.plugins` from `tsconfig.json`.
- It selects the matching native backend binary for each consumer plugin.
- It keeps the standalone host code and the consumer-specific native code separate.

typia is the first native consumer. Its TypeScript plugin entry is `typia/lib/ttsc/plugin`, and its native backend lives under `packages/typia/native`.

## Layout

```
packages/ttsc/
├── bin/ttsc.js            # Public CLI / plugin host launcher
├── src/                   # Node-side host, plugin, and platform code
├── driver/                # Generic tsgo host + emit rewrite mechanics
├── test/                  # Node-side tests (node:test runner)
└── cmd/ttsc/              # Standalone native binary without consumer-specific rewrites
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
- Native consumers supply their own backend binary; the standalone host no longer embeds typia-specific analyzers or emitters.
- The generic driver package hooks into typescript-go through the local shim layer.
- The public CLI lives in Node so `ttsx` and third-party plugins reuse the same host pipeline.

## License

MIT. See [../../LICENSE](../../LICENSE). Third-party attributions in [THIRD-PARTY-LICENSES.md](./THIRD-PARTY-LICENSES.md).
