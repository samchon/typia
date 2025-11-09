import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonNull } from "../../structures/ToJsonNull";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_ToJsonNull = (): void => _test_assertEquals(TypeGuardError)(
    "ToJsonNull",
)<ToJsonNull>(
    ToJsonNull
)(typia.createAssertEquals<ToJsonNull>());
