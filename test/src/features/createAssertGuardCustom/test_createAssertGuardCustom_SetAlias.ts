import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { SetAlias } from "../../structures/SetAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_SetAlias = _test_assertGuard(
  CustomGuardError,
)("SetAlias")<SetAlias>(SetAlias)(
  typia.createAssertGuard<SetAlias>((p) => new CustomGuardError(p)),
);
