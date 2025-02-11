import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ClassMethod } from "../../structures/ClassMethod";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_ClassMethod = _test_functional_assertEqualsReturn(CustomGuardError)(
  "ClassMethod"
)(ClassMethod)(
  (p: (input: ClassMethod) => ClassMethod) => typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)