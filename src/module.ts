import { Namespace } from "./functional/Namespace";

import { IMetadataApplication } from "./metadata/IMetadataApplication";
import { IJsonApplication } from "./schemas/IJsonApplication";

import { IRandomGenerator } from "./IRandomGenerator";
import { IValidation } from "./IValidation";
import { Primitive } from "./Primitive";
import { TypeGuardError } from "./TypeGuardError";

export * from "./schemas/IJsonApplication";
export * from "./schemas/IJsonComponents";
export * from "./schemas/IJsonSchema";
export * from "./IRandomGenerator";
export * from "./IValidation";
export * from "./Primitive";
export * from "./TypeGuardError";

/* ===========================================================
    SINGLE FUNCTIONS
        - BASIC VALIDATORS
        - STRICT VALIDATORS
        - JSON FUNCTIONS
        - MISCELLANEOUS
==============================================================
    BASIC VALIDATORS
----------------------------------------------------------- */
/**
 * Asserts a value type.
 *
 * Asserts a parametric value type and throws a {@link TypeGuardError} with detailed
 * reason, if the parametric value is not following the type `T`. Otherwise, the
 * value is following the type `T`, just input parameter would be returned.
 *
 * If what you want is not asserting but just knowing whether the parametric value is
 * following the type `T` or not, you can choose the {@link is} function instead.
 * Otherwise you want to know all the errors, {@link validate} is the way to go.
 *
 * On the other and, if you don't want to allow any superfluous property that is not
 * enrolled to the type `T`, you can use {@link assertEquals} function instead.
 *
 * @template T Type of the input value
 * @param input A value to be asserted
 * @returns Parametric input value
 * @throws A {@link TypeGuardError} instance with detailed reason
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assert<T>(input: T): T;

/**
 * Asserts a value type.
 *
 * Asserts a parametric value type and throws a {@link TypeGuardError} with detailed
 * reason, if the parametric value is not following the type `T`. Otherwise, the
 * value is following the type `T`, just input parameter would be returned.
 *
 * If what you want is not asserting but just knowing whether the parametric value is
 * following the type `T` or not, you can choose the {@link is} function instead.
 * Otherwise, you want to know all the errors, {@link validate} is the way to go.
 *
 * On the other and, if you don't want to allow any superfluous property that is not
 * enrolled to the type `T`, you can use {@link assertEquals} function instead.
 *
 * @template T Type of the input value
 * @param input A value to be asserted
 * @returns Parametric input value casted as `T`
 * @throws A {@link TypeGuardError} instance with detailed reason
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assert<T>(input: unknown): T;

/**
 * @internal
 */
export function assert(): never {
    halt("assert");
}
Object.assign(assert, Namespace.assert("assert"));

/**
 * Asserts a value type.
 *
 * Duplicated function of {@link assert} for `typescript-is` users.
 *
 * @template T Type of the input value
 * @param input A value to be asserted
 * @returns Parametric input value
 * @throws A {@link TypeGuardError} instance with detailed reason
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @deprecated
 */
export function assertType<T>(input: T): T;

/**
 * Asserts a value type.
 *
 * Duplicated function of {@link assert} for `typescript-is` users.
 *
 * @template T Type of the input value
 * @param input A value to be asserted
 * @returns Parametric input value
 * @throws A {@link TypeGuardError} instance with detailed reason
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @deprecated
 */
export function assertType<T>(input: unknown): T;

/**
 * @internal
 */
export function assertType(): never {
    halt("assertType");
}
Object.assign(assertType, Namespace.assert("assertType"));

/**
 * Tests a value type.
 *
 * Tests a parametric value type and returns whether it's following the type `T` or not.
 * If the parametric value is matched with the type `T`, `true` value would be returned.
 * Otherwise, the parametric value is not following the type `T`, `false` value would be
 * returned.
 *
 * If what you want is not just knowing whether the parametric value is following the
 * type `T` or not, but throwing an exception with detailed reason, you can choose
 * {@link assert} function instead. Also, if you want to know all the errors with
 * detailed reasons, {@link validate} function would be useful.
 *
 * On the other and, if you don't want to allow any superfluous property that is not
 * enrolled to the type `T`, you can use {@link equals} function instead.
 *
 * @template T Type of the input value
 * @param input A value to be tested
 * @returns Whether the parametric value is following the type `T` or not
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function is<T>(input: T): input is T;

/**
 * Tests a value type.
 *
 * Tests a parametric value type and returns whether it's following the type `T` or not.
 * If the parametric value is matched with the type `T`, `true` value would be returned.
 * Otherwise, the parametric value is not following the type `T`, `false` value would be
 * returned.
 *
 * If what you want is not just knowing whether the parametric value is following the
 * type `T` or not, but throwing an exception with detailed reason, you can choose
 * {@link assert} function instead. Also, if you want to know all the errors with
 * detailed reasons, {@link validate} function would be useful.
 *
 * On the other and, if you don't want to allow any superfluous property that is not
 * enrolled to the type `T`, you can use {@link equals} function instead.
 *
 * @template T Type of the input value
 * @param input A value to be tested
 * @returns Whether the parametric value is following the type `T` or not
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function is<T>(input: unknown): input is T;

/**
 * @internal
 */
export function is(): never {
    halt("is");
}
Object.assign(is, Namespace.assert("is"));

/**
 * Validates a value type.
 *
 * Validates a parametric value type and archives all the type errors into an
 * {@link IValidation.errors} array, if the parametric value is not following the
 * type `T`. Of course, if the parametric value is following the type `T`, the
 * {@link IValidation.errors} array would be empty and {@link IValidation.success}
 * would have the `true` value.
 *
 * If what you want is not finding all the error, but asserting the parametric value
 * type with exception throwing, you can choose {@link assert} function instead.
 * Otherwise, you just want to know whether the parametric value is matched with the
 * type `T`, {@link is} function is the way to go.
 *
 * On the other and, if you don't want to allow any superfluous property that is not
 * enrolled to the type `T`, you can use {@link validateEquals} function instead.
 *
 * @template Type of the input value
 * @param input A value to be validated
 * @returns Validation result
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function validate<T>(input: T): IValidation<T>;

/**
 * Validates a value type.
 *
 * Validates a parametric value type and archives all the type errors into an
 * {@link IValidation.errors} array, if the parametric value is not following the
 * type `T`. Of course, if the parametric value is following the type `T`, the
 * {@link IValidation.errors} array would be empty and {@link IValidation.success}
 * would have the `true` value.
 *
 * If what you want is not finding all the error, but asserting the parametric value
 * type with exception throwing, you can choose {@link assert} function instead.
 * Otherwise, you just want to know whether the parametric value is matched with the
 * type `T`, {@link is} function is the way to go.
 *
 * On the other and, if you don't want to allow any superfluous property that is not
 * enrolled to the type `T`, you can use {@link validateEquals} function instead.
 *
 * @template Type of the input value
 * @param input A value to be validated
 * @returns Validation result
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function validate<T>(input: unknown): IValidation<T>;

/**
 * @internal
 */
export function validate(): never {
    halt("validate");
}
Object.assign(validate, Namespace.validate());

/* -----------------------------------------------------------
    STRICT VALIDATORS
----------------------------------------------------------- */
/**
 * Asserts equality between a value and its type.
 *
 * Asserts a parametric value type and throws a {@link TypeGuardError} with detailed
 * reason, if the parametric value is not following the type `T` or some superfluous
 * property that is not listed on the type `T` has been found. Otherwise, the value is
 * following the type `T` without any superfluous property, just input parameter would
 * be returned.
 *
 * If what you want is not asserting but just knowing whether the parametric value is
 * following the type `T` or not, you can choose the {@link equals} function instead.
 * Otherwise, you want to know all the errors, {@link validateEquals} is the way to go.
 *
 * On the other hand, if you want to allow superfluous property that is not enrolled
 * to the type `T`, you can use {@link assert} function instead.
 *
 * @template T Type of the input value
 * @param input A value to be asserted
 * @returns Parametric input value
 * @throws A {@link TypeGuardError} instance with detailed reason
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertEquals<T>(input: T): T;

/**
 * Asserts equality between a value and its type.
 *
 * Asserts a parametric value type and throws a {@link TypeGuardError} with detailed
 * reason, if the parametric value is not following the type `T` or some superfluous
 * property that is not listed on the type `T` has been found. Otherwise, the value is
 * following the type `T` without any superfluous property, just input parameter would
 * be returned.
 *
 * If what you want is not asserting but just knowing whether the parametric value is
 * following the type `T` or not, you can choose the {@link equals} function instead.
 * Otherwise, you want to know all the errors, {@link validateEquals} is the way to go.
 *
 * On the other hand, if you want to allow superfluous property that is not enrolled
 * to the type `T`, you can use {@link assert} function instead.
 *
 * @template T Type of the input value
 * @param input A value to be asserted
 * @returns Parametric input value casted as `T`
 * @throws A {@link TypeGuardError} instance with detailed reason
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertEquals<T>(input: unknown): T;

/**
 * @internal
 */
export function assertEquals(): never {
    halt("assertEquals");
}
Object.assign(assertEquals, Namespace.assert("assertEquals"));

/**
 * Tests equality between a value and its type.
 *
 * Tests a parametric value type and returns whether it's equivalent to the type `T`
 * or not. If the parametric value is matched with the type `T` and there's not any
 * superfluous property that is not listed on the type `T`, `true` value would be
 * returned. Otherwise, the parametric value is not following the type `T` or some
 * superfluous property exists, `false` value would be returned.
 *
 * If what you want is not just knowing whether the parametric value is following the
 * type `T` or not, but throwing an exception with detailed reason, you can choose
 * {@link assertEquals} function instead. Also, if you want to know all the errors with
 * detailed reasons, {@link validateEquals} function would be useful.
 *
 * On the other hand, if you want to allow superfluous property that is not enrolled
 * to the type `T`, you can use {@link is} function instead.
 *
 * @template T Type of the input value
 * @param input A value to be tested
 * @returns Whether the parametric value is equivalent to the type `T` or not
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function equals<T>(input: T): input is T;

/**
 * Tests equality between a value and its type.
 *
 * Tests a parametric value type and returns whether it's equivalent to the type `T`
 * or not. If the parametric value is matched with the type `T` and there's not any
 * superfluous property that is not listed on the type `T`, `true` value would be
 * returned. Otherwise, the parametric value is not following the type `T` or some
 * superfluous property exists, `false` value would be returned.
 *
 * If what you want is not just knowing whether the parametric value is following the
 * type `T` or not, but throwing an exception with detailed reason, you can choose
 * {@link assertEquals} function instead. Also, if you want to know all the errors with
 * detailed reasons, {@link validateEquals} function would be useful.
 *
 * On the other hand, if you want to allow superfluous property that is not enrolled
 * to the type `T`, you can use {@link is} function instead.
 *
 * @template T Type of the input value
 * @param input A value to be tested
 * @returns Whether the parametric value is equivalent to the type `T` or not
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function equals<T>(input: unknown): input is T;

/**
 * @internal
 */
export function equals(): never {
    halt("equals");
}
Object.assign(equals, Namespace.is());

/**
 * Validates equality between a value and its type.
 *
 * Validates a parametric value type and archives all the type errors into an
 * {@link IValidation.errors} array, if the parametric value is not following the
 * type `T` or some superfluous property that is not listed on the type `T` has been
 * found. Of course, if the parametric value is following the type `T` and no
 * superfluous property exists, the {@link IValidation.errors} array would be empty
 * and {@link IValidation.success} would have the `true` value.
 *
 * If what you want is not finding all the error, but asserting the parametric value
 * type with exception throwing, you can choose {@link assert} function instead.
 * Otherwise, you just want to know whether the parametric value is matched with the
 * type `T`, {@link is} function is the way to go.
 *
 * On the other and, if you don't want to allow any superfluous property that is not
 * enrolled to the type `T`, you can use {@link validateEquals} function instead.
 *
 * @template Type of the input value
 * @param input A value to be validated
 * @returns Validation result
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function validateEquals<T>(input: T): IValidation<T>;

/**
 * Validates equality between a value and its type.
 *
 * Validates a parametric value type and archives all the type errors into an
 * {@link IValidation.errors} array, if the parametric value is not following the
 * type `T` or some superfluous property that is not listed on the type `T` has been
 * found. Of course, if the parametric value is following the type `T` and no
 * superfluous property exists, the {@link IValidation.errors} array would be empty
 * and {@link IValidation.success} would have the `true` value.
 *
 * If what you want is not finding all the error, but asserting the parametric value
 * type with exception throwing, you can choose {@link assert} function instead.
 * Otherwise, you just want to know whether the parametric value is matched with the
 * type `T`, {@link is} function is the way to go.
 *
 * On the other and, if you don't want to allow any superfluous property that is not
 * enrolled to the type `T`, you can use {@link validateEquals} function instead.
 *
 * @template Type of the input value
 * @param input A value to be validated
 * @returns Validation result
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function validateEquals<T>(input: unknown): IValidation<T>;

/**
 * @internal
 */
export function validateEquals(): never {
    halt("validateEquals");
}
Object.assign(validateEquals, Namespace.validate());

/* -----------------------------------------------------------
    JSON FUNCTIONS
----------------------------------------------------------- */
/**
 * > You must configure the generic argument `T`.
 *
 * JSON Schema Application.
 *
 * Creates a JSON schema application which contains both main JSON schemas and components.
 * Note that, all of the object types are stored in the {@link IJsonApplication.components}
 * property for the `$ref` referencing.
 *
 * Also, `typia.application()` has additional generic arguments, *Purpose*.
 * As JSON schema definitions used by `swagger` and `ajv` are different a little bit,
 * you should configure the *Purpose* appropriately.
 *
 * For an example, `ajv` has an extra property "$recursiveRef" that are not exists
 * in the standard JSON schema definition spec. Otherwise, `swagger` can't identify
 * the tuple definition.
 *
 * @template Types Tuple of target types
 * @template Purpose Purpose of the JSON schema`
 * @template Prefix Prefix of the JSON components referenced by `$ref` tag
 * @return JSON schema application
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function application(): never;

/**
 * JSON Schema Application.
 *
 * Creates a JSON schema application which contains both main JSON schemas and components.
 * Note that, all of the object types are stored in the {@link IJsonApplication.components}
 * property for the `$ref` referencing.
 *
 * Also, `typia.application()` has additional generic arguments, *Purpose*.
 * As JSON schema definitions used by `swagger` and `ajv` are different a little bit,
 * you should configure the *Purpose* appropriately.
 *
 * For an example, `ajv` has an extra property "$recursiveRef" that are not exists
 * in the standard JSON schema definition spec. Otherwise, `swagger` can't identify
 * the tuple definition.
 *
 * @template Types Tuple of target types
 * @template Purpose Purpose of the JSON schema
 * @template Prefix Prefix of the JSON components referenced by `$ref` tag
 * @return JSON schema application
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function application<
    Types extends unknown[],
    Purpose extends "swagger" | "ajv" = "swagger",
    Prefix extends string = Purpose extends "swagger"
        ? "#/components/schemas"
        : "components#/schemas",
>(): IJsonApplication;

/**
 * @internal
 */
export function application(): never {
    halt("application");
}

/**
 * > You must configure the generic argument `T`.
 *
 * Safe `JSON.parse()` function with type assertion.
 *
 * `typia.assertParse()` is a combination function of `JSON.parse()` and {@link assert}.
 * Therefore, it convers a JSON (JavaScript Object Notation) string to a `T` typed
 * instance with type assertion.
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
 * `typia.assertParse()` is a combination function of `JSON.parse()` and {@link assert}.
 * Therefore, it convers a JSON (JavaScript Object Notation) string to a `T` typed
 * instance with type assertion.
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
export function assertParse<T>(input: string): T;

/**
 * @internal
 */
export function assertParse<T>(): T {
    halt("assertParse");
}
Object.assign(assertParse, Namespace.assert("assertParse"));

/**
 * > You must configure the generic argument `T`.
 *
 * Safe `JSON.parse()` function with type checking.
 *
 * `typia.isParse()` is a combination function of `JSON.parse()` and {@link is}.
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
 * `typia.isParse()` is a combination function of `JSON.parse()` and {@link is}.
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
export function isParse<T>(input: string): T | null;

/**
 * @internal
 */
export function isParse<T>(): T | null {
    halt("isParse");
}
Object.assign(isParse, is);

/**
 * > You must configure the generic argument `T`.
 *
 * Safe `JSON.parse()` function with detailed type validation.
 *
 * `typia.validateParse()` is a combination function of `JSON.parse()` and
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
 * `typia.validateParse()` is a combination function of `JSON.parse()` and
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
export function validateParse<T>(input: string): IValidation<T>;

/**
 * @internal
 */
export function validateParse<T>(): IValidation<T> {
    halt("validateParse");
}
Object.assign(validateParse, validate);

/**
 * 8x faster `JSON.stringify()` function.
 *
 * Converts an input value to a JSON (JavaScript Object Notation) string, about 8x faster
 * than the native `JSON.stringify()` function. The 5x faster principle is because
 * it writes an optimized JSON conversion plan, only for the type `T`.
 *
 * For reference, this `typia.stringify()` does not validate the input value type.
 * It just believes that the input value is following the type `T`. Therefore, if you
 * can't ensure the input value type, it would be better to call one of below functions
 * instead.
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
Object.assign(stringify, Namespace.stringify("stringify"));

/**
 * 5x faster `JSON.stringify()` function with type assertion.
 *
 * `typia.assertStringify()` is a combination function of {@link assert} and
 * {@link stringify}. Therefore, it converts an input value to JSON (JavaScript Object
 * Notation) string, with type assertion.
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
 * `typia.assertStringify()` is a combination function of {@link assert} and
 * {@link stringify}. Therefore, it converts an input value to JSON (JavaScript Object
 * Notation) string, with type assertion.
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
Object.assign(assertStringify, Namespace.stringify("assertStringify"));

/**
 * 7x faster `JSON.stringify()` function with type checking.
 *
 * `typia.stringify()` is a combination function of {@link is} and
 * {@link stringify}. Therefore, it converts an input value to JSON
 * (JavaScript Object Notation) string, with type checking.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * `null` value. Otherwise, there's no problem on the `input` value, JSON string would
 * be returned.
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
 * `typia.isStringify()` is a combination function of {@link is} and
 * {@link stringify}. Therefore, it converts an input value to JSON
 * (JavaScript Object Notation) string, with type checking.
 *f
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * `null` value. Otherwise, there's no problem on the `input` value, JSON string would
 * be returned.
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
Object.assign(isStringify, Namespace.stringify("isStringify"));

/**
 * 5x faster `JSON.stringify()` function with detailed type validation.
 *
 * `typia.validateStringify()` is a combination function of {@link validate} and
 * {@link stringify}. Therefore, it converts an input value to JSON (JavaScript Object
 * Notation) string, with detailed type validation.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * {@link IValidation.IFailure} value with detailed error reasons. Otherwise, there's no
 * problem on the `input` value, JSON string would be stored in `data` property of
 * the output {@link IValidation.ISuccess} instance.
 *
 * For reference, with detailed type validation, it is even 5x times faster than the
 * native `JSON.stringify()` function. So, just enjoy the safe and fast JSON conversion
 * with confidence.
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
 * `typia.validateStringify()` is a combination function of {@link validate} and
 * {@link stringify}. Therefore, it converts an input value to JSON (JavaScript Object
 * Notation) string, with detailed type validation.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * {@link IValidation.IFailure} value with detailed error reasons. Otherwise, there's no
 * problem on the `input` value, JSON string would be stored in `data` property of
 * the output {@link IValidation.ISuccess} instance.
 *
 * For reference, with detailed type validation, it is even 5x times faster than the
 * native `JSON.stringify()` function. So, just enjoy the safe and fast JSON conversion
 * with confidence.
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
Object.assign(validateStringify, Namespace.stringify("validateStringify"));

/* -----------------------------------------------------------
    MISCELLANEOUS
----------------------------------------------------------- */
/**
 * @internal
 */
export function metadata(): never;

/**
 * @internal
 */
export function metadata<Types extends unknown[]>(): IMetadataApplication;

/**
 * @internal
 */
export function metadata(): never {
    halt("metadata");
}

/**
 * > You must configure the generic argument `T`.
 *
 * Generate random data.
 *
 * Generates a random data following type the `T`.
 *
 * For reference, this `typia.random()` function generates only primitive type.
 * If there're some methods in the type `T` or its nested instances, those would
 * be ignored. Also, when the type `T` has a `toJSON()` method, its return type
 * would be generated instead.
 *
 * @template T Type of data to generate
 * @param generator Random data generator
 * @return Randomly generated data
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function random(generator?: Partial<IRandomGenerator>): never;

/**
 * Generate random data.
 *
 * Generates a random data following type the `T`.
 *
 * For reference, this `typia.random()` function generates only primitive type.
 * If there're some methods in the type `T` or its nested instances, those would
 * be ignored. Also, when the type `T` has a `toJSON()` method, its return type
 * would be generated instead.
 *
 * @template T Type of data to generate
 * @param generator Random data generator
 * @return Randomly generated data
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function random<T>(generator?: Partial<IRandomGenerator>): Primitive<T>;

/**
 * @internal
 */
export function random(): never {
    halt("random");
}
Object.assign(random, Namespace.random());

/**
 * Clone a data.
 *
 * Clones an instance following type `T`. If the target *input* value or its member
 * variable contains a class instance that is having a `toJSON()` method, its return
 * value would be cloned.
 *
 * For reference, this `typia.clone()` function does not validate the input value type.
 * It just believes that the input value is following the type `T`. Therefore, if you
 * can't ensure the input value type, it would be better to call {@link assertClone}
 * function instead.
 *
 * @template T Type of the input value
 * @param input A value to be cloned
 * @return Cloned data
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function clone<T>(input: T): Primitive<T>;

/**
 * @internal
 */
export function clone(): never {
    halt("clone");
}
Object.assign(clone, Namespace.clone("clone"));

/**
 * Clone a data with type assertion.
 *
 * Clones an instance following type `T`, with type assertion. If the target `input`
 * value or its member variable contains a class instance that is having a `toJSON()`
 * method, its return value would be cloned.
 *
 * In such reason, when `input` value is not matched with the type `T`, it throws an
 * {@link TypeGuardError}. Otherwise, there's no problem on the `input` value, cloned
 * data would be returned.
 *
 * @template T Type of the input value
 * @param input A value to be cloned
 * @return Cloned data
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertClone<T>(input: T): Primitive<T>;

/**
 * Clone a data with type assertion.
 *
 * Clones an instance following type `T`, with type assertion. If the target `input`
 * value or its member variable contains a class instance that is having a `toJSON()`
 * method, its return value would be cloned.
 *
 * In such reason, when `input` value is not matched with the type `T`, it throws an
 * {@link TypeGuardError}. Otherwise, there's no problem on the `input` value, cloned
 * data would be returned.
 *
 * @template T Type of the input value
 * @param input A value to be cloned
 * @return Cloned data
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertClone<T>(input: unknown): Primitive<T>;

/**
 * @internal
 */
export function assertClone(): never {
    halt("assertClone");
}
Object.assign(assertClone, Namespace.assert("assertClone"));
Object.assign(assertClone, Namespace.clone("assertClone"));

/**
 * Clone a data with type checking.
 *
 * Clones an instance following type `T`, with type checking. If the target `input`
 * value or its member variable contains a class instance that is having a `toJSON()`
 * method, its return value would be cloned.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * `null` value instead. Otherwise, there's no problem on the `input` value, cloned
 * data would be returned.
 *
 * @template T Type of the input value
 * @param input A value to be cloned
 * @return Cloned data when exact type, otherwise null
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function isClone<T>(input: T): Primitive<T> | null;

/**
 * Clone a data with type checking.
 *
 * Clones an instance following type `T`, with type checking. If the target `input`
 * value or its member variable contains a class instance that is having a `toJSON()`
 * method, its return value would be cloned.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * `null` value instead. Otherwise, there's no problem on the `input` value, cloned
 * data would be returned.
 *
 * @template T Type of the input value
 * @param input A value to be cloned
 * @return Cloned data when exact type, otherwise null
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function isClone<T>(input: unknown): Primitive<T> | null;

/**
 * @internal
 */
export function isClone(): never {
    halt("isClone");
}
Object.assign(isClone, Namespace.is());
Object.assign(isClone, Namespace.clone("isClone"));

/**
 * Clone a data with detailed type validation.
 *
 * Clones an instance following type `T`, with detailed type validation. If the target
 * `input` value or its member variable contains a class instance that is having a
 * `toJSON()` method, its return value would be cloned.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * {@link IValidation.Failure} value. Otherwise, there's no problem on the `input`
 * value, cloned data would be stored in `data` property of the output
 * {@link IValidation.Success} instance.
 *
 * @template T Type of the input value
 * @param input A value to be cloned
 * @returns Validation result with cloned value
 */
export function validateClone<T>(input: T): IValidation<Primitive<T>>;

/**
 * Clone a data with detailed type validation.
 *
 * Clones an instance following type `T`, with detailed type validation. If the target
 * `input` value or its member variable contains a class instance that is having a
 * `toJSON()` method, its return value would be cloned.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * {@link IValidation.Failure} value. Otherwise, there's no problem on the `input`
 * value, cloned data would be stored in `data` property of the output
 * {@link IValidation.Success} instance.
 *
 * @template T Type of the input value
 * @param input A value to be cloned
 * @returns Validation result with cloned value
 */
export function validateClone<T>(input: unknown): IValidation<Primitive<T>>;

/**
 * @internal
 */
export function validateClone(): never {
    halt("validateClone");
}
Object.assign(validateClone, Namespace.validate());
Object.assign(validateClone, Namespace.clone("validateClone"));

/**
 * Prune, erase superfluous properties.
 *
 * Remove every superfluous properties from the `input` object, even including nested
 * objects. Note that, as every superfluous properties would be deleted, you never can
 * read those superfluous properties after calling this `prune()` function.
 *
 * For reference, this `typia.prune()` function does not validate the input value type.
 * It just believes that the input value is following the type `T`. Therefore, if you
 * can't ensure the input value type, it would better to call one of below functions
 * instead.
 *
 *   - {@link assertPrune}
 *   - {@link isPrune}
 *   - {@link validatePrune}
 *
 * @template T Type of the input value
 * @param input Target instance to prune
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function prune<T extends object>(input: T): void;

/**
 * @internal
 */
export function prune(): never {
    halt("prune");
}
Object.assign(prune, Namespace.prune("prune"));

/**
 * Prune, erase superfluous properties, with type assertion.
 *
 * `typia.assertPrune()` is a combination function of {@link assert} and {@link prune}.
 * Therefore, it removes every superfluous properties from the `input` object including
 * nested objects, with type assertion.
 *
 * In such reason, when `input` value is not matched with the type `T`, it throws an
 * {@link TypeGuardError}. Otherwise, there's no problem on the `input` value, its
 * every superfluous properties would be removed, including nested objects.
 *
 * @template T Type of the input value
 * @param input Target instance to assert and prune
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertPrune<T>(input: T): T;

/**
 * Prune, erase superfluous properties, with type assertion.
 *
 * `typia.assertPrune()` is a combination function of {@link assert} and {@link prune}.
 * Therefore, it removes every superfluous properties from the `input` object including
 * nested objects, with type assertion.
 *
 * In such reason, when `input` value is not matched with the type `T`, it throws an
 * {@link TypeGuardError}. Otherwise, there's no problem on the `input` value, its
 * every superfluous properties would be removed, including nested objects.
 *
 * @template T Type of the input value
 * @param input Target instance to assert and prune
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertPrune<T>(input: unknown): T;

/**
 * @internal
 */
export function assertPrune(): unknown {
    halt("assertPrune");
}
Object.assign(assertPrune, Namespace.assert("assertPrune"));
Object.assign(assertPrune, Namespace.prune("assertPrune"));

/**
 * Prune, erase superfluous properties, with type checking.
 *
 * `typia.assertPrune()` is a combination function of {@link is} and {@link prune}.
 * Therefore, it removes every superfluous properties from the `input` object including
 * nested objects, with type checking.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * `false` value. Otherwise, there's no problem on the `input` value, it returns
 * `true` after removing every superfluous properties, including nested objects.
 *
 * @template T Type of the input value
 * @param input Target instance to check and prune
 * @returns Whether the parametric value is following the type `T` or not
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function isPrune<T>(input: T): input is T;

/**
 * Prune, erase superfluous properties, with type checking.
 *
 * `typia.assertPrune()` is a combination function of {@link is} and {@link prune}.
 * Therefore, it removes every superfluous properties from the `input` object including
 * nested objects, with type checking.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * `false` value. Otherwise, there's no problem on the `input` value, it returns
 * `true` after removing every superfluous properties, including nested objects.
 *
 * @template T Type of the input value
 * @param input Target instance to check and prune
 * @returns Whether the parametric value is following the type `T` or not
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function isPrune<T>(input: unknown): input is T;

/**
 * @internal
 */
export function isPrune(): never {
    halt("isPrune");
}
Object.assign(isPrune, Namespace.is());
Object.assign(isPrune, Namespace.prune("isPrune"));

/**
 * Prune, erase superfluous properties, with type validation.
 *
 * `typia.validatePrune()` is a combination function of {@link validate} and {@link prune}.
 * Therefore, it removes every superfluous properties from the `input` object including
 * nested objects, with type validation.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * {@link IValidation.IFailure} value with detailed error reasons. Otherwise, there's
 * no problem on the `input` value, it returns {@link IValidation.ISucess} value after
 * removing every superfluous properties, including nested objects.
 *
 * @template T Type of the input value
 * @param input Target instance to validate and prune
 * @returns Validation result
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function validatePrune<T>(input: T): IValidation<T>;

/**
 * Prune, erase superfluous properties, with type validation.
 *
 * `typia.validatePrune()` is a combination function of {@link validate} and {@link prune}.
 * Therefore, it removes every superfluous properties from the `input` object including
 * nested objects, with type validation.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * {@link IValidation.IFailure} value with detailed error reasons. Otherwise, there's
 * no problem on the `input` value, it returns {@link IValidation.ISucess} value after
 * removing every superfluous properties, including nested objects.
 *
 * @template T Type of the input value
 * @param input Target instance to validate and prune
 * @returns Validation result
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function validatePrune<T>(input: unknown): IValidation<T>;

/**
 * @internal
 */
export function validatePrune<T>(): IValidation<T> {
    halt("validatePrune");
}
Object.assign(validatePrune, Namespace.prune("validatePrune"));
Object.assign(validatePrune, Namespace.validate());

/* ===========================================================
    FACTORY FUNCTIONS
        - BASIC VALIDATORS
        - STRICT VALIDATORS
        - JSON FUNCTIONS
        - MISCELLANEOUS
==============================================================
    BASIC VALIDATORS
----------------------------------------------------------- */
/**
 * Creates a reusable {@link assert} function.
 *
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssert(): never;

/**
 * Creates a reusable {@link assert} function.
 *
 * @template T Type of the input value
 * @returns A reusable `assert` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssert<T>(): (input: unknown) => T;

/**
 * @internal
 */
export function createAssert<T>(): (input: unknown) => T {
    halt("createAssert");
}
Object.assign(createAssert, assert);

/**
 * Creates a reusable {@link assertType} function.
 *
 * Duplicated function of {@link createAssert} for `typescript-is` users.
 *
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @deprecated
 */
export function createAssertType(): never;

/**
 * Creates a reusable {@link assertType} function.
 *
 * Duplicated function of {@link createAssert} for `typescript-is` users.
 *
 * @template T Type of the input value
 * @returns A reusable `assert` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @deprecated
 */
export function createAssertType<T>(): (input: unknown) => T;

/**
 * @internal
 */
export function createAssertType<T>(): (input: unknown) => T {
    halt("createAssertType");
}
Object.assign(createAssertType, assertType);

/**
 * Creates a reusable {@link is} function.
 *
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createIs(): never;

/**
 * Creates a reusable {@link is} function.
 *
 * @template T Type of the input value
 * @returns A reusable `is` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createIs<T>(): (input: unknown) => input is T;

/**
 * @internal
 */
export function createIs<T>(): (input: unknown) => input is T {
    halt("createIs");
}
Object.assign(createIs, is);

/**
 * Creates a reusable {@link validate} function.
 *
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createValidate(): never;

/**
 * Creates a reusable {@link validate} function.
 *
 * @template T Type of the input value
 * @returns A reusable `validate` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createValidate<T>(): (input: unknown) => IValidation<T>;

/**
 * @internal
 */
export function createValidate(): (input: unknown) => IValidation {
    halt("createValidate");
}
Object.assign(createValidate, validate);

/* -----------------------------------------------------------
    STRICT VALIDATORS
----------------------------------------------------------- */
/**
 * Creates a reusable {@link assertEquals} function.
 *
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertEquals(): never;

/**
 * Creates a reusable {@link assertEquals} function.
 *
 * @template T Type of the input value
 * @returns A reusable `assertEquals` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertEquals<T>(): (input: unknown) => T;

/**
 * @internal
 */
export function createAssertEquals<T>(): (input: unknown) => T {
    halt("createAssertEquals");
}
Object.assign(createAssertEquals, assertEquals);

/**
 * Creates a reusable {@link equals} function.
 *
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createEquals(): never;

/**
 * Creates a reusable {@link equals} function.
 *
 * @template T Type of the input value
 * @returns A reusable `equals` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createEquals<T>(): (input: unknown) => input is T;

/**
 * @internal
 */
export function createEquals<T>(): (input: unknown) => input is T {
    halt("createEquals");
}
Object.assign(createEquals, equals);

/**
 * Creates a reusable {@link validateEquals} function.
 *
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createValidateEquals(): never;

/**
 * Creates a reusable {@link validateEquals} function.
 *
 * @template T Type of the input value
 * @returns A reusable `validateEquals` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createValidateEquals<T>(): (input: unknown) => IValidation<T>;

/**
 * @internal
 */
export function createValidateEquals(): (input: unknown) => IValidation {
    halt("createValidateEquals");
}
Object.assign(createValidateEquals, validateEquals);

/* -----------------------------------------------------------
    JSON FUNCTIONS
----------------------------------------------------------- */
/**
 * Creates a reusable {@link isParse} function.
 *
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
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
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
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
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
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
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
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
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
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
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
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
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
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

/* -----------------------------------------------------------
    MISCELLANEOUS
----------------------------------------------------------- */
/**
 * Creates a reusable {@link random} function.
 *
 * @danger You have to specify the generic argument `T`
 * @param generator Random data generator
 * @return Nothing until specifying the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createRandom(generator?: Partial<IRandomGenerator>): never;

/**
 * Creates a resuable {@link random} function.
 *
 * @template T Type of the input value
 * @param generator Random data generator
 * @returns A reusable `random` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createRandom<T>(
    generator?: Partial<IRandomGenerator>,
): () => Primitive<T>;

/**
 * @internal
 */
export function createRandom(): never {
    halt("createRandom");
}
Object.assign(createRandom, random);

/**
 * Creates a reusable {@link clone} function.
 *
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createClone(): never;

/**
 * Creates a resuable {@link clone} function.
 *
 * @template T Type of the input value
 * @returns A reusable `clone` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createClone<T>(): (input: T) => Primitive<T>;

/**
 * @internal
 */
export function createClone(): never {
    halt("createClone");
}
Object.assign(createClone, clone);

/**
 * Creates a reusable {@link assertClone} function.
 *
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertClone(): never;

/**
 * Creates a resuable {@link assertClone} function.
 *
 * @template T Type of the input value
 * @returns A reusable `clone` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertClone<T>(): (input: unknown) => Primitive<T>;

/**
 * @internal
 */
export function createAssertClone(): never {
    halt("createAssertClone");
}
Object.assign(createAssertClone, assertClone);

/**
 * Creates a reusable {@link isClone} function.
 *
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createIsClone(): never;

/**
 * Creates a resuable {@link isClone} function.
 *
 * @template T Type of the input value
 * @returns A reusable `clone` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createIsClone<T>(): (input: unknown) => Primitive<T> | null;

/**
 * @internal
 */
export function createIsClone(): never {
    halt("createIsClone");
}
Object.assign(createIsClone, isClone);

/**
 * Creates a reusable {@link validateClone} function.
 *
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createValidateClone(): never;

/**
 * Creates a resuable {@link validateClone} function.
 *
 * @template T Type of the input value
 * @returns A reusable `clone` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createValidateClone<T>(): (
    input: unknown,
) => IValidation<Primitive<T>>;

/**
 * @internal
 */
export function createValidateClone(): never {
    halt("createValidateClone");
}
Object.assign(createValidateClone, validateClone);

/**
 * Creates a reusable {@link prune} function.
 *
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createPrune(): never;

/**
 * Creates a resuable {@link prune} function.
 *
 * @template T Type of the input value
 * @returns A reusable `prune` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createPrune<T extends object>(): (input: T) => void;

/**
 * @internal
 */
export function createPrune<T extends object>(): (input: T) => void {
    halt("createPrune");
}
Object.assign(createPrune, prune);

/**
 * Creates a reusable {@link assertPrune} function.
 *
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertPrune(): never;

/**
 * Creates a resuable {@link assertPrune} function.
 *
 * @template T Type of the input value
 * @returns A reusable `isPrune` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertPrune<T extends object>(): (input: T) => T;

/**
 * @internal
 */
export function createAssertPrune<T extends object>(): (input: T) => T {
    halt("createAssertPrune");
}
Object.assign(createAssertPrune, assertPrune);

/**
 * Creates a reusable {@link isPrune} function.
 *
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createIsPrune(): never;

/**
 * Creates a resuable {@link isPrune} function.
 *
 * @template T Type of the input value
 * @returns A reusable `isPrune` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createIsPrune<T extends object>(): (input: T) => input is T;

/**
 * @internal
 */
export function createIsPrune<T extends object>(): (input: T) => input is T {
    halt("createIsPrune");
}
Object.assign(createIsPrune, isPrune);

/**
 * Creates a reusable {@link validatePrune} function.
 *
 * @danger You have to specify the generic argument `T`
 * @return Nothing until specifying the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createValidatePrune(): never;

/**
 * Creates a resuable {@link validatePrune} function.
 *
 * @template T Type of the input value
 * @returns A reusable `validatePrune` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createValidatePrune<T extends object>(): (
    input: T,
) => IValidation<T>;

/**
 * @internal
 */
export function createValidatePrune<T extends object>(): (
    input: T,
) => IValidation<T> {
    halt("createValidatePrune");
}
Object.assign(createValidatePrune, validatePrune);

/**
 * @internal
 */
function halt(name: string): never {
    throw new Error(
        `Error on typia.${name}(): no transform has been configured. Configure the "tsconfig.json" file following the [README.md#setup](https://github.com/samchon/typia#setup)`,
    );
}
