import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonNull } from "../../structures/ToJsonNull";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ToJsonNull = _test_assertGuard(CustomGuardError)(
    "ToJsonNull",
)<ToJsonNull>(
    ToJsonNull
)(typia.createAssertGuard<ToJsonNull>((p) => new CustomGuardError(p)));
