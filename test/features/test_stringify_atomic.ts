import TSON from "../../src";

export function test_stringify_atomic(): void
{
    const number = TSON.stringify<number|null>(3);
    const union_string = TSON.stringify<string|number>("hello");
    const union_number = TSON.stringify<string|number>(4);
    const nullable = TSON.stringify<null>(null);

    if (number !== "3" 
        || union_string !== `"hello"` 
        || union_number !== "4" 
        || nullable !== "null")
        throw new Error("Bug on typescript-json.stringify(): wrong string conversion.");
}