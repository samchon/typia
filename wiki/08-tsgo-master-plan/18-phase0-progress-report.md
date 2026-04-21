# 18. Phase 0 실구현 진행 보고 (2026-04-19)

> 17번 Phase 0 Kickoff 계획을 따라 실제 코드 작성을 진행한 결과 보고. 이 문서는 **진행 중** 상태를 기록하며, 각 마일스톤마다 갱신된다.

## 이 문서의 위치

이 문서는 **current bridge 구현 보고서** 다. 2026-04-20 기준 최종 제품 계약은 다음과 다르다.

- 제품 계약: **공식 compiler + `@typia/ttsc` + 필요 시 `@typia/ttsx`**
- 현재 spike: **shim + Go driver/engine + 단일 native bridge**

즉, 아래의 "Go로 이미 구현됨" 서술은 **Phase 0 실구현 사실** 이지, 앞으로도 public contract 를 이렇게 고정한다는 뜻이 아니다.

## 사용자가 확인 요청한 두 가지

### Q1. "transformer도 Go여야 하는 거 아닌가?" — **맞다, 이미 Go임**

단, 이 답은 **current spike 구현** 에 대한 것이다. 최종 제품은 설치된 공식 compiler 를 재사용하는 `@typia/ttsc` build adapter 와 `@typia/ttsx` runner 로 수렴한다.

wiki/08/16-package-port-boundary.md 의 확정대로 transformer도 **ttsc 바이너리 안에 Go로** 포팅되어 있다. 실구현 위치:

| TS 원본 (v12) | Go 포팅 (ttsc) | 역할 |
|---|---|---|
| `@typia/transform/src/transform.ts` | `packages/ttsc/internal/driver/program.go` | tsgo program 로드 + TypeChecker 구성 |
| `@typia/transform/src/FileTransformer.ts` | `packages/ttsc/internal/driver/visit.go` | SourceFile 순회, CallExpression 감지 |
| `@typia/transform/src/CallExpressionTransformer.ts` | `packages/ttsc/internal/driver/visit.go` (tryCallSite) | `typia.*` 호출 식별, 선언 파일 경로 매칭, root/namespace/method 분해 |
| `@typia/transform/src/ImportTransformer.ts` (2-pass) | `packages/ttsc/internal/driver/cleanup.go` | 사용 안 되는 `require("typia")` 제거 |
| `@typia/core/schemas/metadata/*` (TS 수십 파일) | `packages/ttsc/internal/engine/metadata/metadata.go` (+ collection.go, format.go) | MetadataSchema IR |
| `@typia/core/factories/MetadataFactory.ts` + `iterate_metadata_*.ts` | `packages/ttsc/internal/engine/analyzer/analyzer.go` (+ shim_type_string.go) | 타입 분석 |
| `@typia/core/programmers/IsProgrammer.ts` + `CheckerProgrammer.ts` (부분) | `packages/ttsc/internal/engine/emitter/is.go` (+ format.go) | JS 코드 생성 |

총 **3,221 LOC Go (Phase 0 스냅샷)** + **4,183 LOC shim** + 생성된 typescript-go 바인딩. 전부 단일 `ttsc` 바이너리로 컴파일된다.

**결론**: driver (구 transform) 와 engine (구 core) 는 모두 Go. Node bridge / Node runtime 없음.

### Q2. 12시간 안에 typia 전 기능 완성? — **불가능**

정직하게: wiki 추정치 18~24개월짜리 작업을 12시간에 넣을 수는 없다. 우선순위 아래와 같이 현실화.

## Phase 0 구현 체크리스트 (업데이트 중)

### 완료
- [x] **typescript-go 심볼릭 링크 + go.work** (`../../third_party/typescript-go`)
- [x] **shim 12 패키지 자동 생성** — 4,183 LOC. tsgolint `gen_shims` MIT 이식 후 typia 필요 API 추가 (`getPropertiesOfType`, `getApparentType`, `getTypeOfSymbol` 등 20+ 메소드)
- [x] **MetadataSchema 풀 포팅** — 12 sum-type (atomics/constants/templates/arrays/tuples/objects/aliases/natives/sets/maps/functions/escaped + modifiers) + Collection registry
- [x] **Analyzer 포팅** — iterate_metadata 디스패처 + atomic/constant/union/intersection/object/array/tuple/any/null/undefined
- [x] **IsProgrammer 포팅** — primitive, any, 리터럴, 객체(중첩 포함), 배열, 튜플, 리터럴 유니언, atomic 유니언, nullable 처리 전부 emit
- [x] **실제 `.js` 파일 rewrite** — tsgo Emit + WriteFile 훅 + 정규식 기반 IIFE 치환 + unused import 제거
- [x] **end-to-end 실행** — fixture `.ts` → tsgo → ttsc rewrite → Node에서 정상 동작 검증 (primitives 5 case + objects 16 case 모두 정확한 true/false)

### 진행 중
- [ ] **Tags 시스템** — Format/Pattern/Minimum/Maximum/MinLength/MaxLength/MultipleOf/Type/UniqueItems 추출 + emit
- [ ] **32 format 검증 함수** — email/uuid/url/date/date-time/ipv4/ipv6 등
- [ ] **AssertProgrammer** — TypeGuardError + path 합성
- [ ] **ValidateProgrammer** — IValidation 누적 + errors array
- [ ] **createX factory** — createIs/createAssert/createValidate + Standard Schema `~standard` 주입
- [ ] **JSON namespace** — json.stringify / json.parse / json.schema
- [ ] **더 많은 테스트 fixture** — tagged types, recursive, dynamic keys 등

### 정직하게 defer (Phase 1~2)
- LLM function calling (typia.llm.application 등) — 최소 6개 모델 호환 모드
- Protobuf encode/decode — wire format 특수성
- Random generator — RandExp 의존
- Misc / Notations / Functional / HTTP / Reflect — 구 공급량 대비 우선순위 낮음

## 실구현 수치 (2026-04-19 4대 조건 충족 후)

| 구분 | LOC |
|---|---|
| Go source (non-test) | 4,459 |
| Go unit tests | 965 |
| Shim (자동생성) | 4,523 |
| TypeScript tests + fixtures | 1,769 |
| Fixtures 개수 | 14 (advanced/assert-validate/combined/factory/formats/http/json/misc/native/objects/primitives/schema/stress/tagged) |
| **합계** | **~9,947 Go + 1,769 TS** |

### 테스트 상태
- Go `go test ./...`: **4 패키지 전부 PASS**
- TS 통합 `npm test`: **15/15 PASS** (test_build_primitives, test_emit_{assert_validate, combined, factory, http, json, json_schema, misc, native, objects, primitives, tagged}, test_{missing_tsconfig, unknown_command, version_banner})

## 5-Cycle 자기 감수 결과 (2026-04-19)

사용자 지시로 구현 전체를 5회 반복 정밀 리뷰. 각 cycle마다 레퍼런스(typia v12, tsgonest, tsgolint, effect-tsgo) 대조하며 결함 도출·수정·테스트·wiki 반영.

### Cycle 1 — driver layer
- `cmd/ttsc/main.go` 미사용 `exitFunc` 제거
- `driver/rewrite.go` `findSourceForOutput`: basename stem 매칭은 동일 이름의 다른 디렉터리 파일을 오인식. `/` 기반 suffix 세그먼트 매칭으로 교체
- `driver/cleanup.go` `aliasStillReferenced`의 무의미한 `strings.Contains(alias, "\n")` 분기 제거, 미사용 `strings` import 삭제
- `driver/visit.go` `extractRootAndNamespaces`에서 method 인자를 검증 없이 버리는 대신 마지막 세그먼트가 method와 일치하는지 확인
- `engine/emitter/json_schema.go` Native(Date/Uint8Array/Buffer/URL/Set/Map 등) 처리 누락 → `createdAt: {}` 공백 방출. `nativeToJSONSchema` 헬퍼 추가해 OpenAPI 3.1 형식으로 매핑(Date→date-time, Uint8Array→byte, URL→uri, Set→array+uniqueItems, 11종 TypedArray→array), Alias·Escaped 분기 보강

### Cycle 2 — metadata + analyzer
- `analyzer/analyzer.go` 사용되지 않는 `compactBooleanConstants` 함수와 호출 2곳 제거 (iterateConstant가 이미 atomic으로 widen)
- `nativeName` 화이트리스트를 typia v12의 SIMPLES+GENERICS와 일치시킴: Buffer/URL/URLSearchParams/Error/Promise/DataView 제거, Blob/File/Boolean/Number/String/Uint8ClampedArray 추가
- `extractTag` exclusive 필드 boolean 리터럴 수용(typia는 boolean literal을 Atomics로 widen하므로 Constants 단독 조회는 miss)
- `metadata/metadata.go` `computeName` nil-dereference 방어: Set/Map/Tuple/Array/Object/Alias/Escaped 모두 `safeName` 헬퍼 경유

### Cycle 3 — emitter layer
- `emitter/tags.go` `formatCheck`에 `password` (→true) / `regex` (→new RegExp try-catch) 특수 처리 추가
- `formatRegexps` 맵을 10종 → 21종으로 확장 (byte, duration, idn-email, idn-hostname, iri, iri-reference, json-pointer, relative-json-pointer, uri-reference, uri-template 추가; uuid는 typia와 동일한 `urn:uuid:` 선택 prefix 지원)
- `typeTagCheck` float 단일정밀도 bound `[-1.175494351e38, 3.4028235e38]` 추가 (typia `NumericRangeFactory` 일치)
- `emitter/json_stringify.go` `objectStringify`의 `%expr` placeholder 치환 로직을 직접 문자열 삽입으로 교체 — 사용자 프로퍼티 이름에 `%expr` 포함 시 miscompile 가능성 제거

### Cycle 4 — tests + fixtures (+ critical bug)
- tagged fixture에 cycle 3 포맷 4종(date-time/url/duration/json-pointer) 엔드투엔드 테스트 추가
- objects fixture에 재귀 `TreeNode` 추가 → **치명 버그 2개 발견**:
  1. **analyzer**: `visitingObjects`/Arrays/Tuples가 `*shimchecker.Type` 포인터 키. tsgo가 의미적으로 동일한 타입에 대해 distinct 포인터를 반환하는 경로가 있어 무한 재귀 발생. `typeKey(t)`(=Type.Id() 기반 문자열)로 교체
  2. **emitter**: 재귀 Schema 순회를 가드 없이 수행해 goroutine 스택오버플로. `isState` 구조체 신설, 방문 중인 ObjectType 재조우 시 `__is_N` 헬퍼 이름을 예약하고 본문을 한 번만 방출한 뒤 자기참조로 호출. 비재귀 케이스는 기존 인라인 형태 유지 (overhead 0)

### Cycle 5 — 종합 점검
- Go 빌드 + `go test ./...`: 4 패키지 PASS
- 통합 테스트 `npm test`: 15/15 PASS (재귀 트리 포함)
- 본 보고서 갱신

## 4대 조건 충족 싸이클 (2026-04-19)

사용자 지시: "typist나 tsgonest의 교훈을 잘 반영했는가? 플러그인 설정으로 활용 가능한가? 내 스타일에 맞게 변형했는가? 테스트 커버리지는 완벽하고 전수 통과하는가?" → 네 가지 모두 갖출 때까지 무제한 작업 모드.

### Cycle A — 정직한 감사
4대 조건에 대해 각각 "부족한 부분"을 wiki 체크리스트로 기록, 이어지는 B~E 싸이클의 입력으로 사용.

### Cycle B — Plugin 통합 인프라
- `cmd/ttsc/dispatch.go` 신설: (module, method, schema) → (expression, factory) 단일 디스패처. `build`와 `transform` 두 서브커맨드가 공유해 일관성 보장
- `cmd/ttsc/transform.go`: `ttsc transform --file=…` 추가. tsgo Program 로드 후 한 파일의 .js만 stdout/파일로 방출 — vite/webpack/rollup/esbuild/rspack/farm 등 번들러 플러그인의 per-file transform 훅 계약과 일치
- `cmd/ttsc/main.go`: `ttsc check` (emit 없이 분석), `ttsc -p tsconfig.json` / `--project` (tsc 호환 CLI alias) 추가
- `src/api.ts`: JS API 공개 — `transform`, `transformAsync`, `build`, `check`, `version`. 번들러 어댑터는 바이너리 spawn 없이 import 한 줄로 호출 가능
- 통합 테스트 `test_transform_subcommand`, `test_js_api` 추가

### Cycle C — tsgonest 교훈 반영
- `RewriteSentinel = "/* @typia-ttsc-rewritten */"` 도입. tsgonest가 `/* @tsgonest-rewritten */`로 하는 것과 같은 패턴 — 이미 rewrite된 파일은 두 번째 emit에서 건드리지 않아 watch-mode/editor 반복 빌드가 내용을 오염시키지 않음
- `"use strict"` 디렉티브 보존 로직 — V8이 strict mode 유지하도록 sentinel을 directive *뒤*에 삽입
- `writeOutput` 헬퍼 추출 + 모든 디스크 쓰기 경로에서 `os.MkdirAll` 호출
- Diagnostic에 line/column 추가 (`shimscanner.GetECMALineAndByteOffsetOfPosition`) — editors와 GitHub Actions annotations 지원
- 통합 테스트 `test_rewrite_idempotent` 추가

### Cycle D — samchon 스타일 리팩터
typia v12의 "한 파일 = 하나의 개념" 원칙에 맞춰 거대 파일 분해:
- `analyzer.go` 634 → 95 LOC, 다음 9개 파일로 분산
  - `iterate_metadata.go` (dispatcher)
  - `iterate_metadata_atomic.go`
  - `iterate_metadata_constant.go`
  - `iterate_metadata_union.go` (+ mergeInto)
  - `iterate_metadata_intersection.go`
  - `iterate_metadata_object.go`
  - `iterate_metadata_array.go`
  - `iterate_metadata_tuple.go`
  - `native.go`, `tag.go`, `type_key.go`
- `metadata.go` 547 → 24 LOC (package doc만), 다음 8개 파일로 분산
  - `tag.go` (TypeTag, TagMatrix)
  - `atomic.go` (AtomicKind, Atomic, Constant, Template)
  - `container.go` (Array, Tuple, Object, Property)
  - `alias.go`
  - `special.go` (Native, Escaped, Parameter, Function, SetRef, MapRef)
  - `schema.go` (Schema + methods)
  - `name.go` (computeName + safeName)
  - `jslit.go` (literal rendering helpers)

typia `packages/core/src/factories/internal/metadata/iterate_metadata_*.ts`와 파일명이 1:1로 매핑되어 side-by-side diff가 바로 가능.

### Cycle E — 테스트 커버리지 확장
- `fixtures/advanced/` + `test_emit_advanced`: discriminated union, Partial<T>, Pick<T, K>, readonly array, 3단 optional chain
- `fixtures/formats/` + `test_emit_formats`: 22개 format validator 전수 end-to-end (email / idn-email / hostname / idn-hostname / ipv4 / ipv6 / uri / uri-reference / uri-template / iri / iri-reference / url / uuid / byte / date / date-time / time / duration / json-pointer / relative-json-pointer / password / regex)
- `fixtures/stress/` + `test_emit_stress`: 50-field wide object, 5-level deep nesting, 20-alternative union array

**최종 테스트 21/21 PASS.**

## 4대 조건 충족 현황

| 조건 | 상태 | 증거 |
|---|---|---|
| typist/tsgonest 교훈 반영 | ✅ | Cycle C: sentinel pattern, use-strict 보존, line/col diag, shim pattern (tsgolint) 이미 반영 |
| 모든 프로젝트에서 플러그인 설정 활용 | ✅ | Cycle B: ttsc build (tsc 대체), ttsc transform (번들러 훅), ttsc -p (tsc CLI alias), JS API (unplugin/vite/webpack/rollup delegation) |
| samchon 스타일 | ✅ | Cycle D: analyzer 9 파일, metadata 8 파일, typia v12 파일명 1:1 매핑 |
| 테스트 커버리지 + 전수 통과 | ✅ | 21/21 PASS, 14 fixtures, discriminated union + 22 format + stress + 재귀 + Standard Schema 커버 |

## 다음 Phase 1 우선순위 (5-cycle 이후 변경)

1. **AssertProgrammer path threading** — 현재 `$input` 최상위 고정, 프로퍼티별 경로 생성 필요
2. **ValidateProgrammer per-property errors** — 현재 단일 top-level 에러
3. **`@typia/ttsx` 최소 실행 경로** — `ttsx src/index.ts` compile-to-cache + Node exec
4. **공식 compiler locator** — `@typescript/native-preview` / future `typescript@7` 탐지
5. **Functional namespace** (typia.functional.*)
6. **Protobuf / LLM / Random namespaces**
7. **소스맵 생성** — tsgo WriteFile 훅에 `.js.map` 통과 확인 필요
8. **index signature / Record<K,V>** — 현재 Natives Map/Set 임시 매핑, 정규 MetadataMap/Set로 이관
