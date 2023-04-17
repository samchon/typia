> ## Deprecated
> `typescript-json` has been renamed to [`typia`](https://github.com/samchon/typia)

# Typia
![Typia Logo](https://typia.io/logo.png)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/samchon/typia/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/typia.svg)](https://www.npmjs.com/package/typia)
[![Downloads](https://img.shields.io/npm/dm/typia.svg)](https://www.npmjs.com/package/typia)
[![Build Status](https://github.com/samchon/typia/workflows/build/badge.svg)](https://github.com/samchon/typia/actions?query=workflow%3Abuild)
[![Guide Documents](https://img.shields.io/badge/wiki-documentation-forestgreen)](https://typia.io/docs/)

```typescript
// RUNTIME VALIDATORS
export function is<T>(input: unknown): input is T; // returns boolean
export function assert<T>(input: unknown): T; // throws TypeGuardError
export function validate<T>(input: unknown): IValidation<T>; // detailed
export const customValidators: CustomValidatorMap; // can add custom validators

// JSON
export function application<T>(): IJsonApplication; // JSON schema
export function assertParse<T>(input: string): T; // type safe parser
export function assertStringify<T>(input: T): string; // safe and faster
    // +) isParse, validateParse 
    // +) stringify, isStringify, validateStringify

// MISC
export function random<T>(g?: Partial<IRandomGenerator>): Primitive<T>;
```

Typia is a transformer library supporting below features:

  - Super-fast Runtime Validators
  - Safe JSON parse and fast stringify functions
  - JSON schema generator
  - Random data generator

> **Note**
> 
>  - **Only one line** required, with pure TypeScript type
>  - Runtime validator is **20,000x faster** than `class-validator`
>  - JSON serialization is **200x faster** than `class-transformer`



## Sponsors
Thanks for your support.

Your donation would encourage `typia` development.

[![Sponsers](https://opencollective.com/typia/badge.svg?avatarHeight=75&width=600)](https://opencollective.com/typia)

## Guide Documents
Check out the document in the [website](https://typia.io/docs/):

### 🙋🏻‍♂️ Home
  - [Introduction](https://typia.io/docs/)
  - [Setup](https://typia.io/docs/setup/)
  
### 📖 Features
  - Runtime Validators
    - [`is()` function](https://typia.io/docs/validators/is/)
    - [`assert()` function](https://typia.io/docs/validators/assert/)
    - [`validate()` function](https://typia.io/docs/validators/validate/)
    - [Comment Tags](https://typia.io/docs/validators/comment-tags/)
  - Enhanced JSON
    - [`stringify()` functions](https://typia.io/docs/json/stringify/)
    - [`parse()` functions](https://typia.io/docs/json/parse/)
    - [JSON Schema](https://typia.io/docs/json/schema)
  - [Random Generator](https://typia.io/docs/random/)

### 🔗 Appendix
  - Utillization Cases
    - [NestJS](https://typia.io/docs/utilization/nestjs/)
    - [tRPC](https://typia.io/docs/utilization/trpc/)
  - [⇲ Benchmark Result](https://github.com/samchon/typia/tree/master/benchmark/results/11th%20Gen%20Intel(R)%20Core(TM)%20i5-1135G7%20%40%202.40GHz)
  - [⇲ `dev.to` Articles](https://dev.to/samchon/series/22474)