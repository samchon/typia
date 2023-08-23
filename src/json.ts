import { Namespace } from "./functional/Namespace";

import { IJsonApplication } from "./schemas/json/IJsonApplication";

import { IValidation } from "./IValidation";
import { Primitive } from "./Primitive";

/* ===========================================================
    JSON
      - SCHEMA
      - PARSE
      - STRINGIFY
      - FACTORY FUNCTIONS
==============================================================
    SCHEMA
----------------------------------------------------------- */
/**
 * > You must configure the generic argument `T`.
 *
 * JSON Schema Application.
 *
 * Creates a JSON schema application which contains both main JSON schemas and
 * components. Note that, all of the object types are stored in the
 * {@link IJsonApplication.components} property for the `$ref` referencing.
 *
 * Also, `typia.json.application()` has additional generic arguments, *Purpose*.
 * As JSON schema definitions used by `swagger` and `ajv` are different a little bit,
 * you should configure the *Purpose* appropriately.
 *
 * For an example, `ajv` has an extra property "$recursiveRef" that are not exists
 * in the standard JSON schema definition spec. Otherwise, `swagger` can't identify
 * the tuple definition.
 *
 * @template Types Tuple of target types
 * @template Purpose Purpose of the JSON schema`
 * @return JSON schema application
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function application(): never;

/**
 * JSON Schema Application.
 *
 * Creates a JSON schema application which contains both main JSON schemas and
 * components. Note that, all of the object types are stored in the
 * {@link IJsonApplication.components} property for the `$ref` referencing.
 *
 * Also, `typia.json.application()` has additional generic arguments, *Purpose*.
 * As JSON schema definitions used by `swagger` and `ajv` are different a little bit,
 * you should configure the *Purpose* appropriately.
 *
 * For an example, `ajv` has an extra property "$recursiveRef" that are not exists
 * in the standard JSON schema definition spec. Otherwise, `swagger` can't identify
 * the tuple definition.
 *
 * @template Types Tuple of target types
 * @template Purpose Purpose of the JSON schema
 * @return JSON schema application
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function application<
    Types extends unknown[],
    Purpose extends "ajv" | "swagger" = "swagger",
>(): IJsonApplication;

/**
 * @internal
 */
export function application(): never {
    halt("application");
}

/* -----------------------------------------------------------
    PARSE
----------------------------------------------------------- */
/**
 * > You must configure the generic argument `T`.
 *
 * Safe `JSON.parse()` function with type assertion.
 *
 * `typia.json.assertParse()` is a combination function of `JSON.parse()` and
 * {@link assert}. Therefore, it convers a JSON (JavaScript Object Notation) string
 * to a `T` typed instance with type assertion.
 *
 * In such reason, when parsed JSON string value is not matched with the type `T`, it
 * throws {@link TypeGuardError}. Otherwise, there's no problem on the parsed value,
 * the parsed value would be returned.
 *
 * @template T Expected type of parsed value
 * @param input JSON string
 * @returns Parsed value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertParse(input: string): never;

/**
 * Safe `JSON.parse()` function with type assertion.
 *
 * `typia.json.assertParse()` is a combination function of `JSON.parse()` and
 * {@link assert}. Therefore, it convers a JSON (JavaScript Object Notation) string
 * to a `T` typed instance with type assertion.
 *
 * In such reason, when parsed JSON string value is not matched with the type `T`,
 * it throws {@link TypeGuardError}. Otherwise, there's no problem on the parsed
 * value, the parsed value would be returned.
 *
 * @template T Expected type of parsed value
 * @param input JSON string
 * @returns Parsed value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertParse<T>(input: string): Primitive<T>;

/**
 * @internal
 */
export function assertParse<T>(): Primitive<T> {
    halt("assertParse");
}
Object.assign(assertParse, Namespace.assert("assertParse"));

/**
 * > You must configure the generic argument `T`.
 *
 * Safe `JSON.parse()` function with type checking.
 *
 * `typia.json.isParse()` is a combination function of `JSON.parse()` and {@link is}.
 * Therefore, it convers a JSON (JavaScript Object Notation) string to a `T` typed
 * instance with type checking.
 *
 * In such reason, when parsed JSON string value is not matched with the type `T`, it
 * returns `null` value. Otherwise, there's no problem on the parsed value, the parsed
 * value would be returned.
 *
 * @template T Expected type of parsed value
 * @param input JSON string
 * @returns Parsed value when exact type, otherwise `null`
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function isParse(input: string): never;

/**
 * Safe `JSON.parse()` function with type checking.
 *
 * `typia.json.isParse()` is a combination function of `JSON.parse()` and {@link is}.
 * Therefore, it convers a JSON (JavaScript Object Notation) string to a `T` typed
 * instance with type checking.
 *
 * In such reason, when parsed JSON string value is not matched with the type `T`, it
 * returns `null` value. Otherwise, there's no problem on the parsed value, the parsed
 * value would be returned.
 *
 * @template T Expected type of parsed value
 * @param input JSON string
 * @returns Parsed value when exact type, otherwise `null`
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function isParse<T>(input: string): Primitive<T> | null;

/**
 * @internal
 */
export function isParse<T>(): Primitive<T> | null {
    halt("isParse");
}
Object.assign(isParse, Namespace.is());

/**
 * > You must configure the generic argument `T`.
 *
 * Safe `JSON.parse()` function with detailed type validation.
 *
 * `typia.json.validateParse()` is a combination function of `JSON.parse()` and
 * {@link validate}. Therefore, it convers a JSON (JavaScript Object Notation) string
 * to a `T` typed instance with detailed type validation.
 *
 * In such reason, when parsed JSON string value is not matched with the type `T`, it
 * returns {@link IValidation.IFailure} value with detailed error reasons. Otherwise,
 * there's no problem on the parsed value, the parsed value would be stored in `data`
 * property of the output {@link IValidation.ISuccess} instance.
 *
 * @template T Expected type of parsed value
 * @param input JSON string
 * @returns Validation result with JSON parsed value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function validateParse(input: string): never;

/**
 * Safe `JSON.parse()` function with detailed type validation.
 *
 * `typia.json.validateParse()` is a combination function of `JSON.parse()` and
 * {@link validate}. Therefore, it convers a JSON (JavaScript Object Notation) string
 * to a `T` typed instance with detailed type validation.
 *
 * In such reason, when parsed JSON string value is not matched with the type `T`, it
 * returns {@link IValidation.IFailure} value with detailed error reasons. Otherwise,
 * there's no problem on the parsed value, the parsed value would be stored in `data`
 * property of the output {@link IValidation.ISuccess} instance.
 *
 * @template T Expected type of parsed value
 * @param input JSON string
 * @returns Validation result with JSON parsed value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function validateParse<T>(input: string): IValidation<Primitive<T>>;

/**
 * @internal
 */
export function validateParse<T>(): IValidation<Primitive<T>> {
    halt("validateParse");
}
Object.assign(validateParse, Namespace.validate());

/* -----------------------------------------------------------
    STRINGIFY
----------------------------------------------------------- */
/**
 * 8x faster `JSON.stringify()` function.
 *
 * Converts an input value to a JSON (JavaScript Object Notation) string, about 8x
 * faster than the native `JSON.stringify()` function. The 5x faster principle is
 * because it writes an optimized JSON conversion plan, only for the type `T`.
 *
 * For reference, this `typia.json.stringify()` does not validate the input value type.
 * It just believes that the input value is following the type `T`. Therefore, if you
 * can't ensure the input value type, it would be better to call one of below
 * functions instead.
 *
 *  - {@link assertStringify}
 *  - {@link isStringify}
 *  - {@link validateStringify}
 *
 * @template T Type of the input value
 * @param input A value to be converted
 * @return JSON string value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function stringify<T>(input: T): string;

/**
 * @internal
 */
export function stringify(): never {
    halt("stringify");
}
Object.assign(stringify, Namespace.json.stringify("stringify"));

/**
 * 5x faster `JSON.stringify()` function with type assertion.
 *
 * `typia.json.assertStringify()` is a combination function of {@link assert} and
 * {@link stringify}. Therefore, it converts an input value to
 * JSON (JavaScript Object Notation) string, with type assertion.
 *
 * In such reason, when `input` value is not matched with the type `T`, it throws an
 * {@link TypeGuardError}. Otherwise, there's no problem on the `input` value, JSON
 * string would be returned.
 *
 * For reference, with type assertion, it is even 5x times faster than the native
 * `JSON.stringify()` function. So, just enjoy the safe and fast JSON conversion
 * with confidence.
 *
 * @template T Type of the input value
 * @param input A value to be asserted and converted
 * @return JSON string value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertStringify<T>(input: T): string;

/**
 * 5x faster `JSON.stringify()` function with type assertion.
 *
 * `typia.json.assertStringify()` is a combination function of {@link assert} and
 * {@link stringify}. Therefore, it converts an input value to
 * JSON (JavaScript Object Notation) string, with type assertion.
 *
 * In such reason, when `input` value is not matched with the type `T`, it throws an
 * {@link TypeGuardError}. Otherwise, there's no problem on the `input` value, JSON
 * string would be returned.
 *
 * For reference, with type assertion, it is even 5x times faster than the native
 * `JSON.stringify()` function. So, just enjoy the safe and fast JSON conversion
 * with confidence.
 *
 * @template T Type of the input value
 * @param input A value to be asserted and converted
 * @return JSON string value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertStringify<T>(input: T): unknown;

/**
 * @internal
 */
export function assertStringify(): string {
    halt("assertStringify");
}
Object.assign(assertStringify, Namespace.assert("assertStringify"));
Object.assign(assertStringify, Namespace.json.stringify("assertStringify"));

/**
 * 7x faster `JSON.stringify()` function with type checking.
 *
 * `typia.json.stringify()` is a combination function of {@link is} and
 * {@link stringify}. Therefore, it converts an input value to JSON
 * (JavaScript Object Notation) string, with type checking.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * `null` value. Otherwise, there's no problem on the `input` value, JSON string
 * would be returned.
 *
 * For reference, with type checking, it is even 7x times faster than the native
 * `JSON.stringify()` function. So, just enjoy the safe and fast JSON conversion
 * with confidence.
 *
 * @template T Type of the input value
 * @param input A value to be checked and converted
 * @return JSON string value when exact type, otherwise null
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function isStringify<T>(input: T): string | null;

/**
 * 7x faster `JSON.stringify()` function with type checking.
 *
 * `typia.json.isStringify()` is a combination function of {@link is} and
 * {@link stringify}. Therefore, it converts an input value to JSON
 * (JavaScript Object Notation) string, with type checking.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * `null` value. Otherwise, there's no problem on the `input` value, JSON string
 * would be returned.
 *
 * For reference, with type checking, it is even 7x times faster than the native
 * `JSON.stringify()` function. So, just enjoy the safe and fast JSON conversion
 * with confidence.
 *
 * @template T Type of the input value
 * @param input A value to be checked and converted
 * @return JSON string value when exact type, otherwise null
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function isStringify<T>(input: unknown): string | null;

/**
 * @internal
 */
export function isStringify(): string | null {
    halt("isStringify");
}

Object.assign(isStringify, Namespace.is());
Object.assign(isStringify, Namespace.json.stringify("isStringify"));

/**
 * 5x faster `JSON.stringify()` function with detailed type validation.
 *
 * `typia.json.validateStringify()` is a combination function of {@link validate} and
 * {@link stringify}. Therefore, it converts an input value to JSON (JavaScript Object
 * Notation) string, with detailed type validation.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * {@link IValidation.IFailure} value with detailed error reasons. Otherwise,
 * there's no problem on the `input` value, JSON string would be stored in `data`
 * property of the output {@link IValidation.ISuccess} instance.
 *
 * For reference, with detailed type validation, it is even 5x times faster than the
 * native `JSON.stringify()` function. So, just enjoy the safe and fast JSON
 * conversion with confidence.
 *
 * @template T Type of the input value
 * @param input A value to be checked and converted
 * @returns Validation result with JSON string value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function validateStringify<T>(input: T): IValidation<string>;

/**
 * 5x faster `JSON.stringify()` function with detailed type validation.
 *
 * `typia.json.validateStringify()` is a combination function of {@link validate} and
 * {@link stringify}. Therefore, it converts an input value to JSON (JavaScript Object
 * Notation) string, with detailed type validation.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * {@link IValidation.IFailure} value with detailed error reasons. Otherwise,
 * there's no problem on the `input` value, JSON string would be stored in `data`
 * property of the output {@link IValidation.ISuccess} instance.
 *
 * For reference, with detailed type validation, it is even 5x times faster than the
 * native `JSON.stringify()` function. So, just enjoy the safe and fast JSON
 * conversion with confidence.
 *
 * @template T Type of the input value
 * @param input A value to be checked and converted
 * @returns Validation result with JSON string value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function validateStringify<T>(input: unknown): IValidation<string>;

/**
 * @internal
 */
export function validateStringify(): IValidation<string> {
    halt("validateStringify");
}
Object.assign(validateStringify, Namespace.validate());
Object.assign(validateStringify, Namespace.json.stringify("validateStringify"));

/* -----------------------------------------------------------
    FACTORY FUNCTIONS
----------------------------------------------------------- */
/**
 * Creates a reusable {@link isParse} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createIsParse(): never;

/**
 * Creates a reusable {@link isParse} function.
 *
 * @template T Expected type of parsed value
 * @returns A reusable `isParse` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createIsParse<T>(): (input: string) => Primitive<T> | null;

/**
 * @internal
 */
export function createIsParse<T>(): (input: string) => Primitive<T> | null {
    halt("createIsParse");
}
Object.assign(createIsParse, isParse);

/**
 * Creates a reusable {@link assertParse} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertParse(): never;

/**
 * Creates a reusable {@link assertParse} function.
 *
 * @template T Expected type of parsed value
 * @returns A reusable `assertParse` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertParse<T>(): (input: string) => Primitive<T>;

/**
 * @internal
 */
export function createAssertParse<T>(): (input: string) => Primitive<T> {
    halt("createAssertParse");
}
Object.assign(createAssertParse, assertParse);

/**
 * Creates a reusable {@link validateParse} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createValidateParse(): never;

/**
 * Creates a reusable {@link validateParse} function.
 *
 * @template T Expected type of parsed value
 * @returns A reusable `validateParse` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createValidateParse<T>(): (
    input: string,
) => IValidation<Primitive<T>>;

/**
 * @internal
 */
export function createValidateParse<T>(): (
    input: string,
) => IValidation<Primitive<T>> {
    halt("createValidateParse");
}
Object.assign(createValidateParse, validateParse);

/**
 * Creates a reusable {@link stringify} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createStringify(): never;

/**
 * Creates a reusable {@link stringify} function.
 *
 * @template T Type of the input value
 * @returns A reusable `stringify` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createStringify<T>(): (input: T) => string;

/**
 * @internal
 */
export function createStringify<T>(): (input: T) => string {
    halt("createStringify");
}
Object.assign(createStringify, stringify);

/**
 * Creates a reusable {@link assertStringify} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertStringify(): never;

/**
 * Creates a reusable {@link assertStringify} function.
 *
 * @template T Type of the input value
 * @returns A reusable `assertStringify` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertStringify<T>(): (input: unknown) => string;

/**
 * @internal
 */
export function createAssertStringify(): (input: unknown) => string {
    halt("createAssertStringify");
}
Object.assign(createAssertStringify, assertStringify);

/**
 * Creates a reusable {@link isStringify} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createIsStringify(): never;

/**
 * Creates a reusable {@link isStringify} function.
 *
 * @template T Type of the input value
 * @returns A reusable `isStringify` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createIsStringify<T>(): (input: unknown) => string | null;

/**
 * @internal
 */
export function createIsStringify(): (input: unknown) => string | null {
    halt("createIsStringify");
}
Object.assign(createIsStringify, isStringify);

/**
 * Creates a reusable {@link validateStringify} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createValidateStringify(): never;

/**
 * Creates a reusable {@link validateStringify} function.
 *
 * @template T Type of the input value
 * @returns A reusable `validateStringify` function

 * @author Jeongho Nam - https://github.com/samchon
 */
export function createValidateStringify<T>(): (
    input: unknown,
) => IValidation<string>;

/**
 * @internal
 */
export function createValidateStringify(): (
    input: unknown,
) => IValidation<string> {
    halt("createValidateStringify");
}
Object.assign(createValidateStringify, validateStringify);

/**
 * @internal
 */
function halt(name: string): never {
    throw new Error(
        `Error on typia.json.${name}(): no transform has been configured. Read and follow https://typia.json.io/docs/setup please.`,
    );
}
