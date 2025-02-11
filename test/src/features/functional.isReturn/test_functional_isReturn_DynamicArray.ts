import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_functional_isReturn_DynamicArray = _test_functional_isReturn(
  "DynamicArray"
)(DynamicArray)(
  (p: (input: DynamicArray) => DynamicArray) => typia.functional.isReturn(p),
)