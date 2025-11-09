import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicSimple } from "../../structures/DynamicSimple";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_DynamicSimple = (): void => _test_assertGuard(TypeGuardError)(
    "DynamicSimple",
)<DynamicSimple>(
    DynamicSimple
)(typia.createAssertGuard<DynamicSimple>());
