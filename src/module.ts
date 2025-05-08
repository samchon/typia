import { StandardSchemaV1 } from "@standard-schema/spec";
import { NoTransformConfigurationError } from "./transformers/NoTransformConfigurationError";

import { AssertionGuard } from "./AssertionGuard";
import { IRandomGenerator } from "./IRandomGenerator";
import { IValidation } from "./IValidation";
import { Resolved } from "./Resolved";
import { TypeGuardError } from "./TypeGuardError";

export * as functional from "./functional";
export * as http from "./http";
export * as llm from "./llm";
export * as json from "./json";
export * as misc from "./misc";
export * as notations from "./notations";
export * as protobuf from "./protobuf";
export * as reflect from "./reflect";
export * as tags from "./tags";

export * from "./schemas/metadata/IJsDocTagInfo";
export * from "./schemas/json/IJsonApplication";
export * from "./schemas/json/IJsonSchemaCollection";
export * from "./schemas/json/IJsonSchemaUnit";
export * from "./AssertionGuard";
export * from "./IRandomGenerator";
export * from "./IValidation";
export * from "./TypeGuardError";

export * from "./Primitive";
export * from "./Resolved";
export * from "./CamelCase";
export * from "./PascalCase";
export * from "./SnakeCase";
export * from "./IReadableURLSearchParams";

/* -----------------------------------------------------------
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
 * Also, if you want to automatically cast the parametric value to the type `T`
 * when no problem (perform the assertion guard of type).
 *
 * On the other and, if you don't want to allow any superfluous property that is not
 * enrolled to the type `T`, you can use {@link assertEquals} function instead.
 *
 * @template T Type of the input value
 * @param input A value to be asserted
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Parametric input value
 * @throws A {@link TypeGuardError} instance with detailed reason
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assert<T>(
  input: T,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): T;

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
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Parametric input value casted as `T`
 * @throws A {@link TypeGuardError} instance with detailed reason
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assert<T>(
  input: unknown,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): T;

/**
 * @internal
 */
export function assert(): never {
  NoTransformConfigurationError("assert");
}

/**
 * Assertion guard of a value type.
 *
 * Asserts a parametric value type and throws a {@link TypeGuardError} with detailed
 * reason, if the parametric value is not following the type `T`. Otherwise, the
 * value is following the type `T`, nothing would be returned, but the input value
 * would be automatically casted to the type `T`. This is the concept of
 * "Assertion Guard" of a value type.
 *
 * If what you want is not asserting but just knowing whether the parametric value is
 * following the type `T` or not, you can choose the {@link is} function instead.
 * Otherwise you want to know all the errors, {@link validate} is the way to go.
 * Also, if you want to returns the parametric value when no problem, you can use
 * {@link assert} function instead.
 *
 * On the other and, if you don't want to allow any superfluous property that is not
 * enrolled to the type `T`, you can use {@link assertGuardEquals} function instead.
 *
 * @template T Type of the input value
 * @param input A value to be asserted
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @throws A {@link TypeGuardError} instance with detailed reason
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertGuard<T>(
  input: T,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): asserts input is T;

/**
 * Assertion guard of a value type.
 *
 * Asserts a parametric value type and throws a {@link TypeGuardError} with detailed
 * reason, if the parametric value is not following the type `T`. Otherwise, the
 * value is following the type `T`, nothing would be returned, but the input value
 * would be automatically casted to the type `T`. This is the concept of
 * "Assertion Guard" of a value type.
 *
 * If what you want is not asserting but just knowing whether the parametric value is
 * following the type `T` or not, you can choose the {@link is} function instead.
 * Otherwise you want to know all the errors, {@link validate} is the way to go.
 * Also, if you want to returns the parametric value when no problem, you can use
 * {@link assert} function instead.
 *
 * On the other and, if you don't want to allow any superfluous property that is not
 * enrolled to the type `T`, you can use {@link assertGuardEquals} function instead.
 *
 * @template T Type of the input value
 * @param input A value to be asserted
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @throws A {@link TypeGuardError} instance with detailed reason
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertGuard<T>(
  input: unknown,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): asserts input is T;

/**
 * @internal
 */
export function assertGuard(): never {
  NoTransformConfigurationError("assertGuard");
}

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
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
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
  NoTransformConfigurationError("is");
}

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
  NoTransformConfigurationError("validate");
}

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
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Parametric input value
 * @throws A {@link TypeGuardError} instance with detailed reason
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertEquals<T>(
  input: T,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): T;

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
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Parametric input value casted as `T`
 * @throws A {@link TypeGuardError} instance with detailed reason
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertEquals<T>(
  input: unknown,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): T;

/**
 * @internal
 */
export function assertEquals(): never {
  NoTransformConfigurationError("assertEquals");
}

/**
 * Assertion guard of a type with equality.
 *
 * Asserts a parametric value type and throws a {@link TypeGuardError} with detailed
 * reason, if the parametric value is not following the type `T` or some superfluous
 * property that is not listed on the type `T` has been found.
 *
 * Otherwise, the value is following the type `T` without any superfluous property,
 * nothing would be returned, but the input value would be automatically casted to
 * the type `T`. This is the concept of "Assertion Guard" of a value type.
 *
 * If what you want is not asserting but just knowing whether the parametric value is
 * following the type `T` or not, you can choose the {@link equals} function instead.
 * Otherwise, you want to know all the errors, {@link validateEquals} is the way to go.
 * Also, if you want to returns the parametric value when no problem, you can use
 * {@link assert} function instead.
 *
 * On the other hand, if you want to allow superfluous property that is not enrolled
 * to the type `T`, you can use {@link assertEquals} function instead.
 *
 * @template T Type of the input value
 * @param input A value to be asserted
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Parametric input value casted as `T`
 * @throws A {@link TypeGuardError} instance with detailed reason
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertGuardEquals<T>(
  input: T,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): asserts input is T;

/**
 * Assertion guard of a type with equality.
 *
 * Asserts a parametric value type and throws a {@link TypeGuardError} with detailed
 * reason, if the parametric value is not following the type `T` or some superfluous
 * property that is not listed on the type `T` has been found.
 *
 * Otherwise, the value is following the type `T` without any superfluous property,
 * nothing would be returned, but the input value would be automatically casted to
 * the type `T`. This is the concept of "Assertion Guard" of a value type.
 *
 * If what you want is not asserting but just knowing whether the parametric value is
 * following the type `T` or not, you can choose the {@link equals} function instead.
 * Otherwise, you want to know all the errors, {@link validateEquals} is the way to go.
 * Also, if you want to returns the parametric value when no problem, you can use
 * {@link assertEquals} function instead.
 *
 * On the other hand, if you want to allow superfluous property that is not enrolled
 * to the type `T`, you can use {@link assertGuard} function instead.
 *
 * @template T Type of the input value
 * @param input A value to be asserted
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Parametric input value casted as `T`
 * @throws A {@link TypeGuardError} instance with detailed reason
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertGuardEquals<T>(
  input: unknown,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): asserts input is T;

/**
 * @internal
 */
export function assertGuardEquals(): never {
  NoTransformConfigurationError("assertGuardEquals");
}

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
  NoTransformConfigurationError("equals");
}

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
  NoTransformConfigurationError("validateEquals");
}

/* -----------------------------------------------------------
    RANDOM
----------------------------------------------------------- */
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
export function random<T>(generator?: Partial<IRandomGenerator>): Resolved<T>;

/**
 * @internal
 */
export function random(): never {
  NoTransformConfigurationError("random");
}

/* -----------------------------------------------------------
    FACTORY FUNCTIONS
----------------------------------------------------------- */
/**
 * Creates a reusable {@link assert} function.
 *
 * @danger You must configure the generic argument `T`
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssert(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): never;

/**
 * Creates a reusable {@link assert} function.
 *
 * @template T Type of the input value
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns A reusable `assert` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssert<T>(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): (input: unknown) => T;

/**
 * @internal
 */
export function createAssert<T>(): (input: unknown) => T {
  NoTransformConfigurationError("createAssert");
}

/**
 * Creates a reusable {@link assertGuard} function.
 *
 * Note that, you've to declare the variable type of the factory function caller
 * like below. If you don't declare the variable type, compilation error be thrown.
 * This is the special rule of the TypeScript compiler.
 *
 * ```typescript
 * // MUST DECLARE THE VARIABLE TYPE
 * const func: typia.AssertionGuard<number> = typia.createAssertGuard<number>();
 *
 * // IF NOT, COMPILATION ERROR BE OCCURRED
 * const func = typia.createAssertGuard<number>();
 * ```
 *
 * > *Assertions require every name in the call target to be declared with an*
 * > *explicit type annotation.*
 *
 * @danger You must configure the generic argument `T`
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertGuard(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): never;

/**
 * Creates a reusable {@link assertGuard} function.
 *
 * Note that, you've to declare the variable type of the factory function caller
 * like below. If you don't declare the variable type, compilation error be thrown.
 * This is the special rule of the TypeScript compiler.
 *
 * ```typescript
 * // MUST DECLARE THE VARIABLE TYPE
 * const func: typia.AssertionGuard<number> = typia.createAssertGuard<number>();
 *
 * // IF NOT, COMPILATION ERROR BE OCCURRED
 * const func = typia.createAssertGuard<number>();
 * ```
 *
 * > *Assertions require every name in the call target to be declared with an*
 * > *explicit type annotation.*
 *
 * @returns Nothing until you configure the generic argument `T`
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertGuard<T>(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): (input: unknown) => AssertionGuard<T>;

/**
 * @internal
 */
export function createAssertGuard<T>(): (input: unknown) => AssertionGuard<T> {
  NoTransformConfigurationError("createAssertGuard");
}

/**
 * Creates a reusable {@link is} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
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
  NoTransformConfigurationError("createIs");
}

/**
 * Creates a reusable {@link validate} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
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
export function createValidate<T>(): ((input: unknown) => IValidation<T>) &
  StandardSchemaV1<unknown, T>;

/**
 * @internal
 */
export function createValidate(): ((input: unknown) => IValidation) &
  StandardSchemaV1<unknown, unknown> {
  NoTransformConfigurationError("createValidate");
}

/**
 * Creates a reusable {@link assertEquals} function.
 *
 * @danger You must configure the generic argument `T`
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertEquals(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): never;

/**
 * Creates a reusable {@link assertEquals} function.
 *
 * @template T Type of the input value
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns A reusable `assertEquals` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertEquals<T>(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): (input: unknown) => T;

/**
 * @internal
 */
export function createAssertEquals<T>(): (input: unknown) => T {
  NoTransformConfigurationError("createAssertEquals");
}

/**
 * Creates a reusable {@link assertGuardEquals} function.
 *
 * Note that, you've to declare the variable type of the factory function caller
 * like below. If you don't declare the variable type, compilation error be thrown.
 * This is the special rule of the TypeScript compiler.
 *
 * ```typescript
 * // MUST DECLARE THE VARIABLE TYPE
 * const func: typia.AssertionGuard<number> = typia.createAssertGuardEquals<number>();
 *
 * // IF NOT, COMPILATION ERROR BE OCCURRED
 * const func = typia.createAssertGuardEquals<number>();
 * ```
 *
 * > *Assertions require every name in the call target to be declared with an*
 * > *explicit type annotation.*
 *
 * @danger You must configure the generic argument `T`
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertGuardEquals(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): never;

/**
 * Creates a reusable {@link assertGuardEquals} function.
 *
 * Note that, you've to declare the variable type of the factory function caller
 * like below. If you don't declare the variable type, compilation error be thrown.
 * This is the special rule of the TypeScript compiler.
 *
 * ```typescript
 * // MUST DECLARE THE VARIABLE TYPE
 * const func: typia.AssertionGuard<number> = typia.createAssertGuardEquals<number>();
 *
 * // IF NOT, COMPILATION ERROR BE OCCURRED
 * const func = typia.createAssertGuardEquals<number>();
 * ```
 *
 * > *Assertions require every name in the call target to be declared with an*
 * > *explicit type annotation.*
 *
 * @param errorFactory Custom error factory. Default is `TypeGuardError`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertGuardEquals<T>(
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
): (input: unknown) => AssertionGuard<T>;

/**
 * @internal
 */
export function createAssertGuardEquals<T>(): (
  input: unknown,
) => AssertionGuard<T> {
  NoTransformConfigurationError("createAssertGuardEquals");
}

/**
 * Creates a reusable {@link equals} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
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
  NoTransformConfigurationError("createEquals");
}

/**
 * Creates a reusable {@link validateEquals} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
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
export function createValidateEquals<T>(): ((
  input: unknown,
) => IValidation<T>) &
  StandardSchemaV1<unknown, T>;

/**
 * @internal
 */
export function createValidateEquals(): ((input: unknown) => IValidation) &
  StandardSchemaV1<unknown, unknown> {
  NoTransformConfigurationError("createValidateEquals");
}

/**
 * Creates a reusable {@link random} function.
 *
 * @danger You must configure the generic argument `T`
 * @param generator Random data generator
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createRandom(generator?: Partial<IRandomGenerator>): never;

/**
 * Creates a reusable {@link random} function.
 *
 * @template T Type of the input value
 * @param generator Random data generator
 * @returns A reusable `random` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createRandom<T>(
  generator?: Partial<IRandomGenerator>,
): () => Resolved<T>;

/**
 * @internal
 */
export function createRandom(): never {
  NoTransformConfigurationError("createRandom");
}
