import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_assertGuardEqualsCustom_AtomicClass = _test_assertGuardEquals(
  CustomGuardError,
)("AtomicClass")<AtomicClass>(AtomicClass)((input) =>
  typia.assertGuardEquals<AtomicClass>(input, (p) => new CustomGuardError(p)),
);
