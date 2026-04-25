# 06. Current Gaps

현재 구현을 기준으로 남은 gap 만 적는다.

## `ttsc`

- full `tsc` parity 는 아니다.
- project-reference build, `--showConfig`, `--init`, TS7 parallel flags 는 아직 public guide 의 중심이 아니다.
- plugin diagnostics / asset emit / phase model 은 아직 좁다.
- 서로 다른 native backend 여러 개를 한 번에 compose 하는 모델은 없다.

## `ttsx`

- CJS 는 in-process require hook 이다.
- ESM 은 build 후 child Node 실행이다.
- CLI option 은 JS API option 보다 적다.
- sourcemap/debugger/cache invalidation UX 는 더 검증해야 한다.

## typia

- native backend 중심으로 동작한다.
- website playground 같은 browser/static-hosting lane 은 별도 compatibility lane 이다.
- legacy TypeScript transformer 경로는 현재 코드베이스의 기본 경로가 아니다.

## release

- `toolchain/*` 는 `packages/*` 와 같은 first-class publish 대상이어야 한다.
- `ttsc` publish 후 `typia`, `ttsc` publish 순서를 맞춰야 한다.
- tarball 에 launcher, `lib`, native binary 포함 여부를 계속 dry-run 으로 확인해야 한다.
