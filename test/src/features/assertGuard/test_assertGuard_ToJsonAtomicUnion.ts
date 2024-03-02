import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_assertGuard_ToJsonAtomicUnion = _test_assertGuard(
  TypeGuardError,
)("ToJsonAtomicUnion")<ToJsonAtomicUnion>(ToJsonAtomicUnion)((input) =>
  typia.assertGuard<ToJsonAtomicUnion>(input),
);
