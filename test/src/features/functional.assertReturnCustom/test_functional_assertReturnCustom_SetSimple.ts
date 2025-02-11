import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { SetSimple } from "../../structures/SetSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_SetSimple = _test_functional_assertReturn(CustomGuardError)(
  "SetSimple"
)(SetSimple)(
  (p: (input: SetSimple) => SetSimple) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)