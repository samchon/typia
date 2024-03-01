import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_misc_createAssertClone_AtomicSimple = _test_misc_assertClone(
  TypeGuardError,
)("AtomicSimple")<AtomicSimple>(AtomicSimple)(
  typia.misc.createAssertClone<AtomicSimple>(),
);
