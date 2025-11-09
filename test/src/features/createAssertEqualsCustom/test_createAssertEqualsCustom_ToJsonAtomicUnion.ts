import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_ToJsonAtomicUnion = (): void => _test_assertEquals(CustomGuardError)(
    "ToJsonAtomicUnion",
)<ToJsonAtomicUnion>(
    ToJsonAtomicUnion
)(typia.createAssertEquals<ToJsonAtomicUnion>((p) => new CustomGuardError(p)));
