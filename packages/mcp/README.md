# `@typia/mcp`

![Typia Logo](https://typia.io/logo.png)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/samchon/typia/blob/master/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/typia.svg)](https://www.npmjs.com/package/typia)
[![NPM Downloads](https://img.shields.io/npm/dm/typia.svg)](https://www.npmjs.com/package/typia)
[![Build Status](https://github.com/samchon/typia/workflows/test/badge.svg)](https://github.com/samchon/typia/actions?query=workflow%3Atest)
[![Guide Documents](https://img.shields.io/badge/Guide-Documents-forestgreen)](https://typia.io/docs/)
[![Gurubase](https://img.shields.io/badge/Gurubase-Document%20Chatbot-006BFF)](https://gurubase.io/g/typia)
[![Discord Badge](https://img.shields.io/badge/discord-samchon-d91965?style=flat&labelColor=5866f2&logo=discord&logoColor=white&link=https://discord.gg/E94XhzrUCZ)](https://discord.gg/E94XhzrUCZ)

[MCP (Model Context Protocol)](https://modelcontextprotocol.io) server integration for [`typia`](https://github.com/samchon/typia).

`createMcpServer` turns a single typia controller into an MCP server. Every tool's input schema, output schema, and argument validation derives from the TypeScript types and JSDoc — no hand-written JSON schema or Zod shape anywhere. Every tool call is coerced and validated by typia, and validation failures go back to the model as self-correction feedback, exactly the loop the MCP spec recommends.

- **Tools**: every class method, with `inputSchema`, `outputSchema`, and `structuredContent` reflected from the types
- **Instructions**: the reflected class/interface JSDoc, shipped through the handshake
- **OpenAPI**: `HttpLlm.controller()` documents serve the same way — every operation becomes a tool calling the real endpoint, and `info.version` becomes the server version
- **Zero extra dependencies**: nothing at runtime beyond what `typia` already installs, plus the MCP SDK as a peer

## Setup

```bash
npm install @typia/mcp @modelcontextprotocol/sdk typia
npx typia setup
```

## Usage

`createMcpServer(controller, options?)` — pass a `typia.llm.controller` (or an `HttpLlm.controller` over an OpenAPI document), connect a transport. Every method of the class becomes an MCP tool; the controller's `name` is the server name and its class JSDoc becomes the handshake instructions. The handshake version is the OpenAPI `info.version` for HTTP controllers, `"1.0.0"` otherwise.

```typescript
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createMcpServer } from "@typia/mcp";
import typia from "typia";

/** Arithmetic tools. */
class Calculator {
  /** Add two numbers. */
  add(p: { x: number; y: number }): { value: number } {
    return { value: p.x + p.y };
  }
}

const server = createMcpServer(
  typia.llm.controller<Calculator>("calculator", new Calculator()),
);
await server.connect(new StdioServerTransport());
```

Every typed tool result ships once, as `structuredContent`. The MCP spec also recommends a duplicate serialized-JSON text block for clients that ignore `outputSchema` — but that doubles the payload, and a size-capped client counts both copies. So the fallback is opt-in:

```typescript
const server = createMcpServer(controller, { textFallback: true });
```

Results with no structured representation (`void` methods, errors) always keep their text content.

## Validation feedback

If the LLM provides invalid arguments, the tool returns the input annotated with `// ❌` markers so the model can self-correct:

```json
{
  "name": "John",
  "age": "twenty", // ❌ [{"path":"$input.age","expected":"number"}]
  "email": "not-an-email", // ❌ [{"path":"$input.email","expected":"string & Format<\"email\">"}]
  "hobbies": "reading" // ❌ [{"path":"$input.hobbies","expected":"Array<string>"}]
}
```

Guide documents: https://typia.io/docs/utilization/mcp
