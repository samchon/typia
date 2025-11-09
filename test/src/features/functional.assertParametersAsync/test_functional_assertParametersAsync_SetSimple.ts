import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { SetSimple } from "../../structures/SetSimple";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_SetSimple = (): Promise<void> => _test_functional_assertParametersAsync(TypeGuardError)(
  "SetSimple"
)(SetSimple)(
  (p: (input: SetSimple) => Promise<SetSimple>) =>
    typia.functional.assertParameters(p),
)