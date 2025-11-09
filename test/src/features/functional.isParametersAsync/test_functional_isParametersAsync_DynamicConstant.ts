import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_isParametersAsync_DynamicConstant = (): Promise<void> => _test_functional_isParametersAsync(
  "DynamicConstant"
)(DynamicConstant)(
  (p: (input: DynamicConstant) => Promise<DynamicConstant>) =>
    typia.functional.isParameters(p),
)