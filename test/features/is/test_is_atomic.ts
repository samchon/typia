import TSON from "../../../src";

export function test_is_atomic(): void {
    const test = (expected: boolean, closure: () => boolean) => {
        if (closure() !== expected)
            throw new Error(
                "Bug on TSON.is(): failed to understand the atomic type.",
            );
    };

    // EXACT
    test(true, () => TSON.is<number>(3));
    test(true, () => TSON.is<string>("something"));
    test(true, () => TSON.is<boolean>(true));
    test(true, () => TSON.is<boolean>(false));

    //----
    // WRONG
    //----
    // NUMBER
    test(false, () => TSON.is<number>("string" as any));
    test(false, () => TSON.is<number>(false as any));
    test(false, () => TSON.is<number>({} as any));
    test(false, () => TSON.is<number>([] as any));

    // STRING
    test(false, () => TSON.is<string>(3 as any));
    test(false, () => TSON.is<string>(false as any));
    test(false, () => TSON.is<string>({} as any));
    test(false, () => TSON.is<string>([] as any));

    // BOOLEAN
    test(false, () => TSON.is<boolean>(3 as any));
    test(false, () => TSON.is<boolean>("string" as any));
    test(false, () => TSON.is<boolean>({} as any));
    test(false, () => TSON.is<boolean>([] as any));
}
