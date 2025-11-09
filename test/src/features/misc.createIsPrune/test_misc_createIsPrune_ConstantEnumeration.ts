import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_misc_createIsPrune_ConstantEnumeration = (): void => _test_misc_isPrune(
    "ConstantEnumeration",
)<ConstantEnumeration>(
    ConstantEnumeration
)(typia.misc.createIsPrune<ConstantEnumeration>());
