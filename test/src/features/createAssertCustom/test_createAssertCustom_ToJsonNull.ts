import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_createAssertCustom_ToJsonNull = _test_assert(
  CustomGuardError,
)("ToJsonNull")<ToJsonNull>(ToJsonNull)(
  typia.createAssert<ToJsonNull>((p) => new CustomGuardError(p)),
);
