import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { AtomicSimple } from "../../structures/AtomicSimple";

import { TypeGuardError } from "typia";

export const test_misc_assertPrune_AtomicSimple = _test_misc_assertPrune(
  TypeGuardError,
)("AtomicSimple")<AtomicSimple>(AtomicSimple)((input) =>
  typia.misc.assertPrune<AtomicSimple>(input),
);
