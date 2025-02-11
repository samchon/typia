import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_equalsParameters_TypeTagNaN = _test_functional_equalsParameters(
  "TypeTagNaN"
)(TypeTagNaN)(
  (p: (input: TypeTagNaN) => TypeTagNaN) => typia.functional.equalsParameters(p),
)