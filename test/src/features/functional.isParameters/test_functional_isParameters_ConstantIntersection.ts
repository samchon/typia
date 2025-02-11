import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_isParameters_ConstantIntersection = _test_functional_isParameters(
  "ConstantIntersection"
)(ConstantIntersection)(
  (p: (input: ConstantIntersection) => ConstantIntersection) => typia.functional.isParameters(p),
)