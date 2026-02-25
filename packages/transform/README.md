# `@typia/transform`

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/samchon/typia/blob/master/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/typia.svg)](https://www.npmjs.com/package/typia)
[![NPM Downloads](https://img.shields.io/npm/dm/typia.svg)](https://www.npmjs.com/package/typia)

TypeScript transformer plugin for [`typia`](https://github.com/samchon/typia).

Transforms `typia.*<T>()` function calls into optimized runtime code at compile time by analyzing TypeScript types.

This is an **internal package** of `typia`. You don't need to install it directly — it is automatically included as a dependency of `typia`.

## Key Exports

| Export | Description |
|--------|-------------|
| `transform()` | TypeScript transformer factory — the main entry point for `ts-patch` and `ttypescript` |
| `TypiaGenerator.build()` | Programmatic build API for generating transformed output files |
| `ImportTransformer` | Rewrites import paths and removes unused typia imports after transformation |
