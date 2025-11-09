import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicTag } from "../../structures/DynamicTag";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_DynamicTag = (): void => _test_assertGuard(TypeGuardError)(
    "DynamicTag",
)<DynamicTag>(
    DynamicTag
)(typia.createAssertGuard<DynamicTag>());
