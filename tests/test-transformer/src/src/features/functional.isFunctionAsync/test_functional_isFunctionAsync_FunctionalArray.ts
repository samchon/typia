import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_isFunctionAsync_FunctionalArray = (): Promise<void> => _test_functional_isFunctionAsync(
  "FunctionalArray"
)(FunctionalArray)(
  (p: (input: FunctionalArray) => Promise<FunctionalArray>) =>
    typia.functional.isFunction(p),
)