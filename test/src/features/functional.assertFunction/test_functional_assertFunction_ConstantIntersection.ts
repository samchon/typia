import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

import { TypeGuardError } from "typia";

export const test_functional_assertFunction_ConstantIntersection = (): void => _test_functional_assertFunction(TypeGuardError)(
  "ConstantIntersection"
)(ConstantIntersection)(
  (p: (input: ConstantIntersection) => ConstantIntersection) => typia.functional.assertFunction(p),
)