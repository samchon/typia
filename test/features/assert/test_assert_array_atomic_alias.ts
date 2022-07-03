import TSON from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_assert } from "./_test_assert";

export const test_assert_array_atomic_alias = _test_assert(
    "atomic alias array",
    ArrayAtomicAlias.generate,
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
