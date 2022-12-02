import { $every } from "./functional/$every";
import { $guard } from "./functional/$guard";
import { $is_email } from "./functional/$is_email";
import { $is_ipv4 } from "./functional/$is_ipv4";
import { $is_ipv6 } from "./functional/$is_ipv6";
import { $is_url } from "./functional/$is_url";
import { $is_uuid } from "./functional/$is_uuid";
import { $join } from "./functional/$join";
import { $number } from "./functional/$number";
import { $report } from "./functional/$report";
import { $string } from "./functional/$string";
import { $tail } from "./functional/$tail";

import { IMetadataApplication } from "./metadata/IMetadataApplication";
import { IJsonApplication } from "./schemas/IJsonApplication";

import { IValidation } from "./IValidation";
import { Primitive } from "./Primitive";
import { TypeGuardError } from "./TypeGuardError";

export * from "./schemas/IJsonApplication";
export * from "./schemas/IJsonComponents";
export * from "./schemas/IJsonSchema";
export * from "./Primitive";
export * from "./TypeGuardError";
export * from "./IValidation";

/* ===========================================================
    SINGLE FUNCTIONS
        - BASIC VALIDATORS
        - STRICT VALIDATORS
        - PROTOCOL BUFFER FUNCTIONS
        - STRINGIFY FUNCTIONS
        - CLONE FUNCTIONS
        - MISC
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

/**
 * @internal
 */
export namespace assert {
    export const is_uuid = $is_uuid;
    export const is_email = $is_email;
    export const is_url = $is_url;
    export const is_ipv4 = $is_ipv4;
    export const is_ipv6 = $is_ipv6;

    export const join = $join;
    export const every = $every;
    export const guard = $guard("TSON.assert");
}

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

/**
 * @internal
 */
export namespace assertType {
    // FOR LEGACY FUNCTIONS
    export function predicate(
        matched: boolean,
        exceptionable: boolean,
        closure: () => Omit<TypeGuardError.IProps, "method">,
    ): boolean {
        if (matched === false && exceptionable === true)
            throw new TypeGuardError({
                method: "TSON.assertType",
                ...closure(),
            });
        return matched;
    }
}
Object.assign(assertType, assert);

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

/**
 * @internal
 */
export namespace is {
    export const is_uuid = $is_uuid;
    export const is_email = $is_email;
    export const is_url = $is_url;
    export const is_ipv4 = $is_ipv4;
    export const is_ipv6 = $is_ipv6;
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
    halt("validate");
}

/**
 * @internal
 */
export namespace validate {
    export const is_uuid = $is_uuid;
    export const is_email = $is_email;
    export const is_url = $is_url;
    export const is_ipv4 = $is_ipv4;
    export const is_ipv6 = $is_ipv6;

    export const join = $join;
    export const report = $report;

    // FOR LEGACY FUNCTIONS
    export const predicate =
        (res: IValidation) =>
        (
            matched: boolean,
            exceptionable: boolean,
            closure: () => IValidation.IError,
        ) => {
            // CHECK FAILURE
            if (matched === false && exceptionable === true)
                (() => {
                    res.success &&= false;
                    const errorList = (res as IValidation.IFailure).errors;

                    // TRACE ERROR
                    const error = closure();
                    if (errorList.length) {
                        const last = errorList[errorList.length - 1]!.path;
                        if (
                            last.length >= error.path.length &&
                            last.substring(0, error.path.length) === error.path
                        )
                            return;
                    }
                    errorList.push(error);
                    return;
                })();
            return matched;
        };
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
export function assertEquals<T>(): never {
    halt("assertEquals");
}

/**
 * @internal
 */
export namespace assertEquals {
    export const is_uuid = $is_uuid;
    export const is_email = $is_email;
    export const is_url = $is_url;
    export const is_ipv4 = $is_ipv4;
    export const is_ipv6 = $is_ipv6;

    export const join = $join;
    export const every = $every;
    // export const guardV2 = $guardV2("TSON.assertEquals");
    export const guard = $guard("TSON.assertEquals");

    // FOR LEGACY FUNCTIONS
    export function predicate(
        matched: boolean,
        exceptionable: boolean,
        closure: () => Omit<TypeGuardError.IProps, "method">,
    ): boolean {
        if (matched === false && exceptionable === true)
            throw new TypeGuardError({
                method: "TSON.assertEquals",
                ...closure(),
            });
        return matched;
    }
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
    halt("equals");
}

/**
 * @internal
 */
export namespace equals {
    export const is_uuid = $is_uuid;
    export const is_email = $is_email;
    export const is_url = $is_url;
    export const is_ipv4 = $is_ipv4;
    export const is_ipv6 = $is_ipv6;
    export const join = $join;
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
    halt("validateEquals");
}

/**
 * @internal
 */
export namespace validateEquals {
    export const is_uuid = $is_uuid;
    export const is_email = $is_email;
    export const is_url = $is_url;
    export const is_ipv4 = $is_ipv4;
    export const is_ipv6 = $is_ipv6;
    export const join = $join;

    export const report = validate.report;

    // FOR LEGACY FUNCTIONS
    export const predicate =
        (res: IValidation) =>
        (
            matched: boolean,
            exceptionable: boolean,
            closure: () => IValidation.IError,
        ) => {
            // CHECK FAILURE
            if (matched === false && exceptionable === true)
                (() => {
                    res.success &&= false;
                    const errorList = (res as IValidation.IFailure).errors;

                    // TRACE ERROR
                    const error = closure();
                    if (errorList.length) {
                        const last = errorList[errorList.length - 1]!.path;
                        if (
                            last.length >= error.path.length &&
                            last.substring(0, error.path.length) === error.path
                        )
                            return;
                    }
                    errorList.push(error);
                    return;
                })();
            return matched;
        };
}

/* -----------------------------------------------------------
    PROTOCOL BUFFER FUNCTIONS
----------------------------------------------------------- */
export function message(): never;
export function message<T>(): string;

export function message(): string {
    halt("message");
}

/* -----------------------------------------------------------
    STRINGIFY FUNCTIONS
----------------------------------------------------------- */
/**
 * 5x faster `JSON.stringify()` function.
 *
 * Converts an input value to a JSON (JavaScript Object Notation) string, about 5x faster
 * than the native `JSON.stringify()` function. The 5x faster principle is because
 * it writes an optimized JSON conversion plan, only for the type `T`.
 *
 * For reference, this `TSON.stringify()` does not validate the input value type. It
 * just believes that the input value is following the type `T`. Therefore, if you
 * can't ensure the input value type, it would be better to call {@link assertStringify}
 * function instead.
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

/**
 * @internal
 */
export namespace stringify {
    export const number = $number;
    export const string = $string;
    export const tail = $tail;

    export function throws(
        props: Pick<TypeGuardError.IProps, "expected" | "value">,
    ): void {
        throw new TypeGuardError({
            ...props,
            method: "TSON.stringify",
        });
    }
}

/**
 * 3x faster `JSON.stringify()` function with type assertion.
 *
 * `TSON.assertStringify()` is a combination function of {@link assert} and
 * {@link stringify}. Therefore, it converts an input value to JSON (JavaScript Object
 * Notation) string, with type assertion.
 *
 * In such reason, when `input` value is not matched with the type `T`, it throws an
 * {@link TypeGuardError}. Otherwise, there's no problem on the `input` value, JSON
 * string would be returned.
 *
 * For reference, with type assertion, it is even 3x times faster than the native
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
 * @internal
 */
export function assertStringify(): string {
    halt("assertStringify");
}

/**
 * @internal
 */
export namespace assertStringify {
    export const is_uuid = $is_uuid;
    export const is_email = $is_email;
    export const is_url = $is_url;
    export const is_ipv4 = $is_ipv4;
    export const is_ipv6 = $is_ipv6;

    export const number = $number;
    export const string = $string;
    export const tail = $tail;

    export const join = $join;
    export const guard = $guard("TSON.assertStringify");
    export const every = $every;
    export const throws = () => {};

    // FOR LEGACY FUNCTIONS
    export function predicate(
        matched: boolean,
        exceptionable: boolean,
        closure: () => Omit<TypeGuardError.IProps, "method">,
    ): boolean {
        if (matched === false && exceptionable === true)
            throw new TypeGuardError({
                method: "TSON.assertStringify",
                ...closure(),
            });
        return matched;
    }
}

/**
 * 4x faster `JSON.isStringify()` function with type checking.
 *
 * `TSON.isStringify()` is a combination function of {@link is} and
 * {@link stringify}. Therefore, it converts an input value to JSON
 * (JavaScript Object Notation) string, with type checking.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * `null` value. Otherwise, there's no problem on the `input` value, JSON string would
 * be returned.
 *
 * For reference, with type checking, it is even 4x times faster than the native
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
 * @internal
 */
export function isStringify<T>(): string | null {
    halt("isStringify");
}

/**
 * @internal
 */
export namespace isStringify {
    export const is_uuid = $is_uuid;
    export const is_email = $is_email;
    export const is_url = $is_url;
    export const is_ipv4 = $is_ipv4;
    export const is_ipv6 = $is_ipv6;

    export const number = $number;
    export const string = $string;
    export const tail = $tail;

    export const throws = () => {};
}

/* -----------------------------------------------------------
    CLONE FUNCTIONS
----------------------------------------------------------- */
/**
 * Clone a data.
 *
 * Clones an instance following type `T`. If the target *input* value or its member
 * variable contains a class instance that is having a `toJSON()` method, its return
 * value would be cloned.
 *
 * For reference, this `TSON.clone()` function does not validate the input value type.
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
export function clone<T>(): Primitive<T> {
    halt("clone");
}

/**
 * @internal
 */
export namespace clone {
    export const number = $number;
    export const string = $string;
    export const tail = $tail;

    export function throws(
        props: Pick<TypeGuardError.IProps, "expected" | "value">,
    ): void {
        throw new TypeGuardError({
            ...props,
            method: "TSON.clone",
        });
    }
}

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
 * @internal
 */
export function isClone<T>(): Primitive<T> | null {
    halt("isClone");
}

/**
 * @internal
 */
export namespace isClone {
    export const is_uuid = $is_uuid;
    export const is_email = $is_email;
    export const is_url = $is_url;
    export const is_ipv4 = $is_ipv4;
    export const is_ipv6 = $is_ipv6;

    export const number = $number;
    export const string = $string;
    export const tail = $tail;

    export const throws = () => {};
}

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
 * @internal
 */
export function assertClone<T>(): Primitive<T> {
    halt("assertClone");
}

/**
 * @internal
 */
export namespace assertClone {
    export const is_uuid = $is_uuid;
    export const is_email = $is_email;
    export const is_url = $is_url;
    export const is_ipv4 = $is_ipv4;
    export const is_ipv6 = $is_ipv6;

    export const number = $number;
    export const string = $string;
    export const tail = $tail;

    export const join = $join;
    export const guard = $guard("TSON.assertClone");
    export const every = $every;
    export const throws = () => {};
}

/* -----------------------------------------------------------
    MISC
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
 * Also, `TSON.application()` has additional generic arguments, *Purpose*.
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
export function application(): never;

/**
 * JSON Schema Application.
 *
 * Creates a JSON schema application which contains both main JSON schemas and components.
 * Note that, all of the object types are stored in the {@link IJsonApplication.components}
 * property for the `$ref` referencing.
 *
 * Also, `TSON.application()` has additional generic arguments, *Purpose*.
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

/* ===========================================================
    FACTORY FUNCTIONS
        - BASIC VALIDATORS
        - STRICT VALIDATORS
        - STRINGIFY FUNCTIONS
        - CLONE FUNCTIONS
        - MISC
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
export function createValidateEquals<T>(): (input: unknown) => IValidation;

/**
 * @internal
 */
export function createValidateEquals(): (input: unknown) => IValidation {
    halt("createValidateEquals");
}

Object.assign(createValidateEquals, validateEquals);

/* -----------------------------------------------------------
    STRINGIFY FUNCTIONS
----------------------------------------------------------- */
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
export function createAssertStringify<T>(): (input: T) => string;

/**
 * @internal
 */
export function createAssertStringify<T>(): (input: T) => string {
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
export function createIsStringify<T>(): (input: T) => string | null;

/**
 * @internal
 */
export function createIsStringify<T>(): (input: T) => string | null {
    halt("createIsStringify");
}

Object.assign(createIsStringify, isStringify);

/* -----------------------------------------------------------
    CLONE FUNCTIONS
----------------------------------------------------------- */
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
 * Creates a reusable {@link clone} function.
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
export function createClone<T>(): (input: T) => Primitive<T> {
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
 * Creates a reusable {@link assertClone} function.
 *
 * @template T Type of the input value
 * @returns A reusable `assertClone` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertClone<T>(): (input: T) => Primitive<T>;

/**
 * @internal
 */
export function createAssertClone<T>(): (input: T) => Primitive<T> {
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
 * Creates a reusable {@link isClone} function.
 *
 * @template T Type of the input value
 * @returns A reusable `isClone` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createIsClone<T>(): (input: T) => Primitive<T> | null;

/**
 * @internal
 */
export function createIsClone<T>(): (input: T) => Primitive<T> | null {
    halt("createIsClone");
}

Object.assign(createIsClone, isClone);

/* -----------------------------------------------------------
    MISC
----------------------------------------------------------- */
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
 * 2x faster constant object creator.
 *
 * You know what? `JSON.parse()` is faster than literal object construction, when the
 * object would be constructed only one time.
 *
 * - [Faster apps with JSON.parse (Chrome Dev Summit 2019)](https://www.youtube.com/watch?v=ff4fgQxPaO0)
 * - [The cost of parsing JSON](https://v8.dev/blog/cost-of-javascript-2019#json)
 *
 * `TSON.createObject()` is a transformer function which converts a literal object construction
 * to a `JSON.parse()` function call expression with JSON string argument. Therefore, if
 * you construct a literal object via this `TSON.createObject()`, you can get benefit from
 * both type safe and performance tuning at the same time.
 *
 * @template T Type of the input value
 * @param input A value to be converted
 * @return Same with the parametric value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createObject<T>(input: T): T;

/**
 * @internal
 */
export function createObject(): never {
    halt("createObject");
}

/**
 * @internal
 */
function halt(name: string): never {
    throw new Error(
        `Error on TSON.${name}(): no transform has been configured. Configure the "tsconfig.json" file following the [README.md#setup](https://github.com/samchon/typescript-json#setup)`,
    );
}
