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
- preview 실행 경로:
  - `ttsx src/index.ts`
  - 결과: `@typia/ttsx` 가 `@typia/ttsc` host를 재사용
- preview 수동 경로:
  - `npm i -D @typescript/native-preview @typia/ttsc`
  - runner 필요 시 `npm i -D @typia/ttsx`
- stable 예상 경로:
  - `npm i typia`
  - `npx typia setup`
  - 목표 결과: `typescript@7` + `@typia/ttsc`
  - runner 필요 시 `npm i -D @typia/ttsx`

현재 구현 메모:

- `typia setup` 는 오늘 시점에 항상 preview compiler (`@typescript/native-preview`)를 설치한다.
- stable `typescript@7` 자동 전환은 문서상의 목표이며, 아직 setup wizard의 현재 동작은 아니다.

## typia와의 관계

- typia는 `@typia/ttsc` 를 기본 toolchain 으로 쓰는 첫 consumer 다.
- `typia setup` 의 기본 설치 대상은 `@typia/ttsc` 이고, `@typia/ttsx` 는 별도 sibling runner package 다.
- typia integration 은 standalone host / runner product identity 위에서 정렬된다.
