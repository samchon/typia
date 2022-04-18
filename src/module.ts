import faster from "fast-json-stringify";
import { JsonMemory } from "./storages/JsonMemory";

/**
 * 2x faster `JSON.stringify()` function.
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
 * 2x faster `JSON.stringify()` function creator.
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

function halt(name: string): never
{
    throw new Error(`Error on typescript-json.${name}(): no transform has been configured. Configure the "tsconfig.json" file following the README - https://github.com/samchon/typescript-json`);
}