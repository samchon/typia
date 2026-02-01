import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicArray } from "../../structures/DynamicArray";

import { TypeGuardError } from "typia";

export const test_createAssert_DynamicArray = (): void => _test_assert(TypeGuardError)(
    "DynamicArray",
)<DynamicArray>(
    DynamicArray
)(typia.createAssert<DynamicArray>());
