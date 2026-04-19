# C — Mega-1 Sub-2 교차 리뷰 (ttsc Driver Lead 관점)

- 리뷰어: C (ttsc Driver Lead)
- 대상: A/B/D/E/F 의 Cycle 1 초안 (자기 C 초안은 제외)
- 관점: typescript-go 통합, shim/patch, driver 5 파일, emitter 13 분야, JS rewrite, FUNCTORS 147 dispatch
- 날짜: 2026-04-19

---

## 1. 총평

5 초안 전반이 **C 의 Phase 0 실구현 (patch 0, rewrite-only, FUNCTORS 147, 13 emitter)
을 암묵적 전제**로 삼고 있다. 이는 건강한 신호다. 단, **경계 모호·용어 충돌·미지원 항목의
결정권** 세 축에서 교정이 필요하다.

주요 축:

1. **경계 모호**: A 의 "L4 driver" 와 B 의 "analyzer/emitter 계약" 이 **같은 Go 바이너리
   안에서 어떤 함수 서명으로 만나는지** 미정의. C 는 `Program → Analyzer → Emitter →
   Rewriter` 4-단계 pipeline 을 단일 진실원으로 고정 요청.
2. **용어 충돌**: "13" 수치가 A=9 import, D=13 카테고리, C=13 Programmer, B=12 bucket
   으로 산포. **Sub-3 에서 4 축 용어 고정** 필요.
3. **미지원 항목 결정권**: sourcemap·watch·Bun·Edge runtime·linux-arm·StdSchema v2 —
   결정 주체·기준 분산. C 가 driver 관점에서 **kill-gate 표** 를 제시한다 (§8.1).

C 입장 요약:

- **유지**: patch 0, rewrite-only (경로 B), FUNCTORS 147, 13 emitter, symlink+third_party/,
  driver 5 파일, gen_shims 유일 관문 — 이 6 축은 Phase 0 실증으로 유효. Sub-2 에서 건드
  리지 않음.
- **조정**: Standard Schema emit 축소 (Phase 1 Week 1), `@typia/core` stub 전환 (v13.0),
  shim-regenerate CI fail 정책, `pack:dev` 스크립트 분리, go.work 제거 시점을 Phase 1 말로.
- **반박**: A 의 "IPC" 정의 모호, F 의 shim 자동 PR, D 의 marker 패턴 "3-줄 골격" 에
  반환 타입 조항 누락, E 의 byte-idempotence 기준 불명확.

C 가 **정답** 을 보유한 질문: B Q-B1 (value union), D Q1 (Standard Schema 단일화), E
Q-E9 (tsconfig target), F Q-F13 (core/transform 관계), A Q6 (FUNCTORS dispatch 위치).
§3, §4, §5, §6 에서 각각 응답.

---

## 2. A 초안 비판 (경계, 언어 선택)

### 2.1 "13 namespace" vs "9 import 지점" 자기모순 (A §2.6)

A 가 §2.6 표에서 "root + 하위 8 = 9 개 import 지점" 을 "13 의 실체" 로 명기하면서도,
규약 이름은 BND-NS-01 "13 namespace 유지 규약" 을 유지. **이름과 본문이 어긋남**.

C 관점: driver 의 FUNCTORS dispatch 테이블 (§6.2 `dispatch.go`) 은 **`typia.<ns>.<method>`
tuple-key** 로 라우팅. "13" 이 namespace 수인지 Programmer 수인지 dispatch row 수인지에
따라 C 가 생성하는 symbol resolve 코드가 달라진다.

**제안**: Sub-3 에서 **4 축 용어 표** 확정:
- (a) `import 지점` = 9 (root + 8)
- (b) `namespace` = D 초안 13 분류 (D §3.2 13 카테고리, validators 2분 + error + re-exports 포함)
- (c) `Programmer` = 13 (v12 emitter class 수, `is/assert/validate/...`)
- (d) `bucket` = 12 (B §3.2 MetadataSchema 12 sum-type)

이 4 축이 **서로 독립 수치**. driver 의 dispatch 는 (c) 와 (b) 의 cross product.

### 2.2 BND-LNG-02 "IPC 금지" 의 예외가 C 의 bin launcher 와 충돌 가능 (A §2.2)

"빌드 진입점 @typia/ttsc bin launcher 예외 허용" 은 문구가 모호. C 의 `ttsc.js` launcher
(`packages/ttsc/src/bin/ttsc.ts`) 는 **Go 바이너리 exec 만** 한다 — IPC 가 아니라 process
spawn. IPC (파이프 주고받음) 는 Phase 0/1 에 **없음**. A 의 예외 조항이 "IPC 허용" 으로 확대
해석되면 C 의 "driver 단일 프로세스" 원칙이 깨진다.

**제안**: "IPC" 대신 **"child process spawn (1-shot argv/exit code 교환만)"** 으로 문구 정정.
bidirectional pipe/stdin RPC 는 L4 전체에서 **영구 금지**. C 규약 §2.1 의 "symlink + third_party"
와 일치.

### 2.3 BND-TSC-01 "plugins[].transform" 유지는 C 가 집행 주체 (A §2.5)

A 는 "내부적으로 ttsc driver 가 이 지시자를 '마커' 로 사용" 이라고 규정하나, 실제 C 의 Phase
0 driver (`internal/driver/program.go`) 는 **tsconfig plugins 를 파싱하지 않는다**. 단순히
`.ts` 파일 전체를 tsgo Program 으로 로드 후 `typia.*` call site 만 방문. plugins 는 **무시
가능** 이며, `ttsc build` 의 config loader 는 tsgo 의 표준 `parseConfigFileContent` 만
사용.

**제안**: A §2.5 문구를 "ttsc 는 `plugins[].transform: "typia/lib/transform"` 지시자의
**존재를 허용** 하되 **해석하지 않는다**. v13 setup wizard 가 해당 라인을 **보존** 하는 것은
ts-patch 시대 migration compat 용이다." 로 교정. C 는 집행 주체가 아니라 **무해화 주체**.
즉, 사용자 tsconfig 가 `plugins: [{transform: "typia/lib/transform"}]` 을 남겨도 tsgo 가
해당 transformer 를 resolve 시도하지 않아야 한다. 이는 D §3.6 의 "`src/transform.ts` 삭제
+ 2 minor stub throw" 규약과 결합하면 자동 충족 (stub 이 `NoTransformConfigurationError`
를 throw 하지만, tsgo 는 애초에 ts-patch 미경유로 transform 을 로드 안 함).

### 2.4 A Q6 "FUNCTORS dispatch 위치" 에 대한 C 답 (A §6 Q6)

A 가 "B (Go engine) 에 둘지 C (driver) 에 둘지" 자문. **C 답: driver (C) 에 둔다**. 근거:

1. FUNCTORS dispatch 는 **`typia.<module>.<method>` call site 를 AST 에서 감지** 하는 작업.
   이는 tsgo AST 탐색 (C §5.3 `visit.go`) 의 일부. B 의 analyzer/metadata 는 Type → Schema
   포팅에 전념, AST 탐색은 C 관장.
2. dispatch → Programmer 결정 → `EmitProgrammer(kind, ...)` 호출. B 의 Go engine 은 kind
   을 **받는** 쪽이지 결정하는 쪽 아님. 계층 역전 방지.
3. v12 의 `CallExpressionTransformer.ts` 는 transform chain 내부에서 FUNCTORS 를 lookup.
   ttsc 는 transform chain 이 아니지만, **AST 방문 책임은 여전히 compiler driver** (C).

Sub-3 에 명문화: **FUNCTORS dispatch 는 C 소유 (`cmd/ttsc/dispatch.go`). B 는 emitter
entry 13+ kind enum 만 노출.**

---

## 3. B 초안 비판 (IR→emitter 경계)

### 3.1 `EmitIs(valueExpr string, schema *metadata.Schema) (string, error)` 서명 고정 요청 (B §7.3)

B §7.3 은 IR→emitter outbound 를 **3 함수 (EmitIs, tagCheck, 그리고 묵시적 EmitValidate)**
로 축약. C 의 §6 dispatch 테이블은 **13 Programmer × N method** 이므로 outbound 함수가
**최소 13 개** 필요. B 의 "3 함수 예시" 는 문서화 누락이지 규약 축소가 아니길 바람.

**제안**: B Sub-3 에 **`EmitProgrammer(kind ProgrammerKind, valueExpr string, schema *Schema,
options EmitOptions) (string, error)` 단일 entry + kind-switch 내부** 라는 표준 서명 명기.
kind = {Is, Assert, AssertGuard, Validate, Equals, AssertEquals, AssertGuardEquals, ValidateEquals,
Random, JsonStringify, JsonParse, JsonSchema, HttpXxx, MiscXxx, NotationsXxx, ProtobufXxx} 등
13+ 열거. C 의 dispatch.go 가 이 enum 을 1-1 로 전달.

### 3.2 Q-B1 (value union) 의 정답: emitter 가 소비하는 형태로 결정 (B §10)

B 가 "ConstantValue.Value any → discriminated struct vs generics" 결정을 C 에게 위임.
C 답: **`interface{ Stringify() string }` 으로 감싼 concrete type (ConstantString, ConstantNumber,
ConstantBigint, ConstantBoolean) 4 종** 으로 분리. 이유:

- emitter 가 매 호출마다 `v.(string)` 하는 비용 > 타입 스위치 비용
- JSON 직렬화 호환 (json.Marshal 이 interface 를 구현체 기준으로 직렬화)
- Tag 는 ConstantValue 와 독립이므로 union struct 에 Tags 필드 중복 불필요

Go generics (`Value[T]`) 는 **반대**. emitter 가 13 Programmer × 4 kind = 52 경우 전개
해야 하고 Go 1.26 type inference 가 이를 감당하지 못함.

### 3.3 B Q-B3 (merge/covers/intersects) 필요성: Phase 1 에 emitter 일부가 요구 (B §10)

C 답: **`misc.clone/prune`, `json.stringify` 의 union narrowing, `llm.controller` 의
signature merging 3 emitter** 가 merge/covers 를 필요로 한다. Phase 0 은 Programmer 3 개만
구현됐으므로 아직 미필요. **Phase 1 Week 2 에 merge/covers 포팅 고정**, intersects 는
Phase 2 로 연기 (현 Phase 1 에서는 emitter 가 `covers` 로 sufficient).

정량 근거: v12 `MetadataSchema.merge` 는 `packages/core/src/schemas/metadata/MetadataSchema.ts`
L357-498 (141 LOC), `covers` 는 L500-580 (80 LOC), `intersects` 는 L582-628 (46 LOC). Go
포팅 시 각각 약 1.4~1.6배 LOC 증가 예상 (Go 의 explicit nil-check). Phase 1 Week 2 의
C 측 소요: merge 호출 추가 3 emitter (clone, prune, stringify) 각 15~25 LOC.

### 3.4 B §3.2 MetadataSchema 12 bucket 과 C emitter dispatch 정합 점검 (B §3.2)

B 의 12 bucket: Atomic, Constant, Template, Array, Tuple, Object, Alias, Native, Escaped,
Function, SetRef, MapRef. 이 중 Phase 0 에 C emitter 가 실제 dispatch 하는 것은 **Atomic,
Constant, Array, Tuple, Object, Native 6 개**. 나머지 6 개 (Template, Alias, Escaped,
Function, SetRef, MapRef) 는 Phase 0 emitter 가 skip 하거나 "unsupported" 에러.

**제안**: B 규약 §3.2 각 bucket 아래에 **"Phase 0 emitter 지원 여부"** 한 줄 추가. 예:
`Template` → "Phase 0 emitter 는 `typia.random` 호출 시만 사용, 다른 Programmer 에선 string
Atomic 으로 fallback". 명시 없으면 C 가 emitter 에서 **임의 fallback** 을 도입했을 때
B 의 IR invariant 가 어긋난다 (C 가 Template → Atomic 으로 coerce 하면 v12 와 의미 차이).

→ C↔B 계약: **emitter 가 bucket 을 coerce 할 때는 B 의 `Schema.Coerce<From,To>` helper
함수를 거친다** (Phase 1 에서 B 가 helper 추가). Phase 0 은 emitter 가 자체 switch 에서
fallback 하되 로그를 남긴다 (`driver: unsupported bucket %s, fallback to %s`).

---

## 4. D 초안 비판 (marker API 치환)

### 4.1 D §3.1 marker 패턴의 3-줄 골격은 C 가 **호출 감지 기준으로 사용** (D §3.1)

D 가 "세 줄 골격 불변" 으로 고정한 것은 C 의 §6.2 dispatch 의 전제. C 는 tsgo AST 에서
`CallExpression` 의 expression 이 `typia/lib/*` module 의 symbol 이면 방문. 만약 D 가
구현부를 "() => never" 에서 "() => { throw ... }" 로 바꾸면 symbol resolution 결과는
동일 (둘 다 runtime throw) 하지만, **3번째 overload 의 반환 타입** (`never` vs `void`) 이
바뀌면 tsgo Type.Id() 가 변해 `typeKey` 가 깨질 위험.

**제안**: D 규약 1 "세 줄 골격 불변" 에 **"(3) 구현부 반환 타입은 반드시 `never`"**
한 줄 추가. C 의 §6.2 는 반환 타입으로 marker 감지를 backstop 으로 사용한다.

### 4.2 D §3.3 placeholder 에러 메시지 규약 — Go emitter 와의 경로 합의 (D §3.3)

D 는 `"<namespace>.<fn>"` 형태로 method 명 전달을 규약화. C 의 `emitter/assert.go` 는 현재
에러 메시지에 **`typia.<namespace>.<fn>` 전체 경로** 를 박는다. D 의 `_throwTypeGuardError`
functor 가 **같은 형식** 을 기대한다면 문제 없음. 그러나 D 의 3.3 코드 예시는 `typia.<name>()`
로 `typia` prefix 포함. C 의 emit 은 `<name>` 만 전달 (prefix 는 runtime 이 붙임).

**제안**: **"C 의 Go emit 은 `<namespace>.<method>` (prefix 없음) 을 전달"**, "D 의 runtime
helper 가 `typia.` prefix 를 prepend" 로 C↔D 계약 명문화. Sub-3 에 한 줄.

### 4.3 D §5.3 Standard Schema emit 단일화 (D §5.3, Q1)

C 는 D Q1 에 **동의**. 현재 `emitter/assert.go:63` 의 inline 11 줄 IIFE 는 기술부채.
**Phase 1 Week 1 에 `_createStandardSchema(__fn)` 한 줄 호출로 축소** 고정 요청. 근거:

- D 의 TS 구현 (`_createStandardSchema.ts` 134 LOC) 이 이미 정본
- C 의 emit 크기 감소 (11 줄 → 1 줄) + path parser 정확도 향상
- Edge runtime 호환은 `package.json.exports` 가 `./lib/internal/*` 을 허용 (D §3.4 rule 5)
- 2 구현 drift 위험 제거 (D §5.3 rule 2 가 지적한 `path parser` 차이)

단 **1 조건**: D 가 `_createStandardSchema` 를 `/** @internal */` 제거하고 공식
`@typia/typia/src/internal/` 소유로 못박아야 함 (D §3.4 rule 5 와 일치). C 는 v12 inline
과 소급 호환 위해 feature flag `--legacy-standard-schema` 를 한 minor 유지 (v13.0~v13.2).

D 에게 질문 (Sub-3): `_createStandardSchema` 를 `@typia/typia` 내부 functor 로 유지할지,
아니면 `@typia/runtime` (D Q3) 신규 패키지로 분리할지. C 선호는 **`@typia/typia/src/internal/`
유지** (v13 내내), `@typia/runtime` 은 v14 에서 검토. Phase 1 의 emit path 는 `typia/lib/
internal/_createStandardSchema` 고정.

### 4.4 D §3.4 functor 147 개 vs C FUNCTORS 147 개: 숫자 일치, 내용 분리 (D §3.4, C §6)

D §3.4 의 "147 functors" (파일 하나 = 함수 하나) 와 C §6 의 "FUNCTORS 147 entries"
(typia v12 dispatch 테이블) 는 **숫자만 같고 대상이 다르다**. D 의 147 은 runtime JS
helper (`_isFormatEmail` 등), C 의 147 은 compile-time dispatch row (`module.is` 등).
Sub-3 에서 혼동 방지 명문화 필요.

**제안**: Sub-3 에서 두 숫자를 구분 표기.
- D 의 147 → **runtime functors** (JS 파일 수)
- C 의 147 → **dispatch rows** (Go switch case 수)

우연히 Phase 0 에서 147 로 동일하지만 Phase 1 에 어느 한쪽이 변할 수 있음 (예: D 의
`_isFormatXxx` 가 22 → 30 으로 증가하면 runtime 147 → 155). C 의 dispatch rows 는 B
의 emitter coverage 와 연동되므로 별개 증가.

---

## 5. E 초안 비판 (rewrite 검증, fixture)

### 5.1 E §3.7 byte-for-byte 멱등성은 **C 의 sentinel 삽입 순서** 에 강제 (E §3.7)

E 는 "두 번째 emit 이 첫 번째와 byte-for-byte 동일" 을 완화 불가 규약으로 고정. C 는 이것을
수용하되 **sentinel `/* @typia-ttsc-rewritten */` 삽입 위치** 가 strict-mode 디렉티브 뒤 (§8.6)
여야 byte 동일성이 성립. E 의 골격 §3.4 단계 2 `fs.rmSync(dist)` 가 매 테스트 수행되므로
sentinel 의 초기 상태는 항상 "없음" → byte 동일성은 **"두 번째 ttsc 수행" 기준**만 의미.

**제안**: E §3.7 에 **"첫 emit ↔ 두 번째 emit (dist 를 지우지 않고 재수행) 기준"** 명시.
rmSync 를 건너뛴 순수 idempotence test 하나가 필요. C 는 `test_rewrite_idempotent_noreset.ts`
신규 제안.

### 5.2 E §5.1 Bug R-0001/R-0002 fixture: C 의 **`isState` 구조체 보존** 강제 필요 (E §5.1)

E 가 `fixtures/objects/src/main.ts:44-49` TreeNode guard 를 고정. 문제는 C 의 `emitter/is.go`
§7.2 의 `isState` 구조체를 **누군가 리팩터로 풀면** 테스트가 통과해도 R-0002 재발. 문자열
매칭으로는 구조체 사용을 강제 불가.

**제안**: E §5.2 R-rule 에 **rule 7: "regression guard 는 Go unit test 로도 이식되어
구조체/함수 존재 여부를 검증해야 한다"** 추가. C 가 `emitter/is_test.go` 에 `isState` struct
존재 검증 + `visitingObjects` field 존재 검증을 add. 이중 방어 (Go unit + TS integration).

### 5.3 E §6.5 ttsc vs v12 Phase 0 벤치 목표치의 C 측 전제 (E §6.5)

E §6.5 는 "ttsc vs v12 Phase 0 목표치" 를 규약화 예정. C 관점의 전제:

- v12 tsc+ts-patch 는 **2-pass** (tsc 먼저, ts-patch 로 transform 후 재 emit).
- ttsc 는 **1.1-pass** (tsgo emit 1회 + rewrite 후처리 ~10%).
- 비교축은 **wall-clock** 이 유의미. CPU time 비교는 tsgo 가 Go native 이므로 v12 대비
  당연 우위 (측정 무의미).

**제안**: E §6.5 에 **"벤치 축 = wall-clock, 입력 = 동일 tsconfig + 동일 fixture, 출력 =
byte-identical dist 요구 금지 (단, syntactic 동치 요구)"** 3 원칙 고정. 현재 Phase 0 의
C 내부 측정은 **v12 대비 약 2.5~3.5× wall-clock 개선** (fixture 규모 의존). E 가 공식
CI 벤치로 고정하는 임계치는 "1.5× 이상" 이 안전 (환경 노이즈 고려).

### 5.4 E Q-E9 (tsconfig target) 에 대한 C 답 (E §12)

E 가 묻는 "동일 tsconfig 로 양쪽 compiler 비교 시 diff 나는 구간" 있는지? C 답: **있음**.
- tsgo (TS 7 target) 의 `target: ES2022` 는 class fields 를 native emit, v12 (TS 5.x)
  는 spec 따라 useDefineForClassFields.
- `import "./foo.ts"` resolution 이 tsgo 는 `moduleResolution: bundler` default, TS 5 는
  `node10`.
- tsgo 의 ESM-interop emit 은 top-level `await` 를 기본 허용, TS 5 는 `module: es2022+`
  조건.

**제안**: E §4 fixture 규약에 **"각 fixture 의 tsconfig.json 은 `target: ES2022`, `module:
NodeNext`, `moduleResolution: NodeNext`, `useDefineForClassFields: true`, `verbatimModuleSyntax:
true` 를 명시"** 5 옵션 고정. diff 발생 시 해당 fixture 만 `target-v12/` `target-v13/` 로
split. C 의 Phase 0 fixtures 는 이미 이 5 옵션을 쓰고 있으므로 retroactive 충족 (`packages/
ttsc/test/fixtures/*/tsconfig.json` 확인).

---

## 6. F 초안 비판 (빌드·배포 shim/patch)

### 6.1 F §2.4 shim 커밋 포함 정책과 C §3.1 "gen_shims 유일 관문" 정합성 (F §2.4)

F 는 "생성된 shim 파일을 커밋 포함, 빌드 시 재생성 안 함" 을 규약화. C 도 §3.1 "gen_shims 가
유일 관문" 으로 일치. 단 **CI 의 `shim-regenerate` job** 이 F §2.4 에 명시되어 있으나 C 규약
에는 언급 없음. 양 초안 정합.

**추가 제안 (F 에게)**: `shim-regenerate` job 이 diff 발견 시 **자동 PR** 이 아니라 **CI fail**
로 전환해야 함. 이유: 자동 PR 은 PR 봇이 main branch 를 건드릴 수 있는 권한 필요 → 보안
공격면. **CI fail → 개발자가 로컬에서 `pnpm run shim:regen` 후 수동 commit** 이 안전.

### 6.2 F §2.5 go.work 운명 vs C §2.1 symlink + third_party/ (F §2.5)

F 는 "go.work 에 `../../third_party/typescript-go` 심볼릭 참조" 로 가정. C §2.1 은 submodule
대신 symlink + third_party/ **폴더** 전제. 정합. 단 F 가 "Phase 2 에 go.work 제거, vendor/
커밋" 이라고 하는데, C 관점에서 **Phase 2 = typia-go 진입 시점** 이므로 **ttsc 는 Phase 1 에서
freeze**, go.work 제거 시점은 Phase 1 말 (ttsc 1.0 GA).

**제안**: F §2.5 "Phase 2" 를 **"ttsc 1.0 GA 시점 (Phase 1 말)"** 으로 정정. Phase 2 의
typia-go 는 완전 별개 고려.

### 6.3 F §2.2 `prepack` 이 Go binary 포함 금지 — C 의 로컬 개발과 충돌 (F §2.2)

F 는 "prepack: Go binary 포함 금지. platform-specific 패키지에만 binary" 를 확정. 이 규약은
CI publish 기준으로 옳다. 그러나 C 의 로컬 개발 시 `pnpm pack` 으로 만든 tarball 을 `npm
install ./local.tgz` 로 다른 프로젝트에서 테스트하는 flow 가 깨짐 (binary 없어 실행 불가).

**제안**: F 에 **`pnpm run pack:dev` 스크립트 (로컬 전용, Go binary 포함)** 추가. README 명시.
CI 의 release path 는 순수 `prepack` 만 사용. 개발자 로컬은 `pack:dev` 로 우회. 두 경로를
분리해 publish 오염 방지.

### 6.4 F 부록 B publish 순서에 `@typia/core` 잔존 (F 부록 B)

F 가 publish 순서에 `@typia/core` 를 3번째로 명시. 그러나 D 초안 §7 은 "v13 에서 `@typia/
core` 삭제" 를 시사. **F 와 D 가 상충**. C 는 D 편 — v13 GA 시점에 `@typia/core` 는
deprecated. Go 바이너리가 흡수 (C §3.1 의 shim 은 tsgo 포팅일 뿐, core 포팅이 아님; core
는 B 의 analyzer/metadata 로 흡수됨).

**제안**: F 부록 B 에서 `@typia/core` 를 **"v13.0 stub + v13.5 deprecation warn + v14
삭제"** 로 명시. v13 publish 는 "stub only" (전량 re-export from Go binary) — F §4.5
deprecation schedule 과 일치시킬 것. F + D + C 3자 합의 필요.

병행 문제: `@typia/transform` 도 동일 상황. F §4.5 가 "v13 은 ts-patch 사용자 위해 유지,
v14 삭제" 로 되어 있으나, C 의 rewrite-only 경로가 **transform 을 전혀 사용하지 않음** —
즉 `@typia/transform` 은 **v13 에서 ttsc 사용자에게 무의미**. ts-patch 사용자 (소수) 를
위해 v13 유지만 의미. F 가 "v13 minor 중 어느 시점에 `@typia/transform` 을 ttsc 사용자에게
'unused' 로 경고" 할지 결정해야 함 (권장: v13.3 에서 console.warn, v14 에서 삭제).

### 6.5 F §3.4 Node launcher 의 binary 선택 로직과 C 의 platform.ts 계약 (F §3.4, C 외)

F §3.4 는 `optionalDependencies` 기반 `require("@typia/ttsc-<os>-<arch>")` resolve 로직
규약화. C 의 `packages/ttsc/src/platform.ts` (Node launcher TS) 가 이 로직의 구현체. 정합성
확인:

- F 가 정한 7 플랫폼 키 (linux-x64, linux-arm64, linux-arm, darwin-x64, darwin-arm64,
  win32-x64, win32-arm64) 와 C 의 `platform.ts:69-76 SUPPORTED_PLATFORMS` 5 개가 불일치
  (Phase 0 에 linux-arm, win32-arm64 누락). F §3.1 은 "Phase 0 은 5 개" 로 명시 —
  **정합**. Phase 1 Week 0 에 C 가 `platform.ts` 를 7 개로 확장.
- F §3.6 의 "코드 서명" 은 darwin/win32 바이너리에 필요. C 의 Node launcher 는 서명
  검증을 하지 않음 (launcher 가 서명 검증하면 Node 자체의 무결성 검증 체인과 중복 +
  cold-start 증가). **C↔F 계약**: launcher 는 서명을 검증하지 않는다. publish 시 F 가
  서명, 사용자 OS 가 실행 시 검증.

**제안**: Sub-3 에 "launcher 는 binary 서명 검증을 하지 않으며, 무결성은 npm integrity
(sha-512) + OS 서명 검증 (macOS Gatekeeper, Windows SmartScreen) 에 위임" 명문화.

---

## 7. 초안 간 모순

### M1. "13" 수치 (A ≠ D ≠ C)

- A §2.6: 9 (root + 8)
- D §3.2: 13 (validators 2 + error + re-exports 포함)
- C §6: 13 Programmer (v12 emitter class)
- B §3.2: 12 bucket (MetadataSchema sum-type)

**해결**: Sub-3 에서 4 축 용어 표 (§2.1) 로 고정. 각 역할 규약에서 **해당 축 수치 만 사용**.

### M2. `@typia/core` 의 운명 (D ≠ F)

- D §7: v13 삭제
- F 부록 B: v13 publish 순서 3번째 (즉 유지)

**해결**: **D + F 합의 → C 결정**. C 권고: D 편. v13 은 stub + warn, v14 삭제.

### M3. Standard Schema emit 위치 (D ≠ C 현 구현)

- D §5.3: Go emit 을 `_createStandardSchema(__fn)` 한 줄로 축소
- C 현 Phase 0 `assert.go:63`: inline 11 줄 IIFE

**해결**: **Phase 1 Week 1 에 C 가 축소** (§4.3). v12 소급 호환을 위해 `--legacy-standard-schema`
플래그 한 minor 유지.

### M4. "IPC" 의 정의 (A 모호)

A §2.2 의 IPC 예외가 "child process spawn" 과 "bidirectional pipe RPC" 를 구분하지 않아
C 의 launcher 가 규약 위반으로 오해될 수 있음 (§2.2).

**해결**: Sub-3 에서 **"IPC = bidirectional pipe/stdin RPC only"** 로 정의. "child process
spawn + argv/exit code 교환" 은 IPC 가 아닌 **"external process invocation"** 으로 별도
분류.

### M5. shim 재생성 CI 정책 (F 자동 PR ≠ C 암묵 수동)

F §2.4 "자동 PR" vs C 규약 (C 는 언급 없음, 암묵적 수동).

**해결**: **CI fail + 수동 commit** (§6.1). 자동 PR 은 보안 공격면.

### M6. `go.work` 제거 시점 (F ≠ C)

F §2.5: Phase 2. C: Phase 1 말 (ttsc 1.0 GA).

**해결**: Phase 1 말로 통일 (§6.2).

---

## 8. Sub-3 개정 합의 요청

C 가 Sub-3 에서 **우선순위 높은 순으로** 요청하는 합의 사항:

### 8.1 Phase 0 미지원 항목의 결정 기준 (C 가 제안하는 kill-gate)

| 미지원 항목 | Phase 0 | Phase 1 결정 기준 | 주 결정 주체 |
|---|---|---|---|
| sourcemap | 없음 (C §8.5.1) | Week 4 측정 D5 로 결정 (경로 A vs 역매핑) | C + E |
| watch mode | 없음 (C §8.9) | Week 2 시연 + E 의 benchmark | C + E |
| Bun runtime | 없음 (E Q-E4) | Phase 1 fixture 카테고리 1 개 + Node 병행 pass | E + F |
| Edge runtime smoke | 없음 (A 결정 유예 7) | Phase 1 Q3 Cloudflare Workers 1 fixture | E + A |
| linux-arm (32bit) | 없음 (F §3.1) | Phase 1 말 커뮤니티 설문 | F |
| Standard Schema v2 | 없음 (D §5.4) | 스펙 정식 릴리스 후 3개월 | D |

**규약**: kill-gate 는 **정량 기준 1 개 이상** 필요. "필요할 것 같아서" 추가 금지.

### 8.2 C 가 책임지는 불변 (Sub-3 에 명문화 요청)

- **patch 0 유지** (ttsc 1.0 GA 까지). tsgonest 3 patches 는 상한 참조점, typia 는 **더 엄격**.
  3 patches 도달 예정이면 C 가 먼저 경보.
- **rewrite-only 경로 (경로 B)** 가 Phase 0~1 공식. 경로 A (transform chain hook) 는
  sourcemap kill-gate 통과 시만 추가. 경로 C (Go AST 직조) 는 **Phase 1 에 영구 봉인**.
- **FUNCTORS 147 dispatch table** 은 `dispatch.go` 단일 진실원. B 의 outbound 13 entry
  와 Cross-product.
- **13 emitter 분야** 는 v12 emitter class 와 1:1. 합병·분할 금지.

### 8.3 C 와 타 역할 Sub-3 계약 (한 줄씩)

- **C ↔ B**: IR outbound = `EmitProgrammer(kind, valueExpr, schema, options)` 단일 entry
  + 13+ kind enum. `ConstantValue` 는 4-type discriminated interface (§3.2).
- **C ↔ D**: marker 패턴 3-줄 골격 + 반환 타입 `never` 강제 (§4.1). Standard Schema emit
  은 Phase 1 Week 1 에 functor 호출로 축소 (§4.3). error 메시지 prefix 는 runtime 이 부착
  (§4.2).
- **C ↔ E**: byte-for-byte idempotence 는 "dist 유지 재수행" 기준 (§5.1). R-rule 7 Go
  unit 이중방어 추가 (§5.2). fixture tsconfig 4 옵션 고정 (§5.3).
- **C ↔ F**: shim 재생성은 CI fail (자동 PR 금지, §6.1). go.work 제거는 Phase 1 말
  (§6.2). `pack:dev` 스크립트 분리 (§6.3). `@typia/core` v13 stub 정책 (§6.4).
- **C ↔ A**: "IPC" 정의 정정 (§2.2). "13" 4 축 용어 표 (§2.1). plugins[] 지시자는 C 가
  무해화 주체 (§2.3).

### 8.4 Sub-3 에 제출할 C 자체 수정 후보 (자기 비판)

Cycle 1 C 초안의 재검토 결과 **약점**:

1. **§6.2 dispatch 4-tuple 리턴 서명** (`expression, factory, err, handled`) — Go 의
   관용 `(result, error)` 2-tuple 에서 벗어남. Sub-3 에서 `DispatchResult` struct 로
   정리할지 검토. 하위호환 영향은 내부 API 이므로 없음.
2. **§7.2 `is.go` 427 LOC** 는 samchon 파일 크기 가이드 (300 LOC) 초과. Phase 1 에
   split 계획은 §7.15 에 있으나 구체 분할 안 없음. Sub-3 에 `is/primitive.go, is/object.go,
   is/recurse.go` 3-파일 분할 안 추가 예고.
3. **§8.5 sourcemap Phase 1 결정 기준** 이 "D5 측정" 로만 막연. 실제 측정 스크립트
   (`tools/measure_sourcemap_delta.ts`) 작성 필요. Sub-3 에 TODO 등록.
4. **§4.3 patch 관리 구조** 는 Phase 0 patch 0 이라 미검증 (빈 폴더). 실제 patch 추가
   사례 없어 서식이 적절한지 불명. tsgonest 의 3 patches 형식을 벤치마크할 것.
5. **§8.4 unused import cleanup** 경계가 모호. "typia import 를 alias 추적 후 제거" 만
   정의, 다른 사용자 import 는 건드리지 않음을 보장해야 하는데 현 규약 문구가 약함.

### 8.5 Sub-3 액션 아이템 (C 가 개정할 항목)

| # | 항목 | 경로 | 비용 |
|---|---|---|---|
| 1 | 4 축 용어 표 등재 | C §0 또는 §1 하위 | 30 분 |
| 2 | IPC 정의 정정 요청 | A 편집 요청 | 15 분 |
| 3 | `plugins[].transform` 무해화 규약 | C §2.X 신규 | 30 분 |
| 4 | FUNCTORS dispatch 위치 소유권 | C §6 + A 편집 요청 | 30 분 |
| 5 | `EmitProgrammer` 단일 entry 계약 | B 와 공동 편집 | 1 시간 |
| 6 | `ConstantValue` 4-type 분리 | B 에게 요청 | 0 (B 작업) |
| 7 | marker 반환 타입 `never` 강제 | D 편집 요청 | 15 분 |
| 8 | Standard Schema emit 축소 계획 | C §7.3 Phase 1 Week 1 등재 | 30 분 |
| 9 | byte-idempotence 기준 명문화 | E 편집 요청 | 15 분 |
| 10 | R-rule 7 Go unit 이중방어 | E 편집 요청 + C unit test 추가 | 2 시간 |
| 11 | fixture tsconfig 5 옵션 고정 | E 편집 요청 | 15 분 |
| 12 | shim-regenerate CI fail 정책 | F 편집 요청 | 15 분 |
| 13 | go.work 제거 시점 Phase 1 말 | F 편집 요청 | 15 분 |
| 14 | `pack:dev` 스크립트 분리 | F §2.2 보완 | 30 분 |
| 15 | `@typia/core` v13 stub 정책 | F + D 공동 | 1 시간 |
| 16 | launcher 서명 검증 불가 계약 | F 편집 요청 | 15 분 |
| 17 | 자기 §6.2 DispatchResult struct 검토 | C 자체 | 1 시간 |
| 18 | 자기 §7.2 is.go 분할 안 | C 자체 | 2 시간 |

총 C 자체 작업 ~6 시간, 타 역할 편집 요청 ~10 건. Sub-3 1 주 이내 수렴 가능.

### 8.6 C 의 Sub-3 결론

Phase 0 실구현 (patch 0, rewrite B, FUNCTORS 147, 13 emitter, 5 driver 파일) 은
**건드리지 않는 것이 최선**. 5 초안의 대부분 제안은 Phase 1 영역이며, Phase 0 에 대한
개정 요구는 거의 없다. Sub-3 는 **용어 고정 + 경계 정정 + 모순 해결 + 계약 명문화**
네 축에 집중하고, Phase 1 규약 추가는 Sub-4 로 넘긴다.

C 가 Sub-3 에서 **가장 강하게 밀 3 항목**:

1. **FUNCTORS dispatch 는 C 소유** (A §6 Q6 답): driver 의 AST 탐색 책임과 일치.
2. **Standard Schema emit Phase 1 Week 1 단일화** (D §5.3 Q1): 기술부채 해소 + 2 구현
   drift 제거.
3. **patch 0 유지 규약** (C §4.1): tsgonest 3 patches 는 상한, typia 는 더 엄격. 이
   규약이 Sub-2~Sub-3 전반의 "rewrite-only 경로" 정당성의 뿌리.

C 가 **양보 가능한** 항목:

- `is.go` 분할 시점 (Phase 1 Week 3 → Week 6 로 연기 가능)
- dispatch 4-tuple 유지 (struct 전환은 cosmetic, 필수 아님)
- `--legacy-standard-schema` flag 한 minor 유지 (v13.0 만 두고 v13.1 에 제거해도 무방)

양보 불가:

- patch 0 (Phase 1 GA 까지)
- rewrite-only 경로 (경로 C Go AST 직조 는 영구 봉인)
- FUNCTORS 147 단일 진실원 위치 (`cmd/ttsc/dispatch.go`)
- driver 5 파일 구조 (program / host / visit / rewrite / cleanup)

---

*이 리뷰는 C (ttsc Driver Lead) 의 Cycle 2 제출본. Sub-3 에서 A/B/D/E/F 각자의 반응 +
C 자신의 재반응 이 `cycle-03-*.md` 6 편으로 수렴.*
