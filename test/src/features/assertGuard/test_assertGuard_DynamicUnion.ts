import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicUnion } from "../../structures/DynamicUnion";

import { TypeGuardError } from "typia";

export const test_assertGuard_DynamicUnion = (): void => _test_assertGuard(TypeGuardError)(
    "DynamicUnion",
)<DynamicUnion>(
    DynamicUnion
)((input) => typia.assertGuard<DynamicUnion>(input));
