import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_validateReturn_DynamicTemplate = (): void => _test_functional_validateReturn(
  "DynamicTemplate"
)(DynamicTemplate)(
  (p: (input: DynamicTemplate) => DynamicTemplate) => typia.functional.validateReturn(p),
)