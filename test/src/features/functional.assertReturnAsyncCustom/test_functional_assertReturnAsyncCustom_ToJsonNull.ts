import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ToJsonNull } from "../../structures/ToJsonNull";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_ToJsonNull = (): Promise<void> => _test_functional_assertReturnAsync(CustomGuardError)(
  "ToJsonNull"
)(ToJsonNull)(
  (p: (input: ToJsonNull) => Promise<ToJsonNull>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)