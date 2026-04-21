# 02. Products

## `ttsc`

- 역할: standalone compiler adapter / plugin host
- 책임:
  - compiler discovery
  - project loading
  - plugin dispatch
  - rewrite / emit orchestration
  - diagnostics / cache / watch

## `ttsx`

- 역할: standalone runner
- 책임:
  - `ttsc` 코어 재사용
  - `ttsx src/index.ts`
  - argv / env pass-through
  - source map
  - cache reuse

## 설치 모델

- preview 기본 경로:
  - `npm i typia`
  - `npx typia setup`
  - 결과: `@typescript/native-preview` + `@typia/ttsc`
- preview 수동 경로:
  - `npm i -D @typescript/native-preview @typia/ttsc`
  - runner 필요 시 `npm i -D @typia/ttsx`
- stable 예상 경로:
  - `npm i typia`
  - `npx typia setup`
  - 결과: `typescript@7` + `@typia/ttsc`
  - runner 필요 시 `npm i -D @typia/ttsx`

## typia와의 관계

- typia는 `@typia/ttsc` 를 기본 toolchain 으로 쓰는 첫 consumer 다.
- `typia setup` 의 기본 설치 대상은 `@typia/ttsc` 이고, `@typia/ttsx` 는 별도 sibling runner package 다.
- typia integration 은 standalone host / runner product identity 위에서 정렬된다.
