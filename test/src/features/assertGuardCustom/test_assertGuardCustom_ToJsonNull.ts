import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_assertGuardCustom_ToJsonNull = _test_assertGuard(
  CustomGuardError,
)("ToJsonNull")<ToJsonNull>(ToJsonNull)((input) =>
  typia.assertGuard<ToJsonNull>(input, (p) => new CustomGuardError(p)),
);
