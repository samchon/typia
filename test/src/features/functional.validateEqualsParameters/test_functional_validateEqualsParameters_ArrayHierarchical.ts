import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_functional_validateEqualsParameters_ArrayHierarchical = (): void => _test_functional_validateEqualsParameters(
  "ArrayHierarchical"
)(ArrayHierarchical)(
  (p: (input: ArrayHierarchical) => ArrayHierarchical) => typia.functional.validateEqualsParameters(p),
)