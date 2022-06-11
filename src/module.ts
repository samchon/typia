import { IJsonApplication } from "./structures/IJsonApplication";

export * from "./structures/IJsonApplication";
export * from "./structures/IJsonComponents";
export * from "./structures/IJsonSchema";

/**
 * Asserts a value type in the runtime.
 *
 * Asserts a parametric value type and throws a {@link TypeGuardError} with detailed
 * reason, if the parametric value is not following the type `T`. Otherwise, the
 * value is following the type `T`, just input parameter would be returned.
 *
 * If what you want is not asserting but just knowing whether the parametric value is
 * following the type `T` or not, you can choose the {@link is} function instead.
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
 * @internal
 */
export function assert(): never {
    halt("assert");
}

/**
 * Tests a value type in the runtime.
 *
 * Tests a parametric value type and returns whether it's following the type `T` or not.
 *
 * If what you want is not just knowing whether the parametric value is following the
 * type `T` or not, but throwing an exception with detailed reason, you can choose
 * {@link is} function instead.
 *
 * @template T Type of the input value
 * @param input A value to be tested
 * @returns Whether the parametric value is following the type `T` or not
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function is<T>(input: T): boolean;

/**
 * @internal
 */
export function is(): never {
    halt("is");
}

/**
 * 10x faster `JSON.stringify()` function.
 *
 * Converts a value to a JSON (JavaSript Object Noation) string.
 *
 * For reference, this function `TSON.stringify()` is about 10x times faster than the
 * native `JSON.stringify()` function, by preparing an optimized JSON string conversion
 * plan, only for the type `T`.
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
 * 1.5 ~ 2x faster constant object creator.
 *
 * You know what? `JSON.parse()` is faster than literal object construction, when the
 * object would be constructed only one time.
 *
 * - [Faster apps with JSON.parse (Chrome Dev Summit 2019)](https://www.youtube.com/watch?v=ff4fgQxPaO0)
 * - [The cost of parsing JSON](https://v8.dev/blog/cost-of-javascript-2019#json)
 *
 * `TSON.create()` is a transformer function which converts a literal object construction
 * to a `JSON.parse()` function call expression with JSON string argument. Therefore, if
 * you construct a literal object via this `TSON.create()`, you can get benefit from both
 * type safe and performance tuning at the same time.
 *
 * @template T Type of the input value
 * @param input A value to be converted
 * @return Same with the parametric value
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function create<T>(input: T): T;

/**
 * @internal
 */
export function create(): never {
    halt("create");
}

/**
 * > You must configure the generic argument `T`.
 *
 * JSON Schema Application.
 *
 * Creates a JSON schema application which contains both main JSON schema and components.
 * Note that, all of the object types are stored in the {@link IJsonApplication.components}
 * property for the `$ref` referencing.
 *
 * @template T Target type
 * @return JSON schema application
 * @author Jeongho Nam - https://github.com/samchon
 */
export function application(): never;

/**
 * JSON Schema Application.
 *
 * Creates a JSON schema application which contains both main JSON schema and components.
 * Note that, all of the object types are stored in the {@link IJsonApplication.components}
 * property for the `$ref` referencing.
 *
 * @template T Target type
 * @return JSON schema application
 * @author Jeongho Nam - https://github.com/samchon
 */
export function application<T>(): IJsonApplication;

/**
 * @internal
 */
export function application(): never {
    halt("application");
}

/**
 * @internal
 */
function halt(name: string): never {
    throw new Error(
        `Error on TSON.${name}(): no transform has been configured. Configure the "tsconfig.json" file following the [README.md#setup](https://github.com/samchon/typescript-json#setup)`,
    );
}
