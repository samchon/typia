import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { SetAlias } from "../../structures/SetAlias";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_SetAlias = (): Promise<void> => _test_functional_assertParametersAsync(TypeGuardError)(
  "SetAlias"
)(SetAlias)(
  (p: (input: SetAlias) => Promise<SetAlias>) =>
    typia.functional.assertParameters(p),
)