import TSON from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_is } from "./_test_is";

export const test_is_array_matrix = _test_is(
    "array matrix",
    ArrayMatrix.generate,
    (input) => TSON.is(input),
    [
        (input) => (input[0][0][0] = "number" as any),
        (input) => (input[0][0] = "number[]" as any),
        (input) => (input[0][0] = { length: 0 } as any),
    ],
);
