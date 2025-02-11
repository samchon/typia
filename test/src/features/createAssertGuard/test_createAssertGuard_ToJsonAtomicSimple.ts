import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_createAssertGuard_ToJsonAtomicSimple = _test_assertGuard(
  TypeGuardError,
)("ToJsonAtomicSimple")<ToJsonAtomicSimple>(ToJsonAtomicSimple)(
  typia.createAssertGuard<ToJsonAtomicSimple>(),
);
