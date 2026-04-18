# 02. agentica — LLM function calling 프레임워크

> `/mnt/d/github/samchon/agentica` (samchon 관리). AutoBE의 핵심 의존.

## 한 줄 정의

> **agentica = typia.llm.application 위에 얹은 agentic LLM 프레임워크.** Class interface 한 번 쓰면 LLM이 함수를 호출할 수 있게 해주는 "agent DSL".

## typia와의 관계

- **핵심 의존**: `typia.llm.application<MyClass>()` 결과를 소비
- agentica가 LLM 호출 오케스트레이션, 에러 복구, 상태 관리를 담당
- typia는 "함수 스키마"를, agentica는 "실행 루프"를 제공

## 주요 제공 기능

- **MicroAgentica**: 작은 범위 agent 구성 유틸
- **IPointer**: 상태 관리용 포인터 기반 추상
- **Function calling abstraction**: OpenAI/Claude/Gemini/Llama 공통 인터페이스
- **Prompt histories**: 캐싱 + 컨텍스트 최적화
- **Agentic loop**: 에러 재시도, parse/coerce/validate 사이클

## AutoBE에서의 역할

AutoBE의 40+ 전문 agent는 각자 자체 `typia.llm.application<TheAgent>()` 스키마를 가지고, agentica의 **MicroAgentica 패턴**으로 LLM을 호출한다. agentica 없이는 AutoBE의 pipeline 불가능.

## tsgo 전환 영향

- **사용자 API 표면**: 전혀 불변
- **내부**: typia.llm.application이 Go engine 결과로 바뀌지만 agentica 입장에서는 동일한 ILlmApplication 객체를 받는다
- **릴리스 타이밍**: typia v13 (2028 Q2, LLM Go) 출시와 동기화

## 전환 전 / 후

| 시점 | agentica 구조 변화 |
|---|---|
| 현재 (2026 Q2) | typia v12 + 자체 TS 코드 |
| Phase 4 (2028 Q1-Q2) | typia v13 Go LLM engine 소비 시작, API 표면 동일 |
| Phase 6 (2029 Q1-Q2) | 검증 완료, "agentica next" 릴리스 |

## Wiki 상세

agentica 자체 구조·코드 분석은 별도 저장소 작업 범위. 본 master plan에서는 "typia의 LLM 엔진을 소비하는 레이어"로만 위치 확정.

→ 상세 흐름: [03. AutoBE](03-autobe.md) 에서 agentica 사용 예 참고.
