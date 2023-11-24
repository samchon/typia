import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_misc_assertClone_AtomicIntersection = _test_misc_assertClone(
  "AtomicIntersection",
)<AtomicIntersection>(AtomicIntersection)((input) =>
  typia.misc.assertClone<AtomicIntersection>(input),
);
