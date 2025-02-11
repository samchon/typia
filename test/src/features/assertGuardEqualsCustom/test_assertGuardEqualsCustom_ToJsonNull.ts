import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_assertGuardEqualsCustom_ToJsonNull = _test_assertGuardEquals(
  CustomGuardError,
)("ToJsonNull")<ToJsonNull>(ToJsonNull)((input) =>
  typia.assertGuardEquals<ToJsonNull>(input, (p) => new CustomGuardError(p)),
);
