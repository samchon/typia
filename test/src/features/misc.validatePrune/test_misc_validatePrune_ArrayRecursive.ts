import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_misc_validatePrune_ArrayRecursive = (): void => _test_misc_validatePrune(
    "ArrayRecursive",
)<ArrayRecursive>(
    ArrayRecursive
)((input) => typia.misc.validatePrune<ArrayRecursive>(input));
