import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonNull } from "../../structures/ToJsonNull";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_ToJsonNull = _test_assertGuard(TypeGuardError)(
    "ToJsonNull",
)<ToJsonNull>(
    ToJsonNull
)(typia.createAssertGuard<ToJsonNull>());
