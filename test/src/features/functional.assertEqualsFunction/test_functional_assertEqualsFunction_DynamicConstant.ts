import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { DynamicConstant } from "../../structures/DynamicConstant";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunction_DynamicConstant = (): void => _test_functional_assertEqualsFunction(TypeGuardError)(
  "DynamicConstant"
)(DynamicConstant)(
  (p: (input: DynamicConstant) => DynamicConstant) => typia.functional.assertEqualsFunction(p),
)