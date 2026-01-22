import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_misc_createAssertPruneCustom_AtomicIntersection = (): void =>
  _test_misc_assertPrune(CustomGuardError)(
    "AtomicIntersection",
  )<AtomicIntersection>(AtomicIntersection)(
    typia.misc.createAssertPrune<AtomicIntersection>(
      (p) => new CustomGuardError(p),
    ),
  );
