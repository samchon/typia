# `@typia/interface`

![Typia Logo](https://typia.io/logo.png)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/samchon/typia/blob/master/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/typia.svg)](https://www.npmjs.com/package/typia)
[![NPM Downloads](https://img.shields.io/npm/dm/typia.svg)](https://www.npmjs.com/package/typia)
[![Build Status](https://github.com/samchon/typia/workflows/test/badge.svg)](https://github.com/samchon/typia/actions?query=workflow%3Atest)
[![Guide Documents](https://img.shields.io/badge/Guide-Documents-forestgreen)](https://typia.io/docs/)
[![Gurubase](https://img.shields.io/badge/Gurubase-Document%20Chatbot-006BFF)](https://gurubase.io/g/typia)
[![Discord Badge](https://img.shields.io/badge/discord-samchon-d91965?style=flat&labelColor=5866f2&logo=discord&logoColor=white&link=https://discord.gg/E94XhzrUCZ)](https://discord.gg/E94XhzrUCZ)

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
