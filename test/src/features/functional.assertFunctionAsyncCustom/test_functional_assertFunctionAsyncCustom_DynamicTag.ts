import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { DynamicTag } from "../../structures/DynamicTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_DynamicTag = (): Promise<void> => _test_functional_assertFunctionAsync(CustomGuardError)(
  "DynamicTag"
)(DynamicTag)(
  (p: (input: DynamicTag) => Promise<DynamicTag>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)