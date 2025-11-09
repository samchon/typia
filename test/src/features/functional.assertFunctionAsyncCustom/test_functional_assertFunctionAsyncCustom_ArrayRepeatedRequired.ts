import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_ArrayRepeatedRequired = (): Promise<void> => _test_functional_assertFunctionAsync(CustomGuardError)(
  "ArrayRepeatedRequired"
)(ArrayRepeatedRequired)(
  (p: (input: ArrayRepeatedRequired) => Promise<ArrayRepeatedRequired>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)