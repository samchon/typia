import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_equalsParametersAsync_ClassMethod = (): Promise<void> => _test_functional_equalsParametersAsync(
  "ClassMethod"
)(ClassMethod)(
  (p: (input: ClassMethod) => Promise<ClassMethod>) =>
    typia.functional.equalsParameters(p),
)