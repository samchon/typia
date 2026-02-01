import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_equalsParameters_ConstantIntersection = (): void => _test_functional_equalsParameters(
  "ConstantIntersection"
)(ConstantIntersection)(
  (p: (input: ConstantIntersection) => ConstantIntersection) => typia.functional.equalsParameters(p),
)