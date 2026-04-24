# 02. 약점·위험요소 — 정직한 진단

[01-strengths.md](01-strengths.md)와 짝이 되는 문서다. 목적은 위험을 미리 표면화하고, 개선 우선순위를 분명히 하는 것이다.

## W1. tsgo 종속 위험 (생존 차원)

**가장 심각**. [05-research/03-tsgo-status.md](../05-research/03-tsgo-status.md):
- TypeScript 7.0 (Corsa) GA: 2026 mid/late
- **기존 Strada API 미지원** (DevBlog 공식 명시)
- in-process plugin 불가 — IPC만
- Issue #516 (Transformer Plugin) **milestone "Post-7.0"**, Microsoft 공식 답변 없음
- typia Issue #1534 (2025-03-13) **공식 플랜 없음**
- ts-patch Issue #181 **maintainer 응답 없음**

**핵심 위험**: TS 7.0이 stable 되고 사용자가 이주하기 시작하면 typia는 (지금 형태로는) 새 사용자를 받을 수 없다.

**핵심 판단**: 단순 어댑터 교체가 아니라 **18~24개월급 Go 재구현**이 필요하다.

→ 최신 단일 진실원: [08-tsgo-master-plan/](../08-tsgo-master-plan/).

## W2. Standard Schema 부분 구현 / 미홍보 (생태계 차원)

현재는 이미 부분 구현되어 있다.
- `packages/typia/src/internal/_createStandardSchema.ts`
- `typia.createValidate<T>()` / `createValidateEquals<T>()` 의 `~standard`
- transformer / programmer 경로의 `standardSchema` 옵션 배선

**시급**. [05-research/02-competitors.md](../05-research/02-competitors.md):
- Zod, Valibot, ArkType, Effect Schema, TypeBox 모두 `~standard` 인터페이스 구현
- MCP TS SDK 2025-11-25부터 Standard Schema 수용
- Next.js Server Actions, Hono, Drizzle 모두 수용

typia는 **이미 부분 구현 완료**이나:
- 공식 문서/마케팅 부재 — 외부에는 "typia는 Standard Schema 미지원" 인식 강함
- `createValidate` / `createValidateEquals`만 지원 — `createIs` / `createAssert` 등 다른 factory는 확장 여지
- MCP / AI SDK / LangChain / Hono 통합 예제 부족

→ **문서화·홍보 + 나머지 factory 확장**이 핵심이다.

## W3. Setup 마찰 (신규 사용자 차원)

이 약점은 typia의 사상이 가진 **구조적 비용**이다.

신규 사용자가 typia를 시도하려면:
1. `npx typia setup` 또는 수동으로 `@typescript/native-preview` + `@typia/ttsc` + `typia/lib/transform` 배선
2. 번들러 환경이면 `@typia/unplugin` 과 기본 `ttsc` 경로 중 어느 쪽을 쓸지 결정
3. IDE TypeScript Service가 transformer 결과를 직접 보여주지 않음 → 에러 메시지가 빌드 시에만 보이기 쉬움
4. `ts-node` / `tsx` 류 실행이 필요하면 `@typia/ttsx` 같은 runner를 추가로 이해해야 함

대조: zod는 `npm i zod`로 끝.

**완화 방향**:
- unplugin을 1급 시민으로 권장 (vite/webpack/rspack 사용자)
- `npx typia setup` 이 preview/stable lane, optional runner, bundler 대체 경로까지 한 번에 설명하고 정리하도록 더 매끄럽게
- "왜 transformer가 필요한가"를 setup 페이지 첫 문단에서 인정 + 그 비용으로 무엇을 얻는지 즉시 보여줌

## W4. 거대 파일 (유지보수 차원)

`packages/core/src` 내부:
- `programmers/internal/CheckerProgrammer.ts` — **1614 LOC**
- `programmers/RandomProgrammer.ts` — ~1200 LOC
- `programmers/json/JsonStringifyProgrammer.ts` — 1129 LOC
- `factories/internal/metadata/iterate_metadata_intersection.ts` — 211 LOC
- `factories/internal/metadata/emplace_metadata_object.ts` — 225 LOC

크기 자체보다 **단일 파일에 여러 책임이 혼재**한 점이 부담:
- CheckerProgrammer: 원자 처리 + 조합기 + 조인어 모두
- 알고리즘 핵심부 주석 거의 없음 (특히 union/intersection 처리)
- 신규 컨트리뷰터가 진입하기 어려운 곳

**제안**: 책임별로 파일 분리, 각 함수에 알고리즘 의도 주석 한 줄, 복잡한 분기에 ASCII 트리 주석 등.

## W5. 회귀 테스트 부재 (품질 차원)

`tests/test-typia-automated`가 168×40 조합으로 폭은 넓지만:
- **버전 간 회귀를 자동 잡는 fixture/snapshot 없음**
- 벤치마크는 머신별 폴더만, **시계열 추적 없음**
- LLM 통합(@typia/mcp/langchain/vercel)은 환경변수 의존 → CI에서 실제 LLM 콜 안 함
- TypeScript 마이너 버전 매트릭스 빌드 없음 (5.5/5.7/5.9 동시)

**위험**: 미래 어느 PR이 silent regression을 만들면 사용자가 issue 열기 전까지 모름.

**제안**:
- 핵심 기능별 emit 코드의 snapshot test
- 매주 main 머지 후 벤치 1줄 추가하는 시계열
- TS 매트릭스 CI (5.5/5.7/5.9/native-preview)
- LLM 통합은 mock LLM 응답으로 결정적 테스트

## W6. LLM 모델 분기 매뉴얼

`ILlmSchema`의 `IConfig.strict`와 모델별 호환 모드는 OpenAI strict 변경, Anthropic prompt caching, Gemini schema 진화에 따라 매번 손으로 추적해야 함.

**위험**: 한 모델 SDK가 breaking change를 하면 typia 사용자가 침묵 실패할 수 있음.

**제안**:
- 각 LLM 공급자별 호환성 페이지 (실제 함수 호출 결과 캡처)
- 매 분기 1회 호환성 smoke test (각 공급자 실제 호출)
- LLM 호환 모드는 별도 모듈로 분리 (`@typia/llm-openai`, `@typia/llm-anthropic` 등)

## W7. 어댑터 패키지의 SDK private API 의존

`packages/mcp/src/internal/McpControllerRegistrar.ts:101-190` Preserve 모드는 MCP SDK의 `private _registeredTools / _toolHandlersInitialized`에 접근.

**위험**: SDK 마이너 업그레이드로 private 명명이 바뀌면 즉시 깨짐.

**제안**:
- private API 사용 부분에 명확한 주석 + SDK 버전 범위
- `private API not available` fallback 경로
- CI 매주 latest SDK로 smoke test

## W8. JSON Schema OpenAPI 3.2 미지원

`@typia/interface/openapi/`는 V3.0 / V3.1 / V3.2 / SwaggerV2 모델을 들고 있지만 V3.2는 아직 정식 지원 부족 (Emended 모델로 대체).

**위험**: OpenAPI 3.2가 본격 채택되면 변환 갭 발생.

**제안**: V3.2 변환 정식 추가, 차이점 문서화.

## W9. Browser/Edge 런타임 지원 정보 부족

typia는 emit 코드만 남아 사실상 어디서나 동작하지만, **공식 호환성 매트릭스가 명시되지 않음**:
- Cloudflare Workers, Vercel Edge, Deno, Bun, Node 22+
- 각 런타임에서 typia 헬퍼(`_isFormatEmail` 등)가 동작하는지

**제안**: setup 페이지에 호환성 표 추가.

## W10. 마이그레이션 가이드 부재

class-validator → typia, zod → typia 마이그레이션 가이드가 없다. 신규 채택자가 가장 먼저 부딪히는 질문.

**제안**: `class-validator-to-typia.mdx`, `zod-to-typia.mdx` 페이지 작성. 같은 스키마를 양쪽으로 작성한 비교 + 변환 자동화 도구(가능하다면).

## W11. 사용자 정의 Format 확장 비용

`tags.Format<"my-custom-format">` 같은 사용자 정의 포맷을 추가하려면 typia 자체를 패치해야 함. 사용자가 brand 타입과 별도 검증 함수로 우회는 가능하지만 typia native 통합은 불가.

**제안**: 외부에서 `registerFormat("custom-name", regex | function)` 같은 API. 어렵지만 영향 큼.

## W12. SSR/RSC 시대 생태계 트렌드 추적

Next.js Server Actions, RSC, Tanstack Start 등이 빠르게 자리 잡는 중. typia는 이들과의 통합이 명시적이지 않음 (작동은 함).

**제안**: utilization 섹션에 Next.js Server Action / RSC / Tanstack 통합 가이드.

## W13. 마케팅의 "속도" 강조가 사상을 가린다

홈페이지 첫 인상이 "20,000× faster"인데, typia의 진짜 차별점은 **사상의 단일성**이다. 속도는 결과일 뿐.

**제안**: 첫 인상 메시지를 "Type once. Validate, serialize, schema-ify, LLM-ify, randomize. All from one TypeScript type."로 바꾸고, 속도는 **증거**로 한 단계 아래에 놓기. (이미 pure.mdx는 이 방향이지만 홈페이지 위쪽이 약함)

## 약점 13개의 우선순위

| # | 우선순위 | 영향 | 비용 |
|---|---|---|---|
| W2 Standard Schema 문서화·확장 | **최고** | 생태계 진입 | ~~1주~~ → **문서 1주 + 확장 2-3주** (부분 구현됨) |
| W1 tsgo 대응 | **최고** | 생존 | 6개월~1년 |
| W3 setup 마찰 | 높 | 신규 채택 | 1~2주 (자동화 + 문서) |
| W10 마이그레이션 가이드 | 높 | 채택 | 2주 (3개 가이드) |
| W5 회귀 테스트 | 높 | 품질 | 1~2주 |
| W13 메시지 정렬 | 중 | 인지 | 며칠 |
| W11 Format 확장 | 중 | DX | 1개월 |
| W12 RSC/Server Action 통합 | 중 | 트렌드 | 1주 |
| W4 거대 파일 리팩토링 | 중 | 컨트리뷰션 | 1~2개월 |
| W9 Edge 호환성 표 | 중 | 신뢰 | 며칠 |
| W6 LLM 모델 호환 자동화 | 중 | 품질 | 1개월 |
| W7 SDK private API | 낮 | 격리됨 | 며칠 |
| W8 OpenAPI 3.2 | 낮 | 미래 | 1개월 |

→ 다음 [03. 구체적 개선 제안](03-improvement-proposals.md)에서 위 항목 각각에 대한 실행 가능한 액션 아이템.
