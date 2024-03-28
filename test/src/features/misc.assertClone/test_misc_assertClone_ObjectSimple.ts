import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_misc_assertClone_ObjectSimple = _test_misc_assertClone(
  TypeGuardError,
)("ObjectSimple")<ObjectSimple>(ObjectSimple)((input) =>
  typia.misc.assertClone<ObjectSimple>(input),
);
