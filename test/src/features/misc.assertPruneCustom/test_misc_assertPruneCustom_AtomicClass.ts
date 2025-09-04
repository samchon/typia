import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_misc_assertPruneCustom_AtomicClass = (): void =>
  _test_misc_assertPrune(CustomGuardError)("AtomicClass")<AtomicClass>(
    AtomicClass,
  )((input) =>
    typia.misc.assertPrune<AtomicClass>(input, (p) => new CustomGuardError(p)),
  );
