import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_validateEqualsFunction_ConstantIntersection = _test_functional_validateEqualsFunction(
  "ConstantIntersection"
)(ConstantIntersection)(
  (p: (input: ConstantIntersection) => ConstantIntersection) => typia.functional.validateEqualsFunction(p),
)