import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_assertEqualsCustom_DynamicConstant = _test_assertEquals(
  CustomGuardError,
)("DynamicConstant")<DynamicConstant>(DynamicConstant)((input) =>
  typia.assertEquals<DynamicConstant>(input, (p) => new CustomGuardError(p)),
);
