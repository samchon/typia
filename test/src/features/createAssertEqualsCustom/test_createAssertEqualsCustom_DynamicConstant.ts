import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_createAssertEqualsCustom_DynamicConstant = _test_assertEquals(
  CustomGuardError,
)("DynamicConstant")<DynamicConstant>(DynamicConstant)(
  typia.createAssertEquals<DynamicConstant>((p) => new CustomGuardError(p)),
);
