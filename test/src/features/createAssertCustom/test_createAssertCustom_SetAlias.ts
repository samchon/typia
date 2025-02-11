import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { SetAlias } from "../../structures/SetAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_SetAlias = _test_assert(CustomGuardError)(
    "SetAlias",
)<SetAlias>(
    SetAlias
)(typia.createAssert<SetAlias>((p) => new CustomGuardError(p)));
