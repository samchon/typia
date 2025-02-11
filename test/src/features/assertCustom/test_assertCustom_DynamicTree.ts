import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicTree } from "../../structures/DynamicTree";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_DynamicTree = _test_assert(CustomGuardError)(
    "DynamicTree",
)<DynamicTree>(
    DynamicTree
)((input) => typia.assert<DynamicTree>(input, (p) => new CustomGuardError(p)));
