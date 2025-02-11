import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_isFunctionAsync_ToJsonDouble = _test_functional_isFunctionAsync(
  "ToJsonDouble"
)(ToJsonDouble)(
  (p: (input: ToJsonDouble) => Promise<ToJsonDouble>) =>
    typia.functional.isFunction(p),
)