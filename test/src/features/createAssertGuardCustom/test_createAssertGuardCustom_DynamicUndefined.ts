import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_DynamicUndefined = _test_assertGuard(
  CustomGuardError,
)("DynamicUndefined")<DynamicUndefined>(DynamicUndefined)(
  typia.createAssertGuard<DynamicUndefined>((p) => new CustomGuardError(p)),
);
