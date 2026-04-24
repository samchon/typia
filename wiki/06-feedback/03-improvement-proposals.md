# 03. Improvement Proposals

현재 구현 기준의 작업만 적는다.

## A1. `ttsc` diagnostics 정리

- structured diagnostics payload
- watch mode diagnostic UX
- plugin diagnostics boundary

## A2. `ttsc` CLI parity 확대

- project reference build
- `--showConfig`
- `--init`
- TS7 parallel flags

## A3. native plugin composition

- 여러 native backend composition
- rewrite ownership
- asset output ownership

## A4. `ttsx` runner hardening

- sourcemap
- cache invalidation
- CJS/ESM behavior documentation
- preload behavior

## A5. setup experiment 유지

- npm tarball install
- package.json cleanup
- tsconfig mutation
- failed setup side-effect guard

## A6. second consumer

nestia 같은 typia 외 consumer 로 `@typia/ttsc` contract 를 검증한다.
