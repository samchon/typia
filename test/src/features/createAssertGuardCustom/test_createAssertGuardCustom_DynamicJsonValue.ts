import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_DynamicJsonValue = _test_assertGuard(CustomGuardError)(
    "DynamicJsonValue",
)<DynamicJsonValue>(
    DynamicJsonValue
)(typia.createAssertGuard<DynamicJsonValue>((p) => new CustomGuardError(p)));
