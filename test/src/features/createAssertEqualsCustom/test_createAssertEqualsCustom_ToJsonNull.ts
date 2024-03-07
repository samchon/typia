import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonNull } from "../../structures/ToJsonNull";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_ToJsonNull = _test_assertEquals(
  CustomGuardError,
)("ToJsonNull")<ToJsonNull>(ToJsonNull)(
  typia.createAssertEquals<ToJsonNull>((p) => new CustomGuardError(p)),
);
