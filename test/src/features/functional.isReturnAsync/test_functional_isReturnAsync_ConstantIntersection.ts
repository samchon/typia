import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_isReturnAsync_ConstantIntersection = _test_functional_isReturnAsync(
  "ConstantIntersection"
)(ConstantIntersection)(
  (p: (input: ConstantIntersection) => Promise<ConstantIntersection>) =>
    typia.functional.isReturn(p),
)