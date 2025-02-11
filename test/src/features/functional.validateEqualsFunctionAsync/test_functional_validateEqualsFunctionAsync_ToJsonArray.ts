import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_validateEqualsFunctionAsync_ToJsonArray = _test_functional_validateEqualsFunctionAsync(
  "ToJsonArray"
)(ToJsonArray)(
  (p: (input: ToJsonArray) => Promise<ToJsonArray>) =>
    typia.functional.validateEqualsFunction(p),
)