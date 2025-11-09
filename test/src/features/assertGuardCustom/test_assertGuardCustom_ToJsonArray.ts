import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonArray } from "../../structures/ToJsonArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ToJsonArray = (): void => _test_assertGuard(CustomGuardError)(
    "ToJsonArray",
)<ToJsonArray>(
    ToJsonArray
)((input) => typia.assertGuard<ToJsonArray>(input, (p) => new CustomGuardError(p)));
