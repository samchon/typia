# 02. Enhanced JSON — schema / parse / stringify

## 4종 함수

| 함수 | 입력 | 출력 | 사용처 |
|---|---|---|---|
| `typia.json.schema<T>()` | type | `IJsonSchemaUnit<T>` | OpenAPI/JSON Schema |
| `typia.json.application<Class>()` | class | `IJsonApplication` | NestJS DTO 등 |
| `typia.json.parse<T>(str)` | JSON 문자열 | T | type-safe parser |
| `typia.json.stringify<T>(value)` | T | string | fast serializer |
| `typia.json.assertParse<T>(str)` | string | T (or throw) | parse + 검증 |
| `typia.json.assertStringify<T>(value)` | T | string | 검증 후 직렬화 |

## stringify의 200× 비밀 — 인라인 JSON 합성

`packages/core/src/programmers/json/JsonStringifyProgrammer.ts` (1129 LOC).

`JsonStringifyProgrammer`는 객체 구조를 알기 때문에 **JSON 문자열을 컴파일 타임에 부분 합성**한다.

### 예
타입:
```ts
interface Point { x: number; y: number; }
```

생성 코드 (의사):
```js
const stringify = (input) => {
  return `{"x":${input.x},"y":${input.y}}`;
};
```

`JSON.stringify(input)`은 객체를 reflection으로 순회하지만, typia는 키 이름과 구조를 컴파일 타임에 알고 있어 **template literal로 합성**한다 — V8 최적화도 더 잘 받는다.

### StringifyJoinder 패턴

`packages/core/src/programmers/helpers/StringifyJoinder.ts:10-113`:

- 상수 부분 (`"x":`, `,"y":`) 은 그대로 문자열 리터럴로 박힘
- 동적 부분 (`${input.x}`) 만 런타임 평가
- 마지막 콤마 제거 분기 — `jsonStringifyTail()` 호출 여부

### 특수 케이스 처리

- `string` 값 → escape 필요. `StringifyPredicator`가 escape 필요성을 판별해 빠른 경로/안전 경로 분기.
- `null/undefined` → property 생략 vs `null` 판별
- `Date` → toISOString() emit
- 옵션 `optional` → 값 존재 시만 emit

## parse — type-safe JSON parser

`typia.json.parse<T>(str)`는 `JSON.parse(str) as T`보다 **검증을 동반**한다 (assertParse 계열).

생성 코드:
```js
const parse = (input) => {
  const parsed = JSON.parse(input);
  // parsed에 대한 typia.assert<T>(parsed) 동등 검증
  return parsed;
};
```

`JSON.parse` 자체는 손대지 않고 결과에 검증을 추가. 빠른 path는 V8 native parse 그대로.

## json.schema — OpenAPI/JSON Schema 생성

```ts
const schema = typia.json.schema<Member>();
// → IJsonSchemaUnit { schema, components, ... }
```

`JsonSchemaProgrammer`가 MetadataSchema를 OpenAPI 표현으로 변환. `@typia/interface/openapi/`의 4가지 OpenAPI 모델을 모두 지원:
- `OpenApiV3` (3.0.x)
- `OpenApiV3_1` (3.1.x, draft 2020-12)
- `SwaggerV2`
- `OpenApi` (Emended) — 정규화 형태

`@typia/utils`의 `OpenApiConverter`가 변환 담당.

### 한 타입에서 여러 표준이 동시에 나오는 이유

같은 MetadataSchema에서 표준별 변환만 다르다. P8 원칙(한 타입에서 N개 표준 동시 도출).

## application — NestJS/Swagger 통합용

`typia.json.application<Class>()`는 클래스의 **모든 메소드 시그니처**를 한 번에 추출.

```ts
class UserController {
  getUser(id: string): IUser;
  createUser(body: ICreateBody): IUser;
}

const app = typia.json.application<UserController>();
// → 모든 메소드의 입력/출력 스키마가 한 객체로
```

NestJS + nestia의 `@TypedRoute`가 이 위에서 동작.

## 약점

- **stringify는 BigInt 미지원** (JSON 표준 자체가 미지원)
- **순환 참조 감지 안 함** — 사용자 책임
- **JSON Schema 출력의 OpenAPI 3.2 미지원** (3.1까지)
- **Custom serializer 확장 어려움** — Date 처리 등 변경하려면 transformer 패치

## 성능 비교 (벤치마크)

| 라이브러리 | stringify (MB/s) |
|---|---|
| **typia** | **2,045** |
| fast-json-stringify | 688 |
| JSON.stringify | 124 |

→ JSON.stringify 대비 **16×**, fast-json-stringify 대비 **3×**.
