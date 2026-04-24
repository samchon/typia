# @typia/ttsc

`@typia/ttsc` is a standalone compiler adapter and plugin host for the `typescript-go` toolchain.

It is the package that owns:

- `ttsc`
- `ttsc --noEmit`
- `ttsc transform`
- tsconfig plugin loading
- native consumer binary selection
- JavaScript-side post-processing hooks for emitted output

`typia` is the first consumer, but `@typia/ttsc` is not typia-specific. The host surface is intended to be reusable by any plugin that wants to sit on top of the same `typescript-go` lane.

## Installation

Today the compiler lane is:

```bash
npm install -D @typescript/native-preview @typia/ttsc
pnpm add -D @typescript/native-preview @typia/ttsc
```

Later the compiler package is expected to become `typescript@7`, but the current setup lane is still `@typescript/native-preview`.

## Quick Start

### 1. Add a plugin to `tsconfig.json`

```json
{
  "compilerOptions": {
    "plugins": [{ "transform": "typia/lib/transform" }]
  }
}
```

### 2. Run `ttsc`

```bash
ttsc
ttsc --noEmit
ttsc --watch
ttsc -p tsconfig.json
```

The CLI reads `compilerOptions.plugins`, resolves the plugin modules, chooses the matching native backend binary, and then runs the build or transform through that plugin-selected lane.

## CLI

### `ttsc`

Build the project referenced by `tsconfig.json`. This follows the `tsc` / `tsgo` command shape: no subcommand means "compile the current project".

```bash
ttsc
ttsc -p tsconfig.json
ttsc --emit
ttsc --noEmit
ttsc --outDir lib
ttsc --watch
ttsc --verbose
```

Notes:

- `--quiet` is the default.
- `--verbose` prints the native build summary and emitted file list.
- `--watch` keeps the JS host alive and reruns the build when project files change.
- `ttsc build ...` remains a compatibility alias for the same project-build lane.

### `ttsc --noEmit`

Run the same host pipeline without emitting files.

```bash
ttsc --noEmit
ttsc -p tsconfig.json --noEmit
ttsc --watch --noEmit
```

This is the CI / pre-commit lane. `ttsc check ...` remains a compatibility alias.

### `ttsc transform`

Transform a single source file and print the rewritten JavaScript to stdout.

```bash
ttsc transform --file src/index.ts
ttsc transform --file src/index.ts --out tmp/index.js
ttsc transform --file src/index.ts --project tsconfig.json
```

This is the per-file hook bundler adapters consume.

## Programmatic API

`@typia/ttsc` exports a small JS API for bundlers and higher-level tools.

```ts
import { build, check, transform, version } from "@typia/ttsc";
```

### `transform(options)`

Use this when you are writing a bundler adapter or any per-file transform hook.

```ts
import { transform } from "@typia/ttsc";

const code = transform({
  file: "/project/src/index.ts",
  tsconfig: "/project/tsconfig.json",
  cwd: "/project",
});
```

Important behavior:

- `transform()` resolves the enclosing `tsconfig.json` unless `tsconfig` is given.
- `plugins` can override the tsconfig plugin list.
- `plugins: false` disables tsconfig plugin loading.
- plugin-declared `native.mode` selects the native rewrite backend.
- `rewriteMode` is a low-level override for tests and migration probes.
- `out` writes the final transformed text to a file instead of only returning it.

### `build(options)` / `check(options)`

```ts
import { build, check } from "@typia/ttsc";

const result = build({
  tsconfig: "tsconfig.json",
  cwd: process.cwd(),
  emit: true,
});

if (result.status !== 0) {
  console.error(result.stderr);
}

const checked = check({
  tsconfig: "tsconfig.json",
});
```

`build()` and `check()` return `{ status, stdout, stderr }`. They do not throw on a non-zero compiler exit; callers decide how to surface the failure.

### `version(options)`

```ts
import { version } from "@typia/ttsc";

console.log(version());
```

Useful for diagnostics or adapter user-agent strings.

## tsconfig Plugin Contract

`@typia/ttsc` reads `compilerOptions.plugins` from the resolved project config.

Each plugin entry must have:

```json
{
  "transform": "some-plugin-entry"
}
```

Optional extra keys are passed to the plugin factory unchanged.

### Resolution rules

`transform` may be:

- a package specifier
- an absolute path
- a relative path from the project root

The loader also has a source-checkout fallback for `*/lib/transform`, so workspace consumers can be developed before packing/publishing.

## Writing a Plugin

The host surface for plugin authors lives in:

```ts
import { definePlugin } from "@typia/ttsc";
```

There are two plugin shapes.

- **Native transform plugin**: owns type analysis, call-site recognition, AST rewrite,
  diagnostics, and emitted assets in a consumer-native backend.
- **JS output plugin**: receives emitted JavaScript text and returns edited JavaScript
  text.

The native shape is the TypeScript v7 path: the plugin describes the backend,
and the backend performs compiler work through the `typescript-go` lane.

### Minimal native consumer plugin

```ts
import { definePlugin } from "@typia/ttsc";
import * as path from "node:path";

export default definePlugin(() => ({
  name: "my-consumer",
  native: {
    mode: "my-consumer",
    binary: path.resolve(__dirname, "../native/ttsc-my-consumer.js"),
    contractVersion: 1,
    capabilities: ["rewrite", "diagnostics", "assets"],
  },
}));
```

This tells `ttsc`:

- which native rewrite mode to request (`native.mode`)
- which consumer-owned native binary to run (`native.binary`)
- which plugin contract version the package was written for
- which capabilities the backend expects to own

The backend binary is responsible for the work that old TypeScript
transformers used to do in-process:

- loading the project through the `typescript-go` lane
- finding marker calls such as `typia.is<T>()`
- analyzing types through native checker access or a serialized IR
- emitting the replacement JavaScript
- reporting plugin-specific diagnostics

The plugin declaration should stay small. Keep compiler work in the native
backend and keep package discovery/configuration in the Node plugin.

### Native backend descriptor

```ts
interface TtscNativeBackend {
  mode: string;
  binary?: string;
  contractVersion?: 1;
  capabilities?: readonly string[];
}
```

`mode` is the stable name passed to the native compiler process. `binary`
overrides the default `ttsc` binary when the plugin ships a consumer-specific
backend. `contractVersion` defaults to `1`; declaring it pins the plugin to the
current host protocol. `capabilities` is descriptive today and should be used by
plugin authors as a manifest of owned responsibilities.

### Plugin with JS-side output post-processing

```ts
import { definePlugin } from "@typia/ttsc";

export default definePlugin((config) => ({
  name: "banner-plugin",
  transformOutput(context) {
    if (context.command === "build") {
      return `/* generated by ${config.transform} */\n${context.code}`;
    }
    return context.code;
  },
}));
```

`transformOutput()` receives JavaScript text, not a TypeScript AST. It runs:

- after `ttsc transform`
- after emitted `.js` files are produced during `ttsc`

Use this hook for text-level post-processing such as:

- banner injection
- output string patching
- runtime helper import rewrites
- consumer-specific output normalization

Put compiler-sensitive work in a native backend or in a separate IR bridge:

- type analysis
- AST mutation
- call-site recognition
- `ts.Program` / `ts.TypeChecker` transformer compatibility

## Transform Development Guide

This is the recommended path for a new transform consumer.

### 1. Publish a tiny Node plugin entry

Create a package entry such as `my-lib/lib/transform`.

```ts
import { definePlugin } from "@typia/ttsc";
import * as path from "node:path";

export default definePlugin((config, context) => ({
  name: "my-lib",
  native: {
    mode: "my-lib",
    binary: path.resolve(__dirname, "../../native/ttsc-my-lib.js"),
    contractVersion: 1,
    capabilities: ["rewrite", "diagnostics"],
  },
  transformOutput(output) {
    return output.code;
  },
}));
```

The factory receives the raw `compilerOptions.plugins[]` entry as `config` and
the resolved project locations as `context`. Use this entry for
package-relative asset lookup, feature flags, diagnostics labels, and manifest
construction. Keep type analysis and AST rewriting in the native backend.

### 2. Add the plugin to `tsconfig.json`

```json
{
  "compilerOptions": {
    "plugins": [{ "transform": "my-lib/lib/transform" }]
  }
}
```

The same entry is consumed by the CLI and by the JS API.

### 3. Call `ttsc` from a build

```bash
ttsc
ttsc --noEmit
ttsc --outDir bin
```

The host loads the plugin, selects `native.mode`, and runs the selected native
backend. The user should not have to pass `--rewrite-mode` for normal use.

### 4. Reuse the same contract from a bundler

```ts
import { transform } from "@typia/ttsc";

const code = transform({
  cwd: "/project",
  file: "/project/src/index.ts",
  tsconfig: "/project/tsconfig.json",
  plugins: [{ transform: "my-lib/lib/transform" }],
});
```

When `plugins` is supplied, it replaces the `tsconfig` plugin list. This is
useful for bundlers that want deterministic plugin state.

### 5. Keep the compiler boundary honest

`typescript-go` exposes a new compiler lane. A `ttsc` transform should exchange
stable artifacts:

- plugin manifest
- serialized request/response
- generated JavaScript
- emitted asset list
- diagnostic payload

Design transforms around those artifacts. Treat `typescript-go` internal Go
structs, TypeScript's old JS `ts.Node` objects, and typia-specific helper names
as implementation details.

### Factory context

A plugin factory receives:

- `binary`: the fallback `ttsc` native binary path
- `cwd`: invocation working directory
- `projectRoot`: resolved project root
- `tsconfig`: resolved project config path

Use this if the plugin needs to locate assets relative to the consumer package or project root.

## Host Model

The current host is deliberately split:

- the public CLI / JS API lives in Node
- the generic compiler driver lives in Go
- consumer plugins may point the host at their own native binary

This allows:

- one shared Node-side plugin resolution pipeline
- consumer-specific native analyzers / rewriters
- bundlers and runners to reuse the same surface

## Current Constraints

These are real current constraints, not future ideals.

### 1. One native mode per invocation

Today `@typia/ttsc` allows only one `native.mode` / `native.binary` pair per invocation.

If two loaded plugins request different native modes or binaries, the host throws.

That means:

- composing multiple native consumer plugins in one build is not supported yet
- text-only `transformOutput()` plugins can still stack

### 2. `transformOutput()` is JS-text level only

There is no JS-side AST hook in the plugin contract today.

If you need:

- type analysis
- AST mutation
- call-site recognition

that work must happen in the native consumer backend, not in `transformOutput()`.

### 3. `plugins` override replaces the tsconfig list

In the JS API, passing `plugins` replaces the tsconfig plugin list rather than merging with it.

This is deliberate but easy to miss when writing adapters.

### 4. Stable `typescript@7` is not the current default

The current documented and implemented setup lane is still `@typescript/native-preview`.

## Typical Integration Patterns

### Consumer package

This is what `typia` does today:

- publish a tsconfig plugin entry such as `typia/lib/transform`
- point that entry at a consumer-native binary
- optionally layer JS-side output transforms on top

### Bundler adapter

This is what `@typia/unplugin` does today:

- call `transform()` for per-file rewrites
- supply an explicit plugin list when it wants to bypass tsconfig state
- let `@typia/ttsc` select the native backend

### Runner

This is what `@typia/ttsx` does today:

- use `transform()` for single-file hot execution
- use `build()` when it has to emit an ESM project into a cache directory

## Development

```bash
# TypeScript side
pnpm build
pnpm test:ts

# Go side
pnpm go:build
pnpm go:test
pnpm go:vet

# Both
pnpm test
```

Go 1.26+ is expected for the native side.

## Layout

```
toolchain/ttsc/
├── src/launcher/      # public CLI launcher scripts
├── native/            # local generated Go binary from pnpm go:build
├── src/               # JS host, plugin contract, platform resolution, API
├── driver/            # generic native rewrite / emit driver
├── cmd/ttsc/          # standalone native binary
└── test/              # JS-side tests
```

## License

MIT. See [../../LICENSE](../../LICENSE).
