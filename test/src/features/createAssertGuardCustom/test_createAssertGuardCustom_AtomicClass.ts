import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { AtomicClass } from "../../structures/AtomicClass";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_AtomicClass = _test_assertGuard(
  CustomGuardError,
)("AtomicClass")<AtomicClass>(AtomicClass)(
  typia.createAssertGuard<AtomicClass>((p) => new CustomGuardError(p)),
);
