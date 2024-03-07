import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_AtomicIntersection =
  _test_assertGuardEquals(TypeGuardError)(
    "AtomicIntersection",
  )<AtomicIntersection>(AtomicIntersection)((input) =>
    typia.assertGuardEquals<AtomicIntersection>(input),
  );
