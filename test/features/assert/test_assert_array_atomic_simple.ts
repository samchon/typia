import TSON from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_assert } from "./_test_assert";

export const test_assert_array_atomic_simple = _test_assert(
    "atomic array",
    ArrayAtomicSimple.generate,
    (input) => TSON.assertType(input),
    [
        (input) => {
            input[0]![0]! = "boolean" as any;
            return "$input[0][0]";
        },
        (input) => {
            input[1]![0]! = "number" as any;
            return "$input[1][0]";
        },
        (input) => {
            input[2]![0]! = false as any;
            return "$input[2][0]";
        },
    ],
);
