import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_misc_validatePrune_DynamicConstant = (): void => _test_misc_validatePrune(
    "DynamicConstant",
)<DynamicConstant>(
    DynamicConstant
)((input) => typia.misc.validatePrune<DynamicConstant>(input));
