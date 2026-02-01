import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_validateEqualsFunctionAsync_ToJsonNull = (): Promise<void> => _test_functional_validateEqualsFunctionAsync(
  "ToJsonNull"
)(ToJsonNull)(
  (p: (input: ToJsonNull) => Promise<ToJsonNull>) =>
    typia.functional.validateEqualsFunction(p),
)