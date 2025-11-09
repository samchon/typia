import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_ConstantAtomicUnion = (): void => _test_assertGuardEquals(TypeGuardError)(
    "ConstantAtomicUnion",
)<ConstantAtomicUnion>(
    ConstantAtomicUnion
)((input) => typia.assertGuardEquals<ConstantAtomicUnion>(input));
