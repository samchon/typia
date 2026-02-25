# `@typia/core`

![Typia Logo](https://typia.io/logo.png)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/samchon/typia/blob/master/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/typia.svg)](https://www.npmjs.com/package/typia)
[![NPM Downloads](https://img.shields.io/npm/dm/typia.svg)](https://www.npmjs.com/package/typia)
[![Build Status](https://github.com/samchon/typia/workflows/test/badge.svg)](https://github.com/samchon/typia/actions?query=workflow%3Atest)
[![Guide Documents](https://img.shields.io/badge/Guide-Documents-forestgreen)](https://typia.io/docs/)
[![Gurubase](https://img.shields.io/badge/Gurubase-Document%20Chatbot-006BFF)](https://gurubase.io/g/typia)
[![Discord Badge](https://img.shields.io/badge/discord-samchon-d91965?style=flat&labelColor=5866f2&logo=discord&logoColor=white&link=https://discord.gg/E94XhzrUCZ)](https://discord.gg/E94XhzrUCZ)

Core compile-time code generation logic for [`typia`](https://github.com/samchon/typia).

This is an **internal package** of `typia`. You don't need to install it directly — it is automatically included as a dependency of `typia`.

## Key Modules

| Module | Description |
|--------|-------------|
| `programmers/` | Code generators for `assert`, `is`, `validate`, `random`, and more |
| `factories/` | AST node factory functions for TypeScript code generation |
| `schemas/` | Metadata and Protocol Buffer schema analyzers |
| `context/` | Transformer context management (`ITypiaContext`, `ITransformOptions`) |
