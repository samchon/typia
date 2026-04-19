# A. Boundary Architect — Cycle 1 초안

> 작성: 2026-04-19
> 역할: 패키지 경계 (Go/TS), 전체 패키지 토폴로지, **사용자 API 불변 보증**
> 지위: 본 초안은 conventions 1 사이클의 **A 역할** 제출본. 교차 리뷰(Cycle 2) 전까지 수정하지 않는다.
> 단일 진실원: `wiki/08-tsgo-master-plan/` (특히 15·16) — 본 초안과 충돌 시 wiki 08 이 우선 ([conventions/cycles/00-README.md:2](../../conventions/cycles/00-README.md)).
> 범위 구분: 본 초안은 **"어떤 패키지가 어떤 언어·어떤 Layer 에 속하며, 사용자 가시면 무엇이 변하지 않는가"** 만 다룬다. Go 엔진 내부 구조는 B, ttsc driver 구현은 C, `@typia/typia` TS 세부는 D, test는 E, release DX는 F 담당 — 침범 금지.

## 1. 관장 범위와 핵심 원칙

### 1.1 내가 책임지는 질문

| 질문 | 누가 답하는가 |
|------|---------------|
| 어떤 npm 이름의 패키지가 Go, 어떤 것이 TS 로 남는가? | **A (나)** |
| 그 패키지가 속한 Layer (L0~L5) 는 어디인가? | **A (나)** |
| 새 패키지를 추가할 때 어느 Layer·어느 언어를 선택하는가? | **A (나)** |
| 사용자가 npm 에서 import 하는 **공개 심볼** 중 무엇이 바뀌어도 되고 무엇이 불변인가? | **A (나)** |
| 13 namespace 중 사라지거나 변경되는 것이 있는가? | **A (나)** |
| tsconfig `plugins` 호환 범위는 어떻게 정의되는가? | **A (나)** |
| Go 엔진 내부의 모듈 구조 (metadata / analyzer / codegen 하위) | B |
| shim / patch / emitter 구현 디테일 | C |
| `@typia/typia` 의 TS 함수 시그니처 세부 · JSDoc · overload | D |
| 테스트 전략 / golden fixture | E |
| 7 플랫폼 배포 / release matrix | F |

A 는 **경계선을 긋고 그 경계선 위 사용자 약속을 확정**한다. 그 경계 너머 구현은 B~F 가 채운다.

### 1.2 핵심 원칙 (5)

#### P1. 사용자 API 는 불변 (Hippocratic boundary)

`typia.is<T>(input)`, `typia.json.stringify<T>(v)`, `typia.llm.application<Class>()` 세 줄로 대표되는 **공개 심볼의 이름·시그니처·반환 형태**는 v12 → v13 → v14 전 구간에서 한 자도 바뀌지 않는다.

**Why**: `wiki/08-tsgo-master-plan/01-preface.md:6-11` 에서 samchon 이 공식 약속. `wiki/08-tsgo-master-plan/15-executive-summary.md:77-83` 이 이를 1 페이지에 못 박았다. 이것이 무너지면 nestia·agentica·autobe 4층 피라미드가 같이 깨진다 (`wiki/10-ecosystem/04-philosophy-pyramid.md:89-101` — "4층 모두에서 보장되면 피라미드는 건재").

**위반 시 결과**: semver-major 가 아니라 **typia 전략 실패**. 전략은 "구현 언어 교체" 이지 "API 교체" 가 아니기 때문 (`wiki/08-tsgo-master-plan/04-strategic-options.md:58-67` v12 → v13+ 의 사용자 경험 단일성).

#### P2. 언어 선택은 Layer 가 결정한다 (Layer-driven, 아니 role-driven)

패키지가 **"타입 시스템 안의 계약"** 이면 TS. **"빌드 타임 타입 → 코드 생성"** 이면 Go. **"사용자 JS 런타임에 import 되는 헬퍼"** 이면 TS. **"외부 Node SDK peer 의존"** 이면 TS.

**Why**: `wiki/08-tsgo-master-plan/16-package-port-boundary.md:8-15` 의 5 원칙.

> Go 로 가야 할 것은 "타입 정보가 필요한 코드 생성" 뿐. 나머지는 TS 가 정답.

이 원칙은 성능이나 개인 선호가 아니라 **역할이 결정**한다는 뜻이다. 즉 Go 인지 TS 인지는 토론의 대상이 아니라 **Layer 지정의 자동 결과**.

**위반 시 결과**: (a) tsgonest 가 실증한 IPC 제거 이점 (`wiki/08-tsgo-master-plan/04-strategic-options.md:40-47` "IPC 오버헤드 제거") 을 잃는다. (b) 반대로 TS 로 남겨야 할 타입 선언을 Go 로 옮기면 사용자가 import 불가 (`wiki/08-tsgo-master-plan/16-package-port-boundary.md:42-43`).

#### P3. 13 namespace 불변 (계약 표면 유지)

현재 `packages/typia/src/` 의 `module.ts` + `functional.ts` + `http.ts` + `llm.ts` + `json.ts` + `misc.ts` + `notations.ts` + `protobuf.ts` + `reflect.ts` 로 export 되는 모든 namespace 는 동일한 모양으로 유지된다 ([packages/typia/src/module.ts:12-20](../../packages/typia/src/module.ts)).

**Why**: `wiki/08-tsgo-master-plan/15-executive-summary.md:81` "13 namespace 전부 유지". 경쟁자 대비 해자가 이 범위 ([wiki/08-tsgo-master-plan/02-threat-landscape.md:149-155](../../wiki/08-tsgo-master-plan/02-threat-landscape.md) — tsgonest 4 개 기능만 커버 vs typia 13).

**위반 시 결과**: tsgonest 의 차별점을 잃는다. 세트 생태계 (nestia·agentica·autobe) 가 특정 namespace 를 소비하고 있으므로 namespace 삭제는 상위 3 프로젝트 동시 파괴.

#### P4. tsconfig `plugins` 계약 호환

`tsconfig.json.compilerOptions.plugins` 에 적히는 문자열 (`"typia/lib/transform"`) 과 `{ transform: ..., ... }` 객체 스키마는 v13+ 에서도 읽을 수 있어야 한다. 내부 동작 (ts-patch → ttsc) 이 바뀌어도 **사용자가 적어둔 그 5 줄은 바꾸지 않는다**.

**Why**: `wiki/08-tsgo-master-plan/01-preface.md:13-21` 명시. 기존 사용자의 `tsconfig.json` 은 손대지 않고 **동작만 치환**하는 것이 마이그레이션 원칙.

**위반 시 결과**: 사용자가 수만 프로젝트에 흩어진 tsconfig 파일을 고쳐야 한다 → 실질적 semver-major. samchon 이 피하겠다고 선언한 바로 그 비용.

#### P5. Edge runtime emit 제약

`@typia/typia` 의 모든 namespace 가 emit 하는 코드는 `eval` / `new Function(code)` 를 쓰지 않는다. static code 만 생성.

**Why**: `wiki/09-audit/07-cycle7-missing-perspectives.md:11` "Edge runtime (Cloudflare Workers/Vercel Edge) — typia 의 결정적 구조 승리". `wiki/08-tsgo-master-plan/15-executive-summary.md:54-56` "Edge runtime 구조적 승리". 현재 v12 가 이미 이 성질을 가지고 있으므로 **이는 잃으면 안 되는 속성**.

**위반 시 결과**: Zod/Ajv 대비 유일한 구조적 차별점 상실 (Ajv 가 `new Function` 사용으로 Workers 에서 crash — 같은 인용). Cloudflare/Vercel/Deno Deploy 시장 전체 포기.

---

## 2. 규약 조목

각 규약: **ID · 제목 · 본문 · Why (인용) · 위반 시 결과**.

### 2.1 패키지 경계 — 어떤 이름의 패키지가 어떤 Layer 인가

#### BND-PKG-01. Layer 6 계층 정의 (L0 ~ L5)

**본문**
모든 typia 패키지는 아래 6 계층 중 **정확히 하나**에 속한다. 계층은 "의존이 위→아래로만 흐르는 방향성" 으로 정의된다.

| Layer | 이름 | 언어 | 예시 |
|-------|------|------|------|
| L0 | Types | TS 고정 | `@typia/interface` |
| L1 | Facade | TS 고정 (얇게) | `@typia/typia` |
| L2 | Engine | **Go 고정** (v13+) | `@typia/ttsc` 내부 `internal/engine/` (구 `@typia/core` 흡수) |
| L3 | Runtime helpers | TS 고정 | `@typia/utils` (런타임 부분) |
| L4 | Build integration | Go (본체) + TS (얇은 launcher) | `@typia/ttsc`, `@typia/unplugin` |
| L5 | LLM adapters | TS 고정 | `@typia/mcp`, `@typia/langchain`, `@typia/vercel` |

Layer 는 **Go/TS 선택 + 의존 허용 방향 + 사용자 가시성** 을 동시에 규정한다.

**Why**
- Layer 분리 자체의 기원: `wiki/08-tsgo-master-plan/15-executive-summary.md:27-36` 의 "패키지 포팅 경계 (Layer 원칙)" 표 6 행.
- Layer 책임의 철학: `wiki/08-tsgo-master-plan/16-package-port-boundary.md:8-15` "Go 로 가야 할 것은 타입 정보가 필요한 코드 생성 뿐".
- 현재 실체: `wiki/02-architecture/03-package-graph.md:48-60` 의 Layer 0~4 표는 이미 v12 에서 준수됨 (L4a/L4b/L4c 세분 → 본 규약은 L4 단일).

**위반 시 결과**
- 의존이 역류하면 순환 의존 발생 → 현재 v12 의 강점 (`wiki/02-architecture/03-package-graph.md:60` "순환 없음. 이 깨끗함이 최대 자산") 붕괴.
- Layer 혼란 시 신규 패키지 추가 때마다 논쟁 반복.

#### BND-PKG-02. L0 Types — `@typia/interface` 는 영구 TS·0-dep

**본문**
`@typia/interface` 는 **영구히 TS 로 유지**하며 **외부 런타임 의존 0 개** 를 유지한다 (`@types/*` 타입 전용 의존 제외). Go 포팅하지 않는다. `IValidation<T>`, `IJsonSchema*`, `ILlmApplication*`, `OpenApi*`, `tags.*`, `IMetadataSchema*`, `IRandomGenerator` 등 모든 공개 타입은 여기에 정의된다.

**Why**
- 원문: `wiki/08-tsgo-master-plan/16-package-port-boundary.md:38-45` "TS 유지 ★★★★★ 확정. TS 타입 시스템 안에서만 의미가 있다. Go 로 옮기면 사용자가 import 할 수 없다. 0-dep 순수 타입이므로 Go 변환 자체가 무의미".
- v12 상태: `wiki/03-packages/01-interface.md:6-11` "0-dependency 순수 타입 계층. 모든 패키지가 의존하는 ABI".
- 실측 코드: [packages/interface/src/index.ts:1-9](../../packages/interface/src/index.ts) — http/schema/openapi/typings/utils/metadata/protobuf/tags 만 re-export (외부 dep 없음).
- package.json: [packages/interface/package.json:25-28](../../packages/interface/package.json) devDependencies 에 `rimraf`, `typescript` 뿐.

**위반 시 결과**
- 외부 dep 추가 시 `@typia/interface` 를 import 하는 6 패키지 (`utils/core/transform/mcp/langchain/vercel`) 모두에 dep 가 전파된다 (`wiki/02-architecture/03-package-graph.md:78-88` 의존성 표).
- Go 이식 시 사용자는 타입을 import 불가 → L1 `@typia/typia` 의 generic `<T>` 선언 자체가 붕괴.

#### BND-PKG-03. L1 Facade — `@typia/typia` 는 얇게 TS 유지

**본문**
`@typia/typia` 는 v13+ 에서도 TS 로 유지된다. 단, 현재 7.5K LOC 를 ~3K 로 축소한다. 유지 항목:

1. 모든 public function 의 **타입 선언** (`export function is<T>(input: T): input is T` 등)
2. 각 함수의 **런타임 marker 구현** — 치환되지 않으면 `NoTransformConfigurationError` 던지는 stub ([packages/typia/src/transformers/NoTransformConfigurationError.ts](../../packages/typia/src/transformers/NoTransformConfigurationError.ts), [packages/typia/src/module.ts:86-89](../../packages/typia/src/module.ts))
3. 13 namespace re-export (`export * as json from "./json"` 등 — [packages/typia/src/module.ts:12-20](../../packages/typia/src/module.ts))
4. `@typia/interface` 재-export ([packages/typia/src/re-exports.ts](../../packages/typia/src/re-exports.ts))
5. `TypeGuardError` class ([packages/typia/src/TypeGuardError.ts](../../packages/typia/src/TypeGuardError.ts))

제거 항목 (L4 로 이동):
- `executable/` CLI → `@typia/ttsc` bin 으로 이동 (BND-PKG-10 참조)
- `transform.ts` re-export → v13 에서 무의미 (BND-PKG-05 참조)
- `programmers/TypiaProgrammer.ts` → L4 driver 내부로 흡수

**Why**
- 원문: `wiki/08-tsgo-master-plan/16-package-port-boundary.md:46-66` "TS 유지, 얇게 ★★★★★ 확정. 현재 7.5K LOC 에서 ~3K 로 축소. 사용자가 import 하는 모듈이므로 Go 이전 불가".
- 얇아진 구체 예시: 같은 문서 57-64 라인의 코드 샘플 (`throw new Error("typia.is<T>() was called without ttsc transform. ...")`) — 이미 실제 코드 [packages/typia/src/module.ts:87-89](../../packages/typia/src/module.ts) 에서 유사 패턴 사용 중.

**위반 시 결과**
- CLI 를 L1 에 유지하면 `commander/inquirer` 의존이 typia import 트리에 남음 → 라이브러리 사용자에게 전파 ([wiki/02-architecture/03-package-graph.md:106-112](../../wiki/02-architecture/03-package-graph.md) "CLI 의존이 라이브러리 사용자에게 전파 안 됨" 이 현재 강점).
- Go 로 이전하면 사용자 `import typia from "typia"` 의 타입 추론 불가능.

#### BND-PKG-04. L2 Engine — `@typia/core` 는 v13 beta 시점부터 Go 로 이전

**본문**
`@typia/core` (v12 현재 ~30,307 LOC TS) 는 v13 alpha 까지는 TS 로 유지되나, **v13 stable 출시 (2028 Q2) 시점까지 전체 Go 포팅 완료** 후 npm 배포본은 **deprecated shell** (빈 패키지) 로 남는다. v14 (2029 Q2) 에서 npm 배포 자체를 중단한다.

Go 이식 대상:
- MetadataFactory (`packages/core/src/factories/MetadataFactory.ts`) + internal metadata 함수군 (`wiki/03-packages/02-core.md:100-106`)
- 13 Programmers (IsProgrammer / AssertProgrammer / ValidateProgrammer / JsonStringify... / RandomProgrammer / ProtobufEncode... / LlmSchema... 등, [wiki/03-packages/02-core.md:108-124](../../wiki/03-packages/02-core.md))
- 공통 helpers (UnionExplorer, CheckerProgrammer, FeatureProgrammer, StringifyJoinder, AtomicPredicator 등)

배포 경로: v13 시점 Go 코드는 `@typia/ttsc` 바이너리 내부 `internal/engine/` 에 존재 ([packages/ttsc/README.md:11-23](../../packages/ttsc/README.md) 레이아웃 참조). **별도 `typia-go` npm/Go 패키지는 존재하지 않는다** — wiki 가 과거 "typia-go" 를 별도 프로젝트로 표기했던 관행은 `wiki/08-tsgo-master-plan/00-README.md:47` v2 개정으로 폐기됨 ("ttsc + typia-go 는 한 시스템의 두 층. 분리 결정은 존재하지 않는다" — [04-strategic-options.md:14](../../wiki/08-tsgo-master-plan/04-strategic-options.md)).

**Why**
- 원문: `wiki/08-tsgo-master-plan/16-package-port-boundary.md:68-86` "★★★★★ 확정. Node 프로세스 spawn 은 파일당 IPC 수십~수백 ms 오버헤드. typescript-go 가 Go 면 같은 프로세스의 Go 코드가 접근해야 한다".
- 통합 이유: `wiki/08-tsgo-master-plan/04-strategic-options.md:16-48` 관점 1~4 (하나의 Go 바이너리, IPC 제거, 중복 투자 없음, UX 단일).
- 예상 Go LOC: 같은 16번 83행 "100~150K (tsgonest 72K/4 namespace 실측에서 13 namespace 전체로 비례 추정)".

**위반 시 결과**
- Node IPC 유지 시 `wiki/08-tsgo-master-plan/04-strategic-options.md:42-44` 의 "파일당 수십~수백 ms IPC 오버헤드" 가 그대로 남음 → tsgonest 대비 성능 경쟁력 상실.
- `@typia/core` npm 배포를 유지하면 사용자가 v13 에서 `@typia/core` 직접 import 하는 잘못된 경로가 계속 생성됨.

#### BND-PKG-05. `@typia/transform` 은 v13 에서 폐기

**본문**
`@typia/transform` (v12 현재 ~4,306 LOC TS) 는 **v13 첫 stable 릴리스부터 npm 배포 중단**. TransformerFactory 진입점 ([packages/transform/src/transform.ts](../../packages/transform/src/transform.ts)) 은 tsgo 가 지원하지 않는 API 이므로 구조적으로 사라진다.

대체: 전체 책임은 `@typia/ttsc` 의 Go driver (`internal/driver/`, `cmd/ttsc/`) 로 이동.

v13 migration: 사용자가 `npm i -D typia` 후 `npx typia setup` 실행 시 이 패키지 의존을 자동 제거. `@typia/transform` 이 package.json 에 남아 있으면 setup wizard 가 제거 알림 표시.

**Why**
- 원문: `wiki/08-tsgo-master-plan/16-package-port-boundary.md:87-102` "★★★★★ 확정. tsgo 에서 TransformerFactory API 가 존재하지 않는다. 이 전체 파이프라인이 구조적으로 사라진다".
- tsgo 기술 제약: `wiki/08-tsgo-master-plan/02-threat-landscape.md:11-13` "in-process plugin 불가 — Go 런타임 다중 로드 불가", "공식 transformer API 없음 — Issue #516 Post-7.0 milestone".
- 현재 책임: `wiki/03-packages/03-transform.md:1-8` "ts-patch / unplugin 이 호출하는 TransformerFactory 진입점. FUNCTORS 디스패치". 이 역할이 Go driver 로 이전되는 것이 C 의 구현 책임.

**위반 시 결과**
- v13 에 `@typia/transform` 이 남아 있으면 사용자는 "뭘 쓰는 건지" 혼란 → 지원 질문 폭증.
- ts-patch 경로 유지 압박 → samchon 의 공식 입장 ("ts-patch 경로는 2028 말 graceful deprecation", [00-README.md:49](../../wiki/08-tsgo-master-plan/00-README.md)) 훼손.

#### BND-PKG-06. L3 Runtime — `@typia/utils` 는 런타임 TS 유지 + 변환부 Go 이전 (분할)

**본문**
`@typia/utils` 를 **두 부분으로 분할**한다:

(a) **런타임부 → `@typia/utils` 유지 또는 `@typia/runtime` 으로 rename (v13 stable 결정).**
- `TypeGuardError` (현재 `@typia/typia` 에 있음 — 주의: A 의 경계선에서 이 위치는 B/D 교차 검토 필요)
- `_isFormatEmail / _isFormatUuid / _isFormatIpv4 / _isTypeUint32 / _isUniqueItems / _isBetween` 등 — 현재 [packages/typia/src/internal/](../../packages/typia/src/internal/) 에 있음. 이 디렉터리 전체는 런타임 import 대상이므로 **L3 에 속함**. `@typia/typia` 내에 있는 것은 물리적 배치일 뿐 Layer 는 L3.
- `_ProtobufReader / _ProtobufWriter / _ProtobufSizer`
- `_httpFormDataRead* / _httpQueryRead* / _httpParameterRead* / _httpHeaderRead*`
- `_miscClone* / _notation* / _random*`
- `HttpError`, `HttpLlm`, `HttpMigration` ([packages/utils/src/http/](../../packages/utils/src/http/))
- `LlmJson` lenient 파싱 유틸 ([packages/utils/src/utils/](../../packages/utils/src/utils/))
- `LlmTypeChecker`, `OpenApiTypeChecker*` validators ([packages/utils/src/validators/](../../packages/utils/src/validators/))

(b) **변환부 → Go 이전 (L2 engine 내부).**
- `OpenApiConverter`, `LlmSchemaConverter` ([packages/utils/src/converters/](../../packages/utils/src/converters/)) — 이 둘은 빌드 타임 호출이 주 역할 (`wiki/08-tsgo-master-plan/16-package-port-boundary.md:107-109` "변환 유틸 — 빌드 타임에 core 가 호출"). 런타임에서도 호출 가능하지만 emit 된 JS 가 사용자의 런타임에서 부르는 경우도 있어, **분할 기준은 "emit 된 사용자 JS 가 호출하는가"** 가 일차 판정.

판정 절차 (애매할 때):
1. 이 심볼이 `@typia/typia` 의 내부에서 `internal/` 경로로 import 되어 emit 되는가? → 런타임 (L3 TS 유지)
2. `@typia/core` 가 빌드 타임에만 호출하는가? → 변환 (L2 Go 이전)
3. 둘 다면 → **둘로 쪼개거나, 우선 런타임 TS 로 두고 Go 변환부가 **동일 로직 재구현**** (중복 유지가 논리적 이중화 비용보다 적음).

**Why**
- 원문: `wiki/08-tsgo-master-plan/16-package-port-boundary.md:104-118` "분할 — 런타임 TS 유지, 변환 유틸 Go 포팅".
- 런타임/변환 혼재 근거: `wiki/03-packages/04-typia-utils-unplugin.md:60-73` "런타임에 emit 되는 헬퍼" vs "converters/ — LlmSchemaConverter, OpenApiConverter".
- 이름 결정 (`@typia/utils` vs `@typia/runtime`) 은 D 역할이 네이밍 승인 후 확정.

**위반 시 결과**
- 변환부를 TS 로 남기면 Go engine 이 TS 를 호출해야 하는 cross-language boundary 발생 → IPC 문제 재등장.
- 런타임부를 Go 로 옮기면 Cloudflare Workers 등 edge runtime 에서 사용자 JS 가 import 할 방법 없음 (P5 위반).

#### BND-PKG-07. L4 Build — `@typia/ttsc` 신규 패키지

**본문**
`@typia/ttsc` 는 **Go 바이너리 + Node launcher** 의 결합 패키지. 현재 Phase 0 로 [packages/ttsc/](../../packages/ttsc/) 에 존재. 구조 ([packages/ttsc/README.md:11-23](../../packages/ttsc/README.md)):

```
packages/ttsc/
├─ bin/ttsc.js          ← Node launcher (platform 감지 + Go 바이너리 spawn)
├─ src/                 ← Node-side TS (platform util)
├─ test/                ← Node-side node:test
├─ cmd/ttsc/            ← Go CLI entrypoint
├─ internal/
│  ├─ engine/           ← L2 흡수 (metadata, emitter, ...)
│  │  ├─ metadata/
│  │  └─ emitter/
│  └─ driver/           ← typescript-go 통합
│     └─ shim/          ← go:linkname (Phase 0 W2)
├─ shim/                ← go:linkname 생성 출력
├─ tools/               ← gen_shims 등 build tool
└─ go.mod, go.work
```

배포 모델 (`wiki/08-tsgo-master-plan/16-package-port-boundary.md:124-136`):
```
@typia/ttsc                        ← npm 메인 (launcher, < 100 LOC JS)
  bin/ttsc.js                      ← Node, platform 감지
  
@typia/ttsc-darwin-arm64           ← Go 바이너리 (optionalDep)
@typia/ttsc-darwin-x64
@typia/ttsc-linux-arm64
@typia/ttsc-linux-arm
@typia/ttsc-linux-x64
@typia/ttsc-win32-arm64
@typia/ttsc-win32-x64
```

경계 지정:
- **A (나)**: "ttsc 는 L4, 내부에 engine 이 있다" 는 사실 자체
- **C (ttsc Driver)**: shim / patch / driver 구현
- **B (Go Engine)**: `internal/engine/` 내부
- **F (Release/DX)**: 7 플랫폼 build matrix, optionalDependencies 규칙

**Why**
- 원문: `wiki/08-tsgo-master-plan/16-package-port-boundary.md:120-155` "신규 ★★★★★ 핵심. 사용자 build 진입점".
- 통합 근거: `wiki/08-tsgo-master-plan/04-strategic-options.md:18-38` "관점 1. 하나의 Go 바이너리".
- 현재 Phase 0 의 실구현: [packages/ttsc/package.json](../../packages/ttsc/package.json) (`"version": "0.0.0-phase0"`), [packages/ttsc/README.md:3](../../packages/ttsc/README.md) ("Phase 0 spike").

**위반 시 결과**
- Go 바이너리를 `@typia/typia` 에 직접 bundle 하면 L1 (TS 고정) 제약 위반 + Linux/Windows/Mac 에 대한 all-in-one 배포가 됨 → 사용자 설치 크기 급증.
- optionalDependencies 모델을 포기하면 esbuild / SWC 가 쓰는 검증된 분산 전략 (plat-specific subpackage) 을 못 씀.

#### BND-PKG-08. L4 Build — `@typia/unplugin` 은 TS 유지, 얇게 축소

**본문**
`@typia/unplugin` 은 TS 로 유지하되 **v13 에서 내부를 ttsc 바이너리 호출로 전환**. 현재 `ts.createProgram + @typia/transform` 실행 ([wiki/02-architecture/04-transformation-pipeline.md:40-52](../../wiki/02-architecture/04-transformation-pipeline.md)) 은 v13 에서 **불가** — tsgo 가 `ts.createProgram` 을 JS 에서 노출하지 않는다 (`wiki/08-tsgo-master-plan/02-threat-landscape.md:22-24` "unplugin-typia (Node ts.createProgram 기반) — tsgo 에서 부분 불가").

v13+ unplugin:
- 번들러별 어댑터 (vite/webpack/rspack/esbuild/rolldown/bun/farm/next) 는 유지.
- 파일 변환 로직은 **ttsc 바이너리 spawn 또는 Go API 호출**. 상세는 C.
- TS LOC 예상: 현재 ~2K → ~500.

**Why**
- 원문: `wiki/08-tsgo-master-plan/16-package-port-boundary.md:157-166` "TS 유지, 축소. typescript 모듈 import 제거. 대신 ttsc 바이너리를 child process 로 호출".
- 기술 제약: `wiki/02-architecture/04-transformation-pipeline.md:104-112` "tsgo 시대의 이 그림" 표 — "unplugin 상대적으로 안전... 그러나 ts.createProgram 은 바뀜".

**위반 시 결과**
- unplugin 을 폐기하면 Vite/Webpack 사용자 (nestia 가 아닌 프론트엔드 앱) 의 빌드 경로 소실.
- 얇게 만들지 않으면 `typescript` peer 의존이 유지되어 tsc 와 ttsc 의 "둘 다 설치" 를 강요.

#### BND-PKG-09. L5 LLM Adapters — `@typia/mcp / langchain / vercel` 는 TS 유지 (불변)

**본문**
3 LLM SDK 어댑터는 v13·v14 전 구간 TS 로 유지. 구조 변화 없음. peerDependency 모델 유지 ([wiki/02-architecture/03-package-graph.md:80-88](../../wiki/02-architecture/03-package-graph.md) 외부 의존성 표).

**Why**
- 원문: `wiki/08-tsgo-master-plan/16-package-port-boundary.md:168-177` "TS 유지 ★★★★★ 확정. 각 패키지가 Node 전용 SDK 에 peer depend. SDK 가 Node 런타임에서 실행되므로 Go 포팅 의미 없음".
- 규모 근거: 같은 문서 174 "각 패키지 규모도 작음 (~150~300 LOC)" + `wiki/03-packages/05-llm-integrations.md:6-10` "의존성 격리, 프레임워크 중립, 개별 SDK 추적".
- MCP Preserve 모드 private API 위험: `wiki/03-packages/05-llm-integrations.md:18` — 이는 C/F 가 아니라 **A 경계 밖**. A 는 "L5 가 TS" 만 정한다.

**위반 시 결과**
- Go 이전 시 `@modelcontextprotocol/sdk`, `@langchain/core`, `ai` 의 Node-only SDK 를 Go 에서 호출 불가.
- 어댑터 통합 (`@typia/llm-adapter` 등 단일화) 은 별도 cycle 에서 검토. 본 규약은 "3 개 분리 유지" 가 기본.

#### BND-PKG-10. 패키지별 최종 상태표 (v13 stable 기준)

**본문**

| 패키지 | Layer | 언어 | 상태 | 비고 |
|--------|-------|------|------|------|
| `@typia/interface` | L0 | TS | 유지·확장 | LLM 모델 추가 시 여기로 |
| `@typia/typia` | L1 | TS | 축소 (7.5K → ~3K) | CLI 이관, transform re-export 제거 |
| `@typia/core` | L2 | Go | **deprecated shell** | v13 stable 부터 빈 패키지, v14 npm 중단 |
| `@typia/transform` | — | — | **폐기** | v13 stable 에서 npm 중단 |
| `@typia/utils` | L3 + L2 | TS + Go | 분할 | 런타임 TS 유지, 변환 Go 이전 |
| `@typia/ttsc` | L4 | Go + TS launcher | **신규** | 7 플랫폼 subpackage |
| `@typia/unplugin` | L4 | TS | 축소 (~2K → ~500) | ttsc 바이너리 spawn |
| `@typia/mcp` | L5 | TS | 유지 | 변화 없음 |
| `@typia/langchain` | L5 | TS | 유지 | 변화 없음 |
| `@typia/vercel` | L5 | TS | 유지 | 변화 없음 |

총 LOC 변화 (`wiki/08-tsgo-master-plan/16-package-port-boundary.md:226-233`):
- v12: TS ~50,665 / Go 0
- v14: TS ~20,000 / Go ~150,000

**Why**: 위 BND-PKG-01 ~ 09 의 종합. 별도 인용 없음.

**위반 시 결과**: 이 표와 다르면 규약 근거 없음 → PR 거절.

### 2.2 Go/TS 언어 선택 기준

#### BND-LNG-01. 언어는 Layer 가 결정한다 (P2 집행)

**본문**
새 패키지 또는 기존 패키지의 새 서브모듈 언어는 **Layer 지정 시점에 자동 결정**된다. 개인 선호·벤치마크·언어 트렌드로 결정하지 않는다.

결정 절차:
1. 이 코드의 **역할** 이 "타입 선언" 인가? → L0 → TS
2. 사용자가 import 하는 **facade** 인가? → L1 → TS
3. 빌드 타임 **코드 생성** 인가? → L2 → Go
4. 사용자 emit 된 **JS 에서 import** 되는가? → L3 → TS
5. **번들러/CLI 통합** 인가? → L4 → 본체 Go + launcher TS
6. 외부 **Node SDK peer** 의존 인가? → L5 → TS
7. 위 6 개 중 어느 것도 아님 → **A 에게 문의** (규약 추가 대상)

**Why**: `wiki/08-tsgo-master-plan/16-package-port-boundary.md:8-15` 5 원칙 + 본 초안 P2.

**위반 시 결과**: 개인 선호 기반 결정이 쌓이면 Go/TS 혼재가 Layer 와 무관해져 **Go → TS, TS → Go 양방향 호출** 필요성 발생 → IPC 재도입.

#### BND-LNG-02. IPC 금지 (같은 프로세스 내 Go 호출만)

**본문**
**같은 Go 바이너리 프로세스 안의 Go 코드 간 호출만 허용**. Node ↔ Go child process IPC 는 **빌드 진입점 (`@typia/ttsc` bin launcher)**, **unplugin 의 번들러 통합**, 두 경우에만 예외 허용.

사용자 emit 된 런타임 JS ↔ Go 바이너리 IPC 는 **영구 금지** (P5 Edge runtime 호환 파괴).

**Why**
- `wiki/08-tsgo-master-plan/04-strategic-options.md:42-44` "파일당 수십~수백 ms IPC 오버헤드" 회피.
- `wiki/08-tsgo-master-plan/15-executive-summary.md:54-56` "Edge runtime 구조적 승리" — 런타임 JS 가 Go 바이너리에 IPC 요청하면 Cloudflare Workers 에서 동작 불가.

**위반 시 결과**: tsgonest 가 이미 달성한 "IPC 없음 → tsgo 네이티브 속도" (`wiki/08-tsgo-master-plan/03-technical-foundations.md:105` 모델 E 장점) 를 포기.

### 2.3 신규 패키지 추가 시 절차

#### BND-NEW-01. 신규 패키지 6 단계

**본문**
새 `@typia/*` 패키지 추가 시 PR 착수 전에:

1. **Layer 판정** — BND-LNG-01 절차로 L0~L5 중 지정 (애매하면 A 에게 문의).
2. **언어 결정** — Layer 가 자동으로 언어 지정 (표 BND-PKG-10 참조).
3. **의존 방향 검증** — 패키지 그래프가 순환을 만들지 않는지 ([wiki/02-architecture/03-package-graph.md:5-46](../../wiki/02-architecture/03-package-graph.md)) 의 방향 검증.
4. **공개 심볼 계약** — 사용자 가시 export 가 13 namespace 와 충돌하지 않는지, 네이밍이 `@typia/*` 기존 네이밍 컨벤션을 따르는지.
5. **사용자 API 영향 평가** — P1 불변 약속에 영향이 있는가? 있으면 F (Release) 와 Major bump 협의.
6. **문서 반영** — `wiki/02-architecture/03-package-graph.md` 갱신 (`wiki/08-tsgo-master-plan/16-package-port-boundary.md` 의 표에도 추가 필요 시 별도 PR).

**Why**
- 현재 typia 의 깔끔한 분리 (`wiki/02-architecture/03-package-graph.md:106-112` "5 가지 이점") 를 유지하는 것이 최대 자산.
- 무계획 추가 시 `wiki/02-architecture/03-package-graph.md:60` "순환 없음" 이 무너질 위험.

**위반 시 결과**
- 6 단계 생략된 PR 은 경계 재정의 비용으로 이어짐.
- Layer 지정 없이 머지된 패키지는 v13 Go 포팅 결정에서 **판단 불가** → 두 번 결정 비용.

#### BND-NEW-02. 신규 패키지 이름 규칙

**본문**
- L0 ~ L5 의 기존 scope: `@typia/*`
- 플랫폼 전용 바이너리 subpackage: `@typia/ttsc-<os>-<arch>` (BND-PKG-07)
- 재사용을 위한 추상 bus (향후): `@typia/core-*` 접두사는 **사용 금지** (과거 core 이름이 deprecated 예정이므로 혼란).
- 세트 생태계 이름 (`@nestia/*`, `@agentica/*`, `@autobe/*`) 는 각 저장소 규약 — 본 규약 적용 대상 아님.

**Why**: `wiki/10-ecosystem/00-README.md:7-14` 세트 생태계 표기 + 현재 packages 스캐폴딩 실체 ([packages/*/package.json](../../packages/)).

**위반 시 결과**: 이름 충돌 또는 npm squatting 위험.

### 2.4 사용자 API 불변 보증 (P1 의 구체 금지 목록)

#### BND-API-01. 공개 함수 이름 불변

**본문**
다음 함수명은 v12 → v13 → v14 전 구간에서 변경 금지. rename · alias · 이전 모두 불가.

루트 namespace (`typia.*`, [packages/typia/src/module.ts](../../packages/typia/src/module.ts)):
- `assert`, `assertGuard`, `is`, `validate`
- `assertEquals`, `assertGuardEquals`, `equals`, `validateEquals`
- `random`
- `createAssert`, `createAssertGuard`, `createIs`, `createValidate`, `createRandom`
- `createAssertEquals`, `createAssertGuardEquals`, `createIs`, `createValidateEquals`
- `TypeGuardError` class

서브 namespace 이름 (고정):
- `typia.json` ([packages/typia/src/json.ts](../../packages/typia/src/json.ts))
- `typia.llm` ([packages/typia/src/llm.ts](../../packages/typia/src/llm.ts))
- `typia.http` ([packages/typia/src/http.ts](../../packages/typia/src/http.ts))
- `typia.protobuf` ([packages/typia/src/protobuf.ts](../../packages/typia/src/protobuf.ts))
- `typia.misc` ([packages/typia/src/misc.ts](../../packages/typia/src/misc.ts))
- `typia.notations` ([packages/typia/src/notations.ts](../../packages/typia/src/notations.ts))
- `typia.reflect` ([packages/typia/src/reflect.ts](../../packages/typia/src/reflect.ts))
- `typia.functional` ([packages/typia/src/functional.ts](../../packages/typia/src/functional.ts))

네임스페이스 내부 함수명도 v12 의 공개 API 와 동일하게 유지 (세부 목록은 D 가 Cycle 1 에서 열거).

**Why**
- `wiki/08-tsgo-master-plan/05-recommended-path.md:114-119` 사용자 약속 5 개: `typia.is<T>(input)` 한 자도 바뀌지 않음, 13 namespace 전부 유지.
- 현재 v12 실체: [packages/typia/src/module.ts:12-20](../../packages/typia/src/module.ts) 의 re-export 7 줄.
- `wiki/10-ecosystem/04-philosophy-pyramid.md:92-101` — nestia/agentica/autobe 가 이 이름들을 internal 로 consume 하므로 rename 시 4 층 피라미드 동시 파괴.

**위반 시 결과**: semver-major 4 개 프로젝트 동시 bump (typia·nestia·agentica·autobe). samchon 혼자 감당 불가.

#### BND-API-02. 공개 타입 이름 불변

**본문**
`@typia/interface` 가 export 하는 모든 타입은 이름 불변. 필드 추가는 **optional 한해서만** 허용. 기존 필드 삭제·rename 금지.

대표 타입 (삭제·rename 금지):
- `IValidation<T>`, `IValidation.IError` ([wiki/03-packages/01-interface.md:48](../../wiki/03-packages/01-interface.md))
- `IJsonSchema*` 전체
- `ILlmApplication<Class>`, `ILlmFunction`, `ILlmController`, `ILlmSchema`, `ILlmStructuredOutput<T>`
- `OpenApi` (Emended), `OpenApiV3`, `OpenApiV3_1`, `SwaggerV2`
- `IResult<T, E>`, `IJsonParseResult<T>`, `IRandomGenerator`
- `AssertionGuard`, `Resolved<T>`
- `Primitive<T>`, `CamelCase<S>`, `PascalCase<S>`, `SnakeCase<S>`
- `tags.Format<S>`, `tags.Pattern<S>`, `tags.Type<S>`, `tags.Minimum<N>`, `tags.Maximum<N>`, `tags.MinLength<N>`, `tags.MaxLength<N>`, `tags.Default<V>`, `tags.Example<V>`, `tags.Examples<V>`, `tags.MultipleOf<N>`, `tags.UniqueItems`, `tags.ExclusiveMinimum<N>`, `tags.ExclusiveMaximum<N>`, `tags.MinItems<N>`, `tags.MaxItems<N>`, `tags.ContentMediaType<S>`, `tags.Sequence<N>`, `tags.Constant<V>`, `tags.JsonSchemaPlugin<T>`, `tags.TagBase<IProps>`

**Why**
- `wiki/03-packages/01-interface.md:77-80` "규모 ~8,508 LOC / 60+ 인터페이스. typia 의 **계약 표면** 이 이 한 곳에 모여 있다 ... 변경 비용이 가장 큰 곳 — semver-major 한 번이 생태계 전체 bump".
- `wiki/02-architecture/03-package-graph.md:101-104` "interface 와 core IR 이 typia 의 진짜 ABI. 이 둘의 변경이 가장 신중해야 한다".
- tag 개수 확정: `wiki/03-packages/01-interface.md:19-20` "실측 ~21 개 export" (과거 wiki "11 개" 주장은 `wiki/09-audit/00-README.md:9` 오차로 교정됨).

**위반 시 결과**: 타입 이름 rename 시 사용자는 import 경로·네이밍 둘 다 고쳐야 함 → P1 위반.

#### BND-API-03. npm 진입점 (exports) 불변

**본문**
사용자가 import 하는 경로는 아래 표 그대로 v13·v14 에서 유지한다.

| import 경로 | v12 | v13+ |
|-------------|-----|------|
| `"typia"` | ✓ | ✓ |
| `"typia/lib/transform"` | ✓ | **deprecated (throw 또는 noop + 안내)** |
| `"typia/lib/internal/*"` | ✓ | ✓ (런타임 헬퍼, L3) |
| `"@typia/interface"` | ✓ | ✓ |
| `"@typia/mcp"` | ✓ | ✓ |
| `"@typia/langchain"` | ✓ | ✓ |
| `"@typia/vercel"` | ✓ | ✓ |
| `"@typia/utils"` | ✓ | ✓ (런타임부만) |
| `"@typia/unplugin/vite"` | ✓ | ✓ |
| `"@typia/unplugin/webpack"` | ✓ | ✓ |
| `"@typia/unplugin/rspack"` | ✓ | ✓ |
| `"@typia/unplugin/esbuild"` | ✓ | ✓ |
| `"@typia/unplugin/rolldown"` | ✓ | ✓ |
| `"@typia/unplugin/bun"` | ✓ | ✓ |
| `"@typia/unplugin/farm"` | ✓ | ✓ |
| `"@typia/unplugin/next"` | ✓ | ✓ |
| `"@typia/ttsc"` | — | ✓ (신규) |
| `"@typia/core"` | ✓ | **deprecated (v13 에서 빈 패키지 또는 throw)** |
| `"@typia/transform"` | ✓ | **제거 (v13 npm 배포 중단)** |

**Why**
- 현재 실체: [packages/typia/package.json:6-11](../../packages/typia/package.json) 의 exports 3 개, + 각 패키지 package.json.
- 마이그레이션 전략: `wiki/08-tsgo-master-plan/16-package-port-boundary.md:210-224` "제거되는 의존: ts-patch, typescript (peer 로만)". 하지만 typia import 경로는 여전히 `"typia"` 유지.

**위반 시 결과**
- `"typia/lib/transform"` 경로 삭제 시 tsconfig.json 의 `plugins` 가 resolve 실패 → P4 위반 (tsconfig 스키마는 유지하되 내부 노-op 로 처리하는 방식 권장).
- `@typia/core` / `@typia/transform` 을 import 하던 코드는 **오류 메시지로 마이그레이션 안내** (빈 패키지 + README 로 가이드).

#### BND-API-04. 런타임 동작 불변 (결과값 계약)

**본문**
같은 타입 T, 같은 입력 input 에 대해:
- `typia.is<T>(input)` 의 반환 boolean 은 v12 와 v14 동일
- `typia.validate<T>(input).success`, `.errors.length`, 각 `error.path/expected/value` 의 값은 동일 (error 순서도 동일)
- `typia.json.stringify<T>(v)` 의 출력 문자열은 동일
- `typia.json.schema<T>()` 의 반환 JSON Schema 는 동일
- `typia.llm.application<C>()` 의 반환 `ILlmApplication` 은 동일 (함수 배열 순서 포함)

**Why**
- `wiki/08-tsgo-master-plan/15-executive-summary.md:79` "typia.is<T>(input) 한 자도 바뀌지 않는다" — 단순 API 이름뿐 아니라 **동작** 도 같아야 "한 자도 안 바뀜" 의 실질적 의미를 만족.
- 이것이 E 역할의 golden fixture 대상. E 가 기술 구현 (Phase 2 analyzer parity test 등), A 는 **동치성 계약** 을 정의.

**위반 시 결과**
- nestia `@TypedBody(dto)` 가 내부 `typia.assert<Dto>(body)` 를 부를 때 error 포맷이 다르면 nestia 사용자 앱의 에러 핸들러 동작 달라짐 → 생태계 붕괴.
- `typia.json.schema<T>()` 결과가 다르면 OpenAPI 문서가 달라져 SDK generator 산출물이 변함.

### 2.5 tsconfig plugins 호환 범위

#### BND-TSC-01. `plugins[].transform` 지시자 유지

**본문**
사용자 `tsconfig.json` 에 아래 형태가 남아 있어도 v13 ttsc 가 동작한다.

```json
{
  "compilerOptions": {
    "plugins": [
      { "transform": "typia/lib/transform" }
    ]
  }
}
```

v13 setup wizard 는 이 설정을 **유지** 하며, 내부적으로 ttsc driver 가 이 지시자를 "typia 가 필요한 프로젝트" 의 마커로 사용한다. 지시자 문자열 (`"typia/lib/transform"`) 은 상응하는 L1 `@typia/typia` 내 noop export 로 resolve 가능하게 유지한다.

**Why**
- `wiki/08-tsgo-master-plan/01-preface.md:13-21` "이 5 줄도 변경 없이 유지".
- `wiki/08-tsgo-master-plan/05-recommended-path.md:116-119` 사용자 약속.

**위반 시 결과**: 사용자 수만 프로젝트 강제 수정 → semver-major 실질 효과.

#### BND-TSC-02. `plugins[]` 외 커스텀 옵션 스키마 호환

**본문**
v12 에서 `{ transform: "typia/lib/transform", strict: true, ... }` 형태로 전달된 옵션 키는 v13+ 에서 **같은 이름으로 동작 또는 graceful ignore**. deprecated 옵션은 경고 출력하되 에러 내지 않는다.

**Why**
- 기존 사용자의 tsconfig 보존 (P4).

**위반 시 결과**: 옵션 rename 시 마이그레이션 문서 필요 → 사용자 비용 증가.

### 2.6 13 namespace 유지 규약

#### BND-NS-01. namespace 목록 (불변)

**본문**
타입 `typia.*` 로 접근 가능한 namespace 는 v14 까지 **아래 13 개 (+ 루트)**. 추가는 허용되나 삭제·rename 금지.

| # | namespace | 현재 파일 | 주 역할 |
|---|-----------|----------|---------|
| 0 | (root) | [packages/typia/src/module.ts](../../packages/typia/src/module.ts) | `is / assert / validate / equals / random / create*` 등 |
| 1 | `typia.json` | [json.ts](../../packages/typia/src/json.ts) | `schema / schemas / application / parse / stringify / assertParse / assertStringify` |
| 2 | `typia.llm` | [llm.ts](../../packages/typia/src/llm.ts) | `controller / application / schema / parameters / structuredOutput` |
| 3 | `typia.http` | [http.ts](../../packages/typia/src/http.ts) | `formData / queryObject / headers / parameter` |
| 4 | `typia.protobuf` | [protobuf.ts](../../packages/typia/src/protobuf.ts) | `message / encode / decode / assertEncode / assertDecode` |
| 5 | `typia.misc` | [misc.ts](../../packages/typia/src/misc.ts) | `clone / prune / literals` |
| 6 | `typia.notations` | [notations.ts](../../packages/typia/src/notations.ts) | `camel / pascal / snake` |
| 7 | `typia.reflect` | [reflect.ts](../../packages/typia/src/reflect.ts) | `schema / name` |
| 8 | `typia.functional` | [functional.ts](../../packages/typia/src/functional.ts) | `assertFunction / assertParameters / assertReturn` |

주의: 기존 wiki 의 "13 namespace" 수치는 **root + 하위 = 14 총합** 을 "12 + 1 메인 = 13" 혹은 "8 파일 + 각 파일 내 복수 entry 합산" 로 계산한 **상징적 수치** (wiki 09-audit 미명시). A 는 본 초안에서 "**root 와 위 8 하위 namespace 를 합친 9 개의 import 지점이 현재 실체**" 임을 명시하고, "13" 은 **13 Programmers 와 혼동되지 않도록** B/C/F 와 합의해 정리 필요 (미해결 질문 Q2).

#### BND-NS-02. namespace 추가 절차

**본문**
새 namespace (예: `typia.graphql`, `typia.grpc`) 추가는 다음 조건:
1. BND-NEW-01 6 단계 완료
2. 해당 namespace 의 **모든 L2 Engine 측 Programmer 가 Go 로 구현** 가능해야 함 (MetadataSchema IR 로 표현 가능할 것 — B 검증)
3. 공개 타입이 L0 `@typia/interface` 에 추가됨
4. 런타임 헬퍼가 필요하면 L3 `@typia/utils` 에 추가
5. `@typia/typia/src/<name>.ts` 파일 생성 + `module.ts` 에 `export * as <name> from "./<name>"` 추가

**Why**: `wiki/10-ecosystem/04-philosophy-pyramid.md:69-87` "사상적 일관성 3 대 공통 원칙" (타입이 진실, 컴파일 타임 경계, 런타임 제로 오버헤드) 을 **새 namespace 도 반드시 따라야** 한다.

**위반 시 결과**: namespace 가 "빌드 타임 코드 생성이 아닌 런타임 구현" 으로 채워지면 typia 의 핵심 원칙 파괴 (`wiki/01-philosophy/02-pure-typescript.md` AI 재구성이지만 원칙 방향은 `wiki/10-ecosystem/04-philosophy-pyramid.md` 와 일치).

#### BND-NS-03. namespace 삭제 금지

**본문**
P3 의 직접 집행. `typia.protobuf` 가 "사용자 적음" 등의 이유로 삭제되는 일 없음. deprecation 은 가능하지만 **최소 2 major 간격** 으로 공지 후 진행.

**Why**: `wiki/08-tsgo-master-plan/02-threat-landscape.md:149-155` 해자 목록 "13 namespace 범위: tsgonest 4 개 기능만 커버. Protobuf: 바이너리 프로토콜 영역 독점".

**위반 시 결과**: tsgonest 와의 차별점 직접 상실.

### 2.7 각 namespace 의 경계 (공개 API 표면)

#### BND-NS-DETAIL-01 ~ 09 (요지)

A 는 각 namespace 의 **공개 함수 이름 및 시그니처 윤곽** 만 본 문서에 고정한다. 함수 내부 구현·JSDoc 내용·overload 세부는 D 담당.

**루트 (`typia`)** — [packages/typia/src/module.ts](../../packages/typia/src/module.ts):
- Primary: `assert` / `assertGuard` / `is` / `validate` + `*Equals` 4 종
- Factory: `createAssert` / `createAssertGuard` / `createIs` / `createValidate` + `*Equals` 4 종 + `createRandom`
- Random: `random` / `createRandom`
- Standard Schema 어댑터 (부분 구현, `wiki/09-audit/07-cycle7-missing-perspectives.md:1` 에 2~3 주 필요 명시) — v13 stable 에서 `createValidate` 결과에 `~standard` 주입. A 는 **주입 위치 (createValidate 반환값)** 만 규정, 세부는 D.

**`typia.json`** — [json.ts](../../packages/typia/src/json.ts:12-20):
- Metadata: `schema / schemas / application`
- Parse/Stringify: `parse / stringify / assertParse / assertStringify`
- Factory: `createAssertParse / createAssertStringify / createIsParse / ...`

**`typia.llm`** — [llm.ts:14-21](../../packages/typia/src/llm.ts):
- `controller / application / schema / parameters / structuredOutput`

**`typia.http`** — [http.ts](../../packages/typia/src/http.ts):
- `formData / queryObject / headers / parameter`

**`typia.protobuf`** — [protobuf.ts](../../packages/typia/src/protobuf.ts):
- `message / encode / decode / assertEncode / assertDecode`

**`typia.misc`** — [misc.ts](../../packages/typia/src/misc.ts):
- `clone / prune / literals`

**`typia.notations`** — [notations.ts](../../packages/typia/src/notations.ts):
- `camel / pascal / snake`

**`typia.reflect`** — [reflect.ts](../../packages/typia/src/reflect.ts):
- `schema / name`

**`typia.functional`** — [functional.ts](../../packages/typia/src/functional.ts):
- `assertFunction / assertParameters / assertReturn`

**Why**: `wiki/03-packages/04-typia-utils-unplugin.md:5-21` 공개 API 표면 전수.

**위반 시 결과**: 함수 하나라도 사라지면 P1 위반.

### 2.8 에코시스템 측면 규약 (nestia·agentica·autobe 와의 경계)

#### BND-ECO-01. typia 표면만 정의, 상위 프로젝트 내부는 경계 밖

**본문**
A 는 **typia 자신의 경계**만 정한다. nestia `@TypedRoute` 가 typia 를 internal 로 어떻게 consume 하는가는 nestia 측 규약. 다만 **typia 의 공개 API 불변** 을 통해 nestia·agentica·autobe 의 표면 API 를 **간접 보호**한다.

**Why**
- `wiki/10-ecosystem/05-integrated-tsgo-transition.md:6-12` "typia 가 선행, nestia 동기, agentica 표면 불변, autobe 표면 불변".
- `wiki/10-ecosystem/04-philosophy-pyramid.md:97-101` 영향 표 — agentica·autobe 는 typia 표면 API 불변이면 "거의 없음"/"없음".

**위반 시 결과**: typia 내부 규약 범람. 상위 프로젝트 각각의 자율성 침해.

---

## 3. 코드·문서 근거 (현 저장소 실제 경로 인용 — 압축)

다음은 본 초안의 각 규약이 기대는 **실제 코드·wiki 인용** 통합 목록. Cycle 2 교차 리뷰 시 이 표가 "A 가 어디를 읽고 썼는가" 의 투명성 근거가 된다.

### 3.1 Wiki 근거

| 규약 | 주 인용 |
|------|---------|
| P1 ~ P5 | `wiki/08-tsgo-master-plan/01-preface.md:6-26`, `15-executive-summary.md:77-93` |
| BND-PKG-01 | `wiki/08-tsgo-master-plan/15-executive-summary.md:27-36`, `wiki/02-architecture/03-package-graph.md:48-60` |
| BND-PKG-02 | `wiki/08-tsgo-master-plan/16-package-port-boundary.md:38-45`, `wiki/03-packages/01-interface.md:6-11` |
| BND-PKG-03 | `wiki/08-tsgo-master-plan/16-package-port-boundary.md:46-66`, `wiki/03-packages/04-typia-utils-unplugin.md:3-21` |
| BND-PKG-04 | `wiki/08-tsgo-master-plan/16-package-port-boundary.md:68-86`, `wiki/03-packages/02-core.md:1-10`, `wiki/08-tsgo-master-plan/04-strategic-options.md:14-48` |
| BND-PKG-05 | `wiki/08-tsgo-master-plan/16-package-port-boundary.md:87-102`, `wiki/03-packages/03-transform.md:1-8`, `wiki/08-tsgo-master-plan/02-threat-landscape.md:11-13` |
| BND-PKG-06 | `wiki/08-tsgo-master-plan/16-package-port-boundary.md:104-118`, `wiki/03-packages/04-typia-utils-unplugin.md:60-75` |
| BND-PKG-07 | `wiki/08-tsgo-master-plan/16-package-port-boundary.md:120-155` |
| BND-PKG-08 | `wiki/08-tsgo-master-plan/16-package-port-boundary.md:157-166`, `wiki/02-architecture/04-transformation-pipeline.md:104-112` |
| BND-PKG-09 | `wiki/08-tsgo-master-plan/16-package-port-boundary.md:168-177`, `wiki/03-packages/05-llm-integrations.md:6-10` |
| BND-PKG-10 | `wiki/08-tsgo-master-plan/16-package-port-boundary.md:226-233` |
| BND-LNG-01 | `wiki/08-tsgo-master-plan/16-package-port-boundary.md:8-15` |
| BND-LNG-02 | `wiki/08-tsgo-master-plan/04-strategic-options.md:40-47`, `15-executive-summary.md:54-56` |
| BND-NEW-01 | `wiki/02-architecture/03-package-graph.md:106-112` |
| BND-API-01 ~ 04 | `wiki/08-tsgo-master-plan/05-recommended-path.md:114-119`, `wiki/10-ecosystem/04-philosophy-pyramid.md:89-101` |
| BND-TSC-01 ~ 02 | `wiki/08-tsgo-master-plan/01-preface.md:13-21` |
| BND-NS-01 ~ 03 | `wiki/08-tsgo-master-plan/02-threat-landscape.md:149-155`, `wiki/10-ecosystem/04-philosophy-pyramid.md:69-87` |
| BND-ECO-01 | `wiki/10-ecosystem/05-integrated-tsgo-transition.md:6-12` |

### 3.2 코드 근거

| 규약 | 파일 |
|------|------|
| BND-PKG-01 (의존 방향) | [pnpm-workspace.yaml](../../pnpm-workspace.yaml), [packages/*/package.json](../../packages/) |
| BND-PKG-02 (L0 0-dep) | [packages/interface/package.json](../../packages/interface/package.json), [packages/interface/src/index.ts](../../packages/interface/src/index.ts) |
| BND-PKG-03 (L1 얇게) | [packages/typia/src/index.ts](../../packages/typia/src/index.ts), [packages/typia/src/module.ts](../../packages/typia/src/module.ts), [packages/typia/src/transformers/NoTransformConfigurationError.ts](../../packages/typia/src/transformers/NoTransformConfigurationError.ts) |
| BND-PKG-04 (L2 Go) | [packages/core/src/](../../packages/core/src/), [packages/ttsc/](../../packages/ttsc/) |
| BND-PKG-05 (transform 폐기) | [packages/transform/src/transform.ts](../../packages/transform/src/transform.ts) |
| BND-PKG-06 (utils 분할) | [packages/utils/src/converters/](../../packages/utils/src/converters/), [packages/utils/src/validators/](../../packages/utils/src/validators/), [packages/utils/src/http/](../../packages/utils/src/http/), [packages/typia/src/internal/](../../packages/typia/src/internal/) |
| BND-PKG-07 (ttsc 신규) | [packages/ttsc/package.json](../../packages/ttsc/package.json), [packages/ttsc/README.md](../../packages/ttsc/README.md), [packages/ttsc/go.mod](../../packages/ttsc/go.mod) |
| BND-PKG-08 (unplugin 축소) | [packages/unplugin/package.json](../../packages/unplugin/package.json) |
| BND-PKG-09 (LLM 어댑터) | [packages/mcp/package.json](../../packages/mcp/package.json), [packages/langchain/package.json](../../packages/langchain/package.json), [packages/vercel/package.json](../../packages/vercel/package.json) |
| BND-API-01 (함수 이름) | [packages/typia/src/module.ts](../../packages/typia/src/module.ts) 전체 |
| BND-API-02 (타입 이름) | [packages/interface/src/index.ts](../../packages/interface/src/index.ts), [packages/typia/src/re-exports.ts](../../packages/typia/src/re-exports.ts) |
| BND-API-03 (exports) | [packages/typia/package.json:5-11,122-139](../../packages/typia/package.json) |
| BND-NS-01 | [packages/typia/src/module.ts:12-20](../../packages/typia/src/module.ts) |

### 3.3 외부 레퍼런스 근거 (wiki 09-audit 재실측 기반)

| 주장 | 출처 |
|------|------|
| tsgonest 72K Go / 4 namespace / 3 patches | `wiki/08-tsgo-master-plan/02-threat-landscape.md:29-39`, `13-appendix-facts.md` |
| tsgolint ~910 linkname | `wiki/08-tsgo-master-plan/03-technical-foundations.md:49-51`, `wiki/09-audit/06-cycle6-repository-measurements.md` |
| Effect-TS patches 23 | `wiki/08-tsgo-master-plan/03-technical-foundations.md:28-32` |
| 13 Programmers 수치 | `wiki/02-architecture/01-overview.md:48-52`, `wiki/03-packages/02-core.md:60-68` |

---

## 4. 안티패턴

### 4.1 경계 오염 (boundary drift)

**증상**: L1 `@typia/typia` 안에 Programmer 호출 로직이 추가됨 (현재 [packages/typia/src/programmers/TypiaProgrammer.ts](../../packages/typia/src/programmers/) 가 존재).
**문제**: L1 은 "얇게" 여야 하는데 코드가 쌓이면서 Go 이전 대상이 됨 → 하지만 L1 은 TS 고정 → 모순.
**대응**: Cycle 2 에서 해당 파일을 L4 driver 또는 L2 engine 으로 이관 여부를 D/C 와 협의.

### 4.2 "Go/TS 이중 구현"

**증상**: 같은 검증 로직을 Go 와 TS 양쪽에 유지 (예: `_isFormatEmail` 과 Go `isFormatEmail`).
**문제**: 두 구현이 drift 하면 사용자의 run-time 동작이 빌드 시점에 따라 달라짐.
**대응**: L3 런타임 헬퍼는 TS 원본이 **진실원**. Go 측은 **같은 알고리즘을 참조 구현**. E (QA) 가 golden fixture 로 동치성 검증.

### 4.3 "일단 Go 로 옮기고 보자"

**증상**: L3 런타임 헬퍼나 L5 LLM 어댑터를 Go 로 옮기자는 제안.
**문제**: 사용자의 런타임 (Node/Edge/Deno) 에서 Go 바이너리를 import 할 방법 없음. Edge runtime 호환 (P5) 파괴.
**대응**: BND-LNG-01 절차를 강제. Layer 판정 없이 Go 이전 PR 은 거절.

### 4.4 "IPC 로 해결"

**증상**: 성능 이슈 해결책으로 사용자 런타임 ↔ Go 바이너리 IPC 제안.
**문제**: BND-LNG-02 위반. Edge runtime 파괴. tsgonest 가 회피한 바로 그 아키텍처.
**대응**: 사용자 런타임 JS 가 필요로 하는 로직은 **모두 빌드 타임에 static code 로 emit**. IPC 제안은 자동 거절.

### 4.5 "public API 리네이밍은 semver 로 관리되니 괜찮다"

**증상**: "v14 는 major 니까 `is` → `check` rename 가능" 제안.
**문제**: P1 의 절대성 파괴. nestia·agentica·autobe 4 프로젝트 동시 rename 강제.
**대응**: major bump 여부와 무관하게 공개 이름 rename 은 자동 거절. 추가는 허용.

### 4.6 "tsconfig 는 사용자가 알아서 고치면 된다"

**증상**: v13 에서 `plugins` 지시자를 새 포맷 (`"ttsc/transform"`) 으로 변경 제안.
**문제**: BND-TSC-01 위반. 사용자 수만 프로젝트 수정 비용.
**대응**: 기존 지시자 (`"typia/lib/transform"`) 를 **읽을 수 있어야** 한다. 새 포맷 추가는 가능하나 기존 포맷 지원은 불변.

### 4.7 "`@typia/core` 는 어차피 내부니까 바로 지우자"

**증상**: v13 첫 번째 preview 에서 `@typia/core` npm 배포 중단.
**문제**: 일부 고급 사용자가 `@typia/core` 를 직접 import 해 custom 통합 작성함 (e.g. `MetadataFactory` 를 직접 호출하는 툴).
**대응**: BND-PKG-04 의 점진적 deprecation 경로 ("v13 stable 부터 빈 패키지, v14 npm 중단") 준수.

### 4.8 "13 Programmers" 와 "13 namespace" 를 같은 수로 혼동

**증상**: 문서 · 규약에서 "13" 이 무엇을 가리키는지 불일치.
**문제**: Programmer (코드 생성기) 는 `wiki/03-packages/02-core.md:60` 에 13 개가 아님 (Is/Assert/Validate/JsonStringify/JsonParse/JsonSchema/ProtobufEncode/ProtobufDecode/Message/LlmSchema/LlmApplication/Random/Functional/Http + 기타 → 정확한 수는 B 확인 필요). Namespace 는 root + 8 = 9 import 지점.
**대응**: "13" 이라는 숫자는 **수사** 로만 쓰고, 본 규약에서는 **namespace 9 (root+8)** 과 **Programmer n-개 (B 가 확정)** 를 분리 표기.

### 4.9 "Go 엔진이 곧 typia 다" 의 과장

**증상**: 마케팅에서 "typia v14 = Go native" 를 "TS 사라짐" 으로 오해.
**문제**: L0·L1·L3·L5 는 여전히 TS. "Go native" 는 L2 엔진만.
**대응**: 공식 언어는 `wiki/08-tsgo-master-plan/15-executive-summary.md:93` "사용자 API 는 불변, 구현은 Go 로 이주". A 는 이 표현 유지.

---

## 5. 검증 체크리스트 (PR 병합 전 확인)

PR 이 본 경계 규약에 저촉하는지 머지 전 리뷰어가 점검.

### 5.1 공개 API 영향 체크

- [ ] 이 PR 이 `packages/typia/src/module.ts` 의 export 이름을 바꾸는가? → **차단 (P1, BND-API-01)**
- [ ] `packages/interface/src/**` 의 타입을 rename 또는 필드 제거하는가? → **차단 (BND-API-02)**
- [ ] `packages/typia/package.json` 의 `exports` 엔트리를 제거하는가? → **차단 (BND-API-03)**, 단 `./lib/transform` 의 `deprecated-but-resolvable` 처리는 허용.

### 5.2 Layer 경계 체크

- [ ] 새 파일 또는 새 패키지가 Layer 판정 (BND-LNG-01) 을 거쳤는가?
- [ ] 의존 방향이 L0 → L1 → L2 → ... → L5 를 **위반** 하지 않는가?
- [ ] L0 `@typia/interface` 에 외부 runtime 의존이 추가되는가? → **차단 (BND-PKG-02)**
- [ ] L1 `@typia/typia` 에 Programmer 급 로직이 추가되는가? → **재검토 (L4 driver 로 이전 권고)**
- [ ] L3 런타임 헬퍼가 `eval` / `new Function` 을 쓰는가? → **차단 (P5)**
- [ ] Go ↔ TS 사이에 사용자 런타임 IPC 가 추가되는가? → **차단 (BND-LNG-02)**

### 5.3 tsconfig 호환 체크

- [ ] `plugins[].transform: "typia/lib/transform"` 이 여전히 resolve 되는가?
- [ ] v12 에서 유효하던 옵션 키가 삭제되었다면 graceful ignore + 경고 경로가 있는가?

### 5.4 namespace 체크

- [ ] namespace 가 삭제되는가? → **차단 (BND-NS-03)**
- [ ] 새 namespace 추가라면 BND-NS-02 의 5 조건을 모두 만족하는가?

### 5.5 문서 동기화 체크

- [ ] `wiki/02-architecture/03-package-graph.md` 갱신이 필요한가?
- [ ] `wiki/08-tsgo-master-plan/16-package-port-boundary.md` 의 9 패키지 표에 영향이 있는가?
- [ ] `conventions/01-boundary.md` (본 규약 최종본) 에 반영이 필요한가?

### 5.6 생태계 영향 체크

- [ ] nestia·agentica·autobe 가 소비하는 API 에 영향이 있는가? 있다면 `wiki/10-ecosystem/05-integrated-tsgo-transition.md` 의 Phase 매트릭스를 갱신하는가?

---

## 6. 미해결 질문 (Cycle 2 교차 리뷰 시 다른 5 역할에게)

### Q1. B (Go Engine) 에게

**BND-PKG-06 의 "L3 런타임 vs L2 변환" 분할 경계.**

`@typia/utils/validators/LlmTypeChecker.ts`, `OpenApiTypeChecker.ts` 는 **런타임** (사용자 앱) 에서도 호출 가능한가, 아니면 오직 빌드 타임 transform 에서만 호출되는가? 전자면 L3 TS 유지, 후자면 L2 Go 이전이다. A 는 현재 "런타임/변환 혼재" 로 분류했으나, B 가 실제 Go 이식 설계 시 이 구분을 확정해 주기 바란다.

### Q2. D (TS Facade) 에게

**"13 namespace" 수치의 공식 정의.**

현재 실체는 root + 8 하위 = 9 개 import 지점 (BND-NS-01 표). "13" 은 13 Programmers 인가, 아니면 과거 어떤 산정 기준인가? 본 규약은 "9 namespace" 로 정정하고 wiki 문구를 updateload 할지, 아니면 "13" 의 정확한 정의를 복구할지 D 가 결정해 주기 바란다.

### Q3. C (ttsc Driver) 에게

**Go engine ↔ ttsc driver ↔ typescript-go shim 3 자 호출 계약.**

A 는 "engine 은 L2, driver 는 L4, 둘 다 `@typia/ttsc` 바이너리 안" 이라고만 정했다. Go 모듈 경계 (`internal/engine/` ↔ `internal/driver/`) 의 함수 시그니처 · 에러 전파 · 메모리 모델은 C 가 정의한다. A 의 경계와 충돌하는 지점이 있으면 Cycle 2 에서 피드백.

### Q4. E (QA/Test) 에게

**P1 불변 약속의 "동작 동치성" 측정 기준.**

BND-API-04 는 "같은 입력에 같은 출력" 이라고 정했으나, `error.path` 문자열 포맷 · error 순서 · `typia.json.stringify` 의 whitespace 처리 등 **측정 가능한 동치성 레벨** 은 E 의 golden fixture 전략이 확정할 문제. A 는 "의미적 동치성" 을 주장하고, 실제 문자열 동치까지 강제할지는 E 판단.

### Q5. F (Release/DX) 에게

**BND-PKG-07 의 7 플랫폼 패키지 이름과 optionalDependencies 패턴.**

`@typia/ttsc-linux-x64` 등 7 개 subpackage 는 현재 A 가 wiki 인용으로 나열했으나, esbuild/rollup/SWC 선례와 비교해 (`@typia/ttsc-linux-x64-gnu` vs `-musl` 등) 세분화 필요성은 F 가 결정. 본 A 규약은 "최소 7 플랫폼" 만 강제하고 세분화는 F 자율.

### Q6. B 와 C 공동에게

**`@typia/transform` 의 FUNCTORS dispatch 이전 방식.**

v12 는 `FUNCTORS[module][methodName]` 2단계 객체 맵 ([packages/transform/src/CallExpressionTransformer.ts:186-581](../../packages/transform/src/CallExpressionTransformer.ts)) 으로 라우팅 (BND-PKG-05 가 폐기 예정). 이 dispatch 테이블이 Go engine 쪽 (B) 에 이전되는가, 아니면 ttsc driver 쪽 (C) 에 이전되는가? A 의 판단으로는 **driver 쪽 (C)** — "typia.* 호출 감지" 는 tsgo AST 탐색이므로 driver 의 역할. 하지만 B 가 `IsProgrammer / AssertProgrammer / ...` 구분을 entry point 로 드러내는 설계라면 engine 쪽 노출이 더 자연스러울 수도 있음. 두 역할 협의.

### Q7. 전체에게

**Standard Schema 통합 시점.**

`wiki/08-tsgo-master-plan/02-threat-landscape.md:103-107` "typia 는 부분 구현 (ttsc Phase 0 에서 createValidate `~standard` 주입 완료)". 이 부분 구현이 **v13 stable 에서 공식 릴리스** 라는 시점 합의는 A 의 경계 사항인가 (공개 API 변경 → BND-API-01 의 예외), 아니면 D 의 TS 세부인가? A 의 잠정 판단: "createValidate 의 반환값에 `~standard` 속성 추가" 는 **필드 추가 (BND-API-02 optional 필드 추가 허용)** 로 간주 → semver-minor 호환. 하지만 전체가 동의해야 함.

---

## 7. 결정 유예 항목 (Cycle 3~5 에서 재고)

A 가 Cycle 1 에서 **확정하지 않은** 항목:

1. **`@typia/utils` 의 rename 여부** — `@typia/runtime` 으로 바꿀지는 D + F 합의.
2. **`@typia/ttsc` 의 7 플랫폼 세부** — 실제 배포 이름 (`-x64` vs `-x64-gnu`) 은 F.
3. **L4 `@typia/unplugin` 축소 후 최종 LOC** — C 의 driver API 완성 시 파생.
4. **"13" 수치** — Q2 확정 후 전체 문서 sweep.
5. **Standard Schema 통합 공식 시점** — Q7 확정 후 Cycle 3.
6. **deprecated `@typia/core` / `@typia/transform`** 의 구체 버전 (v13.0.0 stable vs v13.5.0 등) — F.
7. **edge runtime compatibility test fixture** — 실제 Cloudflare Workers 에서 돌리는 smoke test 는 E.

---

## 8. 본 초안의 한계 (정직)

1. "L4 에 unplugin 을 묶는 것" 은 `wiki/08-tsgo-master-plan/15-executive-summary.md:34` 가 "L4 Build" 로 묶은 표기를 따른 것이다. 의존 방향 (unplugin 은 typia 를 depend) 측면에서는 L4 보다 L4c (기존 v12 분류) 가 더 정확할 수 있다. Cycle 2 피드백 필요.
2. "13" 수치 혼선은 본 초안이 해결하지 못하고 Q2 로 넘긴 상태. Cycle 3 에서 반드시 정리.
3. BND-API-01 의 "모든 공개 함수 이름" 은 D 가 Cycle 1 에서 완전 목록을 만들어 본 규약에 반영해야 함. A 는 module.ts 의 re-export 와 대표 함수만 열거.
4. `@typia/utils` 와 `@typia/typia/src/internal/` 의 물리적 분리 상태가 혼재 (일부 런타임 헬퍼는 `typia/src/internal/`, 일부는 `utils/src/`). 이 정리는 D 의 실무 작업 — A 는 "L3 로 묶는다" 만 규정.
5. 본 초안은 samchon 공식 검토 전이다 (`wiki/08-tsgo-master-plan/00-README.md:89` "samchon 검토 및 승인 — 대기 중"). samchon 피드백으로 경계가 달라지면 Cycle 3 에서 재작성.
6. 본 초안은 `wiki/08-tsgo-master-plan/16-package-port-boundary.md` 의 문구를 대량 인용·재정렬한 것이다. 원 저자 우선 (진실원 우선), A 는 "규약화" 만 수행.

---

*이 초안은 Boundary Architect 의 Cycle 1 제출본. Cycle 2 (교차 리뷰) 에서 B·C·D·E·F 의 반박·보강을 받는다. 본 문서는 Cycle 2 시작 전까지 수정되지 않는다.*

→ 다음: Cycle 2 교차 리뷰 (`cycle-02-A-boundary.md` 는 다른 5 역할의 비판을 받아 **A 가 작성**, 여기에 대한 A 의 1차 반응은 Cycle 3 `cycle-03-A-boundary.md` 에서).
