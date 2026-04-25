# 05. ttsc / ttsx Follow-ups

현재 구현 기준의 남은 일만 적는다.

## F1. native plugin composition

현재 `ttsc` 는 한 invocation 에서 하나의 native mode / binary 조합을 중심으로 돈다.

필요한 정리:

- 여러 native consumer 를 순차 실행할 수 있는지
- 같은 파일을 여러 plugin 이 rewrite 할 때 ownership 을 어떻게 나눌지
- diagnostics 와 asset output 을 plugin 별로 어떻게 분리할지

## F2. diagnostics API

현재 CLI 는 stderr 와 exit code 로 실패를 드러낸다. JS API 는 `build/check` 에서 `{ status, stdout, stderr }` 를 돌려주고, `transform` 은 실패 시 throw 한다.

필요한 정리:

- structured diagnostics callback
- plugin diagnostics payload
- watch mode diagnostic UX

## F3. `ttsx` CJS / ESM 차이

현재:

- CJS: require hook + per-file transform
- ESM: project build + cache emit + child Node

필요한 정리:

- sourcemap
- preload behavior
- cache invalidation
- debugger UX

## F4. CLI parity

현재 사용자-facing 기본은 `ttsc`, `ttsc -p`, `ttsc --noEmit`, `ttsc --watch` 다.

아직 좁은 부분:

- project reference build
- `--showConfig`
- `--init`
- TS7 parallel flags
- full `tsc --help --all`

## F5. release

`toolchain/*` 는 first-class publish 대상이다.

확인할 것:

- `ttsc` native binary 포함
- `ttsc` launcher 포함
- publish 순서: toolchain 후 consumer packages
- npm tarball dry-run
