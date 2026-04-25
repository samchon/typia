# 03. Design Principles

현재 코드에서 보이는 원칙만 적는다.

## P1. public TypeScript API 유지

사용자는 계속 `typia.is<T>()` 같은 API 를 호출한다. compiler host 와 native backend 는 내부 구현이다.

## P2. metadata IR 중심

`packages/core/native/metadata` 가 현재 IR 이다.

한 번 분석한 타입에서 validator, JSON, LLM, protobuf, random 산출물이 나온다.

## P3. adapter 는 얇게

`packages/transform/native` 는 typia call site 를 찾고 rewrite 를 준비한다. 타입 분석과 JS expression 생성은 `packages/core/native` 가 맡는다.

## P4. host 와 consumer 분리

`ttsc` 는 generic host 다. typia는 `typia/lib/transform` 으로 consumer native backend 를 선언한다.

## P5. diagnostics 는 compile surface 로 올린다

잘못된 project config, plugin config, native backend 실패는 stderr / exit code / JS API error 로 드러나야 한다.

## P6. legacy transformer 를 현재 경로로 섞지 않는다

`@typia/core` / `@typia/transform` TypeScript transformer package 는 현재 코드베이스에 없다. 현재 경로는 Go native backend 다.
