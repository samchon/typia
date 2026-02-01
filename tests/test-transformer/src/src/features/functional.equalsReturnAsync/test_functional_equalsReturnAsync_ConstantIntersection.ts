import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_equalsReturnAsync_ConstantIntersection = (): Promise<void> => _test_functional_equalsReturnAsync(
  "ConstantIntersection"
)(ConstantIntersection)(
  (p: (input: ConstantIntersection) => Promise<ConstantIntersection>) =>
    typia.functional.equalsReturn(p),
)