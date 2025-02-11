import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_assertFunctionAsync_ConstantIntersection =
  _test_functional_assertFunctionAsync(TypeGuardError)("ConstantIntersection")(
    ConstantIntersection,
  )((p: (input: ConstantIntersection) => Promise<ConstantIntersection>) =>
    typia.functional.assertFunction(p),
  );
