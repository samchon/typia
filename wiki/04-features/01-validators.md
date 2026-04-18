# 01. Runtime Validators — is / assert / validate / equals

## 4종 검증 함수의 정확한 차이

| 함수 | 반환 | 실패 동작 | extra prop |
|---|---|---|---|
| `is<T>(input)` | `boolean` | 그냥 false | 허용 |
| `assert<T>(input)` | `T` | `TypeGuardError` throw | 허용 |
| `assertGuard<T>(input)` | `void` (asserts) | `TypeGuardError` throw | 허용 |
| `validate<T>(input)` | `IValidation<T>` | `errors` 배열 반환 | 허용 |
| `equals<T>(input)` | `boolean` | false | **거부** |
| `assertEquals<T>(input)` | `T` | `TypeGuardError` | **거부** |
| `validateEquals<T>(input)` | `IValidation<T>` | errors 반환 | **거부** |

3축의 조합이 곧 7개 함수:
- 결과 형태: boolean / throw / detailed
- 추가 속성: 허용 / 거부

## Programmer 매핑

| 함수 | 담당 Programmer | 반환 코드 형태 |
|---|---|---|
| `is`, `equals` | `IsProgrammer` | `(input) => boolean` |
| `assert*` | `AssertProgrammer` | `(input) => T (or throw)` |
| `validate*` | `ValidateProgrammer` | `(input) => IValidation<T>` |

`equals` 계열은 같은 Programmer를 `equals: true` 옵션으로 호출 — extra property를 검증 코드에 포함.

## Factory 변형

`createIs<T>`, `createAssert<T>` 등은 호출 시점이 아니라 **함수 자체를 반환**한다 — 인자에 type만 주고 입력은 나중에. 사용처:
```ts
const validate = typia.createValidate<Member>();
array.map(validate); // 함수 인스턴스가 곧 핫패스
```

이는 `GenericTransformer.factory` 패턴 (`packages/transform/src/internal/GenericTransformer.ts:63-89`).

## 검증 코드의 모양 (`is` 예)

```ts
typia.is<Member>(input)
```
↓
```js
((input) => {
  return "object" === typeof input && null !== input
    && "string" === typeof input.id  && _isFormatUuid(input.id)
    && "string" === typeof input.email && _isFormatEmail(input.email)
    && "number" === typeof input.age && Number.isInteger(input.age)
        && input.age >= 0 && input.age <= 150;
})(input);
```

- 모든 분기가 **inline**, 외부 인터프리터 호출 없음
- V8이 monomorphic call site로 인라인 최적화 → hidden class 안정
- format 검증만 외부 헬퍼(`_isFormatUuid`)인 이유: regex가 큼

## `assert`의 에러 path 합성

`AssertProgrammer.ts:56-84`의 `create_guard_call`:

컴파일 타임에 path 문자열을 직접 합성한다.
```js
if ("string" !== typeof input.user.address[0].zipCode)
  throw new TypeGuardError({
    method: "typia.assert",
    path: "$input.user.address[0].zipCode",
    expected: "string",
    value: input.user.address[0].zipCode,
  });
```

**런타임 reflection 없이 정확한 경로**가 나오는 이유: 코드 emit 시점에 typia가 객체 트리를 **이미 알고 있다**.

## `validate`의 누적 모델

`ValidateProgrammer`는 throw하지 않고 모든 실패를 누적:
```ts
{
  success: false,
  errors: [
    { path: "$input.id", expected: "string & Format<\"uuid\">", value: 42 },
    { path: "$input.age", expected: "number & Maximum<150>", value: 200 },
  ],
  data: input, // 실패 시도 원본 보존
}
```

→ 폼 검증, API 입력 검증에 가장 적합.

## Tags 시스템 — `string & tags.Format<"email">`

브랜드 타입으로 검증 메타데이터를 임베드. `packages/interface/src/tags/`.

### 대표 태그 (실측 ~21개 export, 자주 쓰는 11개만)

> 실제 `@typia/interface/src/tags/index.ts` export 수는 ~21개 (Constant, ContentMediaType, Default, Example, Examples, ExclusiveMin/Max, Format, JsonSchemaPlugin, Maximum, MaxItems, MaxLength, Minimum, MinItems, MinLength, MultipleOf, Pattern, Sequence, Type, UniqueItems, TagBase). 아래는 자주 쓰는 11개:

| 태그 | 예 | 적용 가능 타입 |
|---|---|---|
| `Format<V>` | `"email" | "uuid" | "ipv4" | "ipv6" | "uri" | "date" | "date-time" | ...` | string |
| `Pattern<V>` | `"^[A-Z]{3}$"` | string |
| `Type<V>` | `"int32" | "uint64" | "float"` | number / bigint |
| `Minimum<V>`, `Maximum<V>`, `ExclusiveMinimum<V>`, `ExclusiveMaximum<V>` | `0` | number / bigint |
| `MultipleOf<V>` | `0.5` | number |
| `MinLength<V>`, `MaxLength<V>` | `8` | string |
| `MinItems<V>`, `MaxItems<V>` | `1` | array |
| `UniqueItems` | — | array |
| `Default<V>` | `"foo"` | any |
| `Example<V>` | `42` | any |

### Phantom property

`packages/interface/src/tags/TagBase.ts:29`:
```ts
interface TagBase<Props> {
  "typia.tag"?: Props;
}
```
→ 런타임 비용 0. 타입 시스템에만 존재.

### 충돌 방지

`exclusive` 필드로 `Format`과 `Pattern` 동시 사용 금지 등 강제 (`Format.ts:17`).

### JSDoc 대안

같은 의미를 JSDoc 주석으로도 표현 가능:
```ts
interface Member {
  /** @format email */
  email: string;
  /** @minimum 0 @maximum 150 @type uint32 */
  age: number;
}
```

JSDoc과 brand 둘 다 같은 메타데이터로 수렴. 사용자 취향대로.

## 함수형 모듈

`typia.functional.assertParameters<Func>(func)` 등 (`packages/typia/src/functional.ts`).

함수 자체를 받아 파라미터/리턴 검증을 자동 wrap:
```ts
const safeFunc = typia.functional.assertFunction(<T>(x: T) => x + 1);
safeFunc(42);    // ok
safeFunc("a");   // TypeGuardError
```

`FunctionalGenericTransformer.ts:23-54`가 함수 선언을 분석해 파라미터/리턴 두 곳에 검증 emit.

## 성능 (벤치마크)

i9-13900HX, v5.3.4:
- 단순 객체 270K MB/s vs typebox 256K
- 재귀 구조 20K
- union 4K+
- **에러 경로** 782 vs typebox 35, zod 109 (압도적)

→ "성공/실패 모두 빠르다"가 typia만의 경쟁점.

## 약점

- **결과 객체 GC 비용**: validate가 errors 배열을 만든다 → 핫패스에서 자주 호출되면 부담. 권장: 핫패스에서는 is, 에러 응답 시점에서만 validate.
- **에러 메시지 i18n 부재**: 메시지 영문 고정. 사용자 i18n 레이어를 별도로 둬야 함.
- **format 확장 어려움**: 사용자 정의 Format 추가는 컴파일러 패치 필요. (대안: brand 타입 + 검증 함수 직접 작성)
