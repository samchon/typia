# packages/transform — TypeScript Transformer 어댑터

> 위치: `packages/transform/src`
> 책임: ts-patch / unplugin이 호출하는 TransformerFactory 진입점. typia.* 호출을 감지하고 `@typia/core`의 Programmer로 디스패치한다.

## 1. 진입점 구조

- `transform.ts:41-68` — ts-patch가 부르는 `transform(program, options, extras)`. strict 모드 검증 후 TransformerFactory를 반환.
- `FileTransformer.ts:18-58` — 각 SourceFile을 받아 `ts.visitEachChild`로 깊이 우선 탐색. CallExpression을 만나면 `iterate_node`로 처리.
- `FileTransformer.ts:35-43` — JSDoc 파싱 모드 체크 (TS 5.3 변경 대응).

## 2. 디스패치 — FUNCTORS 2단계 맵

`CallExpressionTransformer.ts:186-581`의 `FUNCTORS[module][methodName]` 객체 룩업.

- 1단계 module: `module / functional / http / llm / json / protobuf / reflect / misc / notations`
- 2단계 method: `is, assert, validate, createIs, application, structuredOutput, ...`
- 각 entry는 lazy `() => Task` — switch가 아닌 dictionary 룩업이므로 동적 확장 용이.

```
FUNCTORS[module][name]() → Task → Task(ITransformProps) → ts.Expression
```

식별: `props.context.checker.getResolvedSignature(...).declaration` → 파일 경로가 `typia/lib/*.d.ts | typia/src/*.ts`인지 검증 (`isTarget`).

## 3. Feature Transformer 패턴

세 가지 메인 패턴:

1. **Scalar** (Is/Assert/Validate) — 입력값+타입 → 검증 함수 호출. `GenericTransformer.scalar` 사용.
2. **Factory** (CreateIs/CreateAssert) — 타입만으로 함수 노드 생성. `GenericTransformer.factory`.
3. **Special** (Random / FunctionalGeneric) — 커스텀. RandomTransformer는 타입만, FunctionalGenericTransformer는 함수 선언을 분석해 파라미터/리턴 검증을 모두 emit.

`IsTransformer.ts:7-17`처럼 `transform(config) => (props) => GenericTransformer.scalar(...)` 구조의 부분 적용 패턴이 일관되게 쓰인다.

## 4. Core와의 결합

```
features/IsTransformer
  → internal/GenericTransformer.scalar
    → props.write({ context, modulo, type, name })
      → @typia/core IsProgrammer.write(props)
```

`ITypiaContext` 객체로 `checker / transformer(=AST factory) / importer / program / compilerOptions / printer`를 한 번에 전달. 모든 AST 생성은 `ts.factory.*`를 사용 — public API만.

## 5. Import 관리

`ImportProgrammer` (core 측)가 default/named/namespace/internal import를 추적 → `FileTransformer.ts:49`에서 `importer.toStatements()`로 일괄 주입. 이름 충돌은 `internalPrefix: "typia_transform_"`로 회피. `ImportTransformer.ts:99-262`의 두 번째 패스가 사용되지 않은 typia default import를 제거한다 (`isLikelyTransformableCall`).

## 6. 에러 처리

`TransformerError.ts:22-79` — code+message를 가진 커스텀 에러. `MetadataFactory.IError[]`를 받아 포맷팅.
`FileTransformer.ts:74-93` — 노드별 try/catch → `ts.createDiagnosticForNode` → `props.context.extras.addDiagnostic` (ts-patch 제공).

## 7. TS 내부 API 의존도

- `package.json`이 `@types/ts-expose-internals`를 declare하지만 실제 transform 패키지는 **public API만 사용**.
- 사용하는 외부 API: `TypeChecker.getResolvedSignature`, `Type.isTypeParameter`, `ts.factory.*`, `ts.visitEachChild`, `ts.createDiagnosticForNode`.
- TS 5.3 `jsDocParsingMode` 같은 호환성 분기 한 군데.
- 핵심 안전장치: 모듈 식별을 **import 경로 기반**으로 한다 → 타입 모양 변동에 강함.

## 8. 주요 파일 한 줄 요약

| 파일 | LOC | 책임 |
|---|---|---|
| `transform.ts` | 68 | ts-patch entry, strict 검증 |
| `FileTransformer.ts` | 143 | AST 순회, error 처리, import 주입 위치 |
| `NodeTransformer.ts` | 25 | CallExpression 필터링 |
| `CallExpressionTransformer.ts` | 581 | FUNCTORS 맵, 라우팅, target 파일 검증 |
| `ITransformProps.ts` | 20 | context/modulo/expression 전달 인터페이스 |
| `TransformerError.ts` | 85 | 컴파일 타임 에러 + diagnostic 포맷팅 |
| `ImportTransformer.ts` | 262 | import path 리라이팅, unused 제거 |
| `TypiaGenerator.ts` | 172 | 프로그래밍 API: tsconfig 파싱→transform→print 오케스트레이션 |
| `internal/GenericTransformer.ts` | 102 | scalar/factory 공통 패턴 |
| `features/*.ts` | 18~50 | 각 typia API의 thin wrapper |

## 핵심 통찰

`packages/transform`은 **얇은 어댑터**다. 비즈니스 로직은 모두 `@typia/core`에 위임. 책임이 깨끗하게 분리되어 있고 (parse 라우팅 vs 코드 생성), TypeScript 호환성 위험이 가장 큰 표면이지만 **public API만 쓰고 import 경로 기반 식별을 채택**해 변동에 강하다 — tsgo 대응의 핵심 자산.
