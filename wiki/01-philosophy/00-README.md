# 01. Philosophy

typia의 핵심 명제만 적는다.

## 핵심 문장

> TypeScript 타입을 단일 진실원으로 삼고, 필요한 산출물을 거기서 만든다.

## 현재 구현과의 연결

- 사용자는 `typia.is<T>()`, `typia.json.stringify<T>()`, `typia.llm.application<T>()` 같은 public API 를 호출한다.
- `typia/lib/transform` 은 native plugin entry 다.
- `packages/core/native` 가 타입을 분석해 metadata 를 만든다.
- 같은 metadata 에서 validator, JSON, LLM, protobuf, random 계열 산출물이 나온다.

## 읽기 순서

1. [01-introduction.md](01-introduction.md)
2. [02-pure-typescript.md](02-pure-typescript.md)
3. [03-design-principles.md](03-design-principles.md)
4. [04-positioning.md](04-positioning.md)
