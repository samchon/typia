# `@typia/core`

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/samchon/typia/blob/master/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/typia.svg)](https://www.npmjs.com/package/typia)
[![NPM Downloads](https://img.shields.io/npm/dm/typia.svg)](https://www.npmjs.com/package/typia)

Core compile-time code generation logic for [`typia`](https://github.com/samchon/typia).

This is an **internal package** of `typia`. You don't need to install it directly — it is automatically included as a dependency of `typia`.

## Key Modules

| Module | Description |
|--------|-------------|
| `programmers/` | Code generators for `assert`, `is`, `validate`, `random`, and more |
| `factories/` | AST node factory functions for TypeScript code generation |
| `schemas/` | Metadata and Protocol Buffer schema analyzers |
| `context/` | Transformer context management (`ITypiaContext`, `ITransformOptions`) |
