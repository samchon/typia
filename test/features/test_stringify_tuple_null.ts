import TSON from "../../src";

export function test_stringify_tuple_null(): void {
    const tuple: Tuple = ["hello", "world", null, 2022];
    const json: string = TSON.stringify<Tuple>(tuple);
    const expected: string = JSON.stringify(tuple);

    if (json !== expected)
        throw new Error(
            "Bug on TSON.stringify(): failed to understand the null tuple type.",
        );
}

type Tuple = [string, string, null, number];
