import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayAny } from "../../structures/ArrayAny";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ArrayAny = _test_assertGuard(
  CustomGuardError,
)("ArrayAny")<ArrayAny>(ArrayAny)(
  typia.createAssertGuard<ArrayAny>((p) => new CustomGuardError(p)),
);
