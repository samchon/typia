import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ToJsonAtomicUnion = _test_assert(CustomGuardError)(
    "ToJsonAtomicUnion",
)<ToJsonAtomicUnion>(
    ToJsonAtomicUnion
)((input) => typia.assert<ToJsonAtomicUnion>(input, (p) => new CustomGuardError(p)));
