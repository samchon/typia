import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_is } from "./_test_is";

export const test_is_tag_range = _test_is(
    "range tag",
    TagRange.generate,
    (input) => TSON.is(input),
    [
        (input) => (input[0].minimum = 2),
        (input) => (input[1].maximum = 8),
        (input) => (input[2].minimum_and_maximum = 2),
        (input) => (input[3].minimum_and_maximum = 8),
        (input) => (input[4].greater = 3),
        (input) => (input[5].greater_equal = 2),
        (input) => (input[6].less = 7),
        (input) => (input[7].less_equal = 8),
        (input) => (input[8].greater_less = 3),
        (input) => (input[9].greater_less = 7),
        (input) => (input[10].greater_equal_less = 2),
        (input) => (input[11].greater_equal_less = 7),
        (input) => (input[12].greater_less_equal = 3),
        (input) => (input[13].greater_less_equal = 8),
        (input) => (input[14].greater_equal_less_equal = 2),
        (input) => (input[15].greater_equal_less_equal = 8),
    ],
);
