import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ToJsonArray } from "../../structures/ToJsonArray";

import { TypeGuardError } from "typia";

export const test_createAssert_ToJsonArray = (): void => _test_assert(TypeGuardError)(
    "ToJsonArray",
)<ToJsonArray>(
    ToJsonArray
)(typia.createAssert<ToJsonArray>());
