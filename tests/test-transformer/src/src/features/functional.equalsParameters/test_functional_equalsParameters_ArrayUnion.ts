import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_equalsParameters_ArrayUnion = (): void => _test_functional_equalsParameters(
  "ArrayUnion"
)(ArrayUnion)(
  (p: (input: ArrayUnion) => ArrayUnion) => typia.functional.equalsParameters(p),
)