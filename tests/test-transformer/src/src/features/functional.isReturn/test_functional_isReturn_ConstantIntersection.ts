import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_isReturn_ConstantIntersection = (): void => _test_functional_isReturn(
  "ConstantIntersection"
)(ConstantIntersection)(
  (p: (input: ConstantIntersection) => ConstantIntersection) => typia.functional.isReturn(p),
)