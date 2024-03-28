import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_misc_assertCloneCustom_ObjectDate = _test_misc_assertClone(
  CustomGuardError,
)("ObjectDate")<ObjectDate>(ObjectDate)((input) =>
  typia.misc.assertClone<ObjectDate>(input, (p) => new CustomGuardError(p)),
);
