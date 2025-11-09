import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_validateEqualsFunctionAsync_ClassMethod = (): Promise<void> => _test_functional_validateEqualsFunctionAsync(
  "ClassMethod"
)(ClassMethod)(
  (p: (input: ClassMethod) => Promise<ClassMethod>) =>
    typia.functional.validateEqualsFunction(p),
)