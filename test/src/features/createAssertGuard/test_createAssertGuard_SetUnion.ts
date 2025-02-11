import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { SetUnion } from "../../structures/SetUnion";

export const test_createAssertGuard_SetUnion = _test_assertGuard(
  TypeGuardError,
)("SetUnion")<SetUnion>(SetUnion)(typia.createAssertGuard<SetUnion>());
