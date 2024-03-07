import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { AtomicClass } from "../../structures/AtomicClass";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertCloneCustom_AtomicClass = _test_misc_assertClone(
  CustomGuardError,
)("AtomicClass")<AtomicClass>(AtomicClass)((input) =>
  typia.misc.assertClone<AtomicClass>(input, (p) => new CustomGuardError(p)),
);
