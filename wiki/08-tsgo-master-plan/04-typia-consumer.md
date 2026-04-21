# 04. typia Consumer Plan

## 위치

typia는 `ttsc` / `ttsx` 의 consumer 다.

## 의미

- `@typia/core`
- `@typia/transform`
- `typia`
- `@typia/utils`

이 패키지들은 `ttsc` / `ttsx` platform 위에 올라가는 typia consumer 구현으로 재편된다.

## 선택지

### typia plugin 구현

- TS 구현
- Go 구현
- mixed 구현

세 경로 모두 가능하다.

## setup

`npx typia setup` 의 목표는 다음이어야 한다.

1. `@typia/ttsc` 설치
2. preview 기간에는 `@typescript/native-preview` 설치
3. 필요 시 `@typia/ttsx` 설치
4. legacy `ts-patch` 제거
5. typia config / tsconfig 정렬 (`@typia/ttsc/plugin/typia` 주입)

## 표현 원칙

- typia repo 내부 구조는 typia consumer 구현으로 서술한다.
- typia-specific codegen 구조는 typia plugin 구현으로 서술한다.
- `ttsc` 와 `ttsx` 는 standalone product 로 서술한다.
