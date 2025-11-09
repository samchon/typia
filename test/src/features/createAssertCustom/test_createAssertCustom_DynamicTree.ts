import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicTree } from "../../structures/DynamicTree";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_DynamicTree = (): void => _test_assert(CustomGuardError)(
    "DynamicTree",
)<DynamicTree>(
    DynamicTree
)(typia.createAssert<DynamicTree>((p) => new CustomGuardError(p)));
