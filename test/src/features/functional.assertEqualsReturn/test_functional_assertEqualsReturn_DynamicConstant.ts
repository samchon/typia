import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { DynamicConstant } from "../../structures/DynamicConstant";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturn_DynamicConstant = _test_functional_assertEqualsReturn(TypeGuardError)(
  "DynamicConstant"
)(DynamicConstant)(
  (p: (input: DynamicConstant) => DynamicConstant) => typia.functional.assertEqualsReturn(p),
)