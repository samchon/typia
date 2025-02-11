import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_isReturn_TypeTagArray = _test_functional_isReturn(
  "TypeTagArray"
)(TypeTagArray)(
  (p: (input: TypeTagArray) => TypeTagArray) => typia.functional.isReturn(p),
)