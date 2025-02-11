import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicTree } from "../../structures/DynamicTree";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_DynamicTree = _test_assertGuard(CustomGuardError)(
    "DynamicTree",
)<DynamicTree>(
    DynamicTree
)((input) => typia.assertGuard<DynamicTree>(input, (p) => new CustomGuardError(p)));
