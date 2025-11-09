import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_functional_validateEqualsParametersAsync_ArrayHierarchical = (): Promise<void> => _test_functional_validateEqualsParametersAsync(
  "ArrayHierarchical"
)(ArrayHierarchical)(
  (p: (input: ArrayHierarchical) => Promise<ArrayHierarchical>) =>
    typia.functional.validateEqualsParameters(p),
)