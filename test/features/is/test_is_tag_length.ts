import TSON from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_is } from "./_test_is";

export const test_is_tag_length = _test_is(
    "length tag",
    TagLength.generate,
    (input) => TSON.is(input),
    [
        (input) => (input[0].fixed = "123456"),
        (input) => (input[1].greater = "123"),
        (input) => (input[2].greater_equal = "12"),
        (input) => (input[3].less = "1234567"),
        (input) => (input[4].less_equal = "12345678"),
        (input) => (input[5].greater_less = "123"),
        (input) => (input[6].greater_less = "1234567"),
        (input) => (input[7].greater_equal_less = "12"),
        (input) => (input[8].greater_equal_less = "1234567"),
        (input) => (input[9].greater_less_equal = "123"),
        (input) => (input[10].greater_less_equal = "12345678"),
        (input) => (input[11].greater_equal_less_equal = "12"),
        (input) => (input[12].greater_equal_less_equal = "12345678"),
        (input) => (input[13].minimum = "12"),
        (input) => (input[14].maximum = "12345678"),
        (input) => (input[15].minimum_and_maximum = "12"),
        (input) => (input[15].minimum_and_maximum = "12345678"),
    ],
);
