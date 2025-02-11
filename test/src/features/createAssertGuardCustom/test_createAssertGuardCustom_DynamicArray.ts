import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicArray } from "../../structures/DynamicArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_DynamicArray = _test_assertGuard(CustomGuardError)(
    "DynamicArray",
)<DynamicArray>(
    DynamicArray
)(typia.createAssertGuard<DynamicArray>((p) => new CustomGuardError(p)));
