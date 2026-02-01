import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_validateFunctionAsync_DynamicConstant = (): Promise<void> => _test_functional_validateFunctionAsync(
  "DynamicConstant"
)(DynamicConstant)(
  (p: (input: DynamicConstant) => Promise<DynamicConstant>) =>
    typia.functional.validateFunction(p),
)