import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_ConstantIntersection = _test_assertEquals(
  CustomGuardError,
)("ConstantIntersection")<ConstantIntersection>(ConstantIntersection)((input) =>
  typia.assertEquals<ConstantIntersection>(
    input,
    (p) => new CustomGuardError(p),
  ),
);
