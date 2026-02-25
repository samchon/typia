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
import { openai } from "@ai-sdk/openai";
import { toVercelTools } from "@typia/vercel";
import { generateText, GenerateTextResult, Tool } from "ai";
import typia from "typia";

const tools: Record<string, Tool> = toVercelTools({
  controllers: [
    typia.llm.controller<Calculator>("Calculator", new Calculator()),
  ],
});

const result: GenerateTextResult = await generateText({
  model: openai("gpt-4o"),
  prompt: "What is 10 + 5?",
  tools,
});
```

### From OpenAPI document

```typescript
import { toVercelTools } from "@typia/vercel";
import { HttpLlm } from "@typia/utils";
import { Tool } from "ai";

const tools: Record<string, Tool> = toVercelTools({
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
