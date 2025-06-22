# Typia
![Typia Logo](https://typia.io/logo.png)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/samchon/typia/blob/master/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/typia.svg)](https://www.npmjs.com/package/typia)
[![NPM Downloads](https://img.shields.io/npm/dm/typia.svg)](https://www.npmjs.com/package/typia)
[![Build Status](https://github.com/samchon/typia/workflows/build/badge.svg)](https://github.com/samchon/typia/actions?query=workflow%3Abuild)
[![Guide Documents](https://img.shields.io/badge/Guide-Documents-forestgreen)](https://typia.io/docs/)
[![Gurubase](https://img.shields.io/badge/Gurubase-Document%20Chatbot-006BFF)](https://gurubase.io/g/typia)
[![Discord Badge](https://img.shields.io/badge/discord-samchon-d91965?style=flat&labelColor=5866f2&logo=discord&logoColor=white&link=https://discord.gg/E94XhzrUCZ)](https://discord.gg/E94XhzrUCZ)

```typescript
// RUNTIME VALIDATORS
export function is<T>(input: unknown): input is T; // returns boolean
export function assert<T>(input: unknown): T; // throws TypeGuardError
export function assertGuard<T>(input: unknown): asserts input is T;
export function validate<T>(input: unknown): IValidation<T>; // detailed

// JSON FUNCTIONS
export namespace json {
  export function application<T>(): IJsonApplication; // JSON schema
  export function assertParse<T>(input: string): T; // type safe parser
  export function assertStringify<T>(input: T): string; // safe and faster
}

// AI FUNCTION CALLING SCHEMA
export namespace llm {
  // collection of function calling schemas
  export function application<Class, Model>(): ILlmApplication<Class>;
  export function controller<Class, Model>(
    name: string,
    execute: Class,
  ): ILlmController<Model>; // +executor
  // structured output
  export function parameters<P, Model>(): ILlmSchema.IParameters<Model>; 
  export function schema<T, Model>(): ILlmSchema<Model>; // type schema
}

// PROTOCOL BUFFER
export namespace protobuf {
  export function message<T>(): string; // Protocol Buffer message
  export function assertDecode<T>(buffer: Uint8Array): T; // safe decoder
  export function assertEncode<T>(input: T): Uint8Array; // safe encoder
}

// RANDOM GENERATOR
export function random<T>(g?: Partial<IRandomGenerator>): T;
```

`typia` is a transformer library supporting below features:

  - Super-fast Runtime Validators
  - Enhanced JSON schema and serde functions
  - LLM function calling schema and structured output
  - Protocol Buffer encoder and decoder
  - Random data generator

> [!NOTE]
>
> - **Only one line** required, with pure TypeScript type
> - Runtime validator is **20,000x faster** than `class-validator`
> - JSON serialization is **200x faster** than `class-transformer`




## Transformation
If you call `typia` function, it would be compiled like below.

This is the key concept of `typia`, transforming TypeScript type to a runtime function. The `typia.is<T>()` function is transformed to a dedicated type checker by analyzing the target type `T` in the compilation level.

This feature enables developers to ensure type safety in their applications, leveraging TypeScript's static typing while also providing runtime validation. Instead of defining additional schemas, you can simply utilize the pure TypeScript type itself.

```typescript
//----
// examples/checkString.ts
//----
import typia, { tags } from "typia";
export const checkString = typia.createIs<string>();

//----
// examples/checkString.js
//----
import typia from "typia";
export const checkString = (() => {
  return (input) => "string" === typeof input;
})();
```



## Sponsors
Thanks for your support.

Your donation encourages `typia` development.

Also, `typia` is re-distributing half of donations to core contributors of `typia`.

  - [`nonara/ts-patch`](https://github.com/nonara/ts-patch)
  - [`ryoppippi/unplugin-typia`](https://github.com/ryoppippi/unplugin-typia)

[![Sponsors](https://opencollective.com/typia/badge.svg?avatarHeight=75&width=600)](https://opencollective.com/typia)




## Playground
You can experience how typia works by [playground website](https://typia.io/playground):

  - 💻 https://typia.io/playground




## Guide Documents
Check out the document in the [website](https://typia.io/docs/):

### 🏠 Home
  - [Introduction](https://typia.io/docs/)
  - [Setup](https://typia.io/docs/setup/)
  - [Pure TypeScript](https://typia.io/docs/pure/)
  
### 📖 Features
  - Runtime Validators
    - [`assert()` function](https://typia.io/docs/validators/assert/)
    - [`is()` function](https://typia.io/docs/validators/is/)
    - [`validate()` function](https://typia.io/docs/validators/validate/)
    - [Functional Module](https://typia.io/docs/validators/functional)
    - [Special Tags](https://typia.io/docs/validators/tags/)
  - Enhanced JSON
    - [JSON Schema](https://typia.io/docs/json/schema/)
    - [`stringify()` functions](https://typia.io/docs/json/stringify/)
    - [`parse()` functions](https://typia.io/docs/json/parse/)
  - LLM Function Calling
    - [`application()` function](https://typia.io/docs/llm/application/)
    - [`parameters()` function](https://typia.io/docs/llm/parameters/)
    - [`schema()` function](https://typia.io/docs/llm/schema/)
    - [AI Chatbot Development](https://typia.io/docs/llm/chat/)
    - [Documentation Strategy](https://typia.io/docs/llm/strategy/)
  - Protocol Buffer
    - [Message Schema](https://typia.io/docs/protobuf/message)
    - [`decode()` functions](https://typia.io/docs/protobuf/decode/)
    - [`encode()` functions](https://typia.io/docs/protobuf/encode/)
  - [Random Generator](https://typia.io/docs/random/)
  - [Miscellaneous](https://typia.io/docs/misc/)

### 🔗 Appendix
  - [API Documents](https://typia.io/api)
  - Utillization Cases
    - [NestJS](https://typia.io/docs/utilization/nestjs/)
    - [tRPC](https://typia.io/docs/utilization/trpc/)
  - [⇲ Benchmark Result](https://github.com/samchon/typia/tree/master/benchmark/results/11th%20Gen%20Intel(R)%20Core(TM)%20i5-1135G7%20%40%202.40GHz)
  - [⇲ `dev.to` Articles](https://dev.to/samchon/series/22474)
