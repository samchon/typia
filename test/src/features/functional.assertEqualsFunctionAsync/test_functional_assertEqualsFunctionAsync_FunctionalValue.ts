import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { FunctionalValue } from "../../structures/FunctionalValue";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunctionAsync_FunctionalValue = (): Promise<void> => _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
  "FunctionalValue"
)(FunctionalValue)(
  (p: (input: FunctionalValue) => Promise<FunctionalValue>) =>
    typia.functional.assertEqualsFunction(p),
)