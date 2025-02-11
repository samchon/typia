import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { DynamicConstant } from "../../structures/DynamicConstant";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParameters_DynamicConstant = _test_functional_assertEqualsParameters(TypeGuardError)(
  "DynamicConstant"
)(DynamicConstant)(
  (p: (input: DynamicConstant) => DynamicConstant) => typia.functional.assertEqualsParameters(p),
)