import TSON from "../../src";

export function test_stringify_array_generic_alias(): void
{
    const alias: Alias<number> = [1, 2, 3];
    const json: string = TSON.stringify<Alias<number>>(alias);
    const expected: string = JSON.stringify(alias);

    if (json !== expected)
        throw new Error("Bug on TSON.stringify(): failed to understand the generic array alias type.");
}

type Alias<T> = T[];