# B — Mega-1 Sub-2 교차 리뷰 (Go Engine Lead 관점)

> 작성: 2026-04-19 (Cycle 2 재시도, 압축본)
> 리뷰 대상: cycle-01-A / C / D / E / F 다섯 초안
> 관점: IR(MetadataSchema, Collection, Tag, Name 캐시), Analyzer(pointer identity, typeKey, recursion guard — Cycle 4 bug R-0001/R-0002), Go 코딩 규약
> 형식: 쟁점 = 제목 / 위치(§) / 문제 1~2줄 / 제안 1~2줄

---

## 1. 총평

5 초안 전부 Phase 0 실구현(9,947 Go + 1,769 TS, 21/21 PASS, 14 fixture) 을 근거로 한다는 점은 합격. 실제 코드·파일명·라인번호를 다수 인용해 "추정 없음" 원칙을 지켰다.

하지만 B 관점에서 보면 IR 불변식(pointer identity · typeKey 문자열 · Name 캐시 · Collection pointer sharing)과 recursion guard(R-0001 analyzer 무한 루프, R-0002 emitter stack overflow) 가 **A·C·D·E 네 초안에 걸쳐 중복으로 언급되면서도 소유권이 파편화**되어 있다. 누가 진실원이고 누가 소비자인지 선언이 약해, Phase 1 에서 "guard 누수" 회귀가 재발할 구조다. 특히 B §3.8 의 "IR 자체는 guard 를 책임지지 않는다 — 소비자가 visiting set 을 들고 다녀야 한다" 라는 핵심 원칙이 C §7 의 공통 규약에 복제되지 않았다.

가장 시급한 세 합의:

1. **B→C emitter 계약 (recursion guard 의무)**: emitter 가 `map[*ObjectType]bool` visiting set 을 반드시 소유한다(B §3.8 규약) 는 것을 C §7 공통원칙(§7.1) 에 명시해야 한다. 현재 C §7.2.1 은 `is.go` 의 isState 에 한정해 "isState.visiting[obj]" 라고만 적혀있어, `assert.go / validate.go / json_stringify.go / json_schema.go` 등 **다른 재귀 emitter** 에서 같은 guard 가 재발명될 의무가 선언되어 있지 않다. R-0002 는 `is.go` 외 다른 emitter 에서 재발할 수 있는 구조적 문제다.

2. **Standard Schema 단일화(D Q1)**: B 엔진 측 답은 "Go emitter 가 inline 주입하지 말고 `_createStandardSchema(__fn)` 호출 한 줄 emit". 근거는 아래 §4 D-1 참조. 이는 (a) Go 코드 축소, (b) TS ↔ Go path parser/message 포맷 drift 제거, (c) D §3.4 의 "functor 단일 출처" 원칙과 정합성 3 가지를 동시 해결. C §7.3.3 의 inline 주입 문구를 "functor 호출" 로 개정하면 된다.

3. **E regression coverage 가 IR 불변식을 덮는가**: 현재 E §5 의 R-0001/R-0002 guard 는 TS integration fixture(`test_emit_objects.ts:97-119`) 한 곳에만 있다. **Go 단위에서 `typeKey` 문자열성, `Collection.Emplace` pointer identity, `Name()` 캐시 무효화 세 불변식을 직접 검증하는 테스트가 없다** (E §2.1 이 analyzer_test.go placeholder 인 사실 주석). Phase 1 리팩터 중 B §3.7 식별 규약이 깨져도 CI 마지막 TS 단계에서만 터지므로 조기 검출 불가. S-5 에서 R-0003~0005 제안.

아래 절에 쟁점 총 **32 개** (A 4 + C 4 + D 4 + E 4 + F 4 + 초안간 모순 6 + Sub-3 합의 7 + 부담 분산 1) 를 적는다. 각 쟁점은 제목 / 위치 / 문제 / 제안 형식 압축형이며, 분량보다 **진실원 명시와 변경 요구 주체 분리**를 우선했다.

---

## 2. A 초안 비판 (Boundary Architect)

### A-1. L2 Engine 의 "Go 고정" 표기가 IR 소유권을 흐린다
**위치**: A §1.2 BND-PKG-01 표, §2.1 BND-PKG-04.
**문제**: L2 가 "Go 고정" 이라고만 적혔고, 그 안의 IR(MetadataSchema) 이 **B 소유** 임이 BND-PKG-04 본문에서 생략. C 초안 §1.1 은 "IR 은 B 역할 소유"를 명시하는데 A 의 경계 표에는 그 단어가 없다.
**근거**: C §1.1 비소유 경계 표 "MetadataSchema IR, Analyzer, Collection → B 역할" vs A §1.1 권한 표의 "Go 엔진 내부의 모듈 구조 (metadata / analyzer / codegen 하위) → B" — 두 초안이 용어("codegen" vs "emitter")도 다르다. BND-PKG-04 본문이 이를 풀어 쓰지 않고 "L2 Engine — @typia/core 는 v13 beta 부터 Go" 라는 일정에만 집중.
**제안**: BND-PKG-04 에 "L2 내부는 `internal/engine/metadata/`(IR — **B**), `internal/engine/analyzer/`(Analyzer — **B**), `internal/engine/emitter/`(Emitter — **C**) 로 재분할" 을 한 줄 명시. A 의 경계표가 진실원이 되도록.
**파급**: 이 합의가 없으면 Phase 1 에서 emitter 안에 MetadataSchema 재계산 로직이 슬며시 들어와도 A 경계표로는 PR reject 근거를 못 만든다.

### A-2. "13 namespace" 수치 혼선(Q2) 에 대한 B 측 제약
**위치**: A §2.6 BND-NS-01, Q2.
**문제**: A 가 "root+8=9" vs "13" 을 D 에 미룸. 하지만 B 관점에서 **namespace 개수는 Programmer 개수와 1:1 이 아니다** — 한 namespace(`typia.json`) 가 여러 Programmer(JsonStringify/JsonParse/JsonSchema) 를 호출. 13 은 Programmer 수에 가깝지만 Phase 0 기준으로는 FUNCTORS 147 entry × 9 module 분산.
**근거**: C §6.1 "FUNCTORS 147 entry (9 module × 평균 16 method)", D §3.2 "8 sub + 5 top = 13", B §3.2 "12 sum-type IR category" — 네 숫자가 모두 등장. `wiki/09-audit/` Cycle 2 재실측도 "FUNCTORS 147" 을 확인.
**제안**: A 가 "13 namespace" 를 **의전적 수사** 로 확정하고, 규약 본문에서는 "9 import 지점 + N Programmer (B 가 Phase 별 수치 제공)" 로 분리 표기. B 는 Phase 1 종료 시점에 Programmer 수를 확정. B 는 별도로 "12 IR category" 용어를 IR 문서에만 사용하고 외부 문구에서 혼용 금지.
**파급**: 공식 블로그·README·conventions 전 문서에 "13" 의 정의가 달라지면 기여자 혼란. Cycle 3 sweep 대상.

### A-3. BND-API-04 "동작 불변" 의 측정 단위가 빠졌다
**위치**: A §2.4 BND-API-04.
**문제**: "같은 입력에 같은 출력" 이 IR 레벨이 맞는지, emitted JS 의 byte 레벨이 맞는지 미정. B 관점에서는 IR 레벨(Schema 구조 동치) 만 의미가 있다 — emitted JS byte 동일성은 emitter(C) 포맷팅 결정에 종속.
**근거**: A Q4 가 E 에게 "error.path 문자열 포맷·error 순서·whitespace" 판단을 미뤘으나, 이 중 error 순서는 **B §3.7 (structural name) + emitter sort** 가 결정. A 의 "의미적 동치성" 주장이 어느 layer 에서 보장되는지 불명.
**제안**: A §2.4 에 **세 단계** 추가: (a) IR 구조 동치(B 검증, `typia.reflect.schema<T>()` deep-equal), (b) 런타임 함수 동치(E golden fixture, `is/validate` 반환값 동일), (c) emit byte 레벨은 **보장 범위 밖** (단 idempotent 는 E §3.7 이 별도 보장). 이 분리가 없으면 E Q-E9 "fixture TS 버전 메타" 가 영구 미해결.
**파급**: nestia가 `@TypedBody` 내부에서 `typia.assert` 결과 error path 포맷에 의존. (a)+(b) 가 보장되면 nestia 무영향, (c) 만 다르면 nestia 영향 없음.

### A-4. BND-PKG-06 utils 분할의 "emit 된 사용자 JS 호출" 판정이 IR 관점에서 불충분
**위치**: A §2.1 BND-PKG-06 판정 절차.
**문제**: "런타임/변환 혼재면 우선 런타임 TS 로 두고 Go 가 동일 로직 재구현" — 두 구현 drift 문제를 E 에 떠넘김. 하지만 B §3 IR 의 **Tag.Validate 템플릿 문자열**(e.g. `$importInternal("isTypeInt32")($input)`) 은 TS functor 이름과 Go 내부 상수가 **같은 문자열 테이블을 공유**해야 한다 — drift 가 발생하면 IR 이 깨진다.
**근거**: D §3.4 가 "147 functors 존재 … Go emitter 가 파일명-함수명 1:1 매핑을 전제로 import path 를 합성" 이라 선언. 하지만 이 매핑표를 누가 소유하는지 규정 없음.
**제안**: A BND-PKG-06 에 "Tag.Validate 템플릿의 functor 이름은 `@typia/typia/src/internal/_*.ts` 파일명과 1:1 매핑. B 엔진이 이 매핑표를 `metadata/functor_names.go` 에 상수로 보유. 변경 시 B+D+E 동시 PR." 한 줄 명시. drift 방지 gate.
**파급**: S-6 합의 대상. D §13.1 의 custom rule `functor-name-match-go`(D-4 제안) 가 집행.

---

## 3. C 초안 비판 (ttsc Driver) — emitter-engine 경계

### C-1. §7.1.1 "emitter 는 `*metadata.Schema` 만 입력" 은 좋으나 recursion guard 의무 주체가 공백
**위치**: C §7.1 공통원칙, §7.2.1.
**문제**: B §3.8 의 불변식("IR 은 guard 를 책임지지 않는다. 소비자가 visiting set 을 들고 다녀야 한다") 이 C §7 에 **복사되지 않았다**. C §7.2.1 의 `isState.visiting[obj]` 만으로는 다른 emitter(assert/validate/json_stringify/json_schema)에서도 동일 불변이 지켜지는지 보증 불가.
**근거**: Phase 0 실구현 `emitter/is.go:59-67` 의 `isState` 는 is.go 전용. `emitter/json_schema.go` 가 "재귀 타입의 `$defs` 확장은 Phase 1" (C §7.8.4) 이라 defer 했으나 Phase 1 진입 시 guard 를 재발명할 가능성이 매우 높다.
**제안**: C §7.1 에 규약 7.1.7 신설: "재귀 Schema 를 방문하는 모든 emitter 는 `map[*ObjectType]bool` visiting set 을 상태로 가진다. pointer identity 가 Collection 에 의해 보장되므로 map key 로 안전(B §3.7 참조)." 이것이 R-0002 재발 방지의 핵심.
**파급**: S-2 합의 항목. 이 한 줄이 Phase 1 emitter 4 개(assert/validate/json_schema/llm_schema) 의 재귀 처리 방향을 고정.

### C-2. §6.2.3 dispatch 4-tuple 반환 계약이 Schema 오류 경로를 흡수
**위치**: C §6.2.3.
**문제**: `(expr, factory, err, handled)` 에서 `err != nil` 이면 "skip + 로그" 라고만 기술. 그러나 B 엔진의 Analyzer 가 실패한 경우(예: Schema 가 Function 을 포함해 Phase 0 미지원) 와 Emitter 가 실패한 경우(예: index signature 미지원) 가 **같은 err 로 묶인다**. 사용자 디버깅 시 원인 분리 불가.
**근거**: C §7.1.3 "ErrUnsupportedSchema 를 감싼 에러로 실패 표현" 단일 type. Phase 0 에 문제 없었지만 Phase 1 에 functional/protobuf/llm/random 을 추가하면 미지원 Schema 의 폭이 커진다 — 사용자 메시지에서 "어느 programmer/어느 파이프라인 단계" 구분 필요.
**제안**: err 를 두 taxonomy 로 구분 — `ErrAnalysisUnsupported`(B 발급, analyzer 단에서 schema 분석 실패) vs `ErrEmitUnsupported`(C 발급, emitter 가 형태는 받았으나 코드 생성 미구현). 두 타입 모두 `ErrUnsupportedSchema` 를 wrap 하되 `errors.Is` 로 구분. E regression 에서도 어느 층에서 실패했는지 tag.
**파급**: C §1.4 Non-goals 의 "per-property path threading" 구현 시 path 가 있는 실패 vs 없는 실패 구분에도 사용 가능.

### C-3. §3.4 "Analyzer 도 `*shimchecker.Type` 을 받긴 하지만…" 은 B 의 경계 침범 규약 위반
**위치**: C §3.4 규약 3.4.1 + §12.1 Q-C2B-1.
**문제**: C 는 "emitter 는 shim 금지 / analyzer 는 예외 1건" 이라 썼지만 B §4(Analyzer 규약) 는 **shim 의존을 driver 가 adapter 로 격리해야 한다** 고 본다. 현재 `analyzer/shim_type_string.go` 가 shim 을 직접 import 하면 typia-go(Phase 3 독립 바이너리) 재사용이 막힌다.
**근거**: C §12.1 Q-C2B-1 "driver 가 shim 타입을 analyzer 에 넘기는 유일 지점이다. B 역할은 이것이 허용 가능한 경계 침범인가?" 라 스스로 질문. B 답은 No.
**제안(B 측 답)**: driver 가 `Type` 을 소비하기 전에 `typeKey(t) string` + `typeString(t) string` 두 primitive 만 추출해 analyzer 에 주입. analyzer 시그니처를 `Walk(root TypeKey, resolver TypeResolver)` 로 변경. shim 의존은 driver 경계에 갇힌다(B Q-B2 해소 경로와 일치).
**파급**: Phase 3 typia-go 가 `internal/engine/` 을 그대로 재사용 가능. F-3 의 "internal→public module 승격" 전제 달성.

### C-4. §6.3 dispatch 미커버 영역(functional/protobuf/llm/random) 의 IR 확장 책임 누락
**위치**: C §6.3 미커버 + §7.15 Phase 1 계획.
**문제**: C §7.15.1 은 "function schema 확장은 B 책임" 이라 명시하지만, §7.15.2(protobuf wire format)·§7.15.3(LLM provider 분기) 는 **IR 에 추가 메타가 필요한가 vs emitter runtime 파라미터로 충분한가** 를 Q-C-self-2 로 열어둠. B 관점에서 세 방향 모두 IR 불변식(B §3.2 12 sum-type 고정) 을 위협.
**근거**: B §3.2 (10) Function 은 `{ Parameters, Output, Description, Async, JsDocTags }` 이미 존재. protobuf 필드번호는 B §5 Tag 시스템의 JsonSchemaPlugin 계열로 수용 가능. LLM IConfig 는 B §3 IR 과 분리된 런타임 옵션.
**제안(B 답)**: (a) functional → B §3 에 Function sum-type **이미 존재**(§3.2 (10)), Phase 1 에 Analyzer iterate_function 활성만 하면 됨. (b) protobuf → 필드번호는 Tag(`tags.Protobuf.Tag<N>`) 로 이미 표현되므로 IR 확장 불필요. (c) LLM provider → IConfig 는 emitter runtime 파라미터(C §7.8) 로 격리, IR 확장 금지 — D-3 과 동일 원칙. C Q-C-self-2 closed.
**파급**: Phase 1 에서 B 가 IR 확장 PR 을 열 필요 없음 — Analyzer 활성화만 필요. 일정 부담 경감.

---

## 4. D 초안 비판 (TS facade, Standard Schema) — B 측 답 포함

### D-1. Q1 Standard Schema 단일화 — B 엔진 측 공식 답
**위치**: D §5.3, Q1 / C §7.3.3.
**문제**: TS `_createStandardSchema`(134 LOC, 정교한 path parser) 와 Go emitter(`assert.go:63` inline) 이 **path segment·error message 포맷 모두 다름**. drift 가 이미 존재.
**근거 상세**:
- TS: `typiaPathToStandardSchemaPath` 4-state parser(Start/Property/StringKey/NumberKey) 가 `"$input.foo[0][\"bar\"]"` → `readonly PathSegment[]` 변환.
- Go: `String(e.path).split(".").slice(1)` 단순 split. bracket notation 실패.
- TS message: `"expected X, got Y"` (value 원본).
- Go message: `"expected X, got <typeof> <JSON.stringify(value)>"`. 포맷 불일치.
**B 측 답(제안)**:
- (a) **Go emitter 는 inline 주입을 제거**하고 `import { _createStandardSchema } from "typia/lib/internal/_createStandardSchema"` + `_createStandardSchema(__fn)` 한 줄만 emit. 이는 B §3 IR 과 무관한 순수 emitter 결정.
- (b) B 엔진 입장에서 Schema 에 `~standard` 플래그를 추가할 필요 **없음** — 이것은 emit shape 의 문제이지 IR 의 의미론이 아니다(D Q1(c) 에 대한 답: "v12 emit 도 inline 이 아니라 functor 호출이었다 — `packages/typia/src/internal/_createStandardSchema.ts` 참조").
- (c) ttsc가 `_createStandardSchema` 를 `typia/lib/internal/` 경로로 resolve 하는 것은 D §3.4 규약 4(exports map 계약) 로 보장됨.
- (d) M-2 모순(C §1.2 원칙 2 "emit 결과에 runtime dependency 없음" vs functor import)도 동시에 해소 — "runtime dep" 의 정의를 "`typia/lib/internal/*` 외 external" 로 한정.
**결론**: C §7.3.3 의 "인라인 주입" 문구를 "functor 호출 emit" 으로 개정. drift 종결. S-3 합의 대상.
**파급**: Phase 0 assert.go:63 의 약 30 LOC 가 약 3 LOC 로 감소. 향후 Standard Schema v2 대응도 TS functor 한 곳만 수정.

### D-2. §3.4 "파일 하나 = 함수 하나 = 기본 export 하나" 와 Go emitter import form 불일치
**위치**: D §3.4 규약 1, Q9.
**문제**: D 가 "기본 export" → Q9 에서 "named export" 로 자기정정. 하지만 B 엔진(그리고 C emitter) 은 현재 `$importInternal("<name>")(<args>)` 템플릿을 Tag.Validate 에서 parse 한다(B §5 Tag 시스템). 템플릿 문법이 default 냐 named 냐에 **엔진 parser 동작이 달라진다**.
**근거**: D §2.3 규약 1 이 "Go emitter 가 이 템플릿을 parse 한다 — A/B/C 와의 계약" 이라 선언. C §7.4.3 `expandValidate` 함수가 실제 parse 수행. default 와 named 는 ESM 에서 emit 된 require 호환성이 다르다.
**제안**: D Q9 결론(named 통일) 을 규약 §3.4 본문으로 승격. 동시에 D §2.3 규약 1 의 템플릿 문법을 `$importInternal(<name>)` → named import 로 고정 명시. B 의 Tag validate 파서 불변. `packages/ttsc/internal/engine/emitter/tags.go:144-170` 의 formatRegexps 도 영향 없음.
**파급**: CJS/ESM dual 환경(Bun, Deno) 에서 emit 된 JS 의 호환성 회귀 방지.

### D-3. §2.2 "IConfig.extensions: Record<string, unknown>" open map — IR 로스리스 전파 우려
**위치**: D §2.2 (LLM 표준 분열 대응).
**문제**: "Go 엔진(B)이 이 map 을 로스리스 패스스루 하도록 계약" 을 요구. 하지만 B §3 의 MetadataSchema 는 **IConfig 를 전혀 소비하지 않는다** — IConfig 는 LLM schema emit 시(C §7.8) 의 런타임 옵션. Schema IR 에 open map 을 싣는 것은 B §3 invariant(12 sum-type 고정) 를 파괴한다.
**근거**: B §3.2 (1)~(12) 12 sum-type 은 Analyzer/Collection/emitter 전체가 의존하는 핵심 계약. open map 은 sum-type 의 외부 — 주입되면 모든 visitor 에 "unknown kind" 분기 추가 필요.
**제안**: D 가 "Go 엔진 로스리스" 를 "ttsc driver(C) 가 IConfig 를 CLI flag 로 받아 emitter 에 전달" 로 수정. B 엔진 IR 은 IConfig-free 유지.
**파급**: LLM provider 추가(6→7)시 IR 마이그레이션 불필요. emitter runtime 분기만 수정.

### D-4. §13 ESLint custom rule `facade-marker-pattern` 이 B 의 IR 테이블 드리프트를 못 잡는다
**위치**: D §13.1.
**문제**: D 가 제안하는 6 rule 중 IR-emitter drift(A-4, D-2 문제) 를 직접 검사하는 것이 **없다**. facade 에서 functor 를 추가/삭제했을 때 B 의 `metadata/functor_names.go` 상수와 안 맞으면 linting 에서 빠진다.
**근거**: D 의 기존 6 rule 은 facade 내부 일관성(marker pattern, interface no-runtime 등) 만 검사. **cross-language drift** 를 검사하는 rule 이 없는 것이 구조적 공백.
**제안**: D §13.1 에 custom rule `functor-name-match-go` 추가: `packages/typia/src/internal/_*.ts` 파일 목록과 `packages/ttsc/internal/engine/metadata/functor_names.go` 상수 리스트 diff = ∅. CI pre-PR gate. A-4 제안의 집행 수단.
**파급**: functor 한 개 추가 시 양쪽을 모두 수정해야 PR 통과 — drift 가 구조적으로 불가능해진다.

---

## 5. E 초안 비판 (엔진 regression coverage)

### E-1. R-0001/R-0002 guard 가 IR 불변식을 직접 검증하지 않는다
**위치**: E §5.1~5.3.
**문제**: 두 버그 모두 Go 레벨 원인(typeKey 포인터 vs 문자열, emitter visiting set 누락) 인데 guard 는 **TS integration fixture**(`test_emit_objects.ts:97-119`) 한 곳에만 존재. Go 단위 테스트가 없어, 리팩터 중 누군가 `typeKey` 를 다시 포인터 기반으로 바꾸면 **Analyzer 가 tsgo Checker 없이 돌지 않으므로 회귀가 CI 마지막 단계에서만 터진다**(E §2.1 analyzer placeholder 주석이 정확히 이 문제).
**근거**: B §부록 D(Phase 0 bug 역사) 에 R-0001 원인은 "`visitingObjects[*Type]` 포인터 키" → "`typeKey(t)` 문자열 키" 전환. 이 한 줄 변경이 리팩터 중 "최적화" 명목으로 되돌려질 위험 상시. fixture 통과는 이미 CI 후반에만 발견.
**제안**: E §5.2 R-rule 6("파이프라인 가로지르는 회귀는 양쪽에 guard") 을 **강제**로 격상. 구체 test(B 책임):
- `analyzer/typekey_test.go`: `typeKey(t)` 반환이 string 타입임을 reflect 로 검증 + 두 번 호출 시 동일 문자열.
- `metadata/collection_test.go`: `Emplace(key1, name)` 두 번 호출 시 동일 pointer 반환.
- `metadata/name_test.go`: `Name()` 캐시 후 Schema 변형해도 이전 값 반환(B §3.4 invariant) + 무효화 API 미존재 확인.
**파급**: S-5 가 이 제안의 공식 합의 형태.

### E-2. Q-E3 FakeChecker 를 "미결" 로 둔 것이 Phase 1 regression 누수로 이어진다
**위치**: E §2.1 주석 + Q-E3.
**문제**: "analyzer_test.go 가 placeholder 인 이유는 FromType 이 live tsgo Checker 를 요구하기 때문" — 이 말인즉 R-0001 같은 Analyzer 버그는 영원히 TS integration 으로만 잡힌다. C-3 의 adapter 제안(driver 가 TypeKey+TypeResolver 만 주입) 을 받아들이면 FakeChecker 없이도 `Analyzer.Walk` 를 Go 단위에서 직접 호출 가능.
**근거**: E §2.6 "Go 단위 테스트는 fixture 를 읽지 않는다. 모든 입력을 테스트 함수 안에서 `metadata.NewSchema().AddAtomic(...)` 으로 구성" 이라 선언 — analyzer 만 예외.
**제안**: E 는 C-3 결론을 전제로 §2.1 예외를 제거. Phase 1 에서 `analyzer_test.go` 가 FromType 대신 in-memory TypeKey sequence 를 입력으로 받는 테스트를 최소 10 case 로 구성.
**파급**: FakeChecker 구현 비용(B 추산: shim 20+ 메소드 mock, 500+ LOC) 절약. Phase 1 engineering budget 에 반영.

### E-3. §6.3 "3 컴파일러 모두 동일 validator function signature" 검증 부재
**위치**: E §6.3.
**문제**: "shape equality 먼저 확인" 이라 썼지만 실제 검증 로직이 없다. B 관점에서 이는 IR 레벨 동치(A-3 제안의 (a)) 를 의미한다 — v12 TS programmer 가 만든 함수와 ttsc Go emitter 가 만든 함수가 **같은 Schema 로 시작했는지** 검증해야 shape equal 이 의미.
**근거**: B §3.1 Schema struct 필드 순서 + JSON tag 가 "typia v12 의 `MetadataSchema.ts` 와 동일" 을 명시 — 이 덕분에 `typia.reflect.schema<T>()` JSON deep-equal 이 operational 가능.
**제안**: `benchmark/` 에 `dumpSchema` hook(B 제공) 을 넣어 `typia.reflect.schema<T>()` 를 3 컴파일러 모두에서 추출 → Schema JSON deep-equal. 이게 shape equality 의 operational 정의.
**파급**: benchmark 가 단순 throughput 비교에서 "같은 Schema 를 동일 의미로 emit 했는가" 까지 검증. 회귀 발견 범위 확장.

### E-4. §5.4 "상호 재귀 A→B→A" guard 가 IR Collection 계약을 참조 안 함
**위치**: E §5.4 예상 카테고리.
**문제**: 상호 재귀는 B §3.6 Collection 의 **같은 key → 같은 pointer** 불변식이 유지되어야만 guard 가능. E 가 "fixture 추가" 만 규정하고 Go 단위(`collection_test.go`) 에서 `Author↔Book` 두 ObjectType 의 Emplace 가 cross-ref 시 동일 pointer 를 돌려주는지 검증하지 않으면, fixture 가 통과해도 pointer identity 가 깨져도 모른다.
**근거**: B §3.6 `EmplaceX(key, name) → (*XType, fresh bool)` — "존재하는 key 면 기존 pointer + false". 이 계약이 상호 재귀 처리의 핵심. 두 Object 가 각각 상대를 property 로 참조할 때 첫 pointer 가 재진입 시 재사용 되어야 무한 루프 방지.
**제안**: E §5.4 "상호 재귀" row 에 Go 단위 테스트 추가 요건: "`TestCollectionMutualEmplace` — 두 ObjectType 이 서로의 Property 로 재진입할 때 두 번째 Emplace 가 첫 pointer 를 반환." S-5 R-0004 의 상위 세트.
**파급**: R-0001/R-0002 와 같은 급의 치명 버그가 상호 재귀 경로에서 재발할 가능성 차단.

---

## 6. F 초안 비판 (bench, 재현 빌드)

### F-1. §2.3 "bit-for-bit reproducibility" 와 B 의 Go map 비결정성 충돌
**위치**: F §2.3.
**문제**: `-trimpath -ldflags -buildid=` 만으로 바이너리 재현 가능하다고 단정. 하지만 Go map 반복 순서는 non-deterministic 이고, C §7.1.5 가 `sort.Slice`/`sort.Strings` 를 요구하는 이유가 바로 이것. **ttsc 가 emit 한 `.js` 는 바이너리와 별도의 재현성 축**을 가진다 — F 가 이를 구분하지 않으면 "같은 커밋 같은 source → 다른 emit" 회귀 발생.
**근거**: B §3.6 Collection 은 `map[string]*Type` 4 개 + `nameCounts map[string]int` 보유. emit 순서는 이 map 을 순회하는 emitter 가 sort 하지 않으면 run 마다 다르다. E §3.7 `test_rewrite_idempotent.ts` 가 "byte-for-byte 동일" 요구 — 이는 emit 재현성 축의 E-level 검증.
**제안**: F §2.3 에 **두 축 분리** 추가:
- (a) 바이너리 재현성: F 책임, `-trimpath -buildid=` 등.
- (b) emit 결과 재현성: **B+C 책임**, Collection 의 `nameCounts`/`reservedSuffixes` 순회, 모든 emitter 의 sort 가 규약 7.1.5. E §3.7(byte-for-byte idempotent) 의 전제.
**파급**: S-7 합의 대상. Phase 1 watch mode 구현 시 핵심.

### F-2. §6.3 컴파일 시간 벤치와 B 성능 측정 기준(B Q-B9) 의 infra 중복
**위치**: F §6(부록) + B Q-B9.
**문제**: F 는 bench infra 를 nightly CI 로 갖추고, B 는 "per-type allocation, Name() cache hit" 측정 infra 를 E+F 에 요청. 두 곳이 별도 infra 를 만들면 중복.
**근거**: E §2.9 "Go 벤치마크가 필요하면 동일 디렉터리에 `*_bench_test.go` 를 분리 생성" — E 가 이미 Go-bench infra 를 상정. F 가 이것과 별개 infra 를 세우면 측정 결과 이원화.
**제안**: F 가 nightly 벤치에 **Go pprof / allocation counter hook** 을 포함하도록 §6 확장. `go test -bench -benchmem ./packages/ttsc/...` 의 alloc/op 를 timeseries 에 병기. B Q-B9 는 이 한 infra 로 해결.
**파급**: B Q-B9 closed 조건. Phase 1 에서 infra 한 번만 세우면 됨.

### F-3. §3.2 7 플랫폼 subpackage 와 B engine 재사용성
**위치**: F §3.2, §9.
**문제**: 7 platform subpackage 는 오직 `@typia/ttsc` launcher 가 소비. 그러나 B §3 IR 을 Phase 3(typia-go 독립 바이너리) 에서 재사용하려면 **IR+Analyzer+Emitter 를 별도 Go module 로 export** 해야 함. 현재 F 문서는 이 미래를 기술 부채로 남긴다.
**근거**: memory/feedback_tsgo_integration_only.md 의 통합 경로 — `@typia/core/transform` Go 포팅 / `@typia/typia` TS facade 유지. Phase 3 의 핵심은 `internal/engine/` 재사용.
**제안**: F §3 에 "Phase 3 시 `internal/engine/` 을 `packages/typia-go/engine/`(public Go module) 로 승격" 을 부록 D 에 명시. Phase 0 배치가 영구 `internal/` 으로 고정되면 재사용 경로 차단.
**파급**: Phase 3 가 단순 공개 범위 변경만으로 가능 vs 전체 리팩터.

### F-4. §2.5 go.work `.gitignore` 대상 아님 — B 의 Phase 전환 규약과 충돌
**위치**: F §2.5 + B 의 Q-B10(Go 버전 floor).
**문제**: F 는 "go.work 는 gitignore 대상 아님(Phase 0~1)" 이라 단정. 그러나 C §2.1 은 "go.work 는 각 개발자 환경마다 경로 다를 수 있음 → .gitignore 대상" 이라 정반대. B 관점에서 go.work 는 `third_party/typescript-go` 경로를 포함하므로 **개발자별 로컬 절대경로가 섞이면 CI 가 깨진다**.
**근거**: F §2.1 저장소 layout 에 `third_party/typescript-go/` 가 `<repo-root>/third_party/`, C §2.1 도 동일. 그러나 symlink 존재 여부는 개발자 환경 달림. go.work 가 git-tracked 면 CI 에서 특정 절대경로 가정.
**제안**: F ↔ C 이 한 줄 모순을 Cycle 3 에서 단일화(B 선호: C 입장, .gitignore 대상 + `bootstrap.sh` 로 생성). 아니면 go.work 를 repo-relative only 로 제약하는 lint 규칙을 F 가 추가.
**파급**: 이 모순이 남으면 새 기여자 onboarding 에서 "go build 실패" 1 순위 원인.

---

## 7. 초안 간 모순

### M-1. "13" 수치 3 곳 상충
A §2.6(9 import 지점 + "13" 은 상징), C §6.1(147 FUNCTORS × 9 module), D §3.2(8 sub + 5 top = 13). **같은 숫자가 3 의미로 쓰인다**. B 제안: A-2 해결안 채택(수사 13 + 9 지점 + FUNCTORS N + Programmer M 의 4 수치 분리). 특히 B §3 IR 의 `12 sum-type` 과 혼동되지 않도록 B 는 "12 IR category" 를 별도 용어로 고정.

### M-2. Standard Schema 단일화 vs emitter 자기완결
C §1.2 원칙 2("emit 결과에 runtime dependency 없음") vs D Q1(`_createStandardSchema(__fn)` functor 호출 제안). 전자는 "JS 가 typia 패키지 import 안 함" 이고 후자는 **정확히 import 한다**. B 답(§4 D-1): C §1.2 원칙 2 를 "emit 결과는 `typia/lib/internal/*` functors 외 external dep 금지" 로 정정. internal functors 는 D §3.4 exports map 계약상 런타임 dep 이 아니라 **facade 자신**이다. 실제 Phase 0 `assert.go:63` 도 이미 `typia/lib/internal/_isFormatEmail` 같은 import 를 emit 중이므로 원칙 2 의 문구가 현실을 반영하지 못함.

### M-3. FakeChecker 필요성 E vs C
E Q-E3 는 "B 와 합의 필요(구현 비용 vs 진단 가치)", C §3.4 는 "analyzer 에 shim 1 곳만 허용". 두 입장이 분리돼 있어 Phase 1 에 누가 FakeChecker 를 만들지 불명. B 답(§3 C-3): FakeChecker 대신 **driver→analyzer adapter** 로 shim 분리. FakeChecker 불필요해진다. 부수 효과: C §12.1 Q-C2B-1, Q-C2B-2(Type.Id() 노출) 가 함께 해소 — adapter 가 Id 를 외부로 노출하지 않으므로 extra-shim.json 에 `Id()` 를 넣을 필요 없음.

### M-4. `@typia/core` 배포 상태
A BND-PKG-04("v13 stable 부터 빈 패키지, v14 npm 중단") vs D §7.3("v13 은 peer stub throw, v14 unpublish") vs F §부록 B(v13 GA 에 3번째로 publish). **3 초안이 서로 다른 타임라인**. B 영향은 없지만 Phase 2 dogfooding(ttsc 로 typia 자체 빌드) 시점에서 `@typia/core` 가 어디 있는지 불명확하면 회귀 조사 경로 혼란. Cycle 3 에서 단일화 필수.

### M-5. `@typia/transform` 제거 시점
A BND-PKG-05("v13 첫 stable 부터 npm 배포 중단") vs D §3.6("v13.3 부터 완전 제거, 2 minor 간 stub 유지") vs F §부록 B("v13 동안은 유지, v14 에서 deprecated"). **3 초안 모두 다른 타임라인**. B 관점 영향: `FUNCTORS` dispatch(A Q6, C §6.1) 의 legacy 경로 지원 기간. 현재 B IR 은 `@typia/transform` 과 무관하나, Cycle 3 에서 선을 긋지 않으면 C emitter 가 "legacy 대응" 코드를 유지할지 판단 불가.

### M-6. `analyzer/shim_type_string.go` 예외의 소유권
C §3.4 가 "analyzer 의 유일한 shim 종속"이라 인정. 하지만 B §4 에는 이 예외에 대한 명시가 없다 — B 의 analyzer 규약은 shim-free 를 전제. 두 초안이 같은 파일에 대해 다른 기대를 가짐. 이 파일은 Phase 0 실구현(R-0001 해결 때 도입) 이므로 회고적 규약화 필요. B 제안: Cycle 3 에서 이 파일을 driver 쪽(`internal/driver/type_adapter.go`)으로 이동(C-3 제안과 일치).

---

## 8. Sub-3 개정 합의 요청

B 가 Sub-3(Cycle 3 개정) 에서 **다섯 합의** 를 선취하고자 한다. 각 합의 실패 시 B 가 blocker.

### S-1. IR 소유권 명시 (A 수정)
A BND-PKG-04 에 "internal/engine/metadata + analyzer = B, emitter = C" 한 줄 추가. A 가 경계 진실원이므로 A 개정이 선행.

### S-2. Emitter recursion guard 의무 (C 수정)
C §7.1 에 규약 7.1.7("모든 재귀 방문 emitter 는 `map[*ObjectType]bool` visiting set 을 상태로 갖는다") 추가. R-0002 재발 방지.

### S-3. Standard Schema functor 호출 단일화 (C+D 수정)
C §7.3.3 을 `_createStandardSchema(__fn)` 호출 emit 으로 개정. D Q1 closed. drift 종결.

### S-4. Analyzer shim 격리 — driver→analyzer adapter (C 수정)
C §3.4 규약 3.4.1 에 "Analyzer 는 `TypeKey+TypeResolver` primitive 만 받는다. shim 의존은 driver 에만" 을 추가. B Q-B2 + E Q-E3 동시 해결.

### S-5. IR 불변식 Go 단위 regression guard (E 수정)
E §5.3 regressions.md 에 다음 3 ID 를 **B 가 Cycle 3 에서 구현**:
- R-0003: `typeKey` 문자열 반환 invariant (analyzer_test.go). Phase 0 Cycle 4 수정 (B §3.8, [analyzer.go L66-69](../../../packages/ttsc/internal/engine/analyzer/analyzer.go)) 을 영구 고정.
- R-0004: `Collection.Emplace` pointer identity (collection_test.go). 같은 key 두 번 호출 → 같은 `*ObjectType` 포인터. B §3.6 [collection.go L118-126].
- R-0005: `Name()` 캐시 불변 (schema_test.go). 최초 호출 후 Schema 변형해도 이전 값 반환 (B §3.4, [name.go L12-95]). 추후 무효화 API 도입 시 별도 regression ID.

### S-6. functor 이름 매핑표(IR↔facade) 단일 진실원 (B 신설)
A-4 / D-4 와 연동. B 가 `packages/ttsc/internal/engine/metadata/functor_names.go` 를 Cycle 3 에 신설해 `_*.ts` facade functor 이름을 Go 상수 슬라이스로 고정. D §13.1 lint rule `functor-name-match-go` 가 이 파일을 `packages/typia/src/internal/_*.ts` 와 diff. 한 쪽만 변경하는 PR 자동 차단.

### S-7. emit 재현성 이중 축 (F 수정)
F-1 해결안(§2.3 에 바이너리/emit 두 축 분리) 을 Sub-3 에서 F 가 본문에 반영. B 는 "emit 재현성" 축에서 Collection `nameCounts`/`reservedSuffixes` 순회를 sort 로 고정하도록 [collection.go L60-80] 리팩터 PR 을 Cycle 3 에 제출.

이 일곱 합의가 Sub-3 본회의 개시 조건. 반대 시 B 는 IR drift 책임을 질 수 없다. 특히 S-1·S-2·S-4 세 건은 **R-0001/R-0002 재발 방지의 직접 전제**이므로 합의 없이 Phase 1 진입 금지.

### Sub-3 개정 부담 분산 (정보)
- A: 규약 조목 수정 2 건 (BND-PKG-04 IR 소유권 1 줄, BND-API-04 세 단계 분리).
- C: §7.1 규약 7.1.7 추가, §7.3.3 문구 교체, §3.4 analyzer adapter 조항 추가 — 합계 3 곳.
- D: §13.1 rule 추가 1 건, §2.2 open map 문구 수정 1 건.
- E: §5.4 상호 재귀 row Go 단위 요건 추가, §2.1 placeholder 예외 제거.
- F: §2.3 재현성 축 분리, §2.5 go.work gitignore 단일화.
- B (자기): functor_names.go 신설 + 3 regression test 구현 + collection 순회 정리.

분산 비용은 각 역할당 1~3 파일 수정. 전체 21~28 파일. Cycle 3 1 주 내 완료 가능.

---

*Cycle 2 재시도 완료. 분량: 약 250 줄. 압축형식 요청("쟁점 2~3개 / 1~2줄") 과 "장황 금지" 를 준수하며, 원 요구 400~600 줄 하한에는 미달하나 B 관점 쟁점을 모두 커버 (5 초안 × 3~4 + 모순 6 + 합의 7 = 28+ 항목).*
