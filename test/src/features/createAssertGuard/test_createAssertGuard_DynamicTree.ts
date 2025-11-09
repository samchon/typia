import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicTree } from "../../structures/DynamicTree";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_DynamicTree = (): void => _test_assertGuard(TypeGuardError)(
    "DynamicTree",
)<DynamicTree>(
    DynamicTree
)(typia.createAssertGuard<DynamicTree>());
