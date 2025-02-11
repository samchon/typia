import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersAsyncCustom_ConstantIntersection = _test_functional_assertEqualsParametersAsync(CustomGuardError)(
  "ConstantIntersection"
)(ConstantIntersection)(
  (p: (input: ConstantIntersection) => Promise<ConstantIntersection>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)