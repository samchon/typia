import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_validateEqualsReturnAsync_ConstantIntersection = (): Promise<void> => _test_functional_validateEqualsReturnAsync(
  "ConstantIntersection"
)(ConstantIntersection)(
  (p: (input: ConstantIntersection) => Promise<ConstantIntersection>) =>
    typia.functional.validateEqualsReturn(p),
)