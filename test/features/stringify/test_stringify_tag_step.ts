import TSON from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_tag_step = _test_stringify(
    "step tag",
    TagStep.generate,
    (input) => TSON.stringify(input),
);
