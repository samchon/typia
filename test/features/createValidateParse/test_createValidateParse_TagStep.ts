import TSON from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_TagStep = _test_validateParse(
    "TagStep",
    TagStep.generate,
    TSON.createValidateParse<TagStep>(),
    TagStep.SPOILERS,
);
