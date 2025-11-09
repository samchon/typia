import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { DynamicUnion } from "../../structures/DynamicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_DynamicUnion = (): void => _test_functional_assertFunction(CustomGuardError)(
  "DynamicUnion"
)(DynamicUnion)(
  (p: (input: DynamicUnion) => DynamicUnion) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)