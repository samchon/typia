import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_functional_isFunctionAsync_DynamicUndefined = (): Promise<void> => _test_functional_isFunctionAsync(
  "DynamicUndefined"
)(DynamicUndefined)(
  (p: (input: DynamicUndefined) => Promise<DynamicUndefined>) =>
    typia.functional.isFunction(p),
)