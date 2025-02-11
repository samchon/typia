import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_functional_isFunction_DynamicNever = _test_functional_isFunction(
  "DynamicNever"
)(DynamicNever)(
  (p: (input: DynamicNever) => DynamicNever) => typia.functional.isFunction(p),
)