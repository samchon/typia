import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ArrayUnion } from "../../structures/ArrayUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_ArrayUnion = (): Promise<void> => _test_functional_assertParametersAsync(CustomGuardError)(
  "ArrayUnion"
)(ArrayUnion)(
  (p: (input: ArrayUnion) => Promise<ArrayUnion>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)