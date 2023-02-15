import typia from "typia";

import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_DynamicConstant = _test_validatePrune(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) => typia.validatePrune(input),
    DynamicConstant.SPOILERS,
);
