import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_misc_assertClone_AtomicSimple = (): void =>
  _test_misc_assertClone(TypeGuardError)("AtomicSimple")<AtomicSimple>(
    AtomicSimple,
  )((input) => typia.misc.assertClone<AtomicSimple>(input));
