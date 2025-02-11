import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_equalsFunction_DynamicConstant = _test_functional_equalsFunction(
  "DynamicConstant"
)(DynamicConstant)(
  (p: (input: DynamicConstant) => DynamicConstant) => typia.functional.equalsFunction(p),
)