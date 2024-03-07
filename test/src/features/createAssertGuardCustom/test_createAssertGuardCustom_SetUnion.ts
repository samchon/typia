import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { SetUnion } from "../../structures/SetUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_SetUnion = _test_assertGuard(
  CustomGuardError,
)("SetUnion")<SetUnion>(SetUnion)(
  typia.createAssertGuard<SetUnion>((p) => new CustomGuardError(p)),
);
