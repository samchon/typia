import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_isReturnAsync_DynamicConstant = (): Promise<void> => _test_functional_isReturnAsync(
  "DynamicConstant"
)(DynamicConstant)(
  (p: (input: DynamicConstant) => Promise<DynamicConstant>) =>
    typia.functional.isReturn(p),
)