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
  -> @typia/ttsc
       -> @typia/ttsx
```

`typia` depends on `@typia/ttsc`. `@typia/ttsx` depends on `@typia/ttsc`.

## native backend

```
packages/transform/native
  -> packages/core/native
  -> toolchain/ttsc/driver
```

## current package roles

| package / directory | role |
| --- | --- |
| `typia` | public runtime API, CLI, native plugin entry |
| `@typia/interface` | public type contracts |
| `@typia/utils` | runtime helpers and schema utilities |
| `@typia/unplugin` | bundler adapter over `@typia/ttsc.transform()` |
| `@typia/ttsc` | compiler adapter / plugin host |
| `@typia/ttsx` | runner over `@typia/ttsc` |
| `packages/core/native` | type analysis and JS expression emit |
| `packages/transform/native` | typia call-site collection and rewrite planning |

`@typia/core` and `@typia/transform` TypeScript packages are not part of the current package graph.
