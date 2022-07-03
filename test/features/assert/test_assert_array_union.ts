import TSON from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_assert } from "./_test_assert";

export const test_assert_array_union = _test_assert(
    "union arrray",
    ArrayUnion.generate,
    (input) => TSON.assertType(input),
    [
        (input) => (input[0] = [false, true, 3] as boolean[]) && true,
        (input) => (input[1] = [1, 2, false] as number[]) && true,
        (input) => (input[2] = ["a", "b", 3] as string[]) && true,
        (input) => (input[0] = [[]] as any) && true,
        (input) => (input[1] = [null!]) && true,
    ],
);
