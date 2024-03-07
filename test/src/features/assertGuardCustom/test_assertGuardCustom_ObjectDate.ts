import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectDate } from "../../structures/ObjectDate";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ObjectDate = _test_assertGuard(
  CustomGuardError,
)("ObjectDate")<ObjectDate>(ObjectDate)((input) =>
  typia.assertGuard<ObjectDate>(input, (p) => new CustomGuardError(p)),
);
