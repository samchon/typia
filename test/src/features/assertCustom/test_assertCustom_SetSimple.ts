import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { SetSimple } from "../../structures/SetSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_SetSimple = _test_assert(CustomGuardError)(
    "SetSimple",
)<SetSimple>(
    SetSimple
)((input) => typia.assert<SetSimple>(input, (p) => new CustomGuardError(p)));
