import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_assertEqualsFunctionAsync_ConstantIntersection =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
    "ConstantIntersection",
  )(ConstantIntersection)(
    (p: (input: ConstantIntersection) => Promise<ConstantIntersection>) =>
      typia.functional.assertEqualsFunction(p),
  );
