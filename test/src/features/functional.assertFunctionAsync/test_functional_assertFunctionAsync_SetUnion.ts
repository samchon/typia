import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { SetUnion } from "../../structures/SetUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_SetUnion = _test_functional_assertFunctionAsync(TypeGuardError)(
  "SetUnion"
)(SetUnion)(
  (p: (input: SetUnion) => Promise<SetUnion>) =>
    typia.functional.assertFunction(p),
)