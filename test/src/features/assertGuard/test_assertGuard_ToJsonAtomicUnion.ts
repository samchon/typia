import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

import { TypeGuardError } from "typia";

export const test_assertGuard_ToJsonAtomicUnion = (): void => _test_assertGuard(TypeGuardError)(
    "ToJsonAtomicUnion",
)<ToJsonAtomicUnion>(
    ToJsonAtomicUnion
)((input) => typia.assertGuard<ToJsonAtomicUnion>(input));
