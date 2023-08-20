import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TagStep } from "../../structures/TagStep";

export const test_validatePrune_TagStep = _test_validatePrune(
    "TagStep",
    TagStep.generate,
    (input) => typia.validatePrune<TagStep>(input),
    TagStep.SPOILERS,
);
