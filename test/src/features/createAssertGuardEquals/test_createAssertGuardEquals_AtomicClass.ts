import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { AtomicClass } from "../../structures/AtomicClass";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_AtomicClass = _test_assertGuardEquals(
  TypeGuardError,
)("AtomicClass")<AtomicClass>(AtomicClass)(
  typia.createAssertGuardEquals<AtomicClass>(),
);
