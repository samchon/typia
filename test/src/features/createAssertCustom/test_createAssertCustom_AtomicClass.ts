import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_createAssertCustom_AtomicClass = _test_assert(
  CustomGuardError,
)("AtomicClass")<AtomicClass>(AtomicClass)(
  typia.createAssert<AtomicClass>((p) => new CustomGuardError(p)),
);
