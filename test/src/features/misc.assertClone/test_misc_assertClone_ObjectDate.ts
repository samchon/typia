import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_misc_assertClone_ObjectDate = _test_misc_assertClone(
  TypeGuardError,
)("ObjectDate")<ObjectDate>(ObjectDate)((input) =>
  typia.misc.assertClone<ObjectDate>(input),
);
