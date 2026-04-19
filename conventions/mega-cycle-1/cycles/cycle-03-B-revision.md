# B. Go Engine Lead — Cycle 3 개정본

> 역할 B: typia-go 엔진(Go 코드) 구현 규약 개정. Cycle 1 초안을 Cycle 2 의 A/C/D/E/F 5 개 리뷰가 지적한 "B 초안 비판" 과 "Sub-3 개정 합의 요청" 을 기준으로 개정.
>
> 기저 문서: [cycle-01-B-go-engine.md](./cycle-01-B-go-engine.md) (원본 1,122 LOC).
> 비판 출처: [cycle-02-A-review.md §2](./cycle-02-A-review.md), [cycle-02-C-review.md §3](./cycle-02-C-review.md), [cycle-02-D-review.md §3](./cycle-02-D-review.md), [cycle-02-E-review.md §3](./cycle-02-E-review.md), [cycle-02-F-review.md §3](./cycle-02-F-review.md), 그리고 B 자신의 Sub-2 [cycle-02-B-review.md](./cycle-02-B-review.md) 의 "Sub-3 개정 합의 요청" 중 B 몫(S-5, S-6).
>
> 기준 스냅샷: 2026-04-19. Phase 0 스냅샷 불변 (Go 4,459 LOC / test 965 / shim 4,523 자동생성 / TS fixture 1,769 / 21/21 PASS).

---

## 0. 개정 이력 (원본 §유지 + 이 섹션 추가)

개정 원칙: **비판에 대한 수용 / 수정 / 거부 중 하나를 명시**. 거부 시 거부 근거를 기재. 규약 ID `GEI-*` (Go Engine Invariant) 는 기존 번호 유지, 신설 규약은 다음 번호.

| # | 출처 | 비판 요지 | 개정 액션 | 반영 섹션 |
|---|---|---|---|---|
| R-1 | A §2.1 쟁점 2.1 | Go `ConstantValue.Value any` → discriminated struct 전환 시 JSON serialisation 이 `@typia/interface` 의 `IMetadata*` 공개 표면을 흔든다. "JSON byte-level parity" 로 승격 요구. | **수용**. §3.1 에 `GEI-019` 신설 ("IR JSON 출력은 typia v12 `IMetadataSchema*` 와 byte-level parity"). discriminated struct 전환은 JSON tag 로 v12 키 이름 복원 조건부 허용. | §3.1·§3.2·§6.6 |
| R-2 | A §2.2 쟁점 2.2 | `typeKey` 가 `shim/checker.Type.Id()` 의존 → IR 이 shim 내부에 묶임. IR은 opaque handle 만 받아야. | **수용 (경계 이동)**. `GEI-020` 신설. `typeKey` 계산을 analyzer 에 가두고 IR 은 `string` 키만 저장. 상세 adapter 설계는 C 와 공동(S-4). §4.9 재작성. | §3.7·§4.9 |
| R-3 | A §2.3 쟁점 2.3 | Collection 공유 정책(파일별 vs 프로그램별) 미결이 병렬 처리 규약에 영향. | **수용**. Cycle 3 결정: **파일별 Collection + 프로그램 종료 시 merge pass**. §6.3 에 기재. | §6.3 |
| R-4 | A §2.4 쟁점 2.4 | Tag 정의 원본(`@typia/interface/tags/*`)이 L0 (D 관장) 이라는 명시 누락. | **수용**. §5 도입부에 "tag 정의 원본은 L0 `@typia/interface/tags/*`. `validate` 템플릿 문자열은 Go parser 의 단일 정본" 추가. E 가 snapshot diff. | §5.0 |
| R-5 | C §3.1 | IR→emitter outbound 를 **3 함수** 로 축약한 것은 문서화 누락. 실제는 `EmitProgrammer(kind, valueExpr, schema, options)` 단일 entry 로 C 가 소비. | **수용**. §7.3 outbound boundary 를 "단일 entry + 13+ kind enum" 으로 재기술. 3 함수 예시는 Phase 0 진행 사실 기록으로만 남김. | §7.3·§7.3b |
| R-6 | C §3.2 | Q-B1 답 — `ConstantValue` 는 **discriminated concrete type 4 종** (ConstantString/Number/Bigint/Boolean) 으로 Phase 1 고정. generics 거부. | **수용**. Q-B1 closed. §3.2 (2) Constant 규약 개정. D §3.3 (discriminated struct Phase 1 확정) 과 일치. | §3.2·§10-closed |
| R-7 | C §3.3 | Q-B3 답 — `merge/covers` 는 **Phase 1 Week 2** 에 필요. `intersects` 는 Phase 2. | **수용**. §부록 A 에 일정 명시. 자세한 LOC 예상: merge 141 TS → ~210 Go, covers 80 TS → ~128 Go. | §Appendix-A |
| R-8 | C §3.4 | §3.2 12 bucket 각각에 "Phase 0 emitter 지원 여부" 한 줄 추가 요청. fallback coerce 를 금지하기 위한 `Schema.Coerce<From,To>` helper 계약. | **수용**. §3.2 각 bucket 에 표 한 줄 추가. coerce helper 는 Phase 1 에 `GEI-024` 로 도입. | §3.2 |
| R-9 | D §3.1 쟁점 ① | Go 의 `Metadata` prefix 제거가 JSON key 까지 영향하면 `@typia/interface` 의 `IMetadata*` 와 drift. | **수용**. §2.1 에 "Go 식별자에만 적용, JSON marshal 은 `json:"..."` tag 로 v12 키 이름 복원" 추가. R-1 과 같은 불변식. | §2.1·§3.1 |
| R-10 | D §3.2 쟁점 ② | `iterate_metadata_function` / `_alias` / `_template` 전체 Phase 1 연기는 `typia.functional` namespace 가 v13.0 GA 에 빈 상태 — BND-NS-03 위반. | **부분 수용**. `iterate_metadata_function` 을 **Phase 1 필수** 로 격상. `_alias` 는 Q-B6 결과에 따라 D §5.3 의 preserve 규약으로(R-12). `_template` 은 빈도 정보 없어 Phase 1 우선순위 B 로 유지하되 panic 금지 guard 를 R-0006 으로 추가. | §Appendix-A |
| R-11 | D §3.3 쟁점 ③ | ConstantValue discriminated struct 는 D 도 당사자 (IMetadataConstant TS 타입 확장). Phase 1 확정 + TS 측 optional discriminant 추가. | **수용**. R-6 과 동일 결론. D 가 TS 타입 정의 확장. | §3.2·§10-closed |
| R-12 | D §3.4 쟁점 ④ | Alias 는 해체 금지 — `typia.reflect.schema<T>()` 결과 JSON 의 `name` 필드가 사용자 API 표면. 규약 B (preserve) 로 결정. | **수용**. Q-B6 closed. §3.2 (7) Alias 규약 개정. Phase 1 boundary 에 alias dictionary 도입 (`GEI-025`). | §3.2·§10-closed |
| R-13 | E §3.1 쟁점 B-1 | IR 불변식 8+개가 주석 수준 — property-based fuzz test 없다. `TestInvariantCollectionPointerIdentity` 등 3 test. | **수용**. §9 검증 체크리스트에 fuzz test 3 건 추가. Go 단위 test 는 B 가 Cycle 3 에 구현 (S-5 R-0003~0005 확장). | §9.2·§9.3 |
| R-14 | E §3.2 쟁점 B-2 | "가정(측정 없음)" 3 곳 (Template cost / Type.Id() collision / exclusive 위반) 이 Phase 1 에서 터질 잠복. regression fixture 강제. | **수용**. §6 각 "가정" 주석을 규약 ID 와 **대응 regression fixture 명** 으로 치환. `R-1.3-B-0001~0003` 으로 편입. E 의 §8.2 표와 정합. | §6.1·§6.3·§6.4·§5.3 |
| R-15 | E §3.3 쟁점 B-3 | `analyzer_test.go` placeholder 가 사실상 skip. fake checker 또는 adapter 가 필요. | **부분 수용 (설계 대안)**. FakeChecker 대신 **driver→analyzer adapter** 경로로 해결 (B 의 Sub-2 C-3 제안과 일치). analyzer 는 `TypeKey+TypeResolver` primitive 만 받도록 시그니처 변경 (Phase 1). 빈 test 파일은 Cycle 3 에 **삭제** 하고 최소 3 테스트(atomic dispatch / union flatten / recursive object) 를 fake resolver 로 구현. | §4.1·§9.7 |
| R-16 | E §3.4 쟁점 B-4 | JSON v12 parity diff 도구를 Phase 1 로 미뤘지만 E 는 **Phase 0 마감 전** 요구. | **수용 (일정 개정)**. `scripts/ir-json-diff.ts` 를 Phase 0 마감 전 구현으로 격상. fixture `ir-v12-parity/` 10 케이스. `R-1.3-B-0004` 예약. | §3.1·§Appendix-A |
| R-17 | E §3.5 쟁점 B-5 | `visitingObjects` stack delete 누락 감지 테스트 부재. stack overflow 가 prod 에서야 드러난 Cycle 4 재발 가능. | **수용**. `analyzer_stack_test.go` — 재귀 100 개 순차 분석 후 `len(visitingObjects) == 0` assert. `R-1.3-B-0005` 로 편입. | §4.1·§9.4 |
| R-18 | F §3.1 쟁점 1 | Go 1.26 + go.work 공존과 F2 재현 빌드 충돌 — `replace directive` 유지 기간. | **부분 수용 (C 와 공동)**. §6.4 의 "의존 surface" 규약 외연 확대. replace directive 제거 일정은 Cycle 3 F 규약에 위임. B 는 "engine 코드가 `replace` 에 숨어있는 파일 참조 금지" 규약만 추가 (`GEI-021`). | §6.4 |
| R-19 | F §3.2 쟁점 2 | linkname + Go 1.27 handshake 가 7 platform cross-compile 에 영향. `unsafe.Pointer` mirror struct 가 32/64bit 에서 layout 다를 가능. | **부분 수용 (경계 밖)**. B 의 `metadata/` `analyzer/` 패키지는 `unsafe.Pointer` 사용 0. shim 경계의 책임 (C/F). B 는 Q-B10 의 "Phase 1 에서 1.27 upgrade 시 engine API 영향 없음 check" 를 §6.4 checklist 에 편입만. | §6.4·§10-Q-B10 |
| R-20 | F §3.3 쟁점 3 | `cmd/ttsc/main.go` 의 `version/commit/date` 3 변수 소유자 불명. `metadata/` stdlib-only 원칙은 엔진에만 적용되나, C/F 경계에 영향. | **거부 — 경계 밖**. `cmd/ttsc/main.go` 는 C 관장. B 는 `internal/engine/` 만. 단 Q-F→B 답 1 줄 추가 ("main.go 는 `1 파일 1 개념` 예외, B doc 적용 안 됨"). | §10-Q-F-B |
| S-1 | B §8.1 (자기) | A BND-PKG-04 에 "metadata+analyzer=B, emitter=C" IR 소유권 명시 1 줄. | **A 로 전달**. B 는 §1.1 In-scope 에 cross-reference 한 줄. | §1.1 |
| S-2 | B §8.2 (자기) | 모든 재귀 방문 emitter 가 `map[*ObjectType]bool` visiting set 상태를 갖는다 — `GEI-022` 신설. | **수용**. §3.8 규약을 `GEI-022` 로 격상. C 가 C §7.1.7 에 복제. | §3.8 |
| S-3 | B §8.3 (자기) | Standard Schema emit 축소 — `_createStandardSchema(__fn)` 한 줄. | **수용 (B→C 합의)**. B 엔진 측 결정: **Go 가 Standard Schema 를 inline 생성하지 않는다**. Schema 에 `~standard` 플래그 불필요. §5.4 / §10-Q-B1-extra 에 기재. | §5.4 |
| S-4 | B §8.4 (자기) | Analyzer shim 격리 — driver→analyzer adapter. B 의 Q-B2 + E 의 Q-E3 + A 의 쟁점 2.2 동시 해결. | **수용**. `GEI-023` 신설. §4.9 재작성, shim_type_string.go 는 driver 이동 대상(Cycle 3 리팩터 PR). | §4.9·§10-Q-B2 |
| S-5 | B §8.5 (자기) | Cycle 4 재귀 버그 R-0001/R-0002 를 Go 단위로 복제. R-0003~R-0005 세 regression 을 B 가 구현. | **수용 (자기 숙제)**. 본문 §9.7 신설. 각 테스트 파일 명·assertion 목록 기재. | §9.7 |
| S-6 | B §8.6 (자기) | `metadata/functor_names.go` 신설 — TS `_*.ts` facade functor 이름과 Go 상수 슬라이스 1:1 diff = ∅ gate. | **수용 (B 가 신설)**. §3.9 신설. `GEI-026`. D §13.1 의 ESLint custom rule `functor-name-match-go` 가 이 파일을 소비. | §3.9 (신설) |
| S-7 | B §8.7 (자기) | emit 재현성 이중 축 — Collection `nameCounts` / `reservedSuffixes` 순회 sort 고정. | **수용 (B 책임)**. §3.6 Collection 규약에 sort 의무 추가. `GEI-027`. F 가 F §2.3 에 본문 반영. | §3.6 |

**요약**: 27 항목 중 수용 23, 부분 수용 3, 거부 1 (R-20, 경계 밖). 거부 근거 명시.

---

## 1. 관장 범위와 핵심 원칙 (§1 개정)

### 1.1 관장 범위 (In-scope) — 개정

본 규약이 다루는 범위는 **`packages/ttsc/internal/engine/` 하위 두 계층** 이다.

- `engine/metadata/` — MetadataSchema IR(12 sum-type + Collection registry + Tag matrix + **functor_names (신설)**)
- `engine/analyzer/` — typescript-go `Checker`로부터 MetadataSchema 를 빌드하는 dispatcher

추가로 **IR → emitter 인계 경계**(`EmitProgrammer(...)` 호출 직전까지)를 관장한다.

**Cycle 3 개정 추가**:
- A BND-PKG-04 에 **"metadata+analyzer = B, emitter = C"** 가 명시되도록 B 가 요청 (S-1). 이 합의가 규약 전체의 상위 전제.
- `internal/engine/metadata/functor_names.go` 는 이 개정으로 신설 (§3.9 / S-6).

### 1.2 관장 밖 (Out-of-scope) — 개정

- `engine/emitter/` 내부 JS 코드 생성 상세 — C(ttsc Driver) 역할.
- `packages/ttsc/internal/driver/` — tsgo program 로드, CallExpression 감지, `.js` rewrite — C 역할.
- `packages/ttsc/shim/`, `tools/gen_shims/` — tsgo 내부 API 노출 — C/F 역할.
- **[개정 추가]** `packages/ttsc/cmd/ttsc/main.go` 의 `version/commit/date` 3 변수 — C 관장 (R-20 답). `metadata/` stdlib-only 원칙과 무관.
- `@typia/typia` / `@typia/interface` 의 TS 타입 선언 — D(TS Facade) 역할. 단 **JSON byte-parity 계약은 B↔D 공동** (R-1, R-9).
- 테스트 시스템 자체 — E 역할. (단, IR·Analyzer 단위 테스트는 본 규약이 기여 — S-5 R-0003~0005 포함)

### 1.3 핵심 원칙 7 가지 — 개정 (6 → 7)

다음 7 원칙은 모든 세부 규약(§2~§6)의 상위 제약이다. 충돌 시 원칙이 우선.

1. **1:1 파일 매핑(Side-by-side diff friendly)** — (원본 유지)
2. **IR 은 순수 데이터. 자기 참조는 포인터로.** — (원본 유지)
3. **의존성 제로(stdlib 외 + shim 외).** — (원본 유지)
4. **typia v12 의 이름·semantic 을 보존한다.** — (원본 유지 + **단서 추가**: JSON marshal 은 v12 `IMetadataSchema*` 의 키 이름을 `json:"..."` tag 로 보존. Go 식별자에만 `Metadata` prefix 제거 적용. R-1·R-9)
5. **graceful degradation — 분석 실패는 panic 이 아니다.** — (원본 유지)
6. **성능 최적화는 "측정 없이" 하지 않는다.** — (원본 유지 + **단서 추가**: "가정(측정 없음)" 으로 남길 수 없음. 규약 본문에 "가정" 단어가 등장하면 반드시 규약 ID 와 대응 regression fixture ID 가 병기되어야 한다. R-14)
7. **[신설] 재귀 guard 는 IR 소비자의 의무, IR 의 의무가 아니다.** — `GEI-022` (S-2). emitter 든 analyzer 든 Schema 를 재귀 방문하는 모든 코드는 `map[*ObjectType]bool` visiting set 을 **자체 상태** 로 가진다. Collection 이 발행한 pointer 의 identity 를 map key 로 사용한다. R-0001 / R-0002 재발 방지의 근간.

### 1.4 용어 고정 — 개정

원본 표 유지. 다음 용어 추가:

| Go | 원본 TS | 설명 |
|---|---|---|
| `FunctorName` | `_{name}.ts` file basename | TS facade functor 이름. `functor_names.go` 의 상수 슬라이스 entry (§3.9, S-6). |
| `TypeKey` | (analyzer 내부) | shim opaque handle. Analyzer 만 발행. IR 은 `string` 만 저장 (R-2, GEI-020). |
| `TypeResolver` | (analyzer 내부) | driver 가 analyzer 에 주입하는 `Type → TypeKey + TypeString` 변환 함수 (S-4, GEI-023). |
| `ProgrammerKind` | TS `programmer` enum | C §6 dispatch 의 13+ entry. B 의 outbound `EmitProgrammer(kind, ...)` 에서 소비 (R-5). |

---

## 2. Go 코딩 규약 (§2 개정)

### 2.1 명명 (Naming) — 개정

- **타입**: `UpperCamelCase`. 원본 TS 의 `Metadata` 접두어는 **Go 식별자에만** 제거. 예: `MetadataObjectType` → `ObjectType`. **[개정 추가 R-1·R-9]** JSON marshal 시 `json:"..."` 태그로 typia v12 의 `IMetadataSchema / IMetadataObject / IMetadataObjectType / IMetadataConstant / IMetadataAtomic / IMetadataTag` 키 이름을 **그대로 보존**. Go 내부 이름과 JSON 키는 분리 축이다.
- (나머지 명명 규약 원본 유지)

### 2.2 에러 처리 — 개정

원본 유지. **[개정 추가 R-14]**: 이하의 용어 사용 금지:
- "가정(측정 없음)" — 반드시 규약 ID + fixture ID 병기.
- "Phase 1 에서 검증" — 최소 Go 단위 panic-free guard 는 Phase 0 에 필요.

### 2.3 포인터 vs 값 규약 — 원본 유지

### 2.4 인터페이스 정책 — 원본 유지

단, **[개정 추가 R-6]**: `ConstantValue` 는 **Phase 1 부터 interface**(`ConstantValue interface { Stringify() string; Kind() AtomicKind }`) + 4 concrete types (`ConstantString`, `ConstantNumber`, `ConstantBigint`, `ConstantBoolean`) 로 이관. 이는 §2.4 의 "인터페이스 쓰지 않는다" 의 예외 — JSON serialisation 호환(`json.Marshal` 이 interface 를 구현체 기준으로 직렬화) + emitter 가 매 호출마다 `v.(string)` 하는 비용 회피. D §3.3 의 TS 측 타입 확장(`IMetadataConstant.values: Array<{kind:"string";value:string}|...>`)과 동기화.

### 2.5 패키지 구조 — 개정

개정된 파일 리스트 (신설 파일 굵게):

```
packages/ttsc/internal/engine/
├── metadata/
│   ├── metadata.go
│   ├── tag.go
│   ├── atomic.go
│   ├── container.go
│   ├── alias.go
│   ├── special.go
│   ├── schema.go
│   ├── collection.go
│   ├── name.go
│   ├── jslit.go
│   ├── format.go
│   ├── **functor_names.go**  ← 신설 (§3.9, S-6, GEI-026)
│   ├── **invariants_test.go** ← 신설 (fuzz, R-13)
│   └── **collection_test.go** ← 신설 (R-0004 regression, S-5)
│   └── **schema_test.go**     ← 신설 (R-0005 regression, S-5)
│
├── analyzer/
│   ├── analyzer.go            (§4.9 시그니처 개정; S-4)
│   ├── iterate_metadata.go
│   ├── iterate_metadata_atomic.go
│   ├── iterate_metadata_constant.go
│   ├── iterate_metadata_union.go
│   ├── iterate_metadata_intersection.go
│   ├── iterate_metadata_object.go
│   ├── iterate_metadata_array.go
│   ├── iterate_metadata_tuple.go
│   ├── iterate_metadata_function.go  ← Phase 1 필수 (R-10)
│   ├── native.go
│   ├── tag.go
│   ├── type_key.go                   (§4.9 개정; R-2·S-4)
│   ├── shim_type_string.go           ← driver 로 이동 대상 (Cycle 3 PR; R-2·M-6)
│   ├── **typekey_test.go**           ← 신설 (R-0003 regression, S-5)
│   └── **analyzer_stack_test.go**    ← 신설 (R-17)
│
└── emitter/            ← C 역할
```

---

## 3. MetadataSchema IR 규약 (§3 개정)

### 3.1 Schema(최상위) 필드 순서 — 개정

원본 Schema struct 정의 유지. **[개정 추가 R-1·R-9·R-16]**:

**`GEI-019` (신설)**: IR JSON 출력은 typia v12 `@typia/interface` 의 `IMetadataSchema` / `IMetadataObject` / `IMetadataObjectType` / `IMetadataConstant` / `IMetadataAtomic` / `IMetadataTag` (총 ~15 타입) 와 **byte-level parity**. `json:"..."` tag 로 v12 키 이름 보존. Go 내부 `Metadata` prefix 제거는 **Go 식별자에만** 적용.

**검증**: `scripts/ir-json-diff.ts` (R-16, Phase 0 마감 전 구현). `fixtures/ir-v12-parity/` 10 fixture (primitives / objects / unions / recursive / tagged / tuples / arrays / alias / native / constant). 각각 `expected-v12.json` 커밋 → Go `Schema.MarshalJSON` 결과와 deep-equal. regression ID: `R-1.3-B-0004` (E §8.2 표에 편입).

### 3.2 12 sum-type 각각 규약 — 개정

원본 12 bucket 규약 유지. 각 bucket 에 **"Phase 0 emitter 지원"** 표 한 줄 추가 (R-8):

| # | Bucket | Phase 0 emitter (is/assert/validate) | 비고 |
|---|---|---|---|
| 1 | Atomic | ✅ 지원 | — |
| 2 | Constant | ✅ 지원 | value union 은 **Phase 1 부터 discriminated struct 4 종** (R-6·R-11). |
| 3 | Template | ⚠️ 부분 (panic-free guard 만) | 패턴 합성은 Phase 1. `R-1.3-B-0002 (template-literals)` regression fixture. R-10·R-14. |
| 4 | Array | ✅ 지원 | — |
| 5 | Tuple | ✅ 지원 | — |
| 6 | Object | ✅ 지원 | — |
| 7 | Alias | ❌ → ⚠️ **개정: Phase 1 preserve** | R-12. `reflect.schema<T>()` 의 `name` 필드 표면. resolve-through → preserve 로 전환. `GEI-025` (alias dictionary, Phase 1). |
| 8 | Native | ✅ 지원 | whitelist 26 종 (§4.10). |
| 9 | Escaped | ❌ Phase 1 | Options.Escape=false default. |
| 10 | Function | ❌ → ⚠️ **개정: Phase 1 필수** | R-10. `typia.functional` namespace 가 v13.0 GA 에 비지 않으려면 Phase 1 진입 시점에 `iterate_metadata_function.go` 구현 완료. |
| 11 | SetRef | ❌ Phase 1 | Native fallback. |
| 12 | MapRef | ❌ Phase 1 | Native fallback. |

**[개정 추가 R-8]**: **`GEI-024`** — emitter 가 bucket 을 coerce 할 때는 Phase 1 에 신설될 `Schema.Coerce<From,To>` helper 를 거친다. Phase 0 emitter 가 자체 switch 에서 fallback 하는 동안에는 `driver: unsupported bucket %s, fallback to %s` 로그 의무.

### 3.3 Modifier 비트 규약 — 원본 유지

### 3.4 Name() 규약 — 원본 유지

### 3.5 Size() / Bucket() 의 의미 — 원본 유지

### 3.6 Collection 규약 — 개정

원본 유지 + **[개정 추가 S-7]**:

**`GEI-027`**: Collection 의 4 map 순회는 모든 호출 경로에서 **정렬된 순서**로 이뤄진다. 구체적으로:
- `EmplaceObject` 의 내부 순회는 `sort.Strings(keys)` 후 순회.
- `uniqueName` 의 `base.o{n}` 발행은 `nextObjectIndex` 를 사용하므로 결정적이지만, `nameCounts` 조회 경로가 map 순서에 의존하지 않도록 `sort` 의무.
- `reservedSuffixes` 가 Phase 1 에 활성화되면 동일 sort 의무.

이는 F §2.3 "bit-for-bit 재현성" 의 **emit 재현성 축** 전제 (F-1, S-7). 바이너리 재현성은 F 책임, emit 재현성은 B+C 공동. `collection.go L60-80` 리팩터 PR 은 B 가 Cycle 3 내 제출.

### 3.7 식별(identity) 규약 — 개정

원본 3 계층 표 유지. **[개정 추가 R-2]**:

**`GEI-020` (신설)**: IR struct 는 **`string` key 만 저장**. shim `Type.Id()` 같은 불투명 handle 은 IR 외부(analyzer 패키지)에만 존재. IR 은 shim 에 의존하지 않는다 — §1.3 원칙 3 의 강화.

- `Collection` 의 4 map key 는 `string` (변함 없음).
- `ObjectType.Index` 같은 `int` 필드는 Collection 이 발행 (변함 없음).
- `ArrayType.Recursive` / `.Nullables` 등의 내부 상태도 `string` 또는 `int` / `bool` 로 고정.
- **금지**: `*shim.Type` 이나 `shim.TypeFlags` 같은 shim 타입이 IR 필드에 등장해선 안 된다.

### 3.8 재귀 안전(Recursion guard) — 개정

원본 유지 + **[개정 격상 S-2]**:

**`GEI-022` (신설)**: 모든 재귀 방문 emitter 는 `map[*ObjectType]bool` visiting set 을 **자체 상태** 로 가진다. IR 은 guard 를 책임지지 않는다. Collection 이 발행한 pointer 의 identity 가 map key 로 안전하다는 보장은 §3.6 / `GEI-027` 에 의해 성립.

- C §7.1.7 에 이 규약이 복제되어야 함. C Sub-3 액션 아이템 번호 5·6 참고.
- `emitter/is.go` 의 `isState.visiting` 가 Phase 0 참조 구현.
- `emitter/assert.go`, `emitter/validate.go`, `emitter/json_stringify.go`, `emitter/json_schema.go` 모두 동일 패턴 적용 (Phase 1).

### 3.9 functor_names.go — 신설 (S-6, GEI-026)

**`GEI-026` (신설)**: `packages/ttsc/internal/engine/metadata/functor_names.go` 는 TS facade functor 이름(`packages/typia/src/internal/_*.ts` 파일명) 과 Go 상수 슬라이스 사이 **1:1 매핑표의 Go 측 정본**.

```go
// Code generated — edit functor_names.go AND the corresponding _*.ts together.
// drift 방지: D §13.1 ESLint rule `functor-name-match-go` 가 diff = ∅ 강제.
package metadata

// FunctorNames holds the canonical list of typia TS facade functor files.
// Must match packages/typia/src/internal/_*.ts basenames (without leading "_" or ".ts").
var FunctorNames = []string{
    "createStandardSchema",
    "isFormatEmail",
    "isFormatUuid",
    // ... (147 entries — Phase 0 측정치; Cycle 3 신설 시 현행값 commit)
}

// IsValidFunctor returns true if name matches a known TS facade functor.
func IsValidFunctor(name string) bool { /* binary search over sorted FunctorNames */ }
```

**규약**:
- 리스트는 **정렬된 상태**로 유지(검색·diff 안정성).
- 추가/제거 시 PR 은 반드시 TS 측 `packages/typia/src/internal/_*.ts` 파일 추가/제거와 **동일 PR** 에 포함.
- A BND-PKG-06 "Tag.Validate 템플릿의 functor 이름은 facade 파일명과 1:1 매핑" 의 집행 수단.
- Tag.Validate 문자열(`$importInternal("<name>")(...)`) 의 `<name>` 이 이 리스트에 없으면 analyzer 가 `R-1.3-B-0006` diagnostic 발행 (Phase 1).

---

## 4. Analyzer 규약 (§4 개정)

### 4.1 Analyzer 상태 — 개정

원본 struct 유지. **[개정 추가 R-15·R-17]**:

- `analyzer_test.go` 의 placeholder 패턴 금지. Cycle 3 에 다음 최소 3 테스트 구현:
  - `TestAnalyzerDispatchAtomic` — string/number/bigint/boolean 각각이 Atomic 으로 이르는 dispatch.
  - `TestAnalyzerUnionFlatten` — `string | number | null` 이 `Atomics=[string,number], Nullable=true`.
  - `TestAnalyzerRecursiveObject` — 자기참조 object 가 back-edge 로 귀결, visiting stack 이 Walk 후 비어있음.
- `analyzer_stack_test.go` — 재귀 타입 100 개 순차 분석 후 `len(a.visitingObjects) == 0 && len(a.visitingArrays) == 0 && len(a.visitingTuples) == 0` assert. R-0005 와는 별개 (stack-empty invariant 검증). R-17 대응.
- Fake resolver 기반 — S-4 의 adapter 가 정식 도입되기 전 Cycle 3 는 tsgo 실 Checker 로 3 테스트 작성. Phase 1 에 adapter 이관 시 in-memory resolver 로 교체.

### 4.2~4.8 — 원본 유지

### 4.9 typeKey / typeName — 재작성 (R-2, S-4, GEI-023)

원본은 "`typeKey` 는 `shim/checker.Type.Id()` 에 직접 의존" 이었다. 개정 후:

**`GEI-023` (신설)**: `Analyzer.Walk` 는 shim `Type` 을 **직접 받지 않는다**. driver 가 typed wrapper 로 감싼 primitive 만 주입.

```go
// Phase 1 시그니처 (Cycle 3 설계, 구현은 Phase 1 Week 1)
type TypeKey string // opaque identifier; analyzer 발행/소비, IR 저장 가능

type TypeResolver interface {
    // Driver 가 구현. shim Type 하나당 고유 TypeKey.
    KeyOf(t unsafeOrOpaque) TypeKey
    // Debug/이름 용도. `"User"`, `"string"`, `"Type#<id>"` fallback.
    StringOf(t unsafeOrOpaque) string
    // Phase 1: property enumeration, union member 등 analyzer 가 필요로 하는 shim 연산.
    // 각 메소드는 B+C 가 인터페이스 합의 후 추가.
}

func (a *Analyzer) Walk(root TypeKey, resolver TypeResolver) (*metadata.Schema, bool) { ... }
```

- `typeKey(t)` 함수는 **driver 영역**으로 이동. analyzer 는 `TypeKey` 를 받기만.
- `shim_type_string.go` 는 driver 의 `internal/driver/type_adapter.go` 로 이동 (Cycle 3 리팩터 PR).
- **효과**: B Q-B2 closed (shim Id 안정성 질문 → driver adapter 가 책임). E Q-E3 closed (FakeChecker 불필요 — driver 가 `TypeResolver` 의 in-memory 구현을 test-double 로 제공). A §2.2 쟁점 2.2 closed.

**Phase 0 (현재)**: `typeKey` / `typeName` 은 여전히 analyzer 패키지에 있다. Cycle 3 에 S-4 리팩터 PR 로 이동 (C 가 adapter 측 소비자 코드 동시 작성).

### 4.10 Native whitelist — 원본 유지

### 4.11 Tag 추출 (extractTag) — 원본 유지

---

## 5. Tag 시스템 규약 (§5 개정)

### 5.0 (신설) Tag 정의 원본 = L0

**[R-4]**: `@typia/interface/src/tags/*` 가 tag 정의의 **L0 단일 정본**. 각 tag 의 `validate` 필드 템플릿 문자열은 Go parser 의 유일한 해석 대상. TS 원본과 Go parser 의 동기화는 E 가 `snapshot test`(21 tag 의 raw 템플릿 vs Go parser 결과) 로 보장. D 가 TS 측 정의를 변경하면 같은 PR 에 Go parser 의 대응 테스트 업데이트 의무.

### 5.1 21 tag types 과 TagMatrix — 원본 유지

### 5.2 TypeTag struct — 원본 유지

### 5.3 exclusive 와 tag 호환성 — 개정

원본 유지 + **[개정 R-14]**:

"가정: Phase 0 fixture 에서 exclusive 위반은 발생하지 않음" 문장 **삭제**. 대체:

> Phase 0 Analyzer 는 exclusive 검증을 하지 않는다. regression fixture `tag-exclusive-conflict/` (`R-1.3-B-0003`) 가 `string & Minimum<0> & ExclusiveMinimum<0>` 를 입력으로 두 stage 를 기록:
> - Phase 0: 통과(규약상 panic 금지).
> - Phase 1: 구조화 diagnostic.

### 5.4 numeric range 전파 — 개정

원본 유지 + **[개정 추가 S-3 / D Q1]**:

**Standard Schema emit 규약**: Go emitter 는 Standard Schema 를 **inline 생성하지 않는다**. C §7.3.3 `EmitCreateValidateWithStandardSchema` 는 다음 한 줄만 emit:

```go
func EmitCreateValidateWithStandardSchema(s *metadata.Schema) (string, error) {
    validateImpl, err := EmitCreateValidate(s)
    if err != nil { return "", err }
    // import 는 driver 의 addStaticImport 헬퍼가 파일 상단에 주입:
    //   import { _createStandardSchema } from "typia/lib/internal/_createStandardSchema";
    return fmt.Sprintf(`_createStandardSchema(%s)`, validateImpl), nil
}
```

- B 엔진의 IR (Schema, Tag, etc.) 에는 **`~standard` 관련 필드가 추가되지 않는다** — emit shape 의 문제이지 IR 의미론이 아님.
- path parser / message format 의 정본은 TS `_createStandardSchema.ts` (134 LOC, 4-state machine).
- drift 불가능 (단일 구현).
- D §5.3, B Q1, Sub-2 B 의 D-1 답과 정합.
- regression: E 의 `fixtures/standard-schema-parity/` 가 `R-1.3-D-0001`.

### 5.5 attachTag 대상 분배 — 원본 유지

---

## 6. 성능·캐싱 규약 (§6 개정)

### 6.1 allocation 최소화 — 개정

원본 유지. **[개정 R-14]**: "가정(측정 없음): typia v12 TS 코드는 `[]` 로 시작하는 반면 Go 는 nil slice 시작이 더 저렴" 문장 **교체**. 신규 규약:

**`GEI-028` (신설, 측정 대체 가능 가정)**: Go nil slice 는 `len(nil)==0`, `range nil` 무동작, `append(nil, x)` 동작 — 이는 Go spec 에 의해 보장되므로 "가정" 이 아니라 **사양** 이다. TS `[]` 와의 semantic 차이 없음. 측정 불필요. (원본 문장을 "가정" 에서 "사양" 으로 승격.)

### 6.2 string building — 개정

원본 유지. **[개정 R-18]**: "수치는 Phase 1 에서 `BenchmarkIntString` 으로 측정 후 strconv 가 빠르면 교체" — Phase 0 마감 시점이 아니라 **Phase 1 Week 1** 로 일정 고정. bench infra 는 F 의 nightly bench 와 공유 (Sub-2 B §6 F-2 제안).

### 6.3 thread-safety — 개정

원본 유지 + **[개정 R-3]**:

**Cycle 3 결정 (Q-B4 closed)**: Collection 은 **파일별 (per-file)**. driver 가 파일마다 `analyzer.New(checker, opts, nil)` 로 새 Collection 을 발행한다. cross-file type reuse 는 **프로그램 종료 시 merge pass** (Phase 1 Q1 이후 구현, `MetadataSchema.merge` 포팅에 의존).

- race 없음 (파일 간 독립).
- C driver 동시성 설계에 영향 없음 (C §7.1.5 dispatch 의 sort 와 독립 축).
- E §8.2 race test 는 이 결정 전제.

### 6.4 의존 surface 관리 — 개정

원본 유지 + **[개정 R-18·R-19]**:

**`GEI-021` (신설)**: `engine/metadata/` + `engine/analyzer/` 코드는 **`replace directive` 로 치환된 경로의 파일을 직접 참조하지 않는다**. 즉 `third_party/typescript-go` 의 내부 파일을 import 경로로 쓰지 않는다. shim 만 경유. replace directive 의 제거 시점(v13 GA 전)과 무관하게 엔진 import graph 는 안정.

**Q-B10 checklist (Phase 1 entry)**:
- Go 1.27 업그레이드 시 `engine/metadata/` 의 `go vet` 통과 확인.
- `unsafe.Pointer` 가 engine 에 0 개임을 `go vet` custom checker (E §7 `depguard`) 로 강제.
- shim 경계 외 32/64bit 분기 없음 확인 (F 의 cross-compile 매트릭스는 shim 영역에서만 영향).

### 6.5 Name() 캐싱 주의 — 원본 유지

### 6.6 Collection pointer 식별 보존 — 개정

원본 유지 + **[개정 R-1]**: pointer identity 는 **Go runtime level** 에서만 유지. JSON serialisation 시에는 **flat dictionary** 로 직렬화해야 cycle 회피 (`IMetadataDictionary` 패턴 Phase 1 포팅, 부록 F.5 참조). v12 와의 JSON byte-parity 는 이 dictionary 패턴 전제.

---

## 7. 코드 근거 (실제 파일:라인) (§7 개정)

### 7.1 IR 파일 — 원본 유지 + 신설 3 파일

원본 10 파일 목록 유지. 신설:

- **`functor_names.go`** (~150 LOC 예상) — [S-6, §3.9, GEI-026]. FunctorNames 상수 슬라이스 + IsValidFunctor. Cycle 3 구현.
- **`invariants_test.go`** (~200 LOC 예상) — [R-13]. TestInvariantCollectionPointerIdentity, TestInvariantAtomicNoDuplicates, TestInvariantThreeLayerIdentity. `go test -run TestInvariant -count=100` fuzz.
- **`collection_test.go`** (~80 LOC) — [S-5 R-0004]. Emplace 두 번 호출 시 동일 pointer + TestCollectionMutualEmplace (상호 재귀 A↔B).
- **`schema_test.go`** (~60 LOC) — [S-5 R-0005]. Name() 캐시 후 Schema 변형해도 이전 값.

### 7.2 Analyzer 파일 — 원본 유지 + 신설 3 파일

- **`iterate_metadata_function.go`** (Phase 1 필수, R-10) — function sum-type Analyzer.
- **`typekey_test.go`** (~50 LOC) — [S-5 R-0003]. typeKey 반환이 string, 두 번 호출 시 동일 문자열.
- **`analyzer_stack_test.go`** (~80 LOC) — [R-17]. 재귀 100 개 후 visitingX map 이 비어있음.

### 7.3 IR → emitter 경계 (outbound) — 재작성 (R-5)

Cycle 1 의 "3 함수 (EmitIs, tagCheck, EmitValidate)" 는 Phase 0 의 실구현 사실일 뿐 규약 축소가 아니다.

**개정 후 규약**: IR → emitter outbound 는 **`EmitProgrammer(kind ProgrammerKind, valueExpr string, schema *Schema, options EmitOptions) (string, error)` 단일 entry** + 13+ kind enum. C 의 `cmd/ttsc/dispatch.go` 가 이 enum 을 1:1 로 전달.

```go
// engine/emitter/emit.go (C 소관, 여기는 계약만)
type ProgrammerKind int
const (
    Is ProgrammerKind = iota
    Assert
    AssertGuard
    Validate
    Equals
    AssertEquals
    AssertGuardEquals
    ValidateEquals
    Random
    JsonStringify
    JsonParse
    JsonSchema
    // ... (13+ Phase 1 확장)
)

type EmitOptions struct {
    // Phase 1 에 LLM IConfig 같은 runtime 옵션은 이 struct 에 들어옴 (D-3 원칙).
}

func EmitProgrammer(kind ProgrammerKind, valueExpr string, schema *metadata.Schema, options EmitOptions) (string, error)
```

**에러 taxonomy (Sub-2 B §3 C-2 답)**:
- `ErrAnalysisUnsupported` — analyzer 단에서 Schema 구축 실패 (B 발급).
- `ErrEmitUnsupported` — Schema 는 구축되었으나 emitter 가 kind 에 대해 미구현 (C 발급).
- 둘 다 `ErrUnsupportedSchema` 를 wrap, `errors.Is` 로 구분.

### 7.3b IR → emitter 경계 (inbound) — Phase 0 기록

Phase 0 은 `EmitIs` / `tagCheck` 두 함수가 직접 dispatch 에서 호출되는 축약형이다. Phase 1 진입 시 `EmitProgrammer` 단일 entry 로 통일 (C §7 가 주도). B 는 kind enum 값과 IR consumer signature 만 유지.

### 7.4 원본 TS 참고 — 원본 유지

---

## 8. 안티패턴 (해선 안 되는 것들) — 개정

원본 10 개 anti-pattern 유지. 다음 3 개 추가:

### 8.11 ❌ Schema 필드에 shim 타입 넣기 (GEI-020 위반)

`*shim.Type` 이나 `shim.TypeFlags` 같은 shim 타입이 IR struct 에 등장하면 R-2 위반. IR 는 shim-free, `string` key 만 저장.

### 8.12 ❌ IR JSON 출력의 키 이름을 Go 필드명으로 자동 추론

JSON marshal 은 `json:"..."` tag 로 v12 `IMetadataSchema*` 의 키 이름을 **명시** 해야 한다. `encoding/json` 의 default Go field name export 에 의존하면 키가 `"Atomics"` (Go) vs `"atomics"` (v12) 로 drift. R-1, R-9, GEI-019 위반.

### 8.13 ❌ Go emitter 에서 Standard Schema `~standard` property 를 inline 생성

S-3 / D Q1 결정. Go emitter 는 `_createStandardSchema(__fn)` 호출만 emit. inline 구조 생성 금지. path parser 를 Go 에 재구현 금지. `assert.go:63` 의 기존 inline 코드는 Cycle 3 에 C 가 제거.

---

## 9. 검증 체크리스트 (§9 개정)

### 9.1 파일 구조 — 원본 유지

### 9.2 IR 불변식 — 개정 (R-13 추가)

기존 체크리스트 유지 + 신설:

- [ ] `invariants_test.go` 의 3 fuzz test 가 `-count=100` PASS (R-13).
- [ ] IR 어떤 struct 필드도 `*shim.*` 타입을 포함하지 않음 (GEI-020).
- [ ] JSON marshal 결과가 `fixtures/ir-v12-parity/*/expected-v12.json` 과 deep-equal (R-16, `R-1.3-B-0004`).

### 9.3 Collection — 개정 (S-7 추가)

기존 체크리스트 유지 + 신설:

- [ ] `TestCollectionMutualEmplace` 가 두 ObjectType 상호 재귀 시 pointer 공유 확인 (`R-0004`).
- [ ] Collection 의 모든 map 순회 경로가 `sort` 로 결정적 (GEI-027, S-7).
- [ ] `EmplaceX` 두 번째 반환 `fresh` 가 정확히 첫 발행에만 `true`.

### 9.4 Analyzer — 개정 (R-15, R-17)

기존 체크리스트 유지 + 신설:

- [ ] `analyzer_test.go` 에 최소 3 테스트 존재 (atomic dispatch / union flatten / recursive object). placeholder 금지.
- [ ] `analyzer_stack_test.go` — 재귀 100 개 후 visiting map 들이 비어있음 (`TestAnalyzerVisitingStackEmpty_AfterWalk`, R-17).
- [ ] `typeKey` 반환이 string, 두 번 호출 동일 (`R-0003`).

### 9.5 Tag — 개정 (R-4)

기존 체크리스트 유지 + 신설:

- [ ] 21 tag type snapshot 이 `@typia/interface/src/tags/*` 와 일치 (E §5.0 snapshot).
- [ ] `functor_names.go` 가 `packages/typia/src/internal/_*.ts` 와 diff = ∅ (`functor-name-match-go`, S-6).

### 9.6 의존성 — 원본 유지 + (R-19)

- [ ] `engine/metadata/` 에 `unsafe.Pointer` 0 개.
- [ ] `engine/analyzer/` 에 `unsafe.Pointer` 0 개 (shim 경계 외).
- [ ] `go vet` + `depguard` custom rule PASS (E §7).

### 9.7 테스트 — 신설 (S-5)

**B 가 Cycle 3 에 구현할 regression test 5 건**:

| ID | 파일 | assertion | 기반 |
|---|---|---|---|
| R-0003 | `analyzer/typekey_test.go` | `typeKey(t)` 은 string, 두 번 호출 시 동일, pointer key 금지 정적 검사 | Cycle 4 bug D.10 ([18-phase0-progress-report.md L94-95]) 영구 고정 |
| R-0004 | `metadata/collection_test.go` | `Emplace(key, name)` 두 번 호출 시 동일 pointer + 상호 재귀 `TestCollectionMutualEmplace` | §3.6 Collection 계약 (Sub-2 B §5 E-4) |
| R-0005 | `metadata/schema_test.go` | `Name()` 최초 호출 후 Schema 변형해도 이전 값. 무효화 API 미존재 확인. | §3.4 Name() 캐시 규약 |
| R-0006 | `analyzer/template_guard_test.go` | Template literal 입력 시 panic 없음, analyze 결과 Schema 에 Template bucket 존재 | R-10, R-14 (Template panic-free guard) |
| R-0007 | `analyzer/analyzer_stack_test.go` | 재귀 100 개 순차 Walk 후 visiting map 이 비어있음 | R-17 |

E §8.2 표의 `R-1.3-B-0001~0005` 와 의도적으로 매핑:
- E 의 `R-1.3-B-0001` (IR invariants) → B 의 R-0003+R-0004+R-0005 fuzz + unit (invariants_test.go 와 3 regression).
- E 의 `R-1.3-B-0002` (template-literals) → B 의 R-0006.
- E 의 `R-1.3-B-0003` (type-key-collision) → B 의 R-0003 의 1 assertion (Type.Id() collision 시나리오).
- E 의 `R-1.3-B-0004` (JSON parity) → §3.1 `ir-v12-parity/` fixture.
- E 의 `R-1.3-B-0005` (stack-empty) → B 의 R-0007.

### 9.8 문서 — 원본 유지

---

## 10. 미해결 질문 — 개정

Cycle 2 리뷰에서 답이 확정된 항목은 closed 표시.

### Q-B1. Schema value union 을 언제까지 `any` 로?

**CLOSED (R-6, R-11)**: Phase 1 에 discriminated concrete types 4 종 (`ConstantString`, `ConstantNumber`, `ConstantBigint`, `ConstantBoolean`) 확정. `interface { Stringify() string; Kind() AtomicKind }` + 4 구현체. D §3.3 의 TS 측 타입 확장과 동기화. C §3.2 의 emitter 소비 계약과 일치. Go generics 는 거부 (C: 13 × 4 = 52 경우 전개 비용).

### Q-B2. tsgo Type.Id() 의 안정성

**CLOSED (S-4, R-2)**: `typeKey` 를 analyzer 에서 driver adapter 로 이동. IR 은 `TypeKey` (opaque string) 만 저장. shim Id() 의 tsgo 버전 간 안정성은 driver 의 관심사이지 IR 의 관심사가 아니다. A 쟁점 2.2 + B Sub-2 C-3 + E Q-E3 동시 해결.

### Q-B3. Phase 1 에서 MetadataSchema.merge / covers / intersects 포팅 범위

**CLOSED (R-7)**: **Phase 1 Week 2** 에 merge + covers 포팅. `intersects` 는 Phase 2. 소비자 3 emitter (`misc.clone/prune`, `json.stringify` union narrowing, `llm.controller` signature merging — C 확정).

### Q-B4. Collection 전역 공유 vs 파일별

**CLOSED (R-3)**: **파일별** + 프로그램 종료 시 merge pass (Phase 1+).

### Q-B5. Template literal type 지원 시기

**OPEN → 반감**: 빈도 정보 없음 (E 가 fixture 통계 제공 필요). 그러나 panic-free guard 는 R-10, R-14, R-0006 으로 Phase 0 마감 전에 도입. 실 구현(패턴 합성) 은 Phase 1 우선순위 B.

### Q-B6. `Alias` vs resolve-through

**CLOSED (R-12)**: **규약 B (preserve)**. `typia.reflect.schema<T>()` 의 `name` 필드가 사용자 API 표면. alias dictionary (`GEI-025`) 를 Phase 1 에 도입. Phase 0 은 기존 resolve-through 유지 (회귀 없음).

### Q-B7. parentResolved 플래그의 쓸모

**OPEN**: Phase 1 recursive detection pass 가 정말 필요한가. 삭제하면 Phase 1 에 재도입 비용, 유지하면 dead code. Cycle 4 에 결정.

### Q-B8. Tag 유효성 검증 (exclusive 충돌) 시기

**OPEN**: Phase 1. `MetadataTagFactory.validate` (500+ LOC) 포팅. `R-1.3-B-0003` fixture 는 Phase 0 에 존재하되 두 stage 기록 (Phase 0 pass / Phase 1 diagnostic).

### Q-B9. 성능 측정 기준

**CLOSED (F-2, R-14)**: F 의 nightly bench infra + `go test -bench -benchmem` 의 alloc/op timeseries 로 해결. §6.1 의 "사양" 격상 (GEI-028).

### Q-B10. Go 버전 floor (1.26 vs 1.27)

**OPEN → checklist 편입 (R-19)**: §6.4 의 checklist 4 항목으로 편입. Phase 1 진입 시점에 확인.

### Q-B1-extra (신설). Standard Schema inline vs functor call

**CLOSED (S-3)**: Go 는 **inline 금지**. `_createStandardSchema(__fn)` 한 줄 emit. §5.4 참고.

### Q-F→B. `cmd/ttsc/main.go` 는 `1 파일 1 개념` 예외?

**답**: **예외**. `cmd/ttsc/main.go` 는 C 관장이며 Go 관용상 `main.go` 는 `version/commit/date` 변수 + `main()` 진입부 + flag 정의를 동시에 품는다. B 의 `1 파일 1 개념` 규약은 `internal/engine/` 에만 적용. C 가 main.go 내부 규약을 별도 정의.

---

## 부록 A. Phase 1~2 에서 추가될 규약 — 개정

기존 표 유지 + Cycle 3 개정 반영:

| 항목 | 일정 | 개정 근거 |
|---|---|---|
| `MetadataFactory.merge/covers` 포팅 | **Phase 1 Week 2** | R-7, C §3.3 |
| `intersects` 포팅 | Phase 2 | R-7 |
| `iterate_metadata_function` | **Phase 1 필수 (v13.0 GA 전)** | R-10, D §3.2 |
| `iterate_metadata_alias` + alias dictionary | Phase 1 (preserve 모드) | R-12, Q-B6 closed |
| `iterate_metadata_escape` (toJSON) | Phase 1 | 변동 없음 |
| `iterate_metadata_map / _set` | Phase 1 | 변동 없음 |
| `iterate_metadata_template` + 패턴 합성 | Phase 1 우선순위 B (panic-free guard 는 Phase 0 마감 전) | R-10, R-14 |
| `iterate_metadata_coalesce` | Phase 1 | 변동 없음 |
| `MetadataTagFactory.validate` | Phase 1 | Q-B8 |
| Diagnostic 구조체 + errors accumulator | Phase 1 | §2.2 확장 |
| Analyzer 병렬화 (파일별 Collection + merge pass) | Phase 1+ | R-3, Q-B4 closed |
| Name() 캐시 invalidate hook | Phase 1 | §6.5 |
| Description / JSDoc 보존 | Phase 1 | 변동 없음 |
| **[신설]** `scripts/ir-json-diff.ts` (v12 JSON parity 도구) | **Phase 0 마감 전** | R-16, `R-1.3-B-0004` |
| **[신설]** `ConstantValue` discriminated struct 4 종 | **Phase 1 Week 1** | R-6, R-11, Q-B1 closed |
| **[신설]** `TypeResolver` adapter (driver→analyzer) | **Phase 1 Week 1** | S-4, R-2, GEI-023 |
| **[신설]** `Schema.Coerce<From,To>` helper | Phase 1 | R-8, GEI-024 |
| **[신설]** `IMetadataDictionary` flat serialisation (cycle-safe) | Phase 1 | R-1, 부록 F.5 |
| **[신설]** alias dictionary (GEI-025) | Phase 1 | R-12, Q-B6 |
| **[신설]** Standard Schema inline 제거 + functor 호출 emit | **Phase 1 Week 1 (C 작업)** | S-3, D §5.3 |

---

## 부록 B. 결정 기록 (Why-this-choice) — 원본 유지 + 신설

### B.13 (신설) 왜 ConstantValue 가 interface + 4 concrete type 인가 — R-6

§2.4 "IR 은 인터페이스를 쓰지 않는다" 의 **예외**. 근거:
1. JSON serialisation 에서 `json.Marshal` 이 interface 를 구현체 기준으로 직렬화 → TS `IMetadataConstant.values: Array<{kind:...;value:...}>` 와 byte-parity 가능.
2. emitter 가 매 호출마다 `v.(string)` 하는 type assertion 비용 회피 (C §3.2 지적).
3. Tag 는 ConstantValue 와 독립이므로 union struct 에 Tags 필드 중복 불필요.
4. Generics (`Value[T]`) 는 emitter 가 13 × 4 = 52 경우 전개 필요 → 거부 (C).

### B.14 (신설) 왜 Standard Schema 는 Go 에서 inline 생성하지 않는가 — S-3

§5.4 에 기술. 핵심 근거:
- TS `_createStandardSchema.ts` (134 LOC, 4-state path parser) 가 정본.
- drift 불가능 (단일 구현).
- `typia/lib/internal/_*` 는 D §3.4 exports map 으로 public 보장 (`package.json.exports`).
- v12 emit 도 이미 functor 호출 패턴 사용 중 ([packages/typia/src/internal/_createStandardSchema.ts](../../packages/typia/src/internal/_createStandardSchema.ts)).
- Standard Schema ecosystem(Zod 4 / Valibot / ArkType 이 공유하는 `~standard` 협약)의 conformance 유지.

### B.15 (신설) 왜 Alias 를 preserve 로 바꾸는가 — R-12

§3.2 (7). 근거:
- `typia.reflect.schema<T>()` 결과 JSON 의 `name` 필드가 사용자 API 표면.
- agentica / autobe 가 이 `name` 필드를 직접 사용 (`"UserId"` vs `"string"`).
- BND-API-04 "결과값 계약" 위반 회피.
- Phase 0 validator 는 alias 이름 불필요 (resolve-through 결과와 semantic 동치) → 회귀 없음.

### B.16 (신설) 왜 shim 을 analyzer 에서 분리하는가 — S-4, R-2

§4.9, §3.7. 근거:
- §1.3 원칙 3 (IR shim-free) 의 구조적 강화.
- Phase 3 typia-go 독립 바이너리 시 `internal/engine/` 그대로 재사용 가능 (shim 경계만 교체).
- B Q-B2 (Type.Id() 안정성) + E Q-E3 (FakeChecker) 를 동시 해소.
- driver adapter 가 in-memory resolver 를 test-double 로 제공 → Go 단위 테스트 가능.

---

## 부록 C~E — 원본 유지

Cycle 1 의 C (명세 및 확장 시 절차), D (Phase 0 bug 역사), E (Go↔TS semantic diff) 는 변동 없음. 아래 한 항목만 보완:

### E.14 (신설 행) — Constant Value 표현

| 항목 | TS (typia v12) | Go (Phase 1+) | 이유 |
|---|---|---|---|
| ConstantValue.value | `string \| number \| bigint \| boolean` | `interface{Stringify,Kind}` + 4 concrete types | R-6, R-11, Q-B1 closed |
| Alias 처리 | preserve (이름 보존) | **Phase 1 preserve** (Phase 0 resolve-through) | R-12, Q-B6 closed |
| Standard Schema emit | functor 호출 (`_createStandardSchema`) | functor 호출 (동일) | S-3, 일관성 회복 |

---

## 부록 F — 자주 묻는 질문 — 원본 유지 + 신설 답

### F.11 (신설) Q: `functor_names.go` 는 어떻게 생성되나?

**A**: Cycle 3 에 B 가 수동으로 `packages/typia/src/internal/_*.ts` 파일 목록을 정렬해 상수 슬라이스로 커밋. 이후 추가/제거는 **수동 유지** 가 원칙. 집행은 D §13.1 ESLint rule `functor-name-match-go` 가 CI pre-PR gate 에서 diff = ∅ 강제. "생성 스크립트" 를 두지 않는 이유: 생성 스크립트가 있으면 drift 가 조용히 복구되어 사람의 주의가 빠진다. 수동 PR 이 의도적으로 "양쪽을 동시에 보게" 한다.

### F.12 (신설) Q: `TypeResolver` adapter 가 도입되기 전에 B Phase 0 코드는 shim 에 직접 의존한다. 규약 위반 아닌가?

**A**: Phase 0 는 **임시 허용**. Cycle 3 리팩터 PR 에서 S-4 가 closed 되면서 `shim_type_string.go` 를 driver 로 이동. Phase 1 Week 1 에 `analyzer.Walk` 시그니처가 `TypeResolver` 로 변경. 이 전환은 회귀 없이 가능 (같은 commit 에서 driver 쪽 adapter + analyzer 쪽 시그니처 동시 변경). 규약 측면에서 `GEI-023` 는 Phase 1 entry 규약.

### F.13 (신설) Q: Standard Schema 를 Go 에서 안 만드는데, v12 assert.go 의 기존 inline 11 줄은 어디로 가나?

**A**: Cycle 3 에 **C 가 제거**. B 엔진 측 변화 없음 (Schema 에 `~standard` 플래그 없음 원래부터). E 가 `fixtures/standard-schema-parity/` (10 입력 × 2 경로 deep-equal) 를 RED 상태로 먼저 커밋 → C 제거 PR 이 GREEN 으로 전환. `R-1.3-D-0001` regression guard.

---

## 10.5 R-0003~0007 상세 구현 스펙 (S-5 보완)

Cycle 3 에 B 가 구현할 5 개 Go 단위 regression test 의 상세 스펙. E 의 `R-1.3-B-*` ID 와 교차 매핑.

### R-0003 — typeKey 문자열성 + Type.Id() collision guard

**파일**: `packages/ttsc/internal/engine/analyzer/typekey_test.go` (신설, ~80 LOC).

**목적**: Cycle 4 의 치명 버그 D.10 (`visitingObjects[*shimchecker.Type]` 포인터 키 → tsgo distinct pointer 로 guard 실패 → stack overflow) 의 영구 고정. 리팩터 중 누군가 "최적화" 명목으로 포인터 키를 되돌려도 Go 단위에서 즉시 적발.

**Assertion 목록**:
1. `TestTypeKeyIsString`: `reflect.TypeOf(typeKey(mockType)).Kind() == reflect.String`. 리팩터로 return 타입이 바뀌면 컴파일 오류로 즉시 실패 + runtime fallback.
2. `TestTypeKeyStableAcrossCalls`: 동일 mock Type 을 10 회 typeKey 호출 → 10 회 모두 같은 문자열.
3. `TestTypeKeyDifferentForDifferentIds`: Type.Id()=1 과 Type.Id()=2 mock 이 다른 키.
4. `TestTypeKeyFormatTHash`: 출력 형식 `"t#<decimal>"` 준수 (정규식 매칭).
5. **collision reproducer** `TestTypeKeyCollisionScenario`: tsgo 회귀로 두 distinct pointer 가 같은 Id 를 돌려주는 시나리오를 mock 으로 재현. 현 건강한 tsgo 에서는 발생 불가, mock 으로만 검증. 발생 시 analyzer 가 "같은 key → 같은 pointer" 에 의지해 올바르게 dedup 하는지 확인.

**E `R-1.3-B-0003` (type-key-collision)** 에 매핑 — E 는 TS integration 측, B 는 Go 단위 측.

### R-0004 — Collection pointer identity (단일 + 상호 재귀)

**파일**: `packages/ttsc/internal/engine/metadata/collection_test.go` (신설, ~120 LOC).

**목적**: `GEI-027` / Collection 규약 §3.6 의 "같은 key → 같은 pointer" 불변식 영구 고정. emitter 의 recursive helper dedup (R-0002 의 근원) 전제.

**Assertion 목록**:
1. `TestCollectionEmplaceIdempotent`:
```go
c := metadata.NewCollection()
obj1, fresh1 := c.EmplaceObject("k1", "User")
obj2, fresh2 := c.EmplaceObject("k1", "User")
if obj1 != obj2 { t.Fatal("pointer mismatch") }
if !fresh1 || fresh2 { t.Fatal("fresh flag wrong") }
```
2. `TestCollectionEmplaceDifferentKeys`: 다른 key 는 다른 pointer + 두 pointer 모두 fresh=true.
3. `TestCollectionMutualEmplace` (**E-4 의 상호 재귀 guard**):
```go
// Author ↔ Book 상호 재귀 시뮬레이션
c := metadata.NewCollection()
author, _ := c.EmplaceObject("author", "Author")
book, _ := c.EmplaceObject("book", "Book")
// Author.books: Book[], Book.author: Author
// 재진입 시 pointer 재사용
author2, fresh := c.EmplaceObject("author", "Author")
if fresh || author2 != author { t.Fatal("Author pointer drift") }
book2, _ := c.EmplaceObject("book", "Book")
if book2 != book { t.Fatal("Book pointer drift") }
```
4. `TestCollectionUniqueName`: `base`, `base.o1`, `base.o2` 발행 패턴이 typia v12 와 일치.
5. `TestCollectionSortDeterministic`: 같은 시퀀스로 Emplace 한 두 Collection 이 map 순회 sort 후 동일한 JSON 을 산출. `GEI-027` / S-7 집행.

**E `R-1.3-B-0001` (IR invariants)** 의 Collection 부분.

### R-0005 — Name() 캐시 불변

**파일**: `packages/ttsc/internal/engine/metadata/schema_test.go` (신설, ~80 LOC).

**목적**: §3.4 Name() 캐시 규약 검증. 현재 모든 변형이 Name() 호출 전에 끝나므로 실문제 없으나, Phase 1 post-process merge/covers 가 활성화되면 Schema 변형 후 재계산 이슈 현실화.

**Assertion 목록**:
1. `TestNameCacheStable`: `NewSchema().AddAtomic("string")` → Name() → "string". Schema 에 `AddAtomic("number")` 추가 → Name() 재호출 → **여전히 "string"** (캐시 의도 확인).
2. `TestNameInvalidationNone`: 현재 무효화 API (`s.name = ""` 외) 가 존재하지 않음을 reflect 로 확인. Phase 1 에 API 도입 시 본 test 를 반대로 뒤집음 (TDD).
3. `TestNameEmptySchema`: 빈 Schema 의 Name() == `"unknown"`.
4. `TestNameUnionFormat`: `boolean | null | string` Schema 의 Name() 이 `"(boolean | null | string)"` (sort 후 `|` join).
5. `TestNameSafeOnNil`: 중첩 nil 포인터 상황에서 panic 없이 `"unknown"` 또는 안전한 문자열.

**E `R-1.3-B-0001` (IR invariants)** 의 Name() 부분.

### R-0006 — Template literal panic-free guard

**파일**: `packages/ttsc/internal/engine/analyzer/template_guard_test.go` (신설, ~60 LOC).

**목적**: R-10 (Phase 1 미구현) + R-14 (가정 3곳) 의 조기 guard. Template literal 입력 시 Phase 0 분석기가 panic 하지 않고 최소한 Template bucket 에 RawName 을 기록.

**Assertion 목록**:
1. `TestTemplatePanicFree`: 8 패턴 입력 (`` `user-${number}` ``, `` `id-${"a"|"b"}` ``, `` `prefix-${string}-suffix` ``, `` `${number}` ``, `` `${string}_${number}` ``, 빈 template, 단일 literal, 중첩 template) → Walk 호출 시 panic 없음, 반환 Schema 가 non-nil.
2. `TestTemplateRawNamePreserved`: `` `user-${number}` `` → `Schema.Templates[0].RawName == "user-${number}"`.
3. `TestTemplateFallbackPhase0`: Phase 0 은 Template bucket 이 비어 있을 수도 있음 (완전 미구현). 그 경우 Atomic string 으로 fallback, 사용자에게는 "unsupported template, treated as string" 로그.

**E `R-1.3-B-0002` (template-literals)** 에 매핑.

### R-0007 — Analyzer visiting stack empty after Walk

**파일**: `packages/ttsc/internal/engine/analyzer/analyzer_stack_test.go` (신설, ~100 LOC).

**목적**: R-17. `defer delete(visiting, key)` 누락을 Go 단위에서 즉시 적발. Cycle 4 bug D.11 재발 방지.

**Assertion 목록**:
1. `TestAnalyzerVisitingStackEmpty_AfterWalk`: 재귀 타입 100 개 (TreeNode 자기참조 + Author↔Book 상호재귀 50 쌍) 순차 Walk → 매 Walk 후 `len(a.visitingObjects) == 0 && len(a.visitingArrays) == 0 && len(a.visitingTuples) == 0`.
2. `TestAnalyzerNoRaceOnSequentialWalk`: 같은 Analyzer 인스턴스로 20 회 순차 Walk (race 테스트 아님, invariant 유지 테스트). 각 Walk 사이 Collection 유지.
3. `TestAnalyzerResetBetweenPasses`: 파일 경계에서 `New` 로 새 Analyzer 생성 → 이전 Analyzer 의 visiting state 가 누수되지 않음.
4. **`t.Parallel()` 금지** — §6.3 thread-unsafe 명시.

**E `R-1.3-B-0005` (stack-empty)** 에 매핑.

---

## 10.6 `TypeResolver` adapter 상세 설계 (S-4, GEI-023)

Cycle 3 Sub-3 회의에서 C 와 합의할 interface 설계 초안. Phase 1 Week 1 에 실제 구현.

### 10.6.1 목표

- `Analyzer.Walk` 는 shim `Type` 을 **직접 받지 않는다**.
- Driver 가 shim 경계를 소유, primitive 만 analyzer 에 주입.
- Phase 3 (typia-go 독립 바이너리) 시 analyzer 를 re-use 가능.
- E 의 Go 단위 test 에서 in-memory resolver 로 analyzer 를 테스트 가능 (FakeChecker 불필요).

### 10.6.2 Interface

```go
// engine/analyzer/resolver.go (Phase 1 신설)
package analyzer

// TypeKey is an opaque identifier for a TS type, stable within a Walk session.
// IR stores only TypeKey (string), not shim Type pointers.
type TypeKey string

// TypeResolver is implemented by the driver; analyzer consumes only primitive ops.
type TypeResolver interface {
    // KeyOf returns an opaque TypeKey for a type handle.
    // Driver-supplied mapping from shim Type to stable string.
    KeyOf(handle Handle) TypeKey

    // StringOf returns a display name ("User", "string", "Type#<id>" fallback).
    StringOf(handle Handle) string

    // Flags returns the type's flag bitmap (Object, Union, Intersection, Literal, etc.).
    // Values mirror tsgo TypeFlags (stable contract).
    Flags(handle Handle) TypeFlags

    // UnionMembers returns child handles if handle is a union; nil otherwise.
    UnionMembers(handle Handle) []Handle

    // IntersectionMembers returns child handles if handle is an intersection.
    IntersectionMembers(handle Handle) []Handle

    // ObjectProperties returns property-name + property-type-handle pairs.
    ObjectProperties(handle Handle) []PropertyHandle

    // TupleElements returns element handles of a tuple type.
    TupleElements(handle Handle) []Handle

    // ArrayElement returns the element handle of an array type.
    ArrayElement(handle Handle) (Handle, bool)

    // SymbolName returns the underlying symbol name if any ("Date", "Map", "User").
    SymbolName(handle Handle) string

    // LiteralValue extracts a literal's raw Go value (string/float64/bool/big.Int pointer).
    LiteralValue(handle Handle) any
}

// Handle is an opaque driver-side token (may wrap *shim.Type).
// Analyzer never inspects its internals.
type Handle interface { __handleMarker() }

// PropertyHandle represents one object property.
type PropertyHandle struct {
    Name     string
    Type     Handle
    Optional bool
    JsDoc    string
}

type TypeFlags uint32
const (
    FlagString TypeFlags = 1 << iota
    FlagNumber
    FlagBigint
    FlagBoolean
    FlagNull
    FlagUndefined
    FlagVoid
    FlagNever
    FlagAny
    FlagUnknown
    FlagUnion
    FlagIntersection
    FlagObject
    FlagArray
    FlagTuple
    FlagLiteral
    FlagEnum
    FlagTemplate
    FlagFunction
    // ... (Phase 1 확장)
)
```

### 10.6.3 Walk 시그니처 변경

```go
// Phase 0 (현재)
func (a *Analyzer) Walk(t *shimchecker.Type) (*metadata.Schema, bool)

// Phase 1 (GEI-023 적용 후)
func (a *Analyzer) Walk(root Handle, resolver TypeResolver) (*metadata.Schema, bool)
```

driver 쪽 변경:
```go
// driver/analyze.go (Phase 1)
import "engine/analyzer"

type shimHandle struct { t *shim.Type }
func (shimHandle) __handleMarker() {}

type shimResolver struct { checker *shim.Checker }
func (r *shimResolver) KeyOf(h analyzer.Handle) analyzer.TypeKey {
    return analyzer.TypeKey("t#" + strconv.FormatInt(int64(h.(shimHandle).t.Id()), 10))
}
// ... 나머지 메소드
```

### 10.6.4 Test-double (E Q-E3 답)

```go
// analyzer/fake_resolver_test.go (Cycle 3 에 B 가 skeleton 작성)
type fakeResolver struct {
    keys       map[any]TypeKey
    flags      map[any]TypeFlags
    unions     map[any][]Handle
    // ...
}

func (f *fakeResolver) KeyOf(h Handle) TypeKey { return f.keys[h] }
// ...

// 테스트 예:
func TestAnalyzerDispatchAtomic(t *testing.T) {
    r := newFakeResolver()
    stringHandle := r.addType(TypeKey("t#1"), FlagString, "string")
    analyzer := analyzer.New(r, analyzer.Options{})
    schema, ok := analyzer.Walk(stringHandle, r)
    if !ok { t.Fatal("expected ok") }
    if len(schema.Atomics) != 1 || schema.Atomics[0].Type != "string" {
        t.Fatalf("expected Atomic string, got %v", schema)
    }
}
```

이 설계가 확정되면 E §2.1 의 analyzer placeholder 예외는 제거 (R-15 부분 수용의 전제).

---

## 10.7 JSON byte-parity 검증 스크립트 상세 (R-16)

`scripts/ir-json-diff.ts` Phase 0 마감 전 구현. 본 규약이 약속한 `GEI-019` 집행 수단.

### 10.7.1 파이프라인

```
입력 fixture TS (e.g. fixtures/ir-v12-parity/primitives/src/main.ts)
    │
    ├─→ typia v12 MetadataFactory.analyze → JSON A
    │
    └─→ ttsc Go Analyzer.Walk → Go Schema → MarshalJSON → JSON B

diff (A, B) → 빈 diff 여야 PASS
```

### 10.7.2 fixture 목록 (10 개)

| # | 디렉터리 | 타입 | 검증 목적 |
|---|---|---|---|
| 1 | `primitives/` | `string \| number \| boolean \| bigint` | Atomic bucket JSON key `"atomics"`, value `"boolean"` 등 |
| 2 | `objects/` | `{ id: string; name: string }` | Object bucket, Property key `"key"` `"value"` |
| 3 | `unions/` | `string \| number \| null` | `"nullable": true`, Atomic 2 개 |
| 4 | `recursive/` | `type Tree = { children: Tree[] }` | Collection pointer → JSON 직렬화 시 flat dict (부록 F.5) |
| 5 | `tagged/` | `string & tags.Format<"uuid">` | Tag matrix `"tags": [[{kind:"format", value:"uuid"}]]` |
| 6 | `tuples/` | `[string, number, boolean]` | Tuple bucket, elements 순서 |
| 7 | `arrays/` | `readonly string[]` | Array bucket |
| 8 | `alias/` | `type UserId = string` | Alias bucket (preserve 모드, Phase 1+ 에만 작동; Phase 0 는 resolve-through) |
| 9 | `native/` | `Date` | Native bucket, `"name": "Date"` |
| 10 | `constant/` | `"red" \| "green" \| "blue"` | Constant bucket, Values 3 개 |

### 10.7.3 예상 challenge

- typia v12 의 `undefined` / optional 필드 생략 semantics 와 Go `omitempty` 의 차이.
- `big.Int` 값의 JSON representation (v12 는 bigint literal, Go 는 string 또는 object).
- Collection `Object` 의 참조 표현 — v12 는 `IMetadataDictionary` pattern, Go 는 Phase 0 에 pointer. 이 fixture 에서 cycle 의 flat 직렬화 정본 확정.

### 10.7.4 failure mode

- diff 발견 시: GitHub Issue 자동 생성 (E CI 와 연동), B 가 대응.
- Phase 0 마감 전 10/10 PASS 를 GA 조건으로 못박음.

---

## 부록 G. 규약 ID 인덱스 (Cycle 3 개정 후)

| ID | 소속 | 이름 | 출처 |
|---|---|---|---|
| GEI-001 | §1 | 1:1 파일 매핑 | 원본 |
| GEI-002 | §1 | IR 는 순수 데이터, 포인터 재귀 | 원본 |
| GEI-003 | §1 | stdlib + shim 외 의존 제로 | 원본 |
| GEI-004 | §1 | typia v12 이름·semantic 보존 | 원본 |
| GEI-005 | §1 | graceful degradation (panic 금지) | 원본 |
| GEI-006 | §1 | 측정 없는 최적화 금지 | 원본 |
| GEI-007 | §1 | 재귀 guard 는 소비자 의무 | **신설 (S-2)** |
| GEI-008 | §2 | 타입 UpperCamelCase, Metadata prefix 제거 | 원본 |
| GEI-009 | §2 | 에러 처리 (IR panic / analyzer ok) | 원본 |
| GEI-010 | §2 | 포인터 vs 값 | 원본 |
| GEI-011 | §2 | 인터페이스 정책 | 원본 |
| GEI-012 | §2 | 패키지 구조 | 원본 |
| GEI-013 | §3 | Schema 필드 순서 = v12 | 원본 |
| GEI-014 | §3 | 12 sum-type | 원본 |
| GEI-015 | §3 | Modifier bit | 원본 |
| GEI-016 | §3 | Name() 캐시 | 원본 |
| GEI-017 | §3 | Size / Bucket | 원본 |
| GEI-018 | §3 | Collection registry | 원본 |
| **GEI-019** | §3.1 | **IR JSON v12 byte-parity** | **신설 (R-1·R-9·R-16)** |
| **GEI-020** | §3.7 | **IR shim-free (string key 만)** | **신설 (R-2, A §2.2)** |
| **GEI-021** | §6.4 | **replace directive 파일 직참조 금지** | **신설 (R-18)** |
| **GEI-022** | §3.8 | **emitter `map[*ObjectType]bool` visiting set 의무** | **신설 (S-2)** |
| **GEI-023** | §4.9 | **TypeResolver adapter (driver→analyzer)** | **신설 (S-4, A §2.2, E Q-E3)** |
| **GEI-024** | §3.2 | **`Schema.Coerce<From,To>` helper 경유** | **신설 (R-8)** |
| **GEI-025** | §3.2(7) | **alias dictionary (preserve 모드)** | **신설 (R-12, Q-B6)** |
| **GEI-026** | §3.9 | **functor_names.go 단일 진실원** | **신설 (S-6)** |
| **GEI-027** | §3.6 | **Collection sort 순회 (emit 재현성)** | **신설 (S-7)** |
| **GEI-028** | §6.1 | **nil slice 를 사양으로 승격** | **신설 (R-14, 가정 제거)** |

Cycle 1 의 18 ID 유지 (GEI-001~018) + 10 신설 (GEI-019~028) = 28 총 ID. 번호 재배치 없음.

---

## 부록 H. Cross-role 규약 동기 표 (Cycle 3 Sub-3 회의용)

B 의 개정이 타 역할에 미치는 영향 단면 — Sub-3 회의에서 한 장으로 공유.

| B 규약 | A 영향 | C 영향 | D 영향 | E 영향 | F 영향 |
|---|---|---|---|---|---|
| GEI-019 JSON parity | BND-API-04 세분화 (A §2.4 (a)/(b)/(c)) | emitter JSON 출력 영향 없음 | `IMetadataSchema*` 필드 변동 금지 | `ir-v12-parity` fixture 10 | — |
| GEI-020 shim-free IR | BND-PKG-04 IR 소유권 | driver adapter 작성 | — | depguard lint | — |
| GEI-022 visiting 의무 | — | §7.1.7 규약 복제 | — | R-0002 regression 유지 | — |
| GEI-023 TypeResolver | BND-PKG-04 (경계 재정의) | `shimResolver` 구현 | — | FakeChecker 제거 | — |
| GEI-024 Coerce helper | — | emitter fallback log 의무 | — | fallback log 확인 | — |
| GEI-025 alias preserve | — | emitter alias 이름 표시 | `IMetadataAlias` 필드 유지 | `reflect-alias` fixture | — |
| GEI-026 functor_names.go | — | — | §13.1 `functor-name-match-go` ESLint rule | CI lint step | — |
| GEI-027 Collection sort | — | emit 순서 결정성 | — | `test_rewrite_idempotent` 전제 | F2 재현성 축 (S-7) |
| Standard Schema inline 금지 | BND-API-04 충돌 해소 | `assert.go:63` 재작성 | `_createStandardSchema` 공유 | `standard-schema-parity` fixture | standardschema.dev gate |
| ConstantValue 4 types | — | type switch 기반 emit | `IMetadataConstant.values` 타입 확장 | — | — |
| iterate_metadata_function | — | §7.15.1 functional emitter | `typia.functional` namespace 존재 | `functional` fixture 카테고리 | — |

**Sub-3 회의 결의 필수 항목 7 건**:
1. A BND-PKG-04 에 IR 소유권 (metadata+analyzer=B, emitter=C) 한 줄 추가.
2. C §7.1.7 GEI-022 복제.
3. C §7.3.3 Standard Schema Go inline 제거 + functor call emit.
4. C §3.4 `TypeResolver` adapter 도입 (B §4.9 개정과 대칭).
5. D §3.3 `IMetadataConstant.values` 타입 확장 약속.
6. D §13.1 `functor-name-match-go` ESLint rule 신설.
7. E §5 R-0003~0007 ID 예약 및 fixture 매핑.

## 11. Cycle 3 개정 요약

- **27 항목 중 수용 23, 부분 수용 3, 거부 1** (R-20, 경계 밖).
- **신설 규약 ID**: GEI-019 (JSON parity), GEI-020 (IR shim-free), GEI-021 (replace 참조 금지), GEI-022 (emitter guard 의무), GEI-023 (TypeResolver adapter), GEI-024 (Schema.Coerce helper), GEI-025 (alias dictionary), GEI-026 (functor_names.go), GEI-027 (Collection sort), GEI-028 (nil slice 사양화).
- **Q-B1 / Q-B2 / Q-B3 / Q-B4 / Q-B6 / Q-B9 closed**. Q-B5 / Q-B7 / Q-B8 / Q-B10 OPEN 유지(일정 확정).
- **신설 파일**: `functor_names.go`, `invariants_test.go`, `collection_test.go`, `schema_test.go`, `typekey_test.go`, `analyzer_stack_test.go`, `iterate_metadata_function.go` (Phase 1), `template_guard_test.go`.
- **규약 본문에서 "가정" 표기 3 곳 개정**: (a) §6.1 nil slice → GEI-028 사양. (b) §4.9 Type.Id() collision → GEI-023 adapter + R-0003 regression. (c) §5.3 exclusive 위반 → R-1.3-B-0003 fixture.
- **R-0003~0005 Go 단위 regression test 5 건** (실제는 R-0003~0007) Cycle 3 내 B 구현.
- **Standard Schema 규약 단일화**: Go inline 금지, `_createStandardSchema(__fn)` 한 줄 emit (C 가 구현).
- **shim 경계 이동**: `shim_type_string.go` → driver (Cycle 3 리팩터).

### 11.1 Sub-3 개정 타 역할 의존

B 가 개정 완결되려면 다음 타 역할 개정이 동일 Cycle 에 수반되어야 한다:
- **A**: BND-PKG-04 에 IR 소유권 (S-1).
- **C**: §7.1.7 emitter guard (S-2, GEI-022 복제). §7.3.3 Standard Schema 재작성 (S-3). §3.4 analyzer adapter (S-4). §6.2 dispatch error taxonomy.
- **D**: §13.1 `functor-name-match-go` ESLint rule (S-6 집행 수단). §3.3 TS ConstantValue 확장 (R-6·R-11). §5.3 alias preserve (R-12).
- **E**: §8.2 표의 `R-1.3-B-*` 와 본 문서 R-0003~0007 을 매핑. §3.7 byte idempotence 전제 공유.
- **F**: §2.3 재현성 이중 축 (F-1, S-7). cross-compile 매트릭스는 B 영향 없음.

### 11.2 Cycle 3 내 B 자체 작업 (시간 추산)

| 작업 | 소요 |
|---|---|
| §0 개정 이력 표 작성 | (완료) |
| `functor_names.go` 147 entry 커밋 | 1 시간 (TS 파일 목록 수동 enum) |
| R-0003~0007 Go 단위 test 5 건 구현 | 4 시간 |
| `invariants_test.go` fuzz 3 건 | 2 시간 |
| `scripts/ir-json-diff.ts` Phase 0 마감 전 구현 | 1 일 |
| `fixtures/ir-v12-parity/` 10 fixture + expected JSON | 1 일 |
| Collection sort 리팩터 PR (`collection.go L60-80`) | 2 시간 |
| 본 문서 Sub-3 회의 참석 + A/C/D/E/F 개정 PR 리뷰 | 1 일 |

합계 약 3~4 일. Cycle 3 기간 내 완결 가능.

---

## 150 단어 이하 요약

Cycle 3 B 개정본. A/C/D/E/F 5 리뷰의 "B 초안 비판" 27 항목 중 23 수용·3 부분·1 거부. 핵심 합의 7 개: (1) IR JSON 은 v12 `IMetadata*` byte-parity (`GEI-019`). (2) IR 는 shim opaque handle 만 — `typeKey` 를 driver adapter 로 이동 (`GEI-020·023`). (3) 모든 재귀 emitter 는 `map[*ObjectType]bool` visiting set 의무 (`GEI-022`). (4) Standard Schema Go inline 금지, `_createStandardSchema(__fn)` 호출만. (5) `ConstantValue` discriminated struct 4 종 Phase 1. (6) Alias preserve (Phase 1 dictionary). (7) `metadata/functor_names.go` 신설 — D ESLint rule 이 diff = ∅ 집행. 거부 1 건은 `cmd/ttsc/main.go` 변수 소유자 (C 관장, 경계 밖). "가정(측정 없음)" 3 곳은 regression fixture ID (`R-1.3-B-0001~0005`) 와 사양 승격 (`GEI-028`) 으로 제거. B 는 Cycle 3 에 R-0003~0007 Go 단위 regression 5 건 + fuzz 3 건 + JSON parity 도구를 구현한다. (149 단어)
