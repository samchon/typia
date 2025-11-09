import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ClassMethod } from "../../structures/ClassMethod";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_ClassMethod = (): void => _test_functional_assertFunction(CustomGuardError)(
  "ClassMethod"
)(ClassMethod)(
  (p: (input: ClassMethod) => ClassMethod) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)