# 04. typia Consumer State

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

`npx typia setup` 의 현재 동작은 다음과 같다.

1. `@typia/ttsc` 설치
2. `@typescript/native-preview` 설치
4. legacy `ts-patch` 제거
5. typia config / tsconfig 정렬 (`typia/lib/ttsc/plugin` 주입)

현재 구현과 이상 사이의 편차:

- `@typia/ttsx` 는 이미 별도 sibling runner package 로 존재하지만, `typia setup` 가 optional runner 설치까지 자동화하지는 않는다.
- stable `typescript@7` 자동 전환은 아직 목표 상태다. 현재 wizard는 preview lane을 명시적으로 설치한다.

## 표현 원칙

- typia repo 내부 구조는 typia consumer 구현으로 서술한다.
- typia-specific codegen 구조는 typia plugin 구현으로 서술한다.
- `ttsc` 와 `ttsx` 는 standalone product 로 서술한다.
