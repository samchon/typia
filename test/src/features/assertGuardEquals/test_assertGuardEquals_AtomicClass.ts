import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { AtomicClass } from "../../structures/AtomicClass";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_AtomicClass = _test_assertGuardEquals(
  TypeGuardError,
)("AtomicClass")<AtomicClass>(AtomicClass)((input) =>
  typia.assertGuardEquals<AtomicClass>(input),
);
