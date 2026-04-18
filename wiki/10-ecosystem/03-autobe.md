# 03. AutoBE — vibe coding의 실증 (Agent 실측 기반 v2)

> `/mnt/d/github/wrtnlabs/autobe@private` (Wrtn Technologies + samchon, AGPL-3.0 오픈 코어).

## 한 줄 정의

> **AutoBE = 자연어 대화만으로 프로덕션 레디 백엔드(TypeScript + NestJS + Prisma)를 100% 컴파일 성공하며 자동 생성하는 LLM 기반 코드 생성 플랫폼.**

## 실측 규모 (2026-04)

- **TS 코드**: 94,154 LOC (packages/ 기준)
- **파일 수**: 734개
- **패키지 수**: 9개 (interface, agent, compiler, rpc, utils, filesystem, ui, benchmark, estimate)
- **에이전트**: 40+ 전문화
- **이벤트 타입**: 65+
- **시스템 프롬프트**: 700+ 페이지, 30+ 마크다운 파일

## 3 핵심 개념

### 1. Waterfall + Spiral Pipeline
```
Requirements → Analyze → Database → Interface → Test → Realize
```
5 phase × 내부 spiral loop. 실패 시 재생성·수정.

### 2. Compiler-Driven Development
```
AutoBE Prisma Compiler → AutoBE OpenAPI Compiler → TypeScript Compiler
```
3-tier 검증. 진단이 AI에 피드백되어 **self-healing loop**.

### 3. Vibe Coding
```
Conversation → Requirements → AST → Code → Application
```
대화가 소프트웨어가 되는 event-driven pipeline (65+ event type).

## typia 5개 카테고리 활용 (Agent 실측)

| API | 용도 | 빈도 |
|---|---|---|
| `typia.llm.application<Class>()` | **40+ agent 각각의 function schema** | 매우 높음 |
| `typia.llm.controller` | LLM controller 결합 | 높음 |
| `typia.is/assert/validate` | RPC 호출·agent 간 통신 검증 | 매우 높음 |
| `typia.random<T>()` | Mock·테스트 데이터 | 중간 |
| `typia.tags.Format<"uuid"|"date-time"|...>` | 모든 interface 제약 | 매우 높음 |
| `typia.json.schemas()` | OpenAPI 생성 | 높음 |
| `typia.misc.literals<T>()` | RPC 자동 파싱 (method 반사적 등록) | 중간 |

→ **단일 프로젝트 기준 typia 최대 규모 실증**.

## Discriminated Union + Mapper Pattern (AutoBE 기초)

`packages/interface/src/histories/AutoBeHistory.ts` 실측 패턴:
```ts
export type AutoBeHistory =
  | AutoBeUserMessageHistory
  | AutoBeAnalyzeHistory
  | AutoBeDatabaseHistory
  | AutoBeInterfaceHistory;

export interface Mapper {
  userMessage: AutoBeUserMessageHistory;
  analyze: AutoBeAnalyzeHistory;
  // ... 65+ event/history
}

function handle<T extends AutoBeHistory.Type>(
  type: T,
  history: AutoBeHistory.Mapper[T]
) { /* TS exact type 추론 */ }
```

이 패턴이 **RPC, compiler feedback, UI 렌더링**까지 연쇄 활용.

## nestia 의존

| 영역 | 사용 | 용도 |
|---|---|---|
| `@nestia/core` | NestJS 프로젝트 템플릿 | 컨트롤러/DTO/모듈 자동 생성 |
| `@nestia/sdk` | SDK 생성 from OpenAPI | 타입 안전 클라이언트 SDK |
| `@nestia/e2e` | ArrayUtil, RandomGenerator, TestValidator | E2E 테스트 데이터 준비·검증 |
| `@nestia/fetcher` | `IConnection` | HTTP 연결 관리 |

## 생성물 (한 대화 → 한 프로젝트)

1. **Requirements Analysis** — 자연어 요구 정리
2. **Database Schema** — Prisma 스키마 + ERD
3. **API Specification** — OpenAPI 3.x
4. **E2E Tests** — `test/features/api` 전체
5. **API Implementation** — `src/providers/`
6. **Type-Safe SDK** — nestia 기반

실증 예시 (autobe-examples): **todo, reddit-클론, shopping(이커머스), ERP**.

## typia 사상의 수직 확장

### typia 원본 명제
> "타입 한 번 쓰면 검증·직렬화·스키마·LLM·Protobuf·random 자동"

### AutoBE 확장 명제
> "**자연어 한 번** → 타입 → **백엔드 전체**"

동일 `IUser` 타입에서 AutoBE가 생성하는 산출물:
- Prisma: `model User { id String @unique ... }`
- OpenAPI: `POST /api/users { id: "uuid" format, ... }`
- E2E: `prepare_random_user()` 함수 자동
- NestJS: `CreateUserDto`, `UserController`, `UserService`
- 타입 안전 SDK: `api.functional.users.create(connection, { id, email })`

**typia의 "타입 하나로 모든 것"이 "자연어 하나로 백엔드 전체"로 한 층 상승**.

## agentica와의 관계

```
Agentica (Function Calling Framework)
    ↑
    │ MicroAgentica 패턴
    │ 40개 agent = 40개 일회용 Agentica 인스턴스
    │ 각 agent의 typia.llm.application<T>() = function schema
    │ IPointer<T> = 호출 결과 캡처
    ↓
AutoBE (Orchestration)
```

- **Agentica**: "LLM이 함수를 호출하는 기술"
- **AutoBE**: "LLM이 호출할 함수들을 어떤 순서·어떤 입력으로 호출할지 조율"

## tsgo 전환 시 AutoBE 영향

### 사용자 API 불변 → AutoBE 내부 수정 거의 없음
- `typia.llm.application<T>()` 표면 API 동일
- 반환 `ILlmApplication` 구조 동일
- Go engine이 내부 스키마 생성 → AutoBE에는 투명

### 성능 이점 (기대)
- 40+ agent × 다수 호출 → typia 검증 hot path
- Go engine으로 **런타임 검증 10~100× 향상** 가능
- Prisma/OpenAPI 생성 속도 향상
- 전체 pipeline throughput ↑

### 전환 일정
- **2028 Q1-Q2** (Phase 4 typia LLM Go): AutoBE 내부 dogfooding
- **2029 Q2** (Phase 6 typia v14): "AutoBE next" 릴리스

## AutoBE → typia 개선 피드백 3개 (Agent 발견)

### 1. Discriminated Union 자동 매핑
- 현재: 65+ event type union discriminator 수동 Mapper 작성
- **제안**: `typia.discriminator<T>()` 유틸 추가

### 2. 동적 스키마 검증
- 현재: AutoBE의 Function Calling Schema가 런타임 수정됨
- **제안**: `typia.validate<T>(value, { partialSchema: {...} })` 검토

### 3. 조건부 Tag 통합
- 현재: 같은 필드가 context별 다른 제약 (예: 관리자 무제한 vs 일반 사용자 100)
- **제안**: 조건부 태그 검증 메커니즘

→ typia v13/v14 우선순위에 **반드시 반영 검토**.

## 상업 가치

- **AGPL-3.0 오픈 코어** + 상업 라이선스
- Wrtn Technologies 운영
- **typia 자금 조달 경로**: Wrtn이 typia 스폰서 가능
- **최대 레퍼런스**: "AutoBE가 typia로"는 typia 브랜딩에 큰 자산

## 경쟁자 비교 (Agent 분석)

| 항목 | v0 / bolt.new / lovable | **AutoBE** |
|---|---|---|
| 생성 대상 | 프론트엔드 (React) | **백엔드** (TS/NestJS/Prisma) |
| 정확도 | 프롬프트 기반, 재생성 반복 | **100% 컴파일**, compiler feedback loop |
| 문서화 | UI 스크린샷만 | **ERD + OpenAPI + 분석 리포트** |
| 테스트 | 없음 | **E2E 자동 생성** (typia + @nestia/e2e) |
| 타입 안전성 | 선택적 | **전 계층** (DB → API → SDK) |
| 언어 | React만 | TS 기본, Java/Python 계획 |

## 핵심 발견 5개 (Agent)

1. **"Pure TypeScript" → "Type-Driven Backend Generation"** — typia 사상의 자연스러운 수직 확장
2. **Discriminated Union Mapper Pattern = AutoBE 기초** — 65+ event, 8 history, 전 계층 타입 안전
3. **Function Calling as Intent Recognition** — Agentica + `typia.llm.application`으로 LLM 의도 구조화
4. **Compiler Feedback Loop = Self-Healing AI** — 생성 → 검증 → 실패 시 자동 수정 = 100% 컴파일 성공 비결
5. **WebSocket RPC + Event Sourcing = Reproducible AI** — 모든 상태 이벤트 기록 → "지난주 세션 재실행" 가능

## 상업 인프라

- **playground-ui / server**: 무료 온라인 데모 (delta 로드맵에서 SQLite 영속화 중)
- **hackathon-ui / server / api**: B2B 이벤트용 (토큰 제한 벤더 관리)
- **vscode-extension**: IDE 통합 (VS Code Marketplace)
- **website**: 공식 문서 + 벤치마크 (autobe.dev)

## typia 문서 확장 권고 (Agent)

### wiki 신설
`docs/04-ecosystem/autobe/`:
- `overview.md`
- `why-typesafe-backend.md`
- `llm-function-calling.md`
- `compiler-feedback-loop.md`
- `integration.md`

### 01-philosophy/ 에 추가할 것
"타입에서 코드까지: 자동 코드 생성의 진화"
- typia v1: "타입 → 검증" (런타임)
- typia v2: "타입 → API 명세" (아키텍처)
- typia v3 (미래): "타입 → 전체 백엔드" (AutoBE 모델)

## 최종 결론

> **AutoBE는 typia의 최대 실증이자 상업 기반. tsgo 전환으로 typia가 Go native가 되면 AutoBE 성능이 10~100× 향상되며, 이것은 typia 브랜딩과 재정 조달의 핵심 동력. AutoBE 사용 경험에서 나온 typia 개선 피드백 3개(discriminator, 동적 스키마, 조건부 tag)는 v13/v14 우선순위에 반드시 반영.**
