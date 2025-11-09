import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_functional_isFunction_DynamicUndefined = (): void => _test_functional_isFunction(
  "DynamicUndefined"
)(DynamicUndefined)(
  (p: (input: DynamicUndefined) => DynamicUndefined) => typia.functional.isFunction(p),
)