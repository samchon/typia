import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_functional_isFunctionAsync_DynamicTree = _test_functional_isFunctionAsync(
  "DynamicTree"
)(DynamicTree)(
  (p: (input: DynamicTree) => Promise<DynamicTree>) =>
    typia.functional.isFunction(p),
)