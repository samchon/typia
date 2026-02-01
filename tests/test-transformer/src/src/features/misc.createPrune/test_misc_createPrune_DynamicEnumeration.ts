import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_misc_createPrune_DynamicEnumeration = (): void => _test_misc_prune(
    "DynamicEnumeration",
)<DynamicEnumeration>(
    DynamicEnumeration
)(typia.misc.createPrune<DynamicEnumeration>());
