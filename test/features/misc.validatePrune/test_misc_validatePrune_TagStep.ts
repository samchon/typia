import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TagStep } from "../../structures/TagStep";

export const test_misc_validatePrune_TagStep = _test_misc_validatePrune(
    "TagStep",
    TagStep.generate,
    (input) => typia.misc.validatePrune(input),
    TagStep.SPOILERS,
);
