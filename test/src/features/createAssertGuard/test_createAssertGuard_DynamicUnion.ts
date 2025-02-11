import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicUnion } from "../../structures/DynamicUnion";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_DynamicUnion = _test_assertGuard(TypeGuardError)(
    "DynamicUnion",
)<DynamicUnion>(
    DynamicUnion
)(typia.createAssertGuard<DynamicUnion>());
