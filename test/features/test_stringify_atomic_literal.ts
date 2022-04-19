import TSON from "../../src";

export function test_stringify_atomic_literal()
{
    test(input => TSON.stringify<true>(input), true as const);
    test(input => TSON.stringify<1>(input), 1 as const);
    test(input => TSON.stringify<"hello">(input), "hello" as const);
    test(input => TSON.stringify<null>(input), null);
}

function test<T>(stringify: (input: T) => string, input: T)
{
    const json: string = stringify(input);
    const expected: string = JSON.stringify(input);

    if (json !== expected)
        throw new Error("Bug on typescript-json.stringify(): failed to understand the atomic type.");
}