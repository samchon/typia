import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_assertGuardCustom_ToJsonArray = _test_assertGuard(
  CustomGuardError,
)("ToJsonArray")<ToJsonArray>(ToJsonArray)((input) =>
  typia.assertGuard<ToJsonArray>(input, (p) => new CustomGuardError(p)),
);
