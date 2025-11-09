import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_functional_isParameters_DynamicJsonValue = (): void => _test_functional_isParameters(
  "DynamicJsonValue"
)(DynamicJsonValue)(
  (p: (input: DynamicJsonValue) => DynamicJsonValue) => typia.functional.isParameters(p),
)