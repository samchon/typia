import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { AtomicClass } from "../../structures/AtomicClass";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_AtomicClass =
  _test_assertGuardEquals(CustomGuardError)("AtomicClass")<AtomicClass>(
    AtomicClass,
  )(typia.createAssertGuardEquals<AtomicClass>((p) => new CustomGuardError(p)));
