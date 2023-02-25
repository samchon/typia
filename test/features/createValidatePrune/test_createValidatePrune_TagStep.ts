import typia from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_createValidatePrune_TagStep = _test_validatePrune(
    "TagStep",
    TagStep.generate,
    typia.createValidatePrune<TagStep>(),
    TagStep.SPOILERS,
);
