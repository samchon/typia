import TSON from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_TagStep = _test_assertParse(
    "TagStep",
    TagStep.generate,
    (input) => TSON.assertParse<TagStep>(input),
    TagStep.SPOILERS,
);
