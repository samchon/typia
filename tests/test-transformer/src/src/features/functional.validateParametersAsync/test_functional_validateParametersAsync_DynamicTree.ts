import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_functional_validateParametersAsync_DynamicTree = (): Promise<void> => _test_functional_validateParametersAsync(
  "DynamicTree"
)(DynamicTree)(
  (p: (input: DynamicTree) => Promise<DynamicTree>) =>
    typia.functional.validateParameters(p),
)