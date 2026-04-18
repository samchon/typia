# Tests & Benchmark — 검증 폭과 측정 방식

## 1. 테스트 전략 — 자동 생성 + 수동 하이브리드

`tests/test-typia-automated`의 `TestAutomationController`(`src/build/TestAutomationController.ts:10-50`)가 `tests/template/src/structures`의 메타데이터를 읽어 **테스트 파일을 동적으로 생성**한다.

- `TestAutomationTemplate.ts:29-491` — 메소드별 템플릿(`is, assert, equals, random, protobuf encode/decode` 등)
- `TestAutomationMetadata.ts:4-18` — 구조체 메타 인터페이스 (ADDABLE, BINARABLE, JSONABLE, PRIMITIVE, RECURSIVE, RANDOM, QUERY, HEADERS, FORMDATA, RESOLVABLE)

데이터 생성기:
- `TestRandomGenerator` (randexp 기반 정규식 / UUID / 범위 난수)
- `Spoiler` — 타입 오염 데이터 생성 (negative test)
- 각 구조체는 `generate()`, `trail()`, `SPOILERS[]`를 export

## 2. 커버리지 — 168 구조체 × 다차원 필터

| 카테고리 | 예 |
|---|---|
| Array | recursive, union, matrix |
| Object | simple, hierarchical, recursive, union(implicit/explicit) |
| Tuple | fixed, variable |
| Set / Map / Native | Date, Uint8Array, Map, Set |
| Dynamic | computed key |
| Generic / Template literal / Brand | 모두 포함 |

각 구조체가 ADDABLE/BINARABLE/JSONABLE/RANDOM 플래그에 맞춰 is/assert/validate/equals/random/protobuf encode/decode 테스트를 자동 발생.

## 3. test-* 패키지 책임

| 패키지 | 역할 |
|---|---|
| test-typia-automated | 자동 생성 검증 테스트 |
| test-typia-generate | `typia generate` CLI 동작 검증 |
| test-typia-schema | 스키마 생성/변환 |
| test-vercel | Vercel AI SDK 통합 |
| test-langchain | LangChain 통합 |
| test-mcp | MCP 통합 |
| test-error | 에러 메시지 검증 |
| test-utils-automated | OpenAPI 자동 생성 |
| debug | 임시 개발용 (LLM application 등) |

## 4. 벤치마크 측정 (`benchmark/src`)

Benchmark.js 기반, **MB/sec 단위**.

검증:
- `is` (bool 반환), `assert` (예외), `validate` (오류 경로 수집)

에러 경로:
- `assert-error`, `validate-error` — 오염된 입력 처리 성능

특수:
- `optimizer` — 컴파일 타임 최적화 효과 (코드 크기 감소율)
- `stringify` — 직렬화 성능

서버 통합:
- `server-assert`, `server-stringify`, `server-performance` — Express/Fastify 통합

## 5. 결과 (i9-13900HX, v5.3.4 기준)

**우위 구간** (typia vs 차순위):
- 단순 객체: 270K vs typebox 256K (MB/s)
- 재귀 구조: 20K
- union: 4K+
- 에러 경로: typia 782 vs typebox 35, zod 109 — **압도적**
- optimizer: typia 287K vs typebox 8.45 — **33×**
- stringify: typia 2,045 vs fast-json-stringify 688, JSON.stringify 124

**약점/타이트한 구간**:
- zod의 primitive 처리 (119 vs typia 비슷)
- ultimate union처럼 분기 폭발 시나리오는 typia 1.8K MB/s — 절대값은 빠르나 차이 좁아짐

서버 벤치: fastify-typia ≈ fastify-pure (validator 오버헤드 미미).

## 6. 약점

1. **회귀 추적 부재** — 자동 생성은 현재 구조만 본다. 버전 간 회귀를 자동 잡는 fixture/snapshot 없음.
2. **엣지 케이스 제한** — Spoiler가 단순 타입 오류 위주. 복합 validation 시나리오(여러 tag 충돌, deep mutation, prototype pollution) 부족.
3. **통합 테스트 얕음** — LangChain/Vercel/MCP는 환경변수 의존이라 실제 LLM 콜은 CI에서 안 돌림.
4. **시계열 추적 약함** — 머신별 폴더만 있고 버전별 시간 추이 추적 없음.
5. **Bun/브라우저 성능 측정 불완전** — `start:bun` 별도, 브라우저 런타임 측정 미진.

## 7. 주요 파일

| 파일 | 책임 |
|---|---|
| `tests/test-typia-automated/src/build/TestAutomationController.ts` | 동적 생성 오케스트레이션 |
| `tests/test-typia-automated/src/build/TestAutomationTemplate.ts` | 메소드별 템플릿 정의 |
| `tests/template/src/structures/` | 168개 데이터 정의 |
| `tests/template/src/utils/TestRandomGenerator.ts` | 난수/UUID/문자열 |
| `benchmark/src/internal/BenchmarkServer.ts` | 범주별 자동 측정 |
| `benchmark/src/internal/BenchmarktReporter.ts` | 마크다운+SVG 리포트 |
| `benchmark/src/programs/createSuccessBenchmarkProgram.ts` | Suite 래퍼 (MB/sec 변환) |
| `benchmark/results/*/README.md` | 머신별 결과 |

## 핵심 통찰

168×40 조합형 자동 테스트는 **regression depth는 높지만 regression-over-time visibility가 낮다**. 다음 단계 권장:
- 버전별 벤치마크 시계열 (CI에서 main 머지마다 1줄 row 추가)
- "Spoiler 2.0" — prototype pollution / `__proto__` / `Object.create(null)` / Map/Set의 mutated entries 등 적대적 입력
- LLM 통합은 mock LLM 응답으로 결정적 테스트
- TypeScript major 업그레이드(특히 향후 tsgo)에 대비한 **smoke matrix** (TS 5.5/5.7/5.9 다중 빌드)
