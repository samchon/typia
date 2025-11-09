import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { FunctionalArray } from "../../structures/FunctionalArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_FunctionalArray = (): Promise<void> => _test_functional_assertParametersAsync(CustomGuardError)(
  "FunctionalArray"
)(FunctionalArray)(
  (p: (input: FunctionalArray) => Promise<FunctionalArray>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)