import TSON from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_assert } from "./_test_assert";

export const test_assert_tag_type = _test_assert(
    "type tag",
    TagType.generate,
    (input) => TSON.assertType(input),
    [
        (input) => {
            input[0].int = 0.1;
            return "$input[0].int";
        },
        (input) => {
            input[1].uint = -1;
            return "$input[1].uint";
        },
        (input) => {
            input[2].uint = 0.5;
            return "$input[2].uint";
        },
        (input) => {
            input[3].uint = -0.5;
            return "$input[3].uint";
        },
    ],
);
