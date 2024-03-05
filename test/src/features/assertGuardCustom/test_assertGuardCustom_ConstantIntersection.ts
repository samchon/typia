import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_assertGuardCustom_ConstantIntersection = _test_assertGuard(
  CustomGuardError,
)("ConstantIntersection")<ConstantIntersection>(ConstantIntersection)((input) =>
  typia.assertGuard<ConstantIntersection>(
    input,
    (p) => new CustomGuardError(p),
  ),
);
