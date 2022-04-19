import TSON from "../../src";

export function test_stringify_atomic_intersection(): void
{
    const anything: any = {
        id: "any-id",
        name: "any-name",
    }
    const stringify: Function = TSON.createStringifier<boolean&number&string>();
    const json: string = stringify(anything);
    const expected: string = JSON.stringify(anything);

    if (json !== expected)
        throw new Error("Bug on TSON.createStringifier(): atomic intersection type must be broken.");
}