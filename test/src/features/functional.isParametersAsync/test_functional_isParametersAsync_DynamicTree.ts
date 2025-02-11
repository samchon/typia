import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_functional_isParametersAsync_DynamicTree = _test_functional_isParametersAsync(
  "DynamicTree"
)(DynamicTree)(
  (p: (input: DynamicTree) => Promise<DynamicTree>) =>
    typia.functional.isParameters(p),
)