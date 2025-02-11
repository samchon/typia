import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_validateEqualsFunctionAsync_FunctionalArray = _test_functional_validateEqualsFunctionAsync(
  "FunctionalArray"
)(FunctionalArray)(
  (p: (input: FunctionalArray) => Promise<FunctionalArray>) =>
    typia.functional.validateEqualsFunction(p),
)