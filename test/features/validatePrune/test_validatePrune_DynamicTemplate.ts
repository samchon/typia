import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_validatePrune_DynamicTemplate = _test_validatePrune(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input) => typia.validatePrune(input),
    DynamicTemplate.SPOILERS,
);
