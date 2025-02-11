import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicSimple } from "../../structures/DynamicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_DynamicSimple = _test_assertGuard(CustomGuardError)(
    "DynamicSimple",
)<DynamicSimple>(
    DynamicSimple
)((input) => typia.assertGuard<DynamicSimple>(input, (p) => new CustomGuardError(p)));
