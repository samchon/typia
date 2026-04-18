# 03. 구체적 개선 제안 — Action Items 모음

[02-weaknesses.md](02-weaknesses.md)의 13개 약점을 **실행 가능한 작업 단위**로 변환. 각 항목에 (우선순위 / 작업량 / 영향) 표기.

---

## A1. Standard Schema 어댑터 출시 — **최우선**

**우선 / 1주 / 영향 매우 큼**

### 무엇을
`typia.createValidate<T>()`, `typia.createIs<T>()` 등이 반환하는 객체에 `~standard` 프로퍼티를 노출.

### 왜
- Zod·Valibot·ArkType·Effect Schema·TypeBox가 모두 구현
- MCP TS SDK / Next.js Server Actions / Hono / Drizzle이 수용
- typia가 Zod 자리에 그대로 들어갈 수 있게 됨

### 어떻게
```ts
// 새 패키지 또는 @typia/typia에 추가
const validate = typia.createValidate<Member>();
validate["~standard"] = {
  version: 1,
  vendor: "typia",
  validate: (value) => {
    const result = validate(value);
    return result.success
      ? { value: result.data }
      : { issues: result.errors.map(e => ({ message: ..., path: e.path.split(".") })) };
  },
  types: { input: null as Member, output: null as Member },
};
```

이상적으로는 `@typia/transform`이 createValidate 호출을 변환할 때 자동으로 `~standard` 속성을 같이 emit.

### 검증
- MCP TS SDK 1.x latest로 typia validator를 tool inputSchema로 등록 → 동작 확인
- Vercel AI SDK `tool({ inputSchema: typiaValidator })` 동작 확인
- Next.js Server Action 입력 검증

---

## A2. 홈페이지 메시지 정렬 — **빠른 win**

**중 / 며칠 / 영향 큼 (인지)**

### 무엇을
홈페이지의 첫 인상을 "속도"에서 "사상"으로 옮김.

### Before
> Runtime validator is 20,000x faster than class-validator

### After
> **Type once. Validate, serialize, schema-ify, LLM-ify, randomize.**
> One TypeScript type. Zero runtime cost. Every output you need.
>
> *(20,000× faster than class-validator — that's the side effect.)*

### 왜
- 속도는 증거지 본질이 아님 — 본질은 "타입 한 번 = 모든 산출물"
- 다른 라이브러리들이 속도 따라잡기 시작하면 (Zod v4 JIT 등) 차별점이 사라짐
- "Pure TypeScript" 사상이 typia의 영구적 해자(moat)

---

## A3. Setup 마찰 자동화 — **높**

**높 / 1~2주 / 영향 큼**

### 무엇을
1. `npx typia init` 한 명령으로 ts-patch + tsconfig + scripts.prepare + IDE 권장 설정까지
2. 신규 사용자 가이드 첫 문단에 "왜 transformer가 필요한가"를 솔직히 설명 + 그 비용으로 얻는 것을 즉시 시각화
3. `vite-create`/`create-next-app` template (typia 옵션 포함)

### 왜
신규 채택의 가장 큰 장벽이 setup. zod는 `npm i zod`로 끝인데 typia는 4단계.

### 어떻게
- `typia init`이 패키지 매니저 감지 + 의존 설치 + tsconfig 수정 + prepare 스크립트 + IDE 설정(.vscode/extensions.json 권장) 한 번에
- "Why do I need a transformer?" FAQ 페이지 (3분 분량)
- 별도 starter template (typia-starter-vite, typia-starter-nextjs, typia-starter-nestjs)

---

## A4. 마이그레이션 가이드 3개 — **높**

**높 / 2주 / 영향 큼**

### 무엇을
`docs/migrations/`에 다음 3개 페이지:
1. `class-validator → typia` — DTO 클래스 변환, decorator → tags 매핑
2. `zod → typia` — schema → interface, z.infer → 직접 사용
3. `joi → typia`

각 페이지는:
- 같은 스키마를 양쪽으로 보여줌
- 전환 시 발생하는 일반 함정 (예: zod transform → typia에서는 별도 함수)
- 부분 전환 가능성 (혼용)
- 자동 변환 도구 (가능하면 codemod)

### 왜
신규 채택자의 첫 질문이 항상 "기존 Z를 어떻게 typia로 바꾸나". 답을 미리 준비.

---

## A5. 회귀 테스트 + 시계열 벤치 — **높**

**높 / 1~2주 / 영향 큼 (품질)**

### 무엇을
1. 핵심 기능 emit 코드의 **snapshot test** (jest snapshot)
2. 매주 main 머지 후 GitHub Action이 **벤치 1줄을 history.csv에 추가**
3. TypeScript 매트릭스 CI (5.5 / 5.7 / 5.9 / @typescript/native-preview)
4. LLM 통합 mock test (실제 LLM 호출 없이 결정적 응답)

### 왜
- 현재 자동 테스트는 **regression depth 높지만 over-time visibility 없음**
- 미래 PR의 silent regression 방지

### 어떻게
```
.github/workflows/regression.yml
.github/workflows/benchmark-history.yml
benchmark/history.csv (typia 버전, 핵심 지표 5~10개)
benchmark/charts/  (시계열 SVG 자동 갱신)
```

→ typia.io에 "Performance over time" 인터랙티브 차트 페이지

---

## A6. unplugin 1급 시민화 — **중~높**

**중 / 1주 / 영향 큼 (tsgo 대응의 일부)**

### 무엇을
1. setup 페이지에 vite/Next.js/rspack 사용자에게 unplugin을 **먼저** 권장
2. ts-patch는 "tsc 직접 빌드 시" 옵션으로 강조
3. unplugin이 "기본 권장 경로"임을 명시

### 왜
- tsgo 시대에 ts-patch는 수명 위험
- unplugin은 빌드 도구의 transform 훅을 쓰므로 typescript 모듈 패치 불필요
- 사용자 입장에서 setup이 더 단순

---

## A7. RSC / Server Action / Tanstack 통합 가이드 — **중**

**중 / 1주 / 영향 중간 (트렌드)**

### 무엇을
`docs/utilization/` 추가:
- `nextjs-server-action.mdx` — typia + Server Action 입력 검증
- `nextjs-rsc.mdx` — RSC props 검증
- `tanstack-start.mdx`
- `hono.mdx` (sValidator 통합)
- `cloudflare-workers.mdx` (Edge 런타임 호환성)

### 왜
- 2025~2026 빠르게 자리 잡는 패러다임
- 현재 utilization은 NestJS/tRPC/MCP/Vercel/LangChain만

---

## A8. 거대 파일 리팩토링 — **중**

**중 / 1~2개월 / 영향 중 (컨트리뷰션 + 유지보수)**

### 무엇을
- `CheckerProgrammer.ts` (1614 LOC) → 원자 / 조합기 / 조인어 / utility 4개 파일
- `RandomProgrammer.ts` (1200 LOC) → 타입별 generator 분리
- `JsonStringifyProgrammer.ts` (1129 LOC) → core / property / array / dynamic 분리
- `iterate_metadata_intersection.ts` (211 LOC) → 핵심부 ASCII 트리 주석

### 왜
- 신규 컨트리뷰터 진입 장벽
- LLM 코드 어시스턴트가 컨텍스트 윈도우에 못 담음
- 단위 테스트 가능성 ↑

### 위험
- 리팩토링 도중 동작 변경 위험 → snapshot test 먼저 (A5와 묶음)

---

## A9. LLM 모델 호환성 자동 검증 — **중**

**중 / 1개월 / 영향 큼 (품질)**

### 무엇을
1. 각 공급자별 호환성 페이지 + 실제 함수 호출 결과 캡처
2. 매 분기 1회 호환성 smoke test (OpenAI / Anthropic / Google / Llama 실제 호출)
3. 호환 모드를 분리 모듈로 (`@typia/llm-openai-strict`, `@typia/llm-anthropic`, ...)

### 왜
- 현재 `IConfig.strict` 한 플래그가 모든 차이를 흡수 → 디버깅 어려움
- 한 공급자 SDK가 breaking change를 하면 침묵 실패

---

## A10. SDK 어댑터 안정화 — **낮~중**

**낮 / 며칠 / 영향 작음 (격리됨)**

### 무엇을
- `mcp/internal/McpControllerRegistrar.ts:101-190` Preserve 모드의 private API 사용 부분에 SDK 버전 범위 명시 + fallback 경로
- 각 어댑터에 SDK latest CI smoke test (매주)

---

## A11. OpenAPI 3.2 정식 지원 — **낮**

**낮 / 1개월 / 영향 작음 (미래)**

### 무엇을
`packages/interface/openapi/OpenApiV3_2.ts` 모델 추가 + `OpenApiConverter` 변환.

---

## A12. Format 사용자 확장 — **중**

**중 / 1개월 / 영향 큼 (DX)**

### 무엇을
```ts
// typia.config.ts (TypeScript 설정 파일)
export default {
  formats: {
    "my-custom": /^X-[0-9]+$/,
    "my-validator": (value) => isValid(value),
  },
};
```
typia transformer가 이 설정을 읽어 사용자 정의 Format을 코드 emit에 포함.

### 왜
사용자가 `tags.Format<"my-custom">`를 native하게 쓸 수 있음.

### 어려움
transformer config 로딩 메커니즘 추가, brand 타입 typing 확장 (declare module).

---

## A13. Edge 런타임 호환성 매트릭스 — **낮**

**낮 / 며칠 / 영향 작음 (신뢰)**

### 무엇을
setup 페이지에 호환성 표 추가:

| 런타임 | typia core | LLM 어댑터 | 비고 |
|---|---|---|---|
| Node 18+ | ✅ | ✅ | 표준 |
| Node 22 | ✅ | ✅ | 권장 |
| Bun 1.x | ✅ | ✅ | |
| Deno 2.x | ✅ | ⚠️ | LLM SDK 호환성 확인 필요 |
| Cloudflare Workers | ✅ | ✅ | |
| Vercel Edge | ✅ | ⚠️ | |
| Browser | ✅ | ❌ | LLM SDK는 보통 서버용 |

각 행마다 actual smoke test가 CI에 있어야 신뢰 가능.

---

## A14. tsgo 대응 (별도 문서로) — **최우선**

→ [07-strategy/01-tsgo-strategy.md](../07-strategy/01-tsgo-strategy.md) 에서 단계별 시나리오와 함께.

---

## 우선순위 매트릭스 (실행 순서)

```
즉시 (0~2주):
  A1 Standard Schema  ★★★★★
  A2 메시지 정렬      ★★★★
  A3 setup 자동화 1단계 ★★★★

단기 (1~3개월):
  A4 마이그레이션 가이드 3개
  A5 회귀 + 시계열 벤치
  A6 unplugin 1급 시민
  A10 SDK 어댑터 안정화
  A13 Edge 호환성 표

중기 (3~6개월):
  A7 RSC/Server Action 가이드
  A9 LLM 호환 자동화
  A12 Format 사용자 확장

장기 (6개월~1년):
  A8 거대 파일 리팩토링
  A11 OpenAPI 3.2
  A14 tsgo 대응 (전 기간 병행)
```

→ 다음 [04. 사상에 대한 비판적 회고](04-philosophy-critique.md)
