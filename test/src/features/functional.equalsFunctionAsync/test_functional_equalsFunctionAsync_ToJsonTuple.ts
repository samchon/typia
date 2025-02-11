import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_equalsFunctionAsync_ToJsonTuple = _test_functional_equalsFunctionAsync(
  "ToJsonTuple"
)(ToJsonTuple)(
  (p: (input: ToJsonTuple) => Promise<ToJsonTuple>) =>
    typia.functional.equalsFunction(p),
)