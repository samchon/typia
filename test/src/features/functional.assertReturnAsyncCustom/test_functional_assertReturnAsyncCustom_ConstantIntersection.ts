import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_assertReturnAsyncCustom_ConstantIntersection =
  _test_functional_assertReturnAsync(CustomGuardError)("ConstantIntersection")(
    ConstantIntersection,
  )((p: (input: ConstantIntersection) => Promise<ConstantIntersection>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
