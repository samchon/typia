# 03. Package Graph

## public packages

```
@typia/interface
  -> @typia/utils
  -> typia
  -> @typia/unplugin
  -> @typia/mcp
  -> @typia/langchain
  -> @typia/vercel
```

## toolchain

```
@typescript/native-preview
  -> ttsc
       -> ttsc
```

`typia` depends on `ttsc`. `ttsc` depends on `ttsc`.

## native backend

```
packages/transform/native
  -> packages/core/native
  -> ../ttsc/packages/ttsc/driver
```

## current package roles

| package / directory | role |
| --- | --- |
| `typia` | public runtime API, CLI, native plugin entry |
| `@typia/interface` | public type contracts |
| `@typia/utils` | runtime helpers and schema utilities |
| `@typia/unplugin` | bundler adapter over `ttsc.transform()` |
| `ttsc` | compiler adapter / plugin host |
| `ttsc` | runner over `ttsc` |
| `packages/core/native` | type analysis and JS expression emit |
| `packages/transform/native` | typia call-site collection and rewrite planning |

`@typia/core` and `@typia/transform` TypeScript packages are not part of the current package graph.
