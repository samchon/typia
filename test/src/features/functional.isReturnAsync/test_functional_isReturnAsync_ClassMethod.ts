import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_isReturnAsync_ClassMethod = _test_functional_isReturnAsync(
  "ClassMethod"
)(ClassMethod)(
  (p: (input: ClassMethod) => Promise<ClassMethod>) =>
    typia.functional.isReturn(p),
)