import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_validateEqualsParameters_ArrayUnion = (): void => _test_functional_validateEqualsParameters(
  "ArrayUnion"
)(ArrayUnion)(
  (p: (input: ArrayUnion) => ArrayUnion) => typia.functional.validateEqualsParameters(p),
)