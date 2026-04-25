# 01. Principles

## 현재 원칙

1. `ttsc` 와 `ttsx` 는 typia 전용 부속물이 아니다.
2. typia는 첫 consumer 이며, `typia/lib/transform` 으로 native backend 를 선언한다.
3. TypeScript v7 lane 은 Go native backend 와 JS host API 로 구성한다.
4. legacy TypeScript transformer object 호환은 현재 목표가 아니다.
5. 공개 계약은 작게 유지한다.

## 공개 계약

- `ttsc.build()`
- `ttsc.check()`
- `ttsc.transform()`
- `ttsc.definePlugin()`
- `ttsc` CLI / `register()` / `prepareExecution()`
- plugin `native.mode`, `native.binary`, `contractVersion: 1`

## 비공개 구현

- `typescript-go` internal struct pointer
- `go:linkname` shim detail
- typia metadata 분석 세부 구조
- emitted JS rewrite 내부 알고리즘
