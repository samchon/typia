> ## Deprecated
> `typescript-json` has been renamed to [`typia`](https://github.com/samchon/typia)

# Typia
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/samchon/typia/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/typia.svg)](https://www.npmjs.com/package/typia)
[![Downloads](https://img.shields.io/npm/dm/typia.svg)](https://www.npmjs.com/package/typia)
[![Build Status](https://github.com/samchon/typia/workflows/build/badge.svg)](https://github.com/samchon/typia/actions?query=workflow%3Abuild)
[![Guide Documents](https://img.shields.io/badge/wiki-documentation-forestgreen)](https://github.com/samchon/typia/wiki)

```typescript
// RUNTIME VALIDATORS
export function is<T>(input: unknown | T): input is T; // returns boolean
export function assert<T>(input: unknown | T): T; // throws TypeGuardError
export function validate<T>(input: unknown | T): IValidation<T>; // detailed

// JSON
export function application<T>(): IJsonApplication; // JSON schema
export function assertParse<T>(input: string): T; // type safe parser
export function assertStringify<T>(input: T): string; // safe and faster
    // +) isParse, validateParse 
    // +) stringify, isStringify, validateStringify

// PROTOCOL BUFFER
export function message<T>(): string; // Protocol Buffer message
export function assertDecode<T>(buffer: Buffer): T; // safe decoder
export function assertEncode<T>(input: T): Uint8Array; // safe encoder
    // +) decode, isDecode, validateDecode
    // +) encode, isEncode, validateEncode
```

`typia` is a transformer library of TypeScript, supporting below features:

  - Super-fast Runtime Validators
  - Safe JSON parse and fast stringify functions
  - Protocol Buffer encoder and decoder
  - Protobuf/JSON schema generator

All functions in `typia` require **only one line**. You don't need any extra dedication like JSON schema definitions or decorator function calls. Just call `typia` function with only one line like `typia.assert<T>(input)`.

Also, as `typia` performs AOT (Ahead of Time) compilation skill, its performance is much faster than other competitive libaries. For an example, when comparing validate function `is()` with other competitive libraries, `typia` is maximum **15,000x times faster** than `class-validator`.

![Is Function Benchmark](https://github.com/samchon/typia/raw/master/benchmark/results/11th%20Gen%20Intel(R)%20Core(TM)%20i5-1135G7%20%40%202.40GHz/images/is.svg)

> Measured on [Intel i5-1135g7, Surface Pro 8](https://github.com/samchon/typia/tree/master/benchmark/results/11th%20Gen%20Intel(R)%20Core(TM)%20i5-1135G7%20%40%202.40GHz#is)




## Sponsors
Thanks for your support.

Your donation would encourage `typia` development.

[![Backers](https://opencollective.com/typia/backers.svg?width=1000)](https://opencollective.com/typia)




## Setup
### Setup Wizard
```bash
npx typia setup
```

Just type `npx typia setup`, that's all.

Also, you can specify package manager by `--manager` argument.

```bash
npx typia setup --manager npm
npx typia setup --manager pnpm
npx typia setup --manager yarn
```

After the setup, you can compile `typia` utilization code by using `ttsc` ([`ttypescript`](https://github.com/cevek/ttypescript)) command. If you want to run your TypeScript file directly through `ts-node`, add `-C ttypescript` argument like below:

```bash
# COMPILE THROUGH TTYPESCRIPT
npx ttsc

# RUN TS-NODE WITH TTYPESCRIPT
npx ts-node -C ttypescript src/index.ts
```

### Manual Setup
If you want to install and setup `typia` manually, read [Guide Documents - Setup](https://github.com/samchon/typia/wiki/Setup).

  - [Setup Wizard](https://github.com/samchon/typia/wiki/Setup#setup-wizard)
  - [NPM Packages](https://github.com/samchon/typia/wiki/Setup#npm-packages)
  - [`tsconfig.json`](https://github.com/samchon/typia/wiki/Setup#tsconfigjson)
  - [vite](https://github.com/samchon/typia/wiki/Setup#vite)
  - [webpack](https://github.com/samchon/typia/wiki/Setup#webpack)

Also, by [Guide Documents - Setup](https://github.com/samchon/typia/wiki/Setup) section, you can learn how to use pure TypeScript compiler `tsc` with [`ts-patch`](https://github.com/nonara/ts-patch), instead of installing the `ttypescript` compiler with `ttsc` command.

### Vite
When you want to setup `typia` on your frontend project with [`vite`](https://vitejs.dev/), just configure `vite.config.ts` like below.

For reference, don't forget running [Setup Wizard](#setup-wizard) before.

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import typescript from "@rollup/plugin-typescript";
import ttsc from "ttypescript";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    typescript({
      typescript: ttsc,
    })
  ]
});
```




## Features
[![Guide Documents](https://img.shields.io/badge/wiki-documentation-forestgreen)](https://github.com/samchon/typia/wiki)

In here README documents, only summarized informations are provided. 

For more details, refer to the [Guide Documents (wiki)](https://github.com/samchon/typia/wiki).

> - **Runtime Validators**
>   - [powerful validator](https://github.com/samchon/typia/wiki/Runtime-Validators#powerful-validator)
>   - [`is()` function](https://github.com/samchon/typia/wiki/Runtime-Validators#is-function)
>   - [`assert()` function](https://github.com/samchon/typia/wiki/Runtime-Validators#assert-function)
>   - [`validate()` function](https://github.com/samchon/typia/wiki/Runtime-Validators#validate-function)
>   - [strict validators](https://github.com/samchon/typia/wiki/Runtime-Validators#strict-validators)
>   - [factory functions](https://github.com/samchon/typia/wiki/Runtime-Validators#factory-functions)
>   - [comment tags](https://github.com/samchon/typia/wiki/Runtime-Validators#comment-tags)
> - **Enhanced JSON**
>   - [JSON schema](https://github.com/samchon/typia/wiki/Enhanced-JSON#json-schema)
>   - [`parse()` functions](https://github.com/samchon/typia/wiki/Enhanced-JSON#parse-functions)
>   - [`stringify()` functions](https://github.com/samchon/typia/wiki/Enhanced-JSON#stringify-functions)
>   - [comment tags](https://github.com/samchon/typia/wiki/Enhanced-JSON#comment-tags)
> - **Protocol Buffer**
>   - [`message()` function](https://github.com/samchon/typia/wiki/Protocol-Buffer#message-function)
>   - [`decode()` function](https://github.com/samchon/typia/wiki/Protocol-Buffer#decode-function)
>   - [`encode()` functions](https://github.com/samchon/typia/wiki/Protocol-Buffer#encode-functions)
>   - [comment tags](https://github.com/samchon/typia/wiki/Protocol-Buffer#comment-tags)
>   - [weaknesses](https://github.com/samchon/typia/wiki/Protocol-Buffer#weaknesses)

### Runtime Validators
```typescript
// ALLOW SUPERFLUOUS PROPERTIES
export function is<T>(input: T | unknown): input is T; // returns boolean
export function assert<T>(input: T | unknown): T; // throws `TypeGuardError`
export function validate<T>(input: T | unknown): IValidation<T>; // detailed

// DO NOT ALLOW SUPERFLUOUS PROPERTIES
export function equals<T>(input: T | unknown): input is T;
export function assertEquals<T>(input: T | unknown): T;
export function validateEquals<T>(input: T | unknown): IValidation<T>;

// REUSABLE FACTORY FUNCTIONS
export function createIs<T>(): (input: unknown) => input is T;
export function createAssert<T>(): (input: unknown) => T;
export function createValidate<T>(): (input: unknown) => IValidation<T>;
export function createEquals<T>(): (input: unknown) => input is T;
export function createAssertEquals<T>(): (input: unknown) => T;
export function createValidateEquals<T>(): (input: unknown) => IValidation<T>;
```

`typia` supports three type of validator functions:

  - `is()`: returns `false` if not matched with the type `T`
  - `assert()`: throws a [`TypeGuardError`](https://github.com/samchon/typia/blob/master/src/TypeGuardError.ts) when not matched
  - `validate()`
    - when matched, returns [`IValidation.ISuccess<T>`](https://github.com/samchon/typia/blob/master/src/IValidation.ts) with `value` property
    - when not matched, returns [`IValidation.IFailure`](https://github.com/samchon/typia/blob/master/src/IValidation.ts) with `errors` property

Also, if you want more strict validator functions that even do not allowing superfluous properties not written in the type `T`, you can use those functions instead; `equals()`, `assertEquals()`, `validateEquals()`. Otherwise you want to create resuable validator functions,  you can utilize factory functions like `createIs()` instead.

When you want to add special validation logics, like limiting range of numeric values, you can do it through comment tags. If you want to know about it, visit the Guide Documents ([Features > Runtime Validators > Comment Tags](https://github.com/samchon/typia/wiki/Runtime-Validators#comment-tags)).

### Enhanced JSON
```typescript
// JSON SCHEMA GENERATOR
export function application<
    Types extends unknown[],
    Purpose extends "swagger" | "ajv" = "swagger",
    Prefix extends string = Purpose extends "swagger"
        ? "#/components/schemas"
        : "components#/schemas",
>(): IJsonApplication;

// SAFE PARSER FUNCTIONS
export function isParse<T>(input: string): T | null;
export function assertParse<T>(input: string): T;
export function validateParse<T>(input: string): IValidation<T>;

// FASTER STRINGIFY FUNCTIONS
export function stringify<T>(input: T): string; // unsafe
export function isStringify<T>(input: T): string | null; // safe
export function assertStringify<T>(input: T): string;
export function validateStringify<T>(input: T): IValidation<string>;

// FACTORY FUNCTIONS
export function createAssertParse<T>(): (input: string) => T;
export function createAssertStringify<T>(): (input: T) => string;
    // +) createIsParse, createValidateParse
    // +) createStringify, createIsStringify, createValidateStringify
```

`typia` supports enhanced JSON functions.

  - `application()`: generate JSON schema with only one line
    - you can complement JSON schema contents through [comment tags](https://github.com/samchon/typia/wiki/Enhanced-JSON#comment-tags)
  - `assertParse()`: parse JSON string safely with type validation
  - `isStringify()`: maximum 10x faster JSON stringify fuction even type safe

![JSON string conversion speed](https://github.com/samchon/typia/raw/master/benchmark/results/AMD%20Ryzen%207%205800H%20with%20Radeon%20Graphics/images/stringify.svg)

> Measured on [AMD R7 5800H](https://github.com/samchon/typia/tree/master/benchmark/results/AMD%20Ryzen%207%205800H%20with%20Radeon%20Graphics#stringify)

### Protocol Buffer
```typescript
// PROTOCOL BUFFER MESSAGE
export function message<T>(): string;

// ENCODE FUNCTIONS
export function encode<T>(input: T): Uint8Array;
export function isEncode<T>(input: T): Uint8Array | null;
export function assertEncode<T>(input: T): Uint8Array;
export function validateEncode<T>(input: T): IValidation<Uint8Array>;

// DECODE FUNCTIONS
export function decode<T>(buffer: Uint8Array): T;
export function isDecode<T>(buffer: Uint8Array): T | null;
export function assertDecode<T>(buffer: Uint8Array): T;
export function validateDecode<T>(buffer: Uint8Array): IValidation<T>;

// FACTORY FUNCTIONS
export function createDecode<T>(): (input: Uint8Array) => T;
export function createEncode<T>(): (input: T) => Uint8Array;
    // +) createIsDecode, createAssertDecode, createValidateDecode
    // +) createIsEncode, createAssertEncode, createValidateEncode
```

`typia` supports Protocol Buffer.

  - `message()`: generate Protocol Buffer schema
  - `encode()`: encode JavaScript object to Protocol Buffer
  - `decode()`: decode Protocol Buffer to JavaScript object

Do not need to define any `*.proto` schema file. Just call above functions with generic argument `T`, then `typia` will generate the Protocol Buffer schema automatically, by analyzing your type `T`.

If you want to add special type like `float32`, you can do it through **comment tags**. If you want to know more about those comment tags, visit Guide Documents ([Features > Protocol Buffer > Comment Tags](https://github.com/samchon/typia/wiki/Protocol-Buffer#comment-tags)).



## Appendix
### Nestia
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/samchon/nestia/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/@nestia/core.svg)](https://www.npmjs.com/package/@nestia/core)
[![Downloads](https://img.shields.io/npm/dm/@nestia/core.svg)](https://www.npmjs.com/package/@nestia/core)
[![Build Status](https://github.com/samchon/typia/workflows/build/badge.svg)](https://github.com/samchon/nestia/actions?query=workflow%3Abuild)
[![Guide Documents](https://img.shields.io/badge/wiki-documentation-forestgreen)](https://github.com/samchon/nestia/wiki)

[Nestia](https://github.com/samchon/nestia) is a set of helper libraries for `NestJS`, supporting below features:

  - [`@nestia/core`](https://github.com/samchon/nestia#nestiacore): **15,000x times faster** validation decorator using `typia`
  - [`@nestia/sdk`](https://github.com/samchon/nestia#nestiasdk): evolved **SDK** and **Swagger** generator for `@nestia/core`
  - `nestia`: just CLI (command line interface) tool

```typescript
import { Controller } from "@nestjs/common";
import { TypedBody, TypedRoute } from "@nestia/core";

import type { IBbsArticle } from "@bbs-api/structures/IBbsArticle";

@Controller("bbs/articles")
export class BbsArticlesController {
    /** 
     * Store a new content.
     * 
     * @param inupt Content to store
     * @returns Newly archived article
     */
    @TypedRoute.Post() // 10x faster and safer JSON.stringify()
    public async store(
        @TypedBody() input: IBbsArticle.IStore // super-fast validator
    ): Promise<IBbsArticle>; 
        // do not need DTO class definition, 
        // just fine with interface
}
```
