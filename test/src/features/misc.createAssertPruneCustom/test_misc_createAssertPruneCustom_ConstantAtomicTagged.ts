import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_ConstantAtomicTagged = (): void => _test_misc_assertPrune(CustomGuardError)(
    "ConstantAtomicTagged",
)<ConstantAtomicTagged>(
    ConstantAtomicTagged
)(typia.misc.createAssertPrune<ConstantAtomicTagged>((p) => new CustomGuardError(p)));
