import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_misc_clone_AtomicIntersection = (): void =>
  _test_misc_clone("AtomicIntersection")<AtomicIntersection>(
    AtomicIntersection,
  )((input) => typia.misc.clone<AtomicIntersection>(input));
