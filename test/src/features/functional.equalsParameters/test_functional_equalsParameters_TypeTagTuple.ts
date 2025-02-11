import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_equalsParameters_TypeTagTuple = _test_functional_equalsParameters(
  "TypeTagTuple"
)(TypeTagTuple)(
  (p: (input: TypeTagTuple) => TypeTagTuple) => typia.functional.equalsParameters(p),
)