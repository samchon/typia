import TSON from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_TagStep = _test_validateParse(
    "TagStep",
    TagStep.generate,
    (input) => TSON.validateParse<TagStep>(input),
    TagStep.SPOILERS,
);
