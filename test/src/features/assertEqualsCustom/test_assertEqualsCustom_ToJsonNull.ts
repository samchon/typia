import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_assertEqualsCustom_ToJsonNull = _test_assertEquals(
  CustomGuardError,
)("ToJsonNull")<ToJsonNull>(ToJsonNull)((input) =>
  typia.assertEquals<ToJsonNull>(input, (p) => new CustomGuardError(p)),
);
