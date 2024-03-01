import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_createAssertGuardCustom_DynamicUndefined = _test_assertGuard(
  CustomGuardError,
)("DynamicUndefined")<DynamicUndefined>(DynamicUndefined)(
  typia.createAssertGuard<DynamicUndefined>((p) => new CustomGuardError(p)),
);
