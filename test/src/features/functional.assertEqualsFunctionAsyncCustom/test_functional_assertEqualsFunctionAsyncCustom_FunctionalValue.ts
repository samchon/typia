import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { FunctionalValue } from "../../structures/FunctionalValue";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_FunctionalValue = (): Promise<void> => _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
  "FunctionalValue"
)(FunctionalValue)(
  (p: (input: FunctionalValue) => Promise<FunctionalValue>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)