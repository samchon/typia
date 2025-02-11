import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { SetAlias } from "../../structures/SetAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_SetAlias = _test_assertGuard(CustomGuardError)(
    "SetAlias",
)<SetAlias>(
    SetAlias
)((input) => typia.assertGuard<SetAlias>(input, (p) => new CustomGuardError(p)));
