# packages/mcp, langchain, vercel — LLM 프레임워크 어댑터

세 패키지 모두 **`ILlmController` / `ILlmFunction`** 을 각 LLM 프레임워크의 네이티브 Tool 타입으로 변환하는 얇은 어댑터다.

## 1. 분리 이유

- **의존성 격리**: `@modelcontextprotocol/sdk`, `@langchain/core`, `ai`를 각각 peerDependency
- **프레임워크 중립**: typia core는 어떤 LLM 프레임워크도 모름
- **개별 SDK 추적**: 각 SDK의 breaking change를 독립적으로 대응

## 2. MCP (`packages/mcp`)

`registerMcpControllers()` (`internal/McpControllerRegistrar.ts:192-217`):

1. `controller.application.functions[]`에서 `name/description/parameters` 추출
2. `ListToolsRequestSchema` 응답에 JSON Schema 그대로 노출
3. `CallToolRequestSchema` 핸들러: `func.validate()` → 실패 시 `LlmJson.stringify()` 결과

**Preserve 모드** (`McpControllerRegistrar.ts:101-190`): MCP SDK의 private `_registeredTools / _toolHandlersInitialized`에 접근해 `McpServer.registerTool()`로 등록된 도구와 공존. **위험 주의** — SDK upgrade 시 깨짐 가능성 가장 큼.

## 3. LangChain (`packages/langchain`)

`toLangChainTools()` (`internal/LangChainToolsRegistrar.ts:122-148`):

- `DynamicStructuredTool` 생성자에 `parameters`(`ILlmFunction`)를 그대로 `schema`에 전달 — LangChain이 JSON Schema 직접 수용
- `func()` 실행 전 `func.validate(coerced)` → 실패 시 `ToolInputParsingException`

## 4. Vercel (`packages/vercel`)

`toVercelTools()`:

- Vercel AI SDK `tool()` 함수에 `jsonSchema<object>(parameters as JSONSchema7)` 전달 (`internal/VercelParameterConverter.ts:6-7`)
- 검증 패턴 동일
- 다중 공급자 호환 — Vercel SDK가 OpenAI/Anthropic/Google 모두 지원

## 5. 의존 그래프

```
@typia/mcp | @typia/langchain | @typia/vercel
├─ @typia/interface (workspace)
├─ @typia/utils (workspace)
└─ {SDK} (peerDependency)
```

`sideEffects: false`, rollup 외부 의존성 자동 externalize.

## 6. 공통 패턴 (추상화 가능)

```
for controller in controllers:
  for func in controller.application.functions:
    Tool = makeTool({          # 프레임워크별 차이는 여기뿐
      name: func.name,
      description: func.description,
      schema: func.parameters,
      execute: async (args) => {
        if (!func.validate(args).success) throw ...;
        return await func();
      }
    })
```

→ 향후 `@typia/llm-adapter` 추상 베이스로 통합 가능. 현재는 각 SDK의 타입 차이로 별도 구현이 명확함.

## 7. 외부 SDK 호환성 위험

| SDK | 현재 ver | 최소 | 위험도 |
|---|---|---|---|
| `@modelcontextprotocol/sdk` | 1.26.0 | 1.0.0 | **높음** (private API 사용) |
| `@langchain/core` | 1.1.31 | 1.0.0 | 중 |
| `ai` (Vercel) | 6.0.116 | 6.0.0 | 중 |

완화 전략:
- `func.validate / coerce / parse`가 typia 내부 로직이라 외부 SDK 변동과 격리됨
- JSON Schema 부분집합(ILlmSchema.IParameters)으로 통일 → SDK 업그레이드 영향 적음
- **Preserve 모드는 정기적 호환성 테스트가 필수** (CI에서 SDK latest 매주 검증 권장)

## 8. 주요 파일

| 파일 | 책임 |
|---|---|
| `mcp/src/index.ts` | `registerMcpControllers()` 공개 API |
| `mcp/src/internal/McpControllerRegistrar.ts` | Tool 레지스트리, Preserve 모드 |
| `langchain/src/index.ts` | `toLangChainTools()` |
| `langchain/src/internal/LangChainToolsRegistrar.ts` | DynamicStructuredTool 생성 |
| `vercel/src/index.ts` | `toVercelTools()`, `toVercelSchema()` |
| `vercel/src/internal/VercelToolsRegistrar.ts` | Vercel tool() 생성 |
| `vercel/src/internal/VercelParameterConverter.ts` | JSON Schema 변환 |

## 핵심 통찰

세 어댑터의 패턴이 거의 동일하므로 **커뮤니티 contribution 받기 가장 쉬운 영역**(BAML / Mastra / Genkit / Anthropic Agent SDK / OpenAI Agents SDK 등). 단, MCP Preserve 모드는 SDK private API 의존이라 typia가 떠안은 가장 큰 호환성 리스크 — `private API not available` 시 fallback이 명확해야 한다.
