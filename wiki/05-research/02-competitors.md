# 경쟁/대안 라이브러리 동향 (2025~2026)

> [사실] = 공개 수치/문서, [추정] = 해석. 기준 시점 2026-04.
>
> ⚠️ [09-audit/02-cycle2-features-research.md](../09-audit/02-cycle2-features-research.md) 감수 반영: Zod 다운로드·Valibot 번들·BAML·ArkType 수치 등 일부 정정. 개별 수치에 재확인 주석 추가.

## 1. 런타임 검증 (스키마 빌더 기반)

### Zod (v4)
- **별 42.4k**, 주간 다운로드 2026-04 기준 **101~144M** (Snyk 144.6M / Socket 101.9M / npm-trends ~102M). 이전 "31M"은 v4 런칭 시점 추가분으로 오해된 수치.
- v4 변화: 타입 인스턴스화 25,000→175, 문자열 14×/배열 7×/객체 6.5× 빠름, 코어 번들 -57%, **Zod Mini** 함수형 API, `.toJSONSchema()` 양방향, `z.email/uuid/url` 승격.
- 사실상 **AI SDK / LangChain / MCP TS SDK / Drizzle / Hono의 디팩토 표준**.
- typia 대비: 생태계 우위, 속도/번들 열세.

### Valibot (v1)
- 별 8.6k. **번들 최소화 시나리오 1위** — "완전 tree-shake된 로그인 폼" 기준 1.37 kB vs Zod 17.7 kB (Zod Mini는 ~3-6 kB). 일반 시나리오 차이는 이보다 작다.
- 함수형 pipe, validator 독립 export → tree-shake 극대화.
- 속도: Zod v3의 2× 정도, Zod v4 유사, **typia/TypeBox보다 한참 느림**.
- typia 대비: Edge 유리, 속도 열세.

### ArkType (2.x)
- 별 7.7k. **"1:1 TypeScript syntax"** — `type({ name: "string" })` 처럼 TS 문법을 문자열로 파싱.
- 속도: Zod 대비 최대 100× 주장. 독립 벤치도 한 자릿수~두 자릿수 배.
- 2.2 신규: `type.fn`, `arkregex`, `@ark/json-schema` 양방향.
- typia 대비: transformer 없이 자연 DX + 빠른 속도. 복잡 TS 추론 커버리지는 typia가 더 넓음 [추정].

### TypeBox
- 별 6.6k. **JSON Schema가 1급 시민**, AJV 결합 시 최상위.
- typia 대비: OpenAPI/AJV 직결 시 최강. LLM 전용 기능 부재.

### io-ts / Runtypes / Joi / Yup / Ajv
- io-ts: 마지막 push 2024-12 — **사실상 정체**.
- Runtypes 2.7k 유지.
- Joi/Yup/Ajv: 백엔드 레거시·JSON Schema 엔진으로 잔존, "TS-first" 1군 아님.

## 2. 컴파일/트랜스폼 기반 (typia 직접 경쟁군)

### ts-runtime-checks
- 별 403, last push 2025-01 — **저활동**. typia에 사실상 뒤처짐.

### Deepkit Type Compiler
- 별 3.5k, 활발. TS transformer가 타입을 **bytecode**로 내장 → 런타임 `typeOf<T>()`, `cast<T>`, `validate<T>`, `serialize<T>` 등 진짜 reflection 제공.
- **차별점 vs typia**: typia = 코드 생성(속도/사이즈), Deepkit = 타입 보존(reflection 범용성). Deepkit은 ORM/RPC/DI 결합한 프레임워크.

### typescript-is (원조)
- 별 960, last push **2023-07** — 사실상 유기. typia가 후계자 위치.

### typia
- 별 5.7k, 매우 활발. **전체 비교군 중 LLM function calling 전용 기능 보유**.

## 3. LLM / Function Calling / MCP 생태

### Vercel AI SDK (v5/v6)
- 툴 정의 `tool({ inputSchema: z.object(...) })` — Zod 표준. v5 Zod 4 지원.
- v6 dynamic tooling, global provider, agentic loop.
- typia 영향: **Standard Schema 어댑터 필수**.

### MCP TS SDK
- 2025-11-25 스펙부터 **Standard Schema 수용** — "Bring Zod v4, Valibot, ArkType, or any compatible library". 내부 peer는 zod/v4.
- typia 영향: Standard Schema `~standard` 심볼 구현이 즉시 통합 키.

### BAML
- 별 8.0k 매우 활발. `.baml` DSL → Python/TS/Ruby/Java/Go/Rust 클라이언트 생성. **Schema-Aligned Parsing**으로 LLM JSON 실패 관대.
- 벤치: OpenAI strict 대비 2~4× 빠르고 정확.
- typia 대비: 멀티언어/DSL — 팀 정책/프롬프트 버저닝 강점. typia는 zero-DSL pure TS 정체성.

### LangChain TS / LlamaIndex TS / Instructor (Py)
- 모두 Zod 기반. typia가 비집고 들어가려면 Standard Schema가 지름길.

## 4. 핵심 트렌드 4가지 (typia 시사점)

1. **Standard Schema 1.0 표준화**
   - Zod, Valibot, ArkType, Effect Schema, TypeBox 모두 `~standard` 구현. MCP/Next.js Server Actions/Hono/Drizzle 수용.
   - **typia 액션**: `typia.createValidator<T>()`가 `~standard` 프로퍼티 노출 → 즉시 생태계 편입. **현재 미구현 [추정]**.

2. **번들/Edge 경쟁**
   - Valibot 1.37 kB, Zod Mini.
   - typia: emit 코드만 남음 = "외부 라이브러리 0" — 마케팅 강화 가능.

3. **LLM tool-use = Zod 디팩토**
   - typia는 "type-only → schema auto"가 강점. 접착제(standard-schema 어댑터, zod 호환 출력 모드)가 필수.

4. **Vibe coding / type-first vs schema-first**
   - Cursor/Claude Code 같은 agent에게는 type-first(typia/ArkType)가 친화적. AutoBE/Agentica 사례로 강화 중.
   - Setup 마찰: typia/Deepkit/ts-runtime-checks의 공통 약점 — transformer 설치. tsgo/Rolldown/OXC 등 새 툴체인에서 호환성이 지속 과제.

## 5. 요약 표

| Library | Stars | 접근 | 강점 | typia 대비 |
|---|---|---|---|---|
| Zod v4 | 42.4k | 런타임 빌더+JIT | 생태계·표준 | 속도/번들 열세 |
| Valibot | 8.6k | 함수형 모듈 | 번들 최소 | 속도 열세 |
| ArkType 2 | 7.7k | TS-syntax DSL | DX+속도 | transformer 불요 |
| TypeBox | 6.6k | JSON Schema | OpenAPI | LLM 부재 |
| Deepkit | 3.5k | transformer+bytecode | reflection | 프레임워크 지향 |
| ts-runtime-checks | 403 | transformer | 0-runtime | 저활동 |
| typescript-is | 960 | transformer | — | 유기됨 |
| BAML | 8.0k | DSL+codegen | LLM SAP | DSL 필요 |
| **typia** | **5.7k** | TS 컴파일러 분석+codegen | 속도·LLM·JSON·Protobuf 올인원 | — |

## 핵심 통찰

typia의 **객관적 속도 우위**는 여전히 견고하다. 그러나 2025~2026 생태계의 진짜 변동축은 (a) Standard Schema 표준화, (b) MCP/AI SDK가 Zod를 사실상 표준으로 굳힌 점, (c) tsgo 전환의 그림자다. typia가 다음 1~2년에 잃지 않으려면:

1. **Standard Schema 어댑터를 first-class로 출시** (1주일 작업, 영향 큼)
2. **Setup 마찰 제거** — `typia init` 한 줄로 ts-patch+plugin+tsconfig 자동, unplugin이 기본 권장
3. **AutoBE/Agentica 같은 type-first AI 워크플로 사례를 표면에 노출** — "vibe coding 시대의 typia" 메시지
4. **벤치 시계열 사이트** (matrix.typia.io 식) — 신뢰의 정량 표시
