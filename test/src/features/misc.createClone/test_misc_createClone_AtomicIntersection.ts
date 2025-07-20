import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_misc_createClone_AtomicIntersection = (): void =>
  _test_misc_clone("AtomicIntersection")<AtomicIntersection>(
    AtomicIntersection,
  )(typia.misc.createClone<AtomicIntersection>());
