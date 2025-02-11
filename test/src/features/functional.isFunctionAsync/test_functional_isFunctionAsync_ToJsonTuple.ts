import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_isFunctionAsync_ToJsonTuple = _test_functional_isFunctionAsync(
  "ToJsonTuple"
)(ToJsonTuple)(
  (p: (input: ToJsonTuple) => Promise<ToJsonTuple>) =>
    typia.functional.isFunction(p),
)