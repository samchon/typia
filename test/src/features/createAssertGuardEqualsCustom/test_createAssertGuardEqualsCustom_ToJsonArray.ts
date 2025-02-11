import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ToJsonArray } from "../../structures/ToJsonArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_ToJsonArray = _test_assertGuardEquals(CustomGuardError)(
    "ToJsonArray",
)<ToJsonArray>(
    ToJsonArray
)(typia.createAssertGuardEquals<ToJsonArray>((p) => new CustomGuardError(p)));
