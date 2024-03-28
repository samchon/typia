import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { SetAlias } from "../../structures/SetAlias";

export const test_createAssertGuardCustom_SetAlias = _test_assertGuard(
  CustomGuardError,
)("SetAlias")<SetAlias>(SetAlias)(
  typia.createAssertGuard<SetAlias>((p) => new CustomGuardError(p)),
);
