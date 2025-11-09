import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_createAssertGuardEquals_AtomicSimple = (): void =>
  _test_assertGuardEquals(TypeGuardError)("AtomicSimple")<AtomicSimple>(
    AtomicSimple,
  )(typia.createAssertGuardEquals<AtomicSimple>());
