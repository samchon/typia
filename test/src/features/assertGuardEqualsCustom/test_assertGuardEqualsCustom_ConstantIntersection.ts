import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_assertGuardEqualsCustom_ConstantIntersection =
  _test_assertGuardEquals(CustomGuardError)(
    "ConstantIntersection",
  )<ConstantIntersection>(ConstantIntersection)((input) =>
    typia.assertGuardEquals<ConstantIntersection>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
