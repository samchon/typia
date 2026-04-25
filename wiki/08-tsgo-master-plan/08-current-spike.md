# 08. Product State

이 문서는 더 이상 spike 계획서가 아니다. 현재 repo 상태 요약이다.

## package

- `ttsc`: `../ttsc/packages/ttsc`
- `ttsc`: `ttsc package runner`
- `typia`: `packages/typia`

## compile

```
typia setup
  -> tsconfig plugins += typia/lib/transform
  -> install @typescript/native-preview
  -> install ttsc
  -> install ttsc

ttsc
  -> load tsconfig
  -> load plugins
  -> run TypeScript-Go
  -> run native backend when plugin declares it
  -> rewrite emitted JS
```

## run

```
ttsx src/index.ts
  -> resolve project
  -> reuse ttsc
  -> CJS require hook or ESM cached build
```

## invalid config behavior

- JS project helper reports missing `tsconfig`, missing `extends`, and circular `extends` as `ttsc:` errors.
- native build path parses tsconfig with TypeScript-Go and prints diagnostics to stderr before exiting non-zero.
- setup wizard rejects non-array `compilerOptions.plugins` before installing packages or rewriting `package.json`.
