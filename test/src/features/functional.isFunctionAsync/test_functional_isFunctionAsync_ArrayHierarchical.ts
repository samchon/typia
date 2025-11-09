import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_functional_isFunctionAsync_ArrayHierarchical = (): Promise<void> => _test_functional_isFunctionAsync(
  "ArrayHierarchical"
)(ArrayHierarchical)(
  (p: (input: ArrayHierarchical) => Promise<ArrayHierarchical>) =>
    typia.functional.isFunction(p),
)