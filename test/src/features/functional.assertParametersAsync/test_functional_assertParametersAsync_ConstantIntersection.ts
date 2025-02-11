import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_assertParametersAsync_ConstantIntersection =
  _test_functional_assertParametersAsync(TypeGuardError)(
    "ConstantIntersection",
  )(ConstantIntersection)(
    (p: (input: ConstantIntersection) => Promise<ConstantIntersection>) =>
      typia.functional.assertParameters(p),
  );
