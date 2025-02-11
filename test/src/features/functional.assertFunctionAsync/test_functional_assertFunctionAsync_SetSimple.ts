import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { SetSimple } from "../../structures/SetSimple";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_SetSimple = _test_functional_assertFunctionAsync(TypeGuardError)(
  "SetSimple"
)(SetSimple)(
  (p: (input: SetSimple) => Promise<SetSimple>) =>
    typia.functional.assertFunction(p),
)