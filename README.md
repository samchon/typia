# TypeScript-JSON
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/samchon/typescript-json/blob/master/LICENSE)
[![npm version](https://badge.fury.io/js/typescript-json.svg)](https://www.npmjs.com/package/typescript-json)
[![Downloads](https://img.shields.io/npm/dm/typescript-json.svg)](https://www.npmjs.com/package/typescript-json)
[![Build Status](https://github.com/samchon/typescript-json/workflows/build/badge.svg)](https://github.com/samchon/typescript-json/actions?query=workflow%3Abuild)

2x faster `JSON.stringify()` function with only one line.

```typescript
import TSON from "typescript-json";
TSON.stringify<T>(input);
```

## Introduction
`typescript-json` is a wrapper library of [fast-json-stringify](https://github.com/fastify/fast-json-stringify), which can generate JSON string 2x faster than the native `JSON.stringify()` function. Also, `typescript-json` doesn't need any JSON schema definition. It just requires only one line: `TSON.stringify<T>(input)`.

If you choose other similar libraries like [ajv](https://github.com/ajv-validator/ajv) or [fast-json-stringify](https://github.com/fastify/fast-json-stringify), you've to define a complicated JSON schema that is different from the TypeScript type system. Besides, `typescript-json` requires only one line with your own TypeScript type definition. You don't need any extra JSON schema definition.

Look at the below code and feel how `typescript-json` is powerful.

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
// Reusable stringfy function
const stringify = TSON.createStringifier<ICompany>();
stringify(company);

// Direct stringify function call
// 
// The type would be stored in the global memory
// It would be reused whenever the same type has come
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

Also, you need additional `devDependencies` to compile the TypeScript code with transformation. Therefore, install those all libraries `typescript`, `ttypescript` and `ts-node`. Inform that, the `ttypescript` is not mis-writing. Therefore, do not forget to install the `ttypescript`.

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

After the `tsconfig.json` definition, you can compile `typescript-json` utilized code by using the `ttypescript`. If you want to run your TypeScript file through the `ts-node`, use `-C ttypescript` argument like below:

```bash
# COMPILE
npx ttsc

# WITH TS-NODE
npx ts-node -C ttypescript
```

### webpack
If you're using a `webpack` with the `ts-loader`, configure the `webpack.config.js` file like below:

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
### Functions
```typescript
export function stringify<T>(input: T): string;
export function createStringifier<T>(): (input: T) => string;
export function createApplication<T>(): (input: T) => IJsonApplication;
```

`typescript-json` provides only three functions, `stringify()`, `createStringifier()` and `createApplication()`.

The first `stringify()` is a function who returns the JSON string directly. Also, the type you'd put into the generic argument would be stored in the global memory and reused whenever calling the `stringify()` function with the same type.

The second `createStringifier()` is a function who returns another function that can generate the JSON string. The `createStringifier()` is not enough convenient like `stringify()`, however it doesn't consume the global memory. Also, the returned function from the `createStringifier()` is always reusable until you forget the function variable.

The last `createApplication()` is just a function who generates JSON schema following the type `T`. If you need to utilize the JSON schema for other purpose, this function would be useful.

Method | Strength | Weakness
-------|----------|------------
`stringify()` | Convenient to use | Use global memory
`createStringifier()` | Save global memory | Inconvenient to manage
`createApplication()` | Reusable JSON Schema | Inconvenient to manage

### `public`
When you put a class type into this `typescript-json`, only `public` members would be converted to JSON string. The `private` or `protected` members would be all ignored.

### `toJSON()`
[fast-json-stringify](https://github.com/fastify/fast-json-stringify) is not supporting the `toJSON()` method. If such unsupported situation keeps for a long time, I promise you that I'll fix the problem even by developing the JSON conversion logic by myself.




## Appendix
### Nestia
> My another library using this `typescript-json`.

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
