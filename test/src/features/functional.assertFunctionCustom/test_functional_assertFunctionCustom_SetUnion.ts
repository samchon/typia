import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { SetUnion } from "../../structures/SetUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_SetUnion = (): void => _test_functional_assertFunction(CustomGuardError)(
  "SetUnion"
)(SetUnion)(
  (p: (input: SetUnion) => SetUnion) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)