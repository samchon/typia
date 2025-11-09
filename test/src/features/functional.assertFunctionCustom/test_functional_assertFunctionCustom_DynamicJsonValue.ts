import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_DynamicJsonValue = (): void => _test_functional_assertFunction(CustomGuardError)(
  "DynamicJsonValue"
)(DynamicJsonValue)(
  (p: (input: DynamicJsonValue) => DynamicJsonValue) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)