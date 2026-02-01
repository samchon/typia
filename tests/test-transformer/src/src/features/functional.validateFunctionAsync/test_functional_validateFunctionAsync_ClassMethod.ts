import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_validateFunctionAsync_ClassMethod = (): Promise<void> => _test_functional_validateFunctionAsync(
  "ClassMethod"
)(ClassMethod)(
  (p: (input: ClassMethod) => Promise<ClassMethod>) =>
    typia.functional.validateFunction(p),
)