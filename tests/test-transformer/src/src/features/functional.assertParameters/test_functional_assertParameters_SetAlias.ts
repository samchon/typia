import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { SetAlias } from "../../structures/SetAlias";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_SetAlias = (): void => _test_functional_assertParameters(TypeGuardError)(
  "SetAlias"
)(SetAlias)(
  (p: (input: SetAlias) => SetAlias) => typia.functional.assertParameters(p),
)