import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_functional_equalsParameters_TypeTagMatrix = _test_functional_equalsParameters(
  "TypeTagMatrix"
)(TypeTagMatrix)(
  (p: (input: TypeTagMatrix) => TypeTagMatrix) => typia.functional.equalsParameters(p),
)