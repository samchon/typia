import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { FunctionalArray } from "../../structures/FunctionalArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersAsyncCustom_FunctionalArray = (): Promise<void> => _test_functional_assertEqualsParametersAsync(CustomGuardError)(
  "FunctionalArray"
)(FunctionalArray)(
  (p: (input: FunctionalArray) => Promise<FunctionalArray>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)