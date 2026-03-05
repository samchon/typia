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
npm install @typia/mcp @modelcontextprotocol/sdk
npm install typia
npx typia setup
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

## Features

- No manual schema definition — generates everything from TypeScript types or OpenAPI
- Automatic argument validation with LLM-friendly error feedback
- Supports both class-based (`typia.llm.controller`) and HTTP-based (`HttpLlm.controller`) controllers
- `preserve` option to coexist with `McpServer.registerTool()`
