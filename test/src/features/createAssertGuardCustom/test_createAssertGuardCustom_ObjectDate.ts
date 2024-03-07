import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectDate } from "../../structures/ObjectDate";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ObjectDate = _test_assertGuard(
  CustomGuardError,
)("ObjectDate")<ObjectDate>(ObjectDate)(
  typia.createAssertGuard<ObjectDate>((p) => new CustomGuardError(p)),
);
