import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_isParametersAsync_ConstantIntersection = (): Promise<void> => _test_functional_isParametersAsync(
  "ConstantIntersection"
)(ConstantIntersection)(
  (p: (input: ConstantIntersection) => Promise<ConstantIntersection>) =>
    typia.functional.isParameters(p),
)