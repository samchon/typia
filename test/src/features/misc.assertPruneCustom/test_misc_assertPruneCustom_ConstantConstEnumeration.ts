import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_ConstantConstEnumeration = (): void => _test_misc_assertPrune(CustomGuardError)(
    "ConstantConstEnumeration",
)<ConstantConstEnumeration>(
    ConstantConstEnumeration
)((input) => typia.misc.assertPrune<ConstantConstEnumeration>(input, (p) => new CustomGuardError(p)));
