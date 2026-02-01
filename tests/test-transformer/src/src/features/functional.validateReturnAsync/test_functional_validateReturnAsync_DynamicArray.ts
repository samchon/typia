import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_functional_validateReturnAsync_DynamicArray = (): Promise<void> => _test_functional_validateReturnAsync(
  "DynamicArray"
)(DynamicArray)(
  (p: (input: DynamicArray) => Promise<DynamicArray>) =>
    typia.functional.validateReturn(p),
)