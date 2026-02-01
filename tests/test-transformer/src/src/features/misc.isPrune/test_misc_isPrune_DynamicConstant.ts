import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_misc_isPrune_DynamicConstant = (): void => _test_misc_isPrune(
    "DynamicConstant",
)<DynamicConstant>(
    DynamicConstant
)((input) => typia.misc.isPrune<DynamicConstant>(input));
