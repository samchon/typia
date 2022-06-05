import TSON from "../../src";

export function test_stringify_tuple_atomic(): void {
    const tuple: Tuple = ["hello", "world", 2022];
    const json: string = TSON.stringify<Tuple>(tuple);
    const expected: string = JSON.stringify(tuple);

    if (json !== expected)
        throw new Error(
            "Bug on TSON.stringify(): failed to understand the atomic tuple type.",
        );
}

type Tuple = [string, string, number];
