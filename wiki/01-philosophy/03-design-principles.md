# 03. 설계 원칙 — 8가지 코드 패턴 (wiki의 귀납)

> ⚠️ **이 문서의 성격**: 아래 P1~P8은 **이 wiki 저자(AI)가 typia 코드베이스를 관찰해 귀납한 패턴**이다. samchon이 명시한 공식 원칙이 아니며, "typia 개발 규칙서"도 아니다. "이 코드가 왜 이렇게 생겼는가"를 외부 관점에서 재구성한 post-hoc 서술이며, samchon의 의도와 다를 수 있다.
>
> **참고 가치**: 새 기능을 추가할 때 기존 코드 스타일과 충돌을 피하는 체크리스트, 또는 외부 기여자가 typia 설계 철학을 빠르게 파악하는 도구. **공식 문서 대체 아님**.

[02-pure-typescript.md](02-pure-typescript.md)의 4중 해석은 코드 차원에서 다음 8가지 패턴으로 귀납된다고 이 wiki는 본다.

## P1. 메타데이터 IR을 모든 기능의 입력으로 삼는다

`packages/core/src/schemas/metadata/MetadataSchema.ts` (전체 701 LOC; IR 프로퍼티 선언은 `:50-69`, 전체 클래스 `:49-901`)가 typia의 진짜 표준이다. 모든 Programmer는 `MetadataSchema`를 입력으로 받는다.

```
Type → MetadataFactory → MetadataSchema → { Is, Assert, Validate, JsonStringify, ..., LlmSchema }
```

- 새 기능 = 새 Programmer = MetadataSchema의 새 사용자.
- IR이 곧 **확장점**.

**위반 시 비용**: 새 기능이 직접 TypeScript Type을 보면, MetadataFactory가 처리한 union/intersection/recursive 처리, 캐싱, 알리아스 추적을 다시 구현해야 한다. typia 안에서 이 함정에 빠진 코드는 거의 없다.

## P2. Programmer 패턴 — 모든 기능을 같은 모양으로 정렬

모든 Programmer는 다음 시그니처로 통일된다:

```ts
namespace XxxProgrammer {
  export const write = (props: IProgrammerProps): ts.ArrowFunction;
  export const decompose = (...): { functions, statements, arrow };
}
```

이는 단순한 코드 컨벤션이 아니라 **확장 가능성의 약속**이다. 새 기능을 만들 때 어떤 인터페이스를 따르면 되는지가 명확하다.

`@typia/transform`의 `GenericTransformer.scalar/factory`가 이 인터페이스 위에서 동작 — `props.write()`를 부르면 끝이다.

## P3. AST 생성은 ts.factory만 사용

`packages/core` 전체에서 `ts.factory.createIdentifier`, `ts.factory.createCallExpression`, `ts.factory.createIfStatement` 등 public factory만 사용한다. 직접 `{ kind: ts.SyntaxKind.Identifier, ... }` 형태로 노드를 만들지 않는다.

`ts-expose-internals`를 devDependency로 선언해 두지만 실제 사용은 거의 없다 — 대부분 type용. 이는 **TypeScript 호환성 표면을 최소화**하는 가장 중요한 자산이다 (→ tsgo 대응 시 결정적).

## P4. 모듈 식별은 import 경로로

`CallExpressionTransformer.ts:145-151`은 호출이 typia.is인지 판별할 때 **타입 모양이 아니라 선언이 위치한 파일 경로**(`typia/lib/*.d.ts`, `typia/src/*.ts`)를 본다.

→ TypeScript의 internal type representation이 바뀌어도 typia는 멈추지 않는다.

## P5. 어댑터는 얇게 — 결합 비용을 의존성 경계로 흡수

`packages/transform`은 `@typia/core` 위에 얹은 얇은 어댑터다. 라우팅·import 관리·diagnostic만 담당하고 코드 생성은 모두 core가 한다.

LLM 통합(mcp/langchain/vercel)도 같은 패턴: ILlmController/ILlmFunction라는 단일 IR을 각 SDK의 Tool 타입으로 매핑하는 ~150 LOC 함수가 전부.

→ **외부 API 변동의 영향이 한 파일에 갇힌다**.

## P6. 타입 정보는 한 번만 분석

`MetadataCollection`이 `ts.Type → MetadataObjectType` 1:1 캐시를 한다. 같은 타입을 두 번째 만나면 캐시 히트.

→ 재귀 타입, 공유 타입의 무한 루프와 메모리 폭발 모두 한 메커니즘으로 해결.

## P7. 에러 경로는 컴파일 타임에 결정

런타임 reflection 라이브러리는 검증 실패 시 **객체를 거꾸로 추적**해 path를 만든다. typia는 컴파일 타임에 emit하는 코드 자체에 path 문자열을 인라인한다:

```js
if ("string" !== typeof input.user.address[0].zipCode)
  errors.push({ path: "$input.user.address[0].zipCode", expected: "string", value: input.user.address[0].zipCode });
```

`AssertProgrammer.ts:56-84`의 `create_guard_call`이 이 경로 문자열을 컴파일 타임에 합성한다.

→ 에러 메시지가 정확하면서 런타임 비용 0.

## P8. 한 타입에서 N개 표준이 동시에 도출

`packages/interface`가 OpenAPI v3.0 / v3.1 / SwaggerV2와 **Emended OpenApi(정규화 버전)** 를 모두 들고 있는 이유다. 사용자가 어떤 표준 버전을 원하든 같은 메타데이터에서 변환만 하면 된다.

LLM 스키마(`ILlmSchema`)도 같은 사상 — 공통 모델 + `IConfig.strict`로 OpenAI/Anthropic/Google 호환 모드 분기.

## 위 8가지를 깨면 무엇이 깨지는가

| 원칙 위반 | 발생할 위험 |
|---|---|
| P1 직접 Type 분석 | union/intersection/recursive 처리 중복 → 미묘한 버그 |
| P2 Programmer 시그니처 일탈 | 새 기능을 transformer가 호출 못 함 |
| P3 ts.* internal 사용 | TS 마이너 업그레이드마다 깨짐, **tsgo에서 0% 가능성** |
| P4 타입 모양으로 식별 | TS의 type narrowing 변경 시 잘못된 식별 |
| P5 어댑터에 비즈니스 로직 | 외부 SDK 의존이 도메인까지 침투 |
| P6 캐시 우회 | recursive 타입 무한 루프 |
| P7 런타임 path 합성 | 메시지 정확도 ↓ + 런타임 비용 ↑ |
| P8 표준별 별도 IR | OpenAPI 3.2가 나오면 기능마다 따로 패치 |

→ 이 8가지는 **typia가 외부 변동(TS, LLM SDK, OpenAPI 표준)에 대해 가진 면역계**다. 사상 자체가 면역계의 설계 원리다.

## 사상이 잘 지켜진 부분 / 미흡한 부분 (간단한 자기진단)

| 영역 | 사상 일치도 | 비고 |
|---|---|---|
| MetadataSchema와 Programmer 패턴 | ★★★★★ | 사상의 가장 깨끗한 구현 |
| transformer 어댑터 분리 | ★★★★★ | core/transform 책임 분리 모범 |
| LLM 통합 어댑터들 | ★★★★ | 패턴 일관, 추후 base class 추출 여지 |
| public TS API만 사용 | ★★★★★ | tsgo 대응의 핵심 자산 |
| 캐싱·재귀 처리 | ★★★★ | 견고하나 algorithm 주석 부족 |
| 에러 메시지 path 합성 | ★★★★★ | 다른 라이브러리가 흉내 못 함 |
| 표준 일원화 (OpenAPI/LLM) | ★★★★ | Emended 모델 좋음. 신규 표준 대응은 매번 수동 |
| 거대 파일들 (CheckerProgrammer 1614 LOC) | ★★★ | 사상에는 맞지만 가독성 약함 — 분리 여지 |

→ 다음: [04. 포지셔닝과 가치관](04-positioning.md)
