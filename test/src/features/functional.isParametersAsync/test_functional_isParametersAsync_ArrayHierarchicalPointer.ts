import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_functional_isParametersAsync_ArrayHierarchicalPointer = (): Promise<void> => _test_functional_isParametersAsync(
  "ArrayHierarchicalPointer"
)(ArrayHierarchicalPointer)(
  (p: (input: ArrayHierarchicalPointer) => Promise<ArrayHierarchicalPointer>) =>
    typia.functional.isParameters(p),
)