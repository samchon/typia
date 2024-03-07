import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectDate } from "../../structures/ObjectDate";

import { TypeGuardError } from "typia";

export const test_misc_createAssertClone_ObjectDate = _test_misc_assertClone(
  TypeGuardError,
)("ObjectDate")<ObjectDate>(ObjectDate)(
  typia.misc.createAssertClone<ObjectDate>(),
);
