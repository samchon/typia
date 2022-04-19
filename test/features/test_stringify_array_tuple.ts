import TSON from "../../src";

export function test_stringify_array_tuple(): void
{
    const tuple: [string, string, number] = ["hello", "world", 2022];
    const json: string = TSON.stringify<[string, string, number]>(tuple);
    const expected: string = JSON.stringify(tuple);

    if (json !== expected)
        throw new Error("Bug on typescript-json.stringify(): failed to understand the array tuple.");
}