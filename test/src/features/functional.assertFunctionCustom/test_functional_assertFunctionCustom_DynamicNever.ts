import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { DynamicNever } from "../../structures/DynamicNever";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_DynamicNever = _test_functional_assertFunction(CustomGuardError)(
  "DynamicNever"
)(DynamicNever)(
  (p: (input: DynamicNever) => DynamicNever) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)