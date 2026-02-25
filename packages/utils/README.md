# `@typia/utils`

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/samchon/typia/blob/master/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/typia.svg)](https://www.npmjs.com/package/typia)
[![NPM Downloads](https://img.shields.io/npm/dm/typia.svg)](https://www.npmjs.com/package/typia)

Utility functions and converters for the [`typia`](https://github.com/samchon/typia) ecosystem.

This is an **internal package** of `typia`. You don't need to install it directly — it is automatically included as a dependency of `typia`.

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
