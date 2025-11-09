import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicConstant } from "../../structures/DynamicConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_DynamicConstant = (): void => _test_assertGuard(CustomGuardError)(
    "DynamicConstant",
)<DynamicConstant>(
    DynamicConstant
)(typia.createAssertGuard<DynamicConstant>((p) => new CustomGuardError(p)));
