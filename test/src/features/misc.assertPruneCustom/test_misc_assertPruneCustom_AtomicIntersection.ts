import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_misc_assertPruneCustom_AtomicIntersection =
  _test_misc_assertPrune(CustomGuardError)(
    "AtomicIntersection",
  )<AtomicIntersection>(AtomicIntersection)((input) =>
    typia.misc.assertPrune<AtomicIntersection>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
