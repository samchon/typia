import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ClassMethod } from "../../structures/ClassMethod";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturn_ClassMethod = _test_functional_assertEqualsReturn(TypeGuardError)(
  "ClassMethod"
)(ClassMethod)(
  (p: (input: ClassMethod) => ClassMethod) => typia.functional.assertEqualsReturn(p),
)