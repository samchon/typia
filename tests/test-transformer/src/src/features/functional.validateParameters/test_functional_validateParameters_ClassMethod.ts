import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_validateParameters_ClassMethod = (): void => _test_functional_validateParameters(
  "ClassMethod"
)(ClassMethod)(
  (p: (input: ClassMethod) => ClassMethod) => typia.functional.validateParameters(p),
)