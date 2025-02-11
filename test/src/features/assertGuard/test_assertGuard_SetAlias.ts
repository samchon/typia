import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { SetAlias } from "../../structures/SetAlias";

import { TypeGuardError } from "typia";

export const test_assertGuard_SetAlias = _test_assertGuard(TypeGuardError)(
    "SetAlias",
)<SetAlias>(
    SetAlias
)((input) => typia.assertGuard<SetAlias>(input));
