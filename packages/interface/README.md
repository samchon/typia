# `@typia/interface`

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/samchon/typia/blob/master/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/typia.svg)](https://www.npmjs.com/package/typia)
[![NPM Downloads](https://img.shields.io/npm/dm/typia.svg)](https://www.npmjs.com/package/typia)

Shared type definitions and interfaces for the [`typia`](https://github.com/samchon/typia) ecosystem.

This is an **internal package** of `typia`. You don't need to install it directly — it is automatically included as a dependency of `typia`.

## Key Interfaces

| Module | Description |
|--------|-------------|
| `ILlmApplication` | LLM function calling application schema |
| `ILlmController` | Class-based LLM controller |
| `ILlmSchema` | LLM schema definition |
| `IJsonSchemaCollection` | JSON Schema collection |
| `IValidation` | Validation result (success/failure with errors) |
| `IHttpLlmApplication` | HTTP-based LLM application schema |
| `IHttpLlmController` | HTTP-based LLM controller |
| `IHttpConnection` | API connection configuration |
| `tags` | Decorator tags (`Format`, `Minimum`, `Maximum`, `Pattern`, etc.) |
