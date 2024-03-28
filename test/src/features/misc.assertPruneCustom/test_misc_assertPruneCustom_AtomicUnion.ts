import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_misc_assertPruneCustom_AtomicUnion = _test_misc_assertPrune(
  CustomGuardError,
)("AtomicUnion")<AtomicUnion>(AtomicUnion)((input) =>
  typia.misc.assertPrune<AtomicUnion>(input, (p) => new CustomGuardError(p)),
);
