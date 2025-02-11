import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_functional_isReturnAsync_ArrayHierarchical = _test_functional_isReturnAsync(
  "ArrayHierarchical"
)(ArrayHierarchical)(
  (p: (input: ArrayHierarchical) => Promise<ArrayHierarchical>) =>
    typia.functional.isReturn(p),
)