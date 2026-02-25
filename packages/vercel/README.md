# `@typia/vercel`

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/samchon/typia/blob/master/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/typia.svg)](https://www.npmjs.com/package/typia)
[![NPM Downloads](https://img.shields.io/npm/dm/typia.svg)](https://www.npmjs.com/package/typia)

[Vercel AI SDK](https://github.com/vercel/ai) integration for [`typia`](https://github.com/samchon/typia).

Converts typia controllers to Vercel AI SDK tools compatible with OpenAI, Anthropic, Google, and other LLM providers.

## Setup

```bash
npm install @typia/vercel ai
npm install typia
npx typia setup
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

### Structured Output

Use `typia.llm.parameters<T>()` with Vercel's `jsonSchema()` to generate structured output with validation:

```typescript
import { openai } from "@ai-sdk/openai";
import { generateObject, jsonSchema } from "ai";
import { dedent, stringifyValidationFailure } from "@typia/utils";
import typia, { tags } from "typia";

interface IMember {
  email: string & tags.Format<"email">;
  name: string;
  age: number & tags.Minimum<0> & tags.Maximum<100>;
  hobbies: string[];
  joined_at: string & tags.Format<"date">;
}

const { object } = await generateObject({
  model: openai("gpt-4o"),
  schema: jsonSchema<IMember>(typia.llm.parameters<IMember>(), {
    validate: (value) => {
      const result = typia.validate<IMember>(value);
      if (result.success) return { success: true, value: result.data };
      return {
        success: false,
        error: new Error(stringifyValidationFailure(result)),
      };
    },
  }),
  prompt: dedent`
    I am a new member of the community.

    My name is John Doe, and I am 25 years old.
    I like playing basketball and reading books,
    and joined to this community at 2022-01-01.
  `,
});
```

## Features

- No manual schema definition — generates everything from TypeScript types or OpenAPI
- Automatic argument validation with LLM-friendly error feedback
- Supports both class-based (`typia.llm.controller`) and HTTP-based (`HttpLlm.controller`) controllers
- Works with any LLM provider supported by Vercel AI SDK
