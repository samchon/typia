import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { SetUnion } from "../../structures/SetUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_SetUnion = (): Promise<void> => _test_functional_assertFunctionAsync(CustomGuardError)(
  "SetUnion"
)(SetUnion)(
  (p: (input: SetUnion) => Promise<SetUnion>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)