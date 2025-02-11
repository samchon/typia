import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicSimple } from "../../structures/DynamicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_DynamicSimple = _test_assertGuard(CustomGuardError)(
    "DynamicSimple",
)<DynamicSimple>(
    DynamicSimple
)(typia.createAssertGuard<DynamicSimple>((p) => new CustomGuardError(p)));
