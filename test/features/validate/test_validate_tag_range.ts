import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_validate } from "./_test_validate";

export const test_validate_tag_range = _test_validate(
    "range tag",
    TagRange.generate,
    (input) => TSON.validate(input),
    [
        (input) => {
            input[0].minimum = 2;
            return ["$input[0].minimum"];
        },
        (input) => {
            input[1].maximum = 8;
            return ["$input[1].maximum"];
        },
        (input) => {
            input[2].minimum_and_maximum = 2;
            return ["$input[2].minimum_and_maximum"];
        },
        (input) => {
            input[3].minimum_and_maximum = 8;
            return ["$input[3].minimum_and_maximum"];
        },
        (input) => {
            input[4].greater = 3;
            return ["$input[4].greater"];
        },
        (input) => {
            input[5].greater_equal = 2;
            return ["$input[5].greater_equal"];
        },
        (input) => {
            input[6].less = 7;
            return ["$input[6].less"];
        },
        (input) => {
            input[7].less_equal = 8;
            return ["$input[7].less_equal"];
        },
        (input) => {
            input[8].greater_less = 3;
            return ["$input[8].greater_less"];
        },
        (input) => {
            input[9].greater_less = 7;
            return ["$input[9].greater_less"];
        },
        (input) => {
            input[10].greater_equal_less = 2;
            return ["$input[10].greater_equal_less"];
        },
        (input) => {
            input[11].greater_equal_less = 7;
            return ["$input[11].greater_equal_less"];
        },
        (input) => {
            input[12].greater_less_equal = 3;
            return ["$input[12].greater_less_equal"];
        },
        (input) => {
            input[13].greater_less_equal = 8;
            return ["$input[13].greater_less_equal"];
        },
        (input) => {
            input[14].greater_equal_less_equal = 2;
            return ["$input[14].greater_equal_less_equal"];
        },
        (input) => {
            input[15].greater_equal_less_equal = 8;
            return ["$input[15].greater_equal_less_equal"];
        },
    ],
);
