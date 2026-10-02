# `@typia/langchain`

![Typia Logo](https://typia.io/logo.png)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/samchon/typia/blob/master/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/typia.svg)](https://www.npmjs.com/package/typia)
[![NPM Downloads](https://img.shields.io/npm/dm/typia.svg)](https://www.npmjs.com/package/typia)
[![Build Status](https://github.com/samchon/typia/workflows/test/badge.svg)](https://github.com/samchon/typia/actions?query=workflow%3Atest)
[![Guide Documents](https://img.shields.io/badge/Guide-Documents-forestgreen)](https://typia.io/docs/)
[![Gurubase](https://img.shields.io/badge/Gurubase-Document%20Chatbot-006BFF)](https://gurubase.io/g/typia)
[![Discord Badge](https://img.shields.io/badge/discord-samchon-d91965?style=flat&labelColor=5866f2&logo=discord&logoColor=white&link=https://discord.gg/E94XhzrUCZ)](https://discord.gg/E94XhzrUCZ)

[LangChain.js](https://github.com/langchain-ai/langchainjs) integration for [`typia`](https://github.com/samchon/typia).

Converts typia controllers to LangChain `DynamicStructuredTool[]` with automatic validation.

## Setup

```bash
npm install @typia/langchain @langchain/core typia
npm install -D ttsc typescript@rc
```

## Usage

### From TypeScript class

This example also uses LangChain's agent and OpenAI model packages:

```bash
npm install langchain @langchain/openai
```

```typescript
import { ChatOpenAI } from "@langchain/openai";
import { toLangChainTools } from "@typia/langchain";
import { createAgent } from "langchain";
import typia from "typia";

class Calculator {
  /** Add two numbers. */
  add(input: { a: number; b: number }): { value: number } {
    return { value: input.a + input.b };
  }
}

const tools = toLangChainTools(
  typia.llm.controller<Calculator>("Calculator", new Calculator()),
);

const agent = createAgent({
  model: new ChatOpenAI({ model: "gpt-4o" }),
  tools,
  systemPrompt: "You are a helpful assistant.",
});
const result = await agent.invoke({
  messages: [{ role: "user", content: "What is 10 + 5?" }],
});
```

Set `OPENAI_API_KEY` before running the example.

### From OpenAPI document

```typescript
import { DynamicStructuredTool } from "@langchain/core/tools";
import { toLangChainTools } from "@typia/langchain";
import { HttpLlm } from "@typia/utils";

const tools: DynamicStructuredTool[] = toLangChainTools(
  HttpLlm.controller({
    name: "petStore",
    document: yourOpenApiDocument,
    connection: { host: "https://api.example.com" },
  }),
);
```

### Structured Output

Use `typia.llm.parameters<T>()` with LangChain's `withStructuredOutput()` to generate structured output with validation:

```typescript
import { ChatOpenAI } from "@langchain/openai";
import { dedent, LlmJson } from "@typia/utils";
import typia, { tags } from "typia";

interface IMember {
  email: string & tags.Format<"email">;
  name: string;
  age: number & tags.Minimum<0> & tags.Maximum<100>;
  hobbies: string[];
  joined_at: string & tags.Format<"date">;
}

const model = new ChatOpenAI({ model: "gpt-4o" }).withStructuredOutput(
  typia.llm.parameters<IMember>(),
);

const member: IMember = await model.invoke(dedent`
  I am a new member of the community.

  My name is John Doe, and I am 25 years old.
  I like playing basketball and reading books,
  and joined to this community at 2022-01-01.
`);

// Validate the result
const result = typia.validate<IMember>(member);
if (!result.success) {
  console.error(LlmJson.stringify(result));
}
```

## Features

- No manual schema definition — generates everything from TypeScript types or OpenAPI
- Automatic argument validation with LLM-friendly error feedback
- Runtime tool errors are returned as `{ success: false, error }` for model recovery
- Supports both class-based (`typia.llm.controller`) and HTTP-based (`HttpLlm.controller`) controllers
