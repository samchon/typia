import crypto from "crypto";
import faster from "fast-json-stringify";
import { v4 } from "uuid";

import { JsonMemory } from "./storages/JsonMemory";

if (!crypto.randomUUID)
    crypto.randomUUID = () => v4();

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
        param: [string, () => [object, object]]
    ): string;

/**
 * @internal
 */
export function stringify<T>
    (
        input: T, 
        param?: [string, () => [object, object]]
    ): string
{
    if (!param)
        halt("stringify");

    const [key, closure] = param;
    if (typeof key !== "string" || typeof closure !== "function")
        throw new Error("Error on typescript-json.stringify(): the hidden parameter must only be specified by the transformer.");

    return JsonMemory.stringify(key, closure)(input);
}

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
    (
        plan: () => [object, object]
    ): (input: T) => string;

/**
 * @internal
 */
export function createStringifier<T>
    (
        plan?: () => [object, object]
    ): (input: T) => string
{
    if (!plan)
        halt("createStringifier");
    else if (typeof plan !== "function")
        throw new Error("Error on typescript-json.stringify(): the hidden parameter must only be specified by the transformer.");
    
    const [schema, storage] = plan();
    if (typeof schema !== "object" || typeof storage !== "object")
        throw new Error("Error on typescript-json.stringify(): the hidden parameter must only be specified by the transformer.");

    return faster(schema as any, { schema: storage as any });
}

/**
 * @internal
 */
function halt(name: string): never
{
    throw new Error(`Error on typescript-json.${name}(): no transform has been configured. Configure the "tsconfig.json" file following the README - https://github.com/samchon/typescript-json`);
}