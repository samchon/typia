import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_DynamicJsonValue = (): Promise<void> => _test_functional_assertFunctionAsync(CustomGuardError)(
  "DynamicJsonValue"
)(DynamicJsonValue)(
  (p: (input: DynamicJsonValue) => Promise<DynamicJsonValue>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)