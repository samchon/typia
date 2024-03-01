import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { SetAlias } from "../../structures/SetAlias";

export const test_createAssertGuard_SetAlias = _test_assertGuard(
  TypeGuardError,
)("SetAlias")<SetAlias>(SetAlias)(typia.createAssertGuard<SetAlias>());
