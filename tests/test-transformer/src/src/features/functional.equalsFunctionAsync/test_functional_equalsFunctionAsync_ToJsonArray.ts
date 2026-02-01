import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_equalsFunctionAsync_ToJsonArray = (): Promise<void> => _test_functional_equalsFunctionAsync(
  "ToJsonArray"
)(ToJsonArray)(
  (p: (input: ToJsonArray) => Promise<ToJsonArray>) =>
    typia.functional.equalsFunction(p),
)