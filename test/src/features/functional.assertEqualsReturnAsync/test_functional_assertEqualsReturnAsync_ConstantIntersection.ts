import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_functional_assertEqualsReturnAsync_ConstantIntersection =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)(
    "ConstantIntersection",
  )(ConstantIntersection)(
    (p: (input: ConstantIntersection) => Promise<ConstantIntersection>) =>
      typia.functional.assertEqualsReturn(p),
  );
