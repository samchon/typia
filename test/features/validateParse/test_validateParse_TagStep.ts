import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { TagStep } from "../../structures/TagStep";

export const test_validateParse_TagStep = _test_validateParse(
    "TagStep",
    TagStep.generate,
    (input) => typia.validateParse<TagStep>(input),
    TagStep.SPOILERS,
);
