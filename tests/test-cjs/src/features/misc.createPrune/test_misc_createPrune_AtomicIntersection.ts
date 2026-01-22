import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_misc_createPrune_AtomicIntersection = (): void =>
  _test_misc_prune("AtomicIntersection")<AtomicIntersection>(
    AtomicIntersection,
  )(typia.misc.createPrune<AtomicIntersection>());
