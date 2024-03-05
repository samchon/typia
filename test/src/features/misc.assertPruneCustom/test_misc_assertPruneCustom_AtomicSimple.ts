import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_misc_assertPruneCustom_AtomicSimple = _test_misc_assertPrune(
  CustomGuardError,
)("AtomicSimple")<AtomicSimple>(AtomicSimple)((input) =>
  typia.misc.assertPrune<AtomicSimple>(input, (p) => new CustomGuardError(p)),
);
