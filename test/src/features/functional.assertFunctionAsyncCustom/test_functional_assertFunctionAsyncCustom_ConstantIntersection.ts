import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_assertFunctionAsyncCustom_ConstantIntersection =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)(
      "ConstantIntersection",
    )(ConstantIntersection)(
      (p: (input: ConstantIntersection) => Promise<ConstantIntersection>) =>
        typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
