import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

import { TypeGuardError } from "typia";

export const test_createAssert_DynamicJsonValue = _test_assert(TypeGuardError)(
    "DynamicJsonValue",
)<DynamicJsonValue>(
    DynamicJsonValue
)(typia.createAssert<DynamicJsonValue>());
