import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectSimple } from "../../structures/ObjectSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ObjectSimple = _test_assertGuard(
  CustomGuardError,
)("ObjectSimple")<ObjectSimple>(ObjectSimple)(
  typia.createAssertGuard<ObjectSimple>((p) => new CustomGuardError(p)),
);
