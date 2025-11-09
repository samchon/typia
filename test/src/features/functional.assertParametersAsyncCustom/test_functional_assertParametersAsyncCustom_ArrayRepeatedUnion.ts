import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_ArrayRepeatedUnion = (): Promise<void> => _test_functional_assertParametersAsync(CustomGuardError)(
  "ArrayRepeatedUnion"
)(ArrayRepeatedUnion)(
  (p: (input: ArrayRepeatedUnion) => Promise<ArrayRepeatedUnion>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)