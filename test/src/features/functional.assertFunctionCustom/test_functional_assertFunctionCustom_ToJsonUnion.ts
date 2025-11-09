import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_ToJsonUnion = (): void => _test_functional_assertFunction(CustomGuardError)(
  "ToJsonUnion"
)(ToJsonUnion)(
  (p: (input: ToJsonUnion) => ToJsonUnion) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)