import TSON from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_is } from "./_test_is";

export const test_is_tag_step = _test_is(
    "step tag",
    TagStep.generate,
    (input) => TSON.is(input),
    [
        (input) => (input[0].exclusiveMinimum = 3),
        (input) => (input[1].exclusiveMinimum = 4),
        (input) => (input[2].minimum = 2),
        (input) => (input[3].minimum = 4),
        (input) => (input[4].range = 0),
        (input) => (input[5].range = 100),
        (input) => (input[6].range = 4),
        (input) => (input[7].multipleOf = 4),
    ],
);
