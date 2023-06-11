import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TagStep } from "../../structures/TagStep";

export const test_createValidatePrune_TagStep = _test_validatePrune(
    "TagStep",
    TagStep.generate,
    typia.createValidatePrune<TagStep>(),
    TagStep.SPOILERS,
);
