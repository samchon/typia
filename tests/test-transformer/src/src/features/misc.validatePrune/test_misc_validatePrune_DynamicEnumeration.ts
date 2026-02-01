import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_misc_validatePrune_DynamicEnumeration = (): void => _test_misc_validatePrune(
    "DynamicEnumeration",
)<DynamicEnumeration>(
    DynamicEnumeration
)((input) => typia.misc.validatePrune<DynamicEnumeration>(input));
