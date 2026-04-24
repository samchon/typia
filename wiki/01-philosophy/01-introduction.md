# 01. Introduction

typia는 TypeScript 타입을 단일 진실원으로 삼는다.

## 무엇이 나오나

한 타입에서 다음 산출물이 나온다.

- runtime validator
- assertion
- JSON stringify / parse helper
- JSON Schema / OpenAPI / LLM schema
- Protocol Buffer codec
- random data generator

## 현재 구현

현재 기본 경로:

```bash
npx typia setup
ttsc
```

setup 은 다음을 수행한다.

- `@typescript/native-preview` 설치
- `@typia/ttsc` 설치
- `@typia/ttsx` 설치
- `tsconfig.json` 에 `typia/lib/transform` 추가
- legacy `ts-patch` 설정 제거

변환은 Go native backend 가 수행한다.

```
TypeScript type
  -> packages/core/native metadata
  -> JavaScript expression
  -> emitted JS rewrite
```

## 비용

typia는 런타임-only 라이브러리가 아니다. compiler host 가 필요하다.

- 일반 빌드: `ttsc`
- 번들러: `@typia/unplugin`
- TS runner: `ttsx`

이 비용을 받는 대신 타입/스키마 중복을 없앤다.
