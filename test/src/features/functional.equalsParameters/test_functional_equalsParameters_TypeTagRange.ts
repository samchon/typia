import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_equalsParameters_TypeTagRange = _test_functional_equalsParameters(
  "TypeTagRange"
)(TypeTagRange)(
  (p: (input: TypeTagRange) => TypeTagRange) => typia.functional.equalsParameters(p),
)