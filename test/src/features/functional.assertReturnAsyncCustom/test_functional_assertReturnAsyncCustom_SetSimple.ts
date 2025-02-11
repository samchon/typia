import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { SetSimple } from "../../structures/SetSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_SetSimple = _test_functional_assertReturnAsync(CustomGuardError)(
  "SetSimple"
)(SetSimple)(
  (p: (input: SetSimple) => Promise<SetSimple>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)