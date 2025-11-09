import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_equalsFunctionAsync_FunctionalValue = (): Promise<void> => _test_functional_equalsFunctionAsync(
  "FunctionalValue"
)(FunctionalValue)(
  (p: (input: FunctionalValue) => Promise<FunctionalValue>) =>
    typia.functional.equalsFunction(p),
)