import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { SetSimple } from "../../structures/SetSimple";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_SetSimple = (): void => _test_functional_assertParameters(TypeGuardError)(
  "SetSimple"
)(SetSimple)(
  (p: (input: SetSimple) => SetSimple) => typia.functional.assertParameters(p),
)