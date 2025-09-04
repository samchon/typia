import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_misc_createAssertClone_ObjectSimple = (): void =>
  _test_misc_assertClone(TypeGuardError)("ObjectSimple")<ObjectSimple>(
    ObjectSimple,
  )(typia.misc.createAssertClone<ObjectSimple>());
