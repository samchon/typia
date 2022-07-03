import TSON from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_assert } from "./_test_assert";

export const test_assert_array_matrix = _test_assert(
    "array matrix",
    ArrayMatrix.generate,
    (input) => TSON.assertType(input),
    [
        (input) => {
            input[0][0][0] = "number" as any;
            return "$input[0][0][0]";
        },
        (input) => {
            input[0][0] = "number[]" as any;
            return "$input[0][0]";
        },
        (input) => {
            input[0][0] = { length: 0 } as any;
            return "$input[0][0]";
        },
    ],
);
