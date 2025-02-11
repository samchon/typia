import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_assertEqualsReturnAsyncCustom_ConstantIntersection =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)(
    "ConstantIntersection",
  )(ConstantIntersection)(
    (p: (input: ConstantIntersection) => Promise<ConstantIntersection>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
