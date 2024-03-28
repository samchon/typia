import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_misc_assertPrune_AtomicIntersection = _test_misc_assertPrune(
  TypeGuardError,
)("AtomicIntersection")<AtomicIntersection>(AtomicIntersection)((input) =>
  typia.misc.assertPrune<AtomicIntersection>(input),
);
