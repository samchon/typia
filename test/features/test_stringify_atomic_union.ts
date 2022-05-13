import TSON from "../../src";

export function test_stringify_atomic_union(): void
{
    const stringify = TSON.createStringifier<string|number|boolean|null>();
    const test = (value: string|number|boolean|null) =>
    {
        const json: string = stringify(value);
        const expected: string = JSON.stringify(value)
        
        if (json !== expected)
            throw new Error("Bug on TSON.createStringifier(): failed to understand the atomic union type.");
    };
    
    test(true);
    test(3);
    test("hello");
    test(null);
}