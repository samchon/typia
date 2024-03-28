import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_misc_createAssertPruneCustom_AtomicSimple =
  _test_misc_assertPrune(CustomGuardError)("AtomicSimple")<AtomicSimple>(
    AtomicSimple,
  )(typia.misc.createAssertPrune<AtomicSimple>((p) => new CustomGuardError(p)));
