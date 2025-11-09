import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ToJsonNull } from "../../structures/ToJsonNull";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_ToJsonNull = (): Promise<void> => _test_functional_assertFunctionAsync(CustomGuardError)(
  "ToJsonNull"
)(ToJsonNull)(
  (p: (input: ToJsonNull) => Promise<ToJsonNull>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)