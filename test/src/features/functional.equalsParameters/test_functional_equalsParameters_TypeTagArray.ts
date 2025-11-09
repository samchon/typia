import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_equalsParameters_TypeTagArray = (): void => _test_functional_equalsParameters(
  "TypeTagArray"
)(TypeTagArray)(
  (p: (input: TypeTagArray) => TypeTagArray) => typia.functional.equalsParameters(p),
)