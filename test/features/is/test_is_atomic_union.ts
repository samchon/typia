import TSON from "../../../src";

export function test_is_atomic_union(): void {
    const test = (expected: boolean, closure: () => Union) => {
        const result: boolean = TSON.is(closure());
        if (result !== expected)
            throw new Error(
                "Bug on TSON.is(): failed to understand the atomic union type.",
            );
    };

    // EXACT
    test(true, () => true);
    test(true, () => false);
    test(true, () => 1);
    test(true, () => "hello");

    // WRONG
    test(false, () => null!);
    test(false, () => undefined!);
    test(false, () => [] as any);
    test(false, () => ({} as any));
}

type Union = string | number | boolean;
