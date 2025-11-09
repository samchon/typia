import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicTag } from "../../structures/DynamicTag";

import { TypeGuardError } from "typia";

export const test_createAssert_DynamicTag = (): void => _test_assert(TypeGuardError)(
    "DynamicTag",
)<DynamicTag>(
    DynamicTag
)(typia.createAssert<DynamicTag>());
