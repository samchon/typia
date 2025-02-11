import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_functional_isReturn_ArrayHierarchical = _test_functional_isReturn(
  "ArrayHierarchical"
)(ArrayHierarchical)(
  (p: (input: ArrayHierarchical) => ArrayHierarchical) => typia.functional.isReturn(p),
)