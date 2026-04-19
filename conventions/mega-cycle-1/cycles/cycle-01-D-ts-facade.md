# D. TS Facade Keeper — Cycle 1 초안

> 역할: `@typia/typia` + `@typia/interface` + `@typia/utils` (+ `@typia/mcp` / `@typia/langchain` / `@typia/vercel`) 의 **얇은 TS façade 층** 유지 규약.
> 전제: `@typia/core` 30,307 LOC 와 `@typia/transform` 4,306 LOC 는 **Go (ttsc engine/driver) 로 전부 이주**한다. TS 에 남는 것은 (a) 사용자 import 지점, (b) 0-dep 타입, (c) emit 된 JS 가 import 하는 런타임 헬퍼, (d) 외부 Node SDK 어댑터뿐.
> 단일 진실원: `wiki/08-tsgo-master-plan/16-package-port-boundary.md`.

본 문서는 사이클 1 초안. 다른 역할(A 경계 / B Go 엔진 / C ttsc 드라이버 / E QA / F 릴리스)과 인터페이스가 겹치는 지점은 **D 가 책임지는 표면**만 선언하고, 내부 구현은 각 역할에 위임한다.

---

## 1. 관장 범위와 핵심 원칙

### 1.1 범위 정의 — 어디까지가 D 인가

| 항목 | D 관장 | 이유 |
|---|---|---|
| `packages/typia/src/` (module.ts / json.ts / llm.ts / protobuf.ts / misc.ts / notations.ts / reflect.ts / functional.ts / http.ts) | ✅ | 사용자 import 지점 — 치환 대상 marker |
| `packages/typia/src/TypeGuardError.ts` | ✅ | emit JS 가 throw 하는 런타임 타입 |
| `packages/typia/src/internal/_*.ts` (147 functors) | ✅ | emit JS 가 `$importInternal(...)` 로 불러오는 런타임 helper |
| `packages/typia/src/transformers/NoTransformConfigurationError.ts` | ✅ | 치환 미적용 시 "typia.xxx() was called without ttsc transform" placeholder |
| `packages/typia/src/executable/` (setup/patch/generate) | 🟡 삭제/이관 | `@typia/ttsc` 바이너리 CLI 로 이동. D 는 **삭제 책임**만. 신규 CLI 는 F (Release/DX) 소관. |
| `packages/typia/src/transform.ts` (= `@typia/transform` re-export) | ❌ 삭제 | v13 에서 완전 제거 (ts-patch 경로 종결) |
| `packages/interface/src/` 전체 | ✅ | 0-dep 순수 타입. tags / openapi / schema / protobuf / typings / metadata / http / utils |
| `packages/utils/src/` | 🟡 분할 | runtime 부 → TS 유지, 변환부 (OpenApi/LlmSchemaConverter, Migration, Validator) → Go 이주 |
| `packages/mcp/src/`, `packages/langchain/src/`, `packages/vercel/src/` | ✅ | Node-SDK peerDep. TS 유지 |
| `packages/core/src/`, `packages/transform/src/` | ❌ | B/C 의 Go 포팅 영역 (v13 에 deprecated, v14 제거) |
| `packages/unplugin/src/`, `packages/ttsc/` | ❌ | F 의 빌드/런쳐 영역 (D 는 `@typia/ttsc` 바이너리를 "소비" 할 뿐) |

### 1.2 핵심 원칙 7 개

1. **사용자 API 불변 (API-Frozen)** — `typia.is<T>(input)` · `typia.json.stringify<T>(x)` · `typia.llm.controller<T>(...)` 등 **시그니처가 단 한 글자도 바뀌지 않는다**. 새 오버로드는 기존 호출을 깨지 않는 한에서만 허용. Cycle A/F 와 공유하는 최상위 불변식.
2. **0-dep 타입 (interface)** — `@typia/interface` 는 컴파일 타임에만 의미있는 순수 타입. 어떤 런타임 dependency 도 추가 불가. dev dep 으로도 `typescript` 외 금지.
3. **얇게의 정량 기준 (thin-quantified)** — `@typia/typia` source LOC 는 **7,544 → ≤ 3,500 LOC** (목표 ~3K, 상한 3.5K) 로 축소. 감축은 오직 (a) `executable/` 이전, (b) `transform.ts` 삭제, (c) programmers/ 디렉터리 (이미 단일 파일 583 LOC) 제거로 달성한다. marker API 본체 (module/json/llm/...) 는 **절대 줄이지 않는다** — TSDoc · 오버로드 안정성은 dx 의 핵심 자산.
4. **13 namespace 유지** — 현재 모듈 구조에서 `export * as <name>` 으로 노출되는 namespace 와 최상위 export 의 수를 보존. 실측: module.ts 에 `functional/http/llm/json/misc/notations/protobuf/reflect` 8 개가 namespace 로 붙어 있고, 최상위에 `assert/assertGuard/is/validate/equals/assertEquals/assertGuardEquals/validateEquals/random` + `createXxx` factories 가 평면적으로 노출. `tags` 는 `@typia/interface` 에서 재수출. 이 전체 구조가 **13 namespace (8 sub + 5 top-level 그룹: validators / strict / random / factory / error)** 의 합의. 축소·재편 금지.
5. **Edge runtime 호환 (no-eval)** — 모든 런타임 TS 코드는 `eval` · `new Function(code)` · `require()` (동적) · top-level `process` 접근 금지. `static import` 만 허용. Cloudflare Workers / Vercel Edge / Deno Deploy / Bun 에서 그대로 작동.
6. **Standard Schema 주입 고정** — `createValidate<T>()` / `createValidateEquals<T>()` 반환값에 `"~standard"` 속성 부착. 규약은 `packages/typia/src/internal/_createStandardSchema.ts:8` 의 현행 구현을 정본. Go emitter (`ttsc/internal/engine/emitter/assert.go:63`) 가 동일 레이아웃을 emit 하도록 C 와 계약.
7. **LLM 어댑터 페어 유지** — `mcp/langchain/vercel` 3종 어댑터는 각 SDK 의 버전 변동에 대응하는 **최소 얇은 변환**만. typia 의 도메인 로직 (검증·coerce·parse) 은 `ILlmFunction.{validate,coerce,parse}` 메서드에 격리. 어댑터는 이들을 감싸기만 한다.

---

## 2. `@typia/interface` 규약 (0-dep, 타입 only)

### 2.1 절대 조건

- `package.json.dependencies` 는 **공백**이어야 한다 (현행 유지). 단, dev dep 은 `rimraf` · `typescript` 둘만 허용.
- 런타임 JS 배포물에 **`enum` / `class` / top-level 함수** 가 존재해서는 안 된다. 현재도 타입 + `tags/TagBase` 의 phantom property (runtime 무비용) 만 존재 — 이 상태 유지.
- `export *` 진입점은 `src/index.ts` 의 **7 barrel + `tags` namespace** (`http/schema/openapi/typings/utils/metadata/protobuf` + `tags`) 고정. 추가 시 이 파일에 한 줄 늘릴 뿐이며 barrel 간 상호 의존은 금지.
- 타입 파일 한 건의 크기 상한 **500 LOC**. 예외: `ILlmSchema.ts` (현행 473 LOC 근접, 모델 진화로 예상 확장 감안하여 600 LOC 까지 허용).

### 2.2 LLM 표준 분열 대응

`~standard` 로 외부 인터페이스는 고정하되, LLM provider (OpenAI strict / Anthropic / Google / Llama / Gemini) 는 매해 신규 모델로 스키마 제약이 변동한다. `ILlmSchema.IConfig` 가 단일 compatibility dial — 대응 규약:

1. 새 provider 용 config 플래그를 **추가**만 한다. 기존 플래그의 의미는 제거·수정 불가.
2. provider-specific 모델 이름은 `IConfig.model`/`IConfig.strict` 조합으로 표현. provider enum 도입 금지 (모델 추가 때마다 semver-major 를 유발).
3. 신규 LLM 모델로 인한 스키마 필드 확장은 `ILlmSchema.IConfig.extensions?: Record<string, unknown>` 같은 open map 으로 수용. Go 엔진 (B) 이 이 map 을 로스리스 패스스루 하도록 계약.

### 2.3 tags 시스템

- 현재 21 export (`Constant/ContentMediaType/Default/Example/Examples/ExclusiveMin(Max)imum/Format/JsonSchemaPlugin/Maximum/MaxItems/MaxLength/Minimum/MinItems/MinLength/MultipleOf/Pattern/Sequence/Type/UniqueItems/TagBase`) 유지.
- 새 tag 추가 시:
  1. `validate` 필드의 코드 템플릿 문자열 (`"$importInternal(\"isTypeInt32\")($input)"`) 포맷을 **절대** 바꾸지 않는다. Go emitter 가 이 템플릿을 parse 한다 — A/B/C 와의 계약.
  2. 해당 tag 의 런타임 체크가 필요하면 `@typia/typia/src/internal/_isTypeXxx.ts` 또는 `_isFormatXxx.ts` 를 **동시에** 추가.
  3. `exclusive` 필드로 충돌 관리 (Format vs Pattern, Type vs TypeOf). 단일 속성에 중복 tag 허용 여부는 이 필드 값으로 결정.

### 2.4 호환성 규칙

- `IValidation<T>` · `IResult<T,E>` · `IRandomGenerator` · `ILlmApplication<T>` · `ILlmController<T>` · `IHttpLlmController` · `IJsonSchemaApplication` — 이들은 **외부 사용자가 import 하는 surface**. 필드 추가는 `optional` 로만. 필수 필드 추가는 semver-major.
- `Primitive<T>` · `Resolved<T>` · `CamelCase/PascalCase/SnakeCase` — 유틸리티 타입. 사용자 라이브러리가 type-of-type 으로 의존할 가능성이 있어 확장·변경 금지.
- OpenApi 4-way 모델 (`OpenApiV3 / V3_1 / SwaggerV2 / OpenApi`) 중 Emended `OpenApi` 가 typia 내부 표준. Go 엔진은 이 Emended 만 이해. 외부 인풋은 Go 측 converter (구 `OpenApiConverter`) 가 Emended 로 정규화 후 엔진에 전달.

---

## 3. `@typia/typia` facade 규약 (marker API, namespace 13)

### 3.1 marker 함수 패턴 (고정)

현재 모든 public API 는 동일한 "overload + `never` 반환" 패턴을 따른다:

```ts
// 1) "T 생략 시 타입 오류" 유도 오버로드
export function is<T>(input: T): input is T;
// 2) "T 명시 + unknown 입력" 실제 사용 오버로드
export function is<T>(input: unknown): input is T;
// 3) 런타임 구현 — ttsc 가 치환하기 전에 호출되면 throw
/** @internal */
export function is(): never {
  NoTransformConfigurationError("is");
}
```

규약:

1. **세 줄 골격 불변**. `T`-부재 경고 오버로드 + `unknown` 입력 오버로드 + `() => never` 구현부.
2. 구현부는 **반드시** `NoTransformConfigurationError("<namespace>.<name>")` 호출. 메서드명 문자열이 에러 메시지에 그대로 박히므로 namespace 경로 (`json.stringify`, `llm.controller` 등) 를 정확히 쓴다.
3. `/** @internal */` 주석은 API docs 생성 시 숨겨지므로 필수.
4. 신규 함수 추가는 **이 패턴을 복사**해야 한다. 유틸 함수나 "진짜" 런타임 동작을 facade 에 넣지 않는다 — 그것은 `internal/_xxx.ts` 의 몫.

### 3.2 13 namespace — 구조와 불변

실측 namespace + 최상위 그룹 (합계 13):

| # | 분류 | 위치 | 주요 함수 |
|---|------|------|---------|
| 1 | validators (loose) | `module.ts` 상위 | `is / assert / assertGuard / validate` + factories |
| 2 | validators (strict) | `module.ts` 상위 | `equals / assertEquals / assertGuardEquals / validateEquals` + factories |
| 3 | random | `module.ts` 상위 | `random / createRandom` |
| 4 | error | `TypeGuardError.ts` | `TypeGuardError` + `TypeGuardError.IProps` |
| 5 | `typia.json` | `json.ts` | `schema / schemas / application / parse 계열 / stringify 계열 + factories` |
| 6 | `typia.llm` | `llm.ts` | `controller / application / parameters / schema / structuredOutput / parse / coerce + createParse/createCoerce` |
| 7 | `typia.protobuf` | `protobuf.ts` | `message / encode / decode / assertEncode / assertDecode` |
| 8 | `typia.misc` | `misc.ts` | `clone / prune / literals` + 세 종류 (assert/is/validate) 변이 |
| 9 | `typia.notations` | `notations.ts` | `camel / pascal / snake` + 변이 |
| 10 | `typia.reflect` | `reflect.ts` | `schema / schemas / name` |
| 11 | `typia.functional` | `functional.ts` | `assertFunction / assertParameters / assertReturn` + is/validate/equals 변이 |
| 12 | `typia.http` | `http.ts` | `formData / queryObject / headers / parameter` + is/assert/validate 변이 |
| 13 | re-exports (from `@typia/interface`) | `re-exports.ts` | `IValidation / tags / OpenApi / ILlm* / Primitive / Resolved / ...` |

규약:

1. 이 13 카테고리는 **고정**. 재분류·이름변경 금지. 예컨대 `typia.misc.clone` 을 `typia.clone` 으로 승격 금지 (모든 사용자 코드 파괴).
2. 새 namespace 추가는 **semver-minor 에서만 허용**. 추가 시 `module.ts` 에 `export * as <new> from "./<new>"` 한 줄, 별도 파일로 분리.
3. 각 namespace 파일 상단 블록 주석 (`/* === ... === */`) 은 목록 구분용. TSDoc 렌더러가 섹션화하는 근거 — 유지.
4. 각 함수의 JSDoc 은 **Related functions 절** + **Template/Param/Returns/Throws/Danger** 태그 세트 를 포함. 이는 LLM-friendly DX (user-facing docs 가 학습 데이터로 쓰인다) 의 핵심. TSDoc 생략 금지.

### 3.3 placeholder 에러 메시지 규약 (post-v13)

현행 메시지:

```
Error on typia.<name>(): no transform has been configured.

Read and follow https://typia.io/docs/setup please.
```

v13 부터는 ts-patch 가 사라지므로 메시지를 다음으로 교체:

```
Error on typia.<name>(): ttsc transform has not been applied.

Run `npx typia setup` (configures @typia/ttsc and tsconfig.json),
or replace `tsc` with `ttsc` in your build script.

If already configured, rebuild with `ttsc` to regenerate emit.
```

- 메시지 상수화 위치: `packages/typia/src/transformers/NoTransformConfigurationError.ts` 한 곳. 다른 파일에서 생성 금지.
- "Read and follow https://typia.io/docs/setup" 링크는 유지하되 `/docs/setup/ttsc` 로 마이그레이션 (F Release/DX 와 조정).
- 메서드명 `${name}` 은 항상 `<namespace>.<fn>` 형태로 전달. `"is"` 는 root, `"llm.controller"` 는 서브. Go driver 가 emitter 에서 이 형식을 전제로 에러 경로를 복원한다.

### 3.4 `packages/typia/src/internal/_*.ts` (functors)

- 현재 **147 functors** 존재 (format 검사 22 + http reader 25 + random generator 31 + protobuf 4 + json stringify 4 + notation 4 + validation/assert 4 + 기타). 이들은 ttsc 가 emit 한 사용자 JS 가 `from "typia/lib/internal/_isFormatEmail"` 꼴로 static import 한다.
- 규약:
  1. **파일 하나 = 함수 하나 = 기본 export 하나**. `_isFormatEmail.ts` 가 `_isFormatEmail` 함수를 export. Go emitter 가 파일명-함수명 1:1 매핑을 전제로 import path 를 합성.
  2. 파일명 prefix `_` (single underscore) 고정. private/__ 는 이중 underscore 규칙 (notations/private/__notationCapitalize.ts 같이) — 이 층 분리도 유지.
  3. 각 functor 는 **pure function** + **no side effects** + **no top-level state**. Edge runtime 에서 동일 모듈이 여러 isolate 에 공유될 수 있다.
  4. dependency: `@typia/interface` (타입) + 다른 `_xxx.ts` functor 만. `@typia/utils` 에 대한 의존은 **허용하되 최소화** — `TypeGuardError` 는 이미 `@typia/typia` 내 `TypeGuardError.ts` 로 소유된다. utils 의존이 필요하면 runtime 서브셋만.
  5. 패키지 `exports` 맵의 `"./lib/internal/*": "./src/internal/*.ts"` 엔트리는 ttsc emitter 의 계약. 변경 금지.

### 3.5 `executable/` 제거 규약

현행 `packages/typia/src/executable/` (583 LOC) 의 3 커맨드:

- `typia setup` — PackageManager detect + inquirer + ts-patch 설치 + tsconfig plugin 추가 + `ts-patch install` 실행
- `typia patch` — JSDoc parseAll 패치 (5.3+ 대응)
- `typia generate --input --output` — offline generate mode

ttsc 시대에서:

- `typia setup` 은 **ttsc 로 이전**. D 는 `packages/typia/src/executable/` 를 v13 브랜치에서 **삭제**. 단, `package.json.bin.typia` 는 유지 — 엔트리가 `@typia/ttsc` CLI proxy 로 위임하게 F 가 재작성.
- `typia patch` — **완전 삭제**. 5.3+ 패치는 tsgo 무관.
- `typia generate` — `@typia/ttsc generate` 로 이전. TS 코드 삭제.

D 의 책임: 이전 완료 확인 후 `src/executable/` 폴더 rm, `package.json.dependencies` 에서 `inquirer` · `commander` · `comment-json` · `package-manager-detector` 제거 (F 가 ttsc 쪽에서 새로 흡수).

### 3.6 `src/transform.ts` 제거

현행:
```ts
import transform from "@typia/transform";
export default transform;
export * from "@typia/transform";
```

+ `package.json.exports`:
```json
"./lib/transform": "./src/transform.ts"
```

v13 삭제:
- `src/transform.ts` 파일 삭제
- `package.json.exports` 에서 `"./lib/transform"` 엔트리 삭제
- `package.json.dependencies` 에서 `@typia/transform` 제거
- `package.json.dependencies` 에서 `@typia/core` 제거 (ttsc 가 바이너리로 들고 감)

**deprecated import path 호환**: 2 minor version 간 (v13.0 → v13.2) 은 `./lib/transform` 을 import 하면 런타임 에러 `"@typia/transform is removed in v13. Use @typia/ttsc."` 를 throw 하는 stub 을 내버려둔다 (shim). v13.3 부터 완전 제거. 이 stub 의 코드 위치는 D 가 신규 `src/_deprecated/transform.ts` 로 관리.

### 3.7 LOC 목표 (thin-quantified)

| 현재 (v12) | v13 목표 | v14 목표 | 감축 원천 |
|---|---|---|---|
| source ~7,544 LOC (typia src 전체) | ≤ 3,500 | ≤ 3,000 | `executable/` -583, `transform.ts` -5, doc 주석 유지, programmers/ -583 |
| dependencies 수 (런타임) 9 | ≤ 4 | ≤ 3 | ts-patch/commander/inquirer/comment-json/package-manager-detector/randexp 제거 |
| peer dependencies | `typescript >=4.8.0 <5.10.0` | **삭제** | tsgo 전용이면 ttsc 바이너리가 관리 |

런타임 의존 최종 상한: `@standard-schema/spec` + `@typia/interface` + `@typia/utils` (runtime subset) + (optional) `randexp` — randexp 는 `_randomPattern.ts` 가 emit JS 에서 쓰므로 유지 or 인라인화.

---

## 4. `@typia/utils` 규약 (런타임/변환부 분리)

### 4.1 현재 상태 (실측)

- 전체 11,715 LOC / 4 top-level barrel (`converters/ http/ utils/ validators/`).
- `converters/` — `LlmSchemaConverter`, `OpenApiConverter` + internal 에 `CoerceLlmArguments / parseLenientJson / stringifyValidationFailure / OpenApiTypeCheckerBase / JsonDescriptor / EndpointUtil`. **변환부** (빌드 타임에 core 가 호출).
- `http/` — `HttpError`, `HttpLlm`, `HttpMigration` + internal 12 composer/migrator. **변환부** (OpenAPI → LLM / HTTP migration).
- `utils/` — `LlmJson`, `StringUtil`, `NamingConvention`, `ArrayUtil`, `MapUtil`, `Singleton`, `dedent` + internal format checker 23 개. **런타임 + 변환 혼재**. Format checker (`_isFormatEmail/_isFormatUuid/...`) 는 `typia/src/internal/` 에도 중복 존재 — 11개 포맷 검사기는 사실상 복사본.
- `validators/` — `LlmTypeChecker`, `OpenApiTypeChecker` (V3 / V3_1 / SwaggerV2) + `OpenApiValidator`. **변환부**.

### 4.2 분할 규약

**runtime subset → `@typia/runtime` 로 개명 또는 `@typia/utils/runtime` subpath**:
- 포맷 검사기 23 (`_isFormatEmail / Uuid / Ipv4 / Ipv6 / Uri / Url / Regex / Pattern / Hostname / Email / Date / Time / DateTime / Duration / Byte / JsonPointer / RelativeJsonPointer / IdnEmail / IdnHostname / Iri / IriReference / Password / UriReference / UriTemplate`) — 단, 이 전부는 이미 `@typia/typia/src/internal/` 에 동일 함수로 존재한다. **중복 제거 원칙**: 런타임 functor 는 **`@typia/typia/src/internal/` 에만** 두고 `@typia/utils` 에서는 삭제. 다른 패키지가 validator 용도로 이들을 import 하는 케이스는 `@typia/typia/lib/internal/_isFormatEmail` 경로로 통일.
- `LlmJson`, `TypeGuardError` (이미 typia 쪽), `NamingConvention` (naming 관련 emit JS 도우미) — `@typia/runtime` 으로 이전.
- `ArrayUtil/MapUtil/Singleton/StringUtil/dedent` — 빌드 타임 변환 헬퍼성이 강함. Go 이전 대상 OR 테스트/내부 전용. 사용자가 직접 import 하는 용도면 `@typia/runtime` 포함, 아니면 삭제.

**변환부 → Go 이전 (B 소관)**:
- `converters/` 전체 (OpenApiConverter, LlmSchemaConverter) → Go `ttsc/internal/engine/openapi/`, `ttsc/internal/engine/llm/`.
- `http/HttpLlm`, `http/HttpMigration`, `http/internal/*Composer/*Migrator/*Upgrader/*Downgrader` → Go `ttsc/internal/engine/http/`.
- `validators/OpenApi(V3/V3_1/SwaggerV2)TypeChecker`, `OpenApiValidator` → Go `ttsc/internal/engine/validator/`.

**D 의 책임**:
- `packages/utils/src/` 에서 **삭제되는 디렉터리와 삭제되는 export symbol 목록을 정확히 관리**. A (Boundary) 에게 각 deprecated symbol 의 사용자 수 조사 요청 (semver-major 판단).
- runtime subset 의 `tsconfig.json` target 이 **ES2020** 아래 + Edge 호환 (top-level `process` / `require` 금지) 인지 검증.

### 4.3 `@typia/runtime` 패키지 디자인

제안 구조:
```
@typia/runtime
├── src/
│  ├── index.ts          // re-export
│  ├── TypeGuardError.ts  // (typia 의 것을 import? 또는 이쪽 단일 출처?)
│  ├── _isFormat*.ts      // format checkers (23)
│  ├── _httpRead*.ts      // FormData / query / header readers
│  ├── _protobuf*.ts      // ProtobufWriter / Reader / Sizer
│  ├── _random*.ts        // random generators (필요 시)
│  ├── _jsonStringify*.ts // json stringify helpers
│  ├── _notation*.ts      // camel/pascal/snake converters
│  └── _createStandardSchema.ts  // ~standard 주입
└── package.json
```

쟁점 (11절 미해결 질문으로 이관):

- **단일 출처 결정**: TypeGuardError / format checker 등 functor 를 `@typia/typia/src/internal/` vs `@typia/runtime/` 어느 쪽에 둘 것인가? A 와 협의 필요.
- `@typia/typia` 가 더 얇아지려면 functor 들을 `@typia/runtime` 으로 옮기고 `typia/lib/internal/*` 는 re-export 가 되어야 함. 그러나 ttsc emitter 가 **import 경로 를 바꾸면 모든 v12 이하 버전의 emit JS 와 호환 깨짐**. 호환을 위해 v13 에서는 typia 쪽에 남기고, v14 에서 runtime 단일화를 semver-major 로 단행하는 것이 안전.

**v13 결론 (보수)**: functor 들은 `@typia/typia/src/internal/` 에 계속 남긴다. `@typia/utils` 의 변환부만 제거하고 런타임 도우미 (`LlmJson`, `NamingConvention` 등) 을 `@typia/runtime` 에 발췌한다. 본격 단일 출처화는 v14.

### 4.4 utils/validators 의 OpenApi checker 처리

`OpenApiV3TypeChecker` 등은 **typia 외부 사용자** (HttpLlm 이나 Nestia 쓰는 사람) 가 직접 호출하는 surface 다. Go 이전 시 다음 중 하나:

(a) Go 만 두고 TS 에선 제거 — 사용자 breaking change.
(b) TS 얇은 wrapper 를 남겨 Go binary 의 서브 커맨드로 forwarding (예: `@typia/ttsc validate --schema <json>`).
(c) Go 코어 로직을 WASM 으로 빌드 → TS 에서 import — overhead 큼.

**제안**: (a) + 호환 기간. v13 에서 deprecation warning, v14 에서 제거. 외부 사용자는 `@nestia/` 내부 마이그레이션으로 흡수. 쟁점은 A (Boundary) 와 의논 (미해결 Q2).

---

## 5. Standard Schema 통합 규약

### 5.1 현재 구현 정본

`packages/typia/src/internal/_createStandardSchema.ts` (134 LOC) 는 다음 레이아웃으로 `~standard` 를 주입:

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

부착 대상: `createValidate<T>()` 와 `createValidateEquals<T>()` 의 반환값. 시그니처에 이미 교차 타입으로 명시 (`((input: unknown) => IValidation<T>) & StandardSchemaV1<T, T>`).

### 5.2 경로 변환 규약

`typiaPathToStandardSchemaPath` (134 LOC 의 절반을 차지) 는 typia 의 `"$input.foo[0][\"bar\"]"` 형태 path 를 Standard Schema 의 `readonly PathSegment[]` 로 변환. 4 state parser (`Start / Property / StringKey / NumberKey`). 현행 구현이 정본 — Go emitter 에서 동일 파서를 포팅할 경우도 동일 state machine 유지.

### 5.3 Go emitter 와의 계약

`packages/ttsc/internal/engine/emitter/assert.go:63` 의 현행 emit:

```
(() => {
  const __fn = <validate_impl>;
  __fn["~standard"] = {
    version: 1,
    vendor: "typia",
    validate: (input) => {
      const r = __fn(input);
      return r.success
        ? { value: r.data }
        : { issues: r.errors.map(e => ({
            message: "expected " + e.expected + ", got " + (typeof e.value) + " " + JSON.stringify(e.value),
            path: String(e.path).split(".").slice(1)
          })) };
    }
  };
  return __fn;
})()
```

규약 (D ↔ C 계약):

1. **두 구현이 동일해야 한다**. TS 의 `_createStandardSchema` 와 Go 의 `assert.go:63` emit 는 **외부 관측 동치**여야 한다 (동일 입력 → 동일 `~standard.validate` 결과).
2. 그러나 현재 두 구현이 **다르다**:
   - TS 는 `typiaPathToStandardSchemaPath` 로 정교한 path segment 를 만들지만, Go emit 은 `String(e.path).split(".").slice(1)` 로 단순 split. bracket notation (`["foo"]`) 이 있을 때 결과 상이.
   - TS 의 message 는 `"expected X, got Y"` (value 원본), Go 는 `"expected X, got <typeof> <JSON.stringify(value)>"`.
3. **해결 제안**: Go 쪽이 TS 의 로직을 따라가게 맞춘다 (TS 가 정본). 또는 둘 다 공통 런타임 helper `_createStandardSchema` 를 import 하게 한다 — 후자가 **원칙** (런타임 헬퍼는 `@typia/typia/src/internal/` 단일 출처, ttsc emit 은 `import { _createStandardSchema } from "typia/lib/internal/_createStandardSchema"` + `_createStandardSchema(__fn)` 만 emit).
4. C 에게 요청: `assert.go:63` 의 inline emit 을 **`_createStandardSchema(__fn)` 호출 한 줄**로 줄인다. 이는 B/C/D 공통 미해결 질문 Q1.

### 5.4 향후 Standard Schema v2 대응

- `version: 1` 은 Standard Schema v1 고정. v2 출시 시 별도 분기.
- vendor 는 `"typia"` 고정. 변경 금지 (다른 라이브러리가 `vendor === "typia"` 감지하는 경우 대응).
- `~standard` 필드명 앞 tilde 는 Standard Schema spec 에서 "user 가 직접 건드리지 않는 metadata" 관례. 다른 tilde 필드 (`~internal`, `~typia` 등) 추가 금지 — 스펙 외 확장은 단명.

---

## 6. LLM adapter 규약 (mcp/langchain/vercel)

### 6.1 공통 골격

```
for controller in props.controllers:
  for func in controller.application.functions:
    const tool = makeTool({
      name: (prefix ? `${controller.name}_` : "") + func.name,
      description: func.description,
      schema: func.parameters,                    // ILlmSchema.IParameters = JSON Schema 부분집합
      execute: async (args) => {
        const validated = func.validate(args);    // typia 가 이미 만들어준 validator
        if (!validated.success) {
          return LlmJson.stringify(validated);    // LLM 에게 돌려줄 error 포맷
        }
        return await func(args);                  // coerce 된 후 실행
      },
    });
```

규약:

1. **3 어댑터가 동일 패턴** 을 따른다. 각 `internal/<Sdk>ToolsRegistrar.ts` 의 `convert / register` 메서드 본체는 `for ... for ... makeTool(...)` 3 중 루프.
2. `func.validate / func.coerce / func.parse` 는 typia 내부 logic 이므로 외부 SDK 변동과 격리. 어댑터는 이들을 **호출만** 한다.
3. 어댑터 본체 LOC 상한 **300 LOC** (현행 mcp 330 LOC 로 약간 초과 — Preserve 모드 때문. 일반 모드는 150 LOC 이하).

### 6.2 개별 규약

#### MCP (`@typia/mcp`, 현행 397 LOC)
- `McpServer` 와 raw `Server` 둘 다 지원.
- **Preserve 모드** (`preserve: true`) 는 SDK private `_registeredTools / _toolHandlersInitialized` 에 접근. **위험도 최고** — SDK 업그레이드 시 가장 먼저 깨지는 지점.
- 규약:
  1. private API 접근 부분은 **단일 함수** (`McpControllerRegistrar.ts:101-190`) 에 격리. 타 함수에서 private 접근 금지.
  2. private API 부재 (`undefined` 체크) fallback: preserve 모드 비활성화 + 콘솔 warning. throw 금지 — 사용자 앱 crash 방지.
  3. CI 에서 `@modelcontextprotocol/sdk` **latest** 를 매주 검증 (E QA 협의).
  4. Zod 의존 (`zod-to-json-schema` dep, `zod` devDep) 은 MCP SDK 가 Zod 스키마만 받던 과거 흔적. SDK 가 raw JSON Schema 지원으로 전환하면 **제거**.

#### LangChain (`@typia/langchain`, 현행 213 LOC)
- `DynamicStructuredTool` 이 JSON Schema 직접 수용하므로 변환 없음.
- 규약: `schema: func.parameters` 그대로 전달. 중간 변환 레이어 추가 금지 (미래 LangChain 이 Zod 전용으로 바뀌어도 **우회 avoidance** — 사용자에게 bridge 를 소개할지언정 typia 가 Zod 어댑터 코드를 떠안지 않는다).

#### Vercel (`@typia/vercel`, 현행 329 LOC)
- `jsonSchema<object>(parameters as JSONSchema7)` 로 Vercel AI SDK 의 `Schema` 타입으로 변환 (`VercelParameterConverter.ts:6-7`). 단 8 LOC.
- `toVercelTools` + `toVercelSchema` (structured output 용) 2 진입점.
- 규약: Vercel SDK v6 의 `ai` 패키지 버전 pin 보수적 (6.0.0 이상). 6.x 내 breaking 시 peer range 조정.

### 6.3 신규 어댑터 가이드

커뮤니티가 BAML / Mastra / Genkit / Anthropic Agent SDK / OpenAI Agents SDK 등 추가 어댑터를 PR 할 때:

- 패키지 이름 `@typia/<adapter>` 고정.
- `src/index.ts` 는 `toXxxTools(props)` 단일 export (또는 2 export: tools + schema).
- `internal/XxxToolsRegistrar.ts` 에 3 중 루프 본체.
- `internal/XxxParameterConverter.ts` 가 필요하면 추가. 이외 파일 최소화.
- `package.json.peerDependencies` 에 SDK 1 종, `dependencies` 에 `@typia/interface` + `@typia/utils` (런타임 subset).
- README 예제는 OpenAI / Anthropic / Google 중 2 이상 커버.

### 6.4 LlmJson 의존

3 어댑터 모두 `LlmJson.stringify()` 로 validation failure 를 LLM-친화 포맷으로 직렬화. 이 함수는 `@typia/utils/src/utils/LlmJson.ts` 에 있다 — **런타임 subset 으로 분류**해 `@typia/runtime` 에 포함해야 한다. D 의 책임: 4.3 절의 `@typia/runtime` 디자인 시 `LlmJson` 포함 확인.

---

## 7. 구 core/transform 이 Go 로 이주한 뒤 TS 에 남는 표면

### 7.1 사용자 import 관점

v12 사용자 코드:
```ts
import typia from "typia";
import { IValidation, tags } from "typia";   // 또는 @typia/interface
import { TypeGuardError } from "typia";
import { LlmJson } from "@typia/utils";
import { toVercelTools } from "@typia/vercel";
```

v13/14 에서도 **위 5 줄은 한 글자도 바뀌지 않는다**. 이는 D 의 최상위 KPI.

v12 에서 가능했던 것 중 v13 에서 **제거**되는 것:
```ts
import transform from "typia/lib/transform";  // ❌ v13 에서 stub throw, v13.3 완전 제거
```

### 7.2 패키지 dependency graph (목표)

```
@typia/interface   (0 deps)
      ↑
@typia/runtime     (@typia/interface)         // NEW in v13 or v14
      ↑
@typia/typia       (@typia/interface, @typia/runtime, @standard-schema/spec)
      ↑
@typia/mcp         (@typia/interface, @typia/runtime, [mcp-sdk peer])
@typia/langchain   (@typia/interface, @typia/runtime, [langchain/core peer])
@typia/vercel      (@typia/interface, @typia/runtime, [ai peer])
```

- `@typia/core` · `@typia/transform` · `@typia/utils` 는 v13 에서 **삭제/빈 shim** 상태.
- `@typia/ttsc` 는 이 그래프와 **독립** (사용자 빌드에서만 `devDependency`).

### 7.3 버전 호환 레인

**v13 (2027 Q2 preview → 2028 Q2 stable)**:
- API 불변 (typia marker API 전부).
- ttsc 필수. ts-patch 경로 제거 (v12 사용자는 `npx typia setup` 재실행 → `ttsc` 로 전환).
- `@typia/runtime` subpath 등장 (`@typia/utils` 는 deprecated alias).
- `@typia/transform` · `@typia/core` 는 peer stub (`throw "migrate to ttsc"`).
- TypeScript peer: **삭제** — tsgo 전용, ttsc 바이너리가 내장 tsgo 를 사용.

**v14 (2029 Q2)**:
- `@typia/runtime` 이 정식 (기본) 경로. `@typia/utils` 완전 제거.
- `@typia/transform` / `@typia/core` npm 패키지 **unpublish** (또는 tombstone 버전 + deprecation).

### 7.4 import 경로 호환 테이블

| v12 import | v13 결과 | v14 결과 |
|---|---|---|
| `import typia from "typia"` | ✅ 동일 | ✅ 동일 |
| `import { IValidation } from "typia"` | ✅ 동일 | ✅ 동일 |
| `import { ILlmSchema } from "@typia/interface"` | ✅ 동일 | ✅ 동일 |
| `import { LlmJson } from "@typia/utils"` | 🟡 deprecated warning, 작동 | ❌ 제거 → `@typia/runtime` |
| `import { OpenApiConverter } from "@typia/utils"` | 🟡 converter 는 Go 이주. TS 에선 throw stub. | ❌ 완전 제거 |
| `import transform from "typia/lib/transform"` | ❌ throw stub | ❌ 제거 |
| `import { toVercelTools } from "@typia/vercel"` | ✅ 동일 | ✅ 동일 |
| `import { ... } from "@typia/core"` | ❌ deprecated — 대상 사용자 없음 (핵은 내부 전용이었음) | ❌ 제거 |

---

## 8. 코드 근거 (파일:라인 인용)

### 8.1 13 namespace 구조

- `packages/typia/src/module.ts:12-19` — 8 sub namespace export (`functional/http/llm/json/misc/notations/protobuf/reflect`)
- `packages/typia/src/module.ts:21` — `TypeGuardError` re-export
- `packages/typia/src/module.ts:23` — `re-exports` (interface → 13th "namespace")
- `packages/typia/src/re-exports.ts:1-34` — `@typia/interface` 14 종 타입 + `tags` namespace 재수출

### 8.2 marker 패턴

- `packages/typia/src/module.ts:52-88` — `assert<T>()` 3 오버로드 + `() => never` 구현
- `packages/typia/src/module.ts:172-197` — `is<T>()` 동일 패턴
- `packages/typia/src/module.ts:222-252` — `validate<T>()` 동일 패턴
- `packages/typia/src/transformers/NoTransformConfigurationError.ts:1-16` — placeholder throw

### 8.3 Standard Schema 주입

- `packages/typia/src/internal/_createStandardSchema.ts:4-27` — `_createStandardSchema` 본체 (`"~standard"` 부착 + `version: 1`, `vendor: "typia"`)
- `packages/typia/src/internal/_createStandardSchema.ts:29-133` — `typiaPathToStandardSchemaPath` 4-state parser
- `packages/typia/src/module.ts:630-637` — `createValidate<T>` 반환 타입 교차 `& StandardSchemaV1<T, T>`
- `packages/typia/src/module.ts:770-778` — `createValidateEquals<T>` 동일
- `packages/ttsc/internal/engine/emitter/assert.go:63` — Go emitter 의 `~standard` inline emit (TS 와 불일치 → Q1)

### 8.4 interface 구조

- `packages/interface/src/index.ts:1-9` — 7 barrel + `tags` namespace export
- `packages/interface/src/tags/index.ts:1-21` — 21 tag export
- `packages/interface/src/schema/ILlmSchema.ts:1-473` — LLM schema 본체

### 8.5 executable (삭제 대상)

- `packages/typia/src/executable/typia.ts:33-50` — 3 command dispatcher (setup/patch/generate)
- `packages/typia/src/executable/TypiaSetupWizard.ts` (171 LOC) — PackageManager/inquirer/ts-patch 설치
- `packages/typia/src/executable/TypiaPatchWizard.ts` (45 LOC) — JSDoc parseAll 패치
- `packages/typia/src/executable/TypiaGenerateWizard.ts` (82 LOC) — offline generate

### 8.6 internal functor (런타임 헬퍼)

- `packages/typia/src/internal/_assertGuard.ts:3-13` — `_assertGuard` (throw-on-fail)
- `packages/typia/src/internal/_throwTypeGuardError.ts:3-5` — `_throwTypeGuardError`
- `packages/typia/src/internal/_isFormatEmail.ts` 외 22 format checker
- `packages/typia/src/internal/_httpFormDataRead*.ts` 외 25 http reader
- `packages/typia/src/internal/_random*.ts` 외 31 random generator

### 8.7 package.json exports

- `packages/typia/package.json:7-10` — `"."`, `"./lib/transform"`, `"./lib/internal/*"` 3 진입점
- `packages/typia/package.json:35-46` — 9 런타임 dep (→ v13 ≤4)
- `packages/interface/package.json:25-28` — dev dep 2 개만 (`rimraf`, `typescript`) — 0-dep 증명

### 8.8 utils 분할 근거

- `packages/utils/src/index.ts:1-4` — 4 barrel (converters/http/utils/validators)
- `packages/utils/src/converters/index.ts:1-5` — OpenApiConverter + LlmSchemaConverter + OpenApiExclusiveEmender
- `packages/utils/src/utils/index.ts:1-8` — 7 런타임-성 utility
- `packages/utils/src/validators/*/` — OpenApi(V3/V3_1/SwaggerV2)TypeChecker, OpenApiValidator (변환부)

### 8.9 LLM adapter 골격

- `packages/mcp/src/index.ts:34-67` — `registerMcpControllers` entry
- `packages/mcp/src/internal/McpControllerRegistrar.ts:101-190` — Preserve 모드 private API 접근
- `packages/langchain/src/index.ts:42-64` — `toLangChainTools` entry
- `packages/langchain/src/internal/LangChainToolsRegistrar.ts:122-148` — DynamicStructuredTool 생성
- `packages/vercel/src/index.ts:88-155` — `toVercelTools` + `toVercelSchema` entry
- `packages/vercel/src/internal/VercelParameterConverter.ts:6-7` — 단 2 줄 converter

---

## 9. 안티패턴

### 9.1 facade 층에 로직 심기 ❌

```ts
// ❌ BAD: module.ts 에 if/for/validation 가 들어감
export function is<T>(input: unknown): input is T {
  // ... 실제 타입 검증 코드 ...
}
```
정답은 3.1 절의 3줄 패턴. facade 는 **marker 뿐**. 실제 로직은 ttsc 가 emit 하는 코드 + `_internal/*` functor 의 몫.

### 9.2 interface 에 런타임 코드 ❌

```ts
// ❌ BAD: interface 에 함수 구현
// packages/interface/src/schema/ILlmSchema.ts
export function validateLlmSchema(schema: ILlmSchema) { ... }
```
`@typia/interface` 는 **타입만**. 함수·class·enum·top-level 상수 (phantom branding 제외) 금지.

### 9.3 namespace 이름 재편 ❌

```ts
// ❌ BAD
export * as schema from "./json";        // typia.json.* → typia.schema.*
```
13 namespace 이름은 **사용자 코드 수만 개가 import 하는 surface**. 이름 바꾸면 모두 깨진다. 이동 없음, 추가만 가능.

### 9.4 functor 에 side effect ❌

```ts
// ❌ BAD: internal/_isFormatEmail.ts
const regex = new RegExp(...);  // top-level side effect? 그나마 이건 OK (pure eval)
console.log("loaded");          // ❌ Edge runtime 에서 log flooding
globalThis.emailCache = {};     // ❌ isolate 간 공유 예측 불가
```
functor 는 **pure + stateless**. Edge runtime 안전성 규약.

### 9.5 MCP private API 확장 ❌

```ts
// ❌ BAD: Preserve 모드 아닌 곳에서 private 접근
function makeToolList(server: McpServer) {
  return (server as any)._registeredTools;
}
```
private API 접근은 `McpControllerRegistrar.ts:101-190` **한 곳만**. 6.2 절 참조.

### 9.6 Standard Schema 변형 ❌

```ts
// ❌ BAD: vendor 를 패키지 이름으로
"~standard": { version: 1, vendor: "typia-nestia", ... }

// ❌ BAD: 자체 필드 추가
"~standard": { version: 1, vendor: "typia", typiaMethod: "is", ... }
```
5.4 절. vendor 는 `"typia"` 고정, 필드 확장은 Standard Schema 스펙 상 무의미.

### 9.7 executable CLI 를 typia 본체에 복원 ❌

v13 에서 `src/executable/` 를 삭제했는데 "편의상" 다시 가져오려는 시도. 금지 — `@typia/ttsc` 바이너리로 단일화. 중복은 설치·빌드 혼란만 가중.

### 9.8 TypeScript peerDependency 유지 ❌

v13 에서 `@typia/typia` 는 TypeScript 를 peer 로 들지 않는다. 사용자의 빌드는 `@typia/ttsc` 바이너리가 내장 tsgo 를 사용. `typescript` 를 peer 로 들면 LLM 이나 runtime-only 사용자 (빌드 분리 조직) 에게 불필요 설치 강제.

### 9.9 LLM 어댑터에 typia 도메인 로직 ❌

```ts
// ❌ BAD: @typia/mcp 에 validation 직접 구현
function validate(args: unknown, parameters: ILlmSchema.IParameters) {
  // ajv 같은 것 불러서 검증
}
```
검증은 `func.validate()` (typia 가 만든 emit 된 validator) 호출만. ajv 나 Zod 등 외부 검증기 import 금지.

### 9.10 `@typia/runtime` 과 `@typia/typia/src/internal/` 이중 출처 ❌

v13 에서 functor 를 `@typia/runtime` 으로 전부 옮기면 emit JS 의 import 경로가 바뀌어 v12 이하 emit 과 호환 깨짐. 4.3 절에 따라 v13 은 보수적으로 typia 내 유지, v14 에서 semver-major 로 단행.

---

## 10. 검증 체크리스트

### 10.1 API 불변 (CI)

- [ ] `typia.is<T>(input: unknown): input is T` 시그니처 유지 (typia-test 에서 타입 검증)
- [ ] `typia.json.stringify<T>(input: T): string` 유지
- [ ] `typia.llm.controller<Class, Config>(name, execute, config?)` 유지
- [ ] 13 namespace 이름 변화 없음 (grep `export \* as \w+ from`)
- [ ] `createValidate<T>` 반환 타입에 `StandardSchemaV1<T, T>` 교차 포함
- [ ] `TypeGuardError.IProps` 필드 (method/path/expected/value/description/message) 불변

### 10.2 0-dep (interface)

- [ ] `packages/interface/package.json.dependencies` 필드 **없음 또는 빈 객체**
- [ ] `packages/interface/lib/**/*.js` (빌드 산출물) 에 함수·클래스·enum 없음 (tsc `--noEmitHelpers` 는 불필요하나, `class ... extends` / `export function` 등이 **0 건** 이어야 한다)
- [ ] ES module 정적 분석: `@typia/interface` 가 다른 workspace 패키지를 import 하지 않음

### 10.3 얇음 정량

- [ ] `packages/typia/src/**/*.ts` LOC 합 ≤ 3,500 (v13), ≤ 3,000 (v14)
- [ ] `packages/typia/package.json.dependencies` 항목 수 ≤ 4 (v13)
- [ ] `packages/typia/package.json.peerDependencies` **삭제** (v13)
- [ ] `packages/typia/src/executable/` 디렉터리 **부재** (v13)
- [ ] `packages/typia/src/transform.ts` **부재** (v13.3)

### 10.4 Edge runtime 안전

- [ ] `grep -rE "eval\(|new Function\(" packages/typia/src packages/utils/src packages/runtime/src` → 0 hits
- [ ] `grep -rE "require\([^)]*\$\{" packages/typia/src/internal` → 0 hits (dynamic require)
- [ ] Edge 스모크 테스트: Cloudflare Worker 에 `is / stringify / validate` emit → 200 OK
- [ ] Deno Deploy 스모크

### 10.5 Standard Schema

- [ ] `createValidate<T>()` 반환값의 `~standard.version === 1`
- [ ] `~standard.vendor === "typia"`
- [ ] `~standard.validate(badInput).issues[0].path` 가 `PathSegment[]` 구조 (key/index) — TS 와 Go emit 양쪽 모두
- [ ] Standard Schema 공식 test suite (https://standardschema.dev) 통과

### 10.6 LLM 어댑터

- [ ] mcp/langchain/vercel 3 adapter 에서 `func.validate` 호출 존재 (회귀 방지)
- [ ] mcp Preserve 모드: SDK private `_registeredTools` 이 `undefined` 일 때 console.warn + fallback 정상 동작
- [ ] 3 어댑터 주간 CI: `@modelcontextprotocol/sdk@latest`, `@langchain/core@latest`, `ai@latest`

### 10.7 Deprecation 메시지

- [ ] `typia/lib/transform` import 시 "@typia/transform is removed in v13. Use @typia/ttsc." throw (v13.0 ~ v13.2)
- [ ] `NoTransformConfigurationError` 메시지에 `ttsc` 및 `npx typia setup` 언급
- [ ] `@typia/utils` import 시 (v13) warn 출력

---

## 11. 미해결 질문

### Q1. Standard Schema emit 단일화 (D ↔ C)

현재 TS `_createStandardSchema` (134 LOC, 정교한 path parser) 와 Go emitter `assert.go:63` (간소한 split) 이 **다른 결과**를 낸다. 정답은 Go emit 을 `_createStandardSchema(__fn)` 한 줄 호출로 축소하고 TS 의 functor 에 의존하는 것. 그러나:

- (a) 빌드 타임 emit 크기가 늘어나나? — 그대로 function 1개 import 뿐, 큰 영향 없음.
- (b) Edge runtime 에서 `_createStandardSchema` 가 `typia/lib/internal/_createStandardSchema` 로 static import 가능해야 함 — 이미 `package.json.exports` 가 허용.
- (c) 기존 v12 의 emit 도 `_createStandardSchema` 호출인가? 아니면 inline? — **확인 필요** (B/C 협의). inline 이었다면 C 가 emit 을 바꾸는 것이 소급 호환성에 영향.

### Q2. OpenApi(V3/V3_1/SwaggerV2)TypeChecker 의 사용자 접근 (D ↔ A)

`@typia/utils/src/validators/OpenApiV3TypeChecker` 등은 외부 사용자 (Nestia, 기타) 가 import 하는 surface 다. Go 이전 후 TS 에서 사라지면 breaking. 세 옵션:

- (a) 완전 제거 — 외부 사용자는 `@nestia/` 가 자체 포팅으로 흡수.
- (b) TS wrapper 유지 (`@typia/ttsc validate-schema` CLI 로 위임).
- (c) WASM 빌드.

A (Boundary) 와 Nestia 사용자 조사 후 결정.

### Q3. `@typia/runtime` 등장 시점

v13 에서 바로 도입 vs v14 major 에서 도입.

- (v13 도입) 장점: 일찍 단일 출처. 단점: emit JS 의 import 경로 변경이 ttsc 1.0 전에 확정 안 되면 호환 깨짐.
- (v14 도입) 장점: 호환 위험 최소. 단점: 2 년간 중복 유지.

제안: **v14** (보수).

### Q4. `randexp` 런타임 의존 유지 vs 인라인화

`_randomPattern.ts` 가 regex → random string 생성을 위해 `randexp` 사용. 50KB 정도 외부 dep.

- (유지) 성숙한 라이브러리. 유지 비용 낮음.
- (인라인화) 0-dep 를 향한 의지. 그러나 regex → random 은 구현 부담 큼.

제안: **유지** (목표 dep ≤ 4 에 포함). 단 `typia.random<T>()` 를 쓰지 않는 사용자 입장에선 쓸데없는 bundle. tree-shaking 가능한지 E/F 와 검증.

### Q5. `comment-json` · `inquirer` · `commander` 이전

`@typia/ttsc` CLI 가 흡수. F 가 책임. D 는 삭제만 수행. 단, 사용자 tsconfig 의 JSON comment (JSONC) 파싱이 ttsc 내부에서도 필요 — `comment-json` 동등 Go 포팅 (B/C 와 조정)?

### Q6. TypeScript peerDependency 완전 제거 타이밍

- 이론상 tsgo 전환 이후 `typescript` 미설치 사용자도 지원해야 함.
- 그러나 사용자 IDE 타입 체크는 여전히 `typescript` (or tsgo) 가 필요. peer 제거가 IDE 통합을 깨뜨리지 않는가?

제안: v13 에서 peer **제거**하되 TypiaSetupWizard 를 대체하는 ttsc CLI 가 typescript **또는** tsgo 를 자동 감지·권고. 최종 결정은 F 와 협의.

### Q7. 13 numero 의 공식 카운트

본 초안 3.2 절에서 "8 sub namespace + 5 최상위 그룹 = 13" 으로 세었으나, `00-INDEX.md:57` 는 "validators / json / http / llm / protobuf / random / reflect / misc / notations / functional / module / functional / etc" 로 다른 열거를 한다. 명칭·경계가 상호 교차 — A (Boundary) 가 **공식 13 enum 표**를 정립할 필요. D 는 그 표를 따라 namespace 규약을 확정.

### Q8. `prepare/dev/build` 스크립트 통일

`packages/typia/package.json` 은 `tsc + rollup`, `@typia/utils` 는 `tsc + rollup`, `@typia/interface` 는 `tsc` 만. v13 façade 층 3 패키지 모두 **동일 빌드 스크립트**로 맞춰야 monorepo CI 복잡도가 감소한다. F (Release/DX) 협의 대상.

### Q9. emit JS 의 import form: named vs default

현재 `_throwTypeGuardError.ts` 는 named export, `_createStandardSchema.ts` 는 named export. functor 는 전부 named (파일명과 함수명 동일). Go emitter 가 `import { _isFormatEmail } from "typia/lib/internal/_isFormatEmail"` 로 쓸지, `import _isFormatEmail from "typia/lib/internal/_isFormatEmail"` (default) 로 쓸지 계약이 필요.

제안: **named import 통일**. CJS/ESM dual 환경에서 named 가 안전 (default 는 `module.exports = {...}` 래퍼 문제 빈발). 3.4 절의 "파일 하나 = 함수 하나 = 기본 export 하나" 중 "기본"이라는 표현은 **"대표 named export 하나"** 로 정정.

### Q10. TypeGuardError 국제화

현재 `TypeGuardError.constructor` 는 영어 메시지 고정 (`"Error on ${method}(): invalid type..."`). Korean/Japanese/Chinese 사용자 문의가 꾸준 — i18n 지원?

- (반대) `TypeGuardError.IProps.message` 를 사용자가 덮어쓸 수 있으므로 i18n 은 factory 로 외부에서 해결 가능.
- (찬성) 기본 메시지에 국제화 토큰 (`{method}` `{path}` `{expected}`) 을 외부 템플릿으로 교체 가능하게.

제안: 현행 유지. i18n 은 `errorFactory` 파라미터로 사용자가 스스로 구현. 표준 facade 는 영어 고정.

---

## 12. 부록 A — v12 vs v13 파일 diff 미리보기

### 12.1 삭제 예정 파일

```
packages/typia/src/transform.ts                  (6 LOC)       — v13.3
packages/typia/src/executable/                   (583 LOC)     — v13.0
packages/typia/src/programmers/TypiaProgrammer.ts (583 LOC)    — v13.0
packages/utils/src/converters/                    (전체)       — v13.0 (Go 이주 후)
packages/utils/src/http/internal/*Composer.ts     (전체)       — v13.0
packages/utils/src/validators/OpenApi*.ts         (Go 이주)    — v13.0~v14
packages/core/src/ 전체                           (30,307 LOC) — v14.0 (v13 은 stub)
packages/transform/src/ 전체                      (4,306 LOC)  — v13.3
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
packages/typia/src/internal/_*.ts                (147 functors, 유지)
packages/typia/src/transformers/NoTransformConfigurationError.ts (메시지만 개정)
```

### 12.3 신규 생성 (v13)

```
packages/typia/src/_deprecated/transform.ts      (10 LOC 가량, stub)
packages/typia/src/_deprecated/utils-alias.ts    (runtime helper proxy, v14 에서 제거)
```

v14 에서는 **신규 `@typia/runtime`** 패키지 등장 가능 (Q3 결정에 따라).

---

## 13. 부록 B — CI Lint 규칙 제안

### 13.1 ESLint custom rule 후보

- `no-eval-or-function-ctor` — `eval(*)` / `new Function(*)` 금지
- `no-dynamic-require` — `require(\`${*}\`)` 형태 금지
- `facade-marker-pattern` — `packages/typia/src/{module,json,llm,protobuf,misc,notations,reflect,functional,http}.ts` 의 export 함수는 반드시 `() => never` 구현부를 가져야 함 (그 외 구현 발견 시 error)
- `no-runtime-in-interface` — `packages/interface/src/**` 에서 `class` / `function` / `enum` 금지 (타입 선언만 허용)
- `functor-single-named-export` — `packages/typia/src/internal/_*.ts` 에서 파일당 정확히 1 개 named export
- `llm-adapter-validate-required` — `packages/{mcp,langchain,vercel}/src/internal/*Registrar.ts` 에서 `func.validate` 호출이 최소 1 회 존재

### 13.2 의존 검사 (madge/depcheck)

- `@typia/interface` 의 in-bound edges: 0 (외부 workspace 패키지 → `@typia/interface` 만)
- `@typia/typia` 의 out-bound edges: `{@typia/interface, @typia/runtime?, @standard-schema/spec, randexp?}` 이내
- `@typia/{mcp,langchain,vercel}` 의 out-bound: `{@typia/interface, @typia/runtime?, <SDK-peer>}` 이내

### 13.3 번들 크기 감시

- `@typia/typia` lib/ (minified) ≤ 120 KB (v13), ≤ 90 KB (v14)
- `@typia/interface` lib/ (minified) ≤ 20 KB (오직 타입이므로 runtime 배포물은 거의 비어야 함)
- `@typia/runtime` lib/ (minified) ≤ 80 KB

### 13.4 런타임 호환 매트릭스

| 런타임 | 버전 | 검증 |
|---|---|---|
| Node.js | ≥ 18 | full |
| Bun | ≥ 1.0 | full |
| Deno | ≥ 1.40 | full (JSR 배포 검토 별도) |
| Cloudflare Workers | latest | smoke (is/stringify/validate) |
| Vercel Edge | latest | smoke |
| Deno Deploy | latest | smoke |
| Browser (modern) | ES2020+ | typia core 기능은 쓸 일 적음, but 어댑터 없이 validator 호출 가능해야 함 |

---

*본 사이클 1 초안은 교차 리뷰(Cycle 2) 전 상태. D 는 A/B/C/E/F 초안을 수령하는 즉시 Q1~Q10 을 각 역할에 개별 확인하여 Cycle 2 비판 근거를 준비한다. 특히 Q1(Standard Schema 단일화)·Q2(OpenApiTypeChecker 사용자)·Q3(`@typia/runtime` 시점)·Q7(13 namespace 공식 enum) 은 cross-role 합의 사안.*
