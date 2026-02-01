import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_isFunctionAsync_ToJsonNull = (): Promise<void> => _test_functional_isFunctionAsync(
  "ToJsonNull"
)(ToJsonNull)(
  (p: (input: ToJsonNull) => Promise<ToJsonNull>) =>
    typia.functional.isFunction(p),
)