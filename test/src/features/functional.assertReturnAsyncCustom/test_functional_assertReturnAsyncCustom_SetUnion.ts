import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { SetUnion } from "../../structures/SetUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_SetUnion = (): Promise<void> => _test_functional_assertReturnAsync(CustomGuardError)(
  "SetUnion"
)(SetUnion)(
  (p: (input: SetUnion) => Promise<SetUnion>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)