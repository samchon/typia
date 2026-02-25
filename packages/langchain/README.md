# `@typia/langchain`

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/samchon/typia/blob/master/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/typia.svg)](https://www.npmjs.com/package/typia)
[![NPM Downloads](https://img.shields.io/npm/dm/typia.svg)](https://www.npmjs.com/package/typia)

[LangChain.js](https://github.com/langchain-ai/langchainjs) integration for [`typia`](https://github.com/samchon/typia).

Converts typia controllers to LangChain `DynamicStructuredTool[]` with automatic validation.

## Setup

```bash
npm install @typia/langchain @langchain/core
```

## Usage

### From TypeScript class

```typescript
import typia from "typia";
import { toLangChainTools } from "@typia/langchain";

const tools = toLangChainTools({
  controllers: [
    typia.llm.controller<YourClass>("YourClass", new YourClass()),
  ],
});
```

### From OpenAPI document

```typescript
import { HttpLlm } from "@typia/utils";
import { toLangChainTools } from "@typia/langchain";

const tools = toLangChainTools({
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
