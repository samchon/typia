import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_validateEqualsReturnAsync_DynamicConstant = (): Promise<void> => _test_functional_validateEqualsReturnAsync(
  "DynamicConstant"
)(DynamicConstant)(
  (p: (input: DynamicConstant) => Promise<DynamicConstant>) =>
    typia.functional.validateEqualsReturn(p),
)