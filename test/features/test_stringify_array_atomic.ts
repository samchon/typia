import TSON from "../../src";

export function test_stringify_array_atomic(): void
{
    test(input => TSON.stringify<boolean[]>(input), [true, false]);
    test(input => TSON.stringify<number[]>(input), [1, 2, 3]);
    test(input => TSON.stringify<string[]>(input), ["hello", "world"]);
    test(input => TSON.stringify<null[]>(input), [null, null]);
}

function test<T>(stringify: (input: T[]) => string, input: T[])
{
    const json: string = stringify(input);
    const expected: string = JSON.stringify(input);

    if (json !== expected)
        throw new Error("Bug on typescript-json.stringify(): failed to understand the atomic array type.");
}