import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ToJsonArray } from "../../structures/ToJsonArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnAsyncCustom_ToJsonArray = (): Promise<void> => _test_functional_assertEqualsReturnAsync(CustomGuardError)(
  "ToJsonArray"
)(ToJsonArray)(
  (p: (input: ToJsonArray) => Promise<ToJsonArray>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)