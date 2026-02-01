import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_validateEqualsReturn_ClassMethod = (): void => _test_functional_validateEqualsReturn(
  "ClassMethod"
)(ClassMethod)(
  (p: (input: ClassMethod) => ClassMethod) => typia.functional.validateEqualsReturn(p),
)