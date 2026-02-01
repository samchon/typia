import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_functional_validateFunction_ArrayHierarchical = (): void => _test_functional_validateFunction(
  "ArrayHierarchical"
)(ArrayHierarchical)(
  (p: (input: ArrayHierarchical) => ArrayHierarchical) => typia.functional.validateFunction(p),
)