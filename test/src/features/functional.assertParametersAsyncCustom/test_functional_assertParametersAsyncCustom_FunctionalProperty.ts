import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_FunctionalProperty = (): Promise<void> => _test_functional_assertParametersAsync(CustomGuardError)(
  "FunctionalProperty"
)(FunctionalProperty)(
  (p: (input: FunctionalProperty) => Promise<FunctionalProperty>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)