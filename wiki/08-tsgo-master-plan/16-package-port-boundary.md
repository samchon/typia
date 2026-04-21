# 16. Package Port Boundary — 어느 패키지를 Go로, 어느 패키지를 TS로

> 사용자 질문: "typia는 이제 타입 + internal functions + facade controller 수준으로 남기고 core나 transformer를 건너가야 하나?"
>
> **답: 그렇다.** 다만 지금의 제품·배포 단위는 `@typia/ttsc` 이고, **최종 설치 계약은 공식 compiler + `@typia/ttsc` side-by-side** 다. generic `ttsc` 분리는 안정화 이후다. 이 문서는 현행 9개 패키지와 `@typia/ttsc` 의 Go/TS 결정을 정리한다.

## 결정 원칙 (Layer 분리)

1. **TS 타입 시스템이 제공 가치의 본질인 것 → TS 유지** (@typia/interface, @typia/typia 타입 선언부)
2. **빌드 타임 코드 생성·타입 분석 → Go 포팅** (@typia/core, @typia/transform)
3. **런타임 JS에 emit되어 사용자 JS 안에서 실행되는 것 → TS 유지** (@typia/utils 런타임 부분)
4. **외부 Node SDK peer 의존이 필수인 것 → TS 유지** (@typia/mcp/langchain/vercel)
5. **빌드 도구(번들러/CLI/runner) → 공식 compiler 위 adapter** (@typia/ttsc, @typia/ttsx, @typia/unplugin)

이 원칙의 철학: **Go로 가야 할 것은 "타입 정보가 필요한 코드 생성"뿐**. 나머지는 TS가 정답.

## 현행 9개 패키지 + 신규 전환 드라이버 결정표

| 패키지 | 현재 | 결정 | 규모 변화 |
|---|---|---|---|
| `@typia/interface` | TS (8,508 LOC) | **TS 유지** | 미세 증가 (신규 LLM 타입 추가) |
| `@typia/typia` | TS (7,544 LOC) | **TS 유지, 얇게** | 7.5K → ~3K LOC (CLI와 facade만) |
| `@typia/core` | TS (30,307 LOC) | **삭제 → Go 포팅 (ttsc 내 engine)** | TS 0, Go ~80K~120K |
| `@typia/transform` | TS (4,306 LOC) | **삭제 → ttsc driver에 흡수** | TS 0, Go ~5K |
| `@typia/utils` | TS (규모 미측정) | **분리** — 런타임 TS, 변환 Go | 분할 |
| `@typia/ttsc` (신규) | — | **adapter package + bridge helper** | bridge 구현에 따라 변동 |
| `@typia/ttsx` (신규) | — | **runner package (ttsc 코어 재사용)** | TS 수백 LOC |
| `@typia/unplugin` | TS | **TS 유지, ttsc 바이너리 호출로 축소** | 절반으로 감소 |
| `@typia/mcp` | TS | **TS 유지** | 그대로 |
| `@typia/langchain` | TS | **TS 유지** | 그대로 |
| `@typia/vercel` | TS | **TS 유지** | 그대로 |

**사라지는 패키지**: `@typia/core`, `@typia/transform` (두 패키지 흡수됨)
**신규 패키지**: `@typia/ttsc`, `@typia/ttsx`
**유지 패키지**: `@typia/interface`, `@typia/typia`, `@typia/utils`, `@typia/unplugin`, `@typia/mcp`, `@typia/langchain`, `@typia/vercel`

## 각 패키지 상세

### @typia/interface — TS 유지 (★★★★★ 확정)

**역할**: 모든 공개 타입 (IValidation, IJsonSchema, ILlmApplication, tags, OpenApi, Protobuf wire).

**왜 TS**: TS 타입 시스템 안에서만 의미가 있다. Go로 옮기면 사용자가 import할 수 없다. 0-dep 순수 타입이므로 Go 변환 자체가 무의미.

**변화**: 없음. 오히려 LLM 신규 모델 대응으로 확장.

### @typia/typia — TS 유지, 얇게 (★★★★★ 확정)

**역할**: 사용자가 `import typia from "typia"` 하는 지점. `typia.is<T>`, `typia.json.stringify<T>` 등.

**왜 TS**: 사용자 타입 도구. Generic `<T>`를 받고 타입 추론을 트리거하며, 빌드 타임에 ttsc가 이 호출을 감지해 치환한다. npm에서 TS 사용자가 import하는 모듈이므로 **Go 이전 불가**.

**현재 7.5K LOC에서 ~3K로 축소**:
- 삭제: 현재 이 패키지에 있는 상당량의 "지원 로직" (executable, CLI wizards 등)은 `@typia/ttsc` 바이너리로 이동
- 유지: 타입 선언 (`export function is<T>(input: unknown): input is T`), 런타임 marker 함수 (빌드 시 치환되기 전에 있어야 할 placeholder), `tags` re-export

**얇아진 모습**:
```ts
// packages/typia/src/module.ts (예시)
export function is<T>(input: unknown): input is T {
  // 이 함수는 ttsc가 치환한다
  // 치환 없이 호출되면 throw
  throw new Error("typia.is<T>() was called without ttsc transform. Run `npx typia setup`.")
}
```

CLI (`typia setup`, `typia init`)는 `@typia/ttsc` CLI에서 제공하거나 `@typia/typia/bin` 에서 ttsc 바이너리를 proxy.

### @typia/core — **폐기 → Go 포팅** (★★★★★ 확정)

**현재 30,307 TS LOC의 책임**:
- MetadataFactory (타입 → MetadataSchema)
- 13 Programmers (IsProgrammer, AssertProgrammer, ..., JsonStringifyProgrammer, RandomProgrammer 등)
- 공통 helpers (UnionExplorer, CheckerProgrammer, FeatureProgrammer)

**왜 Go (bridge 기준)**: 현재 Phase 0 spike 는 upstream API가 미성숙하므로 typescript-go **내부 shim** 을 활용한다. 이 시점의 가장 빠른 경로는 Go 쪽 bridge/engine 이다.

**주의**: 이것을 최종 제품 계약으로 오해하면 안 된다. 장기적으로 `@typia/ttsc` 는 공식 compiler package 와 side-by-side 로 서야 하며, bridge 구현은 교체 가능해야 한다.

**Go 포팅 후**:
- `typia-go/internal/metadata/` — MetadataSchema (Go struct)
- `typia-go/internal/analyzer/` — MetadataFactory (Go)
- `typia-go/internal/codegen/` — 13 Programmers (Go)
- 배포: `@typia/ttsc` 바이너리 내부에 통합 (별도 패키지 X)

**예상 Go LOC**: 100~150K (tsgonest 72K/4 namespace 실측에서 13 namespace 전체로 비례 추정. 단순 TS LOC × 2~3 계산으로는 과소 추정이었음 — Audit 5 정정).

**TS 코드 운명**: `@typia/core`는 **v13부터 빈 패키지 또는 deprecated**. v14에서 완전 제거.

### @typia/transform — **폐기 → ttsc driver에 흡수** (★★★★★ 확정)

**현재 4,306 TS LOC의 책임**:
- `transform.ts` (ts-patch TransformerFactory 진입)
- `FileTransformer`, `CallExpressionTransformer`
- 5 transformer types, import 관리, diagnostic

**왜 폐기**: tsgo에서 `TransformerFactory` API가 존재하지 않는다. 이 전체 파이프라인이 **구조적으로 사라진다**. 대체는 ttsc의 Go driver.

**Go 포팅 후**:
- `ttsc/internal/driver/` — tsgo hook으로 `typia.*` 호출 감지
- `ttsc/internal/driver/dispatch/` — engine (구 core)으로 routing
- `ttsc/internal/driver/emit/` — 결과 AST 또는 문자열을 사용자 .js에 주입
- 예상 Go LOC: ~5K

**TS 코드 운명**: `@typia/transform` v13에서 **완전 제거** (사용자는 `ts-patch install`을 안 해도 됨). 이 패키지를 import하는 코드는 오류 메시지로 안내.

### @typia/utils — **분할**: 런타임 TS 유지, 변환 유틸 Go 포팅

**현재 책임**:
- 런타임 헬퍼 (`_isFormatEmail`, `_ProtobufWriter`, `TypeGuardError`, `RandomGenerator`) — 사용자 JS에 import
- 변환 유틸 (`OpenApiConverter`, `LlmSchemaConverter`) — 빌드 타임에 core가 호출

**분할**:
- **런타임 부분 → `@typia/utils/runtime`** (또는 `@typia/runtime`으로 개명)
  - TS로 유지 (Node/Edge/Bun/Deno 실행)
  - 사용자 JS의 `import { TypeGuardError } from "@typia/runtime"` 지점
- **변환 부분 → Go로 포팅 (typia-go engine 내부)**
  - OpenApiConverter, LlmSchemaConverter 등은 빌드 타임 전용
  - Go 측에서 MetadataSchema → OpenApi/LLM 스키마 변환 수행

**TS 코드**: `@typia/utils`의 런타임 부분 → 유지. 변환 부분 → 제거.

### @typia/ttsc — 신규 (★★★★★ 핵심)

**역할**: 사용자 build 진입점. 공식 compiler 옆에 설치되는 typia adapter package.

**제품 원칙**:
- 현재: typia monorepo 안의 `@typia/ttsc`
- 설치 계약: `@typescript/native-preview` + `@typia/ttsc`, 나중에 `typescript@7` + `@typia/ttsc`
- 나중: 공통 코어가 검증되면 generic `ttsc` 추출 검토
- 따라서 지금은 배포 단위와 추출 목표를 섞지 않는다
- current monorepo 의 Go driver / engine / shim 은 **bridge 구현** 이다

**내부**:
```
@typia/ttsc
  ttsc                           ← build/check/transform surface
  compiler locator               ← installed tsgo/native-preview/typescript@7 탐색
  bridge helper                  ← 필요 시 current Go spike / cache helper
  typia adapter                  ← typia 전용 dispatch / rewrite
```

현재 bridge 가 native helper 를 계속 가질 수는 있다. 다만 **compiler 자체를 영구히 번들링하는 것** 은 최종 계약이 아니다.

### @typia/ttsx — 신규 (★★★★★ 핵심)

**역할**: 사용자 실행 진입점. `ts-node`/`tsx` 대체 runner.

**원칙**:
- 별도 패키지로 배포한다
- 독자 compiler를 갖지 않는다
- `@typia/ttsc` 의 compiler locator / transform / cache 코어를 그대로 재사용한다

**내부**:
```
@typia/ttsx
  ttsx                           ← execute surface
  register / loader              ← CJS/ESM runner hook
  cache manager                  ← compiled JS cache
  node exec adapter              ← argv/env/source-map pass-through
```

즉, **코어는 `@typia/ttsc`**, **runner는 `@typia/ttsx`** 다.

### @typia/unplugin — TS 유지, 축소

**현재 책임**: Vite/Webpack/Rspack/... 플러그인. 내부에서 `ts.createProgram + typia transformer` 실행.

**전환 후**: typescript 모듈 import 제거. 대신 **`@typia/ttsc` CLI/API** 를 호출하고, `@typia/ttsc` 가 설치된 공식 compiler 를 재사용한다.

**구조 변화**:
- 현재 ~2K TS LOC → ~500 TS LOC
- 번들러별 어댑터만 남음
- 실제 변환은 ttsc 바이너리가 담당

### @typia/mcp / @typia/langchain / @typia/vercel — TS 유지 (★★★★★ 확정)

**역할**: ILlmController를 각 SDK의 Tool 타입으로 매핑.

**왜 TS**:
- 각 패키지가 **Node 전용 SDK**에 peer depend (`@modelcontextprotocol/sdk`, `@langchain/core`, `ai`)
- SDK가 Node 런타임에서 실행되므로 Go 포팅 의미 없음
- 각 패키지 규모도 작음 (~150~300 LOC)

**변화 없음**.

## 마이그레이션 계획

### Phase 2 (2027 Q1~Q2) — core 기초 이전
- `typia-go/internal/metadata/` 생성
- `typia-go/internal/analyzer/` — MetadataFactory 부분 완성
- `typia-go/internal/codegen/is.go`, `assert.go`, `validate.go`, `equals.go`
- `@typia/core`의 validators 관련 부분을 **deprecated**로 표기
- 사용자 영향: **없음** (ttsc가 routing)

### Phase 3 (2027 Q3~Q4) — JSON 이전
- `typia-go/internal/codegen/json_*.go`
- `typia-go/internal/openapi/` (변환 유틸)
- `@typia/utils` 중 OpenApiConverter를 **deprecated**

### Phase 4 (2028 Q1~Q2) — LLM 이전
- `typia-go/internal/codegen/llm_*.go`
- `typia-go/internal/llm/` (ILlmApplication 생성)
- **`@typia/core` v13 stable과 함께 완전 제거**

### Phase 5 (2028 Q3~Q4) — Misc + 런타임 분리
- `typia-go/internal/codegen/{misc,notations,reflect,functional,http}.go`
- `@typia/utils` 런타임 부분을 `@typia/runtime`으로 분리
- `@typia/utils` 변환 부분 제거

### Phase 6 (2029 Q1~Q2) — Random + Protobuf + v1.0
- `typia-go/internal/codegen/{random,protobuf}.go`
- **`@typia/transform` 완전 제거**
- **`@typia/typia` 축소 (7.5K → ~3K LOC)**
- typia v14 출시

## 사라지는 TS 의존 (사용자 관점)

```
v12 현재:
  npm i -D typescript typia ts-patch
  tsconfig: plugins: [{ transform: "typia/lib/transform" }]
  package.json: "prepare": "ts-patch install"
  
v14 목표:
  npm i -D typia
  npx typia setup --runtime=ttsc --runner=ttsx
  # setup이 @typia/ttsc + @typia/ttsx + 공식 compiler package 설치
  (tsconfig는 그대로)
  (ts-patch 완전 불필요)
```

**제거되는 의존**: `ts-patch`. `typescript`/`@typescript/native-preview` 는 **공식 compiler package** 로 남고, 사용자는 private tsgo repo 나 Go module 을 몰라도 된다.

## LOC 총량 비교

| 상태 | TS | Go | 총 |
|---|---|---|---|
| 현재 (v12) | ~50,665 | 0 | ~50,665 |
| v14 목표 | ~20,000 (interface 8K + typia 3K + utils runtime 3K + unplugin 0.5K + LLM 어댑터 5K) | ~150,000 (ttsc) | ~170,000 |

LOC은 **늘지만** 각 라인의 역할이 달라진다: TS는 타입 안정성, Go는 컴파일 속도 + 성능.

## 핵심 결론

> **@typia/typia는 얇은 facade + 타입으로 남고, `@typia/ttsc` 는 공식 compiler 옆의 build adapter, `@typia/ttsx` 는 그 코어를 재사용하는 runner가 된다. current Go engine/shim 은 bridge 로 유지하되 public contract 는 side-by-side 설치다. utils는 런타임/변환으로 분할 — 런타임만 TS. LLM 어댑터 3종은 SDK 의존으로 TS 유지.**

"어떤 패키지를 Go로"라는 선택이 아니라, **역할(타입 제공 vs 빌드 타임 코드 생성)에 따라 자연스럽게 갈라진 결과**다.

→ 연결 문서
- [06. ttsc Specification](06-ttsc-specification.md) — ttsc 내부 구조
- [07. typia-go Specification](07-typia-go-specification.md) — engine 내부 구조
- [08. Implementation Timeline](08-implementation-timeline.md) — Phase별 마이그레이션
