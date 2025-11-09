import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_DynamicTemplate = (): Promise<void> => _test_functional_assertFunctionAsync(CustomGuardError)(
  "DynamicTemplate"
)(DynamicTemplate)(
  (p: (input: DynamicTemplate) => Promise<DynamicTemplate>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)