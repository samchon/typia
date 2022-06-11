import TSON from "../../../src";

export function test_stringify_array_union(): void {
    const test = (input: Union) => {
        const json: string = TSON.stringify(input);
        const expected: string = JSON.stringify(input);

        if (json !== expected)
            throw new Error(
                `Bug on TSON.stringify(): failed to understand the union array type.`,
            );
    };

    test(true);
    test([1, 2, 3, 4]);
    test(["hello", "world"]);
    test([false, true, "two", 3, 4, "five"]);
}

type Union = boolean | number[] | string[] | Array<boolean | number | string>;
