import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_equalsReturnAsync_DynamicConstant = (): Promise<void> => _test_functional_equalsReturnAsync(
  "DynamicConstant"
)(DynamicConstant)(
  (p: (input: DynamicConstant) => Promise<DynamicConstant>) =>
    typia.functional.equalsReturn(p),
)