import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonArray } from "../../structures/ToJsonArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_ToJsonArray = _test_assertEquals(CustomGuardError)(
    "ToJsonArray",
)<ToJsonArray>(
    ToJsonArray
)(typia.createAssertEquals<ToJsonArray>((p) => new CustomGuardError(p)));
