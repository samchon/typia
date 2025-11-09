import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { SetSimple } from "../../structures/SetSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_SetSimple = (): void => _test_functional_assertParameters(CustomGuardError)(
  "SetSimple"
)(SetSimple)(
  (p: (input: SetSimple) => SetSimple) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)