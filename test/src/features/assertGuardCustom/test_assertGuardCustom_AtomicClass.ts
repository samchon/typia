import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_assertGuardCustom_AtomicClass = _test_assertGuard(
  CustomGuardError,
)("AtomicClass")<AtomicClass>(AtomicClass)((input) =>
  typia.assertGuard<AtomicClass>(input, (p) => new CustomGuardError(p)),
);
