# packages/core — 컴파일러 엔진 (메타데이터 + 코드 생성)

> 위치: `packages/core/src`
> 책임: TypeScript 타입 → 메타데이터 → 검증/직렬화/스키마/랜덤/Protobuf/LLM 코드. typia의 두뇌.

## 1. 책임

- **타입 메타데이터 추출**: TypeScript Type을 `MetadataSchema`로 변환
- **코드 생성**: Is/Assert/Validate, Json {Stringify, Parse, Schema, Application}, Random, Protobuf {Encode, Decode, Message}, LLM {Schema, Application, Parameters}
- **Union/Intersection 최적화**: 합성 타입 분기/병합
- **재귀 타입 처리**: 순환 참조 감지 + 캐싱
- **AST 인젝션**: `typia/lib/ttsc/plugin` 또는 `@typia/unplugin` 이 결과 AST를 호출 위치에 삽입

## 2. 핵심 데이터 모델

### MetadataSchema (`schemas/metadata/MetadataSchema.ts:49-135`)
모든 타입을 단일 sum-type으로 표현:
- `atomics[]` — boolean/number/bigint/string
- `constants[]` — 리터럴
- `templates[]` — template literal types
- `arrays[]`, `tuples[]`, `objects[]`, `aliases[]`
- `natives[]` — Date / Uint8Array / 빌트인
- `sets[]`, `maps[]`, `functions[]`
- `escaped` — Date→number 같은 변환 표현
- modifiers: `required / optional / nullable / any`

### MetadataObjectType
이름 + `properties: MetadataProperty[]` + `recursive?: boolean`.

### MetadataCollection (`schemas/metadata/MetadataCollection.ts:22-115`)
분석 중 발견된 타입의 캐시/레지스트리. `ts.Type → MetadataObjectType/ArrayType/TupleType/AliasType` 1:1 매핑. 동일 타입 재방문 시 캐시 반환 → 재귀/공유 타입 정확하게 처리.

## 3. MetadataFactory 동작

```
MetadataFactory.analyze()
  ├─ explore_metadata()                     # 타입 트리 재귀 순회
  │   └─ iterate_metadata()
  │       ├─ alias        # 타입 별칭 추적
  │       ├─ union        # 각 요소 개별 분석
  │       ├─ intersection # 메타데이터 태그 병합
  │       ├─ escape       # 변환 타입 (Date → string)
  │       ├─ constant     # literal value
  │       ├─ atomic       # primitive flag
  │       ├─ native       # Date/Uint8Array/...
  │       └─ object → emplace_metadata_object()
  ├─ iterate_metadata_collection()          # recursive 표시
  └─ iterate_metadata_sort()                # 의존도 정렬
```

- **재귀**: `MetadataCollection.emplace()` 캐시 — 같은 type 재방문 = 캐시 hit
- **제너릭**: `TypeChecker.getTypeOfPropertyOfType()` 등으로 instantiation. 미지정 generic은 에러 (`iterate_metadata.ts:22-31`)
- **Intersection 병합**: `iterate_metadata_intersection.ts:12-110` — 단일 객체에 다중 tag set 지원

## 4. Programmer 패턴

공통 인터페이스: 모두 `decompose() → FeatureProgrammer.IDecomposed`

```ts
{ functions: ts.VariableStatement[], statements: ts.Statement[], arrow: ts.ArrowFunction }
```

| Programmer | 동작 | 반환 | 핵심 |
|---|---|---|---|
| **IsProgrammer** | boolean 검증 | true/false | 빠른 경로, AND/OR combiner |
| **AssertProgrammer** | 검증+예외 | T | path 추적, TypeGuardError |
| **ValidateProgrammer** | 모든 오류 수집 | IValidation | 누적, full path |
| **JsonStringifyProgrammer** | 직렬화 | JSON 문자열 | 인라인 최적화, .join() |
| **RandomProgrammer** | 랜덤 인스턴스 | T | 제약 조건 활용 |

Is vs Assert (`IsProgrammer.ts:31-94`, `AssertProgrammer.ts:56-84`): combiner는 success path만, atomist는 실패 시 `create_guard_call()` 호출.

## 5. 흥미로운 최적화

- **Union 객체 discriminator** (`UnionExplorer.ts:30-139`): 특정 필드 값으로 사전 필터링 → if-else 트리. O(n) 체크 회피.
- **StringifyJoiner 인라인** (`StringifyJoinder.ts:10-113`): 상수 부분은 컴파일 타임에 `"[...]"`로 고정, 동적 속성만 런타임. 마지막 콤마 제거 분기.
- **Recursive 감지** (`iterate_metadata_collection.ts:58-84`): 방문 set으로 cycle, `setArrayRecursive()` 캐싱.
- **Native 인식**: `ts.Symbol`의 fully qualified name + 멤버 시그니처로 Date/Uint8Array 등 식별.

## 6. TypeScript Compiler API 의존도

- `ts.TypeChecker`: 매우 많이 사용 — `typeToString`, `getTypeAtLocation`, `getApparentProperties`, `getIndexInfosOfType`, `getReturnTypeOfClassMethod`
- `ts.factory.*`: AST 생성 (전부)
- `ts.SyntaxKind / TypeFlags`: 타입 플래그 비교
- `ts.getModifiers()`: readonly 등
- **ts-expose-internals 사용 없음**: 모두 public API

## 7. 약점/개선 여지

- **거대 파일**: `CheckerProgrammer.ts` 1614 LOC, `RandomProgrammer.ts` ~1200, `JsonStringifyProgrammer.ts` 1129 → 책임 분리 가능성
- **emplace_metadata_object.ts** 225 LOC: 3중 루프, 동적 키 처리 복잡
- **iterate_metadata_intersection.ts** 211 LOC: 유효성 검증 로직 인지부담 큼
- **OptionPredicator 중복 인스턴스화**: Is/Assert/Validate 각각 → 한 군데로 통합 가능
- **주석 부족**: 함수 헤더는 있으나 알고리즘 핵심부 주석 거의 없음 (특히 union/intersection 처리)
- **테스트 가능성**: TypeChecker, TransformationContext 의존 → unit test 어려움. 통합 테스트로 우회 중

## 8. 주요 파일 (50+)

### 메타데이터 스키마 (`schemas/metadata/`)
- MetadataSchema, MetadataObject(Type), MetadataProperty, MetadataCollection
- MetadataAtomic, MetadataConstant, MetadataArray(Type), MetadataTuple(Type)
- MetadataAlias, MetadataNative, MetadataTemplate, MetadataMap, MetadataSet

### 메타데이터 추출 (`factories/internal/metadata/`)
- explore_metadata, iterate_metadata
- iterate_metadata_{union, intersection, object, atomic, constant, native, array, tuple, alias, escape, function, sort, collection}
- emplace_metadata_object, MetadataHelper

### Programmer (`programmers/`)
- IsProgrammer, AssertProgrammer, ValidateProgrammer
- RandomProgrammer, ImportProgrammer

### 내부 코드 생성 (`programmers/internal/`)
- FeatureProgrammer (602), CheckerProgrammer (1614)

### 헬퍼 (`programmers/helpers/`)
- FunctionProgrammer, UnionExplorer, UnionPredicator
- AtomicPredicator, OptionPredicator
- StringifyJoinder, StringifyPredicator

### JSON (`programmers/json/`)
- JsonStringifyProgrammer (1129), JsonApplicationProgrammer, JsonSchemaProgrammer

### Protobuf / LLM (`programmers/protobuf|llm/`)
- ProtobufEncodeProgrammer, ProtobufDecodeProgrammer
- LlmSchemaProgrammer

### 팩토리 (`factories/`)
- ExpressionFactory, MetadataFactory, JsonMetadataFactory
- TypeFactory, StatementFactory

### 컨텍스트 (`context/`)
- ITypiaContext, ITransformOptions

## 핵심 통찰

core는 **모든 타입 정보를 한 자료구조(MetadataSchema)에 모은 뒤, 그 위에서 여러 코드 생성기가 변주**하는 구조다 — typia 내부의 작은 IR. 신규 기능 추가 비용은 낮지만, IR 변경은 모든 Programmer에 파급된다는 대가로 안정성이 강제된다. tsgo 대응 시 'TypeChecker만 다시 구현하면 나머지는 그대로' 라는 분리가 잘 된 자산.

→ 다음 [03-transform.md](03-transform.md)
