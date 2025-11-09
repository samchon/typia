import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicArray } from "../../structures/DynamicArray";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_DynamicArray = (): void => _test_assertGuard(TypeGuardError)(
    "DynamicArray",
)<DynamicArray>(
    DynamicArray
)(typia.createAssertGuard<DynamicArray>());
