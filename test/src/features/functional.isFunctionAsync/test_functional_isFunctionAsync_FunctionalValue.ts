import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_isFunctionAsync_FunctionalValue = _test_functional_isFunctionAsync(
  "FunctionalValue"
)(FunctionalValue)(
  (p: (input: FunctionalValue) => Promise<FunctionalValue>) =>
    typia.functional.isFunction(p),
)