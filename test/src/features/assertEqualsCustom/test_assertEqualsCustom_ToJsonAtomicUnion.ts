import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_ToJsonAtomicUnion = (): void => _test_assertEquals(CustomGuardError)(
    "ToJsonAtomicUnion",
)<ToJsonAtomicUnion>(
    ToJsonAtomicUnion
)((input) => typia.assertEquals<ToJsonAtomicUnion>(input, (p) => new CustomGuardError(p)));
