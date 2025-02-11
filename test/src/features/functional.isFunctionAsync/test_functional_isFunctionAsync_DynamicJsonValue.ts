import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_functional_isFunctionAsync_DynamicJsonValue = _test_functional_isFunctionAsync(
  "DynamicJsonValue"
)(DynamicJsonValue)(
  (p: (input: DynamicJsonValue) => Promise<DynamicJsonValue>) =>
    typia.functional.isFunction(p),
)