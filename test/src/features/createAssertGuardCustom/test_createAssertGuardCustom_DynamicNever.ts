import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_createAssertGuardCustom_DynamicNever = _test_assertGuard(
  CustomGuardError,
)("DynamicNever")<DynamicNever>(DynamicNever)(
  typia.createAssertGuard<DynamicNever>((p) => new CustomGuardError(p)),
);
