import TSON from "../../../src";

export function test_stringify_atomic_union(): void {
    const test = (value: string | number | boolean | null) => {
        const json: string = TSON.stringify(value);
        const expected: string = JSON.stringify(value);

        if (json !== expected)
            throw new Error(
                "Bug on TSON.stringify(): failed to understand the atomic union type.",
            );
    };

    test(true);
    test(3);
    test("hello");
    test(null);
}
