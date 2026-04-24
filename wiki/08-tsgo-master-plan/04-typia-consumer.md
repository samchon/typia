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

- Go native 구현: TypeScript v7 native lane 의 주 경로
- mixed 구현: Node-side plugin manifest/config 와 Go native backend 조합
- TS 구현: generate/unplugin/browser compatibility 같은 별도 lane 또는 text-level adapter

기존 `typia/lib/transform` 형태의 TypeScript transformer 를 `typescript-go` 위에서
그대로 실행하는 것은 현재 목표가 아니다. 그 코드는 TypeScript v5/v6 또는 구버전
typia lane 에 속한다.

## setup

`npx typia setup` 의 현재 동작은 다음과 같다.

1. `@typia/ttsc` 설치
2. `@typescript/native-preview` 설치
3. legacy `ts-patch` 제거
4. typia config / tsconfig 정렬 (`typia/lib/ttsc/plugin` 주입)

현재 구현과 이상 사이의 편차:

- `@typia/ttsx` 는 이미 별도 sibling runner package 로 존재하지만, `typia setup` 가 optional runner 설치까지 자동화하지는 않는다.
- stable `typescript@7` 자동 전환은 아직 목표 상태다. 현재 wizard는 preview lane을 명시적으로 설치한다.

## 표현 원칙

- typia repo 내부 구조는 typia consumer 구현으로 서술한다.
- typia-specific codegen 구조는 typia plugin 구현으로 서술한다.
- `ttsc` 와 `ttsx` 는 standalone product 로 서술한다.
- legacy transformer 호환을 `ttsc` 의 핵심 목표처럼 서술하지 않는다.
