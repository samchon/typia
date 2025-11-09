import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicTree } from "../../structures/DynamicTree";

import { TypeGuardError } from "typia";

export const test_createAssert_DynamicTree = (): void => _test_assert(TypeGuardError)(
    "DynamicTree",
)<DynamicTree>(
    DynamicTree
)(typia.createAssert<DynamicTree>());
