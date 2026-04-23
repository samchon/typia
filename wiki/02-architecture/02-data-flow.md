# 02. 데이터 플로우 — 한 호출이 코드가 되기까지

`typia.is<Member>(input)` 호출이 emit된 검증 코드가 되기까지의 전 과정을 단계별로 따라간다.

## 단계 0. 사용자 입력

```ts
interface Member {
  id: string & tags.Format<"uuid">;
  email: string & tags.Format<"email">;
  age: number & tags.Type<"uint32"> & tags.Maximum<150>;
}

const ok = typia.is<Member>(input);
```

## 단계 1. ttsc host / unplugin이 typia transformer를 호출

`packages/transform/src/transform.ts:41-68` — `transform(program, options, extras)` 는 현재 `typia/lib/ttsc/plugin` 과 `@typia/unplugin` 이 공통으로 소비하는 TransformerFactory 진입점이다. 호출되면 strict 옵션 검증 후 TransformerFactory를 반환한다. legacy `ts-patch` 경로도 이 시그니처를 reuse할 수 있지만, 현행 기본 계약은 아니다.

## 단계 2. FileTransformer가 SourceFile 순회

`packages/transform/src/FileTransformer.ts:18-58`:

- 각 SourceFile에 대해 `ts.visitEachChild` 깊이 우선 탐색
- CallExpression을 만나면 `iterate_node` → `NodeTransformer` 위임
- 변환에 실패하면 try/catch로 `addDiagnostic`

## 단계 3. CallExpressionTransformer가 typia.* 식별

`packages/transform/src/CallExpressionTransformer.ts:145-162`:

```
expression = typia.is<Member>(input)
  ↓
checker.getResolvedSignature(expression)?.declaration
  ↓
declaration의 파일 경로 = "typia/lib/module.d.ts"
  ↓
isTarget("typia/lib/module.d.ts") → true
  ↓
methodName = "is", module = "module"
  ↓
FUNCTORS["module"]["is"]() → IsTransformer.transform({ equals: false })
```

여기서 중요한 점 두 가지:
- **타입 모양이 아니라 선언 파일 경로**로 식별 (P4 원칙)
- FUNCTORS는 2단계 객체 맵 (`module`/`functional`/`http`/`llm`/`json`/`protobuf`/`reflect`/`misc`/`notations`) × 메소드명

## 단계 4. GenericTransformer가 type argument 추출

`packages/transform/src/internal/GenericTransformer.ts:13-61` (scalar 패턴):

```ts
GenericTransformer.scalar({
  context, modulo, expression,
  method: "is",
  write: ({ context, modulo, type, name }) => IsProgrammer.write({...}),
})
```

- `expression.typeArguments[0]` 또는 `expression.arguments[0]`에서 type 추출
- `props.write()` 호출 — core의 IsProgrammer로 위임

## 단계 5. MetadataFactory가 ts.Type → MetadataSchema

`packages/core/src/factories/MetadataFactory.ts:120-166`:

```
analyze(type)
  ├─ explore_metadata()                    # 진입
  │   └─ iterate_metadata()
  │       ├─ iterate_metadata_alias        # Member 알리아스 탐지
  │       ├─ iterate_metadata_intersection # string & Format<"uuid"> 처리
  │       │   → atomic{string} + tag{Format:"uuid"}
  │       ├─ iterate_metadata_object       # Member 객체 분석
  │       │   └─ emplace_metadata_object   # properties = [id, email, age]
  │       └─ ...
  ├─ iterate_metadata_collection           # recursive 표시
  └─ iterate_metadata_sort                 # 의존도 정렬
```

결과 (의사 표현):
```js
MetadataSchema {
  objects: [{
    name: "Member",
    properties: [
      { key: "id", value: { atomics: [string], tags: [Format:"uuid"] } },
      { key: "email", value: { atomics: [string], tags: [Format:"email"] } },
      { key: "age", value: { atomics: [number], tags: [Type:"uint32", Maximum:150] } },
    ],
  }],
}
```

이 IR이 typia의 진짜 표준이다. `MetadataCollection` 캐시가 같은 Type 재방문 시 캐시 히트 (P6).

## 단계 6. IsProgrammer가 검증 코드 생성

`packages/core/src/programmers/IsProgrammer.ts:31-94`:

```
IsProgrammer.write(props)
  ↓
CheckerProgrammer.write(props, config)        # 공통 검증 골조
  ├─ FeatureProgrammer.decompose              # functions/statements/arrow 분해
  ├─ UnionExplorer (필요 시)                  # discriminator 분기
  ├─ AtomicPredicator → atomist               # atomic 단위 검증
  ├─ combiner (AND/OR)                        # 결합기
  └─ ts.factory.createArrowFunction
```

생성되는 AST의 의사 표현:
```ts
(input) => {
  return "object" === typeof input && null !== input
    && "string" === typeof input.id  && _isFormatUuid(input.id)
    && "string" === typeof input.email && _isFormatEmail(input.email)
    && "number" === typeof input.age && Number.isInteger(input.age)
        && input.age >= 0 && input.age <= 150
    ;
}
```

## 단계 7. ImportProgrammer가 헬퍼 import 수집

`packages/core/src/programmers/ImportProgrammer.ts:14-45`:

검증 코드가 부르는 `_isFormatUuid`, `_isFormatEmail`은 typia 내부 헬퍼다. ImportProgrammer가:
```
context.importer.internal("isFormatUuid")
context.importer.internal("isFormatEmail")
```
호출을 누적해 두고, 마지막에 한꺼번에 emit.

## 단계 8. FileTransformer가 import + 변환된 AST 합성

`packages/transform/src/FileTransformer.ts:44-49`:

- 모든 노드 변환 후 `importer.toStatements()`로 import 문 합성
- "use strict" 다음 위치에 import 주입
- 원본 typia.is<Member>(input) 자리에 단계 6의 ArrowFunction을 즉시호출(IIFE) 형태로 주입

## 단계 9. 최종 emit

```js
"use strict";
import { isFormatUuid as typia_transform_isFormatUuid } from "typia/lib/internal/_isFormatUuid.js";
import { isFormatEmail as typia_transform_isFormatEmail } from "typia/lib/internal/_isFormatEmail.js";
// ...

const ok = ((input) => {
  return "object" === typeof input && null !== input
    && "string" === typeof input.id && typia_transform_isFormatUuid(input.id)
    // ...
})(input);
```

런타임에 typia 라이브러리가 import되지 않는다 — 이 함수와 헬퍼들만 남는다.

## 데이터 플로우의 핵심 통찰

| 단계 | 데이터 형태 | 사상적 위치 |
|---|---|---|
| 0 | TypeScript 타입 | "Pure TypeScript" 출발 |
| 1~4 | TS AST + ts.Type | TS Compiler API 의존 표면 |
| **5** | **MetadataSchema (typia IR)** | **타입 시스템 무관한 자체 IR** |
| 6~7 | TS AST (생성된) | TS Compiler API 의존 표면 |
| 8~9 | 사용자 코드 | "0 외부 런타임 의존" 도착 |

**TS Compiler API에 묶여 있는 것은 1~4와 6~7뿐**. 5번이 자체 IR이라는 건 IR 위쪽을 다른 언어/컴파일러로 옮길 수 있다는 뜻 — tsgo 대응 시 이 분리가 결정적.

→ 다음 [03. 패키지 의존 그래프](03-package-graph.md)
