import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_functional_validateEqualsParametersAsync_ArrayHierarchicalPointer = (): Promise<void> => _test_functional_validateEqualsParametersAsync(
  "ArrayHierarchicalPointer"
)(ArrayHierarchicalPointer)(
  (p: (input: ArrayHierarchicalPointer) => Promise<ArrayHierarchicalPointer>) =>
    typia.functional.validateEqualsParameters(p),
)