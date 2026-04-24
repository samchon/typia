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
│   typia/lib/ttsc/plugin                                            │
│                                                                    │
│   - @typia/ttsc host가 로드하는 plugin entry                       │
│   - nativeBinary: packages/typia/bin/ttsc-typia.js                 │
│   - nativeMode: "typia"                                           │
└────────────────────────┬───────────────────────────────────────────┘
                         │ ttsc-typia build / transform
                         ▼
┌────────────────────────────────────────────────────────────────────┐
│   packages/transform/native                                        │
│                                                                    │
│   - tsgo Program 로드                                              │
│   - typia.* call site 수집                                         │
│   - source call site와 emitted JS call site 연결                   │
└────────────────────────┬───────────────────────────────────────────┘
                         │ TypeChecker + TypeNode
                         ▼
┌────────────────────────────────────────────────────────────────────┐
│   packages/core/native                                             │
│                                                                    │
│   - analyzer: TypeScript type → metadata.Schema                    │
│   - emitter: metadata.Schema → JavaScript expression string        │
└────────────────────────┬───────────────────────────────────────────┘
                         │ RewriteSet
                         ▼
┌────────────────────────────────────────────────────────────────────┐
│   toolchain/ttsc/driver                                            │
│                                                                    │
│   - tsgo emit 결과의 typia.* call expression을 native output으로 교체 │
│   - build: 파일에 write                                            │
│   - transform: 단일 파일 JS string 반환                            │
└────────────────────────────────────────────────────────────────────┘
```

## 현재 패키지 책임

| 영역              | 책임                                                     | 위치                        |
| ----------------- | -------------------------------------------------------- | --------------------------- |
| 사용자 API        | 런타임 모듈, CLI, plugin entry                           | `packages/typia`            |
| 빌드 host         | `build`, `check`, `transform` API                        | `toolchain/ttsc`            |
| 실행 hook         | `ttsx` 런타임 실행                                       | `toolchain/ttsx`            |
| call site adapter | typia 호출 수집과 rewrite 구성                           | `packages/transform/native` |
| analyzer/emitter  | metadata 분석과 JS 코드 생성                             | `packages/core/native`      |
| bundler adapter   | 번들러 transform hook에서 `@typia/ttsc.transform()` 호출 | `packages/unplugin`         |

## 제거된 TypeScript legacy 표면

- `@typia/core`
- `@typia/transform`
- `typia/lib/transform`
- `TypiaProgrammer`
- `packages/core/src`
- `packages/transform/src`

→ 다음 [02. 데이터 플로우](02-data-flow.md)
