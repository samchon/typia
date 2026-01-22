import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_misc_createAssertPrune_AtomicClass = (): void =>
  _test_misc_assertPrune(TypeGuardError)("AtomicClass")<AtomicClass>(
    AtomicClass,
  )(typia.misc.createAssertPrune<AtomicClass>());
