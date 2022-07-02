import TSON from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_is } from "./_test_is";

export const test_is_array_matrix = _test_is(
    "array matrix",
    ArrayMatrix.generate,
    (input) => TSON.is(input),
    [
        (input) => (input[0][0][0] = "string" as any as number),
        (input) => (input[0][0] = "not-array" as any as number[]),
        (input) => (input[0][0] = {} as any as number[]),
    ],
);
