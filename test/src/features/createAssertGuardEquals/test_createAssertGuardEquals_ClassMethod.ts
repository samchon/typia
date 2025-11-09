import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_createAssertGuardEquals_ClassMethod = (): void =>
  _test_assertGuardEquals(TypeGuardError)("ClassMethod")<ClassMethod>(
    ClassMethod,
  )(typia.createAssertGuardEquals<ClassMethod>());
