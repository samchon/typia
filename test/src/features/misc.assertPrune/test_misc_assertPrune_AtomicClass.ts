import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { AtomicClass } from "../../structures/AtomicClass";

import { TypeGuardError } from "typia";

export const test_misc_assertPrune_AtomicClass = _test_misc_assertPrune(
  TypeGuardError,
)("AtomicClass")<AtomicClass>(AtomicClass)((input) =>
  typia.misc.assertPrune<AtomicClass>(input),
);
