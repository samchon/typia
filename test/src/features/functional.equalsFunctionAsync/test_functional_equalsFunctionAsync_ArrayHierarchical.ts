import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_functional_equalsFunctionAsync_ArrayHierarchical = _test_functional_equalsFunctionAsync(
  "ArrayHierarchical"
)(ArrayHierarchical)(
  (p: (input: ArrayHierarchical) => Promise<ArrayHierarchical>) =>
    typia.functional.equalsFunction(p),
)