import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { DynamicArray } from "../../structures/DynamicArray";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_DynamicArray = _test_functional_assertParametersAsync(TypeGuardError)(
  "DynamicArray"
)(DynamicArray)(
  (p: (input: DynamicArray) => Promise<DynamicArray>) =>
    typia.functional.assertParameters(p),
)