import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_functional_equalsParameters_ArrayHierarchical = _test_functional_equalsParameters(
  "ArrayHierarchical"
)(ArrayHierarchical)(
  (p: (input: ArrayHierarchical) => ArrayHierarchical) => typia.functional.equalsParameters(p),
)