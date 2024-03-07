import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ClassMethod } from "../../structures/ClassMethod";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_ClassMethod =
  _test_assertGuardEquals(CustomGuardError)("ClassMethod")<ClassMethod>(
    ClassMethod,
  )(typia.createAssertGuardEquals<ClassMethod>((p) => new CustomGuardError(p)));
