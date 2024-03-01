import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_misc_createAssertCloneCustom_ClassMethod =
  _test_misc_assertClone(CustomGuardError)("ClassMethod")<ClassMethod>(
    ClassMethod,
  )(typia.misc.createAssertClone<ClassMethod>((p) => new CustomGuardError(p)));
