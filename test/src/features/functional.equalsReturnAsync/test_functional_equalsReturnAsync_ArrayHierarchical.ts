import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_functional_equalsReturnAsync_ArrayHierarchical = _test_functional_equalsReturnAsync(
  "ArrayHierarchical"
)(ArrayHierarchical)(
  (p: (input: ArrayHierarchical) => Promise<ArrayHierarchical>) =>
    typia.functional.equalsReturn(p),
)