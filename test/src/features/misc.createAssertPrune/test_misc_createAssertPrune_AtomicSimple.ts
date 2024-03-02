import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_misc_createAssertPrune_AtomicSimple = _test_misc_assertPrune(
  TypeGuardError,
)("AtomicSimple")<AtomicSimple>(AtomicSimple)(
  typia.misc.createAssertPrune<AtomicSimple>(),
);
