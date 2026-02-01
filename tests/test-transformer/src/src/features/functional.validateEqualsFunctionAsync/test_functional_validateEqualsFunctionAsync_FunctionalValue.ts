import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_validateEqualsFunctionAsync_FunctionalValue = (): Promise<void> => _test_functional_validateEqualsFunctionAsync(
  "FunctionalValue"
)(FunctionalValue)(
  (p: (input: FunctionalValue) => Promise<FunctionalValue>) =>
    typia.functional.validateEqualsFunction(p),
)