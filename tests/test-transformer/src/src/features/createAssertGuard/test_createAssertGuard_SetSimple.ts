import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { SetSimple } from "../../structures/SetSimple";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_SetSimple = (): void => _test_assertGuard(TypeGuardError)(
    "SetSimple",
)<SetSimple>(
    SetSimple
)(typia.createAssertGuard<SetSimple>());
