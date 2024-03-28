import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { SetSimple } from "../../structures/SetSimple";

export const test_createAssertGuard_SetSimple = _test_assertGuard(
  TypeGuardError,
)("SetSimple")<SetSimple>(SetSimple)(typia.createAssertGuard<SetSimple>());
