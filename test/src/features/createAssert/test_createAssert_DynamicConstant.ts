import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicConstant } from "../../structures/DynamicConstant";

import { TypeGuardError } from "typia";

export const test_createAssert_DynamicConstant = (): void => _test_assert(TypeGuardError)(
    "DynamicConstant",
)<DynamicConstant>(
    DynamicConstant
)(typia.createAssert<DynamicConstant>());
