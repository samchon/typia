# `@typia/mcp`

![Typia Logo](https://typia.io/logo.png)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/samchon/typia/blob/master/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/typia.svg)](https://www.npmjs.com/package/typia)
[![NPM Downloads](https://img.shields.io/npm/dm/typia.svg)](https://www.npmjs.com/package/typia)
[![Build Status](https://github.com/samchon/typia/workflows/test/badge.svg)](https://github.com/samchon/typia/actions?query=workflow%3Atest)
[![Guide Documents](https://img.shields.io/badge/Guide-Documents-forestgreen)](https://typia.io/docs/)
[![Gurubase](https://img.shields.io/badge/Gurubase-Document%20Chatbot-006BFF)](https://gurubase.io/g/typia)
[![Discord Badge](https://img.shields.io/badge/discord-samchon-d91965?style=flat&labelColor=5866f2&logo=discord&logoColor=white&link=https://discord.gg/E94XhzrUCZ)](https://discord.gg/E94XhzrUCZ)

[MCP (Model Context Protocol)](https://modelcontextprotocol.io) integration for [`typia`](https://github.com/samchon/typia).

Registers typia controllers as MCP tools with automatic validation.

## Setup

```bash
npm install @typia/mcp @modelcontextprotocol/sdk typia
npm install -D ttsc typescript@rc
```

## Usage

### From TypeScript class

```typescript
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerMcpControllers } from "@typia/mcp";
import typia from "typia";

const server: McpServer = new McpServer({
  name: "my-server",
  version: "1.0.0",
});
registerMcpControllers({
  server,
  controllers: [
    typia.llm.controller<Calculator>("Calculator", new Calculator()),
  ],
});
```

### From OpenAPI document

```typescript
import { registerMcpControllers } from "@typia/mcp";
import { HttpLlm } from "@typia/utils";

registerMcpControllers({
  server,
  controllers: [
    HttpLlm.controller({
      name: "petStore",
      document: yourOpenApiDocument,
      connection: { host: "https://api.example.com" },
    }),
  ],
});
```

### Inlining registration (without `@typia/mcp`)

If you want to keep your dependency surface to `typia` plus the MCP SDK — for example to avoid pinning `@typia/mcp` / `@typia/interface` / `@typia/utils` in lockstep with a specific `typia` dev build — you can inline the `tools/list` + `tools/call` handlers over a controller's `application.functions`. The one thing you must not skip is **coercion before validation**: LLMs routinely send `"12"` for a `number` or `"true"` for a `boolean`, and `func.validate(args)` alone rejects those. `typia` re-exports `LlmJson` so you get the coerce-then-validate step and the LLM-feedback formatter through the single `typia` import:

```typescript
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import typia, { LlmJson } from "typia";

const controller = typia.llm.controller<MyClass>("my", new MyClass());
const functions = controller.application.functions;
const execute = controller.execute as unknown as Record<
  string,
  (input: unknown) => unknown
>;

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: functions.map((func) => ({
    name: func.name,
    description: func.description,
    inputSchema: {
      type: "object" as const,
      properties: func.parameters.properties,
      required: func.parameters.required,
      additionalProperties: false,
      $defs: func.parameters.$defs,
    },
  })),
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const func = functions.find((f) => f.name === request.params.name);
  const method = execute[request.params.name];
  if (func === undefined || method === undefined)
    return errorResult(`Unknown tool: ${request.params.name}`);

  // coerce (e.g. "12" -> 12) THEN validate — this is what registerMcpControllers does
  const result = LlmJson.validateArguments(func, request.params.arguments);
  if (!result.success)
    // hand typia's annotated errors back so the model can self-correct
    return errorResult(LlmJson.stringify(result));

  const output = await method.call(execute, result.data);
  return {
    content: [
      {
        type: "text" as const,
        text: output === undefined ? "Success" : JSON.stringify(output),
      },
    ],
  };
});
```

`registerMcpControllers` uses the same `LlmJson.validateArguments` internally, so an inlined handler and the built-in registration behave identically.

## Features

- No manual schema definition — generates everything from TypeScript types or OpenAPI
- Automatic argument validation with LLM-friendly error feedback
- Supports both class-based (`typia.llm.controller`) and HTTP-based (`HttpLlm.controller`) controllers
- `preserve` option to coexist with `McpServer.registerTool()`
