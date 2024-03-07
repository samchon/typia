import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_ConstantIntersection = _test_assertGuard(
  TypeGuardError,
)("ConstantIntersection")<ConstantIntersection>(ConstantIntersection)(
  typia.createAssertGuard<ConstantIntersection>(),
);
