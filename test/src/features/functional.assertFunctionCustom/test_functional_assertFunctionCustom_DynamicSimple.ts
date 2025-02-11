import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { DynamicSimple } from "../../structures/DynamicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_DynamicSimple = _test_functional_assertFunction(CustomGuardError)(
  "DynamicSimple"
)(DynamicSimple)(
  (p: (input: DynamicSimple) => DynamicSimple) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)