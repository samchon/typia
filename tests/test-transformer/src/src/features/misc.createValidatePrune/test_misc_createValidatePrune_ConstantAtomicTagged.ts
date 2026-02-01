import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_misc_createValidatePrune_ConstantAtomicTagged = (): void => _test_misc_validatePrune(
    "ConstantAtomicTagged",
)<ConstantAtomicTagged>(
    ConstantAtomicTagged
)(typia.misc.createValidatePrune<ConstantAtomicTagged>());
