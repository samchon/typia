# TypeScript-JSON
Runtime type checker, and 10x faster `JSON.stringify()` function, with only one line.

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/samchon/typescript-json/blob/master/LICENSE)
[![npm version](https://badge.fury.io/js/typescript-json.svg)](https://www.npmjs.com/package/typescript-json)
[![Downloads](https://img.shields.io/npm/dm/typescript-json.svg)](https://www.npmjs.com/package/typescript-json)
[![Build Status](https://github.com/samchon/typescript-json/workflows/build/badge.svg)](https://github.com/samchon/typescript-json/actions?query=workflow%3Abuild)
[![Guide Documents](https://img.shields.io/badge/wiki-documentation-forestgreen)](https://github.com/samchon/typescript-json/wiki)

  - Github: https://github.com/samchon/typescript-json
  - NPM: https://www.npmjs.com/package/typescript-json
  - Guide Documents: https://github.com/samchon/typescript-json/wiki

```typescript
import TSON from "typescript-json";

//----
// MAIN FUNCTIONS
//----
TSON.assert<T>(input); // runtime type checker throwing exception
TSON.is<T>(input); // runtime type checker returning boolean
TSON.stringify<T>(input); // 10x faster JSON.stringify()

//----
// APPENDIX FUNCTIONS
//----
TSON.application<T>(); // JSON schema application generator
TSON.create<T>(input); // 2x faster object creator (only one-time construction)
```

`typescript-json` is a transformer library providing JSON related functions.

  - Runtime type checkers
  - 10x faster `JSON.stringify()` function
  - Comparing with `ajv` or `fast-json-stringify`
    - 10,000x faster 1st operation including optimizer construction time
    - Does not require any JSON schema definition
    - Performed by only one line `TSON.stringify<T>(input)`

<!-- With `typescript-json`, **type check** in the **runtime** is possible. Boosting up **JSON** string conversion speed about **10x times faster** is also possible. Important thing is, all of those features can be used by **only one line**. Besides, other similar libraries like `ajv` or `fast-json-stringify`, they require complicate JSON schema definition.

Furthermore, `typescript-json` does not require any optimizer plan construction in the runtime. Therefore, `typescript-json` is about **10,000x times faster** than `ajv` and `fast-json-stringify`, if compare only one-time JSON string conversion or validation.

Look at the below graph, code and feel how `typescrip-json` is powerful. -->

Only JSON string conversion time | Include optimization planning time
---------------------------------|------------------------------------
![only-json-string-conversion-time](https://user-images.githubusercontent.com/13158709/172457566-d23100c2-808a-4544-a914-de92d8ec12b0.png) | ![include-optimization-planning-time](https://user-images.githubusercontent.com/13158709/172457381-d8ccbb92-43a1-4c96-aae1-cdac7d2e03cd.png)

```typescript
import TSON from "typescript-json";
import fast from "fast-json-stringify";

interface ICompany
{
    name: string;
    employees: IEmployee[];
}
interface IEmployee
{
    name: string;
    gender: string | number | null;
}
const company: ICompany;

//----
// TSON requires only one line
//----
TSON.stringify<ICompany>(company);

//----
// "fast-json-stringfy" requires complicated JSON schema
//----
fast({
    type: "object",
    properties: {
        name: {
            type: "string",
            nullable: false,
        },
        employees: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    name: {
                        type: "string",
                        nullable: false,
                    },
                    gender: {
                        oneOf: [
                            { type: "string" },
                            { type: "number" }
                        ],
                        nullable: true
                    }
                }
            },
            nullable: false
        }
    }
})(company);
```




## Setup
### NPM Package
At first, install this `typescript-json` by the `npm install` command. 

Also, you need additional `devDependencies` to compile the TypeScript code with transformation. Therefore, install those all libraries `typescript`, `ttypescript` and `ts-node`. Inform that, `ttypescript` is not mis-writing. Therefore, do not forget to install the `ttypescript`.

```bash
npm install --save typescript-json

# ENSURE THOSE PACKAGES ARE INSTALLED
npm install --save-dev typescript
npm install --save-dev ttypescript
npm install --save-dev ts-node
```

### tsconfig.json
After the installation, you've to configure the `tsconfig.json` file like below. Add the new property `transform` and its value `typescript-json/lib/transform` into the `compilerOptions.plugins` array.

```json
{
  "compilerOptions": {
    "plugins": [
      {
        "transform": "typescript-json/lib/transform"
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

### webpack
If you're using a `webpack` with `ts-loader`, configure the `webpack.config.js` file like below:

```javascript
const transform = require('typescript-json/lib/transform').default

module.exports = {
    // I am hiding the rest of the webpack config
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
                options: {
                    getCustomTransformers: program => ({
                        before: [transform(program)]
                    })
                }
            }
        ]
    }
};
```



## Features
### Runtime Type Checkers
```typescript
export function assert<T>(input: T): T;
export function is<T>(input: T): boolean;
```

`typescript-json` provides two runtime type checker functions, `assert()` and `is()`.

The first `assert()` is a function which checks instance type in the runtime. If the input type is not matched with the generic argument `T`, the function `assert()` throws a `TypeGuardError`. The second `is()` function also checks instance type in runtime, but returns a `boolean` value whether input value is matched with the generic argument `T` or not. 

For reference, there're two similar libraries who can check types in the runtime. The first is `ajv` and the other is `typescript-is`. 

Function      | Returns
--------------|--------------
`assert()`    | returns `void` or throws `TypeGuardError`
`is()`        | `boolean` which means type being matched or not
`stringify()` | JSON `string`, 10x faster than the native `JSON.stringify()`

Only JSON string conversion time | Include optimizer planning time
---------------------------------|------------------------------------
![only-json-string-conversion](https://user-images.githubusercontent.com/13158709/172457566-d23100c2-808a-4544-a914-de92d8ec12b0.png) | ![include-optimizer-construction](https://user-images.githubusercontent.com/13158709/172457381-d8ccbb92-43a1-4c96-aae1-cdac7d2e03cd.png)


### Fastest JSON String Conversion
```typescript
export function stringify<T>(input: T): string;
```

`typescript-json` provides the fastest JSON string conversion function.

`typescript-json` providers three generators, `createAsset()`, `createIs()` and `createStringify()`. 

Different between three functions and three generators are whether using global memory or not. For an example, when you call the `stringify()` function with a generic argument `T`, `typescript-json` would store an optimizer plan for the type `T` in the global memory. The optimizer plan stored in the global memory would be reused whenever same type `T` being placed into the `stringify()` function. 

Otherwise, you call the `createStringifier()` generator, optimizer plan of the type `T` does not consume the global memory. The optimizer plan would be stored in the returned function. Therefore, `stringify()` function is convenient to use but consumes global memory, and `createStringifier()` is cumbersome to manage but does not consume any global memory.

Method | Strength | Weakness
-------|----------|------------
`stringify()` | Convenient to use | Use global memory
`createStringiy()` | Save global memory | Inconvenient to manage
`createApplication()` | Reusable JSON Schema | Surplus feature, maybe?

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








## Appendix
### Nestia
> My other library using this `typescript-json`.

https://github.com/samchon/nestia

Automatic `SDK` and `Swagger` generator for the `NestJS`, evolved than ever.

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
2x faster `JSON.stringify()` | ✔ | ❌ | ❌
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
> My another library, using this `typescript-json`, too.

https://github.com/samchon/nestia-helper

Boost up `JSON.stringify()` function, of the API responses, 10x times faster.

`nestia-helper` is a helper library of `NestJS`, which can boost up the `JSON.stringify()` function 10x times faster about the API responses. Just by installing and utilizing this `nestia-helper`, your NestJS developed backend server will convert JSON string 10x times faster.

```typescript
import helper from "nestia-helper";
import * as nest from "@nestjs/common";

@nest.Controller("bbs/articles")
export class BbsArticlesController
{
    // JSON.stringify for IPage<IBbsArticle.ISummary> would be 2 times faster 
    @helper.TypedRoute.Get()
    public get(): Promise<IPage<IBbsArticle.ISummary>>;
}
```

### Archidraw
https://www.archisketch.com/

I have special thanks to the Archidraw, where I'm working for.

The Archidraw is a great IT company developing 3D interior editor and lots of solutions based on the 3D assets. Also, the Archidraw is the first company who had adopted `typescript-json` on their commercial backend project, even `typescript-json` was in the alpha level.

> 저희 회사 "아키드로우" 에서, 삼촌과 함께 일할 프론트 개발자 분들을, 최고의 대우로 모십니다.
>
> "아키드로우" 는 3D (인테리어) 에디터 및 이에 관한 파생 솔루션들을 만드는 회사입니다. 다만 저희 회사의 주력 제품이 3D 에디터라 하여, 반드시 3D 내지 랜더링에 능숙해야 하는 것은 아니니, 일반적인 프론트 개발자 분들도 망설임없이 지원해주십시오.
>
> 그리고 저희 회사는 분위기가 다들 친하고 즐겁게 지내는 분위기입니다. 더하여 위 [nestia](https://github.com/samchon/nestia) 나 [typescript-json](https://github.com/samchon/typescript-json) 및 [payments](https://github.com/archidraw/payments) 등, 제법 합리적(?)이고 재미난 프로젝트들을 다양하게 체험해보실 수 있습니다.
>
> - 회사소개서: [archidraw.pdf](https://github.com/archidraw/payments/files/7696710/archidraw.pdf)
> - 기술 스택: React + TypeScript
> - 이력서: 자유 양식
> - 지원처: samchon@archisketch.com
