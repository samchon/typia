import TSON from "../../src";

export function test_stringify_atomic_alias(): void
{
    test(input => TSON.stringify<BooleanAlias>(input), true);
    test(input => TSON.stringify<NumberAlias>(input), 3);
    test(input => TSON.stringify<StringAlias>(input), "hello");
    test(input => TSON.stringify<NullAlias>(input), null);
}

function test<T>(stringify: (input: T) => string, input: T)
{
    const json: string = stringify(input);
    const expected: string = JSON.stringify(input);

    if (json !== expected)
        throw new Error("Bug on TSON.stringify(): failed to understand the atomic type.");
}

type BooleanAlias = boolean;
type NumberAlias = number;
type StringAlias = string;
type NullAlias = null;