import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_misc_createIsPrune_AtomicIntersection = (): void =>
  _test_misc_isPrune("AtomicIntersection")<AtomicIntersection>(
    AtomicIntersection,
  )(typia.misc.createIsPrune<AtomicIntersection>());
