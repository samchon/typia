# @typia/ttsc

> ⚠️ **Phase 0 spike (version 0.0.0-phase0).** Not production-ready. Do not install.

typia's build driver for [TypeScript 7 / tsgo](https://github.com/microsoft/typescript-go). A Go-native replacement for the current `tsc` + `ts-patch` pipeline.

See [wiki/08-tsgo-master-plan/17-phase0-kickoff.md](../../wiki/08-tsgo-master-plan/17-phase0-kickoff.md) for the detailed plan.

## Layout

```
packages/ttsc/
├── bin/ttsc.js            # Node launcher (platform-detect + spawn Go binary)
├── src/                   # Node-side TypeScript code (platform detection, utils)
├── test/                  # Node-side tests (node:test runner)
├── cmd/ttsc/              # Go CLI entrypoint
└── internal/
    ├── engine/
    │   ├── metadata/      # typia MetadataSchema IR (ported from TypeScript)
    │   └── emitter/       # JS code builder
    └── driver/
        └── shim/          # typescript-go go:linkname shim (Phase 0 W2)
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
- typia engine (MetadataFactory + Programmers) lives inside this binary (`internal/engine`).
- Driver (`internal/driver`) hooks into typescript-go via shim (go:linkname) + minimal patches.
- Node launcher (`bin/ttsc.js`) is a thin platform-detector and binary-spawner (< 100 LOC).

## License

MIT. See [../../LICENSE](../../LICENSE). Third-party attributions in [THIRD-PARTY-LICENSES.md](./THIRD-PARTY-LICENSES.md).
