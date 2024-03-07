import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ClassMethod } from "../../structures/ClassMethod";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_ClassMethod = _test_assertEquals(
  TypeGuardError,
)("ClassMethod")<ClassMethod>(ClassMethod)(
  typia.createAssertEquals<ClassMethod>(),
);
