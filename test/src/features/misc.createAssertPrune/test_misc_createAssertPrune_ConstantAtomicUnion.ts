import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

import { TypeGuardError } from "typia";

export const test_misc_createAssertPrune_ConstantAtomicUnion = (): void => _test_misc_assertPrune(TypeGuardError)(
    "ConstantAtomicUnion",
)<ConstantAtomicUnion>(
    ConstantAtomicUnion
)(typia.misc.createAssertPrune<ConstantAtomicUnion>());
