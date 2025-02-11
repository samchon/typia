import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicConstant } from "../../structures/DynamicConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_DynamicConstant = _test_assert(CustomGuardError)(
    "DynamicConstant",
)<DynamicConstant>(
    DynamicConstant
)(typia.createAssert<DynamicConstant>((p) => new CustomGuardError(p)));
