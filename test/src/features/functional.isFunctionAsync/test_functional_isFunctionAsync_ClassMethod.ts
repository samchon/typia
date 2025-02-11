import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_isFunctionAsync_ClassMethod = _test_functional_isFunctionAsync(
  "ClassMethod"
)(ClassMethod)(
  (p: (input: ClassMethod) => Promise<ClassMethod>) =>
    typia.functional.isFunction(p),
)