# 10. Native core/transform port review

이 문서는 현재 브랜치의 `packages/core/native`,
`packages/transform/native` 구현과 `../typia` master 브랜치의 기존
TypeScript `packages/core`, `packages/transform` 구현을 비교한 감수 기록이다.

초점은 두 가지다.

1. typia의 TypeScript v7 전환 경로에서 Go native 구현이 실제로 어떤 책임을
   맡는가.
2. 이 구조가 향후 nestia 또는 제3 라이브러리에서 재사용 가능한 모듈 표면으로
   정리되어 있는가.

## 결론

현재 Go 포팅은 typia 내부 `ttsc` 플러그인 백엔드로는 방향이 맞다. IR은
`metadata.Schema`로 정리되었고, 분석기는 `analyzer`, 생성기는 `emitter`,
typia 호출 연결은 `transform/native/ttsc`로 나뉘어 있다. 기존 TS 구현에서
많은 파일을 차지하던 AST factory, per-feature transformer wrapper, import
rewriter, TypeScript AST 조립 코드가 Go 쪽에서는 문자열 emitter와 단일 라우팅
스위치로 압축되면서 총량이 크게 줄었다.

단, 이것은 아직 `@typia/core`와 `@typia/transform`의 공용 재사용 표면을 대체한
상태가 아니다. nestia가 기존에 쓰던 `MetadataFactory`,
`JsonMetadataFactory`, `JsonSchemasProgrammer`, `Http*Programmer`,
`ImportProgrammer`, `TransformerError`, `TypeFactory`, `IdentifierFactory` 같은
Node/TypeScript API가 Go native 표면으로 제공되지 않는다. 현재 구조는 typia
호출을 찾아 typia runtime 코드를 emit하는 내부 백엔드에 가깝다.

또한 native Go 모듈의 독립 검증은 현재 깨져 있다. `packages/core/native`는
`go.mod`의 shim replace 경로가 틀려 analyzer package setup 자체가 실패하고,
emitter 테스트도 현재 출력과 fixture 기대값이 어긋난다.
`packages/transform/native`는 OpenAPI fixture 기반 테스트가
`target call site not found`로 실패한다. 이 둘은 public reusable core로 보기
전에 반드시 고쳐야 한다.

## 확인 범위

측정은 git tracked file 기준으로 진행했다.

| 대상                                    | 파일 수 | 라인 수 |
| --------------------------------------- | ------: | ------: |
| 현재 `packages/core/native` + transform |      69 |  18,297 |
| `../typia` `packages/core` + transform  |     342 |  34,877 |

사용한 명령:

```bash
git ls-files packages/core/native packages/transform/native | sort | xargs wc -l
git -C ../typia ls-files packages/core packages/transform | sort | xargs -I{} wc -l ../typia/{}
rg -l "@typia/core" ../nestia/packages ../nestia/tests ../nestia/website | wc -l
cd packages/core/native && go test ./...
cd packages/transform/native && go test ./...
```

`../nestia`의 `@typia/core` 직접 사용 파일은 62개다. 이 수치는 단순
compatibility 위험이 아니라, 실제로 nestia가 `@typia/core`를 public toolkit로
사용한다는 증거다.

## 책임 이동

| 기존 TS 구현                                                                | 현재 Go 구현                                      | 판정                                     |
| --------------------------------------------------------------------------- | ------------------------------------------------- | ---------------------------------------- |
| `@typia/core` npm package                                                   | `packages/core/native` Go module                  | npm public API 대체 표면 없음            |
| `@typia/transform` npm package                                              | `packages/transform/native` Go module             | typia 전용 native plugin backend         |
| `MetadataSchema` class family                                               | `metadata.Schema`, `Collection`, related structs  | IR 형태는 보존                           |
| `MetadataFactory.analyze()`                                                 | `analyzer.New(...).Walk/WalkWithTypeNode`         | 핵심 분석 진입점 포팅                    |
| `iterate_metadata_*` family                                                 | `analyzer/iterate_metadata_*.go`                  | 파일 배치와 책임이 비교 가능             |
| `JsonMetadataFactory`                                                       | `AnalysisOptions`, `Unsupported*Reason`, emitters | 별도 public factory 표면 없음            |
| `JsonSchemasProgrammer.writeSchemas()`                                      | `emitter.EmitJsonSchemasExpression`               | OpenAPI emit은 있으나 TS API 대체 아님   |
| `HttpParameterProgrammer`, `HttpQueryProgrammer`                            | `emitter/http.go`, adapter unsupported checks     | typia emit 경로 중심                     |
| `AssertProgrammer`, `IsProgrammer`, `ValidateProgrammer`                    | `emitter/assert.go`, `is.go`, `diagnostic.go`     | source-string emitter로 압축             |
| `ImportProgrammer`                                                          | 없음                                              | nestia 재사용 API 공백                   |
| `TypeFactory`, `IdentifierFactory`, `StatementFactory`, `ExpressionFactory` | 없음                                              | TS AST helper API 공백                   |
| `CallExpressionTransformer` functor map                                     | `ttsc.EmitCall` switch                            | 중앙 스위치로 압축, plugin registry 아님 |
| `FileTransformer` + `ImportTransformer`                                     | `CollectCallSites` + native rewrite command       | typia call site 전용                     |
| `TransformerError`                                                          | `UnsupportedReason`, Go `error`                   | 구조화된 TS diagnostic API 공백          |

## 핵심 라인 근거

아래 라인들은 이번 판정을 좌우한 직접 근거다.

| 파일                                          |    라인 | 의미                                                                                                                            |
| --------------------------------------------- | ------: | ------------------------------------------------------------------------------------------------------------------------------- |
| `packages/core/native/analyzer/analyzer.go`   |    1-27 | Go analyzer가 TS `MetadataFactory.ts`와 `iterate_metadata_*` 포팅임을 명시하고, 현재 구현 bucket과 증분 대상 bucket을 구분한다. |
| `packages/core/native/analyzer/analyzer.go`   |   39-59 | TS `MetadataFactory.IOptions`에 해당하는 analyzer option 표면이다.                                                              |
| `packages/core/native/analyzer/analyzer.go`   |  96-180 | `Walk`/`WalkWithTypeNode`가 public entry이고 checker type과 syntax fallback을 결합한다.                                         |
| `packages/core/native/metadata/schema.go`     |    3-30 | Go IR이 TS `MetadataSchema` bucket 구조를 필드 단위로 유지한다.                                                                 |
| `packages/core/native/metadata/collection.go` |     3-9 | collection은 registry 역할을 하지만 TS판 object union/recursive index 전체는 아직 확장 대상으로 남아 있다.                      |
| `packages/core/native/emitter/http.go`        |   12-29 | `typia.http.parameter<T>` emit은 sole atomic/literal 중심이며 union/nullable wiring은 단순화되어 있다.                          |
| `packages/transform/native/ttsc/visit.go`     |   11-24 | `CallSite`가 typia native plugin shape임을 명시한다.                                                                            |
| `packages/transform/native/ttsc/visit.go`     | 181-201 | call-site 인식이 `typia/lib`, `typia/src`, `packages/typia/src` 선언 경로에 묶인다.                                             |
| `packages/transform/native/ttsc/adapter.go`   |   17-62 | transform adapter가 analyzer를 호출하고 qualified import fallback을 붙인다.                                                     |
| `packages/transform/native/ttsc/adapter.go`   |  86-205 | method별 syntax/string 기반 unsupported guard다.                                                                                |
| `packages/transform/native/ttsc/adapter.go`   | 471-824 | typia module/method dispatch가 registry가 아니라 큰 switch로 구현되어 있다.                                                     |
| `packages/core/native/go.mod`                 |    5-18 | shim replace 경로가 현재 저장소 구조와 맞지 않는다.                                                                             |
| `packages/transform/native/go.mod`            |    5-20 | transform native 쪽은 `../ttsc/packages/ttsc`와 `core/native`를 직접 replace한다.                                                      |

## 현재 native 파일 ledger

아래 목록은 현재 native 쪽 git tracked 파일 전수 라인 수와 감수 판정이다.

| 파일                                                             |  라인 | 판정                                                     |
| ---------------------------------------------------------------- | ----: | -------------------------------------------------------- |
| `packages/core/native/analyzer/analyzer.go`                      |   220 | analyzer entry, TS `MetadataFactory` 포팅 선언과 options |
| `packages/core/native/analyzer/analyzer_test.go`                 |    36 | smoke 수준                                               |
| `packages/core/native/analyzer/comment_tags.go`                  |   426 | JSDoc/tag extraction                                     |
| `packages/core/native/analyzer/iterate_metadata.go`              |    82 | dispatcher                                               |
| `packages/core/native/analyzer/iterate_metadata_array.go`        |    48 | array bucket                                             |
| `packages/core/native/analyzer/iterate_metadata_atomic.go`       |    33 | atomic bucket                                            |
| `packages/core/native/analyzer/iterate_metadata_constant.go`     |    48 | literal bucket                                           |
| `packages/core/native/analyzer/iterate_metadata_function.go`     |    85 | function bucket                                          |
| `packages/core/native/analyzer/iterate_metadata_intersection.go` |   153 | intersection/tag merge                                   |
| `packages/core/native/analyzer/iterate_metadata_mapset.go`       |    51 | map/set path                                             |
| `packages/core/native/analyzer/iterate_metadata_object.go`       |   648 | object, property, recursion registry                     |
| `packages/core/native/analyzer/iterate_metadata_tuple.go`        |    37 | tuple bucket                                             |
| `packages/core/native/analyzer/iterate_metadata_union.go`        |   127 | union merge                                              |
| `packages/core/native/analyzer/jsdoc.go`                         |   140 | JSDoc parsing                                            |
| `packages/core/native/analyzer/native.go`                        |    91 | native object classification                             |
| `packages/core/native/analyzer/shim_type_string.go`              |   134 | checker string access                                    |
| `packages/core/native/analyzer/tag.go`                           |   432 | typia tag extraction                                     |
| `packages/core/native/analyzer/type_key.go`                      |    53 | stable type keys                                         |
| `packages/core/native/analyzer/type_node_fallback.go`            | 2,073 | syntax fallback, largest analyzer risk area              |
| `packages/core/native/emitter/assert.go`                         |    74 | assert wrapper                                           |
| `packages/core/native/emitter/assert_test.go`                    |    47 | smoke fixture                                            |
| `packages/core/native/emitter/diagnostic.go`                     | 1,180 | validation/assert diagnostics                            |
| `packages/core/native/emitter/format.go`                         |     7 | formatting helper                                        |
| `packages/core/native/emitter/http.go`                           |   305 | http decode emit, common but simplified                  |
| `packages/core/native/emitter/is.go`                             |   881 | predicate emit, helper hoisting                          |
| `packages/core/native/emitter/is_test.go`                        |   196 | stale expected strings now failing                       |
| `packages/core/native/emitter/json_parse.go`                     |    95 | parse wrapper                                            |
| `packages/core/native/emitter/json_schema.go`                    |   830 | JSON Schema/OpenAPI expression                           |
| `packages/core/native/emitter/json_schema_test.go`               |    73 | schema fixture                                           |
| `packages/core/native/emitter/json_stringify.go`                 |   349 | stringify emit                                           |
| `packages/core/native/emitter/json_stringify_test.go`            |   119 | stringify fixture                                        |
| `packages/core/native/emitter/llm.go`                            |   396 | LLM schema/application emit                              |
| `packages/core/native/emitter/misc.go`                           |   351 | clone/prune/literals                                     |
| `packages/core/native/emitter/misc_test.go`                      |    39 | smoke fixture                                            |
| `packages/core/native/emitter/notations.go`                      |    39 | notation emit                                            |
| `packages/core/native/emitter/object_dynamic.go`                 |   143 | dynamic object handling                                  |
| `packages/core/native/emitter/protobuf.go`                       | 1,260 | protobuf encode/decode/message                           |
| `packages/core/native/emitter/protobuf_test.go`                  |    79 | protobuf fixture                                         |
| `packages/core/native/emitter/random.go`                         |   759 | random emit                                              |
| `packages/core/native/emitter/reflect.go`                        |   721 | reflection metadata/schema emit                          |
| `packages/core/native/emitter/schema_inspect.go`                 |   191 | schema fact extraction                                   |
| `packages/core/native/emitter/tag_compose.go`                    |    34 | tag composition                                          |
| `packages/core/native/emitter/tags.go`                           |   321 | tag validation helpers                                   |
| `packages/core/native/emitter/tags_test.go`                      |   100 | tag fixture                                              |
| `packages/core/native/go.mod`                                    |    34 | replace 경로 오류                                        |
| `packages/core/native/go.sum`                                    |    22 | module checksum                                          |
| `packages/core/native/metadata/alias.go`                         |    20 | alias model                                              |
| `packages/core/native/metadata/atomic.go`                        |    49 | atomic enum                                              |
| `packages/core/native/metadata/collection.go`                    |   126 | registry, TS collection보다 축소                         |
| `packages/core/native/metadata/container.go`                     |    62 | object/array/tuple refs                                  |
| `packages/core/native/metadata/format.go`                        |     9 | format enum                                              |
| `packages/core/native/metadata/jslit.go`                         |   101 | JS literal serialization                                 |
| `packages/core/native/metadata/metadata.go`                      |    28 | common metadata                                          |
| `packages/core/native/metadata/metadata_test.go`                 |   285 | metadata fixture                                         |
| `packages/core/native/metadata/name.go`                          |   191 | name rendering                                           |
| `packages/core/native/metadata/schema.go`                        |   209 | IR core                                                  |
| `packages/core/native/metadata/special.go`                       |    50 | special refs                                             |
| `packages/core/native/metadata/tag.go`                           |    33 | tag model                                                |
| `packages/transform/native/cmd/ttsc-typia/build.go`              |   208 | native command build orchestration                       |
| `packages/transform/native/cmd/ttsc-typia/main.go`               |   125 | CLI entry                                                |
| `packages/transform/native/cmd/ttsc-typia/transform.go`          |   144 | rewrite command path                                     |
| `packages/transform/native/go.mod`                               |    46 | core/native and ttsc replace path                        |
| `packages/transform/native/go.sum`                               |    22 | module checksum                                          |
| `packages/transform/native/ttsc/adapter.go`                      | 1,824 | typia method routing and unsupported gates               |
| `packages/transform/native/ttsc/cleanup.go`                      |    74 | output cleanup                                           |
| `packages/transform/native/ttsc/openapi_test.go`                 |   446 | stale fixture test                                       |
| `packages/transform/native/ttsc/qualified_import_fallback.go`    |   404 | checker/syntax fallback                                  |
| `packages/transform/native/ttsc/visit.go`                        |   268 | typia call-site collector                                |
| `packages/transform/native/ttsc/writefile.go`                    |    11 | file write helper                                        |

## 구버전 TS 구조 판정

`../typia`의 TS 구현은 라인 수가 긴 이유가 단순 중복 때문만은 아니다. public
toolkit 책임이 넓었다.

| 구역                 | 대표 파일                                                                                                                           | 기존 책임                                                                |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| context              | `ITypiaContext.ts`, `ITransformOptions.ts`, `TransformerError.ts`                                                                   | transformer가 공유하는 TS Program, checker, options, diagnostic contract |
| factories            | `MetadataFactory.ts`, `JsonMetadataFactory.ts`, `ProtobufFactory.ts`                                                                | 타입 분석, JSON/Protobuf 전용 검증, public analyzer API                  |
| AST helpers          | `IdentifierFactory.ts`, `LiteralFactory.ts`, `StatementFactory.ts`, `TypeFactory.ts`, `ExpressionFactory.ts`, `ImportProgrammer.ts` | nestia도 직접 쓰는 TS AST 생성 toolkit                                   |
| metadata schemas     | `schemas/metadata/*.ts`                                                                                                             | runtime/SDK/schema composer가 공유하는 class 기반 IR                     |
| generic programmers  | `AssertProgrammer.ts`, `IsProgrammer.ts`, `ValidateProgrammer.ts`, `RandomProgrammer.ts`                                            | typia runtime codegen                                                    |
| feature programmers  | `json`, `http`, `llm`, `misc`, `notations`, `protobuf`                                                                              | 각 feature별 public programmer API                                       |
| internal checkers    | `CheckerProgrammer.ts`, `FeatureProgrammer.ts`, `iterate/*`                                                                         | predicate, union, object, stringify, schema 세부 생성                    |
| transformer entry    | `transform.ts`, `FileTransformer.ts`, `CallExpressionTransformer.ts`                                                                | TS transformer pipeline                                                  |
| transformer wrappers | `features/**/*.ts`                                                                                                                  | typia API별 generic extraction과 programmer 호출                         |
| generation mode      | `TypiaGenerator.ts`                                                                                                                 | generate/unplugin 계열 지원                                              |

이 중 현재 Go native가 직접 대체하는 것은 type analysis, IR struct, typia runtime
emitter, typia call rewrite path다. TS AST helper와 public composer API는 현재
대체되지 않았다.

## 모듈화 평가

### 잘 된 부분

`metadata`는 가장 재사용 가능성이 높다. `Schema`가 `MetadataSchema`의 bucket
구조를 보존하고, JSON tag가 붙은 Go struct라서 언어 중립 IR로 키우기 쉽다.

`analyzer`는 `MetadataFactory`와 `iterate_metadata_*` 책임을 Go package로 묶었다.
entry point가 `Walk`, `WalkWithTypeNode`, `FromType`로 좁아져 내부 typia backend가
쓰기에는 명료하다.

`emitter`는 typia runtime 생성 책임을 feature별 파일로 나눴다. `is`,
`assert/diagnostic`, `json_schema`, `json_stringify`, `http`, `llm`, `protobuf`,
`random`, `reflect`의 파일 경계는 기존 programmer folder 경계와 대응된다.

`transform/native/ttsc`는 TypeScript checker와 typia API 연결을 담당한다.
`adapter.go` 안의 `UnsupportedReason`, `UnsupportedSchemaReason`은 feature별 unsupported
shape를 빌드 전에 명시하려는 좋은 방향이다.

### 부족한 부분

`packages/core/native/go.mod`의 replace 경로가 `../../ttsc/shim/*`로 되어 있다.
현재 저장소 구조에서는 `packages/ttsc`가 아니라 `../ttsc/packages/ttsc`가 존재하므로
독립 `go test`가 analyzer setup 단계에서 실패한다. 반면
`packages/transform/native/go.mod`는 `../../../../ttsc/packages/ttsc/shim/*`를 가리킨다.
두 모듈의 계약이 이미 어긋난 상태다.

`visit.go`의 call-site 인식은 `typia/lib/`, `typia/src/`,
`packages/typia/src/` 선언 경로만 인정하고, 파일명에 subpath slash가 있으면
버린다. 이 설계는 typia API 탐지에는 충분하지만, nestia나 제3 플러그인의 API를
등록해서 재사용하는 구조는 아니다.

`adapter.go`의 `EmitCall`은 feature registry가 아니라 350라인대 switch다. method
dispatch, create/non-create 여부, wrapper composition, http/protobuf 조합 로직이
한 함수에 모여 있다. typia 내부 기능을 빠르게 연결하기에는 좋지만, 다른
라이브러리가 자기 API를 얹을 extension point는 없다.

`emitter`는 TypeScript AST node가 아니라 JavaScript source string을 반환한다.
이 덕분에 포팅 양은 줄었지만, nestia가 기존에 해오던 AST helper 재사용,
import insertion, SDK code generation과 직접 결합하기는 어렵다.

`metadata.Collection` 주석에도 남아 있듯이 기존 TS `MetadataCollection`의 object
union/recursive index 관리가 아직 완전한 public contract로 정리된 상태는 아니다.
IR 구조는 남았지만, SDK/OpenAPI generator가 기대하는 collection operation
전체가 살아 있는 것은 아니다.

## nestia 재사용성

`../nestia`는 `@typia/core`를 62개 tracked 위치에서 사용한다. import 성격은 대략
다음과 같다.

| 사용 성격                 | 실제 import 예                                                                                |
| ------------------------- | --------------------------------------------------------------------------------------------- |
| transformer context/error | `ITypiaContext`, `ImportProgrammer`, `TransformerError`                                       |
| metadata analysis         | `MetadataFactory`, `JsonMetadataFactory`, `MetadataFactory.Validator`                         |
| metadata IR               | `MetadataSchema`, `MetadataCollection`, `IMetadataDictionary`                                 |
| OpenAPI/schema generation | `JsonSchemasProgrammer`                                                                       |
| HTTP helpers              | `HttpParameterProgrammer`, `HttpQueryProgrammer`, `HttpHeadersProgrammer`                     |
| TS AST factories          | `IdentifierFactory`, `LiteralFactory`, `StatementFactory`, `TypeFactory`, `ExpressionFactory` |

따라서 현재 Go native 코드만으로 nestia를 옮기는 선택지는 성립하지 않는다.
nestia 관점에서 필요한 것은 Go package import가 아니라 Node/TypeScript에서
호출 가능한 호환 표면이다.

가능한 방향은 세 가지다.

1. `@typia/core` 호환 facade를 별도 패키지로 유지하고 내부에서 Go native 분석
   결과를 받는다.
2. `metadata.Schema`를 JSON IR로 고정하고, TS 쪽 SDK/OpenAPI/AST generator는 그
   IR을 소비한다.
3. nestia의 generator까지 Go native로 같이 옮긴다.

현재 구조는 2번의 출발점에 가장 가깝다. `metadata.Schema`는 IR로 쓸 만하지만,
분석 결과를 Node 쪽으로 안정적으로 넘기는 API, schema collection operation,
OpenAPI composer, diagnostic contract는 별도 설계가 필요하다.

## legacy transformer 방향성

기존 TypeScript v5/v6 transformer 를 `ttsc` 가 TypeScript v7 native compiler 안에서
그대로 실행하는 방향은 폐기한다. `typescript-go` 의 공식 API 방향은 in-process
`ts.Program` object graph 제공이 아니라 IPC 기반 curated API 이며, 현재
`ttsc` plugin contract 도 JS-side AST hook 을 제공하지 않는다.

따라서 `ttsc` 의 장기 방향은 다음과 같이 고정한다.

1. TypeScript v7 native lane: Go native backend 또는 serialized IR bridge
2. JS-side plugin: manifest/config, emitted text post-processing, IR client
3. legacy transformer: TS v5/v6 또는 구버전 typia lane

이 방향은 이상적인 호환성보다 실제 compiler boundary를 우선한다.

## 검증 결과

현재 native Go 검증은 통과하지 않는다.

`packages/core/native`:

```text
FAIL github.com/samchon/typia/packages/core/native/analyzer [setup failed]
replacement directory ../../ttsc/shim/ast does not exist
replacement directory ../../ttsc/shim/checker does not exist
replacement directory ../../ttsc/shim/scanner does not exist
```

같은 실행에서 `emitter` 테스트도 실패한다.

```text
TestEmitIsAtomic/number:
got  "\"number\" === typeof input && Number.isFinite(input)"
want "\"number\" === typeof input"

TestEmitIsObject:
expected input-inline fragments,
got helper-hoisted "__is_0(v)" body
```

이는 현재 emitter 구현이 `number`에 `Number.isFinite`를 추가하고 object predicate를
helper로 hoist하도록 바뀌었는데, 테스트 fixture가 이전 기대값에 머물러 있음을
의미한다.

`packages/transform/native`:

```text
--- FAIL: TestAnalyzeOpenApiIJsonSchema
openapi_test.go:45: target call site not found
```

테스트가 찾는 OpenAPI probe fixture가 현재 테스트 트리에 맞지 않는다. 이 상태에서
native transform backend를 독립적으로 검증했다고 말할 수 없다.

## 최종 판정

현재 포팅의 축소는 자연스럽다. 기존 TS 구현은 transformer backend이면서 동시에
public AST toolkit, metadata toolkit, programmer toolkit, OpenAPI/schema composer,
diagnostic contract였다. 현재 Go 구현은 typia native backend에 필요한 type
analysis, IR, runtime JS emit, typia call rewrite만 남긴 구조다. 그래서 라인 수가
약 절반으로 줄었다.

하지만 재사용성 목표까지 포함하면 아직 합격선이 아니다. `core/native`와
`transform/native`가 물리적으로 분리되어 있다는 사실만으로는 모듈화가 완성되지
않는다. 제3 라이브러리가 사용할 안정 API, Node-facing facade, registry 기반
dispatch, 독립 테스트, package contract가 필요하다.

## 필요한 후속 작업

1. `packages/core/native/go.mod`의 shim replace 경로를
   `../../../../ttsc/packages/ttsc/shim/*`로 맞춘다.
2. `packages/core/native`와 `packages/transform/native`에 `go test ./...` CI를
   추가한다.
3. stale emitter fixture를 현재 의도에 맞게 갱신하거나, `Number.isFinite` 및 helper
   hoist가 잘못된 변경이면 emitter를 되돌린다.
4. `openapi_test.go`의 fixture 경로와 target call-site 조건을 현재
   `tests/test-typia-automated` 구조에 맞춘다.
5. `EmitCall` switch를 registry/table 기반으로 쪼개고, typia 외 plugin이 method
   descriptor를 등록할 수 있는 형태로 만든다.
6. `metadata.Schema` JSON IR을 public contract로 고정할지 결정하고, nestia가 쓸
   Node-facing analyzer/schema composer API를 설계한다.
7. `@typia/core`를 제거한 상태에서 nestia가 요구하는 helper surface를 어디로
   이전할지 문서화한다.

위 후속 작업 전까지의 정확한 상태는 다음과 같다.

> typia TypeScript v7 native transform backend로는 구조가 잡혀 있다. 그러나
> nestia/third-party 재사용 가능한 `core`와 `transform` 모듈로는 아직 미완성이다.
