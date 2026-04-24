# @typia/ttsx

`@typia/ttsx` is a `ts-node` / `tsx`-style runner built on top of `@typia/ttsc`.

It exists so a project that already depends on the `ttsc` host can also run:

```bash
ttsx src/index.ts
```

without introducing a second compiler path.

## Installation

```bash
npm install -D @typescript/native-preview @typia/ttsx
pnpm add -D @typescript/native-preview @typia/ttsx
```

`@typia/ttsx` depends on `@typia/ttsc`, and uses its project resolution, transform pipeline, and cache directory conventions. Install `@typia/ttsc` explicitly as well when the project also calls the `ttsc` CLI directly from its own scripts.

## What `ttsx` owns

- CLI runner: `ttsx src/index.ts`
- in-process CommonJS require hook
- cached ESM execution fallback
- project-aware cache directories

`@typia/ttsc` still owns:

- build / check / transform
- tsconfig plugin loading
- native rewrite backend selection

## Quick Start

### CommonJS-style execution

```bash
ttsx src/index.ts
ttsx --project tsconfig.json src/index.ts
ttsx --cache-dir .cache/ttsx src/index.ts
ttsx src/index.ts -- --port 3000
```

### Preload modules

```bash
ttsx -r dotenv/config src/index.ts
ttsx -r ./register-env.js src/index.ts -- --mode local
```

### Programmatic registration

```ts
import { register } from "@typia/ttsx";

const unregister = register({
  project: "tsconfig.json",
});

try {
  require("./src/index.ts");
} finally {
  unregister();
}
```

## CLI

```bash
ttsx [options] <entry.ts> [-- <argv...>]
```

Supported options:

- `-P, --project <file>`: use an explicit `tsconfig.json`
- `--cwd <dir>`: resolve project and entry relative to a different directory
- `--cache-dir <dir>`: override the compiled output cache
- `--binary <path>`: force a particular `ttsc` native binary
- `-r, --require <file>`: preload a module before the entrypoint
- `-h, --help`
- `-v, --version`

`--` splits runner options from entrypoint argv.

Example:

```bash
ttsx --project tsconfig.app.json src/index.ts -- --port 8080 --watch
```

Inside the executed program:

```ts
process.argv
// [node, /abs/path/src/index.ts, "--port", "8080", "--watch"]
```

## Runtime Model

`ttsx` has two execution paths.

### 1. CommonJS path

For a CommonJS project:

- `ttsx` installs a require hook
- each `.ts/.tsx/.cts/.mts` file is transformed on demand through `@typia/ttsc.transform()`
- the resulting JS is cached under `node_modules/.cache/ttsc/ttsx/...`
- Node executes the transformed text in-process

This is the lightweight hot path.

### 2. ESM path

For an ESM project:

- `ttsx` first probes the entry file with `transform()`
- if the output still looks like ESM, `ttsx` falls back to a project build
- it runs `@typia/ttsc.build({ emit: true, outDir: cacheDir })`
- it rewrites relative import specifiers to include `.js`
- it spawns a child Node process to execute the cached emitted entry

This is heavier, but keeps the ESM lane working without pretending Node can run the transformed ESM in-process through the CJS require hook.

## JS API

```ts
import { prepareExecution, register } from "@typia/ttsx";
```

### `register(options)`

Install the in-process require hook and return an unregister function.

```ts
import { register } from "@typia/ttsx";

const unregister = register({
  cwd: process.cwd(),
  project: "tsconfig.json",
});

require("./src/index.ts");
unregister();
```

Supported options come from `RegisterOptions`, which extends `@typia/ttsc` common options:

- `binary`
- `cwd`
- `env`
- `plugins`
- `rewriteMode`
- `cacheDir`
- `project`
- `extensions`

Important note:

- the CLI exposes only a subset of these options
- the JS API is currently broader than the CLI surface

### `prepareExecution(entryFile, options)`

Resolve whether the entry will run through the CJS path or the ESM fallback path.

```ts
import { prepareExecution } from "@typia/ttsx";

const prepared = prepareExecution("src/index.ts", {
  project: "tsconfig.json",
});

console.log(prepared.moduleKind);
console.log(prepared.entryFile);
console.log(prepared.emitDir);
```

This is useful if you want to embed `ttsx` in another runner or wrapper.

## Cache Layout

By default the runner uses:

```text
<project-root>/node_modules/.cache/ttsc/ttsx
```

Inside that cache:

- `single/` stores per-file transform results for the CJS path
- `project/<pid>/` stores emitted project output for the ESM path

The cache salt includes signatures from:

- the selected native binary
- relevant workspace compiler source trees

so local compiler changes invalidate cached output during development.

## How `ttsx` sees plugins

`ttsx` does not load compiler plugins on its own.

Instead it delegates to `@typia/ttsc`, which means:

- tsconfig plugin resolution works the same way as `ttsc`
- consumer packages reuse the same `transform` entry
- the same native backend is selected for both build-time and runner-time execution

That shared host surface is the main reason `ttsx` exists as a sibling package instead of reimplementing a second compiler path.

## Current Constraints

These are real current constraints.

### 1. CJS and ESM paths are different

The CommonJS lane is per-file and in-process. The ESM lane is project-wide and child-process based.

That split is intentional for now, but it means:

- startup cost differs by module kind
- CJS debugging and ESM debugging do not go through the exact same runtime path
- ESM execution depends on a cached emitted project tree

### 2. The CLI does not expose every `RegisterOptions` field

The JS API supports:

- `plugins`
- `rewriteMode`
- `extensions`
- `env`

The CLI does not currently expose flags for those.

If you need them today, use the JS API.

### 3. In-process execution is CJS only

The require hook throws if a transformed file still looks like ESM.

That is why the ESM lane falls back to `build()` + child Node execution.

## When to use `ttsx`

Use `ttsx` when:

- you already use `@typia/ttsc`
- you want one consistent compiler / plugin host for build and run
- you need `ts-node` / `tsx`-style execution for scripts, tests, or local tools

Do not use `ttsx` when:

- the project does not need the `ttsc` plugin host at all
- another runtime is intentionally the source of truth

## Development

```bash
pnpm build
```

The package is intentionally small. Most of the heavy lifting lives in `@typia/ttsc`.

## Layout

```
toolchain/ttsx/
├── src/launcher/ttsx.js
├── src/cli.ts
├── src/register.ts
└── src/index.ts
```

## License

MIT. See [../../LICENSE](../../LICENSE).
