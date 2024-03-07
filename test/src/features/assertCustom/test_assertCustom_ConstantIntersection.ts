import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ConstantIntersection = _test_assert(
  CustomGuardError,
)("ConstantIntersection")<ConstantIntersection>(ConstantIntersection)((input) =>
  typia.assert<ConstantIntersection>(input, (p) => new CustomGuardError(p)),
);
