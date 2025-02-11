import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_assertEqualsCustom_ConstantIntersection = _test_assertEquals(
  CustomGuardError,
)("ConstantIntersection")<ConstantIntersection>(ConstantIntersection)((input) =>
  typia.assertEquals<ConstantIntersection>(
    input,
    (p) => new CustomGuardError(p),
  ),
);
