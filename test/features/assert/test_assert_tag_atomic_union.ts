import TSON from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_assert } from "./_test_assert";

export const test_assert_tag_atomic_union = _test_assert(
    "atomic union tag",
    TagAtomicUnion.generate,
    (input) => TSON.assertType(input),
    [
        (input) => {
            input[0].value = "12";
            return "$input[0].value";
        },
        (input) => {
            input[1].value = "12345678";
            return "$input[1].value";
        },
        (input) => {
            input[2].value = 2;
            return "$input[2].value";
        },
    ],
);
