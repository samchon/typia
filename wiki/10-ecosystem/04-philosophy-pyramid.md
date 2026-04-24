# 04. Philosophy Pyramid

현재 의미만 남긴다.

```
AutoBE
  consumes Agentica / typia / nestia outputs

Agentica
  consumes typia.llm.application()

nestia
  needs typia-compatible transform/schema generation

typia
  owns type-driven validation, JSON, LLM, protobuf, random generation

TypeScript-Go / ttsc
  provides the current compiler host lane
```

핵심은 단순하다.

- typia public API 는 downstream 의 안정 경계다.
- `ttsc` / `ttsx` 는 compiler/runtime toolchain 경계다.
- native backend parity 가 downstream 안정성을 결정한다.
