import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { SetUnion } from "../../structures/SetUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertFunction_SetUnion = (): void => _test_functional_assertFunction(TypeGuardError)(
  "SetUnion"
)(SetUnion)(
  (p: (input: SetUnion) => SetUnion) => typia.functional.assertFunction(p),
)