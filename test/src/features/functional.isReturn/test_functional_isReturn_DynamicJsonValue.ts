import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_functional_isReturn_DynamicJsonValue = (): void => _test_functional_isReturn(
  "DynamicJsonValue"
)(DynamicJsonValue)(
  (p: (input: DynamicJsonValue) => DynamicJsonValue) => typia.functional.isReturn(p),
)