import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_assertGuard_ConstantIntersection = _test_assertGuard(
  TypeGuardError,
)("ConstantIntersection")<ConstantIntersection>(ConstantIntersection)((input) =>
  typia.assertGuard<ConstantIntersection>(input),
);
