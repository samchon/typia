import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ToJsonAtomicSimple = (): void => _test_assert(CustomGuardError)(
    "ToJsonAtomicSimple",
)<ToJsonAtomicSimple>(
    ToJsonAtomicSimple
)((input) => typia.assert<ToJsonAtomicSimple>(input, (p) => new CustomGuardError(p)));
