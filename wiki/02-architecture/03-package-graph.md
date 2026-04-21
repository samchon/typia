# 03. 패키지 의존 그래프

> 범위: typia v12 기준 **현행 9개 패키지**의 의존 구조를 설명한다. 신규 전환 드라이버 `@typia/ttsc`는 현재 구현 그래프가 아니라 [08-tsgo-master-plan/](../08-tsgo-master-plan/)에서 별도로 다룬다.

## 그림

```
                      ┌──────────────────────┐
                      │  @typia/interface     │  ← 0-dep 순수 타입
                      │  (IValidation,        │
                      │   ILlmApplication,    │
                      │   OpenApi, tags, ...) │
                      └──┬─────────┬─────────┘
                         │         │
            ┌────────────┘         └──────────────┐
            │                                     │
            ▼                                     ▼
   ┌────────────────┐                  ┌──────────────────────┐
   │  @typia/utils  │ ◀──────────────  │  @typia/core          │
   │  (LlmJson,     │                  │  (MetadataFactory,    │
   │   HttpLlm,     │ ────────────────▶│   Programmers, IR)    │
   │   Converters)  │                  └──┬───────────────────┘
   └──┬─────────────┘                     │
      │                                   │
      │  ┌────────────────────────────────┘
      ▼  ▼
   ┌─────────────────────┐         ┌──────────────────────┐
   │  @typia/transform   │         │  typia (메인)         │
   │  (TransformerFactory│ ◀───────│  - CLI                │
   │   FileTransformer,  │         │  - re-export          │
   │   CallExpression... │         │  - 사용자 facing API  │
   └──┬──────────────────┘         └──┬───────────────────┘
      │                                │
      │  ┌─────────────────────────────┘
      ▼  ▼
   ┌─────────────────────┐
   │  @typia/unplugin    │  ← vite/webpack/rspack/esbuild/rolldown/bun/farm/next
   └─────────────────────┘

   ┌─────────────────────┐  ┌─────────────────────┐  ┌─────────────────────┐
   │  @typia/mcp         │  │  @typia/langchain    │  │  @typia/vercel        │
   │  (MCP SDK 어댑터)    │  │  (LangChain 어댑터)   │  │  (Vercel AI SDK)      │
   └─────────────────────┘  └─────────────────────┘  └─────────────────────┘
       depends on:               depends on:               depends on:
       interface, utils          interface, utils          interface, utils
       + @modelcontextprotocol  + @langchain/core         + ai
       (peerDependency)         (peerDependency)         (peerDependency)
```

## 의존 layer 정리

| Layer | 패키지 | 역할 |
|---|---|---|
| 0 | `interface` | 순수 타입 (의존 0) |
| 1 | `utils` | 런타임 헬퍼 + 변환 유틸 |
| 2 | `core` | IR + 코드 생성기 |
| 3 | `transform` | TS transformer 어댑터 |
| 4a | `typia` | 사용자 진입 |
| 4b | `unplugin` | 번들러 통합 |
| 4c | `mcp` / `langchain` / `vercel` | LLM SDK 어댑터 |

→ 위 → 아래로의 의존만 존재. 순환 없음. 이 깨끗함이 최대 자산.

## 현행 9개 패키지 책임 한 줄

| 패키지 | 한 줄 |
|---|---|
| `@typia/interface` | IValidation, ILlmApplication, OpenApi, tags 등 모든 공개 타입 |
| `@typia/utils` | 런타임 헬퍼 + LLM/OpenAPI 변환 유틸 + 검증기 헬퍼 |
| `@typia/core` | MetadataFactory + 모든 Programmer (코드 생성 본체) |
| `@typia/transform` | `@typia/ttsc/plugin/typia` 와 `@typia/unplugin` 이 부르는 TransformerFactory (어댑터) |
| `typia` | 사용자가 import하는 메인 + CLI (setup/patch/generate) |
| `@typia/unplugin` | vite/webpack/rspack/...에 transformer 주입 |
| `@typia/mcp` | MCP SDK Tool로 ILlmController 변환 |
| `@typia/langchain` | LangChain DynamicStructuredTool로 변환 |
| `@typia/vercel` | Vercel AI SDK tool()로 변환 |

## 외부 의존성 표

| 패키지 | 주요 외부 의존 |
|---|---|
| `interface` | (없음) |
| `utils` | (없음) |
| `core` | `typescript` (peer), `comment-parser` |
| `transform` | `typescript` (peer), `ts-expose-internals` (type only) |
| `typia` | `commander`, `inquirer`, `randexp`, `@standard-schema/spec` |
| `unplugin` | `unplugin`, `diff-match-patch-es` |
| `mcp` | `@modelcontextprotocol/sdk` (peer) |
| `langchain` | `@langchain/core` (peer) |
| `vercel` | `ai` (peer) |

→ 모든 SDK가 peerDependency다. 사용자가 버전을 통제한다 = typia가 버전을 강제하지 않는다. 깨지면 사용자 탓이 아니라 SDK breaking change 탓이라는 책임 분배가 명확.

## 어디가 깨지면 어디가 영향을 받는가 (영향도 매트릭스)

| 깨지는 곳 | 영향 받는 패키지 | 사용자 영향 |
|---|---|---|
| `interface` | 전 패키지 | 매우 큼 (semver-major) |
| `core` IR | transform, typia | 큼 |
| `core` Programmer 추가 | (없음, 추가만) | 없음 (기능 추가) |
| `transform` | typia, unplugin | 중간 (재빌드 필요) |
| `utils` 런타임 헬퍼 | 사용자 emit 코드 | 중간 (업그레이드 시 재빌드) |
| `typia` CLI | 새 사용자 setup | 작음 |
| LLM 어댑터 (mcp/langchain/vercel) | 해당 SDK 사용자만 | 격리됨 |

→ **interface와 core IR이 typia의 진짜 ABI**. 이 둘의 변경이 가장 신중해야 한다.

## 패키지 분리의 5가지 이점

1. 0-dep `interface`로 순환 차단
2. LLM SDK 어댑터 격리 → 한 SDK 깨져도 다른 패키지 무사
3. unplugin이 transform과 분리 → 번들러 사용자가 별도 `ttsc` host 없이도 같은 core를 사용
4. utils가 별도 → 런타임 헬퍼 업데이트가 core 빌드와 무관
5. typia CLI가 별도 모듈 → CLI 의존(commander/inquirer)이 라이브러리 사용자에게 전파 안 됨

## 1가지 결합 위험

`mcp`의 Preserve 모드(`McpControllerRegistrar.ts:101-190`)가 MCP SDK의 `private _registeredTools`에 접근한다. SDK 업데이트로 private 명명이 바뀌면 즉시 깨진다. → CI에서 매주 latest SDK로 smoke test 권장.

→ 다음 [04. 변환 파이프라인](04-transformation-pipeline.md)
