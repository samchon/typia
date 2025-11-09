import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { DynamicConstant } from "../../structures/DynamicConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_DynamicConstant = (): void => _test_assertGuardEquals(CustomGuardError)(
    "DynamicConstant",
)<DynamicConstant>(
    DynamicConstant
)(typia.createAssertGuardEquals<DynamicConstant>((p) => new CustomGuardError(p)));
