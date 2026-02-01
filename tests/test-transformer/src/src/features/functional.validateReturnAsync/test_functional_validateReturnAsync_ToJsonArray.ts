import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_validateReturnAsync_ToJsonArray = (): Promise<void> => _test_functional_validateReturnAsync(
  "ToJsonArray"
)(ToJsonArray)(
  (p: (input: ToJsonArray) => Promise<ToJsonArray>) =>
    typia.functional.validateReturn(p),
)