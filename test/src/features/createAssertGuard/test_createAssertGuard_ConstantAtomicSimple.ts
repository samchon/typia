import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_ConstantAtomicSimple = _test_assertGuard(
  TypeGuardError,
)("ConstantAtomicSimple")<ConstantAtomicSimple>(ConstantAtomicSimple)(
  typia.createAssertGuard<ConstantAtomicSimple>(),
);
