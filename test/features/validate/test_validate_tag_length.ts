import TSON from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_validate } from "./_test_validate";

export const test_validate_tag_length = _test_validate(
    "length tag",
    TagLength.generate,
    (input) => TSON.validate(input),
    [
        (input) => {
            input[0].fixed = "123456";
            return ["$input[0].fixed"];
        },
        (input) => {
            input[1].greater = "123";
            return ["$input[1].greater"];
        },
        (input) => {
            input[2].greater_equal = "12";
            return ["$input[2].greater_equal"];
        },
        (input) => {
            input[3].less = "1234567";
            return ["$input[3].less"];
        },
        (input) => {
            input[4].less_equal = "12345678";
            return ["$input[4].less_equal"];
        },
        (input) => {
            input[5].greater_less = "123";
            return ["$input[5].greater_less"];
        },
        (input) => {
            input[6].greater_less = "1234567";
            return ["$input[6].greater_less"];
        },
        (input) => {
            input[7].greater_equal_less = "12";
            return ["$input[7].greater_equal_less"];
        },
        (input) => {
            input[8].greater_equal_less = "1234567";
            return ["$input[8].greater_equal_less"];
        },
        (input) => {
            input[9].greater_less_equal = "123";
            return ["$input[9].greater_less_equal"];
        },
        (input) => {
            input[10].greater_less_equal = "12345678";
            return ["$input[10].greater_less_equal"];
        },
        (input) => {
            input[11].greater_equal_less_equal = "12";
            return ["$input[11].greater_equal_less_equal"];
        },
        (input) => {
            input[12].greater_equal_less_equal = "12345678";
            return ["$input[12].greater_equal_less_equal"];
        },
    ],
);
