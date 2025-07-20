import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_misc_createValidatePrune_AtomicIntersection = (): void =>
  _test_misc_validatePrune("AtomicIntersection")<AtomicIntersection>(
    AtomicIntersection,
  )(typia.misc.createValidatePrune<AtomicIntersection>());
