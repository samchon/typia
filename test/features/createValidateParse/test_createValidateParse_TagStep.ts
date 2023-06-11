import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { TagStep } from "../../structures/TagStep";

export const test_createValidateParse_TagStep = _test_validateParse(
    "TagStep",
    TagStep.generate,
    typia.createValidateParse<TagStep>(),
    TagStep.SPOILERS,
);
