# 01. nestia 개요 + tsgo 후속 정렬 메모

> `samchon/nestia`, v11.0.2, MIT.
>
> 상태 메모: typia 쪽 host / runner 전환은 이미 완료되었다. 이 문서는 그 이후 nestia가 어떤 adapter boundary 위에서 따라와야 하는지를 정리한다.

## 한 줄 정의

> **nestia = NestJS 위에 typia 사상을 적용한 프레임워크 통합 레이어. 타입 한 번에서 SDK·Swagger·E2E 테스트까지 자동 생성.**

## 실측 규모 (2026-04)

- **전체 TS 파일**: 566개
- **전체 src LOC**: 13,363 (packages/ 기준)
- **패키지 수**: 8개

> (이전 초안의 "47,655" 수치는 잘못되었음. Agent 실측으로 정정.)

## 8 @nestia/* 패키지 책임

| 패키지 | 책임 | typia 직접 의존 |
|---|---|---|
| **@nestia/core** | `@TypedRoute/Body/Query/Param/Headers/FormData/Exception` + `@WebSocketRoute` + transformer 8 + programmer 22 | `@typia/core` (MetadataFactory 직접 import), `@typia/interface`, `@typia/utils` |
| **@nestia/sdk** | OpenAPI(3.0/3.1) + 타입 안전 SDK + Mockup Simulator + E2E 자동 생성 | `@typia/core`, `@typia/interface`, `@typia/utils`, `typia` |
| **@nestia/fetcher** | 런타임 SDK fetch wrapper (`PlainFetcher`, `EncryptedFetcher`, `PartialFetcher`) | `@typia/interface`, `@typia/utils` (0-dep 런타임) |
| **@nestia/editor** | Swagger UI + Online TypeScript Editor | `@typia/interface`, `typia` (클라이언트) |
| **@nestia/migrate** | Swagger → NestJS 코드 생성 | `@typia/core` (MetadataFactory) |
| **@nestia/e2e** | E2E 테스트 유틸 (ArrayUtil, RandomGenerator, TestValidator) | 직접 의존 없음 (런타임) |
| **@nestia/benchmark** | 벤치마크 (E2E 기반) | 테스트용 |
| **nestia (CLI)** | CLI 진입점 | 다른 패키지 호출만 |

## Agent가 발견한 **가장 중요한 의존 3곳**

### A. @nestia/core transformer 체이닝
- 진입: `packages/core/src/transform.ts:1` — `ITypiaContext` import
- tsconfig: `plugins: [{ transform: "typia/lib/ttsc/plugin" }]` (nestia 쪽 typia 경로)
- 사용자 tsconfig: **2개 transformer 순차 실행** — typia → nestia

### B. @nestia/core programmer들의 MetadataFactory 직접 호출 ⚠️
파일:
- `packages/core/src/programmers/TypedBodyProgrammer.ts:1-12`
- `packages/core/src/programmers/TypedQueryProgrammer.ts`
- `packages/core/src/programmers/PlainBodyProgrammer.ts`
- 외 다수

패턴:
```ts
import { JsonMetadataFactory, MetadataFactory } from "@typia/core/...";
// 직접 호출
```

**위험도 ★★★★★**: typia v13에서 @typia/core가 Go로 포팅되면 nestia 빌드 즉시 불가.

### C. @nestia/sdk·migrate의 **런타임** MetadataFactory 호출 ⚠️⚠️
파일: `packages/sdk/src/generates/SwaggerGenerator.ts:1-14`

패턴: CLI가 실행 타임에 `MetadataFactory.analyze()` 호출 → `OpenApiConverter.from(metadata)` 적용.

**위험도 ★★★★**: 빌드 타임 transformer가 아닌 **런타임 JS가 MetadataFactory 직접 호출**. Go 포팅 후 이들은 Node에서 Go engine에 IPC 호출로 접근해야 함.

## 사용자 tsconfig (현재 이중 transformer)

```json
{
  "compilerOptions": {
    "plugins": [
      { "transform": "typia/lib/ttsc/plugin" },
      { "transform": "@nestia/core/lib/transform" }
    ]
  }
}
```

## tsgo 전환 시 3가지 통합 방안 비교

### 방안 A ★★★★★ 권장: ttsc에 nestia 기능 완전 흡수
```
@typia/ttsc (build adapter + bridge)
├─ typia-go engine (metadata, 13 programmers)
├─ nestia-go driver (@Typed* 데코레이터 감지)
├─ nestia-go programmer 22 (Http*/Validate*/WebSocket 등)
└─ openapi-go + sdk generator-go

@typia/ttsx (runner)
└─ @typia/ttsc 코어 재사용

사용자: plugins = [
  { transform: "typia/lib/ttsc/plugin" },
  { transform: "@nestia/core/lib/transform" }
]
(tsconfig 변경 없음. ttsc가 두 plugin 모두 내부 dispatch)
```

### 방안 B: @nestia/ttsc 별도 바이너리
- ttsc가 typia만 실행하고, @nestia/ttsc가 after hook
- 2 transformer 순서 관리 필요, IPC 오버헤드

### 방안 C: @nestia/core 부분 Go 포팅 (혼합)
- cgo/JSON-RPC로 Go engine과 통신
- 복잡한 IPC, 성능 저하

**방안 A 확정**: 단일 바이너리, 최고 성능, 사용자 마이그레이션 최소.

## 패키지 경계 확정표

| 패키지 | 결정 | 근거 |
|---|---|---|
| `@nestia/core` decorator body | **TS 유지** | NestJS 런타임 데코레이터 필수 |
| `@nestia/core` transformer 8 | **Go 포팅** (ttsc 흡수) | 빌드 타임 전용, MetadataFactory 직접 의존 |
| `@nestia/core` programmer 22 | **Go 포팅** (ttsc 흡수) | typia.CheckerProgrammer 확장 |
| `@nestia/sdk` runtime | **TS 유지 + API 변경** | CLI 기반, ttsc Go API 호출로 |
| `@nestia/sdk` generator 로직 | **Go 포팅** 고려 | 35K 규모 감안, 혼합도 가능 |
| `@nestia/migrate` CLI | **TS 유지 + API 변경** | ttsc Go API 호출 |
| `@nestia/fetcher` | **TS 유지** | 런타임 HTTP 클라이언트 |
| `@nestia/editor` | **TS 유지** | 브라우저 React SPA |
| `@nestia/e2e` | **TS 유지** | 테스트 유틸 |
| `@nestia/benchmark` | **TS 유지** | 벤치 |
| `nestia` CLI | **TS 유지, 축소** | ttsc launcher |

## nestia Go 포팅 LOC 예상

- @nestia/core transformer 8: ~7.5K Go
- @nestia/core programmer 22: ~15K Go (typia.CheckerProgrammer 확장)
- @nestia/sdk generator 일부 포팅: ~10K Go (선택적, 혼합)
- **총 nestia Go 추가: ~20~35K Go LOC**

typia-go 100~150K + nestia 20~35K = **총 120~185K Go LOC** (ttsc 바이너리).

## ttsc 연동 표면

지금 기준으로 nestia가 기대해야 할 것은 가상의 `@typia/ttsc/client` 가 아니라 다음 두 층이다.

1. **현재 확정 표면**: `@typia/ttsc` CLI와 JS API (`build/check/transform`)
2. **미래 추출 표면**: 공통 코어가 안정화된 뒤의 generic `ttsc` contract

즉, nestia는 당장 존재하지 않는 장기 IPC client에 걸지 말고, `@typia/ttsc` 기준의 adapter 경계를 먼저 맞춰야 한다.

## Phase별 이식 일정 (Agent 권고 5단계)

| Phase | 시점 | nestia 작업 |
|---|---|---|
| **Stage 0** | 2026 Q2 | `@typia/ttsc` adapter 경계 정리 + nestia-go driver 구조 설계 |
| **Stage 1** | 2026 Q3-Q4 | nestia v12.1~12.3 minor — @typia/core 호출을 "타입 안전 wrapper"로 격리 (예: `createValidateWithFactory()`) |
| **Stage 2** | 2027 Q1-Q2 | nestia-go transformer 기본 구현 (ttsc에서 @TypedRoute/Body 인식). @nestia/core v13-beta — deprecated marker + ttsc redirect 경고 |
| **Stage 3** | 2027 Q3-Q4 | @nestia/sdk·migrate CLI를 `@typia/ttsc` 연동 기준으로 재구성. 공통 코어가 검증되면 그때 generic API로 승격 |
| **Stage 4** | 2028 이후 | **nestia v14 major** — Go transformer 완전. legacy `ts-patch` 경로 제거와 migration guide 정리 |

## 사용자 마이그레이션 경로

### 현재 (v11)
```bash
npm i -D typescript typia nestia @nestia/core @nestia/sdk ts-patch
# package.json: "prepare": "ts-patch install"
# tsconfig: plugins: [{ transform: "typia/lib/ttsc/plugin" }, ...]
```

### 전환 후 (v14 / typia v14 동시)
```bash
npm i -D typia nestia @nestia/core @nestia/sdk
npx typia setup
# 결과: @typescript/native-preview + @typia/ttsc
# nestia transformer는 별도 integration layer에서 정렬
```

**tsconfig.json**: typia plugin 쪽은 `typia/lib/ttsc/plugin` 기준으로 바뀌고, nestia transformer는 그 위에서 별도 정렬이 필요하다.

## tsgonest 경쟁 대응 (Agent 재확인)

tsgonest가 `tsgonest migrate --apply`로 nestia 자동 흡수 시도. nestia의 방어:

1. **성능 동등**: Go 포팅으로 10× tsc+ts-patch
2. **기능 우위**: OpenAPI 3.0/3.1/3.2 전체 (tsgonest는 3.2만), Mockup Simulator, E2E 자동 생성, Online Editor, WebSocket 지원
3. **마이그레이션 문턱 0**: tsconfig/데코레이터 API 완전 동일
4. **AutoBE/Agentica 생태계**: tsgonest 불가능 영역

## 불확실성 (Agent 명시)

- **@typia/core의 v13 deprecation 시점** 미확정
- **ttsc의 IPC/API 스펙** 추가 안정화 여지 있음
- **pnpm 호이스팅**: nestia transformer의 substring matching이 pnpm virtual store에서 작동?
- **@nestia/editor standalone 번들**: browser에서 SDK 분석 시 Go engine 없이 어떻게?

## samchon에게 구체적 실행 권고 5

1. **Stage 0 (2026-06 말)**: `@typia/ttsc` adapter 경계와 nestia-go driver 설계 정리
2. **Stage 1 (2026 Q3-Q4)**: nestia v12.1~12.3 — @typia/core 호출을 wrapper로 격리 (향후 swap 용이)
3. **Stage 2 (2027 Q1-Q2)**: ttsc에 nestia-go driver 구현. @nestia/core v13-beta (deprecated 경고)
4. **Stage 3 (2027 Q3-Q4)**: @nestia/sdk·migrate CLI를 ttsc IPC로 재구성. v13 출시
5. **Stage 4 (2028+)**: nestia v14 major — ts-patch 완전 제거, migration guide + tsgonest 통합 문서

## 주요 파일 (Agent 조사 40개 중 핵심 15)

| 파일 | 책임 |
|---|---|
| `packages/core/src/transform.ts` | transformer 진입 |
| `packages/core/src/transformers/FileTransformer.ts` | 파일 순회 + import 주입 |
| `packages/core/src/transformers/TypedRouteTransformer.ts` | @TypedRoute 분석 |
| `packages/core/src/transformers/ParameterDecoratorTransformer.ts` | @TypedBody 등 감지 |
| `packages/core/src/transformers/WebSocketRouteTransformer.ts` | @WebSocketRoute |
| `packages/core/src/programmers/TypedBodyProgrammer.ts` | **@typia/core MetadataFactory 직접 호출** |
| `packages/core/src/programmers/TypedQueryProgrammer.ts` | 동일 |
| `packages/core/src/programmers/internal/CoreMetadataUtil.ts` | MetadataSchema 유틸 |
| `packages/core/src/decorators/TypedBody.ts` | decorator 런타임 (41 LOC) |
| `packages/core/src/decorators/TypedRoute.ts` | decorator 런타임 |
| `packages/core/src/decorators/WebSocketRoute.ts` | WebSocket decorator |
| `packages/sdk/src/generates/SwaggerGenerator.ts` | **런타임 MetadataFactory** |
| `packages/sdk/src/generates/SdkGenerator.ts` | 타입 안전 SDK 생성 |
| `packages/sdk/src/executable/sdk.ts` | CLI 진입 |
| `package.json` (루트) | 현행 setup 계약과 migration 영향면 검토 포인트 |

## 한 줄 결론

> **nestia의 핵심(@nestia/core transformer 8 + programmer 22)은 Go 포팅해 `@typia/ttsc` 공통 코어 후보 위에 얹는다. @nestia/sdk·migrate·editor는 TS 유지하되 현재는 `@typia/ttsc` 연동, 나중에 generic `ttsc` contract가 검증되면 그쪽으로 승격한다.**

→ 다음 [02-agentica.md](02-agentica.md)
