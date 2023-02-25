import typia from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_TagStep = _test_validatePrune(
    "TagStep",
    TagStep.generate,
    (input) => typia.validatePrune(input),
    TagStep.SPOILERS,
);
