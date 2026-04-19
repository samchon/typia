# A. Boundary Architect — Mega-1 Sub-3 개정

> 작성: 2026-04-19 (Sub-1 초안) → 2026-04-19 (Sub-3 개정)
> 역할: 패키지 경계 (Go/TS), 전체 패키지 토폴로지, **사용자 API 불변 보증**
> 지위: 본 문서는 `cycle-01-A-boundary.md` (Sub-1) 에 대해 Sub-2 의 타 5 역할 (B/C/D/E/F) 비판을 **A 초안 비판 섹션만** 반영한 Sub-3 개정본. Sub-1 은 불변 보존본이며 본 문서가 A 의 현행 규약.
> 단일 진실원: `wiki/08-tsgo-master-plan/` (특히 15·16) — 본 개정본과 충돌 시 wiki 08 이 우선 ([conventions/cycles/00-README.md:2](../../conventions/cycles/00-README.md)).
> 범위 구분: "어떤 패키지가 어떤 언어·어떤 Layer 에 속하며, 사용자 가시면 무엇이 변하지 않는가" 만 다룬다. Go 엔진 내부 구조는 B, ttsc driver 구현은 C, `@typia/typia` TS 세부는 D, test 는 E, release DX 는 F 담당 — 침범 금지.

## 0. Mega-1 Sub-3 개정 변경 이력

Sub-2 (교차 리뷰) 에서 B·C·D·E·F 5 명이 A 초안에 제기한 비판 중 본 개정에서 반영한 항목.

| # | 위치 | 비판 출처 | 변경 내용 | 수용/거부 |
|---|------|-----------|-----------|-----------|
| R-01 | §1.1 + §2.1 BND-PKG-04 | B §2 A-1 (S-1) | L2 내부를 `engine/metadata/`(B 소유) · `engine/analyzer/`(B 소유) · `engine/emitter/`(C 소유) 로 한 줄 재분할. 경계표가 진실원. | 수용 |
| R-02 | §2.4 BND-API-04 | B §2 A-3 | "동작 불변" 을 3 단계로 분리: (a) IR 구조 동치 (B 검증), (b) 런타임 함수 결과 동치 (E golden), (c) emit byte 동치는 **보장 범위 밖**. | 수용 |
| R-03 | §2.1 BND-PKG-06 + BND-API-04-a | B §2 A-4 (S-6), D §13.1 | Tag.Validate functor 이름이 `packages/typia/src/internal/_*.ts` 파일명과 1:1. 매핑표는 `packages/ttsc/internal/engine/metadata/functor_names.go` 가 정본. drift 시 B+D+E 동시 PR. D lint rule `functor-name-match-go` 가 집행. | 수용 |
| R-04 | §2.6 BND-NS-01 · §4.8 · Q2 | B §2 A-2, C §2.1, D §2.2, E §2.2 | "13" 수치를 A 가 선결론: **4 축 용어 표** (import 지점 9 / 기능 그룹 13 / Programmer 13 / IR bucket 12) 고정. Q2 closure. | 수용 |
| R-05 | §2.2 BND-LNG-02 | C §2.2 | "IPC 금지" 문구를 "bidirectional pipe/stdin RPC 금지. bin launcher 의 child process spawn (argv + exit code 1-shot) 만 허용" 으로 정정. | 수용 |
| R-06 | §2.5 BND-TSC-01 · BND-TSC-03 (신설) | C §2.3, F §2.2 | "ttsc 가 plugins[].transform 을 **해석하지 않고 존재만 허용**. resolve 를 시도하지 않음. marker string 으로만 사용". v14 까지 marker 인식 보장 ("typia/lib/transform marker 변경 = semver-MAJOR" BND-TSC-03 신설). | 수용 |
| R-07 | §2.1 BND-PKG-07 + §2.4 BND-API-03 | F §2.1 | 7 플랫폼 패키지 이름 **열거 삭제**. F §3.1~3.3 으로 이관. `BND-API-03` exports 표의 `@typia/ttsc-*` 행 삭제 (사용자는 `@typia/ttsc` 만 import). A 는 "optionalDeps 모델을 사용한다" 원칙만 보유. | 수용 |
| R-08 | §2.1 BND-PKG-06 | D §2.4 | 판정 절차에 **조항 0** 추가: "외부 사용자 (nestia · agentica · autobe · 기타) 가 현재 import 하는 surface 이면 무조건 L3 유지. Go 이식 보류". | 수용 |
| R-09 | §2.1 BND-PKG-03 | D §2.1 | "7.5K → ~3K" 수치를 조건부로 정정: "**≤ 3,500 LOC (marker + re-exports + TypeGuardError 만)** — 단, `src/internal/` 147 functors 의 물리 재배치 (`@typia/runtime` 신설) 전제. functors 가 제자리면 하한은 **≤ 6,600 LOC**". | 수용 |
| R-10 | §2.4 BND-API-04-a (신설) + BND-API-03 | C §2, D §2.3, E §2.3 | 런타임 헬퍼 (Standard Schema · error factory · path parser) 는 **TS `packages/typia/src/internal/_*.ts` 가 정본**. Go emitter 는 import + 호출만. 로직 복제 금지. `lib/internal/*` 경로는 "emit JS 내부 경로, 사용자 직접 import discouraged-but-not-forbidden". | 수용 |
| R-11 | §2.7 BND-NS-DETAIL | D §3.4, D §7 M2 | `src/internal/` 147 functors 의 **물리 위치 = L1 (packages/typia/src/ 내부)**, **논리 Layer = L3**, **규약 책임자 = D** 3 축 병기. | 수용 |
| R-12 | §2.4 BND-API-02 | D §3.1 | Go 측 `MetadataSchema → Schema` 등 prefix 제거는 **Go 패키지 내부 식별자에만 적용**. JSON marshal 시 v12 `IMetadata*` 키 이름 유지. 사용자 surface 불변. | 수용 |
| R-13 | §2.8 BND-ECO-01 보강 · BND-PEER-01 신설 | F §2.3 | TypeScript peerDependency 경계 명시: `@typia/typia` / `@typia/ttsc` = peer 없음. `@typia/mcp/langchain/vercel` = peer SDK 유지. `@typia/interface` = devDep only. 사용자 IDE 경로 `typescript` 설치 안내는 F setup wizard 관장. | 수용 |
| R-14 | §2.1 BND-PKG-05 | B §7 M-5, D §7 M4, F §2.2 | `@typia/transform` 폐기 시점을 A·D·F 3 자 합의안으로 통일: "v13.0 에서 `src/transform.ts` 삭제, v13.0~v13.2 는 `src/_deprecated/transform.ts` stub 유지 (throw), marker 문자열 `"typia/lib/transform"` 은 v14 까지 인식 보장 (BND-TSC-01)". | 수용 |
| R-15 | §2.1 BND-PKG-04 | B §7 M-4, D §7 M4 | `@typia/core` 배포 경로 재확정: v13 alpha/beta = TS 유지 / v13 stable = **deprecated shell** (빈 패키지, `{}` export) / v14 = npm unpublish. D §7.3 · F §부록 B 와 단어 정렬 ("shell"). | 수용 |
| R-16 | §2.6 BND-NS-03 보강 | D §3.2 | `typia.functional` 이 Phase 1 미포팅이면 v13.0 GA 에 runtime 경로가 비어 있는 간접 삭제 효과. BND-NS-03 에 "namespace 내부 핵심 함수가 `throw` stub 상태로 GA 금지" 한 줄 추가. | 수용 |
| R-17 | §5 (검증 체크리스트) | E §2.1 ~ §2.3 | A 의 "E 가 알아서" 식 위임 제거. BND-API-01 / BND-API-04 / BND-TSC-01 에 대한 **검증 책임이 E 의 golden fixture 에 있음을 A 가 명시 요구** 로 승격. | 수용 |
| R-18 | §6 Q 열 · §7 | D §8 D Q7, E §2.2 | Q2 는 R-04 로, Q7 (Standard Schema) 은 R-10 으로 closure. Q1/Q3/Q4/Q5/Q6 는 유지. | 수용 |
| R-19 | §2.6 BND-NS-01 표 보강 | C §2.1, D §2.2.2 | "9 import 지점" 과 "13 기능 그룹" 은 axis 가 다를 뿐 병존 사실 — A 의 선결론 (§2.6 의 정본 표 추가). | 수용 |
| REJ-1 | — | — | (기각 항목 없음. Sub-2 의 A 섹션 비판은 모두 규약 개선 정보.) | — |

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

#### BND-PKG-03. L1 Facade — `@typia/typia` 는 얇게 TS 유지 (LOC 목표 조건부)

**본문 (R-09 Sub-3 개정, Sub-2 D §2.1 수용)**

`@typia/typia` 는 v13+ 에서도 TS 로 유지된다. LOC 목표는 **`src/internal/` 147 functors 의 물리 위치에 따라 두 분기**로 분화한다 (Sub-1 의 단일 수치 "~3K" 는 허위 약속이었다는 D 지적 수용):

| 시나리오 | `src/internal/` functors 위치 | `packages/typia/src/` LOC 하한 |
|---------|----------------------------|-----------------------------|
| **시나리오 1 (functors 제자리)** | `packages/typia/src/internal/_*.ts` 유지 | **≤ 6,600 LOC** (executable/ 삭제, TypiaProgrammer.ts 삭제, transform.ts 삭제 후 실측 ~6,530 + 여유 70) |
| **시나리오 2 (functors `@typia/runtime` 이전)** | `@typia/runtime` 신설 후 이주 | **≤ 3,500 LOC** (marker API + re-exports + TypeGuardError + NoTransformConfigurationError 메시지 확장분만) |

`@typia/runtime` 신설 여부는 §7 결정 유예 항목 1 (D + F 합의 대상) 이다. 유예 결론이 나기 전에는 **시나리오 1 의 6,600 LOC 하한** 이 집행된다.

유지 항목:

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
- **Sub-3 (R-09)**: Sub-2 D §2.1 의 LOC 재계산. "~3K" 는 `executable/` -583 + `transform.ts` -5 + `TypiaProgrammer.ts` -583 = -1,171 밖에 못 줄임. 실제로는 `~6,373 LOC` 가 realistic floor. "~3K" 를 달성하려면 `src/internal/_*.ts` (~3,800 LOC) 를 `@typia/runtime` 으로 물리 이전해야 가능. A Sub-1 은 전제를 명시 않아 **허위 약속** 이 되었다 — 본 개정이 조건부 2 시나리오로 분화.

**위반 시 결과**
- CLI 를 L1 에 유지하면 `commander/inquirer` 의존이 typia import 트리에 남음 → 라이브러리 사용자에게 전파 ([wiki/02-architecture/03-package-graph.md:106-112](../../wiki/02-architecture/03-package-graph.md) "CLI 의존이 라이브러리 사용자에게 전파 안 됨" 이 현재 강점).
- Go 로 이전하면 사용자 `import typia from "typia"` 의 타입 추론 불가능.
- 시나리오 2 의 "≤ 3,500" 을 시나리오 1 에서 감시하면 functors 제자리인데 LOC 하한 미달로 CI red → 개발자 혼란 (R-09 조건부 규약이 이를 방지).

#### BND-PKG-04. L2 Engine — `@typia/core` 는 v13 beta 시점부터 Go 로 이전 + L2 내부 3 모듈 재분할

**본문**
`@typia/core` (v12 현재 ~30,307 LOC TS) 는 v13 alpha 까지는 TS 로 유지되나, **v13 stable 출시 (2028 Q2) 시점까지 전체 Go 포팅 완료** 후 npm 배포본은 **deprecated shell** (빈 패키지, `{}` export + README 로 마이그레이션 안내) 로 남는다. v14 (2029 Q2) 에서 npm unpublish.

**L2 Engine 내부 3 모듈 재분할 (R-01 Sub-3 개정, B §2 A-1, S-1 수용)**:

| 모듈 경로 | 소유 | 책임 |
|-----------|------|------|
| `packages/ttsc/internal/engine/metadata/` | **B (Go Engine)** | IR (MetadataSchema / 12 sum-type / Collection / Name cache) 소유. IR 불변식 — Sub-2 B §3.2 의 12 bucket 정본. |
| `packages/ttsc/internal/engine/analyzer/` | **B (Go Engine)** | tsgo Checker 결과 → IR 변환. shim 의존은 **driver→analyzer adapter** 로 격리 (Sub-2 B §S-4). |
| `packages/ttsc/internal/engine/emitter/` | **C (ttsc Driver)** | IR → JS 코드 emit. `EmitProgrammer(kind, ...)` entry 13+ kind. recursion guard 는 모든 재귀 emitter 가 `map[*ObjectType]bool` visiting set 보유 (Sub-2 B §S-2, C §7.1.7). |

Sub-1 의 "Go 엔진 내부 구조는 B" 문구는 본 표의 3 모듈 분할로 교체된다. **Why**: Sub-2 C §1.1 "MetadataSchema IR, Analyzer, Collection → B 역할" 과 A §1.1 "codegen 하위 → B" 의 용어 불일치 ("codegen" vs "emitter") 를 A 의 경계표에서 정정. 경계표가 진실원이어야 PR reject 근거가 선다.

Go 이식 대상 (종전과 동일):
- MetadataFactory (`packages/core/src/factories/MetadataFactory.ts`) + internal metadata 함수군 (`wiki/03-packages/02-core.md:100-106`)
- 13 Programmers (IsProgrammer / AssertProgrammer / ValidateProgrammer / JsonStringify... / RandomProgrammer / ProtobufEncode... / LlmSchema... 등, [wiki/03-packages/02-core.md:108-124](../../wiki/03-packages/02-core.md))
- 공통 helpers (UnionExplorer, CheckerProgrammer, FeatureProgrammer, StringifyJoinder, AtomicPredicator 등)

배포 경로 (R-15 명문화): 
- **v13 alpha/beta**: `@typia/core` 는 현행 TS 로 유지 (dogfooding 용).
- **v13 stable (2028 Q2)**: `@typia/core` = deprecated shell — `package.json.main` 이 `{}` 을 export, README 는 "이 패키지는 v13 부터 내부 구현이 `@typia/ttsc` 의 Go 엔진으로 이전되었습니다. 직접 import 를 중단하세요" 안내.
- **v14 (2029 Q2)**: npm unpublish. 기존 설치본은 registry 그대로 잠김.

Go 코드는 `@typia/ttsc` 바이너리 내부 `internal/engine/` 에 존재 ([packages/ttsc/README.md:11-23](../../packages/ttsc/README.md)). **별도 `typia-go` npm/Go 패키지는 존재하지 않는다** — wiki 가 과거 "typia-go" 를 별도 프로젝트로 표기했던 관행은 `wiki/08-tsgo-master-plan/00-README.md:47` v2 개정으로 폐기됨 ("ttsc + typia-go 는 한 시스템의 두 층. 분리 결정은 존재하지 않는다" — [04-strategic-options.md:14](../../wiki/08-tsgo-master-plan/04-strategic-options.md)).

**Why**
- 원문: `wiki/08-tsgo-master-plan/16-package-port-boundary.md:68-86` "★★★★★ 확정. Node 프로세스 spawn 은 파일당 IPC 수십~수백 ms 오버헤드. typescript-go 가 Go 면 같은 프로세스의 Go 코드가 접근해야 한다".
- 통합 이유: `wiki/08-tsgo-master-plan/04-strategic-options.md:16-48` 관점 1~4 (하나의 Go 바이너리, IPC 제거, 중복 투자 없음, UX 단일).
- 예상 Go LOC: 같은 16번 83행 "100~150K (tsgonest 72K/4 namespace 실측에서 13 namespace 전체로 비례 추정)".
- **Sub-3 보강 (R-01)**: Sub-2 B §2 A-1 — "L2 = Go 고정" 만 적으면 그 안의 IR 소유(B) vs emitter 소유(C) 가 경계 진실원에서 누락. Sub-2 B 가 S-1 로 이 줄 추가를 blocker 지정.
- **Sub-3 보강 (R-15)**: Sub-2 M-4 — A (v13 stable 부터 빈 패키지) · D §7.3 (v13 은 peer stub throw, v14 unpublish) · F §부록 B (v13 GA 에 3번째로 publish) 3 초안 표현 차이. A 가 선결론 "deprecated shell" 단어로 3자 통일.

**위반 시 결과**
- Node IPC 유지 시 `wiki/08-tsgo-master-plan/04-strategic-options.md:42-44` 의 "파일당 수십~수백 ms IPC 오버헤드" 가 그대로 남음 → tsgonest 대비 성능 경쟁력 상실.
- L2 내부 모듈 소유권 미명시 시 Phase 1 에서 emitter 안에 MetadataSchema 재계산 로직이 슬며시 들어와도 경계표로는 PR reject 근거를 못 만든다 (Sub-2 B A-1 파급).
- `@typia/core` npm 배포를 유지하면 사용자가 v13 에서 `@typia/core` 직접 import 하는 잘못된 경로가 계속 생성됨.

#### BND-PKG-05. `@typia/transform` 은 v13 에서 폐기 (A·D·F 3 자 합의 타임라인)

**본문**
`@typia/transform` (v12 현재 ~4,306 LOC TS) 의 폐기 타임라인은 Sub-2 에서 3 초안 (A/D/F) 이 서로 다르게 선언했다 (Sub-2 B §7 M-5, D §7 M4, F §2.2 (c)). 본 개정 (R-14) 이 A 의 선결론을 다음과 같이 확정한다.

| 버전 | 파일 상태 | package.json | 동작 |
|------|-----------|-------------|------|
| v12.x (현재) | `src/transform.ts` (TransformerFactory) | `"@typia/transform"` 배포 | ts-patch / unplugin 이 consume |
| **v13.0 ~ v13.2** | `src/transform.ts` **삭제**. `src/_deprecated/transform.ts` = throw stub | `exports."./lib/transform"` **제거**, `src/_deprecated/*` 별도 export 로 resolve 가능 | `import` 시 `NoTransformConfigurationError` throw. `tsconfig.plugins[]` 의 marker 는 **resolve 하지 않음** (BND-TSC-01 + R-06) |
| **v13.3** | `src/_deprecated/transform.ts` 도 **완전 제거** | `@typia/transform` 자체 npm 패키지는 **v13.0 stable 부터 이미 배포 중단** | 기존 설치본은 registry 에 잠김 |
| **v14** | — | — | marker 문자열 `"typia/lib/transform"` 인식은 **v14 까지 유지** (BND-TSC-03 신설) |

요점:
- `@typia/transform` **npm 패키지** 자체는 v13.0 stable 부터 배포 중단 (A Sub-1 의 "v13 첫 stable 부터 npm 배포 중단" 유지).
- `typia` 패키지 내부의 `src/transform.ts` 는 v13.0 삭제, `_deprecated` stub 이 2 minor 간 throw 로 graceful 안내 (D §3.6 수용).
- `tsconfig.json.compilerOptions.plugins[{ transform: "typia/lib/transform" }]` marker 는 ttsc 가 **resolve 시도하지 않으며** v14 까지 marker 문자열을 허용 (F §2.2 (d) 수용 + BND-TSC-01 의 "marker 불변" 원칙 유지).

대체: 전체 책임은 `@typia/ttsc` 의 Go driver (`internal/driver/`, `cmd/ttsc/`) 로 이동.

v13 migration: 사용자가 `npm i -D typia` 후 `npx typia setup` 실행 시 이 패키지 의존을 자동 제거. `@typia/transform` 이 package.json 에 남아 있으면 setup wizard 가 제거 알림 표시.

**Why**
- 원문: `wiki/08-tsgo-master-plan/16-package-port-boundary.md:87-102` "★★★★★ 확정. tsgo 에서 TransformerFactory API 가 존재하지 않는다. 이 전체 파이프라인이 구조적으로 사라진다".
- tsgo 기술 제약: `wiki/08-tsgo-master-plan/02-threat-landscape.md:11-13` "in-process plugin 불가 — Go 런타임 다중 로드 불가", "공식 transformer API 없음 — Issue #516 Post-7.0 milestone".
- 현재 책임: `wiki/03-packages/03-transform.md:1-8` "ts-patch / unplugin 이 호출하는 TransformerFactory 진입점. FUNCTORS 디스패치". 이 역할이 Go driver 로 이전되는 것이 C 의 구현 책임.
- **Sub-3 (R-14)**: Sub-2 M-5 가 3 안 충돌. A·D·F 가 위 표로 통일. tsconfig marker 불변 원칙 (P4) 이 "v13.3 삭제" 로 깨진다는 F §2.2 (a) 지적 수용.

**위반 시 결과**
- v13 에 `@typia/transform` 이 남아 있으면 사용자는 "뭘 쓰는 건지" 혼란 → 지원 질문 폭증.
- ts-patch 경로 유지 압박 → samchon 의 공식 입장 ("ts-patch 경로는 2028 말 graceful deprecation", [00-README.md:49](../../wiki/08-tsgo-master-plan/00-README.md)) 훼손.
- 폐기 시점 3 안 잔존 시 Phase 2 dogfooding (ttsc 로 typia 자체 빌드) 시점에 `FUNCTORS` legacy 경로 지원 여부 판단 불가 (Sub-2 B M-5 파급).

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

판정 절차 (애매할 때, Sub-3 개정으로 조항 0 선행):

**0. 외부 사용자 surface 우선 (R-08, Sub-2 D §2.4 수용)**
   - 이 심볼이 nestia · agentica · autobe · 기타 생태계 프로젝트가 현재 import 하는 surface 인가?
   - 또는 `@typia/utils` 의 README · wiki 에 **공식 공개 API 로 문서화** 되어 있는가?
   - 위 둘 중 하나라도 "예" 이면 → **무조건 L3 TS 유지. Go 이식은 BND-ECO-01 원칙 (상위 프로젝트 내부는 경계 밖) 에 따라 보류**.
   - 예: `OpenApiTypeChecker` · `OpenApiConverter` · `LlmTypeChecker` · `LlmJson` (agentica 가 런타임 사용).

**1~3. 그 외 (애매한 나머지)**:
1. 이 심볼이 `@typia/typia` 의 내부에서 `internal/` 경로로 import 되어 emit 되는가? → 런타임 (L3 TS 유지)
2. `@typia/core` 가 빌드 타임에만 호출하는가? → 변환 (L2 Go 이전)
3. 둘 다면 → **둘로 쪼개거나, 우선 런타임 TS 로 두고 Go 변환부가 **동일 로직 재구현**** — 단 **R-03 의 functor 이름 매핑표 규약**을 따라야 한다.

**Functor 이름 매핑표 (R-03, Sub-2 B §A-4 / S-6 / D §13.1 수용)**:
- `packages/typia/src/internal/_*.ts` 파일명 (147 functors) 과 `packages/ttsc/internal/engine/metadata/functor_names.go` 상수 슬라이스는 **1:1 매핑**이 단일 진실원.
- Tag.Validate 템플릿의 functor 이름은 이 표에서 lookup.
- 한 쪽만 변경하는 PR 은 **자동 차단** — D 의 lint rule `functor-name-match-go` (Sub-2 D §13.1 요구) 가 diff = ∅ 를 강제.
- functor 추가/삭제 시 **B + D + E 동시 PR** 필수.

**Why**
- 원문: `wiki/08-tsgo-master-plan/16-package-port-boundary.md:104-118` "분할 — 런타임 TS 유지, 변환 유틸 Go 포팅".
- 런타임/변환 혼재 근거: `wiki/03-packages/04-typia-utils-unplugin.md:60-73` "런타임에 emit 되는 헬퍼" vs "converters/ — LlmSchemaConverter, OpenApiConverter".
- 이름 결정 (`@typia/utils` vs `@typia/runtime`) 은 D 역할이 네이밍 승인 후 확정.
- **Sub-3 (R-08)**: Sub-2 D §2.4 가 "외부 사용자 axis 누락" 을 지적. 조항 0 이 없으면 A 가 `OpenApiConverter` 를 L2 로 분류 → Go 이식 → nestia 빌드 깨짐 → BND-API-01 정신 (공개 함수 이름 불변) 과 모순.
- **Sub-3 (R-03)**: Sub-2 B §A-4 — "Tag.Validate 템플릿의 functor 이름 drift 가 IR 을 깬다". B 가 S-6 을 blocker 로 지정. D §3.4 "147 functors 존재 … Go emitter 가 파일명-함수명 1:1 매핑을 전제" 와 정합.

**위반 시 결과**
- 변환부를 TS 로 남기면 Go engine 이 TS 를 호출해야 하는 cross-language boundary 발생 → IPC 문제 재등장.
- 런타임부를 Go 로 옮기면 Cloudflare Workers 등 edge runtime 에서 사용자 JS 가 import 할 방법 없음 (P5 위반).
- Functor 이름 drift 시 Go 측 emitter 가 존재하지 않는 TS functor import 를 emit → 사용자 런타임 Module Not Found (R-03 파급).

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

배포 모델 (R-07 Sub-3 개정, Sub-2 F §2.1 수용):

- `@typia/ttsc` 는 **npm 메인 패키지** (launcher, < 100 LOC JS) — bin/ttsc.js 가 Node 에서 실행되며 platform 을 감지하고 대응 Go 바이너리를 spawn.
- Go 바이너리는 **복수의 platform-specific optionalDependencies** 로 배포 (esbuild/SWC 가 검증한 패턴).
- **구체적 subpackage 이름 열거와 플랫폼 세분화 (예: `-x64` vs `-x64-gnu` vs `-musl`) 는 F §3.1~3.3 의 정본 표에서 관리**. A 는 "optionalDeps 모델을 쓴다 + 최소 주요 7 플랫폼 (darwin-{x64,arm64}, linux-{x64,arm64,arm}, win32-{x64,arm64}) 커버" 만 원칙으로 보유.

**Sub-3 경계 명시 (R-07)**:
- Sub-1 은 7 개 subpackage 이름 (`@typia/ttsc-darwin-arm64` 등) 을 **문자 그대로 고정** 했고 `BND-API-03` exports 표에도 포함했다.
- Sub-2 F §2.1 지적: 이는 (a) A 가 F 소관 사항을 선점 후 떠넘기는 자기참조, (b) 2029 세트 launch 시 4 프로젝트 공용 바이너리 (`@samchon-ecosystem/tsgo-*` 등) 경로 구조적 봉쇄, (c) 사용자가 `@typia/ttsc` 하나만 import 하므로 subpackage 이름은 사용자 가시성 0.
- 본 개정: 이름 열거 삭제 + BND-API-03 exports 표에서 `@typia/ttsc-*` 행 전체 삭제. subpackage 이름 변경은 **사용자 API 에 해당하지 않는다** 고 경계상 선언.

경계 지정:
- **A (나)**: "ttsc 는 L4, 내부에 engine(B) + driver(C) 가 있다. Node launcher + Go 바이너리 + optionalDeps 모델 사용" 는 사실 자체
- **C (ttsc Driver)**: shim / patch / driver 구현
- **B (Go Engine)**: `internal/engine/metadata/` + `internal/engine/analyzer/` (R-01 신설 경계표)
- **F (Release/DX)**: **7 플랫폼 build matrix · subpackage 이름 · 세분화 (musl/gnu 등) 전담**. A 는 개입 없음.

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

#### BND-LNG-02. Bidirectional RPC 금지 (용어 정정, R-05)

**본문 (R-05 Sub-3 개정, Sub-2 C §2.2 수용)**

Sub-1 은 "IPC 금지 (bin launcher 예외 허용)" 로 규정했으나, C §2.2 가 지적: C 의 `ttsc.js` launcher 는 **IPC (파이프 bidirectional RPC) 가 아니라 단순 process spawn** 이다. Sub-1 문구가 "IPC 허용" 으로 확대 해석되면 C 의 driver 단일 프로세스 원칙이 깨진다.

정정 규약:
- **같은 Go 바이너리 프로세스 안의 Go 코드 간 호출만 허용** (B 의 engine ↔ C 의 emitter 는 같은 프로세스).
- **허용 예외 1: bin launcher 의 "1-shot child process spawn"** — Node `@typia/ttsc` launcher 가 platform-specific Go 바이너리를 `spawn(args)` → Go 바이너리가 `exit code + stdout/stderr` 로 1-shot 결과 반환. bidirectional pipe 없음.
- **허용 예외 2: unplugin 의 번들러 통합** — 같은 1-shot spawn 모델. Vite/Webpack 플러그인이 Go 바이너리를 호출하되 bidirectional RPC 아님.
- **영구 금지**:
  - 사용자 런타임 JS ↔ Go 바이너리 RPC (P5 Edge runtime 호환 파괴).
  - bidirectional pipe / stdin JSON-RPC / socket 기반 daemon 모델 (L4 전체).

**Why**
- `wiki/08-tsgo-master-plan/04-strategic-options.md:42-44` "파일당 수십~수백 ms IPC 오버헤드" 회피.
- `wiki/08-tsgo-master-plan/15-executive-summary.md:54-56` "Edge runtime 구조적 승리" — 런타임 JS 가 Go 바이너리에 IPC 요청하면 Cloudflare Workers 에서 동작 불가.
- **Sub-3 (R-05)**: Sub-2 C §2.2 용어 엄격화 — "IPC" 는 일반적으로 양방향 커널 IPC (pipe/socket/shm) 를 가리키지만 bin launcher 는 1-shot spawn. Sub-1 예외 조항이 "pipe IPC 허용" 으로 오해되면 Phase 1 에 누군가 JSON-RPC daemon 모델을 제안해도 규약으로 거절 못 한다.

**위반 시 결과**: tsgonest 가 이미 달성한 "IPC 없음 → tsgo 네이티브 속도" (`wiki/08-tsgo-master-plan/03-technical-foundations.md:105` 모델 E 장점) 를 포기. daemon 모델은 Windows 에서 service 관리 복잡도 증가 → Setup wizard (F §6) 가 감당 못 함.

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

**Sub-3 보강 (R-12, Sub-2 D §3.1 수용)**: B §1.3·§2.1 이 Go 내부 식별자에서 `Metadata` prefix 제거 (`MetadataObjectType → ObjectType`, `MetadataSchema → Schema`, `MetadataFactory → Analyzer`) 를 제안했다. 경계 판정:

- prefix 제거는 **Go 패키지 내부 식별자에만 적용**. `package metadata` 가 prefix 역할.
- JSON marshal 시 (`Schema.MarshalJSON`) 는 v12 의 `IMetadataSchema / IMetadataObject / IMetadataConstant / IMetadataAtomic / IMetadataTag / ...` 키 이름을 **그대로 유지**. `json:"IMetadata..."` 태그로 강제.
- 근거: `@typia/interface` 가 이 이름을 공개 API 로 re-export 중 ([packages/interface/src/index.ts](../../packages/interface/src/index.ts)). `typia.reflect.schema<T>()` 결과를 `IMetadataSchema` 로 type-assert 하는 코드가 agentica · autobe 에 존재. JSON 구조의 classname 태그가 v12 와 달라지면 P1 위반.
- 이 제약은 B §2.1 이름 규칙의 scope 를 좁히는 것일 뿐 B 내부 설계를 간섭하지 않는다.

#### BND-API-03. npm 진입점 (exports) 불변

**본문**
사용자가 import 하는 경로는 아래 표 그대로 v13·v14 에서 유지한다.

| import 경로 | v12 | v13+ | 비고 |
|-------------|-----|------|------|
| `"typia"` | ✓ | ✓ | |
| `"typia/lib/transform"` | ✓ | **deprecated (v13.0~v13.2 throw stub, v13.3 제거)** | marker 문자열 자체는 v14 까지 인식 (BND-TSC-01/03) |
| `"typia/lib/internal/*"` | ✓ | ✓ (런타임 헬퍼, L3) | **R-10: emit JS 가 쓰는 내부 경로. 사용자 직접 import 는 discouraged-but-not-forbidden (`_createStandardSchema` 공유를 위해 필요)** |
| `"@typia/interface"` | ✓ | ✓ | |
| `"@typia/mcp"` | ✓ | ✓ | |
| `"@typia/langchain"` | ✓ | ✓ | |
| `"@typia/vercel"` | ✓ | ✓ | |
| `"@typia/utils"` | ✓ | ✓ (런타임부만) | 변환부 (L2) 는 Go 이전, 단 조항 0 (사용자 surface) 보호 대상은 유지 (BND-PKG-06) |
| `"@typia/unplugin/vite"` | ✓ | ✓ | |
| `"@typia/unplugin/webpack"` | ✓ | ✓ | |
| `"@typia/unplugin/rspack"` | ✓ | ✓ | |
| `"@typia/unplugin/esbuild"` | ✓ | ✓ | |
| `"@typia/unplugin/rolldown"` | ✓ | ✓ | |
| `"@typia/unplugin/bun"` | ✓ | ✓ | |
| `"@typia/unplugin/farm"` | ✓ | ✓ | |
| `"@typia/unplugin/next"` | ✓ | ✓ | |
| `"@typia/ttsc"` | — | ✓ (신규) | **R-07: `@typia/ttsc-<os>-<arch>` subpackage 는 optionalDeps. 사용자 import 표면 아님. 목록은 F §3.1 정본** |
| `"@typia/core"` | ✓ | **deprecated shell (v13 stable, `{}` export) → v14 unpublish** | R-15 (BND-PKG-04) |
| `"@typia/transform"` | ✓ | **제거 (v13.0 stable npm 배포 중단)** | R-14 (BND-PKG-05) |

**Why**
- 현재 실체: [packages/typia/package.json:6-11](../../packages/typia/package.json) 의 exports 3 개, + 각 패키지 package.json.
- 마이그레이션 전략: `wiki/08-tsgo-master-plan/16-package-port-boundary.md:210-224` "제거되는 의존: ts-patch, typescript (peer 로만)". 하지만 typia import 경로는 여전히 `"typia"` 유지.

**위반 시 결과**
- `"typia/lib/transform"` 경로 삭제 시 tsconfig.json 의 `plugins` 가 resolve 실패 → P4 위반 (tsconfig 스키마는 유지하되 내부 노-op 로 처리하는 방식 권장).
- `@typia/core` / `@typia/transform` 을 import 하던 코드는 **오류 메시지로 마이그레이션 안내** (빈 패키지 + README 로 가이드).

#### BND-API-04. 런타임 동작 불변 (결과값 계약) — 3 단계 동치 분리 (R-02)

**본문 (R-02 Sub-3 개정, Sub-2 B §A-3 수용)**

Sub-1 은 "같은 입력에 같은 출력" 만 규정, **어느 layer 의 동치**인지 불명. B §A-3 지적 수용하여 **3 단계 동치**로 분리한다.

**(a) IR 구조 동치 — B 검증 책임**
- `typia.reflect.schema<T>()` 가 반환하는 IR (Metadata Schema JSON) 이 v12 와 v14 **deep-equal**.
- 측정 도구: `scripts/ir-json-diff.ts` (Sub-2 E §3.4 B-4 요구). Go `Schema.MarshalJSON` ↔ v12 `MetadataFactory.analyze` JSON diff.
- 규약: **12 IR bucket** (Sub-2 B §3.2) 과 각 bucket 의 필드 이름·순서·encoding 이 v12 호환 (R-12 JSON marshal 규약과 정합).

**(b) 런타임 함수 결과 동치 — E golden fixture 책임**
- `typia.is<T>(input)` 의 반환 boolean: 동일
- `typia.validate<T>(input)` 의 `.success`, `.errors.length`, 각 `error.path`, `error.expected`, `error.value`, **error 순서** 도 동일
- `typia.json.stringify<T>(v)` 의 출력 문자열 (semantic equivalent — JSON 파싱 결과 동치)
- `typia.json.schema<T>()` 의 반환 JSON Schema: deep-equal
- `typia.llm.application<C>()` 의 반환 `ILlmApplication`: 함수 배열 순서 포함 동일
- 측정: E 의 golden fixture 세트 (Sub-2 E §2.1 R-A1-* 요구). v12 산출 vs v14 산출 `node --eval` 실행 결과 deep-equal.

**(c) emit byte 레벨 동치 — 보장 범위 밖**
- Go emitter 가 v12 TS transformer 와 **byte-identical** 한 JS 를 emit 하지는 않는다.
- emitter 가 whitespace / 괄호 / 변수 이름 생성 순서 등을 자유롭게 선택.
- 단 **idempotent 는 E §3.7 별도 guard**: 같은 ttsc 바이너리로 두 번 emit 하면 동일. 이는 보장.
- v12 ↔ v14 byte-identical 을 사용자가 요구하는 경우가 없음을 확인 (Sub-2 E 는 behavior-parity fixture 50 개로 충분 검증 가능).

**BND-API-04-a. 런타임 헬퍼 정본 규약 (R-10 신설, Sub-2 C/D/E 3 자 요구)**

런타임 헬퍼 — Standard Schema 어댑터 · error factory · path parser · format validators · protobuf reader/writer 등 — 는 **TS `packages/typia/src/internal/_*.ts` 가 정본 (single source of truth)**.

- Go emitter 는 해당 헬퍼를 **`import { _xxx } from "typia/lib/internal/_xxx"` + 함수 호출**로만 사용한다.
- Go 측에 동일 로직을 **복제 구현하지 않는다**. 현재 Phase 0 의 `emitter/assert.go:63` inline `~standard.validate` 구현 (약 30 LOC) 은 **한 줄 호출 (`_createStandardSchema(__fn)`) 로 교체 필요**.
- 이는 drift 원천 차단 — TS path parser (4-state machine, bracket notation 지원) 와 Go 단순 `split(".").slice(1)` 의 불일치가 Phase 0 에 이미 발생 (Sub-2 D §5.3 실측).
- 이 규약은 Sub-2 B A-4 의 functor 이름 매핑표 (R-03) 와 결합: functor 이름이 양측에 1:1 로 있으면 emitter 는 import path 를 `typia/lib/internal/_${name}` 으로 mechanical 합성.
- C §7.3.3 (inline 복제) 개정 및 E §2.3 `test_standard_schema_parity.ts` fixture 추가는 Sub-3 합의 (S-3) 로 진행.

**Why**
- `wiki/08-tsgo-master-plan/15-executive-summary.md:79` "typia.is<T>(input) 한 자도 바뀌지 않는다" — 단순 API 이름뿐 아니라 **동작** 도 같아야 "한 자도 안 바뀜" 의 실질적 의미를 만족.
- 이것이 E 역할의 golden fixture 대상. E 가 기술 구현 (Phase 2 analyzer parity test 등), A 는 **동치성 계약** 을 정의.
- **Sub-3 (R-02)**: B §A-3 — "의미적 동치성" 주장이 어느 layer 에서 보장되는지 불명이면 E Q-E9 "fixture TS 버전 메타" 영구 미해결. A 가 세 단계 분리를 선결론.
- **Sub-3 (R-10)**: Sub-2 M-3 (Standard Schema 단일화) 는 Sub-2 최우선 쟁점. C 의 inline 복제 (`assert.go:63` 30 LOC) vs D 의 import 호출 (`_createStandardSchema(__fn)` 3 LOC). B A-4 가 functor 이름 매핑표로 집행 수단 제공. 본 규약은 A 가 "정본 = TS" 만 경계적으로 선언.

**위반 시 결과**
- nestia `@TypedBody(dto)` 가 내부 `typia.assert<Dto>(body)` 를 부를 때 error 포맷이 다르면 nestia 사용자 앱의 에러 핸들러 동작 달라짐 → 생태계 붕괴.
- `typia.json.schema<T>()` 결과가 다르면 OpenAPI 문서가 달라져 SDK generator 산출물이 변함.
- (a) IR 동치가 빠지면 `typia.reflect.schema<T>()` 를 consume 하는 agentica·autobe JSON 호환 깨짐.
- (b) 런타임 동치가 빠지면 사용자 앱 런타임 동작 변화.
- (c) byte 동치를 요구하면 emitter 자유도를 과도하게 제약 → Go emitter 구현 폭 축소.
- (a-a) 헬퍼 로직 drift 시 Standard Schema ecosystem (Zod 4 / Valibot / ArkType) 이 typia 를 broken implementation 으로 감지 → 공식 README 에서 typia 제외 위험 (Sub-2 D §4.4).

### 2.5 tsconfig plugins 호환 범위

#### BND-TSC-01. `plugins[].transform` 지시자 **존재 허용 + 해석 안 함** (R-06 정정)

**본문 (R-06 Sub-3 개정, Sub-2 C §2.3 + F §2.2 수용)**

사용자 `tsconfig.json` 에 아래 형태가 남아 있어도 v13 ttsc 가 정상 build 한다.

```json
{
  "compilerOptions": {
    "plugins": [
      { "transform": "typia/lib/transform" }
    ]
  }
}
```

Sub-3 정정 요점:
- ttsc 는 이 지시자의 **존재를 허용**하나 **Node module resolution 을 시도하지 않는다**. marker string 으로만 취급.
- C §2.3 의 관찰: C 의 Phase 0 driver 는 실제로 `tsconfig.plugins` 를 파싱하지 않는다. 모든 `.ts` 파일을 tsgo Program 으로 로드 후 `typia.*` call site 만 방문. plugins 는 무시 가능.
- v13 setup wizard 는 이 설정을 **보존** 한다 — 변경 시 사용자 수만 프로젝트 수정 비용 (P4 위반) 때문.
- ts-patch 시대 migration compat 용 marker 이므로 A 는 **무해화 주체** 를 C 가 아니라 "ttsc + tsgo resolve 경로 자체" 로 규정. tsgo 가 ts-patch 미경유이므로 transform 을 로드 시도하지 않음 → 자동 충족.

**marker 인식 기간 (R-14 와 정합)**: v13.0 ~ **v14** 까지 marker 문자열 `"typia/lib/transform"` 을 지시자로 허용. v14 이후 제거 여부는 Cycle 5+ 에서 재논의.

**Why**
- `wiki/08-tsgo-master-plan/01-preface.md:13-21` "이 5 줄도 변경 없이 유지".
- `wiki/08-tsgo-master-plan/05-recommended-path.md:116-119` 사용자 약속.
- **Sub-3 (R-06)**: Sub-2 C §2.3 — A 가 "ttsc driver 가 이 지시자를 마커로 사용" 으로 규정했으나 C 의 실제 driver 는 파싱조차 안 함. 문구 modify. Sub-2 F §2.2 (c) — v13.3 에서 module 을 삭제하면 P1 "한 단어 치환" 붕괴. 본 규약으로 marker 와 module 의 생애 주기를 분리.

**위반 시 결과**: 사용자 수만 프로젝트 강제 수정 → semver-major 실질 효과.

#### BND-TSC-03. marker 문자열 변경은 semver-MAJOR (R-06 신설)

**본문**
`tsconfig.json.compilerOptions.plugins[].transform` 의 **marker 문자열 값 자체** (`"typia/lib/transform"`) 를 rename 하거나 resolve 요구 사항을 변경하는 것은 사용자 눈에 보이는 변경이며 semver-MAJOR 로 분류한다. F §semver 분류표에 이 줄을 추가한다 (F §2.2 (d) 요구 수용).

**Why**
- 사용자 tsconfig.json 은 typia 의 비명시적 공개 API 표면. 변경 비용이 semver-patch 처럼 가벼우면 `npm update` 한 번으로 빌드가 깨진다 (F §2.2 (c) 지적).

**위반 시 결과**: `latest` dist-tag 에 unattended 영향. BND-PKG-05 의 "v13.3 완전 제거" 경로가 marker 인식까지 끌고 가면 P1 위반.

#### BND-TSC-02. `plugins[]` 외 커스텀 옵션 스키마 호환

**본문**
v12 에서 `{ transform: "typia/lib/transform", strict: true, ... }` 형태로 전달된 옵션 키는 v13+ 에서 **같은 이름으로 동작 또는 graceful ignore**. deprecated 옵션은 경고 출력하되 에러 내지 않는다.

**Why**
- 기존 사용자의 tsconfig 보존 (P4).

**위반 시 결과**: 옵션 rename 시 마이그레이션 문서 필요 → 사용자 비용 증가.

### 2.6 13 namespace 유지 규약

#### BND-NS-01. namespace 목록 — 4 축 용어 선결론 (R-04, R-19)

**본문 (R-04 Sub-3 선결론, Sub-2 B §A-2 · C §2.1 · D §2.2 · E §2.2 수용)**

Sub-1 은 "13 의 실체는 9 import 지점" 을 지적하면서 "13" 정의 를 Q2 로 D 에게 미뤘다. Sub-2 에서 B·C·D·E 네 명이 모두 "A 가 선결론 내라" 고 요구. 본 개정이 A 의 공식 확정이다.

**A 의 4 축 용어 표 (이 mega cycle 의 정본)**:

| axis | 카운트 | 소스 | 용도 |
|------|--------|------|------|
| **import 지점** | **9** | module.ts 의 `export * as <n>` 8 + root 자체 | 기술 사실. exports map, Node module resolution, tsconfig compat |
| **기능 그룹 (docs/marketing "13 namespace")** | **13** | D §3.2 의 13 행 (validators loose/strict, random, error, json, llm, protobuf, misc, notations, reflect, functional, http, re-exports) | README, 블로그, wiki 마케팅 서술 |
| **Programmer (v12 emitter class)** | **13** | `wiki/03-packages/02-core.md:60-68` IsProgrammer / AssertProgrammer / ValidateProgrammer / EqualsProgrammer / RandomProgrammer / JsonStringify / JsonParse / JsonSchema / ProtobufEncode / ProtobufDecode / LlmSchema / LlmApplication / Functional | Go emitter dispatch enum (C §6.1) |
| **IR sum-type bucket** | **12** | Sub-2 B §3.2 MetadataSchema 12 bucket (Atomic / Constant / Template / Array / Tuple / Object / Alias / Native / Escaped / Function / SetRef / MapRef) | Go engine 내부 IR. 외부 문구 혼용 금지 |
| (참고) FUNCTORS entry | 147 | `packages/typia/src/internal/_*.ts` 파일 수, B §A-4 (R-03 functor_names.go 의 상수 슬라이스) | Go emitter 가 import path 합성, D lint rule 검사 |

본 4 축은 **서로 독립적 수치**다. C §2.1 가 지적한 대로 driver 의 dispatch 는 (c) Programmer × (a) import 지점 cross product 가 된다. "13" 이라는 숫자가 문서에 등장할 때 **반드시 axis 를 명시**해야 하며, "13 namespace" 만 단독으로 쓰면 모호해진다 (Sub-3 linter 경고 가능성 E §2.2).

**9 import 지점 상세 표 (R-19)**:

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

**13 기능 그룹 상세 표 (R-04, D §2.2.2 수용)**:

| # | 이름 (docs) | 물리 위치 | import 지점 | 대표 함수 |
|---|------------|----------|-----------|----------|
| 1 | validators (loose) | module.ts 상위 export | root `typia` | `is / assert / assertGuard / validate` + `create*` |
| 2 | validators (strict) | module.ts 상위 export | root `typia` | `equals / assertEquals / assertGuardEquals / validateEquals` + `create*` |
| 3 | random | module.ts 상위 export | root `typia` | `random / createRandom` |
| 4 | error (exception class) | TypeGuardError.ts | root `typia` | `TypeGuardError` class + `IProps` |
| 5 | `typia.json` | json.ts | `typia.json` | json schema/parse/stringify 계열 |
| 6 | `typia.llm` | llm.ts | `typia.llm` | LLM application/schema/structuredOutput 등 |
| 7 | `typia.protobuf` | protobuf.ts | `typia.protobuf` | protobuf encode/decode/message |
| 8 | `typia.misc` | misc.ts | `typia.misc` | clone/prune/literals |
| 9 | `typia.notations` | notations.ts | `typia.notations` | camel/pascal/snake |
| 10 | `typia.reflect` | reflect.ts | `typia.reflect` | schema/schemas/name |
| 11 | `typia.functional` | functional.ts | `typia.functional` | assertFunction/assertParameters/assertReturn |
| 12 | `typia.http` | http.ts | `typia.http` | formData/queryObject/headers/parameter |
| 13 | re-exports (types) | re-exports.ts | root `typia` (타입 only) | `IValidation / tags / OpenApi / ILlm* / Primitive / Resolved / ...` |

실제 `export * as X` 지점 (import 경로) 은 8 + 루트 = **9**. docs/marketing 의 "13" 은 위 13 행. 함수 집합 수 ~100+ (D 가 BND-API-01 full list 제공).

본 표는 `conventions/00-terminology.md` 로 A·D 공동 발췌 (Sub-3 이후 후속 task), 이후 `wiki/08-tsgo-master-plan/15-executive-summary.md:81` 의 "13 namespace" 문구는 본 표 링크로 대체.

**Why**
- Sub-2 B §A-2: "namespace 개수는 Programmer 개수와 1:1 이 아니다". A 가 선결론 안 내면 블로그·README·conventions 3 계층이 흔들린다.
- Sub-2 C §2.1: driver 의 FUNCTORS dispatch 는 `typia.<ns>.<method>` tuple-key 로 라우팅. "13" 이 무엇인지에 따라 C 의 symbol resolve 코드가 달라진다.
- Sub-2 D §2.2.2: "9 (import 지점) vs 13 (기능 그룹) 은 axis 가 다른 병존 사실. 둘 다 틀린 것이 아니다."
- Sub-2 E §2.2: "QA 관점에서 무엇을 세는가가 fixture 개수 판정에 직결. 9 이면 9 fixture 디렉터리, 13 이면 13".

**위반 시 결과**: axis 혼용 시 블로그/README/wiki/linting 쪽 모두 혼란. Sub-3 문서 sweep 가 필수.

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

#### BND-NS-03. namespace 삭제 금지 + 핵심 함수 throw stub 상태 GA 금지 (R-16)

**본문**
P3 의 직접 집행. `typia.protobuf` 가 "사용자 적음" 등의 이유로 삭제되는 일 없음. deprecation 은 가능하지만 **최소 2 major 간격** 으로 공지 후 진행.

**Sub-3 보강 (R-16, Sub-2 D §3.2 수용)**:
- namespace 가 공식 export 된 상태로 **내부 핵심 함수가 `throw` stub 만 던지는 상태** 로 stable GA 릴리스 금지.
- 구체 예: Sub-2 B 부록 A 가 `iterate_metadata_function` 를 Phase 1+ 로 미뤘을 때, `typia.functional.assertFunction / assertParameters / assertReturn` 의 emit 이 `NoTransformConfigurationError` 만 던지면 사용자 관점에서 해당 namespace 는 **간접 삭제**된 것과 같다. 이는 BND-NS-03 위반의 간접 효과.
- 규약: v13.0 GA 이전에 Phase 1 에서 `iterate_metadata_function` 포팅 완료. B 부록 A 의 "Phase 1 필수" 격상은 Sub-2 D §3.2 요구 (S-5 와 연동) 로 M-5 해결의 일부.

**Why**: `wiki/08-tsgo-master-plan/02-threat-landscape.md:149-155` 해자 목록 "13 namespace 범위: tsgonest 4 개 기능만 커버. Protobuf: 바이너리 프로토콜 영역 독점".
- **Sub-3 (R-16)**: Sub-2 D §3.2 — `typia.functional` 전체가 function type metadata 의존이므로 Phase 1 미포팅 = v13.0 에 namespace 가 "존재하지만 빌드 실패" 상태. 사용자에게는 삭제와 구분 불가.

**위반 시 결과**: tsgonest 와의 차별점 직접 상실. throw stub 상태 namespace 는 사용자 신뢰 훼손.

### 2.7 각 namespace 의 경계 (공개 API 표면)

#### BND-NS-DETAIL-01 ~ 09 (요지)

A 는 각 namespace 의 **공개 함수 이름 및 시그니처 윤곽** 만 본 문서에 고정한다. 함수 내부 구현·JSDoc 내용·overload 세부는 D 담당.

**Sub-3 보강 — 147 functors 의 3 축 표기 (R-11, Sub-2 D §3.4 + §7 M2 수용)**:

`packages/typia/src/internal/_*.ts` (147 files) 는 **3 축** 으로 동시 기술된다.

| 축 | 값 | 설명 |
|----|-----|------|
| 물리 위치 | **L1 (`packages/typia/src/` 내부)** | ship 되는 `typia` 패키지 안에 함께 있음. 사용자 `npm i typia` 한 번으로 받음 |
| 논리 Layer | **L3 (Runtime helpers)** | emit 된 사용자 JS 가 런타임에 import. Edge runtime 에서 작동 |
| 규약 책임자 | **D (TS Facade)** | 파일명, signature, JSDoc, lint rule (`functor-name-match-go`) 은 D 관장 |

위 3 축은 **병존 사실**. Sub-2 D §3.4 vs A Sub-1 BND-PKG-06 이 "L1 이냐 L3 이냐" 로 충돌했던 문제를 3 축 동시 표기로 해결 (Sub-2 D §7 M2 해결안).

이 3 축은 Sub-3 이후 물리 재배치 결정 (§7 유예 항목 — `@typia/runtime` 신설 여부) 에 따라 바뀔 수 있다. 바뀌더라도 **논리 Layer = L3** 와 **규약 책임자 = D** 는 불변.

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

**Sub-3 보강**: BND-PKG-06 판정 절차의 조항 0 (R-08) 이 "외부 사용자 import surface 보호" 를 집행 규약화. BND-ECO-01 이 philosophy, 조항 0 이 enforcement.

**Why**
- `wiki/10-ecosystem/05-integrated-tsgo-transition.md:6-12` "typia 가 선행, nestia 동기, agentica 표면 불변, autobe 표면 불변".
- `wiki/10-ecosystem/04-philosophy-pyramid.md:97-101` 영향 표 — agentica·autobe 는 typia 표면 API 불변이면 "거의 없음"/"없음".

**위반 시 결과**: typia 내부 규약 범람. 상위 프로젝트 각각의 자율성 침해.

#### BND-PEER-01. TypeScript peerDependency 경계 (R-13 신설, Sub-2 F §2.3 수용)

**본문**

Sub-1 은 P1~P5 등 원칙을 정했으나 `typescript` **peerDependency** 의 존폐를 경계 규약으로 다루지 않았다. D §3.7 는 `@typia/typia` 에서 v13 에 삭제 선언, F §4.3 는 "ttsc 가 내장 tsgo 를 사용하므로 peer 제거" 선언. 본 개정이 A 의 경계적 확정을 넣는다.

| 패키지 | Layer | `typescript` peerDependency | 근거 |
|--------|-------|---------------------------|------|
| `@typia/interface` | L0 | **없음** (devDep only) | 0-dep 원칙 (BND-PKG-02). 타입 선언만 제공, 사용자 tsconfig 이 직접 해석 |
| `@typia/typia` | L1 | **없음** (v13 에서 제거) | 빌드는 ttsc 바이너리 소관. 런타임 emit 된 JS 는 `typescript` 불필요 |
| `@typia/utils` | L3 | 없음 | 런타임 헬퍼 |
| `@typia/ttsc` | L4 | **없음** (ttsc 바이너리가 내장 tsgo 를 가짐) | F §4.3 의 내장 tsgo 원칙 |
| `@typia/unplugin` | L4 | peer optional | 번들러 플러그인. 사용자가 `tsc` 사용 시 필요 가능 |
| `@typia/mcp` | L5 | **peer SDK 만 유지** (`@modelcontextprotocol/sdk` 등) | Node SDK adapter 원칙 |
| `@typia/langchain` | L5 | peer SDK 만 (`@langchain/core`) | 동일 |
| `@typia/vercel` | L5 | peer SDK 만 (`ai`) | 동일 |

**IDE 경로 보장 (R-13 Sub-2 F §2.3 (b)(c) 수용)**:
- VS Code 등의 TypeScript language service 는 `typescript` npm 패키지의 `lib/typescript.js` 를 로드하지 ttsc 를 호출하지 않는다.
- 사용자가 `tsc` 대신 `ttsc` 만 쓰려고 `typescript` 를 삭제하면 IDE 의 타입 체크가 깨진다.
- 이를 방지하려면 **Setup wizard (F §6) 가 `typescript` 를 사용자 devDep 으로 추가**하도록 안내. A 는 "peer 제거 + Setup wizard 가 devDep 주입" 조합만 경계로 규정.
- AI 코딩 에이전트 (Cursor / Claude Code) 역시 `node_modules/typescript/` 를 가정 — 동일한 조치 필요.

**Why**
- Sub-2 F §2.3: A 가 peer 경계를 안 적으면 D ↔ F 사이 선언이 엇갈리고 L0/L5 의 peer 정책이 공백이 된다.
- L5 LLM 어댑터는 peer SDK 의 Node 런타임 의존이 본질이므로 (BND-PKG-09) peer 유지가 맞음.

**위반 시 결과**
- peer 전면 제거 + Setup wizard 안내 누락 시 사용자 IDE 타입 체크 breaking.
- 반대로 `@typia/typia` 에 `typescript` peer 유지 시 tsgo 내장 바이너리를 쓰는 사용자에게 "왜 두 컴파일러가 설치되냐" 혼란.

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
