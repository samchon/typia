# TypeScript-JSON
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/samchon/typescript-json/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/typescript-json.svg)](https://www.npmjs.com/package/typescript-json)
[![Downloads](https://img.shields.io/npm/dm/typescript-json.svg)](https://www.npmjs.com/package/typescript-json)
[![Build Status](https://github.com/samchon/typescript-json/workflows/build/badge.svg)](https://github.com/samchon/typescript-json/actions?query=workflow%3Abuild)
[![Guide Documents](https://img.shields.io/badge/wiki-documentation-forestgreen)](https://github.com/samchon/typescript-json/wiki)

```typescript
// RUNTIME VALIDATORS
export function is<T>(input: unknown | T): input is T; // returns boolean
export function assert<T>(input: unknown | T): T; // throws TypeGuardError
export function validate<T>(input: unknown | T): IValidation<T>; // detailed

// STRICT VALIDATORS
export function equals<T>(input: unknown: T): input is T;
export function assertEquals<T>(input: unknown | T): T;
export function validateEquals<T>(input: unknown | T): IValidation<T>;

// JSON
export function application<T>(): IJsonApplication; // JSON schema
export function assertParse<T>(input: string): T; // type safe parser
export function assertStringify<T>(input: T): string; // safe and faster
    // +) isParse, validateParse 
    // +) stringify, isStringify, validateStringify
```

`typescript-json` is a transformer library of TypeScript, supporting below features:

  - Super-fast Runtime Validators
  - Safe JSON parse and fast stringify functions
  - JSON schema generator

All functions in `typescript-json` require **only one line**. You don't need any extra dedication like JSON schema definitions or decorator function calls. Just call `typescript-json` function with only one line like `TSON.assert<T>(input)`.

Also, as `typescript-json` performs AOT (Ahead of Time) compilation skill, its performance is much faster than other competitive libaries. For an example, when comparing validate function `is()` with other competitive libraries, `typescript-json` is maximum **15,000x times faster** than `class-validator`.

![Is Function Benchmark](https://github.com/samchon/typescript-json/raw/master/benchmark/results/11th%20Gen%20Intel(R)%20Core(TM)%20i5-1135G7%20%40%202.40GHz/images/is.svg)

> Measured on [Intel i5-1135g7, Surface Pro 8](https://github.com/samchon/typescript-json/tree/master/benchmark/results/11th%20Gen%20Intel(R)%20Core(TM)%20i5-1135G7%20%40%202.40GHz#is)




## Setup
### NPM Package
At first, install this `typescript-json` by the `npm install` command. 

Also, you need additional `devDependencies` to compile the TypeScript code with transformation. Therefore, install those all libraries `typescript`, `ttypescript` and `ts-node`. Inform that, `ttypescript` is not mis-writing. Do not forget to install the `ttypescript`.

```bash
npm install --save typescript-json

# ENSURE THOSE PACKAGES ARE INSTALLED
npm install --save-dev typescript
npm install --save-dev ttypescript
npm install --save-dev ts-node
```

### tsconfig.json
After the installation, you've to configure `tsconfig.json` file like below. 

Add a property `transform` and its value as `typescript-json/lib/transform` into `compilerOptions.plugins` array. When configuring, I recommend you to use the `strict` option, to enforce developers to distinguish whether each property is nullable or undefindable.

Also, you can configure additional properties like `numeric` and `functional`. The first, `numeric` is an option whether to test `Number.isNaN()` and `Number.isFinite()` to numeric value or not. The second, `functional` is an option whether to test function type or not. Default values of those options are all `true`.

```typescript
{
  "compilerOptions": {
    "strict": true,
    "plugins": [
      {
        "transform": "typescript-json/lib/transform",
        // "functional": true, // test function type
        // "numeric": true, // test `isNaN()` and `isFinite()`
      }
    ]
  }
}
```

After the `tsconfig.json` definition, you can compile `typescript-json` utilized code by using `ttypescript`. If you want to run your TypeScript file through `ts-node`, use `-C ttypescript` argument like below:

```bash
# COMPILE
npx ttsc

# WITH TS-NODE
npx ts-node -C ttypescript
```

### vite
Just open `vite.config.ts` file and assign `typescript: ttsc` property like below.

For reference, don't forget configuring [`tsconfig.json`](#tsconfigjson) file of above.

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
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

### webpack
If you're using `webpack` with `ts-loader`, configure the `webpack.config.js` file like below.

```javascript
const transform = require("typescript-json/lib/transform").default;

module.exports = {
    // I am hiding the rest of the webpack config
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
                options: {
                    getCustomTransformers: program => ({
                        before: [transform(program)]
                        // before: [
                        //     transform(program, {
                        //         functional: true,
                        //         numeric: true
                        // })
                        // ]
                    })
                }
            }
        ]
    }
};
```



## Features
[![Guide Documents](https://img.shields.io/badge/wiki-documentation-forestgreen)](https://github.com/samchon/typescript-json/wiki)

In here README documents, only summarized informations are provided. 

For more details, please refer to the [Guide Documents (wiki)](https://github.com/samchon/typescript-json/wiki).

> - **Runtime Validators**
>   - [powerful validator](https://github.com/samchon/typescript-json/wiki/Runtime-Validators#powerful-validator)
>   - [`is()` function](https://github.com/samchon/typescript-json/wiki/Runtime-Validators#is-function)
>   - [`assert()` function](https://github.com/samchon/typescript-json/wiki/Runtime-Validators#assert-function)
>   - [`validate()` function](https://github.com/samchon/typescript-json/wiki/Runtime-Validators#validate-function)
>   - [strict validators](https://github.com/samchon/typescript-json/wiki/Runtime-Validators#strict-validators)
>   - [factory functions](https://github.com/samchon/typescript-json/wiki/Runtime-Validators#factory-functions)
>   - [comment tags](https://github.com/samchon/typescript-json/wiki/Runtime-Validators#comment-tags)
> - **Enhanced JSON**
>   - [JSON schema](https://github.com/samchon/typescript-json/wiki/Enhanced-JSON#json-schema)
>   - [`parse()` functions](https://github.com/samchon/typescript-json/wiki/Enhanced-JSON#parse-functions)
>   - [`stringify()` functions](https://github.com/samchon/typescript-json/wiki/Enhanced-JSON#stringify-functions)
>   - [comment tags](https://github.com/samchon/typescript-json/wiki/Enhanced-JSON#comment-tags)

### Runtime Validators
```typescript
// ALLOW SUPERFLUOUS PROPERTIES
export function is<T>(input: T | unknown): input is T; // returns boolean
export function assert<T>(input: T | unknown): T; // throws `TypeGuardError`
export function validate<T>(input: T | unknown): IValidation<T>; // detailed

// DO NOT ALLOW SUPERFLUOUS PROPERTIES
export function equals<T>(input: T | unknown): boolean;
export function assertEquals<T>(input: T | unknown): T;
export function validateEquals<T>(input: T | unknown): IValidation<T>;

// REUSABLE FACTORY FUNCTIONS
export function createIs<T>(): (input: unknown) => T;
export function createAssert<T>(): (input: unknown) => T;
export function createValidate<T>(): (input: unknown) => IValidation<T>;
export function createEquals<T>(): (input: unknown) => boolean;
export function createAssertEquals<T>(): (input: unknown) => T;
export function createValidateEquals<T>(): (input: unknown) => IValidation<T>;
```

`typescript-json` supports three type of validator functions:

  - `is()`: returns `false` if not matched with the type `T`
  - `assert()`: throws a [`TypeGuardError`](https://github.com/samchon/typescript-json/blob/master/src/TypeGuardError.ts) when not matched
  - `validate()`
    - when matched, returns [`IValidation.ISuccess<T>`](https://github.com/samchon/typescript-json/blob/master/src/IValidation.ts) with `value` property
    - when not matched, returns [`IValidation.IFailure`](https://github.com/samchon/typescript-json/blob/master/src/IValidation.ts) with `errors` property

Also, if you want more strict validator functions that even do not allowing superfluous properties not written in the type `T`, you can use those functions instead; `equals()`, `assertEquals()`, `validateEquals()`. Otherwise you want to create resuable validator functions,  you can utilize factory functions like `createIs()` instead.

When you want to add special validation logics, like limiting range of numeric values, you can do it through comment tags. If you want to know about it, please visit the Guide Documents ([Features > Runtime Validators > Comment Tags](https://github.com/samchon/typescript-json/wiki/Runtime-Validators#comment-tags)).

<!-- > By the way, comparing those validator functions with other competitive libaries, you can find that only `typescript-json` is able to validate complicate union type. It is because `typescript-json` is supporting entire TypeScript type specs. Therefore, adapt `typescript-json` with confidence. It can validate everything.
> 
> Moreover, validation speed of `typescript-json` is extremely faster than any other validation libraries. For an example, `typescript-json` is maximum 15,000x times faster than `class-validator`. Visit [benchmarks](https://github.com/samchon/typescript-json/wiki/Benchmarks#validate-functions) section of Guide Documents and feel how fast `typescript-json` is.
> 
> Components               | `TSON` | `TypeBox` | `ajv` | `io-ts` | `zod` | `C.V.`
> -------------------------|--------|-----------|-------|---------|-------|------------------
> **Easy to use**          | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ 
> [Object (simple)](https://github.com/samchon/typescript-json/blob/master/test/structures/ObjectSimple.ts)          | ✔ | ✔ | ✔ | ✔ | ✔ | ✔
> [Object (hierarchical)](https://github.com/samchon/typescript-json/blob/master/test/structures/ObjectHierarchical.ts)    | ✔ | ✔ | ✔ | ✔ | ✔ | ✔
> [Object (recursive)](https://github.com/samchon/typescript-json/blob/master/test/structures/ObjectRecursive.ts)       | ✔ | ❌ | ✔ | ✔ | ✔ | ✔ | ✔
> [Object (union, implicit)](https://github.com/samchon/typescript-json/blob/master/test/structures/ObjectUnionImplicit.ts) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌
> [Object (union, explicit)](https://github.com/samchon/typescript-json/blob/master/test/structures/ObjectUnionExplicit.ts) | ✔ | ✔ | ✔ | ✔ | ✔ | ❌
> [Object (additional tags)](https://github.com/samchon/typescript-json/#comment-tags)        | ✔ | ✔ | ✔ | ✔ | ✔ | ✔
> [Object (template literal types)](https://github.com/samchon/typescript-json/blob/master/test/structures/TemplateUnion.ts) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌
> [Object (dynamic properties)](https://github.com/samchon/typescript-json/blob/master/test/structures/DynamicTemplate.ts) | ✔ | ✔ | ✔ | ❌ | ❌ | ❌
> [Array (hierarchical)](https://github.com/samchon/typescript-json/blob/master/test/structures/ArrayHierarchical.ts)     | ✔ | ✔ | ✔ | ✔ | ✔ | ✔
> [Array (recursive)](https://github.com/samchon/typescript-json/blob/master/test/structures/ArrayRecursive.ts)        | ✔ | ✔ | ✔ | ✔ | ✔ | ❌
> [Array (recursive, union)](https://github.com/samchon/typescript-json/blob/master/test/structures/ArrayRecursiveUnionExplicit.ts) | ✔ | ✔ | ❌ | ✔ | ✔ | ❌
> [Array (R+U, implicit)](https://github.com/samchon/typescript-json/blob/master/test/structures/ArrayRecursiveUnionImplicit.ts)    | ✅ | ❌ | ❌ | ❌ | ❌ | ❌
> [**Ultimate Union Type**](https://github.com/samchon/typescript-json/blob/master/src/schemas/IJsonSchema.ts)  | ✅ | ❌ | ❌ | ❌ | ❌ | ❌
> 
> - TSON: `typescript-json`
> - C.V.: `class-validator` -->

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

`typescript-json` supports enhanced JSON functions.

  - `application()`: generate JSON schema with only one line
    - you can complement JSON schema contents through [comment tags](https://github.com/samchon/typescript-json/wiki/Enhanced-JSON#comment-tags)
  - `assertParse()`: parse JSON string safely with type validation
  - `isStringify()`: maximum 10x faster JSON stringify fuction even type safe

![JSON string conversion speed](https://github.com/samchon/typescript-json/raw/master/benchmark/results/AMD%20Ryzen%207%205800H%20with%20Radeon%20Graphics/images/stringify.svg)

> Measured on [AMD R7 5800H](https://github.com/samchon/typescript-json/tree/master/benchmark/results/AMD%20Ryzen%207%205800H%20with%20Radeon%20Graphics#stringify)





## Appendix
### Nestia
https://github.com/samchon/nestia

Automatic `SDK` and `Swagger` generator for `NestJS`, evolved than ever.

`nestia` is an evolved `SDK` and `Swagger` generator, which analyzes your `NestJS` server code in the compilation level. With `nestia` and compilation level analyzer, you don't need to write any swagger or class-validator decorators.

Reading below table and example code, feel how the "compilation level" makes `nestia` stronger.

Components | `nestia`::SDK | `nestia`::swagger | `@nestjs/swagger`
-----------|---|---|---
Pure DTO interface | ✔ | ✔ | ❌
Description comments | ✔ | ✔ | ❌
Simple structure | ✔ | ✔ | ✔
Generic type | ✔ | ✔ | ❌
Union type | ✔ | ✔ | ▲
Intersection type | ✔ | ✔ | ▲
Conditional type | ✔ | ▲ | ❌
Auto completion | ✔ | ❌ | ❌
Type hints | ✔ | ❌ | ❌
5x faster `JSON.stringify()` | ✔ | ❌ | ❌
Ensure type safety | ✅ | ❌ | ❌

```typescript
// IMPORT SDK LIBRARY GENERATED BY NESTIA
import api from "@samchon/shopping-api";
import { IPage } from "@samchon/shopping-api/lib/structures/IPage";
import { ISale } from "@samchon/shopping-api/lib/structures/ISale";
import { ISaleArticleComment } from "@samchon/shopping-api/lib/structures/ISaleArticleComment";
import { ISaleQuestion } from "@samchon/shopping-api/lib/structures/ISaleQuestion";

export async function trace_sale_question_and_comment
    (connection: api.IConnection): Promise<void>
{
    // LIST UP SALE SUMMARIES
    const index: IPage<ISale.ISummary> = await api.functional.shoppings.sales.index
    (
        connection,
        "general",
        { limit: 100, page: 1 }
    );

    // PICK A SALE
    const sale: ISale = await api.functional.shoppings.sales.at
    (
        connection, 
        index.data[0].id
    );
    console.log("sale", sale);

    // WRITE A QUESTION
    const question: ISaleQuestion = await api.functional.shoppings.sales.questions.store
    (
        connection,
        "general",
        sale.id,
        {
            title: "How to use this product?",
            body: "The description is not fully enough. Can you introduce me more?",
            files: []
        }
    );
    console.log("question", question);

    // WRITE A COMMENT
    const comment: ISaleArticleComment = await api.functional.shoppings.sales.comments.store
    (
        connection,
        "general",
        sale.id,
        question.id,
        {
            body: "p.s) Can you send me a detailed catalogue?",
            anonymous: false
        }
    );
    console.log("comment", comment);
}
```

### Nestia-Helper
https://github.com/samchon/nestia-helper

Helper library of `NestJS`, using this `typescript-json`.

`nestia-helper` is a helper library of `NestJS`, which boosts up the `JSON.stringify()` speed 5x times faster about the API responses, automatically. Also, `nestia-helper` supports automatic validation of request body, that is maximum 15,000x times faster than legacy `class-validator` too. 

```typescript
import helper from "nestia-helper";
import * as nest from "@nestjs/common";

@nest.Controller("bbs/articles")
export class BbsArticlesController
{
    // automatic TSON.stringify() for response body
    @helper.TypedRoute.Get()
    public store(
        // automatic TSON.assert() for request body
        @helper.TypedBody() input: IBbsArticle.IStore
    ): Promise<IBbsArticle>;
}
```
