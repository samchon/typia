# 04. TS Core → Go 매핑

> typia의 현재 TS 코드를 Go로 이식하는 파일 단위 1:1 대응표.
> 규모 측정 근거: typia core/transform 총 **34,613 LOC / 334 TS 파일** (실측). Go 포팅 시 LOC 2~3배 증가 예상 → **70~100K Go LOC**. 추가로 일부 기능은 tsgo shim으로 대체되어 줄어들 수 있음 (~80K 예상).

## 메타데이터 레이어

| typia TS (현재) | typia-go (제안) | 난이도 |
|---|---|---|
| `packages/interface/src/` (순수 타입) | **유지** — Go 포팅 불필요. npm 그대로 배포 | 0 |
| `packages/core/src/schemas/metadata/MetadataSchema.ts` | `internal/metadata/schema.go` | 중 |
| `…/MetadataObject.ts` + `MetadataObjectType.ts` | `internal/metadata/object.go` | 중 |
| `…/MetadataProperty.ts` | `internal/metadata/property.go` | 낮 |
| `…/MetadataCollection.ts` | `internal/metadata/collection.go` | 중 (recursive 캐시) |
| `…/MetadataAtomic.ts` | `internal/metadata/atomic.go` | 낮 |
| `…/MetadataConstant.ts` | `internal/metadata/constant.go` | 낮 |
| `…/MetadataArray(Type).ts` | `internal/metadata/array.go` | 낮 |
| `…/MetadataTuple(Type).ts` | `internal/metadata/tuple.go` | 낮 |
| `…/MetadataAlias.ts` | `internal/metadata/alias.go` | 낮 |
| `…/MetadataNative.ts` | `internal/metadata/native.go` | 중 |
| `…/MetadataTemplate.ts` | `internal/metadata/template.go` | 중 |
| `…/MetadataMap.ts`, `MetadataSet.ts`, `MetadataFunction.ts` | `internal/metadata/map.go` etc. | 낮 |

총 **~500 LOC TS → ~800 LOC Go** (struct field 선언 늘어남).

## Analyzer 레이어 (MetadataFactory)

| typia TS (현재) | typia-go | 난이도 |
|---|---|---|
| `packages/core/src/factories/MetadataFactory.ts` | `internal/analyzer/factory.go` | 고 |
| `factories/internal/metadata/explore_metadata.ts` | `internal/analyzer/explore.go` | 고 |
| `…/iterate_metadata.ts` | `internal/analyzer/iterate.go` | 고 |
| `…/iterate_metadata_union.ts` | `internal/analyzer/union.go` | 고 |
| `…/iterate_metadata_intersection.ts` (211 LOC!) | `internal/analyzer/intersection.go` | **최고** — 태그 병합 복잡도 |
| `…/iterate_metadata_object.ts` | `internal/analyzer/object.go` | 고 |
| `…/emplace_metadata_object.ts` (225 LOC) | `internal/analyzer/emplace_object.go` | **최고** |
| `…/iterate_metadata_atomic.ts` | `internal/analyzer/atomic.go` | 낮 |
| `…/iterate_metadata_constant.ts` | `internal/analyzer/constant.go` | 낮 |
| `…/iterate_metadata_native.ts` | `internal/analyzer/native.go` | 중 |
| `…/iterate_metadata_array.ts` | `internal/analyzer/array.go` | 중 |
| `…/iterate_metadata_tuple.ts` | `internal/analyzer/tuple.go` | 중 |
| `…/iterate_metadata_collection.ts` | `internal/analyzer/collection.go` | 중 |
| `…/iterate_metadata_sort.ts` | `internal/analyzer/sort.go` | 낮 |
| `…/iterate_metadata_alias.ts` | `internal/analyzer/alias.go` | 낮 |
| `…/iterate_metadata_escape.ts` | `internal/analyzer/escape.go` | 중 |
| `…/iterate_metadata_function.ts` | `internal/analyzer/function.go` | 중 |
| `factories/ExpressionFactory.ts` | `internal/codegen/expr.go` | 중 |
| `factories/JsonMetadataFactory.ts` | `internal/analyzer/json.go` | 중 |
| `factories/StatementFactory.ts` | `internal/codegen/stmt.go` | 중 |
| `factories/TypeFactory.ts` | `internal/analyzer/type.go` | 중 |

총 **~4000 LOC TS → ~8000 LOC Go**.

## Programmer 레이어 (codegen)

| typia TS (현재) | typia-go | 난이도 |
|---|---|---|
| `programmers/IsProgrammer.ts` | `internal/codegen/is.go` | 중 |
| `programmers/AssertProgrammer.ts` | `internal/codegen/assert.go` | 중 |
| `programmers/ValidateProgrammer.ts` | `internal/codegen/validate.go` | 중 |
| `programmers/RandomProgrammer.ts` (~1200 LOC) | `internal/codegen/random.go` | 고 |
| `programmers/ImportProgrammer.ts` | `internal/codegen/import.go` | 중 |
| **programmers/internal/** | | |
| `…/FeatureProgrammer.ts` (602 LOC) | `internal/codegen/feature.go` | 고 |
| `…/CheckerProgrammer.ts` (**1614 LOC**) | `internal/codegen/checker.go` — **분리 필요** | **최고** |
| **programmers/helpers/** | | |
| `…/FunctionProgrammer.ts` | `internal/codegen/func.go` | 중 |
| `…/UnionExplorer.ts` (discriminator) | `internal/codegen/union_explorer.go` | 고 |
| `…/UnionPredicator.ts` | `internal/codegen/union_pred.go` | 중 |
| `…/AtomicPredicator.ts` | `internal/codegen/atomic_pred.go` | 중 |
| `…/OptionPredicator.ts` | `internal/codegen/option_pred.go` | 중 |
| `…/StringifyJoinder.ts` | `internal/codegen/stringify_joinder.go` | 중 |
| `…/StringifyPredicator.ts` | `internal/codegen/stringify_pred.go` | 중 |
| **programmers/json/** | | |
| `JsonStringifyProgrammer.ts` (**1129 LOC**) | `internal/codegen/json_stringify.go` | **최고** |
| `JsonApplicationProgrammer.ts` | `internal/codegen/json_application.go` | 고 |
| `JsonSchemaProgrammer.ts` | `internal/codegen/json_schema.go` | 고 |
| **programmers/protobuf/** | | |
| `ProtobufEncodeProgrammer.ts` | `internal/codegen/protobuf_encode.go` | 고 |
| `ProtobufDecodeProgrammer.ts` | `internal/codegen/protobuf_decode.go` | 고 |
| `ProtobufMessageProgrammer.ts` | `internal/codegen/protobuf_message.go` | 중 |
| **programmers/llm/** | | |
| `LlmSchemaProgrammer.ts` | `internal/codegen/llm_schema.go` | 고 |
| `LlmApplicationProgrammer.ts` | `internal/codegen/llm_application.go` | 고 |
| `LlmParametersProgrammer.ts` | `internal/codegen/llm_parameters.go` | 중 |

총 **~15000 LOC TS → ~35000 LOC Go**. 가장 큰 덩어리.

## Context / Transform 레이어

| typia TS | typia-go | 메모 |
|---|---|---|
| `packages/transform/src/transform.ts` | `cmd/typia/build.go` | entry. tsgo submodule 직접 호출 |
| `FileTransformer.ts` | `internal/rewrite/file.go` | AST 순회 |
| `CallExpressionTransformer.ts` | `internal/rewrite/typia_call.go` | typia.* 감지 + dispatch |
| `features/*.ts` (15개) | `internal/codegen/feature_*.go` | 각 typia API 핸들러 |

## tsgo shim 레이어 (신규)

참고: [02-prior-art/06-tsgolint.md](../04-ttsc-design/02-prior-art/06-tsgolint.md) 15 shim.

| shim 패키지 | 책임 | 예상 LOC |
|---|---|---|
| `shim/ast` | AST 헬퍼, Node 종류 | ~500 |
| `shim/checker` | TypeChecker 메소드 350+ linkname | ~1500 |
| `shim/compiler` | Program 생성, emit | ~400 |
| `shim/core` | CompilerOptions, TextRange | ~300 |
| `shim/parser` | ParseSourceFile | ~200 |
| `shim/scanner` | line/column, tokens | ~200 |
| `shim/tsoptions` | tsconfig 파싱 | ~300 |
| `shim/tspath` | 경로 정규화 | ~200 |
| `shim/vfs/*` | 가상 FS | ~400 |
| `shim/bundled` | lib.d.ts | ~150 |

총 **~4000 LOC shim** (대부분 자동 생성).

## 정리

| 레이어 | TS LOC | Go LOC | 파일 수 |
|---|---|---|---|
| metadata 스키마 | ~500 | ~800 | 12 |
| analyzer | ~4,000 | ~8,000 | 18 |
| codegen / programmer | ~15,000 | ~35,000 | 30 |
| transform / rewrite | ~4,000 | ~6,000 | 10 |
| utils / runtime helpers | ~2,000 | ~3,000 | 15 |
| shim (신규) | 0 | ~4,000 | 13 |
| cmd / cli | ~500 | ~3,000 | 15 |
| tests | ~10,000 | ~15,000 | 100 |

**총 예상: ~75~100K LOC Go**. 참고: tsgonest 72K LOC (4/13 namespace).

## 개발 가이드라인

### 1. 순서
metadata → analyzer → codegen 순으로 하단부터 상향. 각 계층 테스트 통과 후 다음으로.

### 2. 기존 TS 코드 참조
typia core TS 코드를 **1:1 한 줄씩 Go로 옮기는 작업** — 순수 번역 형태. AI 도구(Claude, Copilot)가 생산성 극대화.

### 3. 테스트 재사용
typia의 `tests/test-typia-automated`는 typia-go에도 동일 input으로 실행. emit JS 출력이 동등한지 byte-level diff 비교.

### 4. 중간 산출물
- v0.1: metadata 스키마 + 단순 타입(string/number) validate만
- v0.3: 전체 primitive + 단순 object
- v0.5: union/intersection + generic
- v0.7: 전체 validator + json
- v0.9: llm + protobuf
- v1.0: 전 기능 + 벤치 통과

## 한 줄 요약

> **TS 34K LOC → Go ~80K LOC. 단순 번역이 아닌 "Go 관용구로 재작성"이나, AI 페어링으로 1년~1.5년 현실적.**
