import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ClassMethod } from "../../structures/ClassMethod";

import { TypeGuardError } from "typia";

export const test_misc_assertClone_ClassMethod = _test_misc_assertClone(
  TypeGuardError,
)("ClassMethod")<ClassMethod>(ClassMethod)((input) =>
  typia.misc.assertClone<ClassMethod>(input),
);
