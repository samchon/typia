import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_DynamicJsonValue = _test_functional_assertParametersAsync(TypeGuardError)(
  "DynamicJsonValue"
)(DynamicJsonValue)(
  (p: (input: DynamicJsonValue) => Promise<DynamicJsonValue>) =>
    typia.functional.assertParameters(p),
)