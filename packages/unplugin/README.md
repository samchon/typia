# `@typia/unplugin`

![Typia Logo](https://typia.io/logo.png)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/samchon/typia/blob/master/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/typia.svg)](https://www.npmjs.com/package/typia)
[![NPM Downloads](https://img.shields.io/npm/dm/typia.svg)](https://www.npmjs.com/package/typia)
[![Build Status](https://github.com/samchon/typia/workflows/test/badge.svg)](https://github.com/samchon/typia/actions?query=workflow%3Atest)
[![Guide Documents](https://img.shields.io/badge/Guide-Documents-forestgreen)](https://typia.io/docs/)
[![Gurubase](https://img.shields.io/badge/Gurubase-Document%20Chatbot-006BFF)](https://gurubase.io/g/typia)
[![Discord Badge](https://img.shields.io/badge/discord-samchon-d91965?style=flat&labelColor=5866f2&logo=discord&logoColor=white&link=https://discord.gg/E94XhzrUCZ)](https://discord.gg/E94XhzrUCZ)

## Why

**Bundler plugin for [Typia](https://typia.io/)**

Typia is fantastic, but it can be hard to set up, especially for frontend development.

If you use bundlers like `Vite`, it can be even harder to configure.

This unplugin aims to make it easier to use Typia in your projects.

## Install

First, install `typia` and set it up:

```bash
# npm
npm install typia
npx typia setup

# pnpm
pnpm install typia
pnpm typia setup --manager pnpm

# yarn (yarn berry is not supported)
yarn add typia
yarn typia setup --manager yarn

# bun
bun add typia
bun typia setup
```

Then, install `@typia/unplugin`:

```bash
# npm
npm install -D @typia/unplugin

# pnpm
pnpm install -D @typia/unplugin

# yarn
yarn add -D @typia/unplugin

# bun
bun add -D @typia/unplugin
```

More details about setting up Typia can be found in the [Typia Docs](https://typia.io/docs/setup/#typiaunplugin).

Then, add the unplugin to your favorite bundler:

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import UnpluginTypia from '@typia/unplugin/vite';

export default defineConfig({
  plugins: [
    UnpluginTypia({ /* options */ }), // should be placed before other plugins like `react`, `svelte`, etc.
  ],
});
```

> When using typia with types imported from non-relative paths like tsconfig `compilerOptions.paths` or relative to
> tsconfig `compilerOptions.baseUrl`, they must be defined in vite.config.ts under [resolve.alias](https://vitejs.dev/config/shared-options#resolve-alias)
> in order to be resolved, according to vite's resolution mechanism.

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import UnpluginTypia from '@typia/unplugin/esbuild';

export default {
  plugins: [
    UnpluginTypia({ /* options */ }),
  ],
};
```

<br></details>

<details>
<summary>Next.js</summary><br>

```js
// next.config.mjs
import unTypiaNext from '@typia/unplugin/next';

/** @type {import('next').NextConfig} */
const nextConfig = { /* your next.js config */};

/** @type {import("@typia/unplugin").Options} */
const unpluginTypiaOptions = { /* your @typia/unplugin options */ };

export default unTypiaNext(nextConfig, unpluginTypiaOptions);

// you can omit the @typia/unplugin options when you don't need to customize it
// export default unTypiaNext(nextConfig);
```

<br></details>

<details>
<summary>Bun.build</summary><br>

### Example 1: Using for building script

```ts
// build.ts
import UnpluginTypia from '@typia/unplugin/bun';

await Bun.build({
  entrypoints: ['./index.ts'],
  outdir: './out',
  plugins: [
    UnpluginTypia({ /* your options */})
  ]
});
```

For building the script:

```sh
bun run ./build.ts
node ./out/index.js
```

Check the [Plugins – Bundler | Bun Docs](https://bun.sh/docs/bundler/plugins) for more details.

### Example 2: Using for running script

```ts
// preload.ts
import { plugin } from 'bun';
import UnpluginTypia from '@typia/unplugin/bun';

plugin(UnpluginTypia({ /* your options */}));
```

```toml
# bunfig.toml
preload = ["./preload.ts"]

[test]
preload = ["./preload.ts"]
```

For running the script:

```sh
bun run ./index.ts
```

Check the [Plugins – Runtime | Bun Docs](https://bun.sh/docs/runtime/plugins) for more details.

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import UnpluginTypia from '@typia/unplugin/rollup';

export default {
  plugins: [
    UnpluginTypia({ /* options */ }),
  ],
};
```

<br></details>

<details>
<summary>Rolldown</summary><br>

```ts
// rolldown.config.js
import UnpluginTypia from '@typia/unplugin/rolldown';

export default {
  plugins: [
    UnpluginTypia({ /* options */ }),
  ],
};
```

<br></details>

<details>
<summary>Webpack</summary><br>

```js
// webpack.config.js

const { default: UnpluginTypia } = require('@typia/unplugin/webpack');

module.exports = {
  plugins: [
    UnpluginTypia({ /* options */ }),
  ],
};
```

<br></details>

<details>
<summary>Rspack</summary><br>

```js
// rspack.config.js

const { default: UnpluginTypia } = require('@typia/unplugin/rspack');

module.exports = {
  plugins: [
    UnpluginTypia({ /* options */ }),
  ],
};
```

<br></details>

<details>
<summary>Farm</summary><br>

```ts
// farm.config.ts
import UnpluginTypia from '@typia/unplugin/farm';

export default {
  plugins: [
    UnpluginTypia({ /* options */ }),
  ],
};
```

<br></details>

## Supported Bundlers

- Bun
- esbuild
- Farm
- Next.js
- Rolldown
- Rollup
- Rspack
- Vite
- Webpack

## Supported File Extensions

- `.ts`
- `.tsx`
- `.mts`
- `.mtsx`
- `.svelte` (only script tag with `lang="ts"`)

## Acknowledgements

This project was originally created by [@ryoppippi](https://github.com/ryoppippi) as [`@ryoppippi/unplugin-typia`](https://github.com/ryoppippi/unplugin-typia).

Now it has been integrated into the official Typia repository as `@typia/unplugin`.
