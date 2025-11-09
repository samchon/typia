import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_assertGuardEquals_AtomicIntersection = (): void =>
  _test_assertGuardEquals(TypeGuardError)(
    "AtomicIntersection",
  )<AtomicIntersection>(AtomicIntersection)((input) =>
    typia.assertGuardEquals<AtomicIntersection>(input),
  );
