import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ToJsonNull } from "../../structures/ToJsonNull";

import { TypeGuardError } from "typia";

export const test_createAssert_ToJsonNull = _test_assert(TypeGuardError)(
    "ToJsonNull",
)<ToJsonNull>(
    ToJsonNull
)(typia.createAssert<ToJsonNull>());
