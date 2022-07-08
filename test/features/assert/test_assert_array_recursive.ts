import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_assert } from "./_test_assert";

export const test_assert_array_recursive = _test_assert(
    "recursive array",
    ArrayRecursive.generate,
    (input) => TSON.assertType(input),
    [
        (input) => {
            input.id = null!;
            return "$input.id";
        },
        (input) => {
            input.code = 3 as any;
            return "$input.code";
        },
        (input) => {
            input.sequence = "number" as any;
            return "$input.sequence";
        },
        (input) => {
            input.created_at = [] as any;
            return "$input.created_at.time";
        },
        (input) => {
            input.children[0].children[0].sequence = "number" as any;
            return "$input.children[0].children[0].sequence";
        },
    ],
);
