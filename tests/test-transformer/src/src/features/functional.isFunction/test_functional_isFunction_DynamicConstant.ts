import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_isFunction_DynamicConstant = (): void => _test_functional_isFunction(
  "DynamicConstant"
)(DynamicConstant)(
  (p: (input: DynamicConstant) => DynamicConstant) => typia.functional.isFunction(p),
)