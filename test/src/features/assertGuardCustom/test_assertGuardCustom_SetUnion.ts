import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { SetUnion } from "../../structures/SetUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_SetUnion = _test_assertGuard(
  CustomGuardError,
)("SetUnion")<SetUnion>(SetUnion)((input) =>
  typia.assertGuard<SetUnion>(input, (p) => new CustomGuardError(p)),
);
