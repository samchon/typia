# 02. Pure TypeScript — 사상의 기술적 의미

> ⚠️ **이 문서의 성격**: typia 공식 문서(`website/src/content/docs/pure.mdx`)의 원문은 "Only one line required, with pure TypeScript type" 한 문장을 강조한다. **아래 "4가지 차원" 분해는 이 wiki 저자(AI)가 코드·문서를 관찰해 재구성한 해석**이지 samchon의 공식 분류는 아니다. 원문 인용은 § "Pure TypeScript 4가지 차원" 끝에 있는 pure.mdx 인용문만 공식이다.

## "Pure TypeScript"의 4가지 차원 (이 wiki의 해석)

이 슬로건은 한 단어처럼 들리지만, 이 wiki는 **4개의 독립적 주장이 겹쳐 있다**고 해석한다. 각각이 별개의 결정을 강제한다.

### 1. 표현의 단일성 — "한 번만 쓴다"

```ts
interface Member {
  id: string & tags.Format<"uuid">;
  email: string & tags.Format<"email">;
  age: number & tags.Type<"uint32"> & tags.Maximum<150>;
}

// 이게 끝. 검증, 직렬화, 스키마, 랜덤 생성이 다 여기서 나온다.
typia.is<Member>(input);
typia.json.stringify<Member>(member);
typia.json.schema<Member>();
typia.random<Member>();
typia.llm.application<MyClass>();
```

대조:
```ts
// Zod
const Member = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  age: z.number().int().min(0).max(150),
});
type Member = z.infer<typeof Member>;
// → Member 사용처: 타입 X, 스키마 Y. 둘이 가장 가까운 형태로 묶여있지만 여전히 둘.
```

차이의 핵심: **`z.infer<typeof Member>`는 한 방향 도출**이다. 스키마에서 타입이 나온다. 그래서 "Pure TypeScript 우선"이 아니라 "스키마 우선 + 타입 보너스"다.

typia는 정확히 그 반대다. **타입에서 모든 것이 나온다**. JSDoc 코멘트와 `tags.*` 브랜드 둘 다 가능한 이유도 여기 있다 — 둘 다 TS 타입 시스템 안에 있는 표현이기 때문이다.

### 2. 컴파일러가 곧 진실 검사관

별도 스키마 정의는 TS 컴파일러가 검증할 수 없다. `z.string().email()`이 진짜 email 검증인지 컴파일러가 알 수 없다 — 그건 라이브러리 내부 약속일 뿐이다. 다른 사용자가 `z.string()` 으로 "email인 것을 잊고" 정의해도 컴파일러는 침묵한다.

typia에서는 그런 일이 불가능하다. `string & tags.Format<"email">` 자체가 타입이고, 사용자가 잘못 쓰면 다른 타입이 되어 컴파일러가 잡는다. **"타입에 거짓말을 할 수 없다"** 가 핵심.

이 사고는 typia에 한정되지 않는다 — TypeScript 자체의 사상("한 곳에서 진실을 말한다")의 자연스러운 확장이다. typia는 "TypeScript의 타입 시스템을 끝까지 믿어라" 라는 입장의 가장 극단적 표명이다.

### 3. 컴파일 시점 = 검증 코드 생성 시점

이는 표현 측면이 아니라 **시간(time) 측면의 단일성**이다.

런타임 라이브러리는 다음과 같이 동작한다:
```
[빌드 시] 사용자 스키마 코드 → tsc → JS
[런타임]  스키마 객체 + 입력 값 → 인터프리터 → 결과
```

typia는:
```
[빌드 시] 사용자 타입 → typia transformer → 전용 검증 함수 (JS 코드 자체)
[런타임]  검증 함수(input) → 결과
```

런타임에서 "스키마"라는 데이터 구조가 **존재하지 않는다**. 함수 자체가 검증이다. 이 차이가 200~20,000× 속도 차이를 만든다 — 인터프리터 오버헤드가 0이고, V8이 monomorphic call site로 인라인할 수 있다.

### 4. 메타데이터 IR을 가진 컴파일러

세 번째 차원에서 한 발 더 나간다. typia는 단순히 "타입에서 코드를 emit"하는 게 아니라, 그 사이에 **자체 IR(intermediate representation)** 을 가진다 — `MetadataSchema` (`packages/core/src/schemas/metadata/MetadataSchema.ts:49-135`).

```
TypeScript Type
   ↓ (MetadataFactory)
MetadataSchema  ← typia의 자체 IR
   ↓ (Programmers)
{ Is, Assert, Validate, JsonStringify, JsonParse, Random, ProtobufEncode, ProtobufDecode, LlmSchema, ... }
```

이 IR이 typia의 진짜 사상적 핵심이다. 한 타입을 한 번 분석하면 모든 산출물이 거기서 나온다. 새 기능 추가는 새 Programmer 작성 = IR을 소비하는 새 코드 생성기 추가다. **타입 분석 비용이 N개 산출물에 분산**된다.

이는 단순한 DRY가 아니라 **컴파일러 설계 사상**이다. typia는 작은 컴파일러 — 자체 IR과 백엔드를 가진 — 라고 말해도 틀리지 않는다.

## "Pure"의 반증 — typia가 포기하지 않은 것들

"Pure"가 어떤 경계에서 멈추는지를 보면 그 경계가 사상의 진짜 모양을 보여준다.

- **Brand 태그(`tags.Format<"email">`)는 비순수 아닌가?** — 아니다. brand는 TS 타입 시스템 내 표현이고, 컴파일 후 사라진다. `string & tags.Format<"email">`은 TS 타입 검사 시 `string`과 같이 취급된다.

- **JSDoc 주석(`@minimum 0`)도 받지 않나?** — 받는다. JSDoc은 TS의 1급 시민이고 typia는 둘 다 지원한다. 어느 쪽을 택할지는 사용자 취향.

- **정말 어려운 타입 (high-order generic, conditional type with infer)도 다 되나?** — 대부분 된다. 단 `T extends Foo ? A : B`처럼 추론 시점에 결정되는 타입은 미지정 generic으로 들어오면 에러 (`iterate_metadata.ts:22-31`). 이는 "Pure TS"가 아니라 "TS의 한계 안에서 Pure".

- **런타임에 emit되는 헬퍼들(`_isFormatEmail`, `TypeGuardError`)은 비순수 아닌가?** — 이들은 emit된 코드의 일부일 뿐이지 사용자가 import하는 코드가 아니다. 사용자 입장에서는 보이지 않는다.

## 사상의 한계 — 정직한 인정

"Pure TypeScript"는 강력하지만 모든 문제를 풀지 않는다.

1. **외부 데이터 모델 표현**: OpenAPI YAML 파일이 이미 있는 경우, "타입에서 시작"의 출발점이 없다. typia는 `@typia/utils`의 `OpenApiConverter`로 역방향(OpenAPI → 타입)을 지원하지만, 이건 사상의 보조 회로다.

2. **공유 스키마 마이그레이션**: 여러 서비스/언어가 한 스키마를 공유할 때, "TS 타입이 진실"은 다른 언어 입장에서는 진실이 아니다. typia는 Protobuf .proto 생성으로 일부 해결하지만, 진짜 다언어 환경(BAML, Pydantic)에는 약한 면이 있다.

3. **런타임 동적 스키마**: 사용자가 만든 동적 타입(폼 빌더 등)에 typia는 적용 불가. **컴파일 타임에 타입이 알려져 있어야 한다**는 전제가 깨지기 때문.

이 세 가지가 zod/valibot이 typia를 완전히 대체할 수 없는 이유이고, 동시에 두 라이브러리가 공존할 수 있는 이유다.

## 정리

이 wiki는 "Pure TypeScript"를 4가지 차원으로 해석한다 (**재확인**: AI 재구성, 공식 아님):
1. 표현 단일성 (스키마 객체 없음)
2. TS 컴파일러가 진실 검사관
3. 컴파일 시점 = 검증 코드 생성 시점
4. 자체 IR (MetadataSchema)을 가진 컴파일러

이 4가지가 모두 합쳐져야 typia다. 어느 하나만 빠져도 "그냥 빠른 검증기"가 된다. typia는 이 4가지를 동시에 지키는 거의 유일한 라이브러리다 (ts-runtime-checks가 1·2·3은 만족하지만 4가 없어 확장이 약하고, Deepkit이 4를 가지지만 1·3을 약화시켜 reflection 모델로 갔다).

→ [03. 설계 원칙](03-design-principles.md) 으로 이어진다.
