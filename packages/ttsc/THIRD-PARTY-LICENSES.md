# Third-Party Licenses

`@typia/ttsc` references, studies, and (in some places) reimplements techniques pioneered by several other open-source projects. This document lists attributions and license compatibility notes.

## Projects referenced / studied

| Project | Repo | License | Relation to ttsc |
|---|---|---|---|
| typescript-go | https://github.com/microsoft/typescript-go | **Apache-2.0** | Upstream compiler (Phase 0 W2+ submodule target) |
| tsgolint | https://github.com/oxc-project/tsgolint | **MIT** | `tools/gen_shims` pattern studied; shim layout reference |
| tsgonest | https://github.com/tsgonest/tsgonest | **MIT** | Overall Go-binary-with-shim architecture reference; emit-time rewrite pattern |
| effect-tsgo | https://github.com/Effect-TS/tsgo | (TBD Phase 0 W0) | Upstream-patch + Go-hook model reference |
| typical | https://github.com/elliots/typical | (TBD Phase 0 W0) | MessagePack IPC prototype reference |
| ts-patch | https://github.com/nonara/ts-patch | **MIT** | Plugin config schema compatibility reference |

## License compatibility

ttsc is MIT (inherits from typia). MIT is compatible with MIT, Apache-2.0 (one-way), BSD. Apache-2.0 imposes attribution and patent grant requirements on derivative work.

- **Direct binary inclusion** (e.g. vendored Go source from typescript-go): requires Apache-2.0 NOTICE preservation. ttsc references typescript-go via `go.mod require` + `replace` (shim pattern) — upstream binary is **linked**, not vendored. Standard Go toolchain behavior.
- **Code copy from tsgolint/tsgonest** (e.g. `gen_shims.go` pattern): MIT-compatible; must retain original copyright notices in derived files.

## Attribution rules for ttsc developers

When importing or adapting code from the above projects:

1. Copy the original file header comment verbatim into the new file, marked `// adapted from <upstream path>`.
2. List the file in a new row of this document.
3. For Apache-2.0 code, ensure `NOTICE` file contents are propagated if required.

## Files currently derived from upstream

(None yet — Phase 0 W0. This table will be populated as gen_shims and reference ports land in W2–W3.)

| ttsc file | Upstream source | License |
|---|---|---|

## Review schedule

This document is reviewed at each Phase boundary (0 → 1 → 2 …) and on every new external reference introduction.

Last reviewed: 2026-04-18 (Phase 0 W0 scaffolding).
