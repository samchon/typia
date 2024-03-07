import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ClassMethod } from "../../structures/ClassMethod";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_ClassMethod = _test_assertGuardEquals(
  TypeGuardError,
)("ClassMethod")<ClassMethod>(ClassMethod)(
  typia.createAssertGuardEquals<ClassMethod>(),
);
