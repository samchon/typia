import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

import { TypeGuardError } from "typia";

export const test_misc_createAssertClone_ConstantAtomicUnion = (): void => _test_misc_assertClone(TypeGuardError)(
    "ConstantAtomicUnion",
)<ConstantAtomicUnion>(
    ConstantAtomicUnion
)(typia.misc.createAssertClone<ConstantAtomicUnion>());
