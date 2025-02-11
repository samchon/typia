import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { SetUnion } from "../../structures/SetUnion";

export const test_createAssertGuardCustom_SetUnion = _test_assertGuard(
  CustomGuardError,
)("SetUnion")<SetUnion>(SetUnion)(
  typia.createAssertGuard<SetUnion>((p) => new CustomGuardError(p)),
);
