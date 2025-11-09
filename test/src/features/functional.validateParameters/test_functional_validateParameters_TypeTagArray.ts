import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_validateParameters_TypeTagArray = (): void => _test_functional_validateParameters(
  "TypeTagArray"
)(TypeTagArray)(
  (p: (input: TypeTagArray) => TypeTagArray) => typia.functional.validateParameters(p),
)