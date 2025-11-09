import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_ConstantAtomicUnion = (): void => _test_assertGuard(TypeGuardError)(
    "ConstantAtomicUnion",
)<ConstantAtomicUnion>(
    ConstantAtomicUnion
)(typia.createAssertGuard<ConstantAtomicUnion>());
