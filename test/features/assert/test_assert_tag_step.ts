import TSON from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_assert } from "./_test_assert";

export const test_assert_tag_step = _test_assert(
    "step tag",
    TagStep.generate,
    (input) => TSON.assertType(input),
    [
        (input) => {
            input[0].exclusiveMinimum = 3;
            return "$input[0].exclusiveMinimum";
        },
        (input) => {
            input[1].exclusiveMinimum = 4;
            return "$input[1].exclusiveMinimum";
        },
        (input) => {
            input[2].minimum = 2;
            return "$input[2].minimum";
        },
        (input) => {
            input[3].minimum = 4;
            return "$input[3].minimum";
        },
        (input) => {
            input[4].range = 0;
            return "$input[4].range";
        },
        (input) => {
            input[5].range = 100;
            return "$input[5].range";
        },
        (input) => {
            input[6].range = 4;
            return "$input[6].range";
        },
        (input) => {
            input[7].multipleOf = 4;
            return "$input[7].multipleOf";
        },
    ],
);
