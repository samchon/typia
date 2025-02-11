import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_isReturn_DynamicConstant = _test_functional_isReturn(
  "DynamicConstant"
)(DynamicConstant)(
  (p: (input: DynamicConstant) => DynamicConstant) => typia.functional.isReturn(p),
)