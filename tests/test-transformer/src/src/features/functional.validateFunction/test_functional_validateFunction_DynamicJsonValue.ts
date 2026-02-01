import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_functional_validateFunction_DynamicJsonValue = (): void => _test_functional_validateFunction(
  "DynamicJsonValue"
)(DynamicJsonValue)(
  (p: (input: DynamicJsonValue) => DynamicJsonValue) => typia.functional.validateFunction(p),
)