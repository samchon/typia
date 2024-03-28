import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_misc_createAssertPruneCustom_AtomicClass =
  _test_misc_assertPrune(CustomGuardError)("AtomicClass")<AtomicClass>(
    AtomicClass,
  )(typia.misc.createAssertPrune<AtomicClass>((p) => new CustomGuardError(p)));
