import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_misc_isPrune_DynamicEnumeration = (): void => _test_misc_isPrune(
    "DynamicEnumeration",
)<DynamicEnumeration>(
    DynamicEnumeration
)((input) => typia.misc.isPrune<DynamicEnumeration>(input));
