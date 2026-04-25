# 04. Transformation Pipeline

## `ttsc`

기본 빌드 경로다.

```bash
ttsc
ttsc -p tsconfig.json
ttsc --noEmit
ttsc --watch
```

흐름:

```
ttsc
  -> resolve tsconfig
  -> load plugins
  -> run TypeScript-Go
  -> run typia native backend
  -> rewrite emitted JS
```

## `@typia/unplugin`

번들러용 per-file 경로다.

```
bundler transform hook
  -> ttsc.transform({ file, tsconfig, plugins })
  -> ttsc-typia transform
  -> JS string
  -> bundler result
```

`@typia/unplugin` 은 별도 TypeScript transformer 를 들고 있지 않다. `ttsc.transform()` 을 호출하는 adapter 다.

## `ttsx`

runtime 실행 경로다.

```bash
ttsx src/index.ts
ttsx --project tsconfig.json src/index.ts
```

현재 실행 방식:

- CJS: require hook + per-file transform
- ESM: project build + cache emit + child Node

## 제거된 경로

`@typia/core` / `@typia/transform` 기반 TypeScript legacy transformer 는 현재 코드베이스에 없다.
