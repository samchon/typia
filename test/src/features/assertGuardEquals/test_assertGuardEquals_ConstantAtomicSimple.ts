import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_ConstantAtomicSimple = (): void => _test_assertGuardEquals(TypeGuardError)(
    "ConstantAtomicSimple",
)<ConstantAtomicSimple>(
    ConstantAtomicSimple
)((input) => typia.assertGuardEquals<ConstantAtomicSimple>(input));
