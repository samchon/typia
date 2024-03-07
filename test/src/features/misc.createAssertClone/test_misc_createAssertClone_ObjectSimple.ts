import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectSimple } from "../../structures/ObjectSimple";

import { TypeGuardError } from "typia";

export const test_misc_createAssertClone_ObjectSimple = _test_misc_assertClone(
  TypeGuardError,
)("ObjectSimple")<ObjectSimple>(ObjectSimple)(
  typia.misc.createAssertClone<ObjectSimple>(),
);
