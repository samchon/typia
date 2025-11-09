import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_ConstantEnumeration = (): void => _test_misc_assertPrune(CustomGuardError)(
    "ConstantEnumeration",
)<ConstantEnumeration>(
    ConstantEnumeration
)(typia.misc.createAssertPrune<ConstantEnumeration>((p) => new CustomGuardError(p)));
