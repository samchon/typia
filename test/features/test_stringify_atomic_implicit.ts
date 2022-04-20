import TSON from "../../src";

export function test_stringify_atomic_implicit(): void
{
    test(input => TSON.stringify(input), true);
    test(input => TSON.stringify(input), 3);
    test(input => TSON.stringify(input), "hello");
    test(input => TSON.stringify(input), null);
}

function test<T>(stringify: (input: T) => string, input: T)
{
    const json: string = stringify(input);
    const expected: string = JSON.stringify(input);

    if (json !== expected)
        throw new Error("Bug on TSON.stringify(): failed to understand the implicit atomic type.");
}