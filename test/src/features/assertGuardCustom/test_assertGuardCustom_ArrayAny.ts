import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_assertGuardCustom_ArrayAny = _test_assertGuard(
  CustomGuardError,
)("ArrayAny")<ArrayAny>(ArrayAny)((input) =>
  typia.assertGuard<ArrayAny>(input, (p) => new CustomGuardError(p)),
);
