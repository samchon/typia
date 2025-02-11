import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { SetSimple } from "../../structures/SetSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_SetSimple = _test_assertGuard(CustomGuardError)(
    "SetSimple",
)<SetSimple>(
    SetSimple
)((input) => typia.assertGuard<SetSimple>(input, (p) => new CustomGuardError(p)));
