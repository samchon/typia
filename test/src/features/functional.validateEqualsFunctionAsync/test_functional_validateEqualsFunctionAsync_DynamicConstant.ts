import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_validateEqualsFunctionAsync_DynamicConstant = _test_functional_validateEqualsFunctionAsync(
  "DynamicConstant"
)(DynamicConstant)(
  (p: (input: DynamicConstant) => Promise<DynamicConstant>) =>
    typia.functional.validateEqualsFunction(p),
)