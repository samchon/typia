import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_assertGuard_AtomicIntersection = (): void =>
  _test_assertGuard(TypeGuardError)("AtomicIntersection")<AtomicIntersection>(
    AtomicIntersection,
  )((input) => typia.assertGuard<AtomicIntersection>(input));
