import TSON from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_is } from "./_test_is";

export const test_is_array_union = _test_is(
    "union arrray",
    ArrayUnion.generate,
    (input) => TSON.is(input),
    [
        (input) => (input[0] = [false, true, 3] as boolean[]),
        (input) => (input[1] = [1, 2, false] as number[]),
        (input) => (input[2] = ["a", "b", 3] as string[]),
        (input) => (input[0] = [[]] as any),
        (input) => (input[1] = [null!]),
    ],
);
