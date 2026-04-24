# 03. autobe

AutoBE는 typia와 agentica를 크게 소비하는 downstream 이다.

## 현재 영향

- AutoBE가 직접 보는 typia 표면은 validator, JSON/schema, LLM application 쪽이다.
- typia public API 가 유지되면 compiler host 변경의 영향은 간접적이다.
- native backend parity 가 깨지면 AutoBE의 agent schema, validation, generated project tests 에 영향이 간다.

## 확인할 것

- `typia.llm.application()` parity
- `typia.assert` / `validate` parity
- JSON schema output parity
- AutoBE sample project smoke

정확한 AutoBE rollout 일정은 이 저장소의 current fact 가 아니다.
