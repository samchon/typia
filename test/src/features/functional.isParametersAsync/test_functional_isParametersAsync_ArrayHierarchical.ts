import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_functional_isParametersAsync_ArrayHierarchical = _test_functional_isParametersAsync(
  "ArrayHierarchical"
)(ArrayHierarchical)(
  (p: (input: ArrayHierarchical) => Promise<ArrayHierarchical>) =>
    typia.functional.isParameters(p),
)