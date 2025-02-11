import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_functional_isParametersAsync_DynamicArray = _test_functional_isParametersAsync(
  "DynamicArray"
)(DynamicArray)(
  (p: (input: DynamicArray) => Promise<DynamicArray>) =>
    typia.functional.isParameters(p),
)