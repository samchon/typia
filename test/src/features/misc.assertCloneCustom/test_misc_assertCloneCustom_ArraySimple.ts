import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_misc_assertCloneCustom_ArraySimple = _test_misc_assertClone(
  CustomGuardError,
)("ArraySimple")<ArraySimple>(ArraySimple)((input) =>
  typia.misc.assertClone<ArraySimple>(input, (p) => new CustomGuardError(p)),
);
