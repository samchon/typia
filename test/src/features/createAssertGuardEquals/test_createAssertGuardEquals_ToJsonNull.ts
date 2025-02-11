import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ToJsonNull } from "../../structures/ToJsonNull";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_ToJsonNull = _test_assertGuardEquals(TypeGuardError)(
    "ToJsonNull",
)<ToJsonNull>(
    ToJsonNull
)(typia.createAssertGuardEquals<ToJsonNull>());
