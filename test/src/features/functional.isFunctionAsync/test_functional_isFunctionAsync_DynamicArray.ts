import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_functional_isFunctionAsync_DynamicArray = _test_functional_isFunctionAsync(
  "DynamicArray"
)(DynamicArray)(
  (p: (input: DynamicArray) => Promise<DynamicArray>) =>
    typia.functional.isFunction(p),
)