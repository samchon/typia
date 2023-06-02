import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_createValidatePrune_DynamicTemplate = _test_validatePrune(
    "DynamicTemplate",
    DynamicTemplate.generate,
    typia.createValidatePrune<DynamicTemplate>(),
    DynamicTemplate.SPOILERS,
);
