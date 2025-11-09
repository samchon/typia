import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_misc_validatePrune_ConstantConstEnumeration = (): void => _test_misc_validatePrune(
    "ConstantConstEnumeration",
)<ConstantConstEnumeration>(
    ConstantConstEnumeration
)((input) => typia.misc.validatePrune<ConstantConstEnumeration>(input));
