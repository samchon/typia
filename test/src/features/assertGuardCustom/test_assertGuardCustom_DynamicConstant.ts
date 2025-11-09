import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicConstant } from "../../structures/DynamicConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_DynamicConstant = (): void => _test_assertGuard(CustomGuardError)(
    "DynamicConstant",
)<DynamicConstant>(
    DynamicConstant
)((input) => typia.assertGuard<DynamicConstant>(input, (p) => new CustomGuardError(p)));
