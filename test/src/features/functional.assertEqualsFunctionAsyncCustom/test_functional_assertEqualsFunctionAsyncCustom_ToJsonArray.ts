import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ToJsonArray } from "../../structures/ToJsonArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_ToJsonArray = (): Promise<void> => _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
  "ToJsonArray"
)(ToJsonArray)(
  (p: (input: ToJsonArray) => Promise<ToJsonArray>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)