import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_ArrayRepeatedRequired = (): Promise<void> => _test_functional_assertParametersAsync(CustomGuardError)(
  "ArrayRepeatedRequired"
)(ArrayRepeatedRequired)(
  (p: (input: ArrayRepeatedRequired) => Promise<ArrayRepeatedRequired>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)