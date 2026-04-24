# 05. Current Outcome

현재 repo 에서 이미 확인되는 결과만 적는다.

## 완료

- `toolchain/ttsc` package 존재
- `toolchain/ttsx` package 존재
- `ttsc` CLI 무인자 build 동작
- `ttsc -p tsconfig.json`, `ttsc --noEmit`, `ttsc transform --file=...` 경로 존재
- `ttsx src/index.ts` runner 존재
- `typia/lib/transform` native plugin entry 존재
- typia package 는 `@typia/ttsc` 에 의존
- `typia setup` 은 `@typescript/native-preview`, `@typia/ttsc`, `@typia/ttsx` 를 설치
- `typia setup` 은 legacy `ts-patch` 설정을 제거
- native typia backend 는 Go 로 존재

## 아직 좁은 부분

- native plugin composition 은 한 invocation 안에서 넓지 않다.
- `ttsx` CLI 는 JS API 보다 옵션 표면이 좁다.
- CJS runner 와 ESM runner 는 실행 방식이 다르다.
- `@typescript/native-preview` 기반 preview lane 이다.
- `typescript@7` stable lane 전환은 아직 현재 동작이 아니다.
