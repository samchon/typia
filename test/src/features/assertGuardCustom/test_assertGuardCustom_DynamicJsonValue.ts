import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_DynamicJsonValue = (): void => _test_assertGuard(CustomGuardError)(
    "DynamicJsonValue",
)<DynamicJsonValue>(
    DynamicJsonValue
)((input) => typia.assertGuard<DynamicJsonValue>(input, (p) => new CustomGuardError(p)));
