import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_createAssertGuardEquals_AtomicClass = (): void =>
  _test_assertGuardEquals(TypeGuardError)("AtomicClass")<AtomicClass>(
    AtomicClass,
  )(typia.createAssertGuardEquals<AtomicClass>());
