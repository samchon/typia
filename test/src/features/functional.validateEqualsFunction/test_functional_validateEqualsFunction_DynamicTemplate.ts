import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_validateEqualsFunction_DynamicTemplate = _test_functional_validateEqualsFunction(
  "DynamicTemplate"
)(DynamicTemplate)(
  (p: (input: DynamicTemplate) => DynamicTemplate) => typia.functional.validateEqualsFunction(p),
)