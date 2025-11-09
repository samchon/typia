import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_equalsFunction_ConstantIntersection = (): void => _test_functional_equalsFunction(
  "ConstantIntersection"
)(ConstantIntersection)(
  (p: (input: ConstantIntersection) => ConstantIntersection) => typia.functional.equalsFunction(p),
)