import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_equalsParametersAsync_ConstantIntersection = _test_functional_equalsParametersAsync(
  "ConstantIntersection"
)(ConstantIntersection)(
  (p: (input: ConstantIntersection) => Promise<ConstantIntersection>) =>
    typia.functional.equalsParameters(p),
)