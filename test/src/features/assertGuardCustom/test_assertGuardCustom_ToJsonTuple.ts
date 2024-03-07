import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ToJsonTuple = _test_assertGuard(
  CustomGuardError,
)("ToJsonTuple")<ToJsonTuple>(ToJsonTuple)((input) =>
  typia.assertGuard<ToJsonTuple>(input, (p) => new CustomGuardError(p)),
);
