import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_createAssertCustom_ToJsonArray = _test_assert(
  CustomGuardError,
)("ToJsonArray")<ToJsonArray>(ToJsonArray)(
  typia.createAssert<ToJsonArray>((p) => new CustomGuardError(p)),
);
