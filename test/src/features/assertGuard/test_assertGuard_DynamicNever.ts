import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicNever } from "../../structures/DynamicNever";

import { TypeGuardError } from "typia";

export const test_assertGuard_DynamicNever = (): void => _test_assertGuard(TypeGuardError)(
    "DynamicNever",
)<DynamicNever>(
    DynamicNever
)((input) => typia.assertGuard<DynamicNever>(input));
