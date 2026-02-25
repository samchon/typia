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
import { ChainValues, Runnable } from "@langchain/core";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { DynamicStructuredTool } from "@langchain/core/tools";
import { ChatOpenAI } from "@langchain/openai";
import { toLangChainTools } from "@typia/langchain";
import { AgentExecutor, createToolCallingAgent } from "langchain/agents";
import typia from "typia";

const tools: DynamicStructuredTool[] = toLangChainTools({
  controllers: [
    typia.llm.controller<Calculator>("Calculator", new Calculator()),
  ],
});

const agent: Runnable = createToolCallingAgent({
  llm: new ChatOpenAI({ model: "gpt-4o" }),
  tools,
  prompt: ChatPromptTemplate.fromMessages([
    ["system", "You are a helpful assistant."],
    ["human", "{input}"],
    ["placeholder", "{agent_scratchpad}"],
  ]),
});
const executor: AgentExecutor = new AgentExecutor({ agent, tools });
const result: ChainValues = await executor.invoke({ input: "What is 10 + 5?" });
```

### From OpenAPI document

```typescript
import { DynamicStructuredTool } from "@langchain/core/tools";
import { toLangChainTools } from "@typia/langchain";
import { HttpLlm } from "@typia/utils";

const tools: DynamicStructuredTool[] = toLangChainTools({
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
