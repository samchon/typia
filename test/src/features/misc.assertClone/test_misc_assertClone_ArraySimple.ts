import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_misc_assertClone_ArraySimple = _test_misc_assertClone(
  TypeGuardError,
)("ArraySimple")<ArraySimple>(ArraySimple)((input) =>
  typia.misc.assertClone<ArraySimple>(input),
);
