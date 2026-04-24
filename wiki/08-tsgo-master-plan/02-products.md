# 02. Products

## `@typia/ttsc`

역할: TypeScript-Go 기반 compiler adapter / plugin host.

현재 제공:

- CLI: `ttsc`, `ttsc -p tsconfig.json`, `ttsc --noEmit`, `ttsc --watch`, `ttsc transform --file=...`
- JS API: `build`, `check`, `transform`, `transformAsync`, `version`
- plugin API: `definePlugin`, `loadProjectPlugins`, `transformOutput`
- project helper: `resolveProjectConfig`, `resolveProjectRoot`, `readProjectConfig`
- native backend 선택: plugin 의 `native.mode` / `native.binary`

## `@typia/ttsx`

역할: `ttsc` host 를 재사용하는 runner.

현재 제공:

- CLI: `ttsx src/index.ts`
- option: `--project`, `--cwd`, `--cache-dir`, `--binary`, `-r/--require`
- CJS: require hook + per-file `@typia/ttsc.transform()`
- ESM: project build + cache emit + child Node 실행

## 설치

현재 `typia setup` 결과:

```bash
npm i -D @typescript/native-preview@latest
npm i -D @typia/ttsc@latest
npm i -D @typia/ttsx@latest
```

수동 설치:

```bash
npm i -D @typescript/native-preview @typia/ttsc @typia/ttsx
```

`@typia/ttsx` 는 `@typia/ttsc` 에 의존하지만, setup wizard 는 runner 사용을 바로 가능하게 하려고 둘 다 설치한다.
