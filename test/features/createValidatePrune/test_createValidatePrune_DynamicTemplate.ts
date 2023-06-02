import typia from "../../../src";

import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_validatePrune } from "../../internal/_test_validatePrune";

export const test_createValidatePrune_DynamicTemplate = _test_validatePrune(
    "DynamicTemplate",
    DynamicTemplate.generate,
    typia.createValidatePrune<DynamicTemplate>(),
    DynamicTemplate.SPOILERS,
);
