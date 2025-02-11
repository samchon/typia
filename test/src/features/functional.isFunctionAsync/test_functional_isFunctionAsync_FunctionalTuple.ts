import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_isFunctionAsync_FunctionalTuple = _test_functional_isFunctionAsync(
  "FunctionalTuple"
)(FunctionalTuple)(
  (p: (input: FunctionalTuple) => Promise<FunctionalTuple>) =>
    typia.functional.isFunction(p),
)