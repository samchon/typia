# B. Go Engine Lead — Cycle 1 초안

> 역할 B: typia-go 엔진(Go 코드) 구현 규약. MetadataSchema IR + Analyzer + Tag 시스템 + Emitter 진입 직전까지.
>
> 단일 진실원: [wiki/08-tsgo-master-plan/07-typia-go-specification.md](../../wiki/08-tsgo-master-plan/07-typia-go-specification.md),
> [wiki/08-tsgo-master-plan/16-package-port-boundary.md](../../wiki/08-tsgo-master-plan/16-package-port-boundary.md),
> [wiki/08-tsgo-master-plan/18-phase0-progress-report.md](../../wiki/08-tsgo-master-plan/18-phase0-progress-report.md).
>
> 기준 스냅샷: 2026-04-19, `feat/ttsc` 브랜치. Phase 0 스냅샷: Go 4,459 LOC(non-test) / 965 LOC(test) / shim 4,523 LOC(자동 생성) / TS fixtures 1,769 LOC. 테스트 21/21 PASS.

---

## 1. 관장 범위와 핵심 원칙

### 1.1 관장 범위 (In-scope)

본 규약이 다루는 범위는 **`packages/ttsc/internal/engine/` 하위 두 계층** 이다.

- `engine/metadata/` — MetadataSchema IR(12 sum-type + Collection registry + Tag matrix)
- `engine/analyzer/` — typescript-go `Checker`로부터 MetadataSchema 를 빌드하는 dispatcher

추가로 **IR → emitter 인계 경계**(`EmitIs(...)` 등에 schema pointer 를 전달하기 직전까지)를 관장한다.

### 1.2 관장 밖 (Out-of-scope)

- `engine/emitter/` 내부 JS 코드 생성 상세(함수 본문 합성, 변수 이름 스킴, 소스맵) — C(ttsc Driver) 역할.
- `packages/ttsc/internal/driver/` — tsgo program 로드, CallExpression 감지, `.js` rewrite — C 역할.
- `packages/ttsc/shim/`, `tools/gen_shims/` — tsgo 내부 API 노출 — C/F 역할.
- `@typia/typia` / `@typia/interface` 의 TS 타입 선언 — D(TS Facade) 역할.
- 테스트 시스템 자체 — E 역할. (단, IR·Analyzer 단위 테스트는 본 규약이 기여)

### 1.3 핵심 원칙 6 가지

다음 6 원칙은 모든 세부 규약(§2~§6)의 상위 제약이다. 충돌 시 원칙이 우선.

1. **1:1 파일 매핑(Side-by-side diff friendly)**
   Go 파일 이름은 `packages/core/src/schemas/metadata/*.ts` 와 `packages/core/src/factories/internal/metadata/iterate_metadata_*.ts` 와 이름·분리 단위가 1:1 로 일치한다. Phase 0 Cycle D 에서 `metadata.go` 547 LOC 단일 파일을 8 개 파일로, `analyzer.go` 634 LOC 단일 파일을 9 개 파일로 분해한 이유가 이것이다([wiki/08-tsgo-master-plan/18-phase0-progress-report.md L120-147](../../wiki/08-tsgo-master-plan/18-phase0-progress-report.md)).

2. **IR 은 순수 데이터. 자기 참조는 포인터로.**
   Schema 의 모든 컨테이너 필드(`*ObjectRef`, `*ArrayRef`, …)는 Collection 이 발행하는 단일 pointer 를 공유한다. 재귀 타입은 "같은 포인터를 두 번째로 만나면 이미 resolved" 로 수렴하며, emitter 는 이 포인터 identity 를 cycle detection 에 이용한다(§3.8, [emitter/is.go L265-295](../../packages/ttsc/internal/engine/emitter/is.go)).

3. **의존성 제로(stdlib 외 + shim 외).**
   `engine/metadata/` 패키지는 `sort` / `strings` / `strconv` 외 어떤 import 도 허용하지 않는다([metadata.go L6-12 doc comment](../../packages/ttsc/internal/engine/metadata/metadata.go)). Analyzer 는 `shim/checker` 의 필요 표면만 쓴다. 이것이 "JSON-serialisable, trivially inspectable" 보장을 가능하게 한다.

4. **typia v12 의 이름·semantic 을 보존한다.**
   `MetadataAtomic` → `Atomic`, `MetadataObjectType` → `ObjectType`, `MetadataFactory.analyze` → `Analyzer.Walk`, `explore_metadata` → `iterate` 처럼 **접두어 `Metadata` 만 제거**하고 나머지는 TS 와 같게 둔다. `getName` → `Name()` 처럼 Go 관용을 따르되 의미 보존.

5. **graceful degradation — 분석 실패는 panic 이 아니다.**
   `Walk` 가 (nil, false) 를 돌려주면 caller 는 emit 을 건너뛰고 원본 호출을 그대로 둔다([analyzer.go L87-99](../../packages/ttsc/internal/engine/analyzer/analyzer.go)). typia v12 가 errors array 에 기록하는 케이스 == Go 에서 (nil, false). Phase 1 에서 구조화된 diagnostic 으로 승격.

6. **성능 최적화는 "측정 없이" 하지 않는다.**
   `typeKey` 가 `strconv` 대신 손으로 작성한 `intToString` 을 쓰는 건 성능이 아니라 **의존 surface 예측 가능성**을 위한 결정([type_key.go L24-47](../../packages/ttsc/internal/engine/analyzer/type_key.go)). 추정·가정은 "가정:" 으로 명시(§6).

### 1.4 용어 고정

| Go | 원본 TS | 설명 |
|---|---|---|
| `Schema` | `MetadataSchema` | 12-bucket 합성 타입. 하나의 TS 타입을 통째로 표현. |
| `Collection` | `MetadataCollection` | Object/Array/Tuple/Alias 를 key → pointer 로 저장하는 레지스트리. |
| `ObjectType` / `ObjectRef` | `MetadataObjectType` / `MetadataObject` | "Type" 은 실 인스턴스(shape), "Ref" 는 포인터+태그 참조. |
| `Analyzer` | `MetadataFactory` (+ internal) | tsgo Type → Schema 변환기. |
| `iterate` | `iterate_metadata` | dispatcher. |
| `TagMatrix` | `IMetadataTypeTag[][]` | product-of-sums 꼴 태그 저장소. |

---

## 2. Go 코딩 규약

### 2.1 명명 (Naming)

- **타입**: `UpperCamelCase`. 원본 TS 의 `Metadata` 접두어는 제거. 예: `MetadataObjectType` → `ObjectType`. 이는 Go 의 `package metadata` 가 이미 prefix 역할을 하기 때문이다.
- **메서드**: 동작 동사는 원본 TS 의 동사를 그대로 쓴다. `getName` → `Name()`(Go 는 getter 에 `Get` 을 쓰지 않는 관용), `isRequired` → `IsRequired()`, `isSoleAtomic` → `IsSoleAtomic()`.
- **enum**: 문자열 newtype(`type AtomicKind string`) + `const AtomicXxx AtomicKind = "xxx"`. 값은 typia v12 가 JSON 에 쓰는 문자열과 정확히 일치(`"boolean"`, `"number"`, `"bigint"`, `"string"`). [atomic.go L4-11](../../packages/ttsc/internal/engine/metadata/atomic.go).
- **내부 헬퍼**: `lowerCamelCase`. 패키지 외부에 노출하지 않는다. (`computeName`, `safeName`, `typeKey`, `mergeInto`, `extractTag`, `attachTag`, `appendTagRow`).
- **파일명**: 원본 TS 와 1:1. 예: `iterate_metadata_union.go`, `iterate_metadata_intersection.go`. 원본에 없는 Go 고유 파일은 명시적 접미어(`shim_type_string.go`, `type_key.go`) 로 출처가 typia v12 가 아님을 드러낸다.

### 2.2 에러 처리

- **IR 레이어 (`metadata/`) 는 panic 만 허용**. 이유: IR 조작은 프로그램 invariant(잘못된 AtomicKind 를 넣는 등) 위반이므로 빠르게 실패해야 한다. 예: [schema.go L44-45](../../packages/ttsc/internal/engine/metadata/schema.go) `AddAtomic` 의 `panic("metadata: AddAtomic received invalid kind ...")`.
- **Analyzer 레이어 (`analyzer/`) 는 (ok bool) 반환**. 타입이 지원 범위 밖이면 `return false`. 호출자는 emit 을 skip. 이는 typia v12 가 `errors.push(...)` 하는 자리와 semantic 이 같다.
- **Emitter 인계 경계**: Schema pointer 자체는 non-nil 보장. `*ObjectRef` 의 `Type` 필드는 nil 이 될 수 없다(Collection 이 발행하므로). emit 은 `if ref == nil || ref.Type == nil` 방어 코드를 가지되, 이 경로가 실제로 진입하면 상위 버그다([emitter/is.go L228-229](../../packages/ttsc/internal/engine/emitter/is.go)).
- **diagnostic 은 Phase 1 에서 구조화**. Phase 0 은 "지원 못 함 → (nil, false) → rewrite skip". Phase 1 에서 `type Diagnostic struct { Path string; Message string; Hint string }` 를 IR 산출과 함께 반환하도록 확장.

### 2.3 포인터 vs 값 규약

| 종류 | 표현 | 이유 |
|---|---|---|
| 재귀 가능 struct (`ObjectType`, `ArrayType`, `TupleType`, `AliasType`) | **항상 포인터** | Collection 레지스트리가 단일 pointer 를 발행. 재귀 타입은 같은 pointer 를 두 번 만난다. |
| 비재귀 값 struct (`Atomic`, `Constant`, `ConstantValue`, `Template`, `Native`) | **값** | Tag matrix 만 첨부되는 단순 레코드. 포인터 오버헤드 불필요. |
| 옵션/null 기능(`Escaped`, `Rest`) | **포인터 + nil** | TS 의 `null` 에 대응하는 "있음/없음" 삼상. |
| `TagMatrix` | **slice-of-slice 값** | `nil` 이 기본. `Clone()` 으로 deep copy 제공([tag.go L22-33](../../packages/ttsc/internal/engine/metadata/tag.go)). |
| 참조 래퍼(`ObjectRef`, `ArrayRef`, `TupleRef`, `AliasRef`, `SetRef`, `MapRef`) | **포인터** | 단순 {Type, Tags} 를 담지만 여러 유니언 멤버에서 공유·수정될 수 있으므로 pointer. |

### 2.4 인터페이스 정책

- **IR 은 인터페이스를 쓰지 않는다**. `Schema` 는 12 개 bucket slice 를 가진 concrete struct 다. 이는 JSON serialisation, reflect 없는 접근, 디버거 친화성의 전제. TS 의 sealed union 과 달리 Go 는 인터페이스를 쓰면 "누가 구현할지" 가 런타임에만 결정되어 IR 추론이 어려워진다.
- **Analyzer 는 인터페이스를 쓰지 않는다**. `*Analyzer` 의 메서드들(`iterate`, `iterateUnion`, …)은 receiver 고정 dispatch 이며 전략 패턴이 필요한 확장점이 아직 없다. Phase 1 에서 plugin 이 필요해질 때까지 interface 신설 금지.
- **shim 경계에서만 인터페이스 허용**. `shim/checker.Type` 은 typescript-go 의 interface 를 그대로 노출. 이는 "바깥 영역" 이므로 예외.

### 2.5 패키지 구조

```
packages/ttsc/internal/engine/
├── metadata/           ← 이 규약의 1 관장
│   ├── metadata.go     package doc only, 28 LOC
│   ├── tag.go          TypeTag + TagMatrix
│   ├── atomic.go       AtomicKind, Atomic, Constant, ConstantValue, Template
│   ├── container.go    ArrayType/Ref, TupleType/Ref, Property, ObjectType/Ref
│   ├── alias.go        AliasType, AliasRef
│   ├── special.go      Native, Escaped, Parameter, Function, SetRef, MapRef
│   ├── schema.go       Schema + Name/Size/Bucket/IsRequired/IsSoleAtomic/...
│   ├── collection.go   Collection registry (Emplace* + uniqueName)
│   ├── name.go         computeName + safeName
│   ├── jslit.go        literalName + jsString + intString
│   └── format.go       floatFormatG
│
├── analyzer/           ← 이 규약의 2 관장
│   ├── analyzer.go     Analyzer + Options + New/FromType/Walk, 105 LOC
│   ├── iterate_metadata.go             dispatcher, 71 LOC
│   ├── iterate_metadata_atomic.go      boolean/number/bigint/string, 30
│   ├── iterate_metadata_constant.go    literal values, 46
│   ├── iterate_metadata_union.go       union + mergeInto, 64
│   ├── iterate_metadata_intersection.go intersection + tag extraction, 45
│   ├── iterate_metadata_object.go      objects + recursive registry, 62
│   ├── iterate_metadata_array.go       arrays, 47
│   ├── iterate_metadata_tuple.go       tuples, 36
│   ├── native.go                       Date/Uint8Array/Map/Set whitelist, 33
│   ├── tag.go                          extractTag/attachTag/appendTagRow, 120
│   ├── type_key.go                     typeKey / typeName / intToString, 47
│   └── shim_type_string.go             Checker.typeToString fallback, 21
│
└── emitter/            ← C 역할 (본 규약은 "경계까지만")
```

---

## 3. MetadataSchema IR 규약

### 3.1 Schema(최상위) 필드 순서

`metadata/schema.go` 의 `Schema` struct 필드 순서는 **typia v12 의 `MetadataSchema.ts` 와 동일** 해야 한다. JSON tag 역시 동일 이름([schema.go L10-34](../../packages/ttsc/internal/engine/metadata/schema.go), [core/MetadataSchema.ts L50-75](../../packages/core/src/schemas/metadata/MetadataSchema.ts)).

```go
type Schema struct {
    Any      bool `json:"any"`
    Required bool `json:"required"`
    Optional bool `json:"optional"`
    Nullable bool `json:"nullable"`

    Atomics   []Atomic   `json:"atomics,omitempty"`
    Constants []Constant `json:"constants,omitempty"`
    Templates []Template `json:"templates,omitempty"`

    Arrays  []*ArrayRef  `json:"arrays,omitempty"`
    Tuples  []*TupleRef  `json:"tuples,omitempty"`
    Objects []*ObjectRef `json:"objects,omitempty"`
    Aliases []*AliasRef  `json:"aliases,omitempty"`

    Natives   []Native    `json:"natives,omitempty"`
    Sets      []*SetRef   `json:"sets,omitempty"`
    Maps      []*MapRef   `json:"maps,omitempty"`
    Functions []*Function `json:"functions,omitempty"`
    Escaped   *Escaped    `json:"escaped,omitempty"`
    Rest      *Schema     `json:"rest,omitempty"`

    name           string
    parentResolved bool
}
```

**주의**: `omitempty` 는 v12 와 정확한 JSON 호환을 위한 것. `escaped: null` 등 v12 에서 `null` 로 직렬화되는 필드는 pointer 라 `omitempty` 로 자동 처리된다. Phase 1 에서 v12 JSON 과 diff 도구를 만들어 회귀 검증.

### 3.2 12 sum-type 각각 규약

Phase 0 에서 typia v12 가 구분하는 12 category 는 다음과 같다. 각각의 Go 표현 규약.

#### (1) Atomic (primitive)
- 값 struct: `{ Type AtomicKind; Tags TagMatrix }`. [atomic.go L24-27](../../packages/ttsc/internal/engine/metadata/atomic.go).
- `AtomicKind` 는 문자열 newtype. 유효 값 4 종: `"boolean"`, `"number"`, `"bigint"`, `"string"`. 그 외 값은 `IsValid()` false.
- 중복 kind 는 `Schema.AddAtomic` 이 dedup.
- **불변식**: 같은 Schema 내 `Atomics` 에 동일 `Type` 가 두 번 나타나지 않는다.

#### (2) Constant (literal 값)
- 값 struct: `{ Type AtomicKind; Values []ConstantValue }`.
- `ConstantValue` 는 `{ Value any; Tags TagMatrix }`. `any` 를 쓰는 이유: TS 의 `string | number | bigint | boolean` 을 Go 에서 표현하는 가장 단순한 방법. Phase 1 에서 discriminated union struct 로 교체 검토.
- `Schema.AddConstant(typ, value)` 는 같은 kind 의 Values 리스트에 `==` 비교로 dedup 추가.
- **불변식**: 같은 `Type` 의 Constant 가 Schema 내에 최대 1 개. 여러 값은 한 Constant 의 Values 배열에 들어간다(예: `"a" | "b" | "c"` → `{Type: string, Values: [a, b, c]}`).

#### (3) Template
- 값 struct: `{ RawName string; Tags TagMatrix }`. [atomic.go L46-49](../../packages/ttsc/internal/engine/metadata/atomic.go).
- Phase 0 은 `RawName` 만 저장(예: `` `user-${number}` ``). 패턴 합성은 emitter 가 필요할 때 Phase 1 로 미룸.
- **가정**(측정 없음): 패턴 생성 cost 는 emit 시점이 분석 시점보다 낮다 — 패턴은 emit 때만 쓰이므로 분석 때 미리 만들지 않는다.

#### (4) Array
- 두 struct 분리:
  - `ArrayType { Name, Value *Schema, Index *int, Recursive bool, Nullables []bool }`
  - `ArrayRef  { Type *ArrayType, Tags TagMatrix }`
- `Schema.Arrays` 는 `[]*ArrayRef`. 같은 `ArrayType` 을 여러 유니언 멤버가 **다른 태그 매트릭스와** 참조할 수 있어야 하므로 Ref 레이어가 필요([container.go L4-17](../../packages/ttsc/internal/engine/metadata/container.go)).
- **불변식**: 같은 `ArrayType` 을 가리키는 `ArrayRef` 가 여러 개여도 모두 같은 `Type` 포인터를 공유한다(Collection 이 단일 pointer 만 발행).

#### (5) Tuple
- `TupleType { Name, Elements []*Schema, Index *int, Recursive bool, Nullables []bool }` + `TupleRef`.
- `Elements` 는 순서를 보존한다(position 이 의미 있으므로).
- **불변식**: 생성 시 `Emplace` 가 호출되면 `Elements` 는 nil 에서 시작해 `iterateTuple` 이 채운다.

#### (6) Object
- `ObjectType { Name, Properties []*Property, Description *string, JsDocTags []string, Index int, Validated, Recursive bool, Nullables []bool }` + `ObjectRef`.
- `Index` 는 Collection 이 발행하는 정수(삽입 순서). `Validated` 는 Phase 1 에서 parent-resolution pass 가 사용.
- `Property { Key *Schema, Value *Schema, Description *string, JsDocTags []string }`. **Key 가 Schema 인 이유**: typia 는 computed key(`${string}-id` Template) 와 symbol 같은 복합 키를 표현하므로. Phase 0 은 string literal key 만 쓰지만 표현력은 v12 와 동일([container.go L36-42](../../packages/ttsc/internal/engine/metadata/container.go)).
- **불변식**: 같은 key 문자열을 가진 Property 가 두 개 이상 있으면 버그(Phase 1 merge 에서 합쳐진다).

#### (7) Alias
- `AliasType { Name, Value *Schema, ... }` + `AliasRef`.
- Phase 0 은 alias 대부분을 resolve-through(analyzer 단에서 해체) 하지만 struct 는 typia v12 parity 를 위해 존재([alias.go](../../packages/ttsc/internal/engine/metadata/alias.go)).

#### (8) Native
- 값 struct: `{ Name string; JsDocTags []string; Tags TagMatrix }`. [special.go L7-11](../../packages/ttsc/internal/engine/metadata/special.go).
- `Name` 은 내장 클래스의 심볼 이름(`"Date"`, `"Uint8Array"`, `"Map"`, `"Set"`, `"Blob"`, `"File"`, …). whitelist 는 `analyzer/native.go` 에만 존재, metadata 패키지는 문자열을 그대로 수용.
- **Phase 0 주의**: `Map<K,V>` / `Set<T>` 는 Native 로 기록. Phase 1 에서 `MapRef` / `SetRef` 로 이관(Cycle 2 에서 이미 native whitelist 정정 — [18-phase0-progress-report.md L84](../../wiki/08-tsgo-master-plan/18-phase0-progress-report.md)).

#### (9) Escaped (toJSON 클래스)
- `{ Original *Schema, Returns *Schema }`. [special.go L17-19](../../packages/ttsc/internal/engine/metadata/special.go).
- `Original` 은 클래스 shape, `Returns` 는 `toJSON()` 이 반환하는 primitive Schema.
- Phase 0 에서 `Analyzer.Options.Escape = false` 가 default. 즉, Date 등은 Native 로만 기록되고 Escaped 는 Phase 1 에서 활성화.

#### (10) Function
- `Function { Parameters []*Parameter, Output *Schema, Description *string, Async bool, JsDocTags []string }`.
- `Parameter { Name, Type *Schema, Description *string, Optional bool }`.
- Phase 0 은 function-typed property 를 만나면 skip(support 범위 밖). Phase 2 `functional` 네임스페이스에서 활성화.

#### (11) SetRef (Set<T>)
- `{ Value *Schema, Tags TagMatrix }`. [special.go L40-43](../../packages/ttsc/internal/engine/metadata/special.go).
- Phase 0 은 native 로 대체되어 사용 빈도 거의 0. Phase 1 에서 정식 이관.

#### (12) MapRef (Map<K,V>)
- `{ Key *Schema, Value *Schema, Tags TagMatrix }`.
- Phase 0 미사용. Phase 1 에서 `iterate_metadata_map.ts` 포팅과 동시 활성.

### 3.3 Modifier 비트 규약

- `Any` — TS `any` / `unknown` 둘 다 true. iterate dispatcher 의 첫 분기([iterate_metadata.go L23-26](../../packages/ttsc/internal/engine/analyzer/iterate_metadata.go)).
- `Required` — 필수. `NewSchema()` 는 `Required: true` 로 시작.
- `Optional` — TS `?` 가 붙은 property. union 에 `undefined` 가 있으면 자동으로 true 설정.
- `Nullable` — union 에 `null`.

**불변식**: `IsRequired() == Required && !Optional`. 단순히 `Required` 만 봐서는 안 된다([schema.go L150](../../packages/ttsc/internal/engine/metadata/schema.go)).

### 3.4 Name() 규약 (캐시된 표시 이름)

`Schema.Name()` 은 typia v12 의 `getName` 과 동일한 출력 형식을 반환해야 한다.

- 단일: `"string"`, `"Member"`
- 유니언: `"(string | number | null)"`
- 빈 Schema: `"unknown"`

알고리즘: 채워진 bucket 이름을 모두 수집 → 1 개면 바로 반환, 0 개면 `"unknown"`, 2+ 개면 sort 후 `"(… | …)"` 로 join([name.go L12-95](../../packages/ttsc/internal/engine/metadata/name.go)).

**캐시 정책**: 최초 호출 시 내부 `name` 필드에 저장, 이후 재계산 없음. **Schema 를 변형한 뒤 Name() 을 다시 부르면 이전 값**을 돌려주므로, Schema 구조를 바꾸는 코드는 `s.name = ""` 으로 무효화해야 한다(현재 무효화 호출부 없음 — 모든 변형은 `Name()` 호출 전에 끝남).

### 3.5 Size() / Bucket() 의 의미

- `Size()` — Schema 가 "허용하는 원자 대안 수"의 합. `boolean | "a" | "b"` 는 3. union 크기 계산에 쓰임.
- `Bucket()` — Schema 가 **어떤 종류**의 대안을 가지는지 개수. 같은 boolean 이 여러 번 와도 1. predicate(`IsConstant`, `IsSoleAtomic`)의 기본.
- TS 원본 [MetadataSchema.ts L250-286](../../packages/core/src/schemas/metadata/MetadataSchema.ts) 과 동일 계산([schema.go L80-146](../../packages/ttsc/internal/engine/metadata/schema.go)).

### 3.6 Collection 규약

- 4 개 map(`objects`, `arrays`, `tuples`, `aliases`) + `nextObjectIndex` 정수 + `nameCounts` + `reservedSuffixes`. [collection.go L10-30](../../packages/ttsc/internal/engine/metadata/collection.go).
- `EmplaceX(key, name) → (*XType, fresh bool)`:
  - 존재하는 key 면 기존 pointer + `false`.
  - 새 key 면 새 struct 만들어 저장 + `true`.
  - 반환된 `fresh` 로 호출자는 "처음 방문이므로 내용을 채워야 함" 을 판단.
- **key 규약**: 호출자(`analyzer`)가 정하지만 **structural identity 가 같은 타입은 같은 key** 여야 한다. Analyzer 는 `typeKey(t)` = `"t#" + Type.Id()` 를 사용([type_key.go L11-13](../../packages/ttsc/internal/engine/analyzer/type_key.go)).
- **이름 중복 회피**: `uniqueName(c, base)` 가 `base`, `base.o1`, `base.o2` 식으로 suffix. typia v12 의 `{name}.o{n}` 관례와 일치([collection.go L118-126](../../packages/ttsc/internal/engine/metadata/collection.go)).

### 3.7 식별(identity) 규약

IR 내부에서 "같은 타입" 을 판단하는 세 층.

| 판단 기준 | 용도 | 위치 |
|---|---|---|
| **Pointer equality** (`*ObjectType` 비교) | emitter 의 recursive helper dedup. | [emitter/is.go L59-67](../../packages/ttsc/internal/engine/emitter/is.go) |
| **Collection key** (문자열) | Analyzer 가 같은 타입을 두 번 방문할 때 같은 pointer 로 귀결. | [analyzer/type_key.go L11-13](../../packages/ttsc/internal/engine/analyzer/type_key.go) |
| **Structural name** (`Name()`) | diff 출력, 에러 메시지, 스키마 직렬화. | [metadata/name.go](../../packages/ttsc/internal/engine/metadata/name.go) |

세 층은 항상 일관돼야 한다. **불변식**: 같은 Collection key → 같은 pointer → 같은 Name().

### 3.8 재귀 안전(Recursion guard)

Cycle 4 에서 치명 버그 2 개가 이 부분에서 발견되었다([18-phase0-progress-report.md L93-97](../../wiki/08-tsgo-master-plan/18-phase0-progress-report.md)):

- **Analyzer 측**: `visitingObjects[*Type]` 을 **포인터 키**로 쓰면 tsgo 가 semantic 동일 타입에 distinct 포인터를 줘서 guard 실패 → stack overflow. 해결: `typeKey(t)` 문자열 키로 교체([analyzer.go L66-69](../../packages/ttsc/internal/engine/analyzer/analyzer.go)).
- **Emitter 측**: IR 은 guard 없이 재방문되면 무한 recurse. 해결: `isState { helpers, helperName, visiting }` 로 hoisting. **규약**: IR 자체는 재귀 guard 를 책임지지 않는다. **소비자가 visiting set 을 들고 다녀야 한다**.

**규약**: `Schema` 방문자는 반드시 `map[*ObjectType]bool` 형태의 방문 집합을 상태로 가진다. pointer 동일성이 identity 이므로 map key 로 안전.

---

## 4. Analyzer 규약

### 4.1 Analyzer 상태

[analyzer.go L57-85](../../packages/ttsc/internal/engine/analyzer/analyzer.go):

```go
type Analyzer struct {
    Checker    *shimchecker.Checker
    Options    Options
    Collection *metadata.Collection

    visitingObjects map[string]*metadata.ObjectType
    visitingArrays  map[string]*metadata.ArrayType
    visitingTuples  map[string]*metadata.TupleType
}
```

**규약**:

1. `Analyzer` 는 single transform pass 에 대응. 여러 `typia.*<T>()` 호출을 한 파일에서 처리할 때 **같은 Collection 을 공유**함으로써 type reuse 를 얻는다(호출마다 `New(checker, opts, existingColl)`).
2. 동시 사용 금지(thread-unsafe). §6 참고.
3. `visitingX` 는 **walk 한 번당의 스택** 이다. 하나의 Walk 가 끝나면 모든 key 는 delete 되어야 한다(`defer delete(...)` 로 보장 — [analyzer/iterate_metadata_object.go L60](../../packages/ttsc/internal/engine/analyzer/iterate_metadata_object.go)).

### 4.2 Options

`Options` 는 typia v12 `MetadataFactory.IOptions` 의 subset.

```go
type Options struct {
    Escape   bool // Date/Uint8Array → Escaped 확장. Phase 0 default: false
    Constant bool // literal 값 추출. Phase 0 default: true
    Absorb   bool // 유니언 내 atomic 태그 병합. Phase 0 default: true
}
```

**규약**: Phase 1 에서 `Functional`, `Recursive limit`, `FunctionReturnTypeCheck` 등을 추가할 때 **typia v12 와 동일 이름** 사용. 독자적 옵션 신설 금지(혼동 방지).

### 4.3 Dispatcher 순서

[iterate_metadata.go L20-71](../../packages/ttsc/internal/engine/analyzer/iterate_metadata.go) 는 다음 순서를 강제한다. **순서는 typia v12 [iterate_metadata.ts](../../packages/core/src/factories/internal/metadata/iterate_metadata.ts) 와 semantic 동일**(Phase 0 생략분 제외):

1. `any` / `unknown` 단락 (top type)
2. `null` / `undefined` / `void` / `never` modifier bit
3. Intersection / Union fan-out
4. Constant → Atomic → Tuple → Array → Native → Object

**왜 이 순서인가**:
- Union / Intersection 을 먼저: 합성 타입은 원자로 분해돼야 아래 케이스가 작동.
- Constant 를 Atomic 보다 먼저: tsgo 는 `"hello"` 를 `StringLiteral | String` 둘 다 켜서 반환 → Literal 비트를 가진 건 Constant 로 가야 값을 잃지 않는다([iterate_metadata_atomic.go L23-27](../../packages/ttsc/internal/engine/analyzer/iterate_metadata_atomic.go)의 `flags&TypeFlagsLiteral == 0` 가드).
- Tuple 을 Array 보다 먼저: tuple 은 array 의 특수 케이스 → `IsTupleType` 체크가 먼저 매치.
- Native 를 Object 보다 먼저: Date 등은 ObjectFlag 를 가지므로 Object 로 떨어지기 전에 whitelist 로 가로채야 한다.

**Phase 0 미구현 케이스**(typia v12 에 있고 Go 에 없음): `iterate_metadata_alias`, `iterate_metadata_escape`, `iterate_metadata_coalesce`, `iterate_metadata_function`, `iterate_metadata_template`, `iterate_metadata_map`, `iterate_metadata_set`, `iterate_metadata_native` 의 full whitelist. Phase 1 에서 각각 파일 단위로 추가.

### 4.4 `iterate` 반환 semantic

`iterate(out *Schema, t *Type) bool`:

- `true` = "이 타입은 인식됐다(에러가 있을 수 있어도 캐치됨)".
- `false` = "어떤 케이스도 매치하지 않음 → 상위에서 포기".

**규약**: `false` 를 돌려주는 순간 Walk 는 `(nil, false)` 로 귀결. driver 는 rewrite 를 skip. 이는 typia v12 의 "errors array 에 쌓지만 metadata 는 반환" 과 다른 선택 — **Phase 0 은 단순히 skip**, Phase 1 에서 diagnostic 으로 승격.

### 4.5 Union 처리

[iterate_metadata_union.go L13-28](../../packages/ttsc/internal/engine/analyzer/iterate_metadata_union.go):

- `t.AsUnionType().Types()` 를 순회하며 **같은 `out` Schema 에** 각 member 를 `iterate` 한다.
- dedup 은 `AddAtomic` / `AddConstant` 가 담당.
- **규약**: union 멤버의 modifier 비트(`Nullable`, `Optional`)는 자동으로 OR-in. `null | string` 은 Schema 하나에 `Nullable=true, Atomics=[string]`.

**Phase 0 단순화**: typia v12 의 discriminator 그룹핑(`union_index`, `iterate_metadata_coalesce`)은 Phase 0 에 없다. tsgo 가 이미 `true | false → boolean` 을 widening 해주므로 기본 기능은 작동.

### 4.6 Intersection + Tag 추출

[iterate_metadata_intersection.go L16-45](../../packages/ttsc/internal/engine/analyzer/iterate_metadata_intersection.go):

1. 각 member 를 **개별 Schema** 로 iterate.
2. 결과 Schema 가 "tag shape"(§5.1) 이면 Tag 로 분류, 아니면 regular 로 분류.
3. regular 는 `mergeInto(out, r)` 로 합성.
4. Tag 는 `attachTag(out, tag)` 로 일치하는 bucket 에 첨부.

**규약**: `mergeInto` 는 `Atomics/Constants` 를 dedup 추가하고 `Arrays/Tuples/Objects/Aliases/Natives/Sets/Maps/Functions` 는 append(같은 pointer 중복은 emitter 쪽에서 처리). Modifier 는 union semantic 과 동일하게 OR. [iterate_metadata_union.go L34-64](../../packages/ttsc/internal/engine/analyzer/iterate_metadata_union.go).

**Phase 0 범위 외**: typia v12 의 tag 호환성 검사(`MetadataTagFactory.validate`)는 Phase 1. 현재는 attach 만.

### 4.7 Object 방문 + 재귀 등록

[iterate_metadata_object.go L15-62](../../packages/ttsc/internal/engine/analyzer/iterate_metadata_object.go):

```
1. key = typeKey(t)
2. 이미 visiting[key] → ObjectRef{Type: existing} 붙이고 종료 (back-edge)
3. Collection.EmplaceObject(key, name) → (obj, fresh)
4. visiting[key] = obj  (등록을 "채우기 시작 전"에)
5. fresh 이면:
     for sym in getPropertiesOfType(checker, t):
         propType = getTypeOfSymbol(sym)
         valueSchema = Walk(propType)
         keySchema = NewSchema().AddConstant(String, sym.Name)
         Properties = append(..., {keySchema, valueSchema})
6. out.Objects += ObjectRef{Type: obj}
7. delete(visiting, key)
```

**불변식**:
- 4번(visiting 등록)이 5번(자식 Walk)보다 **먼저** 일어나야 self-recursive 타입이 back-edge 로 귀결.
- `fresh == false` 면 Properties 는 건드리지 않는다 (다른 call site 가 이미 채우는 중).
- `sym == nil || propType == nil` 은 skip(견고성).

**Optional property 처리**: `sym.Flags & SymbolFlagsOptional != 0` 이면 `valueSchema.Optional = true; valueSchema.Required = false`. TS의 `?:` 와 직접 대응.

### 4.8 Array / Tuple 방문

Object 와 같은 패턴을 Array/Tuple 에 적용. **규약**: 3 종류 모두 동일한 visiting 프로토콜을 쓴다 — `typeKey` 로 key, `Emplace` 로 register, `defer delete`. 코드 구조가 의도적으로 유사해야 유지보수가 쉽다.

### 4.9 typeKey / typeName

[type_key.go L11-22](../../packages/ttsc/internal/engine/analyzer/type_key.go):

```go
func typeKey(t *shimchecker.Type) string {
    return "t#" + intToString(int64(t.Id()))
}
```

- **규약**: Type.Id() 는 typescript-go 내부에서 structural identity 를 보장(public 스펙은 아니지만 observed invariant). `strconv.FormatInt` 대신 local `intToString` 사용 — §6.4.
- **가정**(측정 없음): Type.Id() 는 reproducible 하고 collision 확률 무시 가능. Phase 1 에서 tsgo 리그레션이 있을 경우 `name.go` 기반 key 로 fallback 할 수 있도록 인터페이스 분리 고려.
- `typeName` 은 `shimTypeString` → symbol name → `"Type#<id>"` fallback. typia v12 의 `TypeFactory.getFullName` 와 다른 점: tsgo 가 `typeToString` 을 public 로 내보내지 않아 shim 확장이 필요([shim_type_string.go L13-21](../../packages/ttsc/internal/engine/analyzer/shim_type_string.go)). Phase 1 에서 gen_shims ExtraMethods 로 full name 노출 예정.

### 4.10 Native whitelist

[native.go L20-31](../../packages/ttsc/internal/engine/analyzer/native.go) 는 26 개 심볼을 매치:

```
Date, Boolean, Number, String,
Uint8Array, Uint8ClampedArray, Uint16Array, Uint32Array,
Int8Array, Int16Array, Int32Array,
Float32Array, Float64Array, BigInt64Array, BigUint64Array,
ArrayBuffer, SharedArrayBuffer, DataView,
Blob, File, RegExp,
WeakMap, WeakSet, Map, Set
```

**규약**: whitelist 는 typia v12 `iterate_metadata_native.ts` 의 SIMPLES+GENERICS + Boolean/Number/String wrapper 와 **정확히** 일치해야 한다. Cycle 2 에서 `Buffer/URL/URLSearchParams/Error/Promise` 를 제거하고 `Blob/File/Uint8ClampedArray/Boolean/Number/String` 을 추가한 이력([18-phase0-progress-report.md L82-83](../../wiki/08-tsgo-master-plan/18-phase0-progress-report.md)).

### 4.11 Tag 추출 (extractTag)

[analyzer/tag.go L13-78](../../packages/ttsc/internal/engine/analyzer/tag.go) 는 typia 브랜드 타입 shape 을 인식:

```ts
{ "typia.tag"?: { target, kind, value, validate?, exclusive?, schema? } }
```

**규약**:
- Schema 가 **objects 1 개, 해당 object 의 properties 1 개**, key 가 `"typia.tag"` literal 이면 tag 후보.
- 그 value 의 **objects 1 개**의 property 들을 `target`/`kind`/`value`/`validate`/`exclusive` 로 매핑.
- `exclusive` 는 `boolean | string[]` 타입이라 둘 다 파싱해야 한다. Cycle 2 에서 발견된 버그([18-phase0-progress-report.md L84](../../wiki/08-tsgo-master-plan/18-phase0-progress-report.md)): tsgo 가 boolean literal 을 `Atomics=[boolean]` 로 widening 하므로 `Constants` 만 검사하면 miss. 수정 코드는 둘 다 체크.
- `kind == ""` 는 invalid tag → `(TypeTag{}, false)` 반환.

**한계**: 현재 추출 규약은 typia v12 가 쓰는 `packages/core/src/factories/internal/metadata/MetadataTagFactory.ts` 의 `read` 보다 단순. Phase 1 에서 `schema` 속성 추출(JSON Schema merge 용) 추가.

---

## 5. Tag 시스템 규약

### 5.1 21 tag types 과 TagMatrix

[packages/interface/src/tags/index.ts](../../packages/interface/src/tags/index.ts) 의 21 개 export — **실측**, [13-appendix-facts.md L24](../../wiki/08-tsgo-master-plan/13-appendix-facts.md):

```
Constant, ContentMediaType, Default, Example, Examples,
ExclusiveMaximum, ExclusiveMinimum, Format, JsonSchemaPlugin,
MaxItems, MaxLength, Maximum, MinItems, MinLength, Minimum,
MultipleOf, Pattern, Sequence, TagBase, Type, UniqueItems
```

(20 tag types + `TagBase` 자체)

**IR 저장 형식** — `TagMatrix` = `[][]TypeTag` (product-of-sums):

- **inner slice** = 한 "conjunction row"(AND). 예: `string & MinLength<3> & MaxLength<10>` → `[{MinLength, MaxLength}]` (inner len 2, outer len 1).
- **outer slice** = "disjunction of rows"(OR). 예: `Format<"email"> | Format<"uuid">` → `[[{Format:email}], [{Format:uuid}]]`.

[metadata/tag.go L18](../../packages/ttsc/internal/engine/metadata/tag.go).

### 5.2 TypeTag struct

```go
type TypeTag struct {
    Target    string // "string" | "number" | "bigint" | "boolean" | "array" | "object"
    Name      string // Schema Name() 로부터 파생 (debug 용)
    Kind      string // "format" | "minimum" | "maxLength" | ...
    Value     any    // literal value (string, number, bigint, bool)
    Validate  string // optional template e.g. "$input.length <= 10"
    Exclusive any    // bool or []string
    Schema    any    // extra JSON schema merge target (Phase 1)
}
```

**규약**:
- `Target` 은 TagBase.IProps.target 과 정확히 일치하는 6 종 문자열. 그 외 값은 reject.
- `Kind` 가 비어 있으면 invalid.
- `Value` 는 any 지만 Phase 1 에서 Kind 별로 validated runtime-typed 접근자(`NumericValue() (float64, bool)`, `StringValue() (string, bool)`) 를 추가 검토.

### 5.3 exclusive 와 tag 호환성

typia v12 는 `Minimum` + `ExclusiveMinimum` 를 동시 적용 금지. Phase 0 Analyzer 는 이 체크를 **하지 않는다** — 통과시킨 채 emitter 가 받아 처리. Phase 1 에서 `MetadataTagFactory.validate` 포팅 필요.

**가정**(측정 없음): Phase 0 fixture 에서 exclusive 위반은 발생하지 않음(사용자 실수 없다고 가정). 운영 배포 전 반드시 체크 추가.

### 5.4 numeric range 전파

`Maximum<100>` 같은 generic 인자가 AST 에 리터럴로 박혀 타입 시스템을 통해 전달된다. typia v12 는 `packages/interface/src/tags/Maximum.ts` 의 `validate` 템플릿(`"$input <= ${Value}"`) 에 이미 값이 합성된 형태로 IR 에 들어온다.

**규약**: Analyzer 는 `validate` 문자열을 그대로 보존. emitter 가 `$input` → actual value expression 치환([emitter/tags.go L127-136](../../packages/ttsc/internal/engine/emitter/tags.go)). 이 경계가 IR → emitter 계약의 핵심 부분.

**특례**: `$importInternal("...")(…)` 패턴은 runtime helper import 가 필요한데 emit 에 포함되지 않으므로 현재는 skip([emitter/tags.go L132](../../packages/ttsc/internal/engine/emitter/tags.go)). Phase 1 에서 helper inject 설계 필요.

### 5.5 attachTag 대상 분배

[analyzer/tag.go L83-109](../../packages/ttsc/internal/engine/analyzer/tag.go):

| Target | 첨부 대상 bucket |
|---|---|
| `"string"` / `"number"` / `"bigint"` / `"boolean"` | 같은 kind 의 `Atomic` OR 해당 kind 의 `Constant` 의 각 `Value` |
| `"array"` | 모든 `ArrayRef` |
| `"object"` | 모든 `ObjectRef` |

**규약**: `appendTagRow` 는 tag matrix 의 **마지막 row 에 append**. 빈 matrix 면 새 row 생성. intersection 은 AND 이므로 같은 row 에 쌓인다([analyzer/tag.go L113-120](../../packages/ttsc/internal/engine/analyzer/tag.go)).

---

## 6. 성능·캐싱 규약

### 6.1 allocation 최소화

- `make([]X, 0, n)` 로 capacity hint. Object property 순회([iterate_metadata_object.go L32](../../packages/ttsc/internal/engine/analyzer/iterate_metadata_object.go)), tuple element 수집([iterate_metadata_tuple.go L23](../../packages/ttsc/internal/engine/analyzer/iterate_metadata_tuple.go)) 등에서 이미 준수.
- Schema 는 zero-value 상태가 의미 있는 상태. `NewSchema()` 는 `Required=true` 만 설정 — 배열 필드는 nil slice 유지(필요할 때 append).
- **가정**(측정 없음): typia v12 TS 코드는 `[]` 로 시작하는 반면 Go 는 nil slice 시작이 더 저렴. semantic 차이 없음(len(nil) == 0, range nil 무동작, append(nil, x) 동작).

### 6.2 string building

- `name.go` 의 `computeName` 은 `make([]string, 0, Size()+2)` 로 예약 후 `strings.Join`. fmt.Sprintf 회피.
- `jslit.go` 의 `intString` 은 `strconv` 대신 local base-10 — **이유는 성능이 아니라 의존 surface 예측 가능성**(§6.4). 수치는 Phase 1 에서 `BenchmarkIntString` 으로 측정 후 strconv 가 빠르면 교체.

### 6.3 thread-safety

- `metadata.Schema` — **write 중엔 shared 금지**. 읽기 전용 inspector(Name/Size/Bucket)는 최초 캐시 계산 이후 race-free, 이전에는 아니다(`name` 필드 race).
- `metadata.Collection` — **thread-unsafe**. 단일 Analyzer 인스턴스에 귀속.
- `analyzer.Analyzer` — **thread-unsafe**. Phase 0 은 파일 단위 순차 처리로 충분.
- **가정**: Phase 1 에서 파일 병렬 처리가 필요해지면 Analyzer 를 file 당 하나씩 만들고 Collection 도 분리한다. 결과 머지는 `metadata.MetadataSchema.merge` 포팅 후 post-process.

### 6.4 의존 surface 관리

- `metadata/` 패키지: **stdlib 만**(`sort`, `strings`, `strconv` 중 `strconv` 는 `format.go` 의 `floatFormatG` 만 사용 — 딱 한 곳에 국한해서 "정말 stdlib 가 필요한 자리" 를 가시화).
- `jslit.go` 의 `intString` 은 `strconv` 미사용 — `name.go` 의 literalName 이 "문자열 조합만 하는 공간" 이라 stdlib 의존을 0 으로 유지(의도적).
- `analyzer/` 패키지: `shim/checker`, `shim/ast` 만. 다른 shim import 시 반드시 PR 코멘트로 이유 명시.

### 6.5 Name() 캐싱 주의

`Schema.name` 은 **첫 호출 시 계산 후 보존**. Schema 구조 변형 후 재호출하면 stale 값 반환.

**규약**: Schema 를 변형하는 코드는 `s.name = ""` 으로 invalidate 해야 한다. 현재 변형은 모두 analyzer 빌드 중(`Name()` 호출 전) 이므로 실제 발생 없지만, Phase 1 post-process pass 가 merge/covers 를 돌릴 때 반드시 check([schema.go L197-203](../../packages/ttsc/internal/engine/metadata/schema.go)).

### 6.6 Collection pointer 식별 보존

같은 `ObjectType` 을 여러 유니언 멤버가 참조할 때, 모든 `ObjectRef.Type` 은 **정확히 같은 pointer**. 이 invariant 가 깨지면 emitter 의 recursive helper dedup 이 실패하고 emit 이 O(types²) 로 폭발.

**규약**: Collection 을 통하지 않고 `&ObjectType{...}` 리터럴로 생성 금지. 오직 `Emplace*` 만.

---

## 7. 코드 근거 (실제 파일:라인)

본 규약이 근거한 실제 Go 코드(2026-04-19 스냅샷).

### 7.1 IR 파일 (`engine/metadata/`, 총 845 LOC)

- `metadata.go` (28 LOC) — [full file](../../packages/ttsc/internal/engine/metadata/metadata.go) — package doc. 원칙 "1 파일 1 개념" 을 위해 실제 struct 는 다른 파일.
- `schema.go` (203 LOC) — [L10-34](../../packages/ttsc/internal/engine/metadata/schema.go) Schema struct / [L43-75](../../packages/ttsc/internal/engine/metadata/schema.go) AddAtomic/AddConstant / [L80-146](../../packages/ttsc/internal/engine/metadata/schema.go) Size/Bucket / [L168-193](../../packages/ttsc/internal/engine/metadata/schema.go) IsSoleAtomic/GetSoleLiteral.
- `atomic.go` (49 LOC) — [L4-11](../../packages/ttsc/internal/engine/metadata/atomic.go) AtomicKind 4 종.
- `container.go` (60 LOC) — [L4-17](../../packages/ttsc/internal/engine/metadata/container.go) ArrayType/Ref / [L20-32](../../packages/ttsc/internal/engine/metadata/container.go) TupleType/Ref / [L37-60](../../packages/ttsc/internal/engine/metadata/container.go) Property/ObjectType/ObjectRef.
- `alias.go` (20 LOC) — [full file](../../packages/ttsc/internal/engine/metadata/alias.go).
- `special.go` (50 LOC) — [L7-11](../../packages/ttsc/internal/engine/metadata/special.go) Native / [L17-19](../../packages/ttsc/internal/engine/metadata/special.go) Escaped / [L22-27](../../packages/ttsc/internal/engine/metadata/special.go) Parameter / [L31-37](../../packages/ttsc/internal/engine/metadata/special.go) Function / [L40-49](../../packages/ttsc/internal/engine/metadata/special.go) SetRef/MapRef.
- `tag.go` (33 LOC) — [L5-13](../../packages/ttsc/internal/engine/metadata/tag.go) TypeTag / [L18](../../packages/ttsc/internal/engine/metadata/tag.go) TagMatrix / [L22-33](../../packages/ttsc/internal/engine/metadata/tag.go) Clone.
- `collection.go` (126 LOC) — [L22-31](../../packages/ttsc/internal/engine/metadata/collection.go) NewCollection / [L72-114](../../packages/ttsc/internal/engine/metadata/collection.go) Emplace\* / [L118-126](../../packages/ttsc/internal/engine/metadata/collection.go) uniqueName.
- `name.go` (104 LOC) — [L12-95](../../packages/ttsc/internal/engine/metadata/name.go) computeName / [L99-104](../../packages/ttsc/internal/engine/metadata/name.go) safeName.
- `jslit.go` (63 LOC) — [L5-15](../../packages/ttsc/internal/engine/metadata/jslit.go) literalName / [L19-39](../../packages/ttsc/internal/engine/metadata/jslit.go) jsString / [L43-63](../../packages/ttsc/internal/engine/metadata/jslit.go) intString.
- `format.go` (9 LOC) — [full file](../../packages/ttsc/internal/engine/metadata/format.go) — floatFormatG.

### 7.2 Analyzer 파일 (`engine/analyzer/`, 총 641 LOC non-test)

- `analyzer.go` (105 LOC) — [L38-48](../../packages/ttsc/internal/engine/analyzer/analyzer.go) Options / [L52](../../packages/ttsc/internal/engine/analyzer/analyzer.go) DefaultOptions / [L57-69](../../packages/ttsc/internal/engine/analyzer/analyzer.go) Analyzer struct / [L73-85](../../packages/ttsc/internal/engine/analyzer/analyzer.go) New / [L90-105](../../packages/ttsc/internal/engine/analyzer/analyzer.go) Walk / FromType.
- `iterate_metadata.go` (71 LOC) — [L20-71](../../packages/ttsc/internal/engine/analyzer/iterate_metadata.go) dispatcher.
- `iterate_metadata_atomic.go` (30 LOC) — [L12-30](../../packages/ttsc/internal/engine/analyzer/iterate_metadata_atomic.go) 4 primitive mapping.
- `iterate_metadata_constant.go` (46 LOC) — [L13-36](../../packages/ttsc/internal/engine/analyzer/iterate_metadata_constant.go) 4 literal flag / [L40-46](../../packages/ttsc/internal/engine/analyzer/iterate_metadata_constant.go) literalValue.
- `iterate_metadata_union.go` (64 LOC) — [L13-28](../../packages/ttsc/internal/engine/analyzer/iterate_metadata_union.go) iterateUnion / [L34-64](../../packages/ttsc/internal/engine/analyzer/iterate_metadata_union.go) mergeInto.
- `iterate_metadata_intersection.go` (45 LOC) — [L16-45](../../packages/ttsc/internal/engine/analyzer/iterate_metadata_intersection.go) split tags vs regulars, merge + attach.
- `iterate_metadata_object.go` (62 LOC) — [L15-62](../../packages/ttsc/internal/engine/analyzer/iterate_metadata_object.go) visit + Emplace + back-edge.
- `iterate_metadata_array.go` (47 LOC) — [L11-33](../../packages/ttsc/internal/engine/analyzer/iterate_metadata_array.go) iterateArray / [L41-47](../../packages/ttsc/internal/engine/analyzer/iterate_metadata_array.go) arrayElement.
- `iterate_metadata_tuple.go` (36 LOC) — [L12-36](../../packages/ttsc/internal/engine/analyzer/iterate_metadata_tuple.go) iterateTuple.
- `native.go` (33 LOC) — [L12-33](../../packages/ttsc/internal/engine/analyzer/native.go) whitelist 26 종.
- `tag.go` (120 LOC) — [L13-78](../../packages/ttsc/internal/engine/analyzer/tag.go) extractTag / [L83-109](../../packages/ttsc/internal/engine/analyzer/tag.go) attachTag / [L113-120](../../packages/ttsc/internal/engine/analyzer/tag.go) appendTagRow.
- `type_key.go` (47 LOC) — [L11-13](../../packages/ttsc/internal/engine/analyzer/type_key.go) typeKey / [L17-22](../../packages/ttsc/internal/engine/analyzer/type_key.go) typeName / [L27-47](../../packages/ttsc/internal/engine/analyzer/type_key.go) intToString.
- `shim_type_string.go` (21 LOC) — [L13-21](../../packages/ttsc/internal/engine/analyzer/shim_type_string.go) fallback display.

### 7.3 IR → emitter 경계 (본 규약의 outbound interface)

- `emitter/is.go` [L28-52](../../packages/ttsc/internal/engine/emitter/is.go) — `EmitIs(valueExpr string, schema *metadata.Schema) (string, error)` 가 IR consumer entry.
- `emitter/is.go` [L265-295](../../packages/ttsc/internal/engine/emitter/is.go) — 재귀 helper hoisting(§3.8). `isState.visiting[*ObjectType]` 가 pointer 식별을 요구하는 지점.
- `emitter/tags.go` [L23-78](../../packages/ttsc/internal/engine/emitter/tags.go) — `tagCheck(ve, TypeTag) string` 이 Tag consumer entry. IR → emitter 경계에서 Tag 는 **수정되지 않는다**(read-only).

### 7.4 원본 TS 참고

- [packages/core/src/schemas/metadata/MetadataSchema.ts](../../packages/core/src/schemas/metadata/MetadataSchema.ts) (702 LOC, merge/covers/intersects 포함) — Go 포팅은 Phase 0 에 Schema 기본 구조 + Size/Bucket + isSoleAtomic 만. merge/covers/intersects 는 Phase 1.
- [packages/core/src/schemas/metadata/MetadataCollection.ts](../../packages/core/src/schemas/metadata/MetadataCollection.ts) — Go `collection.go` 의 포팅 원본. recursive index 추적은 Phase 1.
- [packages/core/src/factories/MetadataFactory.ts](../../packages/core/src/factories/MetadataFactory.ts) — Go `analyzer.go` 의 원본. IOptions/Validator/IExplore 인터페이스는 Phase 1 에서 정식 포팅.
- [packages/core/src/factories/internal/metadata/iterate_metadata.ts](../../packages/core/src/factories/internal/metadata/iterate_metadata.ts) — dispatcher 원본. Phase 0 은 8/13 케이스 구현, 5 케이스(alias/escape/coalesce/function/template/map/set) 미구현.
- [packages/interface/src/tags/TagBase.ts](../../packages/interface/src/tags/TagBase.ts) — TypeTag 6 필드의 원본 정의.
- [packages/interface/src/tags/Format.ts](../../packages/interface/src/tags/Format.ts) — Format<Value> value 22 종.

---

## 8. 안티패턴 (해선 안 되는 것들)

### 8.1 ❌ 인터페이스로 Schema bucket 추상화하기

**잘못**:
```go
type SchemaMember interface { Kind() string }
type atomicMember struct { ... }
// ...
type Schema struct { Members []SchemaMember }
```

**이유**: JSON serialisation 망가지고, 디버거가 쓸모없어지고, bucket 별 dedup/merge 구현 복잡도가 폭발한다. typia v12 의 12 bucket 구조는 의도된 설계 — 직접 비교 가능한 구체 struct 12 개.

### 8.2 ❌ Collection 우회해서 `&ObjectType{...}` 만들기

**잘못**:
```go
obj := &metadata.ObjectType{Name: "User", Properties: []...}
out.Objects = append(out.Objects, &metadata.ObjectRef{Type: obj})
```

**결과**: 같은 TS 타입을 두 번 만나면 두 개의 distinct pointer 가 생성되어 emitter recursive dedup 이 실패한다. 반드시 `Collection.EmplaceObject(key, name)`.

### 8.3 ❌ `visitingObjects[*shimchecker.Type]` — pointer 를 map key 로

Cycle 4 에서 발견된 치명 버그([18-phase0-progress-report.md L94-95](../../wiki/08-tsgo-master-plan/18-phase0-progress-report.md)). tsgo 는 같은 semantic 타입에 distinct pointer 를 줄 수 있어 재귀 guard 가 실패한다. **반드시 `typeKey(t)` 문자열 키**.

### 8.4 ❌ Dispatcher 분기를 typia v12 와 다른 순서로 배치

**잘못**: Object 를 Native 보다 먼저 체크 → Date 가 Object 로 분류되어 instanceof 검증이 아닌 structural walk 로 떨어짐.

**규약**: §4.3 의 순서를 임의로 변경 금지. 새 케이스는 반드시 typia v12 [iterate_metadata.ts](../../packages/core/src/factories/internal/metadata/iterate_metadata.ts) 의 동일 위치에 삽입.

### 8.5 ❌ fmt.Errorf 없이 panic

**잘못**: Analyzer 에서 모르는 타입 만나면 `panic("unsupported")`.

**규약**: 분석 실패는 `(nil, false)` 반환. panic 은 IR invariant 위반 전용(`AddAtomic("object")` 같은 프로그래머 오류).

### 8.6 ❌ Schema 변형 후 Name() 재호출

`Schema.name` 은 캐시. 변형 후 `Name()` 은 stale 값을 준다. 변형할 일이 생기면 `s.name = ""`.

### 8.7 ❌ Atomic Value 를 `float64` 로 고정

typia `Constant` value 는 `string | number | bigint | boolean`. 4 타입 모두 저장 가능해야 하므로 `any` 필수. Phase 1 에서 discriminated struct 로 승격하더라도 타입 손실 없도록 정의.

### 8.8 ❌ exclusive 를 bool 로만 파싱

typia v12 의 `exclusive: boolean | string[]` — 둘 다 지원 필요. Cycle 2 에서 수정된 버그([18-phase0-progress-report.md L84](../../wiki/08-tsgo-master-plan/18-phase0-progress-report.md)): tsgo 가 boolean literal 을 Atomic 으로 widening 하므로 Constants 만 보면 miss. [analyzer/tag.go L63-71](../../packages/ttsc/internal/engine/analyzer/tag.go) 의 2-way check 패턴 필수.

### 8.9 ❌ Collection 을 전역 싱글톤으로

thread-safety 전혀 없으므로 파일마다 새로 만들거나 Analyzer 하나에 귀속. 전역 `var defaultCollection = NewCollection()` 는 금지.

### 8.10 ❌ TagMatrix 를 flat slice 로 평면화

`[]TypeTag` 로 쓰면 product-of-sums semantic 을 잃는다. AND/OR 이 필요한 intersection + union 조합이 무너짐. **반드시 `[][]TypeTag`**.

---

## 9. 검증 체크리스트

PR 마다 아래 항목을 확인한다(Cycle 2/3 리뷰어는 이 목록을 기준으로 지적).

### 9.1 파일 구조

- [ ] 새 concept 은 `metadata/{concept}.go` 또는 `analyzer/iterate_metadata_{concept}.go` 에 분리
- [ ] 파일명이 typia v12 원본과 1:1 매칭(불가피하게 다르면 파일 헤더 코멘트로 설명)
- [ ] 한 파일 ≤ 250 LOC(Phase 0 Cycle D 기준; 새 케이스 포팅 시 초과하면 재분해)

### 9.2 IR 불변식

- [ ] `Atomic` kind 는 4 종 중 하나 (`AtomicKind.IsValid()` true)
- [ ] 같은 Schema 내 동일 Atomic kind 가 두 번 나타나지 않음 (`AddAtomic` 경유 필수)
- [ ] 같은 kind 의 Constant 가 Schema 내 최대 1 개
- [ ] 재귀 타입의 `ObjectType` / `ArrayType` / `TupleType` 포인터가 모든 Ref 에서 동일
- [ ] `Escaped.Original` / `Escaped.Returns` 가 nil 이 아님(Escaped 자체가 non-nil 일 때)
- [ ] `Name() == "unknown"` 가 아닌 케이스에서 Schema 가 실제로 비지 않음(`Empty() == false`)

### 9.3 Collection

- [ ] 신규 Object/Array/Tuple/Alias 는 오직 `Emplace*` 로만 생성
- [ ] `EmplaceX` 의 두 번째 반환값(`fresh`)을 반드시 체크 — `true` 일 때만 내용 채움
- [ ] `uniqueName` 이 `base.o1`, `base.o2` 패턴 유지(typia v12 호환)

### 9.4 Analyzer

- [ ] `iterate` 의 분기 순서가 §4.3 과 동일
- [ ] visiting map 의 key 가 `typeKey(t)` (포인터 key 금지)
- [ ] visiting 등록이 **자식 Walk 전**에 이뤄짐 (self-recursive 지원)
- [ ] `defer delete(visiting, key)` 누락 없음
- [ ] Walk 실패 시 `(nil, false)`. panic 없음.

### 9.5 Tag

- [ ] extractTag 가 `target` 6 종("string", "number", "bigint", "boolean", "array", "object") 만 수용
- [ ] `exclusive` 는 Constants 와 Atomics 둘 다 체크
- [ ] `attachTag` 가 kind 와 일치하는 bucket 에만 붙임
- [ ] TagMatrix 구조(AND row / OR matrix) 보존

### 9.6 의존성

- [ ] `metadata/` 패키지 import: `sort`, `strings`, `strconv` 만
- [ ] `analyzer/` 패키지 import: 위 + `shim/checker`, `shim/ast`, `metadata/` 만
- [ ] 외부 모듈(`github.com/...`) 추가 시 PR 설명에 이유 명시

### 9.7 테스트

- [ ] 새 케이스 추가 시 `metadata_test.go` / `analyzer_test.go` 에 단위 테스트 추가
- [ ] `go test ./internal/engine/...` PASS
- [ ] TS fixture 통합(E 역할 영역) — `npm test` 21/21 유지

### 9.8 문서

- [ ] 원본 TS 파일 경로를 doc comment 에 명시 (예: [`iterate_metadata_object.go` L10-14](../../packages/ttsc/internal/engine/analyzer/iterate_metadata_object.go))
- [ ] Phase 0 vs Phase 1 범위 구분이 명확
- [ ] 가정·추정은 "가정:" 접두

---

## 10. 미해결 질문 (Cycle 2 교차 리뷰에 회부)

### Q-B1. Schema value union 을 언제까지 `any` 로?

현재 `ConstantValue.Value any` 는 `string | number | bigint | boolean` 를 모두 수용하기 위한 선택. JSON serialisation 은 문제없지만 type assertion 이 매 호출마다 필요(`v.(string)`, `v.(float64)`, …). Phase 1 에서:

```go
type ConstantValue struct {
    Str   *string
    Num   *float64
    Big   *big.Int
    Bool  *bool
    Tags  TagMatrix
}
```

식 discriminated struct 로 갈지, 아니면 Go 1.26+ generics 로 `Value[T ValueKind]` 를 만들지 — 결정 필요. **교차 리뷰에서 C(emitter) 의 의견 필수** (emitter 가 이 값을 최종 소비).

### Q-B2. tsgo Type.Id() 의 안정성

현재 `typeKey` 는 Type.Id() 에 의존. tsgo 문서상 "internal" 필드. **가정**: 한 Checker 인스턴스 내에서 같은 TS 타입은 같은 Id. 다른 인스턴스 사이는 무관. Phase 1 에서:

- (a) 여러 파일이 같은 TS Type 을 공유할 때 같은 Id 가 보장되나?
- (b) tsgo major 버전이 바뀔 때 invariant 가 유지되나?

→ tsgo 소스 조사 + 실험 필요. F(release DX) 와 함께 tsgo pin 정책 논의.

### Q-B3. Phase 1 에서 MetadataSchema.merge / covers / intersects 포팅 범위

typia v12 [MetadataSchema.ts L357-628](../../packages/core/src/schemas/metadata/MetadataSchema.ts) 의 3 개 namespace 함수:

- `intersects(x, y)` — 두 Schema 의 교집합 비어있지 않은가
- `covers(x, y)` — x 가 y 를 subtype-cover 하나
- `merge(x, y)` — 유니언 결합

Phase 0 은 모두 미포팅. `mergeInto` 는 단순화된 대체품. **질문**: Phase 1 에 포팅 필요한가? 어떤 Programmer 가 요구하는지 C(emitter) 가 답해야 할 부분.

### Q-B4. Collection 전역 공유 vs 파일별

현재 Phase 0 driver 는 Analyzer 인스턴스마다 Collection 을 새로 만드는 경로와, 기존 Collection 을 reuse 하는 경로 둘 다 지원. 실제 사용 패턴은?

- **파일별**: 간단, race 없음, 하지만 cross-file type sharing 없음.
- **프로그램별**: type reuse 효율, 하지만 병렬 처리와 충돌.

→ C(driver) 가 현재 어느 쪽으로 호출하는지 확인 후 규약 고정.

### Q-B5. Template literal type 지원 시기

typia 의 `` `user-${number}` `` 같은 템플릿 리터럴 타입은 Phase 0 에서 `Template` struct 는 있으나 분석기가 감지하지 않음. 실제 typia 사용자 중 빈도? → E(testing) 가 fixture 통계를 제공해야 답 가능.

### Q-B6. `Alias` vs resolve-through

Phase 0 은 alias 를 대부분 해체. 하지만 typia JSDoc 주석·이름 보존을 위해 일부 alias 는 유지하는 게 정석(예: `type UserId = string & Format<"uuid">` 의 `UserId` 이름을 json schema 에 노출). Phase 1 에서:

- **규약 A**: alias 는 항상 해체, JSDoc 만 별도 dictionary 에 저장
- **규약 B**: typia v12 처럼 alias 포인터 유지, Name() 에 alias 이름 반영

→ D(TS facade) + C(emitter) 와 합의 필요.

### Q-B7. parentResolved 플래그의 쓸모

`schema.go` 의 `parentResolved bool` 는 현재 nolint 로 묶인 dead field. typia v12 는 `explore_metadata` 에서 this.parent_resolved_ 를 활용(recursive 탐지 시 한 번 "부모 resolve 됨" 마킹 후 건너뜀). Phase 1 에서 정말 필요한가, 아니면 Go 의 Collection pointer identity 만으로 충분한가? 결정 후 필드 제거 or 활성화.

### Q-B8. Tag 유효성 검증 (exclusive 충돌) 시기

§5.3 에 적힌 대로 Phase 0 은 tag 호환성 검증 없음. 언제 포팅? `MetadataTagFactory.validate` 는 typia v12 에서 500+ LOC. Phase 1 에 통째로 올리면 그 안의 subroutine 호출이 연쇄 포팅을 요구. → A(경계설계) / C(emitter) 와 우선순위 논의.

### Q-B9. 성능 측정 기준

§6 의 "가정" 항목들은 실측 없이 작성됨. Phase 1 에서 benchmark 기준을 세워야:

- 현실 프로젝트의 평균 타입 복잡도(property 개수, 중첩 깊이)
- Analyzer 의 per-type 평균 allocation 수
- Schema.Name() 캐시 hit ratio

→ E(testing) + F(release) 가 측정 infrastructure 제공해야 본 규약을 정량화할 수 있다.

### Q-B10. Go 버전 floor (1.26 vs 1.27)

현재 `go.mod` 는 Go 1.26([go.mod L3](../../packages/ttsc/go.mod)). tsgolint 도 1.26. Go 1.27 이 2026 중반 릴리스되면 `//go:linkname` 제약이 더 엄격해짐([13-appendix-facts.md L118-120](../../wiki/08-tsgo-master-plan/13-appendix-facts.md)). 엔진 코드 자체는 linkname 을 쓰지 않지만 shim 이 의존. Phase 1 에서 1.27 upgrade 시 엔진 API 영향 없는지 체크리스트 추가.

---

## 부록 A. Phase 1~2 에서 추가될 규약 (선언적 TODO)

현재 규약은 Phase 0 의 실구현 기반. 아래는 Phase 1 이상에서 이 문서에 합류할 항목.

| 항목 | 예상 분류 |
|---|---|
| `MetadataFactory.merge/covers/intersects` 포팅 | §3.9 (신설) |
| `iterate_metadata_alias` + alias dictionary | §4.12 |
| `iterate_metadata_escape` (toJSON 클래스) | §4.13 |
| `iterate_metadata_function` | §4.14 |
| `iterate_metadata_map` / `iterate_metadata_set` | §4.15 |
| `iterate_metadata_template` + 패턴 합성 | §4.16 |
| `iterate_metadata_coalesce` (union dedup) | §4.17 |
| `MetadataTagFactory.validate` (exclusive / target 검증) | §5.6 |
| Diagnostic 구조체 + errors accumulator | §2.2 확장 |
| Analyzer 병렬화 (파일별 Collection) | §6.3 확장 |
| Name() 캐시 invalidate hook | §6.5 확장 |
| Descriptor / JSDoc 보존 (description, jsDocTags) | §3.11 |

이 TODO 가 실제 Cycle 2/3 에서 어느 범위까지 들어갈지는 A(경계) / C(driver) 와 순서 합의 필요.

---

## 부록 B. 결정 기록 (Why-this-choice)

### B.1 왜 `Schema` 를 sum-type interface 가 아닌 bucket struct 로?

TS `MetadataSchema` 가 이미 bucket struct. Go 에서 interface 로 재설계하면:
- JSON 직렬화 복잡도 증가
- 디버거에서 concrete type 확인 어려움
- bucket 별 merge / dedup 구현 증가

bucket struct 는 Go 의 zero-value semantic 과도 잘 맞는다(빈 slice = 빈 bucket).

### B.2 왜 Collection key 가 문자열?

pointer key 는 §8.3 의 이유로 실패. `Type.Id()` 를 그대로 int 로 쓰면 Analyzer 외부(serialisation, debug)에서 의미 파악 어려움. `"t#42"` 형태는 검색 가능하고 typia v12 의 ` name.o1` 관례와도 조화.

### B.3 왜 `jslit.go` 의 `intString` 이 stdlib strconv 가 아닌 손구현?

`metadata/` 패키지의 import 를 최소로 유지하려는 원칙(§6.4). 퍼포먼스 이유 아님. Phase 1 benchmark 후 strconv 가 빠르면 교체 가능.

### B.4 왜 tag extraction 이 Analyzer 에 있고 Metadata 에 없는가?

Tag 추출은 **tsgo Type 의 shape 해석**에 의존(intersection 멤버가 `{ "typia.tag"?: {...} }` 인지 판별). 이는 Analyzer 책임. Metadata 는 추출된 tag 를 `TypeTag` 로 저장만.

### B.5 왜 `parentResolved` 를 nolint 로 남겼나?

Phase 1 의 recursive detection pass 가 사용할 예정. 당장 지우면 재도입 시 forgetting 위험. nolint 주석 + 기록으로 의도 보존.

### B.6 왜 Phase 0 에서 alias 를 (대부분) 해체?

Phase 0 은 validator(is/assert/validate) 만 다룸. validator 는 alias 이름 불필요. JSON schema / LLM schema 는 alias 이름 필요 → Phase 1 에서 re-introduce.

### B.7 왜 Options 구조체를 작게 유지?

typia v12 `MetadataFactory.IOptions` 는 수 개의 boolean + callback. Phase 0 은 3 개만 노출 — 실제 사용되는 것만. 확장 시 반드시 typia v12 이름 재사용(§4.2).

### B.8 왜 emit 을 별도 패키지로?

책임 분리: IR 을 만드는 곳(analyzer)과 쓰는 곳(emitter)의 buffer overflow 나 재귀 guard semantic 이 다르다. Analyzer 는 "빌드 성공" 을, emitter 는 "legal JS 생성" 을 invariant 로. 같은 package 에 두면 concern 섞임.

### B.9 왜 `ObjectType`/`ArrayType`/`TupleType`/`AliasType` 은 "Type / Ref" 로 쪼갰나?

typia v12 `MetadataObjectType` ↔ `MetadataObject` 의 구분과 동일. 의도:

- **Type** = 타입 자체의 shape(Name, Properties, Recursive, Nullables). 전역에 정확히 하나 존재, Collection 이 소유.
- **Ref** = 호출 지점에서의 참조(Type pointer + 그 위치에서 적용된 Tags). 같은 Type 이 여러 유니언 위치에서 다른 tag matrix 로 쓰일 수 있음.

`string & Format<"uuid"> & MinLength<8>` 에서 string 의 Atomic 은 하나지만, 같은 string 이 `{ id: string & Format<"uuid">; nick: string & MinLength<3> }` 의 두 property 에 올 때 Tag 가 다르다. 같은 원리가 Object 에도 적용되는데, 다른 점은 Object 가 **포인터 identity** 까지 공유해야 재귀가 유한해진다는 것. 그래서 "Type 은 포인터 공유 + Ref 가 per-site tag" 구조가 필요.

### B.10 왜 `ArrayType.Index` 와 `TupleType.Index` 는 `*int`, `ObjectType.Index` 는 `int`?

Object 는 Collection 이 `nextObjectIndex` 를 증가시키며 반드시 부여([collection.go L81](../../packages/ttsc/internal/engine/metadata/collection.go)). Array/Tuple 은 typia v12 에서도 "recursive index 가 있을 수도 없을 수도" 있는 값이라 `*int` 로 삼상(미부여/0/양수). Phase 1 에서 recursive detector 가 활성화되면 Array/Tuple 에도 필요 시 부여.

### B.11 왜 `Escaped` 의 두 필드는 `*Schema` 인데 `Rest` 도 `*Schema` 인가?

- `Escaped.Original/Returns` — class shape + toJSON 결과가 각각 별도 Schema. 완전히 독립.
- `Rest` — typia v12 의 rest parameter semantics 를 위한 "다른 Schema". tuple / variadic 의 tail 표현.

둘 다 pointer 인 이유는 nil 허용(값이 없으면 nil, 있으면 포인터). Go 에서 embedded struct 로 표현하면 "있다/없다" 를 표현하기 어려워진다.

### B.12 왜 `TagMatrix` 는 `[][]TypeTag` 이고, 최상위 Schema 는 `Tags` 필드가 없는가?

Tag 는 항상 **특정 bucket** 에 붙는다(`string & Minimum<5>` 의 Minimum 은 `Atomics[0].Tags`, `object & Description` 의 Description 은 `Objects[0].Tags`). Schema 최상위에 Tags 필드를 두면 "누구에게 붙은 tag 인가" 가 모호해지므로 bucket 내부에 둔다.

TagMatrix 의 이중 slice 이유는 §5.1 에서 설명. Intersection 은 row 내부(AND), union 은 row 들 사이(OR).

---

## 부록 C. 명세 및 확장 시 절차

### C.1 새 `iterate_metadata_*` 파일 추가 절차

Phase 1 이상에서 새 케이스(alias / escape / function 등)를 추가할 때의 순서:

1. **typia v12 원본 확인** — `packages/core/src/factories/internal/metadata/iterate_metadata_{X}.ts` 를 읽고 semantic 을 문서화.
2. **Dispatcher 삽입 지점 결정** — typia v12 의 [iterate_metadata.ts](../../packages/core/src/factories/internal/metadata/iterate_metadata.ts) 에서 해당 케이스의 순서를 확인. Go dispatcher 의 같은 위치에 배치.
3. **Go 파일 신설** — `analyzer/iterate_metadata_{X}.go`. 파일명을 원본과 1:1 일치.
4. **doc comment** — 원본 TS 파일 경로를 첫 줄에 언급.
5. **테스트** — `analyzer_test.go` 에 fixture 기반 unit test 추가. 최소 3 케이스(기본/엣지/실패).
6. **통합 테스트** — TS fixture(`test/fixtures/...`)에 해당 타입을 쓰는 예제 추가 → `npm test` 통과.
7. **wiki 반영** — `wiki/08-tsgo-master-plan/18-phase0-progress-report.md` 의 체크리스트 업데이트.

### C.2 새 tag type 추가 절차

typia v12 의 `packages/interface/src/tags/` 에 새 tag 가 추가될 때(예: `ReadOnly`, `Deprecated`):

1. **TS 측 정의 복사** — `target`, `kind`, `value`, `validate`, `exclusive`, `schema` 필드 문서화.
2. **extractTag 영향 확인** — 현재 `attachTag` 가 분기하는 `target` 6 종 외 새 target 이면 `attachTag` 확장.
3. **emitter 영향** — `emitter/tags.go` 의 `tagCheck` 에 새 `Kind` 분기 추가(이는 C 역할이지만 B 가 IR 쪽 인계를 준비).
4. **JSON Schema 영향** — `emitter/json_schema.go` 의 schema composition 에 새 tag 가 반영되는지 확인(이 역시 C).
5. **fixture 추가** — `test/fixtures/tagged/` 에 새 tag 사용 예.

### C.3 새 Atomic kind 추가 절차

Phase 0 의 4 primitive 외에 새 atomic 을 추가하는 일은 매우 드물다(tsgo 가 제공하는 primitive bit flag 는 4 종 + symbol). `symbol` 지원을 추가한다고 가정하면:

1. `AtomicKind` const 에 `AtomicSymbol = "symbol"` 추가.
2. `IsValid()` 에 `AtomicSymbol` 케이스.
3. `iterateAtomic` 의 table 에 `{AtomicSymbol, TypeFlagsESSymbolLike}` 추가.
4. Name() 이 새 kind 에 대해 올바른 문자열 반환하는지 확인(`atomic.Type` 을 그대로 toString 하는 경로이므로 자동).
5. emitter 에 새 atomic 체크 추가 (`atomicCheck` 의 switch).

---

## 부록 D. Phase 0 에서 발견된 bug 역사 (regression 회피용)

Phase 0 5-cycle 자기감수에서 발견·수정된 버그들. 규약 위반 시 재발 가능한 항목이므로 회고용으로 보존.

### D.1 `findSourceForOutput` — basename 충돌 (Cycle 1)

**버그**: `driver/rewrite.go` 의 `findSourceForOutput` 이 basename stem 만으로 매칭 → `a/x.ts` 와 `b/x.ts` 같은 이름의 서로 다른 파일 중 잘못된 것 선택.

**수정**: `/` 기반 suffix segment 매칭으로 교체.

**B 역할과의 관련**: 간접적(IR 자체 영향 없음). 하지만 **교훈: path/identity 비교는 항상 full qualified 로**. typeKey 에서도 유사 실수 가능(다른 파일의 Type 이 같은 Id 를 받을 수 있는지 확인 필요 — Q-B2).

### D.2 Native 에 JSON schema 대응 누락 (Cycle 1)

**버그**: `json_schema.go` 의 OpenAPI 생성기가 Date/Uint8Array/Buffer/URL/Set/Map 처리 누락 → `createdAt: {}` 빈 schema.

**수정**: `nativeToJSONSchema` 헬퍼 추가, 11 종 TypedArray 매핑.

**B 역할과의 관련**: `Native.Name` 이 정확한 심볼명이어야 emitter 가 매핑. whitelist(§4.10) 가 정확해야 함.

### D.3 `compactBooleanConstants` 죽은 함수 (Cycle 2)

**버그**: 사용되지 않는 함수가 남아 analyzer 를 혼란스럽게.

**수정**: 제거. `iterateConstant` 가 이미 boolean literal 을 Atomic 으로 widening.

**B 역할과의 관련**: dispatcher 에서 widening 책임을 어느 iterate 가 지는지 명확해야 함(§4.3 에 설명됨).

### D.4 native whitelist 불일치 (Cycle 2)

**버그**: typia v12 의 SIMPLES+GENERICS 와 Go native whitelist 가 달랐음 (Buffer/URL/URLSearchParams/Error/Promise 등 잘못 포함, Blob/File 등 누락).

**수정**: typia v12 와 정확히 맞춤.

**B 역할과의 관련**: §4.10 의 whitelist 는 반드시 typia v12 원본과 동기화.

### D.5 exclusive boolean literal 누락 (Cycle 2)

**버그**: [18-phase0-progress-report.md L84](../../wiki/08-tsgo-master-plan/18-phase0-progress-report.md). `extractTag` 의 `exclusive` 추출이 Constants 만 체크 → tsgo 가 boolean literal 을 Atomic 으로 widening 해서 miss.

**수정**: Constants + Atomics 둘 다 체크.

**B 역할과의 관련**: §4.11, §8.8 의 기록. 규약에 명시적으로 반영됨.

### D.6 `safeName` nil-dereference (Cycle 2)

**버그**: `computeName` 이 nil Schema 포인터에 접근 가능한 경로(특히 부분적으로 populated 된 Collection entry).

**수정**: [name.go L99-104](../../packages/ttsc/internal/engine/metadata/name.go) 의 `safeName` 헬퍼 도입.

**B 역할과의 관련**: §3.4 의 Name() 규약. Schema 이 필드 하나가 nil 이어도 Name() 은 안전해야 함.

### D.7 포맷 regex 부족 (Cycle 3)

**버그**: emitter/tags.go 의 formatRegexps 가 10 종만 지원 → email/uuid/url 이외 다수 형식 실패.

**수정**: 21 종으로 확장(byte, duration, idn-email, idn-hostname, iri, iri-reference, json-pointer, relative-json-pointer, uri-reference, uri-template 포함). uuid 에 `urn:uuid:` 선택 prefix.

**B 역할과의 관련**: 간접적(IR 는 format 값을 그대로 전달만). 하지만 Tag.Value 의 content 가 emitter 에 의미 있다는 신호.

### D.8 float32 bounds 누락 (Cycle 3)

**버그**: `typeTagCheck` 의 `float` 케이스에 single-precision 범위 체크 없음.

**수정**: `-1.175494351e38 <= x && x <= 3.4028235e38` 추가(typia `NumericRangeFactory` 일치).

**B 역할과의 관련**: 간접적.

### D.9 `%expr` 리터럴 miscompile (Cycle 3)

**버그**: `json_stringify.go` 의 objectStringify 가 placeholder 치환 시 `%expr` 을 포함하는 property name 오염.

**수정**: 직접 문자열 삽입으로 교체.

**B 역할과의 관련**: 교훈 — **placeholder 치환 방식은 사용자 데이터와 충돌하지 않는 토큰을 써야 함**. IR 의 Tag.Validate 문자열(`$input` placeholder)도 같은 리스크. `$input` 이 property 이름에 쓰일 가능성은 낮지만 Phase 1 에서 escape 전략 검토.

### D.10 포인터 키 재귀 guard 실패 (Cycle 4, 치명)

**버그**: [18-phase0-progress-report.md L94-95](../../wiki/08-tsgo-master-plan/18-phase0-progress-report.md). `visitingObjects[*shimchecker.Type]` 가 포인터 키 → tsgo 가 동일 semantic 타입에 distinct 포인터 주면 guard 실패 → 무한 재귀 → 스택오버플로.

**수정**: `typeKey(t)` 문자열 키로 교체.

**B 역할과의 관련**: §3.7, §3.8, §4.9, §8.3 에 반복 명시. **최중요 규약**.

### D.11 emitter 재귀 guard 없음 (Cycle 4, 치명)

**버그**: `emitObjectCheck` 가 재귀 타입(TreeNode)을 만나면 goroutine 스택오버플로.

**수정**: `isState { helpers, helperName, visiting }` hoisting. `__is_N` 헬퍼 이름 예약 후 본문 한 번만 방출, 자기참조는 helper 호출로.

**B 역할과의 관련**: §3.8 — IR 자체는 guard 하지 않고 consumer 가 책임진다는 원칙. emitter 는 이 원칙에 따라 자체 visiting set 유지.

---

## 부록 E. Go ↔ TS semantic diff 표

Phase 0 에서 의도적으로 TS 와 **다르게** 결정한 부분. 재 혼동 방지용.

| 항목 | TS (typia v12) | Go (Phase 0) | 이유 |
|---|---|---|---|
| `MetadataSchema.name_` 캐시 무효화 | 없음 (`??=` 한 번 계산 후 영구) | 동일, 수동 `s.name = ""` 필요 | TS 의 `??=` 와 정확히 같은 의미 |
| Collection 에 `recursiveIndex` 추적 | 있음 (Phase 0 에서 일부) | 없음 | Phase 1 로 연기 |
| `union_index` 필드 | 있음 | 없음 | discriminator grouping 은 Phase 1 |
| `boolean_literal_intersected_` | 있음 | 없음 | Phase 0 범위 밖 |
| errors array | 있음 (`MetadataFactory.IProps.errors`) | 없음 — `(nil, false)` | Phase 1 에서 구조화 diagnostic 도입 |
| `alias` 를 기본적으로 resolve-through | 옵션 | default | Phase 0 은 validator 만 다루므로 alias 이름 불필요 |
| `Map<K,V>` / `Set<T>` | 정식 MetadataMap/Set | Native 로 fallback | Phase 1 이관 |
| `Template` 의 `pattern` 합성 | eagerly 합성 | raw name 만 보존 | 호출되면 그 때 합성 |
| `MetadataSchema.merge` | 있음 | 미포팅 | Phase 1 |
| `MetadataSchema.covers` | 있음 | 미포팅 | Phase 1 |
| `MetadataSchema.intersects` | 있음 | 미포팅 | Phase 1 |
| `ArrayType.index` type | `number \| null` | `*int` | nil = null, pointer = non-null |
| `ObjectType.validated` | boolean, Phase 1 parent-resolution flag | 동일 | 같은 의미, 미사용 |

---

## 부록 F. 자주 묻는 질문 (Q&A)

### F.1 Q: Collection 을 reset 해야 할 때는?

**A**: 한 파일의 transform 이 끝나고 다음 파일로 넘어갈 때. 같은 파일 내 여러 `typia.*<T>()` 호출은 같은 Collection 을 공유. 이유: 같은 파일에서 같은 TS 타입을 여러 번 쓸 확률이 높고 type reuse 효율. **정책**: driver 가 파일 단위로 `analyzer.New(checker, opts, nil)` 호출 → 파일 경계에서 자연스럽게 reset.

### F.2 Q: `Walk` 대신 `FromType` 을 써도 되나?

**A**: `FromType` 은 throwaway Analyzer + fresh Collection 을 쓰는 단축 경로. 단일 test 나 디버깅 용도. 실제 driver 는 `New` + `Walk` 를 선호(Collection 재사용).

### F.3 Q: `Schema.Any == true` 인 Schema 에 다른 bucket 도 채워질 수 있나?

**A**: typia v12 에서는 any 가 top type 이므로 다른 bucket 은 무의미. Go 에서도 `iterate_metadata.go` 는 `Any=true` 설정 후 즉시 return. 만약 any+bucket 이 채워진 Schema 가 만들어지면 규약 위반(panic 대상).

### F.4 Q: Nullable 이 true 일 때 `Atomics=[]` 면 "null 만" 인가?

**A**: 네. `type X = null` 은 `{Nullable: true, Required: true}` 외 모든 bucket 이 비어 있는 Schema. `Size() == 0` 이지만 `Empty() == true` 여서 emit 은 `null === input` 만 생성.

### F.5 Q: Schema 의 cross-reference cycle 을 JSON 직렬화하면?

**A**: 순진하게 `json.Marshal` 하면 무한 재귀. 실제로 **직렬화 경로는 typia v12 의 `IMetadataDictionary` 패턴을 포팅해야 함** — ObjectType / ArrayType 등을 flat map 으로 덤프하고 `MetadataObject.ref` 는 이름으로만 참조. Phase 1 에 `metadata/IMetadataDictionary.go` 신설 예정.

### F.6 Q: Analyzer 가 실패하는 구체적 사례는?

**A**: Phase 0 기준:

- type parameter(generic 미지정 `T`) — typia v12 는 errors push, Go 는 `false`.
- 지원하지 않는 native(whitelist 외). 예: 사용자 정의 class.
- 함수 타입 property (Phase 0 은 function skip).
- Set/Map (Phase 0 은 native fallback, 타입 인자 정보 손실 주의).

Phase 1 에서 각각 정식 지원 또는 구조화 diagnostic.

### F.7 Q: `Template.RawName` 이 빈 문자열이면?

**A**: invalid — Template 저장 자체를 하지 말아야 한다. Phase 0 은 Template 생성 경로가 아직 없어서(§3.2 (3) 미구현) 불변식 체크 코드도 없다. Phase 1 에서 `metadata.NewTemplate(raw)` factory + 빈 문자열 거부.

### F.8 Q: Collection 의 `reservedSuffixes` 는 언제 쓰나?

**A**: 현재 미사용 필드. typia v12 의 `MetadataCollection` 은 `alias.o0`, `alias.o1` 등 타입 생성 시 사용자 타입 이름과 충돌을 피하기 위해 suffix 를 예약해둠. Phase 1 에서 활성화 예정. 지금은 빈 map 이지만 구조 호환을 위해 존재.

### F.9 Q: `parentResolved` 의 역할을 좀 더?

**A**: typia v12 의 `explore_metadata` 는 재귀 타입을 처음 만날 때 "부모는 이미 진행 중, 자식은 나중에 resolve" 플래그를 세움. Go 는 Collection pointer identity 로 대체. Phase 1 에서 validator 실행 전 post-process pass 가 필요하면 재도입.

### F.10 Q: tag 의 `Schema` 필드는 Phase 0 에서 왜 쓰이지 않나?

**A**: `{ schema: { format: "email" } }` 같은 JSON Schema merge 힌트 전달용. Phase 0 은 validator 만 emit 하므로 JSON Schema 출력과 무관. Phase 1 JSON namespace 포팅 시 활성. 현재는 `any` 로 수신만 하고 무시.

---

*end of B role Cycle 1 draft. 이 문서는 Cycle 2(교차 리뷰)에서 A/C/D/E/F 의 피드백을 받아 개정된다. 특히 Q-B1~Q-B10 은 해당 역할의 답변을 반드시 요구한다.*
