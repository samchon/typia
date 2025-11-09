import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_ConstantIntersection = (): Promise<void> => _test_functional_assertFunctionAsync(TypeGuardError)(
  "ConstantIntersection"
)(ConstantIntersection)(
  (p: (input: ConstantIntersection) => Promise<ConstantIntersection>) =>
    typia.functional.assertFunction(p),
)