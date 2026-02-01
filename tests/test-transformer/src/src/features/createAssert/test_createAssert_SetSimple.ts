import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { SetSimple } from "../../structures/SetSimple";

import { TypeGuardError } from "typia";

export const test_createAssert_SetSimple = (): void => _test_assert(TypeGuardError)(
    "SetSimple",
)<SetSimple>(
    SetSimple
)(typia.createAssert<SetSimple>());
