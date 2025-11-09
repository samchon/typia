import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_ToJsonAtomicSimple = (): void => _test_assertEquals(CustomGuardError)(
    "ToJsonAtomicSimple",
)<ToJsonAtomicSimple>(
    ToJsonAtomicSimple
)((input) => typia.assertEquals<ToJsonAtomicSimple>(input, (p) => new CustomGuardError(p)));
