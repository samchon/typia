# 04. Philosophy Pyramid — typia 사상의 계층 확장

> typia의 "Pure TypeScript" 명제가 nestia → agentica → autobe로 **수직 확장**되는 구조. 이 확장이 세트의 진짜 이유.

## 5층 피라미드

```
  ┌─────────────────────────────────────────────┐
  │ Layer 4 — 자연어 (AutoBE)                    │
  │ "대화 한 번으로 백엔드 전체 생성"              │
  └─────────────────────────────────────────────┘
  ┌─────────────────────────────────────────────┐
  │ Layer 3 — Agent (Agentica)                   │
  │ "interface 한 번 쓰면 LLM이 함수를 호출"       │
  └─────────────────────────────────────────────┘
  ┌─────────────────────────────────────────────┐
  │ Layer 2 — HTTP (Nestia)                      │
  │ "controller 한 번 쓰면 SDK · Swagger · 테스트"│
  └─────────────────────────────────────────────┘
  ┌─────────────────────────────────────────────┐
  │ Layer 1 — 타입 (Typia)                       │
  │ "타입 한 번 쓰면 검증 · 직렬화 · 스키마 · 랜덤"│
  └─────────────────────────────────────────────┘
  ┌─────────────────────────────────────────────┐
  │ Layer 0 — 컴파일러 (TypeScript / tsgo)       │
  │ "타입 시스템이 진실을 보장"                   │
  └─────────────────────────────────────────────┘
```

각 층의 공통 원리: **"한 번 쓰면 나머지가 따라 나온다"** (single source of truth).

## 층별 명제의 정직한 진술

### Layer 1 — Typia
> **TypeScript 타입 한 번 쓰면, 검증/직렬화/JSON 스키마/LLM 스키마/Protobuf/랜덤이 자동 생성된다.**

진정성: interface/type alias 하나에서 13 namespace가 다 나옴.

### Layer 2 — Nestia
> **NestJS 컨트롤러 한 번 쓰면, 타입 안전 SDK · Swagger · E2E 테스트 · Mockup이 자동 생성된다.**

진정성: `@TypedRoute`, `@TypedBody` 한 번 작성으로 클라이언트 코드와 문서가 따라 나옴.

### Layer 3 — Agentica
> **클래스 인터페이스 한 번 쓰면, LLM이 그 함수를 호출 가능하다.**

진정성: `typia.llm.application<MyClass>()` 호출로 LLM function calling 전체가 설정됨.

### Layer 4 — AutoBE
> **자연어 대화 한 번 쓰면, NestJS + Prisma 백엔드가 100% 컴파일 가능한 상태로 생성된다.**

진정성: "todo 앱 만들어줘" → 요구분석 + ERD + OpenAPI + E2E 테스트 + 구현 + SDK까지.

## 피라미드의 수학

각 상위 층은 **하위 층의 결과를 입력으로 소비**한다:

- **Nestia가 typia를 소비**: `@TypedBody(dto)`는 내부적으로 `typia.assert<Dto>(body)` 실행
- **Agentica가 typia를 소비**: `typia.llm.application<Class>()` 결과를 LLM에 전달
- **AutoBE가 모두를 소비**: Agentica로 LLM을 부르고, nestia로 HTTP 생성하고, typia로 타입을 검증

**사상의 압축률**:
- 사용자가 작성: N줄의 타입/인터페이스
- 산출물: typia가 M1줄 생성 + nestia가 M2줄 + autobe가 M3줄
- M1 + M2 + M3 ≫ N

이것이 "Pure TypeScript" 사상의 **수직적 효용**.

## 사상적 일관성 (3대 공통 원칙)

### 1. 타입이 진실
- typia: 스키마 별도 작성 금지
- nestia: 데코레이터+타입으로 충분, class-validator 금지
- agentica: 함수 시그니처가 LLM 스키마
- autobe: AST가 중간 언어, 자연어 → AST → 코드

### 2. 컴파일 타임 경계
- typia: 빌드 시 검증 코드 emit
- nestia: 빌드 시 SDK·Swagger emit
- agentica: 빌드 시 function calling 스키마 emit
- autobe: 빌드 시 NestJS 앱 전체 emit (LLM 호출로)

### 3. 런타임 제로 오버헤드
- typia: 스키마 객체 없이 inline 검증
- nestia: 데코레이터가 transformer로 치환
- agentica: LLM 호출 외 런타임 비용 최소
- autobe: 생성된 앱 자체가 표준 NestJS (특수 런타임 없음)

## tsgo 전환 시 피라미드 영향

typia가 Go로 건너갈 때 각 층은 어떻게 영향받는가:

| 층 | 영향 | 변경 |
|---|---|---|
| Layer 4 AutoBE | **없음** (표면 API 불변) | typia interface를 그대로 소비. Prisma/NestJS 생성도 변함 없음 |
| Layer 3 Agentica | **거의 없음** | `typia.llm.application<T>()` 표면 불변 |
| Layer 2 Nestia | **중간** | 자체 transformer를 ttsc에 통합 필요 |
| Layer 1 Typia | **내부 Go 포팅** | 이미 master plan |
| Layer 0 tsgo | **도달 대상** | typescript-go 정복 |

→ 사용자 API 불변이 **4층 모두에서 보장**되면 피라미드는 건재.

## 경쟁자의 피라미드?

tsgonest는 Layer 1~2만 덮는다 (typia + nestia 기능 부분). AutoBE 같은 Layer 4 자동 생성은 없다.

Zod/Valibot은 Layer 1만 덮는다. nestia와 동등 기능은 없고, 에이전틱 레이어도 공식 아님.

**samchon의 피라미드는 유일 — 이것이 tsgonest가 쉽게 대체할 수 없는 해자**.

## 한 줄 결론

> **typia는 기반이고, nestia는 웹이며, agentica는 agent이고, autobe는 vibe coding이다. 한 명제 "Pure TypeScript"가 4층으로 수직 확장되며, tsgo 시대에도 이 피라미드는 그대로 유지된다.**

→ 다음: 구체 통합 전환 계획은 [05-integrated-tsgo-transition.md](05-integrated-tsgo-transition.md)
