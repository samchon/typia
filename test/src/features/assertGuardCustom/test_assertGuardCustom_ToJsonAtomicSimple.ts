import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ToJsonAtomicSimple = (): void => _test_assertGuard(CustomGuardError)(
    "ToJsonAtomicSimple",
)<ToJsonAtomicSimple>(
    ToJsonAtomicSimple
)((input) => typia.assertGuard<ToJsonAtomicSimple>(input, (p) => new CustomGuardError(p)));
