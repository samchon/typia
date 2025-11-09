import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonNull } from "../../structures/ToJsonNull";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ToJsonNull = (): void => _test_assertGuard(CustomGuardError)(
    "ToJsonNull",
)<ToJsonNull>(
    ToJsonNull
)((input) => typia.assertGuard<ToJsonNull>(input, (p) => new CustomGuardError(p)));
