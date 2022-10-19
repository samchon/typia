# TypeScript-JSON
Super-fast Runtime validators and `JSON.stringify()` functions, with only one line.

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/samchon/typescript-json/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/typescript-json.svg)](https://www.npmjs.com/package/typescript-json)
[![Downloads](https://img.shields.io/npm/dm/typescript-json.svg)](https://www.npmjs.com/package/typescript-json)
[![Build Status](https://github.com/samchon/typescript-json/workflows/build/badge.svg)](https://github.com/samchon/typescript-json/actions?query=workflow%3Abuild)
[![Guide Documents](https://img.shields.io/badge/wiki-documentation-forestgreen)](https://github.com/samchon/typescript-json/wiki)

  - Github: https://github.com/samchon/typescript-json
  - NPM: https://www.npmjs.com/package/typescript-json
  - Guide Documents: https://github.com/samchon/typescript-json/wiki

```typescript
import TSON from "typescript-json";

//----
// RUNTIME VALIDATORS
//----
// ALLOW SUPERFLUOUS PROPERTIES
TSON.assertType<T>(input); // throws exception
TSON.is<T>(input); // returns boolean value
TSON.validate<T>(input); // archives all errors

// DO NOT ALLOW SUPERFLUOUS PROPERTIES
TSON.equals<T>(input); // returns boolean value
TSON.assertEquals<T>(input); // throws exception
TSON.validateEquals<T>(input); // archives all errors

//----
// APPENDIX FUNCTIONS
//----
TSON.stringify<T>(input); // 5x faster JSON.stringify()
TSON.application<[T, U, V], "swagger">(); // JSON schema application generator
TSON.create<T>(input); // 2x faster object creator (only one-time construction)
```

`typescript-json` is a transformer library providing JSON related functions.

  - Powerful Runtime type checkers:
    - Performed by only one line, `TSON.assertType<T>(input)`
    - Only one library which can validate union type
    - Maximum 2,000x faster than other libraries
  - 5x faster `JSON.stringify()` function:
    - Performed by only one line: `TSON.stringify<T>(input)`
    - Only one library which can stringify union type
    - 10,000x faster optimizer construction time than similar libraries

![Is Function Benchmark](https://user-images.githubusercontent.com/13158709/196679891-d06ef698-603b-49f8-98c8-d140b813a06d.png)

> Measured on AMD R9 5900HX, ASUS Rog Strix G15 (numeric option: `false`)




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
### Runtime Validators
```typescript
// ALLOW SUPERFLUOUS PROPERTIES
export function is<T>(input: T): boolean; // true or false
export function assertType<T>(input: T): T; // throws `TypeGuardError`
export function validate<T>(input: T): IValidation; // detailed reasons

// DO NOT ALLOW SUPERFLUOUS PROPERTIES
export function equals<T>(input: T): boolean;
export function assertEquals<T>(input: T): T;
export function validateEquals<T>(input: T): IValidation;

export interface IValidation {
    success: boolean;
    errors: IValidation.IError[];
}
export namespace IValidation {
    export interface IError {
        path: string;
        expected: string;
        value: any;
    }
}

export class TypeGuardError extends Error {
    public readonly method: string;
    public readonly path: string | undefined;
    public readonly expected: string;
    public readonly value: any;
}
```

> You can enhance type constraint more by using [**Comment Tags**](#comment-tags).

`typescript-json` provides three basic validator functions.

The first, `assertType()` is a function throwing `TypeGuardError` when an `input` value is different with its type, generic argument `T`. The second function, `is()` returns a `boolean` value meaning whether matched or not. The last `validate()` function archives all type errors into an `IValidation.errors` array.

If you want much strict validators that do not allow superfluous properties, you can use below functions instead. `assertEquals()` function throws `TypeGuardError`, `equals()` function returns `boolean` value, and `validateEquals()` function archives all type errors into an `IValidation.errors` array.

Basic | Strict
------|--------
`assertType` | `assertEquals`
`is` | `equals`
`validate` | `validateEquals`

```typescript
interface IPerson {
    name: string;
    age: number;
}

const person = {
    name: "Jeongho Nam",
    age: 34,
    account: "samchon", // superfluous property
};

TSON.is<IPerson>(person); // -> true, allow superfluous property
TSON.equals<IPerson>(person); // -> false, do not allow
```

Comparing those type checker functions with other similar libraries, `typescript-json` is much easier than others. For example, `ajv` requires complicate JSON schema definition that is different with the TypeScript type. Besides, `typescript-json` requires only one line.

Also, only `typescript-json` can validate union typed structure exactly. All the other libraries can check simple object type, however, none of them can validate complicate union type. The fun thing is, `ajv` requires JSON schema definition for validation, but it can't validate the JSON schema type. How contradict it is.

Components               | `TSON` | `ajv` | `io-ts` | `zod` | `C.V.`
-------------------------|-------------------|-----------------|-------|---------|------------------
**Easy to use**          | ✅ | ❌ | ❌ | ❌ | ❌ 
[Object (simple)](https://github.com/samchon/typescript-json/blob/master/test/structures/ObjectSimple.ts)          | ✔ | ✔ | ✔ | ✔ | ✔
[Object (hierarchical)](https://github.com/samchon/typescript-json/blob/master/test/structures/ObjectHierarchical.ts)    | ✔ | ❌ | ✔ | ✔ | ✔
[Object (recursive)](https://github.com/samchon/typescript-json/blob/master/test/structures/ObjectRecursive.ts)       | ✔ | ❌ | ✔ | ✔ | ✔ | ✔
[Object (union, implicit)](https://github.com/samchon/typescript-json/blob/master/test/structures/ObjectUnionImplicit.ts) | ✅ | ❌ | ❌ | ❌ | ❌
[Object (union, explicit)](https://github.com/samchon/typescript-json/blob/master/test/structures/ObjectUnionExplicit.ts) | ✔ | ✔ | ✔ | ✔ | ❌
[Object (additional tags)](https://github.com/samchon/typescript-json/#comment-tags)        | ✔ | ✔ | ✔ | ✔ | ✔
[Object (template literal types)](https://github.com/samchon/typescript-json/blob/master/test/structures/TemplateUnion.ts) | ✔ | ✔ | ❌ | ❌ | ❌
[Object (dynamic properties)](https://github.com/samchon/typescript-json/blob/master/test/structures/DynamicTemplate.ts) | ✔ | ✔ | ❌ | ❌ | ❌
[Array (hierarchical)](https://github.com/samchon/typescript-json/blob/master/test/structures/ArrayHierarchical.ts)     | ✔ | ✔ | ✔ | ✔ | ✔
[Array (recursive)](https://github.com/samchon/typescript-json/blob/master/test/structures/ArrayRecursive.ts)        | ✔ | ❌ | ✔ | ✔ | ✔
[Array (recursive, union)](https://github.com/samchon/typescript-json/blob/master/test/structures/ArrayRecursiveUnionExplicit.ts) | ✔ | ❌ | ✔ | ✔ | ❌
[Array (R+U, implicit)](https://github.com/samchon/typescript-json/blob/master/test/structures/ArrayRecursiveUnionImplicit.ts)    | ✅ | ❌ | ❌ | ❌ | ❌
[**Ultimate Union Type**](https://github.com/samchon/typescript-json/blob/master/src/schemas/IJsonSchema.ts)  | ✅ | ❌ | ❌ | ❌ | ❌

> - TSON: `typescript-json`
> - C.V.: `class-validator`

Furthermore, when union type comes, `typescript-json` is extremely faster than others. 

As you can see from the above table, `ajv` and `typescript-is` are fallen in the most union type cases. Also, they're even showing a huge different from `typescript-json`, in the time benchmark that does not care whether the validation is exact or not.

The extreme different is shown in the "ultimate union" type, when validating [JSON schema](https://github.com/samchon/typescript-json/blob/master/src/schemas/IJsonSchema.ts).

![Super-fast runtime validator](https://user-images.githubusercontent.com/13158709/196680107-f4e77835-3380-4dde-9fa3-d9d419c046e2.png)

> Measured on Intel i5-1135g7, Surface Pro 8

### Fastest JSON String Converter
```typescript
export function stringify<T>(input: T): string;
```

Super-fast JSON string conversion function.

If you call `TSON.stringify()` function instead of the native `JSON.stringify()`, the JSON conversion time would be 5x times faster. Also, you can perform such super-fast JSON string conversion very easily, by only one line: `TSON.stringify<T>(input)`.

On the other side, other similary library like `fast-json-stringify` requires complicate JSON schema definition. Furthermore, `typescript-json` can convert complicate structured data that `fast-json-stringify` cannot convert.

Comparing performance, `typescript-json` is about 5x times faster when comparing only JSON string conversion time. If compare optimizer construction time, `typescript-json` is even 10,000x times faster.

![JSON conversion speed on each CPU](https://user-images.githubusercontent.com/13158709/177259522-791578dc-fa96-4d62-9c96-b22cb9575450.png)

> AMD CPU shows dramatic improvement

### JSON Schema Generation
```typescript
export function application<
    Types extends unknown[],
    Purpose extends "swagger" | "ajv" = "swagger",
    Prefix extends string = Purpose extends "swagger"
        ? "#/components/schemas"
        : "components#/schemas",
>(): IJsonApplication;
```

> You can enhance JSON schema more by using [**Comment Tags**](#comment-tags).

`typescript-json` even supports JSON schema application generation.

When you need to share your TypeScript types to other language, this `application()` function would be useful. It generates JSON schema definition by analyzing your `Types`. Therefore, with `typescript-json` and its `application()` function, you don't need to write JSON schema definition manually.

By the way, the reason why you're using this `application()` is for generating a swagger documents, I recommend you to use my another library [nestia](https://github.com/samchon/nestia). It will automate the swagger documents generation, by analyzing your entire backend server code.

### Comment Tags
You can enhance [Runtime Validators](#runtime-validators) and [JSON Schema Generator](#json-schema-generation) by writing comment tags.

Below table shows list of supported comment tags. You can utilize those tags by writing in comments like below example structure `TagExample`. Look at them and utilize those comment tags to make your TypeScript program to be safer and more convenient.

Also, don't worry about taking a mistake on using those comment tags. In that case, compile error would be occured. By the compile level error detection, `typescript-json` is much stronger than any other runtime validator libraries using decorator functions, which can't catch any mistake on the compilation level.

Tag Kind | Target Type
------------|-----------------
`@type {"int"\|"uint"}` | number
`@range (number, number]` | number
`@minimum {number}` | number
`@maximum {number}` | number
`@exclusiveMinimum {number}` | number
`@exclusiveMaximum {number}` | number
`@multipleOf {number}` | number
`@step {number}` | number
`@length {number} \| [number, number)` | string
`@minLength {number}` | string
`@maxLength {number}` | string
`@format {"email"\|"uuid"\|"url"\|"ipv4"\|"ipv6"}` | string
`@pattern {string}` | string
`@items {number} \| [number, number)` | array
`@minItems {number}` | array
`@maxItems {number}` | array

```typescript
export interface TagExample {
    /* -----------------------------------------------------------
        ARRAYS
    ----------------------------------------------------------- */
    /**
     * You can limit array length like below.
     * 
     * @minItems 3
     * @maxItems 10
     * 
     * Also, you can use `@items` tag instead.
     * 
     * @items (5, 10] --> 5 < length <= 10
     * @items [7      --> 7 <= length
     * @items 12)     --> length < 12
     * 
     * Furthermore, you can use additional tags for each item.
     * 
     * @type uint
     * @format uuid
     */
    array: Array<string|number>;

    /**
     * If two-dimensional array comes, length limit would work for 
     * both 1st and 2nd level arraies. Also using additional tags 
     * for each item (string) would still work.
     * 
     * @items (5, 10)
     * @format url
     */
    matrix: string[][];

    /* -----------------------------------------------------------
        NUMBERS
    ----------------------------------------------------------- */
    /**
     * Type of number.
     * 
     * It must be one of integer or unsigned integer.
     * 
     * @type int
     * @type uint
     */
    type: number;

    /**
     * You can limit range of numeric value like below.
     * 
     * @minimum 5
     * @maximum 10
     * 
     * Also, you can use `@range` tag instead.
     * 
     * @range (5, 10] --> 5 < x <= 10
     * @range [7      --> 7 <= x
     * @range 12)     --> x < 12
     */
    range: number;

    /**
     * Step tag requires minmum or exclusiveMinimum tag.
     * 
     * 3, 13, 23, 33, ...
     * 
     * @step 10
     * @exclusiveMinimum 3
     * @range [3
     */
    step: number;

    /**
     * Value must be multiple of the given number.
     * 
     * -5, 0, 5, 10, 15, ...
     * 
     * @multipleOf 5
     */
    multipleOf: number;

    /* -----------------------------------------------------------
        STRINGS
    ----------------------------------------------------------- */
    /**
     * You can limit string length like below.
     * 
     * @minLength 3
     * @maxLength 10
     * 
     * Also, you can use `@length` tag instead.
     * 
     * @length 10      --> length = 10
     * @length [3, 7]  --> 3 <= length && length <= 7
     * @length (5, 10) --> 5 < length && length < 10
     * @length [4      --> 4 < length
     * @length 7)      --> length < 7
     */
    length: string;

    /**
     * Mobile number composed by only numbers.
     * 
     * Note that, `typescript-json` does not support flag of regex,
     * because JSON schema definition does not suppor it either.
     * Therefore, write regex pattern without `/` characters and flag.
     * 
     * @pattern ^0[0-9]{7,16} 
     *     -> RegExp(/[0-9]{7,16}/).test("01012345678")
     */
    mobile: string;

    /**
     * E-mail address.
     * 
     * @format email
     */
    email: string;

    /**
     * UUID value.
     * 
     * @format uuid
     */
    uuid: string;

    /**
     * URL address.
     * 
     * @format url
     */
    url: string;

    /**
     * IPv4 address.
     * 
     * @format ipv4
     */
    ipv4: string;

    /**
     * IPv6 address.
     * 
     * @format ipv6
     */
    ipv6: string;
}
```




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

`nestia-helper` is a helper library of `NestJS`, which boosts up the `JSON.stringify()` speed 5x times faster about the API responses, automatically. Also, `nestia-helper` supports automatic valiation of request body, too. 

```typescript
import helper from "nestia-helper";
import * as nest from "@nestjs/common";

@nest.Controller("bbs/articles")
export class BbsArticlesController
{
    // automatic TSON.stringify() for response body
    @helper.TypedRoute.Get()
    public store(
        // automatic TSON.assertType() for request body
        @helper.TypedBody() input: IBbsArticle.IStore
    ): Promise<IBbsArticle>;
}
```
