import TSON from "../../../src";

export function test_is_tuple_atomic(): void {
    const test = (expected: boolean, closure: () => Tuple) => {
        const result: boolean = TSON.is(closure());
        if (result !== expected)
            throw new Error(
                "Bug on TSON.is(): failed to understand the tuple atomic type.",
            );
    };

    // EXACT
    test(true, () => [1, "something", false]);
    test(true, () => [0, "nothing", true]);

    // WRONG
    test(false, () => [null!, "anything", false]);
    test(false, () => [3, undefined!, false]);
    test(false, () => [3, "anything", {} as any]);
    test(false, () => [3, "anything", [] as any]);
}

type Tuple = [number, string, boolean];
