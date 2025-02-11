import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_assertEqualsParametersAsync_ConstantIntersection =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "ConstantIntersection",
  )(ConstantIntersection)(
    (p: (input: ConstantIntersection) => Promise<ConstantIntersection>) =>
      typia.functional.assertEqualsParameters(p),
  );
