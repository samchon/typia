# 01. 아키텍처 개요 — 한 장의 그림

## 한 장의 그림

```
┌────────────────────────────────────────────────────────────────────┐
│                          사용자 코드 (TS)                           │
│                                                                    │
│   import typia, { tags } from "typia";                             │
│   typia.is<Member>(input);                                         │
│   typia.json.stringify<Member>(member);                            │
│   typia.llm.application<MyClass>();                                │
└────────────────────────┬───────────────────────────────────────────┘
                         │ ttsc 또는 unplugin
                         ▼
┌────────────────────────────────────────────────────────────────────┐
│   @typia/ttsc | unplugin-typia                                     │
│                                                                    │
│   - 기본 경로: `@typia/ttsc` host가 `@typia/ttsc/plugin/typia` 로드 │
│   - unplugin: vite/webpack/rspack/esbuild/rolldown/bun/farm/next   │
└────────────────────────┬───────────────────────────────────────────┘
                         │ TransformerFactory(program, options, extras)
                         ▼
┌────────────────────────────────────────────────────────────────────┐
│   @typia/transform  ─ FileTransformer / CallExpressionTransformer  │
│                                                                    │
│   - 각 SourceFile 깊이 우선 순회                                    │
│   - typia.* 호출 식별 (선언 파일 경로 기반)                          │
│   - FUNCTORS[module][methodName]로 라우팅                          │
│   - 결과 AST 삽입 + import 자동 주입                                │
└────────────────────────┬───────────────────────────────────────────┘
                         │ IProgrammerProps
                         ▼
┌────────────────────────────────────────────────────────────────────┐
│   @typia/core ─ MetadataFactory                                    │
│                                                                    │
│   ts.Type ──→ MetadataSchema (typia 자체 IR)                       │
│   - union/intersection/recursive/generic 처리                       │
│   - MetadataCollection 캐시                                         │
│   - ts.TypeChecker public API만 사용                                │
└────────────────────────┬───────────────────────────────────────────┘
                         │ MetadataSchema
                         ▼
┌────────────────────────────────────────────────────────────────────┐
│   @typia/core ─ Programmers (코드 생성기)                           │
│                                                                    │
│   IsProgrammer / AssertProgrammer / ValidateProgrammer             │
│   JsonStringifyProgrammer / JsonParseProgrammer / JsonSchema...    │
│   ProtobufEncodeProgrammer / ProtobufDecodeProgrammer / Message... │
│   LlmSchemaProgrammer / LlmApplicationProgrammer / Parameters...   │
│   RandomProgrammer / FunctionalProgrammer / HttpProgrammer ...     │
└────────────────────────┬───────────────────────────────────────────┘
                         │ ts.Expression / ts.ArrowFunction
                         ▼
┌────────────────────────────────────────────────────────────────────┐
│              사용자 코드의 그 위치에 emit된 결과                     │
│                                                                    │
│   const validate = (input) => {                                    │
│     const errors = [];                                             │
│     if ("string" !== typeof input.id || !_isFormatUuid(input.id))  │
│       errors.push({ path: "$input.id", expected: ..., value: ... });│
│     // ...수십~수백 줄 inline 검증 코드                              │
│     return { success: errors.length === 0, errors, data: input };  │
│   };                                                               │
└────────────────────────────────────────────────────────────────────┘
```

## 4개의 큰 박스

| 박스 | 책임 | 패키지 |
|---|---|---|
| **빌드 통합** | 표준 compiler/번들러에 transformer 주입 | `@typia/ttsc`, `@typia/unplugin` |
| **AST 어댑터** | typia.* 식별 + 라우팅 | `@typia/transform` |
| **메타데이터 분석** | ts.Type → MetadataSchema | `@typia/core` (factories) |
| **코드 생성** | MetadataSchema → ts.Expression | `@typia/core` (programmers) |

## 주변부

- `@typia/interface` — 모든 패키지가 의존하는 0-dep 타입 정의 (IValidation, ILlmApplication, OpenApi, tags, ...)
- `@typia/utils` — 런타임에 emit되는 헬퍼들 + OpenAPI/LLM 변환 유틸
- `typia` — 사용자가 import하는 메인 모듈 (CLI 포함)
- `@typia/mcp / langchain / vercel` — LLM 프레임워크 어댑터 3종

## 이 그림이 말해주는 4가지 강점

1. **분리가 깨끗하다** — 각 박스가 자기 책임만 한다. 새 기능 추가 시 어느 박스를 건드릴지 명확.
2. **TypeScript Compiler API는 한 박스(transform)가 격리** — tsgo 대응 시 이 박스만 다시 만들면 된다.
3. **MetadataSchema가 자체 IR** — TS를 바꿔도, 다음 프로그래밍 언어로 가도 IR 위 코드는 살아남는다.
4. **번들러 통합이 어댑터로 분리됨** — vite든 webpack이든 rspack이든 같은 core가 돌아간다.

## 이 그림이 보여주는 1가지 위험

빌드 통합 박스(맨 위)가 tsc API에 강하게 묶여 있다. tsgo 7.0이 in-process API를 포기하면 이 박스 모양이 근본적으로 바뀐다(IPC·async). 그러나 **나머지 3개 박스는 그대로** — IR과 코드 생성기는 ts.Type 모양과 무관하게 돈다. 이게 typia가 tsgo를 견디는 구조적 이유.

→ 다음 [02. 데이터 플로우](02-data-flow.md)
