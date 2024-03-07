import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ToJsonTuple = _test_assertGuard(
  CustomGuardError,
)("ToJsonTuple")<ToJsonTuple>(ToJsonTuple)(
  typia.createAssertGuard<ToJsonTuple>((p) => new CustomGuardError(p)),
);
