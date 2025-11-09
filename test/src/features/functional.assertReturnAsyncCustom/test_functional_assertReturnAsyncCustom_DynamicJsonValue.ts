import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_DynamicJsonValue = (): Promise<void> => _test_functional_assertReturnAsync(CustomGuardError)(
  "DynamicJsonValue"
)(DynamicJsonValue)(
  (p: (input: DynamicJsonValue) => Promise<DynamicJsonValue>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)