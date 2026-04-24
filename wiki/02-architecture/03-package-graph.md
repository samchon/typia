# 03. 패키지 의존 그래프

## A. typia 본체 패키지군

```
@typia/interface        ← 0-dep 공개 타입
        │
        ├──────────────▶ @typia/utils
        │                    │
        │                    ├────────▶ @typia/mcp
        │                    ├────────▶ @typia/langchain
        │                    └────────▶ @typia/vercel
        │
        ├──────────────▶ typia
        │                    │
        │                    └────────▶ typia/lib/transform
        │
        └──────────────▶ @typia/unplugin ─────▶ @typia/ttsc.transform()
```

`@typia/core` / `@typia/transform` TypeScript 패키지는 제거되었다. native 구현은 npm workspace package가 아니라 Go module 디렉터리로 남아 있다.

## B. native backend

```
packages/transform/native
        │
        ├─ typia.* call site 수집
        ├─ RewriteSet 구성
        │
        ▼
packages/core/native
        ├─ analyzer: TypeScript type → metadata.Schema
        └─ emitter: metadata.Schema → JS expression string
```

## C. standalone toolchain 패키지군

```
@typescript/native-preview
          │
          ▼
   @typia/ttsc   ← compiler adapter / plugin host / JS API
          │
          ▼
   @typia/ttsx   ← runner, built on top of @typia/ttsc
```

| 패키지        | 역할                                                                               |
| ------------- | ---------------------------------------------------------------------------------- |
| `@typia/ttsc` | standalone compiler adapter / plugin host / JS API (`build`, `check`, `transform`) |
| `@typia/ttsx` | standalone runner (`ttsx src/index.ts`)                                            |

## 공개 패키지 책임

| 패키지             | 한 줄                                                     |
| ------------------ | --------------------------------------------------------- |
| `@typia/interface` | IValidation, ILlmApplication, OpenAPI, tags 등 공개 타입  |
| `@typia/utils`     | 런타임 헬퍼 + LLM/OpenAPI 변환 유틸                       |
| `typia`            | 사용자가 import하는 메인 + CLI + native plugin entry      |
| `@typia/unplugin`  | bundler transform hook에서 `@typia/ttsc.transform()` 호출 |
| `@typia/mcp`       | MCP SDK Tool로 ILlmController 변환                        |
| `@typia/langchain` | LangChain DynamicStructuredTool로 변환                    |
| `@typia/vercel`    | Vercel AI SDK tool()로 변환                               |

## 외부 의존성 표

| 패키지      | 주요 외부 의존                                                             |
| ----------- | -------------------------------------------------------------------------- |
| `interface` | 없음                                                                       |
| `utils`     | 없음                                                                       |
| `typia`     | `commander`, `inquirer`, `randexp`, `@standard-schema/spec`, `@typia/ttsc` |
| `unplugin`  | `unplugin`, `diff-match-patch-es`, `magic-string`, `@typia/ttsc`           |
| `mcp`       | `@modelcontextprotocol/sdk` (peer)                                         |
| `langchain` | `@langchain/core` (peer)                                                   |
| `vercel`    | `ai` (peer)                                                                |

→ 다음 [04. 변환 파이프라인](04-transformation-pipeline.md)
