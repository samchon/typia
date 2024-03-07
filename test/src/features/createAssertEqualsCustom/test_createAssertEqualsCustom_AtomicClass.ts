import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { AtomicClass } from "../../structures/AtomicClass";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_AtomicClass = _test_assertEquals(
  CustomGuardError,
)("AtomicClass")<AtomicClass>(AtomicClass)(
  typia.createAssertEquals<AtomicClass>((p) => new CustomGuardError(p)),
);
