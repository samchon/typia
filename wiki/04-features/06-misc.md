# 06. Miscellaneous — clone / prune / literals / notations / http / reflect

## misc

| 함수 | 설명 |
|---|---|
| `typia.misc.clone<T>(input)` | 깊은 복사. 타입 구조 알기 때문에 일반 deepClone보다 빠름 |
| `typia.misc.prune<T>(input)` | 타입에 정의되지 않은 추가 속성 제거 (in-place) |
| `typia.misc.literals<T>()` | union literal type → array of literal values |

### literals 예
```ts
type Status = "pending" | "active" | "archived";
const all = typia.misc.literals<Status>();
// → ["pending", "active", "archived"]
```

타입에서 enum-like value list 추출 — switch exhaustiveness, DB enum과 동기화 등에 유용.

## notations

```ts
typia.notations.camel<T>()   // snake_case / PascalCase → camelCase
typia.notations.pascal<T>()
typia.notations.snake<T>()
```

타입의 **모든 키 네이밍 컨벤션 변환**. 객체 자체뿐 아니라 nested까지.

활용:
- 외부 API의 snake_case 응답 → 내부 camelCase 변환
- TypeScript camelCase → DB snake_case 직렬화

## http

`typia.http.*` (`packages/typia/src/http.ts`):

| 함수 | 변환 대상 |
|---|---|
| `typia.http.formData<T>(formData)` | FormData → 객체 |
| `typia.http.queryObject<T>(query)` | query string → 객체 |
| `typia.http.headers<T>(headers)` | Headers → 객체 |
| `typia.http.parameter<T>(value)` | URL param 단일 값 |

각 변환은 string-only 입력을 타입에 맞게 coerce + 검증. NestJS/Hono/Express 통합 시 유용.

### 예
```ts
interface Query { page: number; sort?: "asc" | "desc"; }

const q = typia.http.queryObject<Query>(req.query);
// req.query = { page: "1", sort: "asc" }
//          → { page: 1, sort: "asc" }
```

## reflect

| 함수 | 설명 |
|---|---|
| `typia.reflect.schema<T>()` | 타입의 raw MetadataSchema 반환 |
| `typia.reflect.name<T>()` | 타입 이름 string 추출 |

런타임에 typia의 IR을 직접 본다 — 디버깅/메타프로그래밍용.

## functional

| 함수 | 설명 |
|---|---|
| `typia.functional.assertFunction<F>(fn)` | 함수 wrap, 인자/반환 검증 |
| `typia.functional.assertParameters<F>(fn)` | 인자만 검증 |
| `typia.functional.assertReturn<F>(fn)` | 반환만 검증 |
| `typia.functional.isFunction<F>(fn)` / ... | boolean 변형 |

함수 자체에 type guard를 입혀 invariant 보장:
```ts
const safe = typia.functional.assertFunction(<T>(x: T) => x.toString());
safe(42);   // ok
safe(null); // throws (T가 not nullable이라면)
```

## 사용 시나리오 매트릭스

| 상황 | 권장 함수 |
|---|---|
| API 입력 검증 | `assert<T>` 또는 `validate<T>` |
| API 응답 직렬화 | `json.assertStringify<T>` |
| LLM tool 노출 | `llm.application<Class>()` |
| OpenAPI 스키마 발행 | `json.schema<T>()` |
| 폼 query 파싱 | `http.queryObject<T>()` |
| 테스트 데이터 | `random<T>()` |
| union 값 list | `misc.literals<T>()` |
| naming convention 변환 | `notations.camel<T>()` |
| 객체 깊은 복사 | `misc.clone<T>()` |
| extra property 제거 | `misc.prune<T>()` |
| WebSocket binary | `protobuf.encode/decode<T>()` |
| 함수 invariant | `functional.assertFunction(fn)` |

→ 한 라이브러리에서 거의 모든 직렬화/검증/스키마 사용 사례를 커버.
