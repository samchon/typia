# 01. Strengths

## S1. single source of truth

TypeScript 타입 하나에서 validator, JSON, LLM, protobuf, random 산출물이 나온다.

## S2. native backend path

현재 변환은 Go native backend 로 이행했다.

- `packages/core/native`
- `packages/transform/native`
- `toolchain/ttsc`

## S3. clear host / consumer split

`@typia/ttsc` 는 host 이고, typia는 consumer 다. `typia/lib/transform` 은 consumer plugin entry 다.

## S4. toolchain sibling

`@typia/ttsx` 는 별도 runner 로 분리되어 있고, `@typia/ttsc` 를 재사용한다.

## S5. setup cleanup

`typia setup` 은 현재 필요한 toolchain 을 설치하고 legacy `ts-patch` 설정을 제거한다.

## S6. public API continuity

사용자 API 는 계속 `typia.is<T>()`, `typia.assert<T>()`, `typia.json.*`, `typia.llm.*` 중심이다.
