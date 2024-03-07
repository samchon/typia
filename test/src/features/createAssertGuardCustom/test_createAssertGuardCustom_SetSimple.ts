import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { SetSimple } from "../../structures/SetSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_SetSimple = _test_assertGuard(
  CustomGuardError,
)("SetSimple")<SetSimple>(SetSimple)(
  typia.createAssertGuard<SetSimple>((p) => new CustomGuardError(p)),
);
