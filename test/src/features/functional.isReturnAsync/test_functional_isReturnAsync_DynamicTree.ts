import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_functional_isReturnAsync_DynamicTree = (): Promise<void> => _test_functional_isReturnAsync(
  "DynamicTree"
)(DynamicTree)(
  (p: (input: DynamicTree) => Promise<DynamicTree>) =>
    typia.functional.isReturn(p),
)