import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { DynamicArray } from "../../structures/DynamicArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_DynamicArray = _test_functional_assertFunctionAsync(CustomGuardError)(
  "DynamicArray"
)(DynamicArray)(
  (p: (input: DynamicArray) => Promise<DynamicArray>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)