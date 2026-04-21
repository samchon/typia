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

- preview:
  - `npm i -D @typescript/native-preview ttsc`
  - `npm i -D ttsx`
- stable:
  - `npm i -D typescript ttsc`
  - `npm i -D ttsx`

## typia와의 관계

- typia는 `ttsc` / `ttsx` 를 설치해서 쓰는 consumer 다.
- typia setup 은 external dependency 로 `ttsc` / `ttsx` 를 설치한다.
- typia integration 은 standalone `ttsc` / `ttsx` product identity 위에서 정렬된다.
