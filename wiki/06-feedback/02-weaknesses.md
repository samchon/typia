# 02. Weaknesses

## W1. setup cost

typia는 runtime-only library 가 아니다. 사용자는 compiler host 를 이해해야 한다.

현재 setup 은 자동화되었지만, 사용자는 여전히 다음 경로를 구분해야 한다.

- `ttsc`
- `ttsx`
- `@typia/unplugin`
- browser/static-hosting compatibility lane

## W2. `ttsc` parity gap

현재 `ttsc` 는 full `tsc` clone 이 아니다.

- project reference build
- `--showConfig`
- `--init`
- TS7 parallel flags
- full help surface

## W3. plugin contract gap

현재 public plugin contract 는 작다.

- native backend 하나 중심
- `transformOutput()` text hook
- diagnostics / assets / phase model 은 좁음

## W4. `ttsx` execution split

CJS 와 ESM 실행 모델이 다르다.

- CJS: require hook
- ESM: cached project build + child process

## W5. website/browser lane split

native host lane 과 browser playground lane 이 같은 구현이 아니다. 문서에서 둘을 계속 분리해야 한다.

## W6. downstream second consumer 미검증

typia는 첫 consumer 다. nestia 같은 second consumer 로 generic host contract 를 검증해야 한다.
