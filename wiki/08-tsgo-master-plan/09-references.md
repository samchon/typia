# 09. References

`ttsc` / `ttsx` 와 typia native backend 가 참고한 local reference map 이다.

## local repositories

| repo | local path | current relevance |
| --- | --- | --- |
| `microsoft/typescript-go` | `/home/samchon/github/contributions/typescript-go` | compiler, tsconfig parsing, Program, emit, diagnostics, CLI shape |
| `tsgonest/tsgonest` | `/home/samchon/github/contributions/tsgonest` | Go native transform, shim layout, emit-time rewrite, tsgonest-style host structure |
| `oxc-project/tsgolint` | `/home/samchon/github/contributions/tsgolint` | `go:linkname` shim model and `tools/gen_shims` pattern |
| `elliotshpherd/typical` | `/home/samchon/github/contributions/typical` | Go-backed runtime-safety compiler, runner/bundler integration ideas |
| `samchon/ttsc` | `/home/samchon/github/samchon/ttsc` | standalone-package migration target |

No local `typist` repository was found during this check. The likely intended reference is `typical`.

## how current code uses the references

### `typescript-go`

Current code depends on `github.com/microsoft/typescript-go` and local shim modules.

Representative locations:

- `toolchain/ttsc/go.mod`
- `toolchain/ttsc/driver/program.go`
- `toolchain/ttsc/driver/host.go`
- `packages/core/native/go.mod`
- `packages/transform/native/go.mod`

Current use:

- parse `tsconfig.json`
- create TypeScript-Go Program and Checker
- read diagnostics
- emit JS
- expose internal packages through shim modules

### `tsgonest`

Current code follows the same practical family:

- OS-backed VFS + bundled lib host
- TypeScript-Go Program facade
- emitted JS rewrite
- Go native analyzer/emitter

`toolchain/ttsc/driver/host.go` explicitly notes that the helper shape is adapted from tsgonest's compiler host pattern.

### `tsgolint`

Current shim generation is adapted from tsgolint.

Representative locations:

- `toolchain/ttsc/tools/gen_shims/main.go`
- `toolchain/ttsc/shim/*`

Current use:

- re-export selected TypeScript-Go internal APIs
- expose unexported functions through `go:linkname`
- keep native code out of TypeScript-Go source patches where possible

### `typical`

Typical is not copied directly into the current implementation. It remains useful as evidence for:

- Go-backed TypeScript runtime-safety compilation
- thin JS wrapper around native compiler behavior
- runner / bundler integration shapes

## archived study

Detailed older prior-art notes remain under:

`wiki/07-strategy/04-ttsc-design/02-prior-art/`

Those files are archived. Use this current page as the entry point, then open the archived files when exact historical detail is needed.
