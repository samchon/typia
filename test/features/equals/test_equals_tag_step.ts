import TSON from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_tag_step = _test_equals(
    "step tag",
    TagStep.generate,
    (input) => TSON.equals(input),
);
