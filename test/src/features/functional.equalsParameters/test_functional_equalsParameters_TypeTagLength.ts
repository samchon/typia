import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_equalsParameters_TypeTagLength = (): void => _test_functional_equalsParameters(
  "TypeTagLength"
)(TypeTagLength)(
  (p: (input: TypeTagLength) => TypeTagLength) => typia.functional.equalsParameters(p),
)