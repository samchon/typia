# `@typia/vercel`

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/samchon/typia/blob/master/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/typia.svg)](https://www.npmjs.com/package/typia)
[![NPM Downloads](https://img.shields.io/npm/dm/typia.svg)](https://www.npmjs.com/package/typia)

[Vercel AI SDK](https://github.com/vercel/ai) integration for [`typia`](https://github.com/samchon/typia).

Converts typia controllers to Vercel AI SDK tools compatible with OpenAI, Anthropic, Google, and other LLM providers.

## Setup

```bash
npm install @typia/vercel ai
```

## Usage

### From TypeScript class

```typescript
import typia from "typia";
import { toVercelTools } from "@typia/vercel";

const tools = toVercelTools({
  controllers: [
    typia.llm.controller<YourClass>("YourClass", new YourClass()),
  ],
});
```

### From OpenAPI document

```typescript
import { HttpLlm } from "@typia/utils";
import { toVercelTools } from "@typia/vercel";

const tools = toVercelTools({
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
- Works with any LLM provider supported by Vercel AI SDK
