import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_ToJsonAtomicSimple = (): void => _test_assertGuardEquals(CustomGuardError)(
    "ToJsonAtomicSimple",
)<ToJsonAtomicSimple>(
    ToJsonAtomicSimple
)((input) => typia.assertGuardEquals<ToJsonAtomicSimple>(input, (p) => new CustomGuardError(p)));
