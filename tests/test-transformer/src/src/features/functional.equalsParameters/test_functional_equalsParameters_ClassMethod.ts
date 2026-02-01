import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_equalsParameters_ClassMethod = (): void => _test_functional_equalsParameters(
  "ClassMethod"
)(ClassMethod)(
  (p: (input: ClassMethod) => ClassMethod) => typia.functional.equalsParameters(p),
)