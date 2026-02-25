# `@typia/utils`

![Typia Logo](https://typia.io/logo.png)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/samchon/typia/blob/master/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/typia.svg)](https://www.npmjs.com/package/typia)
[![NPM Downloads](https://img.shields.io/npm/dm/typia.svg)](https://www.npmjs.com/package/typia)
[![Build Status](https://github.com/samchon/typia/workflows/test/badge.svg)](https://github.com/samchon/typia/actions?query=workflow%3Atest)
[![Guide Documents](https://img.shields.io/badge/Guide-Documents-forestgreen)](https://typia.io/docs/)
[![Gurubase](https://img.shields.io/badge/Gurubase-Document%20Chatbot-006BFF)](https://gurubase.io/g/typia)
[![Discord Badge](https://img.shields.io/badge/discord-samchon-d91965?style=flat&labelColor=5866f2&logo=discord&logoColor=white&link=https://discord.gg/E94XhzrUCZ)](https://discord.gg/E94XhzrUCZ)

Utility functions and converters for the [`typia`](https://github.com/samchon/typia) ecosystem.

Automatically installed as a dependency of `typia`.

## Key Exports

| Module | Description |
|--------|-------------|
| `HttpLlm` | Create LLM controllers from OpenAPI documents and execute function calls |
| `HttpMigration` | HTTP migration utilities |
| `HttpError` | HTTP error type |
| `LlmSchemaConverter` | Convert JSON Schema to LLM schema |
| `OpenApiConverter` | Convert between OpenAPI versions |
| `LlmTypeChecker` | Type checker for LLM schemas |
| `OpenApiTypeChecker` | Type checker for OpenAPI documents |
| `stringifyValidationFailure` | Format validation errors for LLM-friendly feedback |

## `stringifyValidationFailure`

Formats validation errors as annotated JSON for LLM-friendly feedback:

```typescript
import { IValidation } from "@typia/interface";
import { stringifyValidationFailure } from "@typia/utils";

const validation: IValidation<unknown> = func.validate(llmArguments);
if (validation.success === false) {
  console.log(stringifyValidationFailure(validation));
}
```

Output:

```json
{
  "x": "not a number", // ❌ expected: number
  "y": 5
}
```

## `HttpLlm`

Create LLM controllers from OpenAPI documents:

```typescript
import { IHttpLlmController } from "@typia/interface";
import { HttpLlm } from "@typia/utils";

// any OpenAPI version (Swagger 2.0, OpenAPI 3.0/3.1) is accepted
const controller: IHttpLlmController = HttpLlm.controller({
  name: "shopping",
  document: await fetch("https://shopping.example.com/swagger.json").then(r => r.json()),
  connection: {
    host: "https://shopping.example.com",
    headers: { Authorization: "Bearer ..." },
  },
});

// use with @typia/langchain, @typia/mcp, or @typia/vercel
toLangChainTools({ controllers: [controller] });
registerMcpControllers({ server, controllers: [controller] });
toVercelTools({ controllers: [controller] });
```

`OpenApiConverter` is used internally to normalize any OpenAPI version into a unified format. You can also use it directly:

```typescript
import { OpenApi, OpenApiV3 } from "@typia/interface";
import { OpenApiConverter } from "@typia/utils";

const emended: OpenApi.IDocument = OpenApiConverter.upgradeDocument(swagger2doc); // Swagger 2.0 → OpenApi
const downgraded: OpenApiV3.IDocument = OpenApiConverter.downgradeDocument(emended, "3.0"); // → OpenAPI 3.0
```
