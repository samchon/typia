import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_DynamicUndefined = _test_assertGuard(TypeGuardError)(
    "DynamicUndefined",
)<DynamicUndefined>(
    DynamicUndefined
)(typia.createAssertGuard<DynamicUndefined>());
