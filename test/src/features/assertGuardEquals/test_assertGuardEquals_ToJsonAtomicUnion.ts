import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_assertGuardEquals_ToJsonAtomicUnion = _test_assertGuardEquals(
  TypeGuardError,
)("ToJsonAtomicUnion")<ToJsonAtomicUnion>(ToJsonAtomicUnion)((input) =>
  typia.assertGuardEquals<ToJsonAtomicUnion>(input),
);
