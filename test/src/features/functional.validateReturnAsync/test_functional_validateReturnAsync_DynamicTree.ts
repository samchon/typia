import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_functional_validateReturnAsync_DynamicTree = (): Promise<void> => _test_functional_validateReturnAsync(
  "DynamicTree"
)(DynamicTree)(
  (p: (input: DynamicTree) => Promise<DynamicTree>) =>
    typia.functional.validateReturn(p),
)