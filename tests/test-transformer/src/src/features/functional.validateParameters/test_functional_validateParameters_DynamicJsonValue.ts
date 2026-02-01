import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_functional_validateParameters_DynamicJsonValue = (): void => _test_functional_validateParameters(
  "DynamicJsonValue"
)(DynamicJsonValue)(
  (p: (input: DynamicJsonValue) => DynamicJsonValue) => typia.functional.validateParameters(p),
)