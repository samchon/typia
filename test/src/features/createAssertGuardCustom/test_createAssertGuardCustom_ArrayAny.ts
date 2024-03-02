import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_createAssertGuardCustom_ArrayAny = _test_assertGuard(
  CustomGuardError,
)("ArrayAny")<ArrayAny>(ArrayAny)(
  typia.createAssertGuard<ArrayAny>((p) => new CustomGuardError(p)),
);
