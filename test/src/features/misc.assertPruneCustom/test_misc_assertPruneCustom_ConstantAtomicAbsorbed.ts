import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_ConstantAtomicAbsorbed = (): void => _test_misc_assertPrune(CustomGuardError)(
    "ConstantAtomicAbsorbed",
)<ConstantAtomicAbsorbed>(
    ConstantAtomicAbsorbed
)((input) => typia.misc.assertPrune<ConstantAtomicAbsorbed>(input, (p) => new CustomGuardError(p)));
