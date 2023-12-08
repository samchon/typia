import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_assertGuardEquals_AtomicIntersection =
  _test_assertGuardEquals("AtomicIntersection")<AtomicIntersection>(
    AtomicIntersection,
  )((input) => typia.assertGuardEquals<AtomicIntersection>(input));
