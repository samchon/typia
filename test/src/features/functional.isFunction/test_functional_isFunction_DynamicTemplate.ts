import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_isFunction_DynamicTemplate = _test_functional_isFunction(
  "DynamicTemplate"
)(DynamicTemplate)(
  (p: (input: DynamicTemplate) => DynamicTemplate) => typia.functional.isFunction(p),
)