import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_assertReturnAsync_ConstantIntersection =
  _test_functional_assertReturnAsync(TypeGuardError)("ConstantIntersection")(
    ConstantIntersection,
  )((p: (input: ConstantIntersection) => Promise<ConstantIntersection>) =>
    typia.functional.assertReturn(p),
  );
