import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_assertGuardEquals_ClassMethod = (): void =>
  _test_assertGuardEquals(TypeGuardError)("ClassMethod")<ClassMethod>(
    ClassMethod,
  )((input) => typia.assertGuardEquals<ClassMethod>(input));
