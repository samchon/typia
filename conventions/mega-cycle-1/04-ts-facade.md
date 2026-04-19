# D. TS Facade Keeper — Cycle 3 개정 (Sub-3)

> 역할: `@typia/typia` + `@typia/interface` + `@typia/utils` (+ `@typia/mcp` / `@typia/langchain` / `@typia/vercel`) 의 **얇은 TS façade 층** 유지 규약.
> 전제: `@typia/core` 30,307 LOC 와 `@typia/transform` 4,306 LOC 는 **Go (ttsc engine/driver) 로 전부 이주**한다. TS 에 남는 것은 (a) 사용자 import 지점, (b) 0-dep 타입, (c) emit 된 JS 가 import 하는 런타임 헬퍼, (d) 외부 Node SDK 어댑터뿐.
> 단일 진실원: `wiki/08-tsgo-master-plan/16-package-port-boundary.md` + `cycle-01-A-boundary.md §2.6 BND-NS-01`.

**개정 이력**: Cycle 1 초안 836 줄을 Cycle 2 에서 A/B/C/E/F 가 비판. 본 문서는 그 비판을 반영한 개정본. 원 초안(`cycle-01-D-ts-facade.md`)의 문단 번호를 유지하되, 변경 사유를 인라인 **[C2-X 반영]** 태그로 표시한다. 미답 Q 는 Sub-4 감수로 이월.

---

## 0. Cycle 2 비판 반영 요약 (선두 체크)

| 비판 출처 | 원쟁점 | 개정 결론 |
|-----------|--------|-----------|
| A §4.1 / A Q2 / B §M-1 / C §3.1 / F §7.11 | "13 namespace vs 9 import 지점" 혼선 | §1.2.4 · §3.2 재정의: **9 import 지점 (A BND-NS-01 공식)** + **13 기능 그룹 (D 세부 분류)** 병존. 용어 분리. |
| A §4.2 / B §D-1 / C §4.3 / E §5.1 / F §7.3 / F §8.4 | Standard Schema TS ↔ Go emit drift | §5.3 재정의: **TS `_createStandardSchema` 단일 정본**, C 의 `assert.go:63` 은 v13.0.0-beta.1 이전 **`_createStandardSchema(__fn)` 호출 한 줄** 로 축소. E 가 `test_emit_standard_schema` fixture 신설. |
| B §D-2 / D Q9 | named vs default import 템플릿 | §3.4 rule 1 승격: **named import 통일**. `$importInternal("<name>")` 템플릿 문법 고정. |
| B §D-3 | `IConfig.extensions` open map 의 IR 주입 | §2.2 정정: extensions 는 **ttsc driver runtime 옵션** (emitter 파라미터) 로 한정. B 의 IR 12 sum-type 불변. |
| B §D-4 / A 쟁점 4.4 / E §5.5 | ESLint lint rule 에 cross-language drift 검사 부재 | §13.1 rule 확장: `functor-name-match-go` + `loc-budget` + `facade-marker-pattern` 구조 lint 3 종 추가. |
| C §4.1 | marker 3 줄 골격의 `never` 반환 타입 중요성 | §3.1 rule 1 보강: "(3) 구현부 반환 타입 = `never`" 명시. |
| C §4.2 | placeholder 에러 메시지 prefix 책임 | §3.3 C↔D 계약: **Go emit = `<namespace>.<fn>` (prefix 없음)**, runtime helper 가 `typia.` prepend. |
| C §4.4 | "147 functors" vs "147 FUNCTORS" 용어 충돌 | §3.4 doc: **runtime functors** (D 147, JS 파일 수) vs **dispatch rows** (C 147, Go switch case 수) 용어 분리. |
| E §5.2 | vendor/version grep lint 부재 | §13.1 rule 추가: `lint-standard-schema-invariant.sh`. |
| E §5.4 | `typiaPathToStandardSchemaPath` state-machine 테스트 부재 | §10.5 추가: 30+ fixture + Go path_parse_test.go 양쪽 구속. |
| E §5.5 | LOC 목표의 측정 스크립트 부재 | §3.7 + §13.1 추가: `scripts/measure-loc.sh` + CI `loc-budget` job. |
| F §5.1 / A 쟁점 4.4 / F §8.3 | `bin.typia` proxy 로 인한 P1 혼란 | §3.5 개정: v13.0~v13.2 **warning + `ttsc` exec 위임**, v13.3 완전 삭제. v15 는 이월 유지 재검토 표기만 남김. |
| F §5.2 / F §7.3 | Standard Schema Q1 해결 기한 | §5.3 + §11 Q1 해소: **v13.0.0-beta.1 이전** 해결 기한 확정 (Sub-3 합의). |
| F §5.3 / F §7.7 / F §8.7 | `@typia/runtime` 도입 시점 | §4.3 + §11 Q3 해소: **v14 도입** 확정 (보수). v13 에서는 `@typia/utils/runtime` subpath 분할만. Setup wizard 가 `dependencies` 조작 금지. |
| F §7.1 / A marker-only | `typia/lib/transform` 수명 | §3.6 전면 재작성: **v14 no-op marker 파일로 존속**, v15 재논의. 삭제 시 사용자 tsconfig 추가 수정 → P1 위반이므로 보존. |
| F §7.8 | TypeScript peerDependency 제거 범위 | §4.5 신설: L1/L4 peer 삭제, L5 (mcp/langchain/vercel) peer 유지, L0 dev-only. |
| F §7.9 | NoTransform 메시지 문자열 변경의 semver | §3.3 말미: "메시지 문자열 변경 = PATCH, warn→error 승격 = MINOR" 명시. |

원 초안 Q1~Q10 중 **Q1·Q2·Q3·Q6·Q9 는 Sub-3 결정**으로 승격, **Q4·Q5·Q7·Q8·Q10 은 Sub-4 이월**. §11 참조.

---

## 1. 관장 범위와 핵심 원칙

### 1.1 범위 정의 — 어디까지가 D 인가

[C2-A 쟁점 4.4 반영] executable/ 삭제 책임과 F 의 신규 bin publish 타이밍을 "동일 release 동시성" 으로 묶는다. `@typia/ttsc` bin 이 publish 되기 전에 `packages/typia/src/executable/` 를 삭제하면 `npx typia setup` 사용자 회귀 — 따라서 **삭제 PR 과 신규 bin publish 는 동일 tag 에서만 머지** (§3.5 참조).

| 항목 | D 관장 | 이유 |
|---|---|---|
| `packages/typia/src/` (module/json/llm/protobuf/misc/notations/reflect/functional/http.ts) | ✅ | 사용자 import 지점 — 치환 대상 marker |
| `packages/typia/src/TypeGuardError.ts` | ✅ | emit JS 가 throw 하는 런타임 타입 |
| `packages/typia/src/internal/_*.ts` (147 runtime functors) | ✅ | emit JS 가 import 하는 런타임 helper |
| `packages/typia/src/transformers/NoTransformConfigurationError.ts` | ✅ | "ttsc 미적용" placeholder |
| `packages/typia/src/executable/` (setup/patch/generate) | 🟡 동시삭제 | v13 에서 삭제 + `@typia/ttsc` bin publish 와 **같은 release tag** |
| `packages/typia/src/transform.ts` (= `@typia/transform` re-export) | 🟡 no-op | [F §7.1 반영] **v14 까지 no-op marker 파일로 유지**, v15 재검토 (§3.6) |
| `package.json.bin.typia` | 🟡 warning shell | [F §5.1, §8.3 반영] v13.0~v13.2 는 warning + `ttsc` exec, v13.3 완전 삭제 |
| `packages/interface/src/` 전체 | ✅ | 0-dep 순수 타입 |
| `packages/utils/src/` | 🟡 분할 | [F §7.7 반영] v13 `@typia/utils/runtime` subpath 분할만, v14 `@typia/runtime` rename |
| `packages/mcp/src/`, `packages/langchain/src/`, `packages/vercel/src/` | ✅ | Node-SDK peerDep 어댑터 |
| `packages/core/src/`, `packages/transform/src/` | ❌ | B/C Go 포팅 영역 |
| `packages/unplugin/src/`, `packages/ttsc/` | ❌ | F 영역 |

### 1.2 핵심 원칙 7 개

1. **사용자 API 불변 (API-Frozen)** — `typia.is<T>(input)` · `typia.json.stringify<T>(x)` · `typia.llm.controller<T>(...)` 등 **시그니처가 단 한 글자도 바뀌지 않는다**. 신규 오버로드는 기존 호출을 깨지 않는 한에서만 허용. A-BND-API-01 과 공유.
2. **0-dep 타입 (interface)** — `@typia/interface` 는 컴파일 타임에만 의미있는 순수 타입. 어떤 런타임 dependency 도 추가 불가.
3. **얇게의 정량 기준 (thin-quantified)** — `@typia/typia` source LOC 는 **7,544 → ≤ 3,500 LOC** (목표 ~3K, 상한 3.5K) 로 축소. 측정 스크립트 `scripts/measure-loc.sh` (§13.1) 가 매 PR 검증.
4. **9 import 지점 + 13 기능 그룹 병존** — [C2-A §4.1, §7.2, C §3.1, F §7.11 반영] 사용자가 `import typia from "typia"` 한 뒤 접근하는 **namespace 수는 9 (root + 8 sub)** 로 A-BND-NS-01 이 공식 정본. D 는 이 9 지점을 facade 로 관장하되, 내부 기능 분류상 **13 그룹** (validators loose / validators strict / random / error / json / llm / protobuf / misc / notations / reflect / functional / http / re-exports) 으로 세분화한다. §3.2 상세.
5. **Edge runtime 호환 (no-eval)** — `eval` / `new Function(code)` / 동적 `require` / top-level `process` 접근 금지. `static import` 만.
6. **Standard Schema 주입 단일화** — [B §D-1, C §4.3, E §5.1, F §8.4 반영] `createValidate<T>()` / `createValidateEquals<T>()` 반환값에 `"~standard"` 속성 부착. **TS 의 `_createStandardSchema` 가 유일 정본**, Go emitter (`ttsc/internal/engine/emitter/assert.go:63`) 는 `_createStandardSchema(__fn)` 한 줄 호출 emit (3-party 계약). §5 상세.
7. **LLM 어댑터 페어 유지** — `mcp/langchain/vercel` 3 어댑터는 각 SDK 의 버전 변동에 대응하는 최소 얇은 변환만. typia 도메인 로직 (검증·coerce·parse) 은 `ILlmFunction.{validate,coerce,parse}` 메서드에 격리.

---

## 2. `@typia/interface` 규약 (0-dep, 타입 only)

### 2.1 절대 조건

- `package.json.dependencies` 는 **공백**이어야 한다. dev dep 은 `rimraf` · `typescript` 둘만.
- 런타임 JS 배포물에 **`enum` / `class` / top-level 함수** 가 존재해서는 안 된다.
- `export *` 진입점은 `src/index.ts` 의 **7 barrel + `tags` namespace** (`http/schema/openapi/typings/utils/metadata/protobuf` + `tags`). barrel 간 상호 의존 금지.
- 타입 파일 상한 **500 LOC**. 예외: `ILlmSchema.ts` 600 LOC.

### 2.2 LLM 표준 분열 대응

[B §D-3 반영 — 전면 개정]

`ILlmSchema.IConfig` 는 **타입 선언** (L0) 이지만, 그 소비는 C/B 측 **런타임 옵션**이다. D 의 책임은 타입 표면만.

1. 새 provider 용 config 플래그를 **추가**만. 기존 의미 수정 금지.
2. provider enum 도입 금지. 모델은 `IConfig.model`/`IConfig.strict` 조합으로 표현.
3. 신규 LLM 모델로 스키마 확장이 필요하면 `IConfig.extensions?: Record<string, unknown>` open map 으로 수용 — **단, 이 map 은 B 의 IR (Schema 12 sum-type) 에 진입하지 않는다**. C 의 ttsc driver 가 이 값을 CLI flag 로 받아 emitter runtime 파라미터로만 사용. B 엔진은 IConfig-free. Phase 1 에서 LLM provider 7 번째 추가 시 IR 마이그레이션 불필요.

### 2.3 tags 시스템

- 21 export 유지 (`Constant/ContentMediaType/Default/Example/Examples/ExclusiveMin(Max)imum/Format/JsonSchemaPlugin/Maximum/MaxItems/MaxLength/Minimum/MinItems/MinLength/MultipleOf/Pattern/Sequence/Type/UniqueItems/TagBase`).
- 새 tag 추가 시:
  1. `validate` 필드의 코드 템플릿 문자열 포맷 **절대** 변경 금지. Go emitter (B/C) 가 이 템플릿을 parse 한다.
  2. 런타임 체크가 필요하면 `@typia/typia/src/internal/_isTypeXxx.ts` 또는 `_isFormatXxx.ts` 를 **동시에** 추가 — CI 의 `functor-name-match-go` lint (§13.1) 가 누락을 차단.
  3. `exclusive` 필드로 충돌 관리 (Format vs Pattern, Type vs TypeOf).

### 2.4 호환성 규칙

- `IValidation<T>` · `IResult<T,E>` · `IRandomGenerator` · `ILlmApplication<T>` · `ILlmController<T>` · `IHttpLlmController` · `IJsonSchemaApplication` — 사용자가 import 하는 surface. 필드 추가는 `optional` 로만.
- `Primitive<T>` · `Resolved<T>` · `CamelCase/PascalCase/SnakeCase` — 변경 금지.
- OpenApi 4-way 모델 중 Emended `OpenApi` 가 typia 내부 표준. Go 엔진은 이 Emended 만 이해.

---

## 3. `@typia/typia` facade 규약 (marker API)

### 3.1 marker 함수 패턴 (고정)

```ts
// 1) "T 생략 시 타입 오류" 유도 오버로드
export function is<T>(input: T): input is T;
// 2) "T 명시 + unknown 입력" 실제 사용 오버로드
export function is<T>(input: unknown): input is T;
// 3) 런타임 구현 — ttsc 가 치환하기 전에 호출되면 throw, 반환 타입 반드시 `never`
/** @internal */
export function is(): never {
  NoTransformConfigurationError("is");
}
```

규약:

1. **세 줄 골격 불변**. 오버로드 2 개 + `() => never` 구현부. [C2-C §4.1 반영] 구현부 반환 타입은 반드시 **`never`** — `void` 로 바뀌면 tsgo `Type.Id()` 해시가 바뀌어 `typeKey` 가 깨지고 B analyzer 회귀.
2. 구현부는 **반드시** `NoTransformConfigurationError("<namespace>.<name>")` 호출. namespace 경로 (`json.stringify`, `llm.controller`) 를 정확히 전달.
3. `/** @internal */` 주석 필수.
4. 신규 함수 추가는 이 패턴을 복사. `internal/_xxx.ts` 로만 실제 로직 이동.
5. [E §5.3 반영] 본 패턴은 ESLint custom rule `facade-marker-pattern` (§13.1) 이 CI 에서 구조적으로 강제. 수동 리뷰 의존 해제.

### 3.2 namespace — 9 지점 (A 공식) + 13 기능 그룹 (D 세분)

[C2-A 쟁점 4.1, B M-1, C 쟁점 3.1 반영 — 전면 재작성]

**공식 namespace 표 (A-BND-NS-01, 9 지점)**:

| # | namespace | 파일 | 주 역할 |
|---|-----------|------|---------|
| 0 | (root) | `module.ts` | `is / assert / validate / equals / random / create*` |
| 1 | `typia.json` | `json.ts` | `schema / schemas / application / parse / stringify` |
| 2 | `typia.llm` | `llm.ts` | `controller / application / schema / parameters / structuredOutput` |
| 3 | `typia.http` | `http.ts` | `formData / queryObject / headers / parameter` |
| 4 | `typia.protobuf` | `protobuf.ts` | `message / encode / decode / assertEncode / assertDecode` |
| 5 | `typia.misc` | `misc.ts` | `clone / prune / literals` |
| 6 | `typia.notations` | `notations.ts` | `camel / pascal / snake` |
| 7 | `typia.reflect` | `reflect.ts` | `schema / name` |
| 8 | `typia.functional` | `functional.ts` | `assertFunction / assertParameters / assertReturn` |

**D 세부 기능 그룹 (13 분류, 내부 문서용)**:

| # | 분류 | 소속 namespace | 주 함수 |
|---|------|----------------|---------|
| 1 | validators (loose) | root | `is / assert / assertGuard / validate` + factories |
| 2 | validators (strict) | root | `equals / assertEquals / assertGuardEquals / validateEquals` + factories |
| 3 | random | root | `random / createRandom` |
| 4 | error | `TypeGuardError.ts` | `TypeGuardError` + `IProps` |
| 5 | json | `typia.json` | schema/parse/stringify + assert 변이 |
| 6 | llm | `typia.llm` | controller/application/parameters/structuredOutput + parse/coerce + factories |
| 7 | protobuf | `typia.protobuf` | message/encode/decode + assert 변이 |
| 8 | misc | `typia.misc` | clone/prune/literals + 변이 |
| 9 | notations | `typia.notations` | camel/pascal/snake + 변이 |
| 10 | reflect | `typia.reflect` | schema/schemas/name |
| 11 | functional | `typia.functional` | assertFunction/assertParameters/assertReturn + 변이 |
| 12 | http | `typia.http` | formData/queryObject/headers/parameter + 변이 |
| 13 | re-exports | `re-exports.ts` | `IValidation / tags / OpenApi / ILlm* / Primitive / Resolved` |

**용어 규약**:
- "9 namespace" = 사용자 import 지점 (A 공식, 외부 문서·README·wiki 전부 이 수치로 통일).
- "13 기능 그룹" = D 내부 세분. 외부 공개 금지, 본 문서와 `cycle-01-D` 내에서만 사용.
- C 의 "13 programmer" (Go emitter 파일 수), B 의 "12 sum-type" (IR category), F 의 "13 릴리스 항목" 은 **모두 별개 수치**이며 각자 문서에 원본 근거를 둔다. Sub-4 감수 시 A 가 "4 수치 분리 표"를 wiki 에 등재한다.

**불변 규약**:
1. 9 namespace 이름은 **고정**. 재분류·rename 금지. `typia.misc.clone` 을 `typia.clone` 으로 승격 금지 (사용자 코드 수만 개 파괴).
2. 새 namespace 추가는 **semver-minor** 에서만 허용. A-BND-NS-02 5 조건 충족 + `module.ts` 에 `export * as <new> from "./<new>"` 한 줄.
3. 각 namespace 파일 상단 블록 주석 (`/* === ... === */`) 유지.
4. 각 함수 JSDoc 은 **Related functions / Template/Param/Returns/Throws/Danger** 태그 세트. LLM-friendly DX 의 핵심.

### 3.3 placeholder 에러 메시지 규약 (post-v13)

현행:
```
Error on typia.<name>(): no transform has been configured.
Read and follow https://typia.io/docs/setup please.
```

v13 교체:
```
Error on typia.<name>(): ttsc transform has not been applied.

Run `npx ttsc setup` (configures @typia/ttsc and tsconfig.json),
or replace `tsc` with `ttsc` in your build script.

If already configured, rebuild with `ttsc` to regenerate emit.
```

[C2-F §5.1, §8.3 반영] `npx typia setup` → `npx ttsc setup` 로 교체. bin 단일화와 일관.

**C↔D 계약 (메시지 경로)**: [C2-C §4.2 반영]
- **C 의 Go emit** 은 method name 으로 `"<namespace>.<method>"` (prefix 없음) 을 전달. 예: `"json.stringify"`, `"llm.controller"`.
- **D 의 runtime helper** (`NoTransformConfigurationError`) 가 `"typia."` prefix 를 prepend. 즉 에러 메시지에서 `Error on typia.json.stringify(): ...` 로 구성.
- root 함수 (`is`, `assert` 등) 는 method name = `"is"` 만 전달.

**semver 분류** [F §7.9 반영]:
- 메시지 문자열 자체 변경 (예: 링크 URL 변경) = **PATCH**.
- warn → error 승격 = **MINOR**.
- warn 제거 자체 (no-op 까지) = **MAJOR**.

### 3.4 `packages/typia/src/internal/_*.ts` (147 runtime functors)

[C2-B §D-2, C §4.4, D Q9 반영]

- 현재 **147 runtime functors**. 이들은 ttsc 가 emit 한 사용자 JS 가 `from "typia/lib/internal/_isFormatEmail"` 꼴로 **named import** 한다.
- 규약:
  1. **파일 하나 = 함수 하나 = 대표 named export 하나**. `_isFormatEmail.ts` 가 `_isFormatEmail` 함수를 named export. Go emitter (B/C) 는 `import { _isFormatEmail } from "typia/lib/internal/_isFormatEmail"` 로 emit. default export 금지 — CJS/ESM dual 환경 (Bun, Deno) 에서 `module.exports = {...}` 래핑 비호환 예방.
  2. 파일명 prefix `_` 고정. private `__` 는 이중 underscore (notations/private/__notationCapitalize.ts).
  3. 각 functor 는 **pure + no side effect + no top-level state**. Edge runtime isolate 안전성.
  4. dependency: `@typia/interface` (타입) + 다른 `_xxx.ts` functor 만.
  5. `package.json.exports` 맵의 `"./lib/internal/*": "./src/internal/*.ts"` 엔트리는 ttsc emitter 계약. 변경 금지.
  6. [B §D-4, §13.1 연동] 파일 목록과 `packages/ttsc/internal/engine/metadata/functor_names.go` 상수 리스트는 `functor-name-match-go` lint 가 diff = ∅ 검증. cross-language drift 불가능화.

**"147" 용어 규약** [C §4.4 반영]:
- **D 147** = runtime functors (`packages/typia/src/internal/_*.ts` 파일 수).
- **C 147** = dispatch rows (Go `ttsc/internal/engine/metadata/functor_names.go` switch case 수).
- Phase 0 에서 우연히 수치 일치. Phase 1 에 한쪽이 변할 수 있음 (예: `_isFormatXxx` 22→30 증가 시 D 147→155). 같은 숫자로 보이더라도 용어는 분리. 본 문서 외부에 쓸 때는 반드시 "runtime functors" / "dispatch rows" 명시.

### 3.5 `executable/` 제거 규약

[C2-A 쟁점 4.4, F §5.1, §8.3 반영]

현행 `packages/typia/src/executable/` (583 LOC) 3 커맨드:

- `typia setup` — PackageManager detect + ts-patch 설치 + tsconfig plugin 추가
- `typia patch` — JSDoc parseAll 패치 (TS 5.3+)
- `typia generate --input --output` — offline generate

**v13 이전 계획**:
1. `typia setup` → `@typia/ttsc` 의 `ttsc setup` 으로 이전 (F 가 신규 CLI 소유).
2. `typia patch` — **완전 삭제** (tsgo 무관).
3. `typia generate` — `ttsc generate` 로 이전. TS 코드 삭제.
4. `package.json.bin.typia` — [F §5.1 권장 수정 반영]
   - **v13.0 ~ v13.2**: `bin.typia` 유지하되 내용은 warning shell — `console.warn("npx typia setup moved to npx ttsc setup. Forwarding...")` + `ttsc` 를 `child_process.spawn` 으로 exec.
   - **v13.3**: `bin.typia` 완전 삭제. 이후 `npx typia setup` 은 "command not found".
   - **v14+**: `typia` 커맨드는 존재하지 않음. 문서·README·Setup wizard 모두 `ttsc setup` 단일.
   - **v15 재검토 없음**. v13.3 삭제가 최종.
5. `@typia/ttsc` bin publish 시점과 `executable/` 삭제 PR 머지 시점은 **동일 release tag** 에서만 동시에 진행. A §4.4 권장: D §12 부록 A diff preview 에 삭제 커밋 SHA ↔ F publish tag 연결 필수.

D 책임: 이전 완료 확인 후 `src/executable/` 폴더 rm, `package.json.dependencies` 에서 `inquirer` · `commander` · `comment-json` · `package-manager-detector` 제거.

### 3.6 `src/transform.ts` — v14 no-op marker 유지

[C2-F §7.1, A marker-only 반영 — 원 초안 §3.6 "v13.3 완전 제거" 정책 뒤집음]

**F 권장 근거**: D 초안의 "v13.3 완전 제거" 는 사용자 tsconfig 의 `compilerOptions.plugins: [{ transform: "@typia/transform" }]` 을 **v13.3 에서 사용자가 직접 수정하도록 강제**. 이는 P1 (빌드 스크립트 한 단어 치환) 정신에 위배 — tsconfig 변경은 `ttsc setup` 이 수행해야 하나, 이미 setup 한 사용자가 v12→v13.3 업데이트만 하면 tsconfig 손대지 않고도 빌드가 통과해야 한다.

**개정 정책**:

현행:
```ts
// packages/typia/src/transform.ts
import transform from "@typia/transform";
export default transform;
export * from "@typia/transform";
```

**v13.0 ~ v14.x**:
```ts
// packages/typia/src/transform.ts
// v13+ marker-only: ttsc signals this as a no-op (A BND-TSC-01, marker-only).
// Do NOT throw — tsconfig compatibility for users who have not re-run `ttsc setup`.
export default function noopTransform(): never {
  // Deliberately unreachable: ttsc driver detects this marker before tsc invokes it.
  // If tsc (legacy) imports this, it runs but emits nothing (Program object unchanged).
  throw new Error(
    "@typia/transform is a v12 marker. v13+ requires ttsc, which detects this file without invoking it. " +
    "If you see this error, your build is running tsc directly — switch to ttsc."
  );
}
```

- `package.json.exports` 에 `"./lib/transform": "./src/transform.ts"` 엔트리 **유지**.
- `package.json.dependencies` 에서 `@typia/transform` 제거 (v13.0).
- `package.json.dependencies` 에서 `@typia/core` 제거 (ttsc 바이너리가 흡수).
- ttsc driver 가 이 파일을 **resolve 하지 않고 signal flag 로만 사용** (C §2.5, A BND-TSC-01 marker-only 확정).

**v15 재검토**: v15 major 업 시, 사용자 커뮤니티의 tsconfig plugin 항목 잔존 비율 조사 후 완전 삭제 여부 결정. v14 까지는 무조건 유지 — Sub-4 감수로 이월.

### 3.7 LOC 목표 (thin-quantified) + 측정 인프라

[C2-E §5.5 반영]

| 현재 (v12) | v13 목표 | v14 목표 | 감축 원천 |
|---|---|---|---|
| source ~7,544 LOC | ≤ 3,500 | ≤ 3,000 | `executable/` -583, programmers/ -583, transform.ts no-op 유지 (+5), 기타 |
| dependencies (런타임) 9 | ≤ 4 | ≤ 3 | ts-patch/commander/inquirer/comment-json/package-manager-detector/randexp 제거 |
| peer dependencies | `typescript >=4.8.0 <5.10.0` | L1/L4 삭제, L5 유지 | §4.5 |

**측정 스크립트**: `scripts/measure-loc.sh` (§13.1) — `find packages/typia/src -name '*.ts' | xargs wc -l` 합산. CI `loc-budget` job 에서 target 초과 시 fail. PR 단위로 음의 방향 drift 강제 (줄어들기만 허용). 147 functors 수도 `scripts/count-functors.sh` 로 trend 추적.

**런타임 의존 최종 상한**: `@standard-schema/spec` + `@typia/interface` + `@typia/utils` (v13) / `@typia/runtime` (v14) + (optional) `randexp`. randexp 는 `_randomPattern.ts` 가 emit JS 에서 쓰므로 유지 (Q4 Sub-4 이월).

---

## 4. `@typia/utils` 규약 (런타임/변환부 분리)

### 4.1 현재 상태

- 전체 11,715 LOC / 4 top-level barrel (`converters/ http/ utils/ validators/`).
- `converters/`, `http/`, `validators/` 는 **변환부** — Go 이주.
- `utils/` 는 런타임 + 변환 혼재.

### 4.2 분할 규약

**v13**: [F §8.7 반영 — 전면 재확정]
- `@typia/utils/runtime` **subpath 신설** (`package.json.exports` 에 `"./runtime": "./src/runtime/index.ts"` 추가).
- `runtime/` 하위로 이동: `LlmJson`, `NamingConvention`, (필요 시 `ArrayUtil/MapUtil/Singleton/StringUtil/dedent` 중 emit JS 가 쓰는 것).
- 포맷 검사기 23 (`_isFormatEmail/Uuid/Ipv4/...`) 은 **중복 제거 원칙** 상 `@typia/typia/src/internal/` 에만 두고 `@typia/utils` 에서는 삭제. 다른 패키지가 validator 용으로 쓸 때는 `@typia/typia/lib/internal/_isFormatEmail` 경로.
- `@typia/utils` 루트 export (`converters`, `http`, `validators`) 는 Go 이주 후 throw stub 또는 deprecated warning.

**v14**: `@typia/runtime` 패키지 신설 (§4.3). `@typia/utils` unpublish.

**D 책임**: `packages/utils/src/` 에서 삭제되는 디렉터리·export symbol 목록 정확 관리. A (Boundary) 에게 각 deprecated symbol 의 사용자 수 조사 요청.

### 4.3 `@typia/runtime` 패키지 디자인 — **v14 확정**

[C2-F §5.3, §7.7, §8.7 반영 — Sub-3 합의 승격]

**v13 도입 반대 근거**:
1. v13 에서 `@typia/runtime` 도입 시 사용자 `package.json.dependencies` 에 신규 dep 1 개 추가 필요. Setup wizard 가 `dependencies` 를 조작하면 P1 위반 (빌드 스크립트 한 줄 치환 이상을 건드림).
2. emit JS 의 import 경로 (`typia/lib/internal/*`) 가 v13 에서 확정 안 되면 v12 이하 emit 과 호환 깨짐.
3. F §8.7 권고: v13 에서는 Setup wizard 가 **`dependencies` 조작 금지, 오직 `tsconfig.json` + build script 만 수정**.

**v14 도입 확정**:
- v14 에서 `@typia/runtime` 패키지 신설. 구조:

```
@typia/runtime
├── src/
│  ├── index.ts                     // re-export
│  ├── TypeGuardError.ts             // 단일 출처
│  ├── _createStandardSchema.ts      // Standard Schema 정본 (§5)
│  ├── _isFormat*.ts                 // format checkers (23)
│  ├── _httpRead*.ts                 // HTTP readers
│  ├── _protobuf*.ts                 // Protobuf helpers
│  ├── _random*.ts                   // random generators
│  ├── _jsonStringify*.ts            // JSON stringify helpers
│  ├── _notation*.ts                 // case converters
│  └── LlmJson.ts                    // LLM-friendly JSON (from utils runtime)
└── package.json
```

- emit JS import 경로: v14 에서 `typia/lib/internal/*` → `@typia/runtime/*` 전환. 이 전환은 **semver-major** 이므로 v14 로 미룬다.
- v14 GA 시점: 2028 Q4 beta → 2029 Q2 GA (4 프로젝트 세트 launch 와 정렬).
- `@typia/utils` 는 v14 에서 unpublish (tombstone).

**D ↔ F ↔ A 합의 요구**: v13 내에 `@typia/runtime` 신규 패키지 추가 금지. F 가 release gate 에서 거부권 행사.

### 4.4 utils/validators 의 OpenApi checker 처리

[Sub-4 이월] `OpenApiV3TypeChecker` 등은 외부 사용자 (Nestia 등) 직접 import surface. Go 이전 시 3 옵션:
(a) 완전 제거 (v13 deprecation, v14 제거) — 외부는 `@nestia/` 자체 포팅 흡수.
(b) TS wrapper (`ttsc validate-schema` CLI 위임).
(c) WASM.

제안: (a). A (Boundary) 와 Nestia 사용자 조사 후 Sub-4 에서 최종 결정.

### 4.5 TypeScript peerDependency 제거 범위 (신설)

[C2-F §7.8 반영]

Layer 별 peer 정책:

| Layer | 패키지 | `typescript` peer | 근거 |
|-------|--------|-------------------|------|
| L0 | `@typia/interface` | **dev-only** | 타입 선언 전용, 런타임 무관 |
| L1 | `@typia/typia` | **삭제** (v13) | ttsc 바이너리가 내장 tsgo 사용 |
| L3 | `@typia/utils` / `@typia/runtime` | **dev-only** | 런타임 JS helper, 사용자 tsc 무관 |
| L4 | `@typia/ttsc` | **삭제** | 바이너리 내장 |
| L5 | `@typia/mcp` | **유지** | MCP SDK 가 Zod 등 피어 요구 |
| L5 | `@typia/langchain` | **유지** | LangChain core peer |
| L5 | `@typia/vercel` | **유지** | Vercel AI SDK peer |

- L1/L4 peer 삭제 후 사용자 IDE 타입 체크 경로는 여전히 `typescript` 필요 — `ttsc setup` 이 `typescript` 를 **devDependency 로 자동 추가** 한다 (F 가 setup wizard 소유). D 는 이 규약의 L0~L3 절반만 관장, L4~L5 는 F 와 협의.
- A 에게 `BND-PEER-01` 신설 요청 (F §7.8 동일 요청).

---

## 5. Standard Schema 통합 규약 — **TS 단일 정본**

### 5.1 정본 확정 — D 책임, C 의 Go emit 은 호출만

[B §D-1, C §4.3, E §5.1, F §7.3, §8.4 반영 — Sub-3 합의 승격]

`packages/typia/src/internal/_createStandardSchema.ts` (134 LOC) 가 **단일 정본**. 부착 대상: `createValidate<T>()` · `createValidateEquals<T>()` 반환값. 시그니처 교차 타입 `((input: unknown) => IValidation<T>) & StandardSchemaV1<T, T>`.

```ts
Object.assign(fn, {
  "~standard": {
    version: 1,
    vendor: "typia",
    validate: (input: unknown): StandardSchemaV1.Result<T> => {
      const result = fn(input);
      if (result.success) return { value: result.data };
      return {
        issues: result.errors.map(error => ({
          message: `expected ${error.expected}, got ${error.value}`,
          path: typiaPathToStandardSchemaPath(error.path),
        })),
      };
    },
  },
} satisfies StandardSchemaV1<T, T>);
```

**3-party 계약 (D ↔ B ↔ C)**:

1. D 는 `_createStandardSchema` 를 facade 의 **공식 runtime functor** 로 못박는다. `/** @internal */` 유지하되 `package.json.exports` 의 `"./lib/internal/*"` 경로로 외부 resolve 가능 — 이는 ttsc 자신 외 외부 사용자가 import 하지 말아야 함을 의미 (internal 은 ttsc 전용).
2. C 는 `ttsc/internal/engine/emitter/assert.go:63` 의 inline emit 을 **`_createStandardSchema(__fn)` 한 줄 호출** 로 교체. 현행 11 줄 IIFE → 3 줄 감소 (C §4.3 합의).
3. B 의 IR 은 `~standard` 플래그를 싣지 않는다. 이는 emit shape 결정이지 Schema 의미론이 아님.

### 5.2 경로 변환 규약

`typiaPathToStandardSchemaPath` (134 LOC 의 절반) 는 typia `"$input.foo[0][\"bar\"]"` → Standard Schema `readonly PathSegment[]` 변환. 4-state parser (`Start / Property / StringKey / NumberKey`).

[E §5.4 반영] **파서 테스트 의무화**:
- `packages/typia/test/path-parser.test.ts` 에 30+ fixture × 기대 `PathSegment[]`.
- Go 쪽은 `_createStandardSchema` functor 에 위임하므로 별도 parser 없음. 그러나 regression 방지 목적으로 `packages/ttsc/test/fixtures/standard-schema-parity/*.ts` 의 end-to-end 가 TS parser 결과와 일치해야 한다.
- Fuzz: `scripts/fuzz-path.go` 가 random path 생성 → TS parser (tsx 실행) 결과 deep-equal.

### 5.3 Go emitter 와의 계약 — drift 종결

[C2-A 쟁점 4.2, B §D-1, C §4.3, E §5.1, F §7.3, §8.4 반영 — Sub-3 합의]

**현상**: Cycle 2 까지 TS `_createStandardSchema` 와 Go `assert.go:63` 두 구현이 **관측 가능하게 다른 결과**를 냈다. path bracket notation, message format 모두 상이. 이는 A-BND-API-04 동치성 위반.

**해결 — v13.0.0-beta.1 이전 완료 기한**:

1. C 가 `assert.go:63` 를 다음 3 줄로 교체:
   ```
   const __fn = <validate_impl>;
   _createStandardSchema(__fn);
   return __fn;
   ```
2. ttsc emit 은 `import { _createStandardSchema } from "typia/lib/internal/_createStandardSchema"` 를 보존 (D 의 functor 를 emit JS 가 import).
3. E 가 `fixtures/standard-schema-parity/` 카테고리 신설 — 10 입력 × 두 경로 (TS `createValidate<T>(input)` vs ttsc-emit validator) 의 `"~standard"` 결과 **byte-equal**. Phase 0 는 RED 허용 (allow-failure), Phase 1 alpha 부터 차단, **v13.0.0-beta.1 에서 GREEN 강제**.
4. F 가 release.yml 에 `standardschema.dev` conformance suite 를 release gate 로 추가 (alpha/beta 부터 적용).
5. C 가 v12 소급 호환 위해 feature flag `--legacy-standard-schema` 를 v13.0 ~ v13.2 한 minor 유지. v13.3 에서 flag 제거.

**M-2 해소 (B §M-2)**: C §1.2 원칙 2 "emit 결과에 runtime dependency 없음" 의 "runtime dependency" 는 **`typia/lib/internal/*` 외부** 로 재정의. internal functor 는 D §3.4 exports map 계약상 facade 자신이며 runtime dep 이 아니다.

### 5.4 향후 Standard Schema v2 대응

- `version: 1` 고정. v2 출시 시 별도 분기 (Sub-4).
- `vendor: "typia"` 고정. 변경 금지.
- 다른 tilde 필드 (`~internal`, `~typia`) 추가 금지 — 스펙 외 확장 단명.
- vendor/version 변이를 [E §5.2 반영] `scripts/lint-standard-schema-invariant.sh` 가 CI 에서 grep 으로 차단 (§13.1).

---

## 6. LLM adapter 규약 (mcp/langchain/vercel)

### 6.1 공통 골격

```
for controller in props.controllers:
  for func in controller.application.functions:
    const tool = makeTool({
      name: (prefix ? `${controller.name}_` : "") + func.name,
      description: func.description,
      schema: func.parameters,
      execute: async (args) => {
        const validated = func.validate(args);
        if (!validated.success) return LlmJson.stringify(validated);
        return await func(args);
      },
    });
```

규약:
1. 3 어댑터 동일 패턴. `internal/<Sdk>ToolsRegistrar.ts` 의 `convert / register` 본체는 `for ... for ... makeTool(...)` 3 중 루프.
2. `func.validate / func.coerce / func.parse` 호출만. 외부 검증기 (ajv, Zod) import 금지.
3. 어댑터 본체 LOC 상한 **300 LOC** (Preserve 모드 예외 제외).

### 6.2 개별 규약

#### MCP (`@typia/mcp`, 현행 397 LOC)
- `McpServer` + raw `Server` 둘 다 지원.
- **Preserve 모드** 는 SDK private `_registeredTools / _toolHandlersInitialized` 접근 — 위험도 최고.
- 규약:
  1. private API 접근은 `McpControllerRegistrar.ts:101-190` 단일 함수에 격리.
  2. private API 부재 시 fallback + console.warn. throw 금지.
  3. CI 에서 `@modelcontextprotocol/sdk@latest` 주간 검증 (E 협의).
  4. Zod 의존 제거 조건: MCP SDK 가 raw JSON Schema 지원 전환.

#### LangChain (`@typia/langchain`, 현행 213 LOC)
- `DynamicStructuredTool` 이 JSON Schema 직접 수용.
- 규약: `schema: func.parameters` 그대로 전달. 중간 변환 금지.

#### Vercel (`@typia/vercel`, 현행 329 LOC)
- `jsonSchema<object>(parameters as JSONSchema7)` — 8 LOC converter.
- peer `ai >=6.0.0`.

### 6.3 신규 어댑터 가이드

- 이름 `@typia/<adapter>` 고정.
- `src/index.ts` 는 `toXxxTools(props)` 단일 export.
- `internal/XxxToolsRegistrar.ts` + 필요 시 `XxxParameterConverter.ts`.
- `package.json.peerDependencies` 에 SDK 1 종, `dependencies` 에 `@typia/interface` + `@typia/utils` (v13) / `@typia/runtime` (v14).

### 6.4 LlmJson 의존

3 어댑터 모두 `LlmJson.stringify()` 사용. `@typia/utils/src/utils/LlmJson.ts` 가 현 위치.
- v13: `@typia/utils/runtime` subpath 로 이전 (§4.2).
- v14: `@typia/runtime` 으로 이전.

---

## 7. 구 core/transform 이 Go 로 이주한 뒤 TS 에 남는 표면

### 7.1 사용자 import 관점

v12 사용자 코드:
```ts
import typia from "typia";
import { IValidation, tags } from "typia";
import { TypeGuardError } from "typia";
import { LlmJson } from "@typia/utils";
import { toVercelTools } from "@typia/vercel";
```

v13/v14 에서도 **위 5 줄은 한 글자도 바뀌지 않는다**. D 의 최상위 KPI.

[F §7.1 반영] 다음도 **v14 까지 호환 유지**:
```ts
// tsconfig.json 의 compilerOptions.plugins 항목이 있어도 ttsc 는 marker-only 로 동작
// src/transform.ts 는 no-op marker 로 존재
```

### 7.2 패키지 dependency graph (목표)

**v13**:
```
@typia/interface      (0 deps)
      ↑
@typia/utils          (@typia/interface)          // 변환부 제거, runtime subpath 추가
      ↑
@typia/typia          (@typia/interface, @typia/utils, @standard-schema/spec)
      ↑
@typia/mcp / langchain / vercel   (@typia/interface, @typia/utils, [SDK peer])
```

**v14**:
```
@typia/interface      (0 deps)
      ↑
@typia/runtime        (@typia/interface)           // NEW, @typia/utils 흡수
      ↑
@typia/typia          (@typia/interface, @typia/runtime, @standard-schema/spec)
      ↑
@typia/mcp / langchain / vercel   (@typia/interface, @typia/runtime, [SDK peer])
```

- `@typia/core` · `@typia/transform` : v13 에서 **빈 shim / no-op marker**, v14 에서 unpublish (tombstone).
- `@typia/ttsc` 는 이 그래프와 **독립** (devDependency only).

### 7.3 버전 호환 레인

**v13 (2027 Q2 preview → 2028 Q2 stable)**:
- API 불변. ttsc 필수. ts-patch 경로 제거 (단, tsconfig plugins 항목은 그대로 둬도 무해).
- `@typia/utils/runtime` subpath 등장.
- `@typia/transform` · `@typia/core` : v13.0 에서 stub + deprecated warn. v13.3 에서 warn → error (sematic MINOR).
- `bin.typia` : v13.0~v13.2 warning shell, v13.3 완전 삭제.
- TypeScript peer: L1/L4 삭제, L5 유지 (§4.5).

**v14 (2029 Q2 GA, 세트 launch 정렬)**:
- `@typia/runtime` 정식. `@typia/utils` unpublish.
- `@typia/transform` / `@typia/core` unpublish (tombstone 버전).
- `src/transform.ts` marker 유지 — v15 재검토.

### 7.4 import 경로 호환 테이블

| v12 import | v13 결과 | v14 결과 |
|---|---|---|
| `import typia from "typia"` | ✅ 동일 | ✅ 동일 |
| `import { IValidation } from "typia"` | ✅ 동일 | ✅ 동일 |
| `import { ILlmSchema } from "@typia/interface"` | ✅ 동일 | ✅ 동일 |
| `import { LlmJson } from "@typia/utils"` | 🟡 deprecated warn, 작동 | ❌ `@typia/runtime` 로 |
| `import { OpenApiConverter } from "@typia/utils"` | 🟡 throw stub | ❌ 완전 제거 |
| `import transform from "typia/lib/transform"` | 🟡 no-op marker (F §7.1 권장) | 🟡 no-op marker 유지 |
| `import { toVercelTools } from "@typia/vercel"` | ✅ 동일 | ✅ 동일 |

---

## 8. 코드 근거 (파일:라인)

### 8.1 9 namespace 구조 (A BND-NS-01)

- `packages/typia/src/module.ts:12-19` — 8 sub namespace export
- `packages/typia/src/module.ts:21` — `TypeGuardError` re-export
- `packages/typia/src/module.ts:23` — `re-exports` import
- `packages/typia/src/re-exports.ts:1-34` — 14 종 타입 + `tags` namespace 재수출

### 8.2 marker 패턴

- `packages/typia/src/module.ts:52-88` — `assert<T>()` 3 오버로드 + `() => never`
- `packages/typia/src/module.ts:172-197` — `is<T>()`
- `packages/typia/src/module.ts:222-252` — `validate<T>()`
- `packages/typia/src/transformers/NoTransformConfigurationError.ts:1-16` — placeholder

### 8.3 Standard Schema 주입

- `packages/typia/src/internal/_createStandardSchema.ts:4-27` — `_createStandardSchema` 본체
- `packages/typia/src/internal/_createStandardSchema.ts:29-133` — `typiaPathToStandardSchemaPath` 4-state parser
- `packages/typia/src/module.ts:630-637` — `createValidate<T>` 반환 타입 교차
- `packages/typia/src/module.ts:770-778` — `createValidateEquals<T>`
- `packages/ttsc/internal/engine/emitter/assert.go:63` — 현행 inline (v13.0.0-beta.1 이전 `_createStandardSchema(__fn)` 호출로 교체 예정)

### 8.4 interface 구조

- `packages/interface/src/index.ts:1-9` — 7 barrel + `tags`
- `packages/interface/src/tags/index.ts:1-21` — 21 tag
- `packages/interface/src/schema/ILlmSchema.ts:1-473` — LLM schema

### 8.5 executable (삭제 대상)

- `packages/typia/src/executable/typia.ts:33-50` — 3 command dispatcher
- `packages/typia/src/executable/TypiaSetupWizard.ts` (171 LOC)
- `packages/typia/src/executable/TypiaPatchWizard.ts` (45 LOC)
- `packages/typia/src/executable/TypiaGenerateWizard.ts` (82 LOC)

### 8.6 internal functor (147 runtime)

- `packages/typia/src/internal/_assertGuard.ts:3-13`
- `packages/typia/src/internal/_throwTypeGuardError.ts:3-5`
- `_isFormatEmail.ts` 외 22 format checker
- `_httpFormDataRead*.ts` 외 25 http reader
- `_random*.ts` 외 31 random generator

### 8.7 package.json exports

- `packages/typia/package.json:7-10` — `"."`, `"./lib/transform"`, `"./lib/internal/*"`
- `packages/typia/package.json:35-46` — 9 런타임 dep
- `packages/interface/package.json:25-28` — dev dep 2 개만 (0-dep 증명)

### 8.8 utils 분할 근거

- `packages/utils/src/index.ts:1-4` — 4 barrel
- `packages/utils/src/converters/index.ts:1-5` — OpenApi/Llm converter
- `packages/utils/src/utils/index.ts:1-8` — 7 런타임 utility
- `packages/utils/src/validators/*/` — OpenApi(V3/V3_1/SwaggerV2)TypeChecker

### 8.9 LLM adapter 골격

- `packages/mcp/src/index.ts:34-67` — `registerMcpControllers`
- `packages/mcp/src/internal/McpControllerRegistrar.ts:101-190` — Preserve
- `packages/langchain/src/index.ts:42-64` — `toLangChainTools`
- `packages/langchain/src/internal/LangChainToolsRegistrar.ts:122-148`
- `packages/vercel/src/index.ts:88-155` — `toVercelTools` + `toVercelSchema`
- `packages/vercel/src/internal/VercelParameterConverter.ts:6-7`

---

## 9. 안티패턴

### 9.1 facade 층에 로직 심기 ❌
실제 로직은 ttsc emit + `_internal/*` functor. facade 는 marker.

### 9.2 interface 에 런타임 코드 ❌
`@typia/interface` 는 타입만.

### 9.3 namespace 이름 재편 ❌
9 namespace 이름은 사용자 코드 수만 개가 import 하는 surface. 이동 없음, 추가만 가능.

### 9.4 functor 에 side effect ❌
`_isFormatEmail.ts` 등에 `console.log`, `globalThis.*` 등 금지. Edge runtime 안전성.

### 9.5 MCP private API 확장 ❌
private 접근은 `McpControllerRegistrar.ts:101-190` 단일 지점.

### 9.6 Standard Schema 변형 ❌
vendor 는 `"typia"` 고정. `version: 1` 고정. tilde 필드 확장 금지. CI 의 `lint-standard-schema-invariant.sh` (§13.1) 가 grep 으로 차단.

### 9.7 executable CLI 를 typia 본체에 복원 ❌
v13 에서 삭제된 CLI 를 편의상 복원 금지. 단일 bin 은 `ttsc`.

### 9.8 TypeScript peerDependency 복원 ❌
v13 에서 L1 peer 삭제 후 "editor 지원 이유" 로 복원 금지. L5 만 예외 (§4.5).

### 9.9 LLM 어댑터에 typia 도메인 로직 ❌
ajv/Zod 외부 검증기 import 금지. `func.validate()` 만 호출.

### 9.10 `@typia/runtime` v13 조기 도입 ❌
[F §8.7 강제] v13 에서 `@typia/runtime` 신규 패키지 도입 금지. v14 이전 Setup wizard 가 `package.json.dependencies` 조작 금지.

### 9.11 `typia/lib/transform` 완전 삭제 ❌
[F §7.1 반영] v14 까지 no-op marker 파일로 유지. 삭제 시 사용자 tsconfig 수동 수정 강제 → P1 위반.

### 9.12 `bin.typia` proxy 영구화 ❌
[F §8.3] v13.3 에서 삭제. v14 이후 `typia` 커맨드 부재. 복원 금지.

---

## 10. 검증 체크리스트

### 10.1 API 불변 (CI)

- [ ] `typia.is<T>(input: unknown): input is T` 유지
- [ ] `typia.json.stringify<T>(input: T): string` 유지
- [ ] `typia.llm.controller<Class, Config>(name, execute, config?)` 유지
- [ ] 9 namespace 이름 변화 없음 (`grep "export \* as \w+ from"`)
- [ ] `createValidate<T>` 반환 타입에 `StandardSchemaV1<T, T>` 교차
- [ ] `TypeGuardError.IProps` 필드 불변

### 10.2 0-dep (interface)

- [ ] `packages/interface/package.json.dependencies` 빈 객체
- [ ] `packages/interface/lib/**/*.js` 에 함수·클래스·enum 0 건
- [ ] ES module 정적 분석: `@typia/interface` 가 다른 workspace 패키지 import 안 함

### 10.3 얇음 정량

- [ ] `packages/typia/src/**/*.ts` LOC 합 ≤ 3,500 (v13), ≤ 3,000 (v14) — `scripts/measure-loc.sh`
- [ ] `packages/typia/package.json.dependencies` ≤ 4 (v13)
- [ ] `packages/typia/package.json.peerDependencies` L1/L4 삭제 (v13)
- [ ] `packages/typia/src/executable/` 부재 (v13.0 + `@typia/ttsc` bin 동시 publish)
- [ ] `packages/typia/src/transform.ts` **존재**, 내용은 no-op marker (v13 ~ v14)
- [ ] `bin.typia` 부재 (v13.3)

### 10.4 Edge runtime 안전

- [ ] `grep -rE "eval\(|new Function\(" packages/typia/src packages/utils/src` → 0 hits
- [ ] `grep -rE "require\([^)]*\$\{" packages/typia/src/internal` → 0 hits
- [ ] Cloudflare Worker 에 `is / stringify / validate` emit → 200 OK
- [ ] Deno Deploy 스모크

### 10.5 Standard Schema

- [ ] `createValidate<T>()` 반환값의 `~standard.version === 1`
- [ ] `~standard.vendor === "typia"`
- [ ] `fixtures/standard-schema-parity/` 10 입력에서 TS ↔ Go emit `byte-equal` (v13.0.0-beta.1 gate)
- [ ] `packages/typia/test/path-parser.test.ts` 30+ state-machine fixture GREEN
- [ ] Standard Schema 공식 test suite (https://standardschema.dev) 통과
- [ ] `~standard.validate(badInput).issues[0].path` 가 `PathSegment[]` 구조

### 10.6 LLM 어댑터

- [ ] mcp/langchain/vercel 3 어댑터에서 `func.validate` 호출 존재
- [ ] mcp Preserve 모드: private `_registeredTools` 가 undefined 일 때 warn + fallback
- [ ] 3 어댑터 주간 CI: SDK `@latest`

### 10.7 Deprecation 메시지

- [ ] `typia/lib/transform` import 시 no-op marker (throw only when executed directly)
- [ ] `NoTransformConfigurationError` 메시지에 `ttsc` 및 `npx ttsc setup` 언급
- [ ] `@typia/utils` 루트 export import 시 (v13) deprecated warn
- [ ] `bin.typia` 실행 시 (v13.0~v13.2) "moved to `ttsc`" warn + exec

---

## 11. 미해결 질문 — Sub-3 결정 / Sub-4 이월 분리

### Sub-3 결정 완료 (Cycle 2 비판 반영)

**Q1 (해소)** — Standard Schema emit 단일화. §5.3. TS `_createStandardSchema` 단일 정본, Go emit 은 `_createStandardSchema(__fn)` 한 줄 호출. **v13.0.0-beta.1 이전** 완료 기한.

**Q2 (해소)** — OpenApi(V3/V3_1/SwaggerV2)TypeChecker 외부 사용자 접근. §4.4 임시 결론: v13 deprecation, v14 제거. (a) 옵션. 단 사용자 조사는 Sub-4 에서 최종 검증.

**Q3 (해소)** — `@typia/runtime` 도입 시점. **v14 확정**. §4.3. v13 에서는 `@typia/utils/runtime` subpath 분할만.

**Q6 (해소)** — TypeScript peerDependency 완전 제거 타이밍. §4.5. L1/L4 v13 삭제, L5 유지, L0/L3 dev-only. `ttsc setup` 이 `typescript` devDep 자동 추가.

**Q9 (해소)** — emit JS 의 import form. §3.4 rule 1. **named import 통일**. 템플릿 문법 `import { _isFormatEmail } from "typia/lib/internal/_isFormatEmail"` 고정.

### Sub-4 이월

**Q4 (이월)** — `randexp` 런타임 의존 유지 vs 인라인화. 제안: 유지 (목표 dep ≤ 4 에 포함). tree-shaking 검증을 E/F 와 공동으로.

**Q5 (이월)** — `comment-json` 동등 Go 포팅. F 가 `ttsc` CLI 내 tsconfig JSONC 파싱 필요. B/C 가 Go port 여부 결정.

**Q7 (해소)** — 13 namespace 공식 카운트. §3.2 참조. **9 import 지점 (A 공식, 외부 문서) + 13 기능 그룹 (D 내부)** 병존. A 가 Sub-4 에서 wiki 의 "13" 표현을 "9 import 지점" 으로 일괄 교체.

**Q8 (이월)** — `prepare/dev/build` 스크립트 통일. F (Release/DX) 협의.

**Q10 (이월)** — TypeGuardError 국제화. 제안: 현행 유지. 사용자가 `errorFactory` 파라미터로 i18n 구현.

### 신규 Sub-4 질문 (Cycle 2 파생)

**Q11 (신설)** — `src/transform.ts` no-op marker 의 v15 처리. 사용자 tsconfig plugins 항목 잔존율 조사 후 v15 major 에서 완전 삭제 여부 결정.

**Q12 (신설)** — Setup wizard 가 `dependencies` 를 조작하지 않을 때, v14 에서 `@typia/runtime` 을 자동 추가 방식. 옵션: (a) 사용자가 수동 `npm i @typia/runtime`, (b) `@typia/typia` 가 `@typia/runtime` 을 runtime dep 으로 선언 → 자동 전파, (c) `ttsc setup --v14` 가 `package.json` 조작. F §7.7 와 Sub-4 조율.

**Q13 (신설)** — `@typia/transform` v13 에서 `throw` stub 이 아니라 **no-op marker** 로 전환 (§3.6 반영). 이 전환의 v12 ts-patch 사용자 호환성은 `@typia/transform` 패키지 자체가 v12 버전을 유지하면 충분. 그러나 v13 사용자가 실수로 ts-patch 빌드를 돌리면 `noopTransform` 의 throw 메시지가 노출. 사용자 교육 문서 정합성을 F 와 확인.

---

## 12. 부록 A — v12 vs v13 파일 diff 미리보기

### 12.1 삭제 예정 파일

```
packages/typia/src/executable/                   (583 LOC)    — v13.0 (ttsc bin publish 동시)
packages/typia/src/programmers/TypiaProgrammer.ts (583 LOC)   — v13.0
packages/utils/src/converters/                    (전체)       — v13.0 (Go 이주)
packages/utils/src/http/internal/*Composer.ts     (전체)       — v13.0
packages/utils/src/validators/OpenApi*.ts         (Go 이주)    — v13.0~v14
packages/core/src/ 전체                           (30,307 LOC) — v14.0 (v13 은 stub)
packages/transform/src/ 전체                      (4,306 LOC)  — v14.0 (v13 은 stub)
```

### 12.2 유지·정리 파일

```
packages/typia/src/module.ts                     (811 LOC, 유지)
packages/typia/src/json.ts                       (유지)
packages/typia/src/llm.ts                        (481 LOC, 유지)
packages/typia/src/protobuf.ts                   (유지)
packages/typia/src/misc.ts                       (유지)
packages/typia/src/notations.ts                  (유지)
packages/typia/src/reflect.ts                    (76 LOC, 유지)
packages/typia/src/functional.ts                 (유지)
packages/typia/src/http.ts                       (유지)
packages/typia/src/TypeGuardError.ts             (146 LOC, 유지)
packages/typia/src/re-exports.ts                 (34 LOC, 유지)
packages/typia/src/internal/_*.ts                (147 runtime functors, 유지)
packages/typia/src/transformers/NoTransformConfigurationError.ts (메시지 개정 + <namespace>.<fn> 규약)
packages/typia/src/transform.ts                  (6 LOC → no-op marker ~10 LOC, v14 까지 유지)
```

### 12.3 신규 생성 (v13)

```
packages/utils/src/runtime/                      (subpath, LlmJson + NamingConvention 등)
packages/utils/src/runtime/index.ts              (exports 추가)
packages/typia/src/_deprecated/utils-alias.ts    (proxy, v14 에서 제거)
eslint-rules/facade-marker-pattern.js            (E §5.3)
eslint-rules/functor-name-match-go.js            (B §D-4)
scripts/measure-loc.sh                           (E §5.5)
scripts/count-functors.sh                        (E §5.5)
scripts/lint-standard-schema-invariant.sh        (E §5.2)
scripts/fuzz-path.go                             (E §5.4)
packages/typia/test/path-parser.test.ts          (E §5.4)
packages/ttsc/test/fixtures/standard-schema-parity/ (E §5.1)
```

### 12.4 v14 신규

```
packages/runtime/                                (@typia/runtime 신설, @typia/utils 흡수)
  src/index.ts
  src/TypeGuardError.ts
  src/_createStandardSchema.ts                   (이전 packages/typia/src/internal/ 로부터)
  src/_isFormat*.ts
  src/_httpRead*.ts
  src/_protobuf*.ts
  src/_random*.ts
  src/_jsonStringify*.ts
  src/_notation*.ts
  src/LlmJson.ts
  package.json
```

---

## 13. 부록 B — CI Lint 규칙 (확장)

### 13.1 ESLint / shell lint / 측정 스크립트

[C2-B §D-4, E §5.2, §5.3, §5.5 반영 — 6 rule 에서 9 rule 로 확장]

| # | 규칙 이름 | 검사 내용 | 집행 수단 |
|---|-----------|-----------|-----------|
| 1 | `no-eval-or-function-ctor` | `eval(*)` / `new Function(*)` 금지 | ESLint custom |
| 2 | `no-dynamic-require` | `require(\`${*}\`)` 금지 | ESLint custom |
| 3 | `facade-marker-pattern` | 9 facade 파일 export 함수는 `NoTransformConfigurationError()` 호출 필수 + 반환 타입 `never` | ESLint custom (E §5.3 구현 예시) |
| 4 | `no-runtime-in-interface` | `@typia/interface/src/**` 에서 `class` / `function` / `enum` 금지 | ESLint custom |
| 5 | `functor-single-named-export` | `packages/typia/src/internal/_*.ts` 파일당 정확히 1 named export | ESLint custom |
| 6 | `llm-adapter-validate-required` | `{mcp,langchain,vercel}/src/internal/*Registrar.ts` 에서 `func.validate` 호출 존재 | ESLint custom |
| 7 | `functor-name-match-go` (B §D-4 신설) | `packages/typia/src/internal/_*.ts` 파일 목록 = `packages/ttsc/internal/engine/metadata/functor_names.go` 상수 리스트 diff = ∅ | shell + node |
| 8 | `lint-standard-schema-invariant` (E §5.2 신설) | `vendor:\s*"typia"` 외 금지, `version:\s*1` 외 금지, grep | bash script |
| 9 | `loc-budget` (E §5.5 신설) | `packages/typia/src` LOC ≤ 3,500 (v13) / ≤ 3,000 (v14) | `scripts/measure-loc.sh` |

**CI job 배치**:
- `pnpm lint:facade` — 1~6 (ESLint custom)
- `pnpm lint:drift` — 7 (cross-language drift)
- `pnpm lint:standard-schema` — 8 (grep invariant)
- `pnpm lint:loc` — 9 (LOC budget)

모두 `.github/workflows/test.yml` 의 PR gate 에서 필수. `pnpm lint:drift` 실패 시 PR block (tsgolint 모델).

### 13.2 의존 검사 (madge/depcheck)

- `@typia/interface` in-bound edges: 0 (외부 workspace → `@typia/interface` 만).
- `@typia/typia` out-bound (v13): `{@typia/interface, @typia/utils, @standard-schema/spec, randexp?}` 이내.
- `@typia/typia` out-bound (v14): `{@typia/interface, @typia/runtime, @standard-schema/spec, randexp?}` 이내.
- `@typia/{mcp,langchain,vercel}` out-bound: `{@typia/interface, @typia/utils|runtime, <SDK-peer>}` 이내.

### 13.3 번들 크기 감시

- `@typia/typia` lib/ (minified) ≤ 120 KB (v13), ≤ 90 KB (v14)
- `@typia/interface` lib/ (minified) ≤ 20 KB
- `@typia/runtime` lib/ (minified) ≤ 80 KB (v14)

### 13.4 런타임 호환 매트릭스

| 런타임 | 버전 | 검증 |
|---|---|---|
| Node.js | ≥ 18 | full |
| Bun | ≥ 1.0 | full |
| Deno | ≥ 1.40 | full (JSR 배포 별도) |
| Cloudflare Workers | latest | smoke |
| Vercel Edge | latest | smoke |
| Deno Deploy | latest | smoke |
| Browser (modern) | ES2022+ | validator 호출 가능 |

---

## 14. Sub-3 합의 요청 — D 가 A/B/C/E/F 에 요청

본 개정 승인 전 다음 5 합의가 필요하다. 각 항목은 cross-role 결정.

### S-D-1. 9 namespace + 13 기능 그룹 용어 분리 (A 주관)
A 가 Sub-4 전에 wiki 의 "13 namespace" 표현을 "9 import 지점" 으로 일괄 교체. "13" 수치는 "기능 그룹 (D 세부)" / "programmer (C/B)" / "릴리스 항목 (F)" / "IR sum-type (B=12)" 4 개념을 문서·용어 지정.

### S-D-2. Standard Schema emit 단일화 (C 주관, D/B/E/F 합의)
C 가 v13.0.0-beta.1 이전 `ttsc/internal/engine/emitter/assert.go:63` 를 `_createStandardSchema(__fn)` 호출 emit 으로 교체. D 는 `_createStandardSchema.ts` 를 facade functor 로 못박음 (current state). E 는 `fixtures/standard-schema-parity/` 신설 + v13.0.0-beta.1 에 GREEN 강제. F 는 release.yml 에 standardschema.dev suite gating 추가.

### S-D-3. `@typia/runtime` v14 도입 확정 (F 주관, D/A 합의)
v13 에서 `@typia/runtime` 신규 패키지 금지. `@typia/utils/runtime` subpath 만 분할. v14 에서 `@typia/runtime` 신설 + `@typia/utils` unpublish. Setup wizard 가 `package.json.dependencies` 조작 금지 (v13 전체).

### S-D-4. `bin.typia` 단일화 (D 주관, F 합의)
v13.0~v13.2: warning shell + `ttsc` exec. v13.3: 완전 삭제. `npx typia setup` 문서 전량 `npx ttsc setup` 으로 교체. Setup wizard 소유권은 F (@typia/ttsc).

### S-D-5. `src/transform.ts` no-op marker 유지 (D 주관, F/A 합의)
v14 까지 no-op marker 파일로 유지. v15 재검토는 사용자 tsconfig 잔존율 조사 후. 삭제 시 P1 (빌드 스크립트 단어 치환) 위반이므로 v14 까지 무조건 보존. A BND-TSC-01 marker-only + C §2.5 resolve-skip 와 정합.

---

## 15. 감수 대상 표기 — Sub-4 이월 항목

본 Cycle 3 개정에서 해결 못한 항목, Sub-4 최종 감수에서 재검토:

1. **Q4**: `randexp` 인라인화 vs 유지. tree-shaking 검증 필요.
2. **Q5**: `comment-json` Go 포팅 여부 (B/C 결정).
3. **Q8**: `prepare/dev/build` 스크립트 통일 (F 결정).
4. **Q10**: TypeGuardError i18n (제안: 거부, errorFactory 로 해결).
5. **Q11**: `src/transform.ts` v15 완전 삭제 여부.
6. **Q12**: v14 `@typia/runtime` 자동 전파 방식 (Setup wizard 가 `dependencies` 조작 금지 원칙 하 3 옵션 중 선택).
7. **Q13**: `@typia/transform` v12 ts-patch 사용자 호환 문서 정합성 (F 확인).

---

*본 개정은 Cycle 2 A/B/C/E/F 초안 5 건의 D-관련 비판을 모두 반영. Q1·Q2·Q3·Q6·Q7·Q9 해소, Q4·Q5·Q8·Q10·Q11·Q12·Q13 Sub-4 이월. Sub-3 합의 5 건 (S-D-1 ~ S-D-5) 은 다른 역할 주관자가 수령·검토.*
