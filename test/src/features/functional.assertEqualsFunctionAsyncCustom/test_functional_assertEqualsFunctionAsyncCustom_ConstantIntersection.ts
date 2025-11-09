import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_assertEqualsFunctionAsyncCustom_ConstantIntersection =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
      "ConstantIntersection",
    )(ConstantIntersection)(
      (p: (input: ConstantIntersection) => Promise<ConstantIntersection>) =>
        typia.functional.assertEqualsFunction(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
