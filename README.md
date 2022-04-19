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
The `typescript-json` is a wrapper library for the [fast-json-stringify](https://github.com/fastify/fast-json-stringify), who can generate JSON string 2x faster than the native `JSON.stringify()` function. Also, the `typescript-json` doesn't need any extra schema defition. It just requires only line: `TSON.stringify<T>(input)`.

If you choose other similar libraries like [fast-json-stringify](https://github.com/fastify/fast-json-stringify) or [slow-json-stringify](https://github.com/lucagez/slow-json-stringify), you've define the complicate data schema that is different from the TypeScript type system. Beside, the `typescript-json` requires only one line with your own TypeScript type definition. You don't need any extra data schema definition.

Look at the below code and feel how the `typescript-json` is powerful.

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
    gendor: string | number | null;
}
const company: ICompany;

//----
// TSON requires only one line
//----
// Reusable stringfy function
const stringify = TSON.createStringifier<ICompany>()(company);
stringify(company);

// Direct stringify function call
// 
// The type would be stored in the global memory
// It would be reused whenever the same type has come
TSON.stringify<ICompany>(company);

//----
// "fast-json-stringfy" requires complicate schema
//----
const stringify = fast({
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
                        anyOf: [
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
});
stringify(company);
```




## Installation
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

After the `tsconfig.json` definition, you can compile the `typescript-json` utilized code by using the `ttypescript`. If you want to run your TypeScript file through the `ts-node`, use `-C ttypescript` argument like below:

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
```

`typescript-json` provides only two functions, `stringify()` and `createStringifier()`. 

The first `stringify()` is a function who returns the JSON string directly. Also, the type you'd put into the generic argument would be stored in the global memory and reused whenever calling the `stringify()` function with same type.

The second `createStringifier()` is a function who returns another function that can generate the JSON string. The `createStringifier()` is not enough convenient like `stringify()`, however it doesn't consume the global memory. Also, returned function from the `createStringifier()` is always reusable until you forget the function variable.

Method | Strength | Weakness
-------|----------|------------
`stringify()` | Convenient to use | Use global memory
`createStringifier()` | Save global memory | Inconvenient to manage

### `public`
When you put a class type into this `typescript-json`, only `public` members would be converted to JSON string. The `private` or `protected` members would be all ignored.

### `toJSON()`
The [fast-json-stringify](https://github.com/fastify/fast-json-stringify) is not supporting the `toJSON()` method. If such unsupported situation keeps for a long time, I promise you that I'll fix the problem even by developing the JSON conversion logic by myself.




## Appendix
### [Nestia](https://github.com/samchon/nestia)
https://github.com/samchon/nestia

The [nestia](https://github.com/samchon/nestia) is, another library what I've developed and who is using this `typescript-json`, automatic SDK generator for the NestJS backend server. With the [nestia](https://github.com/samchon/nestia), you can reduce lots of costs and time for developing the backend server.

When you're developing a backend server using the `NestJS`, you don't need any extra dedication, for delivering the Rest API to the client developers, like writing the `swagger` comments. You just run the [nestia](https://github.com/samchon/nestia) up, then [nestia](https://github.com/samchon/nestia) would generate the SDK automatically, by analyzing your controller classes in the compliation and runtime level.

With the automatically generated SDK through the [nestia](https://github.com/samchon/nestia), client developer also does not need any extra work, like reading `swagger` and writing the duplicated interaction code. Client developer only needs to import the SDK and calls matched function with the `await` symbol.

```typescript
import api from "@samchon/bbs-api";
import { IBbsArticle } from "@samchon/bbs-api/lib/structures/bbs/IBbsArticle";
import { IPage } from "@samchon/bbs-api/lib/structures/common/IPage";

export async function test_article_read(connection: api.IConnection): Promise<void>
{
    // LIST UP ARTICLE SUMMARIES
    const index: IPage<IBbsArticle.ISummary> = await api.functional.bbs.articles.index
    (
        connection,
        "free",
        { limit: 100, page: 1 }
    );

    // READ AN ARTICLE DETAILY
    const article: IBbsArticle = await api.functional.bbs.articles.at
    (
        connection,
        "free",
        index.data[0].id
    );
    console.log(article.title, aritlce.body, article.files);
}
```

### Archidraw
https://www.archisketch.com/

I have special thanks to the Archidraw, where I'm working for.

The Archidraw is a great IT company developing 3D interior editor and lots of solutions based on the 3D assets. Also, the Archidraw is the first company who had adopted `safe-typeorm` on their commercial backend project, even `safe-typeorm` was in the alpha level.