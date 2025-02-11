import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_functional_equalsFunction_ArrayHierarchicalPointer = _test_functional_equalsFunction(
  "ArrayHierarchicalPointer"
)(ArrayHierarchicalPointer)(
  (p: (input: ArrayHierarchicalPointer) => ArrayHierarchicalPointer) => typia.functional.equalsFunction(p),
)