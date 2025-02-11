import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_ArrayRepeatedNullable = _test_functional_assertParametersAsync(CustomGuardError)(
  "ArrayRepeatedNullable"
)(ArrayRepeatedNullable)(
  (p: (input: ArrayRepeatedNullable) => Promise<ArrayRepeatedNullable>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)