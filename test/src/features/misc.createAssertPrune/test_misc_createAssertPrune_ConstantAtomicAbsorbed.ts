import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

import { TypeGuardError } from "typia";

export const test_misc_createAssertPrune_ConstantAtomicAbsorbed = (): void => _test_misc_assertPrune(TypeGuardError)(
    "ConstantAtomicAbsorbed",
)<ConstantAtomicAbsorbed>(
    ConstantAtomicAbsorbed
)(typia.misc.createAssertPrune<ConstantAtomicAbsorbed>());
