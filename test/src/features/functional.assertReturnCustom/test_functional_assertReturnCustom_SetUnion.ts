import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { SetUnion } from "../../structures/SetUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_SetUnion = _test_functional_assertReturn(CustomGuardError)(
  "SetUnion"
)(SetUnion)(
  (p: (input: SetUnion) => SetUnion) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)