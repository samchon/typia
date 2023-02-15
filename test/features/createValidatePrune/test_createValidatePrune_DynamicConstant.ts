import typia from "typia";

import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_createValidatePrune_DynamicConstant = _test_validatePrune(
    "DynamicConstant",
    DynamicConstant.generate,
    typia.createValidatePrune<DynamicConstant>(),
    DynamicConstant.SPOILERS,
);
