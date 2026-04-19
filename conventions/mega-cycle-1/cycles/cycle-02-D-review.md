# D — Mega-1 Sub-2 교차 리뷰 (TS Facade Keeper 관점)

> 작성: 2026-04-19 · Mega-1 Sub-2 (D review round 2) · 압축 형태
> 대상: A(Boundary) / B(Go Engine) / C(ttsc Driver) / E(QA) / F(Release/DX) 의 `cycle-01-*.md` 초안
> 관점: `@typia/typia` façade · marker API · 13 namespace · `_createStandardSchema` · `@typia/utils` 런타임 서브셋 · LLM adapter.
> 방법: 각 초안 §구조 훑기 + TS façade 에 직접 맞닿는 §만 정밀. 각 초안당 2~3 쟁점으로 압축.

---

## 1. 총평

5 초안 모두 **wiki/08 진실원** 을 성실히 인용하며 경계를 그었고 실측 LOC/숫자를 상당수 반영했다. D 관점에서 가장 큰 합의는 (a) `@typia/interface` 영구 0-dep TS 유지, (b) `@typia/typia` marker API 불변·축소, (c) 13 namespace 보존, (d) Edge runtime emit 제약 — **5 초안이 동일하게 동의**. 이는 Mega-1 Sub-3 에서 재논쟁 금지 대상.

그러나 **façade 층만 이해관계자인 3 쟁점** 이 초안 간 정렬되지 않았다:

1. **"13" 수치 정의**. D 는 "8 sub + 5 top-level 그룹" (D §3.2), A 는 "root + 8 = 9 import 지점" (A BND-NS-01) 이라고 명시적으로 다르게 계산. A 가 Q2 로 D 에게 확정을 요청하고 D Q7 로 A 에게 되묻는 **순환**. Sub-3 에서 **단일 카운트**를 잠그지 않으면 README·wiki·docs 3 계층이 모두 흔들린다.
2. **Standard Schema 외부 관측 동치**. D §5.3 이 TS `_createStandardSchema` (134 LOC) ↔ Go `assert.go:63` 인라인 emit 의 **결과 차이** 를 인정했는데, A/E 는 "P1 불변 (같은 입력 → 같은 출력)" 을 상위 원칙으로만 말하고 해결책은 부재. C 는 "규약 7.3.3 에서 로직 복제" 를 공언하여 오히려 drift 를 제도화. → 해법 필요.
3. **147 functors 의 Layer**. A 는 BND-PKG-06 에서 "`packages/typia/src/internal/` 은 물리적으로 L1 안이나 **Layer 는 L3**" 라고 선언. D §3.4 는 동 디렉터리를 D 관장 (L1) 으로 규정. **책임 주체가 A vs D 에서 충돌**. Sub-3 에서 "물리 위치 L1, 논리 Layer L3, 책임 D" 로 합의 필요.

아래 §2~§6 에서 초안별로 쟁점 2~3개씩 압축. §7 에서 모순, §8 에서 Sub-3 개정 합의 요청.

---

## 2. A 초안 비판 (facade LOC, namespace)

### 2.0 프리앰블 — A 와 D 의 책임 교차점

A 초안 §1.1 은 "D (나 제외) 의 관장" 을 명시적으로 제한한다:
> "각 함수의 JSDoc 내용·overload 세부는 D 담당" (A §2.7 BND-NS-DETAIL).
> "`@typia/typia` 의 TS 함수 시그니처 세부 · JSDoc · overload" (A §1.1 표).

그러나 A 본문의 일부 규약은 D 영역을 침범한다:
- A BND-PKG-03 이 "`@typia/typia` 현재 7.5K LOC → ~3K" 로 **수치를 못박음** → D §3.7 의 ≤ 3,500 와 충돌.
- A BND-API-01 이 "함수명 목록" 을 열거 → D §3.2 의 namespace 표와 부분적으로 겹침.
- A 가 Q2·Q7 로 D 에게 "13 정의" 를 되묻는데, D 초안 §3.2 에 이미 답이 있음 → A 가 D 초안을 **교차 리뷰 전 읽지 않았다는 증거**.

D 는 본 리뷰에서 A 의 LOC 수치, 함수명 열거, "13" 정의 3 쟁점을 집중 비판한다.

### 2.1 BND-PKG-03 "L1 7.5K → ~3K 축소" 의 근거가 약함 [쟁점 ①]

**A 의 주장**: `@typia/typia` 를 7,544 LOC → ~3K 로 축소. 근거는 `wiki/08-tsgo-master-plan/16-package-port-boundary.md:46-66` 인용.

**D 의 반박**:
- 실제 감축 원천을 D §3.7 표로 계산하면 `executable/` -583 + `transform.ts` -5 + `programmers/TypiaProgrammer.ts` -583 = **-1,171 LOC**. 결과 ≈ 6,373 LOC. "~3K" 까지 가려면 추가 **~3K 를 어디서 잘라낼지** A 가 명시하지 않음.
- 남는 TS 본체는 marker API (module.ts 811 LOC + json/llm/http/... 합 ~2.5K) + TypeGuardError (146 LOC) + internal functors (147개, LOC 합 상당). functors 를 Layer L3 로 이전해 **물리 배치가 달라지더라도 `packages/typia/src/` 집계 LOC 는 줄지 않는다** (D §3.4 가 `src/internal/` 은 D 관장으로 유지).
- 즉 A 의 "≤ 3K" 는 `src/internal/` 을 **다른 패키지로 물리 이주** (예: `@typia/runtime` 신설) 를 전제하지 않는 한 달성 불가.

**D 제안**: BND-PKG-03 을 "≤ 3,500 LOC (marker + re-exports + TypeGuardError 만)" 으로 정정하고, `src/internal/` functors 의 물리 재배치는 BND-PKG-06 의 `@typia/runtime` 논의 (A Q3, D Q3) 가 확정되기 전까지 **LOC 목표에서 제외**.

**구체적 LOC 제안 (D 계산)**:

| 항목 | 현재 | v13 (functor 물리 유지) | v13 (functor 를 `@typia/runtime` 이전 시) |
|---|---|---|---|
| module.ts + json/llm/http/... (marker API) | ~2,500 | ~2,500 | ~2,500 |
| TypeGuardError.ts | 146 | 146 | 146 |
| re-exports.ts | 34 | 34 | 34 |
| transformers/NoTransformConfigurationError.ts | ~16 | ~50 (메시지 확장) | ~50 |
| src/internal/_*.ts (147 functors) | ~3,800 (실측) | ~3,800 (유지) | 0 (이전) |
| executable/ | 583 | 0 (삭제) | 0 |
| programmers/TypiaProgrammer.ts | 583 | 0 (삭제) | 0 |
| transform.ts | 5 | 0 | 0 |
| **합계** | **~7,544** | **~6,530** | **~2,730** |

즉 A 의 "~3K" 수치는 오직 **functors 물리 이전 시** 만 달성 가능. A 초안이 그 전제를 명시하지 않으므로 **허위 약속** 이 된다.

### 2.2 BND-NS-01 의 "13 혼선" 셀프 인정 + Q2 되묻기 [쟁점 ②]

**A 의 인정**: BND-NS-01 본문에서 "'13 namespace' 수치는 root + 8 하위 = 9 개 import 지점 이 실체" 임을 자백, Q2 로 D 에게 확정 요청.

**D 의 반박**:
- D §3.2 는 "8 sub + 5 top-level 그룹 (validators loose / validators strict / random / error / re-exports) = 13" 으로 이미 **실체 근거를 댔다**. A 가 Q2 로 되묻는 것은 **D 초안을 읽지 않은 증거** 이거나 그룹화 기준 (namespace vs top-level 함수 클러스터) 에 이견이 있다는 뜻.
- 경계 문제로 보면 **9 (import 지점) vs 13 (그룹)** 은 다른 axis. 둘 다 틀린 것이 아니다. A 는 "import 지점 9 는 기술 사실, 13 은 marketing/docs 사실" 로 분리 수용 필요.

**D 제안**: BND-NS-01 표를 아래로 정정.

| axis | count | 소스 |
|---|---|---|
| 실제 import 지점 (facade.re-export 기준) | **9** | module.ts 의 `export * as <n>` 8 + 루트 자체 |
| docs/marketing 의 "13 namespace" | **13** | D §3.2 의 기능 그룹 합산 (validators loose/strict, random, error, json, llm, protobuf, misc, notations, reflect, functional, http, re-exports) |

두 수치는 **충돌 아닌 병존**. 문서에서 혼동될 때만 "13 기능 그룹 (= 9 import 지점 + 4 암묵 그룹)" 으로 풀어쓴다.

### 2.2.2 선결론 제안 — 13 namespace 실체 표 확정

D 가 Sub-3 에 제안하는 **단일 정본 표** (A BND-NS-01 + D §3.2 를 통합):

| # | 이름 (docs 용) | 물리 위치 (실체) | import 지점 | 함수 대표 |
|---|---|---|---|---|
| 1 | validators (loose) | module.ts 상위 export | root `typia` | `is / assert / assertGuard / validate` + `create*` |
| 2 | validators (strict) | module.ts 상위 export | root `typia` | `equals / assertEquals / assertGuardEquals / validateEquals` + `create*` |
| 3 | random | module.ts 상위 export | root `typia` | `random / createRandom` |
| 4 | error (exception class) | TypeGuardError.ts | root `typia` | `TypeGuardError` class + `IProps` |
| 5 | `typia.json` | json.ts | `typia.json` | `schema / schemas / application / parse / stringify / assertParse / assertStringify / isParse / validateParse / *Equals` + `create*` |
| 6 | `typia.llm` | llm.ts | `typia.llm` | `controller / application / parameters / schema / structuredOutput / parse / coerce` + `create*` |
| 7 | `typia.protobuf` | protobuf.ts | `typia.protobuf` | `message / encode / decode / assertEncode / assertDecode / isEncode / validateEncode` |
| 8 | `typia.misc` | misc.ts | `typia.misc` | `clone / prune / literals` × (assert/is/validate) variants |
| 9 | `typia.notations` | notations.ts | `typia.notations` | `camel / pascal / snake` × (assert/is/validate) variants |
| 10 | `typia.reflect` | reflect.ts | `typia.reflect` | `schema / schemas / name` |
| 11 | `typia.functional` | functional.ts | `typia.functional` | `assertFunction / assertParameters / assertReturn` × variants |
| 12 | `typia.http` | http.ts | `typia.http` | `formData / queryObject / headers / parameter` × variants |
| 13 | re-exports (interface types) | re-exports.ts | root `typia` (타입 only) | `IValidation / tags / OpenApi / ILlm* / Primitive / Resolved / ...` |

- **실제 `export * as X` 지점** (= import 경로): 8 개 (json/llm/protobuf/misc/notations/reflect/functional/http) + 루트 자체 = **9**.
- **docs/marketing 의 "13"**: 위 표 13 행.
- **함수 집합 수**: 대략 100+ (D 가 Cycle 1 에서 A 의 BND-API-01 에 필요한 full list 를 제공 — A §8.3 가 요청).

이 표를 Sub-3 에서 `conventions/00-terminology.md` 로 발췌 (A 와 D 공동 작성), 이후 wiki/08-tsgo-master-plan/15-executive-summary.md:81 의 "13 namespace" 문구는 본 표 링크로 대체.

### 2.3 BND-API-04 "런타임 동작 불변" 이 Standard Schema emit 불일치와 충돌 [쟁점 ③]

**A 의 주장**: `typia.validate<T>(x).errors.length` · `error.path/expected/value` · error **순서** 까지 v12=v13=v14 동일.

**D 의 반박**: D §5.3 이 이미 documented 했듯, 현행 Go `assert.go:63` 의 `~standard.validate` 는 **문자열 포맷이 TS `_createStandardSchema` 와 다르다** (`message: "expected X, got Y"` vs `"expected X, got <typeof> <JSON.stringify>"`). Standard Schema 는 v12 에 있던 기능이므로 BND-API-04 의 "결과 동일" 약속은 현재 **이미 위반 상태로 Phase 0 emit 이 존재**. A 가 원칙만 선언하고 집행 메커니즘을 두지 않으면 이 drift 는 v13 GA 까지 고착화.

**D 제안**: BND-API-04 에 **하위 조항** 추가.

> BND-API-04-a. 런타임 헬퍼 (Standard Schema · error factory · path parser) 는 **TS `packages/typia/src/internal/_*.ts` 가 정본**. Go emitter 는 해당 헬퍼를 **import + 호출** 로만 사용. 로직 복제 금지.

→ C 의 "규약 7.3.3 inline 복제" 가 이 조항과 충돌. C 개정 필요 (§4.1).

---

### 2.4 BND-PKG-06 "utils 분할" 판정 절차가 Nestia 사용자를 안 봄 [쟁점 ④]

**A 의 주장**: BND-PKG-06 "판정 절차 — 애매할 때 (a) `@typia/typia` 내부 import → runtime L3, (b) core 가 빌드 타임만 호출 → 변환 L2, (c) 둘 다 → 우선 L3 유지 + Go 재구현".

**D 의 반박**: 판정 절차에 **외부 사용자 (nestia·agentica·autobe 와 일반 사용자)** axis 가 빠졌다. 실측:
- `@typia/utils/validators/OpenApi*TypeChecker.ts` 는 **nestia 의 OpenAPI 문서 생성** 에서 직접 import (→ D Q2).
- `@typia/utils/utils/LlmJson.ts` 는 **agentica 런타임** 에서 lenient JSON 파싱 목적 import.

따라서 (a)(b)(c) 3 조건 외에 **(d) 외부 사용자가 import 하는 surface 인가?** 가 선행 조건으로 필요.

**D 제안**: BND-PKG-06 판정 절차에 **조항 0** 추가:
> 0. 외부 사용자 (nestia · agentica · autobe · 기타) 가 현재 import 하는 surface 이면 **무조건 L3 유지**. Go 이식은 BND-ECO-01 원칙 (상위 프로젝트 내부는 경계 밖) 에 따라 **상위 프로젝트가 요구하기 전까지 보류**.

이 조항이 없으면 A 가 `OpenApiConverter` 를 L2 로 분류 → Go 이식 → nestia 빌드 깨짐. A BND-API-01 (공개 함수 이름 불변) 의 정신과 모순.

---

## 3. B 초안 비판 (엔진↔facade 계약)

### 3.1 `Metadata` prefix 제거가 `IMetadata*` TS 타입 이름과 drift [쟁점 ①]

**B 의 주장**: §1.3·§2.1 — Go 에서 `MetadataObjectType → ObjectType`, `MetadataSchema → Schema`, `MetadataFactory → Analyzer`. "package metadata 가 prefix 역할".

**D 의 반박**:
- `@typia/interface` 는 `IMetadata*` 가 아니라 `IMetadataSchema / IMetadataObject / IMetadataObjectType / IMetadataConstant / IMetadataAtomic / IMetadataTag...` (총 ~15 타입) 을 **공개 API 로 re-export** 하고 있다 ([packages/interface/src/index.ts](../../packages/interface/src/index.ts)). 이는 BND-API-02 (A) 로 **이름 불변** 이 요구되는 surface.
- 사용자가 `reflect.schema<T>()` 결과를 받아 `IMetadataSchema` 로 type-assert 하는 코드가 존재 (agentica · autobe 일부). Go 측이 `Metadata` prefix 를 걷어낸 내부 이름을 **JSON serialise 할 때도** 같이 걷어낸다면 JSON 구조의 필드·classname 태그가 v12 와 달라져 **P1 위반**.

**D 제안**: B §2.1 의 이름 규칙을 "**Go 패키지 내부 식별자에만 적용**. JSON marshal 시 `json:"..."` 태그로 v12 의 `IMetadata*` 키 이름을 복원" 으로 명시.

### 3.2 `iterate_metadata_function / _template / _alias` 미포팅 상태 ↔ facade `functional` namespace [쟁점 ②]

**B 의 주장**: 부록 A 에서 `iterate_metadata_function`, `iterate_metadata_template`, `iterate_metadata_alias` 를 Phase 1+ 로 미룸. Q-B5 에서 "typia 사용자 중 Template literal type 빈도?" 를 E 에게 요청.

**D 의 반박**:
- `typia.functional.assertFunction / assertParameters / assertReturn` 은 **D §3.2 의 공식 13 중 11번째**. `typia.functional` 전체가 function type metadata 에 의존하며, Phase 1 까지 미포팅이면 **v13.0 GA 에 해당 namespace 가 비어있다** → BND-NS-03 (namespace 삭제 금지) 위반 간접적 효과.
- `tags.Format<"regex">` 같은 사용자 정의 format 이 TS Template literal 을 활용 → Template 미지원 시 사용자 taxonomy drift.

**D 제안**: B 부록 A 의 "iterate_metadata_function" 을 **Phase 1 필수** 로 격상. alias 는 D Q-B6 (JSDoc 보존) 판단 전까지 resolve-through 허용하되, `typia.functional` namespace 가 "존재하지만 빌드 실패" 상태는 v13.0 전에 해소.

### 3.3 Q-B1 ConstantValue `any` → discriminated struct 결정을 D 가 필요로 함 [쟁점 ③]

**B 의 Q-B1**: `ConstantValue.Value any` 를 Phase 1 에서 discriminated struct 로 갈지 결정 필요. "C(emitter) 의 의견 필수".

**D 의 추가**: D 도 당사자. `typia.json.stringify` 가 emit 한 JS 의 constant 처리 (`"\"lit\" === ve"`) 가 `string/number/bigint/boolean` 각각 다른 코드 path 를 타므로, Go IR 의 `any` 유지 시 emitter 가 runtime type assertion 을 통해 분기. 그러나 TS 쪽의 `typia.reflect.schema<T>()` 결과는 `IMetadataConstant.values: ConstantValue[]` 로 **타입 annotated** 되어야 함 (사용자 API). Go `any` 가 JSON 으로 나올 때 TS 타입과 **호환 가능한 태그 추가** 필요.

**D 제안**: Q-B1 답 — **discriminated struct 로 Phase 1 확정**. D 는 TS 쪽에서 `IMetadataConstant.values: Array<{ kind: "string"; value: string } | { kind: "number"; value: number } | ...>` 로 타입 정의 확장 (semver-minor, optional discriminant 추가 필드만).

---

### 3.4 Q-B6 alias resolve-through vs preserve — `typia.reflect.schema<T>()` 표면 직접 영향 [쟁점 ④]

**B 의 Q-B6**: alias 는 항상 해체 (Phase 0) vs. `UserId` 같은 이름 보존 (Phase 1).

**D 의 관점 (façade)**:
- `typia.reflect.schema<T>()` 는 `IMetadataSchema` 를 JSON 으로 반환 → alias 이름이 결과 JSON 에 포함됨 (`"name": "UserId"`).
- agentica · autobe 가 이 결과의 `name` 필드를 직접 사용 ("UserId" vs "string" 의 차이).
- **alias 해체 시 BND-API-04 "결과값 계약" 위반** (v12 는 alias 이름을 보존 — 실측 필요하나 D 의 기존 구현에서는 그렇게 작동).

**D 제안**: B §3.11 (Phase 1 TODO 부록 A) 의 alias 유지 (규약 B) 로 결정. Phase 0 Phase 1 boundary 에 alias dictionary 추가. D 는 `@typia/interface` 의 `IMetadataAlias` 필드 유지를 약속.

---

## 4. C 초안 비판 (emit 결과 외부 관측 동치)

### 4.1 규약 7.3.3 — `_createStandardSchema` 인라인 복제 [쟁점 ①] ★ 최우선

**C 의 주장**: §7.3.3 — "`EmitCreateValidateWithStandardSchema` 는 validate factory 결과에 `~standard` 프로퍼티 **인라인 주입**. 외부 런타임 의존 없음 (regex 6.1 `typia/src/internal/_createStandardSchema.ts` 동등 로직 복제)."

**D 의 반박**: 이는 D §5.3 에서 이미 경고한 drift 의 원천. 복제 시점에 로직이 같아도 path parser (TS 134 LOC 4-state machine) 와 Go 단순 `split(".").slice(1)` 은 **엣지에서 다른 결과** (bracket notation, quoted key 등). E 가 "결과 byte-diff" 를 golden fixture 로 잠근다 해도 fixture 가 커버 못 하는 경로에서 divergence.

**D 제안**:
- C §7.3.3 을 **"`_createStandardSchema(__fn)` 한 줄 호출 emit"** 로 개정. import 는 `from "typia/lib/internal/_createStandardSchema"`. ttsc 가 사용자 emit JS 에 static import 주입.
- 이유 3개:
  1. TS 정본 단일 출처 → drift 제로.
  2. `_createStandardSchema` 파일은 이미 `package.json.exports` 로 public (D §3.4 규약 5). 추가 작업 없음.
  3. Edge runtime 호환 유지 (static import → Cloudflare Workers OK).
- 예상 반박 "import 1 개 추가 = 번들 크기": 현재 `_isFormatEmail` 등 147 functors 가 이미 동일 패턴. 새 import 는 marginal.

### 4.2 Q-C2D-1 어댑터별 shape 차이는 D 가 조정 [쟁점 ②]

**C 의 Q-C2D-1**: "`src/api.ts` 의 `transform / build / check / version` 시그니처 — 어댑터별 shape 차이 누가 조정?"

**D 의 답**:
- `@typia/ttsc` **엔진** (Go + Node launcher) 의 `src/api.ts` TS 파사드는 D 관장 아님 — 이는 **F (ttsc 패키지 전체 소유)** + **C (driver 계약)** 교차. D 의 `@typia/typia` facade 는 ttsc 바이너리의 존재를 **모르도록** 격리 (사용자가 `import typia from "typia"` 한 뒤 별도 빌드 도구로 ttsc 를 실행).
- 어댑터 (vite/webpack/rolldown/...) 는 `@typia/unplugin` 의 하위. **F 관장**. D 는 개입 없음.

**D 제안**: Q-C2D-1 을 **F 에게 redirect**. D 는 `@typia/typia` 의 public export 만 책임지고, unplugin/ttsc 번들러 어댑터는 보지 않는다.

### 4.3 규약 7.16.3 edge case fixture 10 중 "functional/protobuf/llm" 누락 [쟁점 ③]

**C §7.16.3**: 우선 순위 10 케이스에 object/primitive/optional/nullable/recursive/union/tuple/array-of-union/tagged-atomic/stress. 그러나 `typia.functional.*` · `typia.protobuf.*` · `typia.llm.*` 검증 fixture 누락.

**D 의 반박**: D §3.2 의 13 중 3 개 namespace (functional 11, protobuf 7, llm 6) 가 emit fixture 표에 없음 → C 가 "Phase 0 범위" 로 정당화해도 Phase 1 승격 기준이 명시되지 않아 **namespace 구현 전체가 지연 위험**.

**D 제안**: C §7.16.3 에 **#11 `typia.functional.assertFunction`**, **#12 `typia.protobuf.message`**, **#13 `typia.llm.application` (provider 6 중 openai 기본)** 3 케이스 추가. 각 case 의 Phase 1 기한 명시.

### 4.4 Standard Schema Go emit ↔ TS `_createStandardSchema` 외부 동치 해법 제안 (심화)

§4.1 의 연장. D 가 Sub-3 에 요청하는 **구체 계약 (3-party: D·C·B)**:

```go
// packages/ttsc/internal/engine/emitter/assert.go
// 규약 7.3.3 (개정): EmitCreateValidateWithStandardSchema
// 목표: TS _createStandardSchema 를 한 줄 호출로 emit. inline 복제 금지.

func EmitCreateValidateWithStandardSchema(s *metadata.Schema) (string, error) {
    validateImpl, err := EmitCreateValidate(s)
    if err != nil {
        return "", err
    }
    // import 는 driver 의 addStaticImport 헬퍼가 파일 상단에 주입
    // import { _createStandardSchema } from "typia/lib/internal/_createStandardSchema";
    return fmt.Sprintf(`_createStandardSchema(%s)`, validateImpl), nil
}
```

**C 쪽 변경 점검**:
- driver 의 file-level import rewrite 가 `typia/lib/internal/_createStandardSchema` 를 자동 주입하도록 `rewrite.go` 확장.
- `dropUnusedTypiaImports` (C §8) 가 해당 import 를 정리하지 않도록 whitelist 에 추가.
- fixture: `test_emit_createValidate_standard.ts` 가 기존 inline 과 open/close 브레이스 경계 외에 동일 구조임을 확인하는 Golden 추가.

**B 쪽 변경 점검 (없음)**:
- Schema 자체에는 변화 없음. Analyzer 는 IR 만 생산.

**외부 동치 검증 (E 쪽)**:
- 새 fixture `tests/test-typia-ttsc/fixtures/standard-schema-parity/src/main.ts`:
  ```ts
  import typia from "typia";
  interface User { id: string & tags.Format<"uuid">; profile: { age: number } }
  const v = typia.createValidate<User>();
  const tsResult = v["~standard"].validate({ id: "not-uuid", profile: { age: "x" } });
  // 기대: issues[0].path == ["id"] (string path, not ["id","0"])
  // 기대: issues[1].path == ["profile", "age"]
  console.log(JSON.stringify(tsResult));
  ```
- E 의 fixture runner 가 Node `_createStandardSchema` 를 직접 호출한 결과와 **byte-identical** 인지 검증.

**위반 시 결과**: Standard Schema ecosystem (Zod 4 / Valibot / ArkType 이 공유하는 `~standard` 협약) 이 typia 를 **broken implementation** 으로 감지 → Standard Schema 공식 README 에서 typia 제외 위험. D 가 `wiki/08-tsgo-master-plan/02-threat-landscape.md:103-107` 의 "부분 구현" 언급을 **v13 stable 에 완성** 하기로 약속한 맥락에서 최악의 마케팅 실패.

---

## 5. E 초안 비판 (외부 관측 회귀)

### 5.1 Q-E1 "중간 층 없음" ↔ `~standard` emit drift 검증 도구 부재 [쟁점 ①]

**E 의 주장**: Q-E1 — Go 단위 (in-memory Schema) + TS 통합 (바이너리 spawn) 2 층. 중간 ("analyzer 만 fake checker 로 돌림") 은 "없음" 잠정.

**D 의 반박**: "TS 정본 vs Go emit 의 외부 관측 동치" 를 검증할 층이 **현재 어디에도 없다**.
- Go 단위는 Schema → emit 문자열 검증. TS 정본 (`_createStandardSchema(__fn)` 의 실행 결과) 과 비교 안 함.
- TS 통합은 ttsc bin → Node 실행 → deep-equal 이지만 fixture 가 커버 못 하는 경로 (bracket path, quoted key) 는 통과할 수도.

**D 제안**: §2 사이에 **층 2.5 "emit 동치성 oracle"** 추가.
- 입력: 같은 Schema.
- 진행: (a) Go emit → eval → 결과 A. (b) TS `_createStandardSchema(_validate)` → 결과 B.
- 단언: A ≡ B (deep-equal + path ordering).
- 구현 위치: `tests/test-typia-ttsc/src/features/test_standard_schema_parity.ts`.

### 5.2 §5 regression guard R-NNNN 레지스터 미생성 [쟁점 ②]

**E 의 Q-E10**: `conventions/regressions.md` 미생성, 본 문서 후속 PR 로.

**D 의 반박**: Phase 0 이 이미 버그 2개 수정 ([B 부록 D Phase 0 bug 역사] + [C Cycle 3 `%expr` 치환 miscompile] 등) 을 기록. 레지스터 없이 Sub-3 로 넘어가면 각 버그의 재현 fixture 가 어떤 R-ID 에 매달리는지 모호 → E 가 "fixture 주석 `// regression: <cycle>-<bug-id>`" 를 강제해도 검색 불가.

**D 제안**: E 가 Sub-3 개정 전 **`conventions/regressions.md` 를 동시 PR** 로 초안. 최소 4 항목 (tsgo pointer key, tsgo boolean widening, `%expr` miscompile, Phase 0 `~standard` path drift) 등록.

### 5.2.1 Phase 0 실제 버그 4 건 regression R-ID 제안

D 가 Sub-3 전 E 에게 제공:

| R-ID | 버그 | 최초 발견 | 재현 fixture 후보 |
|---|---|---|---|
| R-0001 | tsgo distinct pointer → visiting map 실패 (객체 재귀 무한) | B 부록 D · Cycle 4 | `fixtures/recursive-object/src/main.ts` + expect `is(data)` true |
| R-0002 | tsgo boolean literal widening → `exclusive` tag miss | B 부록 D · Cycle 2 | `fixtures/tagged-exclusive-bool/src/main.ts` |
| R-0003 | `%expr` placeholder miscompile (사용자 prop name 에 `%expr`) | C §7.6.6 · 5-Cycle 3 | `fixtures/json-stringify-percent-expr/src/main.ts` |
| R-0004 | Standard Schema path drift (bracket notation) | D §5.3 (본 review §4.1) | `fixtures/standard-schema-parity/src/main.ts` |

E 의 §5 regression guard fixture 주석 `// regression: R-0001 — tsgo distinct pointer bug` 등.

### 5.3 §6.4 fixture 카테고리에 LLM adapter 테스트 없음 [쟁점 ③]

**E 의 §6.4 (category 14 개)**: primitives/objects/formats/advanced/stress/tagged/assert-validate/combined/factory/schema/misc/http/native/json. **LLM · functional · protobuf 없음**.

**D 반박**: 사용자 API 표면 (D §3.2 의 13) 중 3 개가 fixture 카테고리에서 누락. LLM adapter (mcp/langchain/vercel) 는 **D 관장 3 패키지** 인데 E 테스트 전략이 이를 다루지 않음.

**D 제안**: §4 카테고리에 `llm-adapter` (mcp/langchain/vercel smoke) · `functional` · `protobuf` 3 추가. Phase 1 필수.

---

## 6. F 초안 비판 (publish, 버전 정책)

### 6.1 Q-F13 `@typia/transform` 폐기 방식 — D 의 stub 제안과 충돌 [쟁점 ①]

**F 의 Q-F13**: v13 preview 공존 → v14 에서 `@typia/transform` "deprecated + 제거? 아니면 얇은 shim 유지?" — D 에게 묻는다고 적음.

**D 의 답 (D §3.6 이미 명시)**:
- `src/transform.ts` 파일 **v13.0 에서 삭제**. `package.json.exports."./lib/transform"` 제거.
- 사용자 호환 stub: **v13.0 ~ v13.2** 까지 `src/_deprecated/transform.ts` 를 throw 만 하는 stub 으로 유지. `"@typia/transform is removed in v13. Use @typia/ttsc."` 메시지.
- v13.3 부터 완전 제거.

F 와 D 의 불일치는 "v13 preview 공존" (F) vs "v13.0 파일 삭제 + stub 만 유지" (D). **D 안이 더 공격적**. A BND-PKG-05 는 "v13 첫 stable 릴리스부터 npm 배포 중단" 으로 D 쪽에 가까움.

**D 제안**: Sub-3 에서 3 자 (A·D·F) 합의. 제안 기본값: A/D 안 (v13.0 삭제 + 2 minor stub).

### 6.2 4.6 "17 패키지 동시 bump" — `@typia/interface` 0-dep 불변과 상충 [쟁점 ②]

**F §4.6**: `bumpp -r` 로 **17 패키지 동시 bump** (9 typia + ttsc + 7 platform).

**D 의 반박**:
- `@typia/interface` 는 0-dep 순수 타입 패키지. 기능 변경이 없는 release 에서 version bump 를 강제하면 **사용자가 사실상 변경이 없는 타입 패키지를 불필요하게 update** → npm registry 오염.
- D §2 가 "interface 는 외부 사용자 import surface, 변경 비용이 가장 큰 곳" 이라 소중히 취급.

**D 제안**: F §4.6 개정 — **"interface 는 실제 타입 변경이 있을 때만 bump, 나머지 16 은 동시 bump"**. changesets 툴 도입으로 package 별 semantic change detect 가능 (F §5 의 changelogithub 와 병행).

### 6.3 §3.2 platform 패키지 이름 `@typia/ttsc-linux-x64` — Microsoft `tsc` 상표 위험 (F Q-F7) 과 병행 검토 [쟁점 ③]

**F 의 Q-F7**: npm `ttsc` alias 검토 + "Microsoft `tsc` 상표 리스크" 법무 검토 필요.

**D 의 우려**: `@typia/ttsc-*` 이름은 Microsoft TSC 상표와 직접 충돌은 없으나 (`ttsc` 는 prefix `tt`), 사용자가 CLI 로 `ttsc` 를 alias 하면 `$(pnpm bin)/ttsc` 가 global `tsc` 와 autocomplete 충돌. D §3.5 에서 `typia setup` CLI 가 **ttsc 를 tsc 대체로 권장** 하는 메시지를 출력하기로 했는데, **상표 리스크가 clear 되지 않으면 이 메시지를 작성 못 함**.

**D 제안**: F Q-F7 을 Sub-3 전 **법무 검토 완료** 로 timeline 앞당김. 결과에 따라 D §3.3 placeholder 에러 메시지의 "Run `npx typia setup`" 문구가 달라짐.

### 6.4 Setup wizard 가 `@typia/typia` facade 마이그레이션을 포함 [쟁점 ④]

**F §6**: `npx typia setup --runtime=ttsc` 가 tsconfig 수정·ts-patch 제거·ttsc 바이너리 설치 오케스트레이션.

**D 의 보강 요청**:
- v12 → v13 마이그레이션 시 사용자 `package.json` 의 `dependencies."@typia/transform"` · `dependencies."@typia/core"` 항목도 제거 대상.
- `tsconfig.json.compilerOptions.plugins` 배열에 `typia/lib/transform` 이 있으면 **유지** (A BND-TSC-01, D §3.6 의 stub 이 resolve 가능하도록). F 가 무심코 제거하면 stub throw 로 사용자 빌드 실패.
- setup wizard 가 `@typia/typia` 의 `NoTransformConfigurationError` 메시지 (D §3.3 신규) 에 매칭되는 troubleshooting hint 를 동일 문구로 유지.

**D 제안**: F §6 setup wizard spec 을 "1) plugin 설정 **유지**, 2) transform/core dep 제거, 3) ttsc bin 주입, 4) 에러 메시지 일관성" 4 단계로 명시. D §3.3 메시지 문안을 F §6 이 소비.

---

## 7. 초안 간 모순

| # | 쟁점 | 각 초안 입장 | 충돌 |
|---|------|------------|------|
| M1 | "13 namespace" 카운트 | A: 9 import 지점 / D: 8+5=13 그룹 / B·C·E·F: 무관 | count 의 axis 불일치 |
| M2 | `src/internal/` 147 functors 의 Layer | A: L3 (물리 L1 내부) / D: D 관장 L1 | 책임자 모호 |
| M3 | `_createStandardSchema` emit | C §7.3.3: 로직 복제 / D §5.3: import 호출 | 결과 drift 허용 vs 금지 |
| M4 | `@typia/transform` 폐기 시점 | A BND-PKG-05: v13 stable 중단 / D §3.6: v13.0 삭제+stub / F §4.1/§4.5: v13 preview 공존 후 v14 제거 | 3 초안 3 안 |
| M5 | LLM/functional/protobuf Phase 1 fixture | B 부록 A: Phase 1+ / C §7.15.1-3: Phase 1 이식 / D §3.2: v13.0 완성 / E §4·§6.4: 카테고리 부재 | "완성 기한" 정의 불일치 |
| M6 | 17 패키지 동시 bump | F §4.6: 강제 / D §6.2: interface 제외 | CI 스크립트 영향 |
| M7 | 147 functor 중 `_createStandardSchema` 의 "public" 여부 | D §3.4: `lib/internal/*` 는 ttsc emit 계약 / A BND-API-03: exports 표에 `"typia/lib/internal/*"` 유지 | 사용자가 직접 import 허용 범위? |

---

## 8. Sub-3 개정 합의 요청

D 가 Sub-3 에 올릴 최소 합의 요청 7개 (각 초안이 반드시 반영):

1. **M1 해결**: BND-NS-01 (A) 을 D §3.2 의 13 그룹 표와 **병기**. 9 (import 지점) 와 13 (기능 그룹) 은 axis 가 다른 병존 사실. 문서 sweep 은 `conventions/00-README.md` 업데이트로.
2. **M2 해결**: `packages/typia/src/internal/_*.ts` 의 **물리 위치 = L1**, **논리 Layer = L3**, **책임자 = D**. A BND-PKG-06 표에 이 3 축 명시.
3. **M3 해결**: C §7.3.3 을 **`_createStandardSchema(__fn)` 한 줄 호출 emit** 로 개정. TS `packages/typia/src/internal/_createStandardSchema.ts` 가 정본. Go emitter 의 inline 구현 삭제. (A BND-API-04-a 신설 + E 가 `test_standard_schema_parity.ts` fixture 추가).
4. **M4 해결**: `@typia/transform` 은 v13.0 에서 `src/transform.ts` 삭제 + `exports."./lib/transform"` 제거. `src/_deprecated/transform.ts` stub 을 v13.0 ~ v13.2 유지 (throw). v13.3 완전 제거. (A·D·F 일치).
5. **M5 해결**: B 부록 A 의 `iterate_metadata_function / _alias / _template` 중 **function 을 Phase 1 필수**. C §7.15.1 (functional), §7.15.2 (protobuf), §7.15.3 (llm) Phase 1 기한 명시. E §4 카테고리에 `functional / protobuf / llm-adapter` 추가.
6. **M6 해결**: F §4.6 에서 `@typia/interface` 는 타입 변경 시에만 bump. 나머지 16 개 동시. changesets 도입 Phase 1 Q1.
7. **M7 해결**: A BND-API-03 exports 표의 `"typia/lib/internal/*"` 엔트리는 **"emit JS 가 쓰는 내부 경로. 사용자 직접 import 는 discouraged 이나 금지 아님 (`_createStandardSchema` 공유를 위해 필요)"** 로 주석 추가. D §3.4 규약 5 와 정합.

### D 초안 Q1~Q10 중 타 초안이 답할 수 있는 재요청

- **D Q1 (Standard Schema)** → **C**: 규약 7.3.3 inline 복제 개정 의사 확인. (§4.1 과 동일)
- **D Q2 (OpenApiTypeChecker)** → **A**: 사용자 surface 여부 판정 (Nestia 사용 통계 확인). (A BND-PKG-06 분할 판정 절차 연장)
- **D Q3 (`@typia/runtime` 신설 시점)** → **F**: publish 정책 · semver-major 정렬. (F §4 로드맵에 추가)
- **D Q4 (`randexp` 유지)** → **E/F**: E 가 tree-shaking 검증 fixture, F 가 번들 크기 예산.
- **D Q5 (`comment-json` 포팅)** → **B/C**: tsconfig JSONC 파싱을 Go engine 이 하느냐 driver 가 하느냐.
- **D Q6 (peer `typescript` 제거)** → **F**: v13 package.json 변경.
- **D Q7 (13 카운트)** → **A**: §7 M1 해결안 수락 여부.
- **D Q8 (prepare/dev/build 통일)** → **F**: monorepo CI.
- **D Q9 (named import 통일)** → **B/C**: Go emitter 의 import form 계약.
- **D Q10 (i18n)** → 현행 유지 (D 단독 결론).

---

## 150 단어 이하 요약

D 는 A/B/C/E/F 5 초안이 façade 불변 · 13 namespace · Edge runtime · 0-dep interface 에 모두 동의함을 확인했다. 핵심 불일치 7 개 (M1~M7): "13" 수치 axis, `src/internal/` functors 의 Layer/책임, Standard Schema emit 복제 vs import 호출, `@typia/transform` 폐기 시점 3 안, LLM/functional/protobuf Phase 1 기한, interface 동시 bump, `lib/internal/*` 공개 범위. 그 중 **M3 (Standard Schema)** 가 최우선 — C 의 inline 복제는 P1 "결과 동일" 불변식을 이미 Phase 0 에서 위반했고 사용자 `~standard` 경로 (`bracket notation`) 에서 TS 정본과 drift. 해법은 `_createStandardSchema(__fn)` 한 줄 emit. Sub-3 에서 M1~M7 7 합의 + D Q1~Q10 재요청 10 건 처리 요청. (145 단어)
