import crypto from "crypto";
import { v4 } from "uuid";

import { IJsonApplication } from "./structures/IJsonApplication";
import { JsonMemory } from "./storages/JsonMemory";
import { StringifyFactory } from "./factories/StringifyFactory";

export * from "./structures/IJsonApplication";
export * from "./structures/IJsonComponents";
export * from "./structures/IJsonSchema";

if (!crypto.randomUUID)
    crypto.randomUUID = () => v4();

/* -----------------------------------------------------------
    STRINGIFY
----------------------------------------------------------- */
/**
 * 2x faster `JSON.stringify()` function.
 * 
 * Converts a TypeScript value to the JSON (JavaSript Object Noation) string directly. This
 * function is two times faster than the `JSON.stringify()`, because it constructs a dedicated
 * JSON string builder only for the type `T`.
 * 
 * Also, the type `T` and JSON string builder would be stored in the global memory. Therefore, 
 * whenever you call this {@link stringify} function repeatedly with the same type `T`, the 
 * JSON string builder would be reused without reconstruction. If you don't want such global 
 * memoization, you can select the {@link createStringifier} function instead.
 * 
 * On the other hand, if you've encountered an error which starts from the 
 * "no transform has been configured" message when calling this {@link stringify} function, 
 * it means that you haven't configured the `tsconfig.json` file. Visit the 
 * https://github.com/samchon/typescript-json and configure the `tsconfig.json` file follow 
 * the [README](https://github.com/samchon/typescript-json#tsconfigjson) content.
 * 
 * @template T Type of the input value
 * @param input A TypeScript value to be converted
 * @return JSON string value
 * @author Jeongho Nam - https://github.com/samchon
 */
export function stringify<T>(input: T): string;

/**
 * @internal
 */
export function stringify<T>
    (
        input: T,
        param: [string, () => IJsonApplication]
    ): string;

/**
 * @internal
 */
export function stringify<T>
    (
        input: T, 
        param?: [string, () => IJsonApplication]
    ): string
{
    if (!param)
        halt("stringify");

    const [key, closure]: [string, () => IJsonApplication] = param;
    return JsonMemory.stringify(key, closure)(input);
}

/* -----------------------------------------------------------
    CREATE-STRINGIFIER
----------------------------------------------------------- */
/**
 * > You must configure the generic argument `T`.
 * 
 * 2x faster `JSON.stringify()` function generator.
 * 
 * Creates a function who can convert TypeScript value to the JSON (JavaSript Object Noation) 
 * string. directly. The returned function is two times faster than the native 
 * `JSON.stringify()`, because the function constructs a dedicated JSON string builder 
 * only for the type `T`.
 * 
 * Also, the returned function is always reusable until you forget the returned function
 * variable. Of course, it means that you've to manage the returned function by yourself.
 * If you feel annoying for management, you can choose {@link stringify} instead. The 
 * {@link stringify} function stores the type `T` and its JSON string builder in the
 * global memory and reused whenever the {@link stringify} function be called with the
 * same type `T`.
 * 
 * On the other hand, if you've encountered an error which starts from the 
 * "no transform has been configured" message when calling this {@link createStringifier} 
 * function, it means that you haven't configured the `tsconfig.json` file. Visit the 
 * https://github.com/samchon/typescript-json and configure the `tsconfig.json` file follow 
 * the [README](https://github.com/samchon/typescript-json#tsconfigjson) content.
 * 
 * @return 2x faster `JSON.stringify()` function.
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createStringifier(): never;

/**
 * 2x faster `JSON.stringify()` function generator.
 * 
 * Creates a function who can convert TypeScript value to the JSON (JavaSript Object Noation) 
 * string. directly. The returned function is two times faster than the native 
 * `JSON.stringify()`, because the function constructs a dedicated JSON string builder 
 * only for the type `T`.
 * 
 * Also, the returned function is always reusable until you forget the returned function
 * variable. Of course, it means that you've to manage the returned function by yourself.
 * If you feel annoying for management, you can choose {@link stringify} instead. The 
 * {@link stringify} function stores the type `T` and its JSON string builder in the
 * global memory and reused whenever the {@link stringify} function be called with the
 * same type `T`.
 * 
 * On the other hand, if you've encountered an error which starts from the 
 * "no transform has been configured" message when calling this {@link createStringifier} 
 * function, it means that you haven't configured the `tsconfig.json` file. Visit the 
 * https://github.com/samchon/typescript-json and configure the `tsconfig.json` file follow 
 * the [README](https://github.com/samchon/typescript-json#tsconfigjson) content.
 * 
 * @template T Type of the input value
 * @return 2x faster `JSON.stringify()` function.
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createStringifier<T>(): (input: T) => string;

/**
 * @internal
 */
export function createStringifier<T>
    (plan: () => IJsonApplication): (input: T) => string;

/**
 * @internal
 */
export function createStringifier<T>
    (closure?: () => IJsonApplication): (input: T) => string
{
    if (!closure)
        halt("createStringifier");
    
    const application: IJsonApplication = closure();
    return StringifyFactory.generate(application);
}

/* -----------------------------------------------------------
    CREATE-APPLICATION
----------------------------------------------------------- */
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
 * @author Samchon
 */
export function createApplication(): never;

/**
 * JSON Schema Application.
 * 
 * Creates a JSON schema application which contains both main JSON schema and components. 
 * Note that, all of the object types are stored in the {@link IJsonApplication.components} 
 * property for the `$ref` referencing.
 * 
 * @template T Target type
 * @return JSON schema application
 * @author Samchon
 */
export function createApplication<T>(): IJsonApplication;

export function createApplication(closure?: () => IJsonApplication): IJsonApplication
{
    if (!closure)
        halt("createApplication");
    return closure();
}

/**
 * @internal
 */
function halt(name: string): never
{
    throw new Error(`Error on TSON.${name}(): no transform has been configured. Configure the "tsconfig.json" file following the README - https://github.com/samchon/typescript-json`);
}