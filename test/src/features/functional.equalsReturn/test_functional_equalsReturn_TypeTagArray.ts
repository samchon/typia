import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_equalsReturn_TypeTagArray = (): void => _test_functional_equalsReturn(
  "TypeTagArray"
)(TypeTagArray)(
  (p: (input: TypeTagArray) => TypeTagArray) => typia.functional.equalsReturn(p),
)