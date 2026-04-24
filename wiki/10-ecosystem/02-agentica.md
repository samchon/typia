# 02. agentica

agentica는 `typia.llm.application()` 결과를 소비하는 downstream 이다.

## 현재 영향

- typia public API 가 유지되면 agentica 표면 변화는 작다.
- compiler host 변화는 agentica 내부가 아니라 typia build/setup 경로의 문제다.
- agentica가 받는 핵심 값은 계속 `ILlmApplication` / function schema 다.

## 확인할 것

- typia native backend 가 생성하는 LLM schema parity
- `typia.llm.application()` regression test
- agentica 실제 function calling scenario smoke

정확한 rollout 일정은 이 저장소의 current fact 가 아니다.
