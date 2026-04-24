# LLM integrations

Packages:

- `@typia/mcp`
- `@typia/langchain`
- `@typia/vercel`

## 역할

`ILlmController` / `ILlmFunction` 을 각 SDK의 tool 형식으로 변환한다.

## 공통 흐름

```
typia.llm.application<T>()
  -> ILlmApplication / ILlmFunction
  -> framework tool wrapper
  -> func.validate() before execution
```

## package boundary

| package | external SDK |
| --- | --- |
| `@typia/mcp` | `@modelcontextprotocol/sdk` |
| `@typia/langchain` | `@langchain/core` |
| `@typia/vercel` | `ai` |

SDK 는 peer dependency 로 둔다.

## 현재 주의점

`@typia/mcp` 의 preserve mode 는 MCP SDK private field 에 닿는다. SDK upgrade smoke test 가 필요하다.
