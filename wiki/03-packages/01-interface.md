# packages/interface — 공개 타입/스키마 정의 허브

> 위치: `packages/interface/src`
> 책임: 모든 패키지가 의존하는 0-dependency 순수 타입 계층. OpenAPI/JSON Schema/Protobuf/LLM 4개 표준의 모델을 통합 정의.

## 1. 분리 이유

- **순환 의존 차단**: core / transform / mcp / langchain / vercel / utils 6개 패키지가 모두 import만 한다.
- **버전 안정성**: 컴파일 타임 타입만 배포 → 런타임 구현이 바뀌어도 semver 범위 유지 가능.
- **이질 표준 통합**: OpenAPI 3.0/3.1/3.2, JSON Schema, Protobuf, LLM(ChatGPT/Claude/Gemini/Llama) 모델을 한 패키지에서 모두 정의.

## 2. Tags 시스템 (Special Tags)

브랜드 타입으로 컴파일 타임 검증 메타데이터를 임베드.

- `TagBase<IProps>`의 phantom property `"typia.tag"?: Props` (`TagBase.ts:29`) — 런타임 무비용.
- `Format<"email">`, `Pattern<"^[A-Z]{3}$">`, `Type<"uint32">`, `Minimum<0>`, ...
- `validate` 필드의 코드 템플릿(예: `"$importInternal(\"isTypeInt32\")($input)"`)으로 컴파일러가 검증 함수를 emit.
- `exclusive` 필드로 Format-Pattern 등 충돌 방지 (`Format.ts:17`, `Pattern.ts:37`).
- 실측 **~21개 export**: Constant, ContentMediaType, Default, Example, Examples, ExclusiveMinimum, ExclusiveMaximum, Format, JsonSchemaPlugin, Maximum, MaxItems, MaxLength, Minimum, MinItems, MinLength, MultipleOf, Pattern, Sequence, Type, UniqueItems, TagBase (`packages/interface/src/tags/index.ts`). wiki가 자주 언급하는 대표 11개: Format, Pattern, Type, Minimum/Maximum, MinLength/MaxLength, UniqueItems, Default, Example.

JSDoc 태그와의 차이: JSDoc은 문서용이고, Brand 태그는 검증 코드를 실제로 emit한다.

## 3. OpenAPI 모델

4가지 버전 평행 모델링 + 정규화된 Emended 버전 제공:

- `OpenApiV3` (3.0.x): `nullable: true`, `const` 미지원
- `OpenApiV3_1` (3.1.x): JSON Schema draft 2020-12 호환, `type: ["string","null"]`, `prefixItems`
- `SwaggerV2`
- `OpenApi` (Emended): 모든 버전을 정규화 — `$ref` 통일, `allOf` 병합, `nullable` → `oneOf` — typia 내부 처리의 정규형.

## 4. LLM 스키마 모델

`schema/` 하위 — 공용 `ILlmSchema` 하나에 `IConfig.strict`로 프로바이더별 호환 모드.

- `ILlmSchema` (`ILlmSchema.ts:1-473`) — boolean/integer/number/string/array/object/reference/anyOf/null/unknown. `$defs` 맵으로 재귀, `additionalProperties:false` 강제, discriminator 지원.
- `ILlmApplication<Class>` — 클래스 메서드 → 함수 스키마 모음. `functions: ILlmFunction[]`, `__class?: Class`로 원본 타입 보존.
- `ILlmFunction` — `parameters/output/description` + 핵심 메소드 3종:
  - `parse` — 깨진 JSON(주석/따옴표 없는 키/마크다운 펜스 등)을 lenient하게 복구.
  - `coerce` — `"42"`→`42` 같은 이중 문자열화 복구.
  - `validate` — `IValidation` 반환.
- `ILlmStructuredOutput<T>` — 단일 타입용 동일 구조.

## 5. 핵심 인터페이스

| 인터페이스 | 책임 | 위치 |
|---|---|---|
| `IValidation<T>` | discriminated union (success+data / errors) | `IValidation.ts:30` |
| `IResult<T,E>` | 일반 성공/실패 결과 | `IResult.ts:31` |
| `IRandomGenerator` | OpenApi.IJsonSchema 기반 랜덤값 생성 | `IRandomGenerator.ts:11` |
| `IJsonParseResult<T>` | lenient JSON 파싱 결과 (부분 데이터 + errors) | `IJsonParseResult.ts:24` |

## 6. 의존 그래프

```
@typia/interface  (0-dep, 순수 타입)
  ↑
  ├─ @typia/core
  ├─ @typia/transform
  ├─ @typia/mcp
  ├─ @typia/langchain
  ├─ @typia/vercel
  └─ @typia/utils
```

## 7. 주요 export 카테고리

- `schema/` — IValidation, IResult, ILlmApplication, ILlmFunction, ILlmStructuredOutput, ILlmSchema, IJsonSchemaApplication
- `openapi/` — OpenApi (Emended), OpenApiV3, OpenApiV3_1, SwaggerV2
- `tags/` — Format/Pattern/Type/Min·Max/Length/UniqueItems/Default/Example 11종
- `http/` — IHttpLlmApplication, IHttpLlmFunction (OpenAPI → LLM 함수 매핑)
- `metadata/` — IMetadataSchema, IMetadataTypeTag, IJsDocTagInfo (런타임 리플렉션)
- `typings/` — Atomic, Primitive, ProtobufAtomic, CamelCase/PascalCase/SnakeCase
- `utils/` — IRandomGenerator
- `protobuf/` — ProtobufWire (VARIANT/I64/LEN/I32)

## 핵심 통찰

규모 약 8,408 LOC / 60+ 인터페이스. typia의 **계약 표면**이 모두 여기에 모여 있다. 이는 큰 강점이지만 동시에 **의존자가 많은 만큼 변경 비용이 큰 곳** — semver-major bump가 곧 생태계 전체 bump를 의미한다. LLM 스키마 표준이 아직 미성숙(OpenAI strict, Anthropic, Google이 매년 변동)함을 감안하면 `IConfig` 모델의 안정성이 typia LLM 채택의 핵심 변수다.
