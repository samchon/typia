import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_ToJsonAtomicUnion = (): void => _test_assertGuardEquals(CustomGuardError)(
    "ToJsonAtomicUnion",
)<ToJsonAtomicUnion>(
    ToJsonAtomicUnion
)((input) => typia.assertGuardEquals<ToJsonAtomicUnion>(input, (p) => new CustomGuardError(p)));
