import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { AtomicSimple } from "../../structures/AtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertCloneCustom_AtomicSimple = _test_misc_assertClone(
  CustomGuardError,
)("AtomicSimple")<AtomicSimple>(AtomicSimple)((input) =>
  typia.misc.assertClone<AtomicSimple>(input, (p) => new CustomGuardError(p)),
);
