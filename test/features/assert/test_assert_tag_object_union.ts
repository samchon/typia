import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_assert } from "./_test_assert";

export const test_assert_tag_object_union = _test_assert(
    "object union tag",
    TagObjectUnion.generate,
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
