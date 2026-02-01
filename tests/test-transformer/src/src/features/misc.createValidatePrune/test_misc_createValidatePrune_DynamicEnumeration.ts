import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_misc_createValidatePrune_DynamicEnumeration = (): void => _test_misc_validatePrune(
    "DynamicEnumeration",
)<DynamicEnumeration>(
    DynamicEnumeration
)(typia.misc.createValidatePrune<DynamicEnumeration>());
