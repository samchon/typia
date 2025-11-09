import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_misc_isPrune_ConstantEnumeration = (): void => _test_misc_isPrune(
    "ConstantEnumeration",
)<ConstantEnumeration>(
    ConstantEnumeration
)((input) => typia.misc.isPrune<ConstantEnumeration>(input));
