import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_assertParametersAsyncCustom_ConstantIntersection =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)(
      "ConstantIntersection",
    )(ConstantIntersection)(
      (p: (input: ConstantIntersection) => Promise<ConstantIntersection>) =>
        typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
